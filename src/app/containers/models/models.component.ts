
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Model } from 'app/models/models/models.model';
import { ModelCreateUpdateComponent } from './model-create-update/model-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

import { ModelControllerService } from 'app/module/models';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
    selector: 'fury-models',
    templateUrl: './models.component.html',
    styleUrls: ['./models.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class ModelsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Model[]> = new ReplaySubject<Model[]>(1);
    data$: Observable<Model[]> = this.subject$.asObservable();
    models: Model[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'MODELO', property: 'name', visible: true, isModelProperty: true },
        { name: 'Fabricante', property: 'idFabricator', cellContent: 'fabricator.name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Model> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiModel: ModelControllerService
    ) { }

    loadData() {
        this.apiModel.getAllUsingGET()
            .subscribe(models => {
                this.models = models;
                this.dataSource.data = models;
                this.paginator.firstPage();
            },
            error => {
                if (error.status === 0 || error.status === 404) {
                    this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
                    });
                }
            }
            );
        // this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((models) => {
            this.models = models;
            this.dataSource.data = models;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(ModelCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((model: Model) => {

            if (model) {
                this.apiModel.createUsingPOST(model).
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

    update(model) {

        this.dialog.open(ModelCreateUpdateComponent, {
            data: model,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_model) => {
            if (_model) {
                this.apiModel.updateUsingPUT(_model).
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

    delete(model) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: model.id, displayName: model.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_model: Model) => {

            if (_model && _model.id) {
                this.apiModel.deleteUsingDELETE(_model.id).
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

