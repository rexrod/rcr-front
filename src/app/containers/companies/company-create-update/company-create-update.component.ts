import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CompanyModel } from '../../../models/companies/companies.model';
import { ViewEncapsulation } from '@angular/core';
import { CompanyControllerService } from '../../../module/companies';
import { Utils } from '../../../utils/utils';
@Component({
  selector: 'fury-company-create-update',
  templateUrl: './company-create-update.component.html',
  styleUrls: ['./company-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyCreateUpdateComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  mode: 'create' | 'update' = 'create';
  isLinear = true;
  companies: CompanyModel[];
  checked = false;
  phoneNumber = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CompanyCreateUpdateComponent>,
    private apiCompany: CompanyControllerService,
    public snackBar: MatSnackBar) {
    this.firstFormGroup = new FormGroup({
      id: new FormControl(),
      fantasyName: new FormControl(),
      socialName: new FormControl(),
      cnpj: new FormControl(),
      registrationState: new FormControl(),
      registrationMunicipal: new FormControl(),
      idBranch: new FormControl()
    });

    this.secondFormGroup = new FormGroup({
      street: new FormControl(),
      complement: new FormControl(),
      houseNumber: new FormControl(),
      cep: new FormControl(),
      telephoneNumber: new FormControl(),
      contactName: new FormControl(),
      email: new FormControl()
    });

    // load the matriz companies
    this.apiCompany.getCompaniesMatrizUsingGET().
      subscribe(_company => {
        this.companies = <CompanyModel[]>_company;
      });
  }


  ngOnInit() {

    if (this.defaults) {
      this.mode = 'update';
      // Formata Numero de Telefone
      this.phoneNumber = Utils.formatPhoneNumber(this.defaults.telephoneNumber);
      // Ativa o checked se houver filial
      if (this.defaults.idBranch) {
        this.checked = true;
      }
      this.firstFormGroup = new FormGroup({
        id: new FormControl(this.defaults.id),
        fantasyName: new FormControl(this.defaults.fantasyName, Validators.required),
        socialName: new FormControl(this.defaults.socialName, Validators.required),
        cnpj: new FormControl(this.defaults.cnpj, [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ]),
        registrationState: new FormControl(this.defaults.registrationState, Validators.required),
        registrationMunicipal: new FormControl(this.defaults.registrationMunicipal, Validators.required),
        idBranch: new FormControl(this.defaults.idBranch)
      });

      this.secondFormGroup = new FormGroup({
        street: new FormControl(this.defaults.street, Validators.required),
        complement: new FormControl(this.defaults.complement, Validators.required),
        houseNumber: new FormControl(this.defaults.houseNumber, Validators.required),
        cep: new FormControl(this.defaults.cep, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
        ]),
        telephoneNumber: new FormControl( Utils.formatPhoneNumber(this.defaults.telephoneNumber), [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(15),
        ]),
        contactName: new FormControl(this.defaults.contactName, Validators.required),
        email: new FormControl(this.defaults.email, Validators.required)
      });

    } else {
      this.defaults = {} as CompanyModel;
    }
  }

  save() {
    if (this.mode === 'create') {
      this.createCompany();
    } else if (this.mode === 'update') {
      this.updateCompany();
    }
  }

  createCompany() {
    // only numbers
    this.firstFormGroup.get('cnpj').setValue(this.firstFormGroup.get('cnpj').value.replace(/\D/g, ''));
    const form1 = this.firstFormGroup.value;
    // only numbers
    this.secondFormGroup.get('cep').setValue(this.secondFormGroup.get('cep').value.replace(/\D/g, ''));
    // only numbers
    this.secondFormGroup.get('telephoneNumber').setValue(this.secondFormGroup.get('telephoneNumber').value.replace(/\D/g, ''));
    const form2 = this.secondFormGroup.value;
    const company = Object.assign(form1, form2);

    this.dialogRef.close(company);
  }

  updateCompany() {
    this.firstFormGroup.get('cnpj').setValue(this.firstFormGroup.get('cnpj').value.replace(/\D/g, ''));
    const form1 = this.firstFormGroup.value;
    // only numbers
    this.secondFormGroup.get('cep').setValue(this.secondFormGroup.get('cep').value.replace(/\D/g, ''));
    // only numbers
    this.secondFormGroup.get('telephoneNumber').setValue(this.secondFormGroup.get('telephoneNumber').value.replace(/\D/g, ''));
    const form2 = this.secondFormGroup.value;
    const company = Object.assign(form1, form2);
    company.id = this.defaults.id;
    this.dialogRef.close(company);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onChange(value) {
    this.checked = value.checked;
    this.firstFormGroup.get('idBranch').setValue('');
  }
  // Mascara dinamica de telefone
  formatPhone(e) {
    const v = e.target.value;
    this.phoneNumber = Utils.formatPhoneNumber(v);
    this.secondFormGroup.controls['telephoneNumber'].setValue(this.phoneNumber);
  }

  verifyFantasyName(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual a ele mesmo, volta também
    if (e === this.defaults.fantasyName) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const fantasyName = e;

    this.apiCompany.getByFantasyNameUsingGET(fantasyName).
      subscribe(_fantasyName => {
        if (_fantasyName.length) {
          this.firstFormGroup.setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

  verifySocialName(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual a ele mesmo, volta também
    if (e === this.defaults.socialName) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const socialName = e;

    this.apiCompany.getBySocialNameUsingGET(socialName).
      subscribe(_socialName => {
        if (_socialName.length) {
          this.firstFormGroup.setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

  verifyCnpj(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual a ele mesmo, volta também
    if (e.replace(/\D/g, '') === this.defaults.cnpj) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const cnpj = e.replace(/\D/g, '');
    this.apiCompany.getByCnpjUsingGET(cnpj).
      subscribe(_cnpj => {
        if (_cnpj.length) {
          this.firstFormGroup.setErrors({ 'invalid': true });
          this.snackBar.open('Esse CNPJ já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }
}
