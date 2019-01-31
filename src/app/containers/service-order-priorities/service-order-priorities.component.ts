
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { fadeOutAnimation } from '../../core/common/route.animation';
import { trigger, state, transition, style, animate } from '@angular/animations';

import { ServiceOrderPriority } from 'app/models/service-orders/service-order-priorities.model';
import { ServiceOrderPriorityCreateUpdateComponent } from './service-order-priority-create-update/service-order-priority-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

import { SCHEMA } from './service-order-priorities.schema';
import { ServiceOrderPriorityControllerService } from 'app/module/service-orders';

@Component({
    selector: 'fury-service-order-priorities',
    templateUrl: './service-order-priorities.component.html',
    styleUrls: ['./service-order-priorities.component.scss'],
    animations: [fadeOutAnimation,
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class ServiceOrderPrioritiesComponent implements OnInit, AfterViewInit, OnDestroy {

    schema = SCHEMA;
    subject$: ReplaySubject<ServiceOrderPriority[]> = new ReplaySubject<ServiceOrderPriority[]>(1);
    data$: Observable<ServiceOrderPriority[]> = this.subject$.asObservable();
    serviceOrderPriorities: ServiceOrderPriority[];
    expandedElement: any;
    pageSize = 10;
    dataSource: MatTableDataSource<ServiceOrderPriority> | null;
    properties: any;

    get visibleColumns() {
        return this.properties.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiServiceOrderPriority: ServiceOrderPriorityControllerService
    ) {
        this.properties = Object.keys(this.schema.properties).map(property => ({
            property,
            name: this.schema.properties[property].columnName,
            isModelProperty: this.schema.properties[property].isModelProperty,
            visible: this.schema.properties[property].visible,
            cellContent: this.schema.properties[property].cellContent,
        }));
        // console.log(this.properties);
    }

    loadData() {
        this.apiServiceOrderPriority.getAllUsingGET()
          .subscribe(serviceOrderPriorities => {
            this.serviceOrderPriorities = serviceOrderPriorities;
            this.dataSource.data = serviceOrderPriorities;
             this.paginator.firstPage();
          },
           error => {
               if (error.status === 0 || error.status === 404) {
                   this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
                   });
               }
           });
        // this.dataSource.data = this.schema.FAKE_DATA;
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((serviceOrderPriorities) => {
            this.serviceOrderPriorities = serviceOrderPriorities;
            this.dataSource.data = serviceOrderPriorities;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(ServiceOrderPriorityCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((serviceOrderPriorities: ServiceOrderPriority) => {

            if (serviceOrderPriorities) {
                this.apiServiceOrderPriority.createUsingPOST(serviceOrderPriorities).
                    subscribe(
                        success => {
                this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
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

    update(serviceOrderPriorities) {

        this.dialog.open(ServiceOrderPriorityCreateUpdateComponent, {
            data: serviceOrderPriorities,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_serviceOrderPriorities) => {
            if (_serviceOrderPriorities) {
                this.apiServiceOrderPriority.updateUsingPUT(_serviceOrderPriorities).
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

    delete(serviceOrderPriorities) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: serviceOrderPriorities.id, displayName: serviceOrderPriorities.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_serviceOrderPriorities: ServiceOrderPriority) => {

            if (_serviceOrderPriorities && _serviceOrderPriorities.id) {
                this.apiServiceOrderPriority.deleteUsingDELETE(_serviceOrderPriorities.id).
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

        if (typeof (_cell) === 'undefined') {
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

