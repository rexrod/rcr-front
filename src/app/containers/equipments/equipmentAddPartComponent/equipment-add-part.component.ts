
import { Component, Inject, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Equipment } from 'app/models/equipments/equipments.model';
import { PartControllerService } from 'app/module/parts';
import { Part } from 'app/models/equipments/parts.model';
import { Observable, ReplaySubject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { ListColumn } from 'app/core/common/list/list-column.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'fury-equipment-add-part',
  templateUrl: './equipment-add-part.component.html',
  styleUrls: ['./equipment-add-part.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EquipmentAddPartComponent implements OnInit {


  subject$: ReplaySubject<Part[]> = new ReplaySubject<Part[]>(1);
  data$: Observable<Part[]> = this.subject$.asObservable();
  @Input()
  columns: ListColumn[] = [
    { name: 'Check', property: 'checked', visible: true, isModelProperty: true },
    { name: 'Id', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nome', property: 'name', visible: true, isModelProperty: true },
    { name: 'Alimentação', property: 'charging', visible: true, isModelProperty: true },
    { name: 'Exclusivo', property: 'exclusive', visible: true, isModelProperty: true },
  ] as ListColumn[];
  dataSource: MatTableDataSource<Part> | null;
  selection = new SelectionModel<Part>(true, []);

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  form: FormGroup;
  parts: Part[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EquipmentAddPartComponent>,
    private apiPart: PartControllerService,
    public snackBar: MatSnackBar) {


    const idsParts = this.defaults.parts.map(obj => obj.id);
    const idsActivities = this.defaults.activities.map(obj => obj.id);
    // // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(this.defaults.id),
      name: new FormControl(this.defaults.name),
      idSector: new FormControl(this.defaults.sector.id),
      idFabricator: new FormControl(this.defaults.model.fabricator.id),
      idModel: new FormControl(this.defaults.model.id),
      idCompany: new FormControl(this.defaults.idCompany),
      idsParts: new FormControl(idsParts),
      idsActivities: new FormControl(idsActivities),
    });

  }

  loadData() {
    this.apiPart.getAllUsingGET()
      .subscribe(parts => {
        this.parts = parts;
        const idsParts = this.defaults.parts.map(obj => obj.id);
        // Adiciona o checked para os ids existentes
        for (let i = 0; i < this.parts.length; i++) {
          if (idsParts.includes(this.parts[i].id)) {
            this.parts[i].checked = true;
          }
        }
        this.dataSource.data = this.parts;
      },
        error => {
          if (error.status === 0 || error.status === 404) {
            this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
            });
          }
        });
  }

  ngOnInit() {
    // this.filteredOptions = this.optionControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

    this.dataSource = new MatTableDataSource();

    this.loadData();
  }

  save() {
    const parts = this.dataSource.data;
    // coleta os id que estão marcados
    const ids = [];
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].checked === true) {
        ids.push(parts[i].id);
      }
    }
    // adiciona o valor ao controle
    this.form.get('idsParts').setValue(ids);
    // envia o objeto para atualização
    const equipment = this.form.value;
    // Que a força esteja com você!
    this.dialogRef.close(equipment);
  }

  urlImg(img) {
    return img ? environment.origin.fileServer + img : '/assets/icons/baseline_add_a_photo_black_48dp.png';
  }

  onFilterChange(filterValue: string) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeChecked(row) {
    row.checked = row.checked ? false : true;
  }
}

