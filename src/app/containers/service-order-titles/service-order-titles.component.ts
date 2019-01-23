
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { ServiceOrderTitle } from 'app/models/service-order-titles/service-order-titles.model';
import { ServiceOrderTitleCreateUpdateComponent } from './service-order-title-create-update/service-order-title-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';
import { ServiceOrderTitleControllerService } from 'app/module/service-order-titles';

@Component({
    selector: 'fury-service-order-titles',
    templateUrl: './service-order-titles.component.html',
    styleUrls: ['./service-order-titles.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class ServiceOrderTitlesComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<ServiceOrderTitle[]> = new ReplaySubject<ServiceOrderTitle[]>(1);
    data$: Observable<ServiceOrderTitle[]> = this.subject$.asObservable();
    serviceOrderTitles: ServiceOrderTitle[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'TíTULO DE OS', property: 'name', visible: true, isModelProperty: true },
        { name: 'Segmento', property: 'idSegment', cellContent: 'segment.name', visible: true, isModelProperty: true },
        { name: 'SLA', property: 'idSLA', cellContent: 'sla.name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<ServiceOrderTitle> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiServiceOrderTitle: ServiceOrderTitleControllerService
    ) { }

    loadData() {
        this.apiServiceOrderTitle.getAllUsingGET()
            .subscribe(serviceOrderTitles => {
                this.serviceOrderTitles = serviceOrderTitles;
                this.dataSource.data = serviceOrderTitles;
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
        ).subscribe((serviceOrderTitles) => {
            this.serviceOrderTitles = serviceOrderTitles;
            this.dataSource.data = serviceOrderTitles;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(ServiceOrderTitleCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((serviceOrderTitle: ServiceOrderTitle) => {

            if (serviceOrderTitle) {
                this.apiServiceOrderTitle.createUsingPOST(serviceOrderTitle).
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
                            'OK',
                            {
                                duration: 10000
                            });
                        });
            }

        });
    }

    update(serviceOrderTitle) {

        this.dialog.open(ServiceOrderTitleCreateUpdateComponent, {
            data: serviceOrderTitle,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_serviceOrderTitle) => {
            if (_serviceOrderTitle) {
                this.apiServiceOrderTitle.updateUsingPUT(_serviceOrderTitle).
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

    delete(serviceOrderTitle) {

        this.dialog.open(DialogDeleteComponent, {
            data: {id: serviceOrderTitle.id, displayName: serviceOrderTitle.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_serviceOrderTitle: ServiceOrderTitle) => {

            if (_serviceOrderTitle && _serviceOrderTitle.id) {
                this.apiServiceOrderTitle.deleteUsingDELETE(_serviceOrderTitle.id).
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

    extractValue(row, cell) {
        if (!row || !cell) { return; }
        // console.log(row, cell);
        let result = row;
        const properties = cell.split('.');

        properties.forEach(property => {
            result = result[property] ? result[property] : result;
        });
        return result;
    }
}

