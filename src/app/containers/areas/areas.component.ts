import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Area } from 'app/models/areas/areas.model';
import { AreaControllerService } from '../../module/companies';
import { AreaCreateUpdateComponent } from './area-create-update/area-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';


@Component({
    selector: 'fury-areas',
    templateUrl: './areas.component.html',
    styleUrls: ['./areas.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class AreasComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Area[]> = new ReplaySubject<Area[]>(1);
    data$: Observable<Area[]> = this.subject$.asObservable();
    areas: Area[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'Área', property: 'name', visible: true, isModelProperty: true },
        { name: 'Companhia', property: 'company', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Area> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiArea: AreaControllerService
    ) { }

    loadData() {
        this.apiArea.getAllUsingGET()
            .subscribe(areas => {
                this.areas = areas;
                this.dataSource.data = areas;
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
        ).subscribe((areas) => {
            this.areas = areas;
            this.dataSource.data = areas;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(AreaCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((area: Area) => {
            if (area) {
                this.apiArea.createUsingPOST(area).
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

    update(area) {

        this.dialog.open(AreaCreateUpdateComponent, {
            data: area,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_area) => {
            if (_area) {
                this.apiArea.updateUsingPUT(_area).
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

    delete(area) {
        this.dialog.open(DialogDeleteComponent, {
            data: { id: area.id, displayName: area.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_area: Area) => {

            if (_area && _area.id) {
                this.apiArea.deleteUsingDELETE(_area.id).
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
