
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Sector } from 'app/models/sectors/sectors.model';
import { SectorControllerService } from '../../module/companies';
import { SectorCreateUpdateComponent } from './sector-create-update/sector-create-update.component';
import { Department } from '../../models/departments/departments.model';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';


@Component({
    selector: 'fury-sectors',
    templateUrl: './sectors.component.html',
    styleUrls: ['./sectors.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class SectorsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Sector[]> = new ReplaySubject<Sector[]>(1);
    data$: Observable<Sector[]> = this.subject$.asObservable();
    sectors: Sector[];
    departments: Department[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'Setor', property: 'name', visible: true, isModelProperty: true },
        { name: 'Departamento', property: 'department', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Sector> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiSector: SectorControllerService
    ) { }

    loadData() {
        this.apiSector.getAllUsingGET3()
            .subscribe(sectors => {
                this.sectors = sectors;
                this.dataSource.data = sectors;
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
        ).subscribe((sectors) => {
            this.sectors = sectors;
            this.dataSource.data = sectors;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(SectorCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((sector: Sector) => {
            if (sector) {
                this.apiSector.createUsingPOST3(sector).
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

    update(sector) {

        this.dialog.open(SectorCreateUpdateComponent, {
            data: sector,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_sector) => {
            if (_sector) {
                this.apiSector.updateUsingPUT3(_sector).
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

    delete(sector) {
        this.dialog.open(DialogDeleteComponent, {
            data: { id: sector.id, displayName: sector.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_sector: Sector) => {

            if (_sector && _sector.id) {
                this.apiSector.deleteUsingDELETE3(_sector.id).
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

