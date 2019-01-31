
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Fabricator } from 'app/models/fabricators/fabricators.model';
import { FabricatorControllerService } from '../../../module/fabricators';
// import { FabricatorControllerService } from '../../../module/fabricators/api/FabricatorController.service';

@Component({
  selector: 'fury-fabricator-create-update',
  templateUrl: './fabricator-create-update.component.html',
  styleUrls: ['./fabricator-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FabricatorCreateUpdateComponent implements OnInit {

  fabricator: Fabricator[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<FabricatorCreateUpdateComponent>,
              private apiFabricator: FabricatorControllerService,
              public snackBar: MatSnackBar,
              private fb: FormBuilder) {
                // load the fabricator
            //     this.apiFabricator. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.fabricator =  <Fabricator[]>noti;
            // });
            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              id: new FormControl(),
              name: new FormControl(),
              idCompany: new FormControl(),
            });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idCompany: [this.defaults.company.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Fabricator; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createFabricator();
    } else if (this.mode === 'update') {
      this.updateFabricator();
    }
  }

  createFabricator() {
        // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
        this.form.controls['idCompany'].setValue(1);
    // send the color as object instead of value
    const fabricator = this.form.value;
    this.dialogRef.close(fabricator);
  }

  updateFabricator() {
    // send the color as object instead of value
    const fabricator = this.form.value;
    fabricator.id = this.defaults.id;
    this.dialogRef.close(fabricator);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }


  verifyFabricator(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const fabricators = e;
    // O IDCOMPANY È FIXO PQ NAO TEM LOGIN AINDA
    this.apiFabricator.getByNameUsingGET(1, fabricators).
      subscribe(_fabricators => {
        if (_fabricators.length) {
          this.form.setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }
}

