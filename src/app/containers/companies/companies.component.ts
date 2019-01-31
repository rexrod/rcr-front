import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';
// import { ALL_IN_ONE_TABLE_FAKE_DATA } from './companies.fake';
import { CompanyCreateUpdateComponent } from './company-create-update/company-create-update.component';
import { CompanyModel } from '../../models/companies/companies.model';
// HTTP
import { CompanyControllerService } from '../../module/companies';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

@Component({
  selector: 'fury-notices',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  animations: [fadeOutAnimation],
  encapsulation: ViewEncapsulation.None,
})
export class CompaniesComponent implements OnInit, AfterViewInit, OnDestroy {
  color = 'accent';
  checked = false;
  disabled = false;
  subject$: ReplaySubject<CompanyModel[]> = new ReplaySubject<CompanyModel[]>(1);
  data$: Observable<CompanyModel[]> = this.subject$.asObservable();
  companies: CompanyModel[];

  @Input()
  columns: ListColumn[] = [
    // { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Id', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nome Fantasia', property: 'fantasyName', visible: true, isModelProperty: true },
    { name: 'Razão Social', property: 'socialName', visible: true, isModelProperty: true },
    { name: 'CNPJ', property: 'cnpj', visible: true, isModelProperty: true },
    // { name: 'Registro Estadual', property: 'registrationState', visible: false, isModelProperty: true },
    // { name: 'Registro Municipal', property: 'registrationMunicipal', visible: false, isModelProperty: true },
    // { name: 'Rua', property: 'street', visible: false, isModelProperty: true },
    // { name: 'Número', property: 'houseNumber', visible: false, isModelProperty: true },
    // { name: 'Cep', property: 'cep', visible: false, isModelProperty: false },
    { name: 'Telefone', property: 'telephoneNumber', visible: true, isModelProperty: true },
    // { name: 'Nome para Contato', property: 'contactName', visible: false, isModelProperty: true },
    // { name: 'Email', property: 'email', visible: false, isModelProperty: true },
    { name: 'Ações', property: 'actions', visible: true }
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<CompanyModel> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private apiCompany: CompanyControllerService,
    public snackBar: MatSnackBar) {

  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  loadData() {
    this.apiCompany.getAllUsingGET1()
      .subscribe(companies => {
        this.companies = companies;
        this.dataSource.data = companies;
        this.paginator.firstPage();
      },
      error => {
          if (error.status === 0 || error.status === 404) {
              this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
              });
          }
      });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    // loads the data from the main table
    this.loadData();

    // apply filters
    this.data$.pipe(
      filter(Boolean)
    ).subscribe((companies) => {
      this.companies = companies;
      this.dataSource.data = companies;
    });


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create() {
    this.dialog.open(CompanyCreateUpdateComponent, {
      width: '60.98%',
      height: '85%',
      panelClass: 'dialog-create-update'
    }
    ).afterClosed().subscribe((company: CompanyModel) => {
      if (company) {
        this.apiCompany.createUsingPOST1(company).
          subscribe(
            success => {
              this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                duration: 10000
              });
              // Reload the table after the post
              this.loadData();
            },
            error => {
              this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                duration: 10000
              });
            });
      }
    });
  }

  update(company) {

    this.dialog.open(CompanyCreateUpdateComponent, {
      width: '60.98%',
      height: '85%',
      panelClass: 'dialog-create-update',
      data: company
    }).afterClosed().subscribe((_company) => {
      if (_company) {
        this.apiCompany.updateUsingPUT1(_company).
          subscribe(
            success => {
              this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                duration: 10000
              });
              // Reload the table after the post
              this.loadData();
            },
            error => {
              this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                duration: 10000
              });
            });
      }
    });
  }

  delete(company) {
    this.dialog.open(DialogDeleteComponent, {
        data: { id: company.id, displayName: company.id},
        panelClass: 'dialog-delete'
    }).afterClosed().subscribe((_company: CompanyModel) => {

        if (_company && _company.id) {
            this.apiCompany.deleteUsingDELETE1(_company.id).
                subscribe(
                    success => {
                        this.snackBar.open('Item deletado com sucesso!', 'OK', {
                            duration: 10000
                        });
                        // Reload the table after the post
                        this.loadData();
                    },
                    error => {
                        this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                            duration: 10000
                        });
                    });
        }

    });

}

  detail(company) {
    this.dialog.open(CompanyDetailComponent, {
      width: '60.98%',
      height: '67.5%',
      panelClass: 'dialog-detail',
      data: company
    });
  }

  ngOnDestroy() {
  }


  onFilterChange(filterValue: string) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
