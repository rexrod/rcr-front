
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Sla } from 'app/models/slas/slas.model';
import { SlaControllerService } from '../../module/slas';
import { SlaCreateUpdateComponent } from './sla-create-update/sla-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './slas.fake'; // to test without data

@Component({
    selector: 'fury-slas',
    templateUrl: './slas.component.html',
    styleUrls: ['./slas.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class SlasComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Sla[]> = new ReplaySubject<Sla[]>(1);
    data$: Observable<Sla[]> = this.subject$.asObservable();
    slas: Sla[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'ID', property: 'id', visible: true, isModelProperty: true },
        { name: 'SLAS', property: 'name', visible: true, isModelProperty: true },
        { name: 'TEMPO (MIN)', property: 'time', visible: true, isModelProperty: true },
        { name: 'AÇÕES', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Sla> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiSla: SlaControllerService
    ) { }

    loadData() {
        this.apiSla.getAllUsingGET()
          .subscribe(slas => {
            this.slas = slas;
            this.dataSource.data = slas;
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
        ).subscribe((slas) => {
            this.slas = slas;
            this.dataSource.data = slas;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(SlaCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((sla: Sla) => {

            if (sla) {
                this.apiSla.createUsingPOST(sla).
                    subscribe(
                        success => {
                            this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                                duration: 10000
                            });
                           // Reload the table after the post
                            this.loadData();
                        },
                        error => {
                            this.snackBar.open(error.error[0] && error.error[0].title ? error.error[0].title : 'Erro na requisição.',
                            'OK', {
                                duration: 10000
                            });
                        });
            }

        });
    }

    update(sla) {

        this.dialog.open(SlaCreateUpdateComponent, {
            data: sla,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_sla) => {
            if (_sla) {
                this.apiSla.updateUsingPUT(_sla).
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

    delete(sla) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: sla.id, displayName: sla.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_sla: Sla) => {

            if (_sla && _sla.id) {
                this.apiSla.deleteUsingDELETE(_sla.id).
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

