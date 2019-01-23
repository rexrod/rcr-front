
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Equipment } from 'app/models/equipments/equipments.model';
import { Sector, Model, EquipmentControllerService } from 'app/module/equipments';
import { SectorControllerService } from 'app/module/companies';
import { FabricatorControllerService } from 'app/module/fabricators';
import { ModelControllerService } from 'app/module/models';
import { Fabricator } from 'app/models/equipments/fabricators.model';

@Component({
  selector: 'fury-equipment-create-update',
  templateUrl: './equipment-create-update.component.html',
  styleUrls: ['./equipment-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EquipmentCreateUpdateComponent implements OnInit {

  equipment: Equipment[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  sectors: Sector[];
  fabricators: Fabricator[];
  models: Model[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EquipmentCreateUpdateComponent>,
    private apiSector: SectorControllerService,
    private apiFabricator: FabricatorControllerService,
    private apiModel: ModelControllerService,
    private apiEquipment: EquipmentControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the sector
    this.apiSector.getAllUsingGET3().
      subscribe(sec => {
        this.sectors = <Equipment[]>sec;
      });
    // O ID DA COMPANHIA É FIXO PQ AINDA NAO TEM LOGIN
    this.apiFabricator.getFabricatorWithModelUsingGET(1).
      subscribe(fab => {
        this.fabricators = <Equipment[]>fab;
      });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      idSector: new FormControl(),
      idFabricator: new FormControl(),
      idModel: new FormControl(),
      // O ID É FIXO PORQUE AINDA NÃO TEM LOGIN
      idCompany: new FormControl(1),
      // parts: new FormControl([])
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      const ids = this.defaults.parts.map(obj => obj.id);
      // carrega os modelos antes de atribuir valores
      this.loadModels(this.defaults.model.fabricator.id);
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idSector: [this.defaults.sector.id],
        idFabricator: [this.defaults.model.fabricator.id],
        idModel: [this.defaults.model.id],
        idCompany: [this.defaults.idCompany],
        idsPart: [ids],
        // parts: [this.defaults.parts]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Equipment; // takes blank :)
    }

  }

  createOrUpdate(){
    if (this.mode === 'create') {
      this.createEquipment();
    } else if (this.mode === 'update') {
      this.updateEquipment();
    }
  }

  removeSpaces(){
    const name = this.form.get('name').value;
    this.form.get('name').setValue(name.trim().replace(/\s{2,}/g,' '));
  }

  save() {
    this.removeSpaces();
    // verifica se existe um equipamento com as mesmas configurações
    this.verifyName().then(
      _success => {
          if (_success.length) {
            this.form.get('name').setErrors({ 'invalid': true });
            this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
              duration: 10000
            });
          } else {
            this.createOrUpdate();
          }
        }
    ).catch(
      _error => {
        console.log(_error);
      }
    );

  }

  createEquipment() {
    // send the color as object instead of value
    const equipment = this.form.value;
    this.dialogRef.close(equipment);
  }

  updateEquipment() {
    // send the color as object instead of value
    const equipment = this.form.value;
    equipment.id = this.defaults.id;
    this.dialogRef.close(equipment);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  loadModels(idFabricator, change?: boolean) {
    this.apiModel.getByFabricatorUsingGET(idFabricator).subscribe(models => {
      this.models = models;
      if (change){
        this.form.get('idModel').reset();
      }
    });
  }

  verifyName(): Promise<any> {
    const name = this.form.get('name').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name) { return Promise.resolve(true); }
    
    const data = {
      name: name,
      idCompany: this.form.get('idCompany').value,
      idModel: this.form.get('idModel').value,
      idSector: this.form.get('idSector').value
    };

    const promise = this.apiEquipment.getByNameUsingPOST(data).
      toPromise();

    return promise;
  }
}

