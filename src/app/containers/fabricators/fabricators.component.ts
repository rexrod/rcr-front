
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Fabricator } from 'app/models/fabricators/fabricators.model';
import { FabricatorControllerService } from '../../module/fabricators';
import { FabricatorCreateUpdateComponent } from './fabricator-create-update/fabricator-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

@Component({
    selector: 'fury-fabricators',
    templateUrl: './fabricators.component.html',
    styleUrls: ['./fabricators.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class FabricatorsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Fabricator[]> = new ReplaySubject<Fabricator[]>(1);
    data$: Observable<Fabricator[]> = this.subject$.asObservable();
    fabricators: Fabricator[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'FABRICANTES', property: 'name', visible: true, isModelProperty: true },
        { name: 'COMPANHIAS', property: 'company', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Fabricator> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiFabricator: FabricatorControllerService
    ) { }

    loadData() {
        this.apiFabricator.getAllUsingGET()
            .subscribe(fabricators => {
                this.fabricators = fabricators;
                this.dataSource.data = fabricators;
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
        ).subscribe((fabricators) => {
            this.fabricators = fabricators;
            this.dataSource.data = fabricators;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(FabricatorCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((fabricator: Fabricator) => {
            if (fabricator) {
                this.apiFabricator.createUsingPOST(fabricator).
                    subscribe(() => {
                        this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                            duration: 10000
                        });
                        // Reload the table after the post
                        this.loadData();
                    });
            }

        });
    }

    update(fabricator) {

        this.dialog.open(FabricatorCreateUpdateComponent, {
            data: fabricator,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_fabricator) => {
            if (_fabricator) {
                this.apiFabricator.updateUsingPUT(_fabricator).
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

    delete(fabricator) {
        this.dialog.open(DialogDeleteComponent, {
            data: { id: fabricator.id, displayName: fabricator.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_fabricator: Fabricator) => {

            if (_fabricator && _fabricator.id) {
                this.apiFabricator.deleteUsingDELETE(_fabricator.id).
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

