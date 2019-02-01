import { Component, Inject, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
// import { CompanyModel } from '../../../models/companies/companies.model';
import { ViewEncapsulation } from '@angular/core';
import { Tile } from './tile.model';


@Component({
  selector: 'fury-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CompanyDetailComponent>,
  ) {
  }


  tiles: Tile[] = [
    { text: 'Nome', cols: 1, rows: 1, color: '#FAFAFA' },
    { text: 'Localização', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Contato', cols: 1, rows: 1, color: 'lightpink' },
  ];

  ngOnInit() {

  }

  closeDialog() {
    this.dialogRef.close();
  }

  get now(): string {
    const date = new Date().toLocaleDateString('en-GB');
    // Date formatting for footer
    const d = date.split('/');
    // const m = Utils.mesPorExtenso(d[1]);
    return d[0] + '/' + d[1] + '/' + d[2];

  }
}
