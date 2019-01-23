
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { ServiceOrderType } from 'app/models/service-order-types/service-order-types.model';
import { ServiceOrderTypeControllerService } from '../../module/service-order-types';
import { ServiceOrderTypeCreateUpdateComponent } from './service-order-type-create-update/service-order-type-create-update.component';

import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

@Component({
    selector: 'fury-service-order-types',
    templateUrl: './service-order-types.component.html',
    styleUrls: ['./service-order-types.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class ServiceOrderTypesComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<ServiceOrderType[]> = new ReplaySubject<ServiceOrderType[]>(1);
    data$: Observable<ServiceOrderType[]> = this.subject$.asObservable();
    serviceOrderTypes: ServiceOrderType[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'TIPOS DE ORDEM DE SERVIÇO', property: 'name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<ServiceOrderType> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiServiceOrderType: ServiceOrderTypeControllerService
    ) { }

    loadData() {
        this.apiServiceOrderType.getAllUsingGET()
            .subscribe(serviceOrderTypes => {
                this.serviceOrderTypes = serviceOrderTypes;
                this.dataSource.data = serviceOrderTypes;
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
        ).subscribe((serviceOrderTypes) => {
            this.serviceOrderTypes = serviceOrderTypes;
            this.dataSource.data = serviceOrderTypes;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(ServiceOrderTypeCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((serviceOrderTypes: ServiceOrderType) => {
            if (serviceOrderTypes) {
                this.apiServiceOrderType.createUsingPOST(serviceOrderTypes).
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

    update(serviceOrderTypes) {

        this.dialog.open(ServiceOrderTypeCreateUpdateComponent, {
            data: serviceOrderTypes,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_serviceOrderTypes) => {
            if (_serviceOrderTypes) {
                this.apiServiceOrderType.updateUsingPUT(_serviceOrderTypes).
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

    delete(serviceOrderTypes) {
        this.dialog.open(DialogDeleteComponent, {
            data: { id: serviceOrderTypes.id, displayName: serviceOrderTypes.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_serviceOrderTypes: ServiceOrderType) => {

            if (_serviceOrderTypes && _serviceOrderTypes.id) {
                this.apiServiceOrderType.deleteUsingDELETE(_serviceOrderTypes.id).
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

