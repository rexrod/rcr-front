
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Part } from 'app/models/parts/parts.model';
import { PartCreateUpdateComponent } from './part-create-update/part-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

import { trigger, state, transition, style, animate } from '@angular/animations';
import { PartControllerService } from 'app/module/parts';
import { environment } from 'environments/environment';

@Component({
    selector: 'fury-parts',
    templateUrl: './parts.component.html',
    styleUrls: ['./parts.component.scss'],
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
export class PartsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Part[]> = new ReplaySubject<Part[]>(1);
    data$: Observable<Part[]> = this.subject$.asObservable();
    parts: Part[];
    expandedElement: any;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'PEÇAS', property: 'name', visible: true, isModelProperty: true },
        { name: 'Número de Série', property: 'serialNumber', visible: true, isModelProperty: true },
        { name: 'Fabricante', property: 'fabricator', cellContent: 'model.fabricator.name', visible: true, isModelProperty: true },
        { name: 'Modelo', property: 'model', cellContent: 'model.name', visible: true, isModelProperty: true },
        { name: 'Segmento', property: 'segment', cellContent: 'segment.name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Part> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiPart: PartControllerService
    ) { }

    loadData() {
        this.apiPart.getAllUsingGET()
            .subscribe(parts => {
                this.parts = parts;
                this.dataSource.data = parts;
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
        ).subscribe((parts) => {
            this.parts = parts;
            this.dataSource.data = parts;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(PartCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((part: Part) => {

            if (part) {
                this.apiPart.createUsingPOST(part).
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

    update(part) {

        this.dialog.open(PartCreateUpdateComponent, {
            data: part,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_part) => {
            if (_part) {
                this.apiPart.updateUsingPUT(_part).
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

    delete(part) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: part.id, displayName: part.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_part: Part) => {

            if (_part && _part.id) {
                this.apiPart.deleteUsingDELETE(_part.id).
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

    urlImg(img) {
        return img ? environment.origin.fileServer + img : '/assets/img/backgrounds/bg-picture.png';
    }
}

