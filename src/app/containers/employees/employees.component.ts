
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { EmployeesCreateUpdateComponent } from './employee-create-update/employee-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './employees.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { EmployeesControllerService } from './employees.service';
import { Employees } from '../../models/employees/employees.model';

@Component({
    selector: 'fury-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
    animations: [fadeOutAnimation,
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
          ])
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [EmployeesControllerService]

})
export class EmployeesComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Employees[]> = new ReplaySubject<Employees[]>(1);
    data$: Observable<Employees[]> = this.subject$.asObservable();
    employees: Employees[];
    expandedElement: any;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: false, isModelProperty: true },
        { name: 'Nome', property: 'name', visible: true, isModelProperty: true },
        { name: 'Endereço', property: 'address', visible: true, isModelProperty: true },
        { name: 'Empresa', property: 'company', visible: true, isModelProperty: true },
        { name: 'Status', property: 'status', visible: false, isModelProperty: true },
        { name: '', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Employees> | null;

    id?: string;
    status?: string;
    name?: number;
    address?: string;
    company?: string;

    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiEmployee: EmployeesControllerService,
    ) { }

    loadData() {
        console.log('entrou employee');
        this.apiEmployee.getAll()
          .subscribe(employees => {
            console.log(employees);
            //console.log(rastreadores.data);
            this.employees = employees;
            this.dataSource.data = employees; 
            this.paginator.firstPage();
          },
           error => {
               console.log(error);
               if (error.status === 0 || error.status === 404) {
                   //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
               }
           });
           //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((employees) => {
            this.employees = employees;
            this.dataSource.data = employees;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(EmployeesCreateUpdateComponent, {
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((employees: Employees) => {

            if (employees) {
                this.apiEmployee.registerEmployees(employees).
                    subscribe(
                        success => {
                            this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                                duration: 10000
                            });
                            // Reload the table after the post
                            this.loadData();
                        },
                        error => {
                            console.log(error);
                            //console.log(error.error.error);
                            if(error.error.error === 'invalid_insert'){
                                this.snackBar.open('Já existe um rastreador cadastrado com esse serial key.', 'OK', {
                                    duration: 10000
                                });
                            }else{
                                this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                                'OK', {
                                    duration: 10000
                                });
                            }
                            //error: "invalid_insert"
                        });
            }

        });
    }

    update(employees) {

        this.dialog.open(EmployeesCreateUpdateComponent, {
            data: employees,
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_employees) => {
            if (_employees) {
                this.apiEmployee.updateEmployees(_employees).
                   subscribe(
                        success => {
                            this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                                duration: 10000
                            });
                            // Reload the table after the post
                            this.loadData();
                        },
                        error => {
                            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                            'OK', {
                                duration: 10000
                            });
                        });
            }
        });
    }

    delete(employees) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: employees.id, displayName: employees.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_employees: Employees) => {

            if (_employees) {
                this.apiEmployee.deleteEmployees(_employees).
                    subscribe(
                        success => {
                            this.snackBar.open('Item deletado com sucesso!', 'OK', {
                                duration: 10000
                            });
                            // Reload the table after the post
                            this.loadData();
                        },
                        error => {
                            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                            'OK', {
                                duration: 10000
                            });
                        });
            }
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

    extractValue(_row, _cell, _property) {

        if (typeof(_cell) === 'undefined') {
            return _row[_property];
        }

        // console.log(_row, _cell);

        let result = _row;

        const properties = _cell.split('.');

        properties.forEach(p => {
            result = result[p] ? result[p] : result;
        });

        return result;
    }

   /**
   * expand collapse a row
   * @param row
   */
  toggleRow(row) {
    if (this.expandedElement === row) {
      this.expandedElement = null;
    } else {
      this.expandedElement = row;
    }
  }
}

