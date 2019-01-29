
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Rastreador } from 'app/models/rastreadores/rastreadores.model';
import { RastreadorCreateUpdateComponent } from './rastreador-create-update/rastreador-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './rastreadores.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { RastreadoresControllerService } from './rastreadores.service';

@Component({
    selector: 'fury-rastreadores',
    templateUrl: './rastreadores.component.html',
    styleUrls: ['./rastreadores.component.scss'],
    animations: [fadeOutAnimation,
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
          ])
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [RastreadoresControllerService]

})
export class RastreadoresComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Rastreador[]> = new ReplaySubject<Rastreador[]>(1);
    data$: Observable<Rastreador[]> = this.subject$.asObservable();
    rastreadores: Rastreador[];
    expandedElement: any;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: '_id', visible: false, isModelProperty: true },
        { name: 'Serial Key', property: 'serialKey', visible: true, isModelProperty: true },
        { name: 'Modelo', property: 'trackerModel', visible: true, isModelProperty: true },
        { name: 'Observações', property: 'notes', visible: true, isModelProperty: true },
        { name: 'Versão', property: '__v', visible: false, isModelProperty: true },
        { name: '', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Rastreador> | null;

    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiRastreador: RastreadoresControllerService,
    ) { }

    loadData() {
        this.apiRastreador.getAll()
          .subscribe(rastreadores => {
            console.log(rastreadores);
            console.log(rastreadores.data);
            this.rastreadores = rastreadores;
            this.dataSource.data = rastreadores.data; 
            this.paginator.firstPage();
          },
           error => {
               if (error.status === 0 || error.status === 404) {
                   //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
                   console.log(error);
               }
           });
           //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((rastreadores) => {
            this.rastreadores = rastreadores;
            this.dataSource.data = rastreadores;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(RastreadorCreateUpdateComponent, {
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((rastreador: Rastreador) => {

            if (rastreador) {
                this.apiRastreador.registerRastreador(rastreador).
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

    update(rastreador) {

        this.dialog.open(RastreadorCreateUpdateComponent, {
            data: rastreador,
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_rastreador) => {
            if (_rastreador) {
                this.apiRastreador.updateRastreador(_rastreador).
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

    delete(rastreador) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: rastreador._id, displayName: rastreador.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_rastreador: Rastreador) => {

            if (_rastreador) {
                this.apiRastreador.deleteRastreador(_rastreador).
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

        if (typeof(_cell) === 'undefined') {
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

