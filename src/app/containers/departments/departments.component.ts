
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Department } from 'app/models/departments/departments.model';
import { DepartmentControllerService } from '../../module/companies';
import { DepartmentCreateUpdateComponent } from './department-create-update/department-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';


@Component({
    selector: 'fury-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class DepartmentsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Department[]> = new ReplaySubject<Department[]>(1);
    data$: Observable<Department[]> = this.subject$.asObservable();
    departments: Department[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'Departamentos', property: 'name', visible: true, isModelProperty: true },
        { name: 'Área', property: 'area', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Department> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiDepartment: DepartmentControllerService
    ) { }

    loadData() {
        this.apiDepartment.getAllUsingGET2()
          .subscribe(departments => {
            this.departments = departments;
            this.dataSource.data = departments;
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
        ).subscribe((departments) => {
            this.departments = departments;
            this.dataSource.data = departments;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(DepartmentCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((department: Department) => {
            if (department) {
                this.apiDepartment.createUsingPOST2(department).
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

    update(department) {
        this.dialog.open(DepartmentCreateUpdateComponent, {
            data: department,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_department) => {
            if (_department) {
                this.apiDepartment.updateUsingPUT2(_department).
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

    delete(department) {
        this.dialog.open(DialogDeleteComponent, {
            data: { id: department.id, displayName: department.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_department: Department) => {

            if (_department && _department.id) {
                this.apiDepartment.deleteUsingDELETE2(_department.id).
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

    ngOnDestroy() {
    }

    onFilterChange(filterValue: string) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

