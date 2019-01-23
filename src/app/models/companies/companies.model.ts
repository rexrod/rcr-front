// import {Notice} from 'app/module/notices/model/notice';
// import { Company } from '../../containers/companies/company-create-update/company.model';
// export class CompaniesModel implements Company{
export class CompanyModel {
  // TODO remover atributos e metodo construtor
  id?: number;
  name?: string;
  cnpj?: string;
  fantasyName?: string;
  socialName?: string;
  suframa?: string;
  registrationState?: string;
  registrationMunicipal?: string;
  street?: string;
  complement?: string;
  houseNumber?: string;
  cep?: string;
  telephoneNumber?: string;
  contactName?: string;
  email?: string;
  idBranch?: number;

  constructor(company) {
    this.id = company.id;
    this.fantasyName = company.fantasyName;
    this.socialName = company.socialName;
    this.cnpj = company.cnpj;
    this.suframa = company.suframa;
    this.registrationState = company.registrationState;
    this.registrationMunicipal = company.registrationMunicipal;
    this.street = company.street;
    this.complement = company.complement;
    this.houseNumber = company.houseNumber;
    this.cep = company.cep;
    this.telephoneNumber = company.telephoneNumber;
    this.contactName = company.contactName;
    this.email = company.email;
    this.idBranch = company.idBranch;
  }
}
