
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Transport } from 'app/models/transports/transports.model';
import { TransportCreateUpdateComponent } from './transport-create-update/transport-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';
import { TransportControllerService } from 'app/containers/transports/transports.service';
import { HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent }                           from '@angular/common/http';
import { environment } from 'environments/environment.dev';


// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './transports.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { tick } from '@angular/core/testing';
import { DialogRastreadorComponent } from 'app/core/common/dialog-rastreador/dialog-rastreador.component';
import { DashboardRoutesComponent } from '../dashboard-routes-employee/dashboard-routes.component';

@Component({
    selector: 'fury-transports',
    templateUrl: './transports.component.html',
    styleUrls: ['./transports.component.scss'],
    animations: [fadeOutAnimation,
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
          ])
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [TransportControllerService]
})
export class TransportsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Transport[]> = new ReplaySubject<Transport[]>(1);
    data$: Observable<Transport[]> = this.subject$.asObservable();
    transports: Transport[];
    expandedElement: any;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: '_id', visible: false, isModelProperty: true },
        { name: 'Tipo', property: 'type', visible: true, isModelProperty: true },
        { name: 'Capacidade', property: 'capacity', visible: false, isModelProperty: true },
        { name: 'Placa', property: 'vehiclePlate', visible: true, isModelProperty: true },
        { name: 'Descrição', property: 'description', visible: true, isModelProperty: true },
        { name: 'Versão', property: '__v', visible: false, isModelProperty: true },
        { name: 'Empresa', property: 'thirdCompany', visible: true, isModelProperty: true },
        { name: 'Rastreador', property: 'trackerSerial', visible: true, isModelProperty: true },
        { name: 'Coordenadas', property: 'coordinates', visible: false, isModelProperty: true },
        { name: 'Rota', property: 'routes', visible: true, isModelProperty: true },
        { name: '', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Transport> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiTransport: TransportControllerService,
        protected httpClient: HttpClient,
    ) { }

    loadData() {
        this.apiTransport.getAll()
          .subscribe(transports => {
            //console.log(transports);
            //console.log(transports.data);

            this.transports = [];
            for(var i=0; i < transports.data.length; i++){
              //console.log(transports.data[i].segment);  
              if(transports.data[i].segment === 'Funcionarios'){  
                this.transports.push(transports.data[i]);

              }
            }

            //this.transports = transports;
            this.dataSource.data = this.transports //transports.data; //transports;
            this.paginator.firstPage();
          },
           error => {
               console.log(error);
               if (error.status === 0 || error.status === 404) {
                   //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
               }
           });
           //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;

           //setInterval(() => { this.loadData(); }, 1000 * 20);

    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((transports) => {
            this.transports = transports;
            this.dataSource.data = transports;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(TransportCreateUpdateComponent, {
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((transport: Transport) => {

            if (transport) {
                // this.apiTransport.createUsingPOST(transport).
                //     subscribe(
                //         success => {
                            this.snackBar.open('Transporte cadastrado com sucesso!', 'OK', {
                                duration: 10000
                            });
                        //    // Reload the table after the post
                             this.loadData();
                        // },
                        // error => {
                        //    this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                        //    'OK', {
                        //        duration: 10000
                        //    });
                        // });
            }

        });
    }

    update(transport) {

        this.dialog.open(TransportCreateUpdateComponent, {
            data: transport,
            //width: '61%', height: '77%',
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_transport) => {
            if (_transport) {
                 this.apiTransport.updateTransport(_transport).
                   subscribe(
                        success => {

                            if(_transport.idRastreador !== null){
                                const formDataRastreador = new URLSearchParams();
                                // append your data
                        
                                formDataRastreador.set('trackerSerial', _transport.idRastreador);
                                
                                let token = localStorage.getItem('token');
                                const httpOptions = {
                                    headers: new HttpHeaders({
                                    "Content-Type":  "application/x-www-form-urlencoded",
                                    "Authorization": "Bearer " + `${token}`
                                    }),
                                };

                                this.httpClient.put( environment.origin.transports + '/transports/linktracker/' + _transport._id, formDataRastreador.toString(), httpOptions).
                                    subscribe(
                                        success => {
                                            this.snackBar.open('Transporte atualizado com sucesso!', 'OK', {
                                                duration: 10000
                                            });
                                            //console.log('Rastreador vinculado: ' + _transport.idRastreador);
                                        },
                                        error => {  
                                            //console.log(error.error.error_description);
                                               this.snackBar.open(error.error.error_description, 'OK', {
                                                   duration: 10000
                                                });
                                            console.log(error);
                                        });
                                
                                //console.log(_transport.idRastreador);            
                            }else{
                                this.snackBar.open('Transporte atualizado com sucesso!', 'OK', {
                                    duration: 10000
                                 });
                            }

                            // Reload the table after the post
                            setTimeout(() => this.loadData(), 3000);
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

    delete(transport) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: transport._id, displayName: transport.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_transport: Transport) => {
            //console.log(_transport);
            if (_transport) {
                this.apiTransport.deleteTransport(_transport).
                    subscribe(
                        success => {
                            this.snackBar.open('Item deletado com sucesso!', 'OK', {
                                duration: 10000
                            });
                            // Reload the table after the post
                            this.loadData();
                        },
                        error => {
                            console.log(error);
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

        //console.log(_row);

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

  adicionarRastreador(transport) {

    this.dialog.open(DialogRastreadorComponent, {
        data: { id: transport._id, displayName: transport.vehiclePlate, displayBody: 'Transporte:', title: 'Deseja associar um rastreador?', type: 'add', trackerSerial: '' },
        panelClass: 'dialog-rastreador'
    }).afterClosed().subscribe((transport: Transport) => {

        if (transport) {
            this.apiTransport.adicionarRastreador(transport).
            subscribe(
                success => {
                    this.snackBar.open('Rastreador associado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    this.loadData();
                },
                error => {
                    console.log(error);
                    this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                    'OK', {
                        duration: 10000
                    });
                });
        }

    });
  }

  removerRastreador(transport) {

    this.dialog.open(DialogRastreadorComponent, {
        data: { id: transport._id, displayName: transport.trackerSerial, displayBody: 'Serial: ',title: 'Deseja desvincular o rastreador?', type: 'remove',  trackerSerial: '' },
        panelClass: 'dialog-rastreador'
    }).afterClosed().subscribe((_transport: Transport) => {

        if (_transport) {
             this.apiTransport.removerRastreador(_transport).
                subscribe(
                    success => {
                        this.snackBar.open('Rastreador desvinculado com sucesso!', 'OK', {
                            duration: 10000
                        });
                        // Reload the table after the post
                        this.loadData();
                    },
                    error => {
                        console.log(error);
                        this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                        'OK', {
                            duration: 10000
                        });
                    });
        }

    });
  }

  adicionarRota(transport) {
    //console.log('Transporte ID: ' + transport._id);
    this.dialog.open(DashboardRoutesComponent, {
        // data: { id: transport._id, displayName: transport.vehiclePlate, displayBody: 'Transporte:', title: 'Deseja associar um rastreador?', type: 'add', trackerSerial: '' },
        // panelClass: 'dialog-rastreador'
        data: { id: transport._id },
        width: '85%', height: '93%',
    }).afterClosed().subscribe((transport: any) => {
        this.loadData();
        // if (transport) {
        //     this.apiTransport.adicionarRastreador(transport).
        //     subscribe(
        //         success => {
        //             this.snackBar.open('Rastreador associado com sucesso!', 'OK', {
        //                 duration: 10000
        //             });
        //             // Reload the table after the post
        //             this.loadData();
        //         },
        //         error => {
        //             console.log(error);
        //             this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
        //             'OK', {
        //                 duration: 10000
        //             });
        //         });
        // }

    });
  }

  possuiRota(_transport) {

    //console.log(_transport.routes);

    if(_transport.routes.employees.length > 0){
        return false;
    }else{
        return true;
    }
    //return false;
  }

  removerRota(transport) {

    this.dialog.open(DialogDeleteComponent, {
        data: { id: transport._id, displayName: transport.id },
        panelClass: 'dialog-delete'
    }).afterClosed().subscribe((_transport: Transport) => {
        //console.log(_transport);
        if (_transport) {
            this.apiTransport.removerRota(_transport).
                subscribe(
                    success => {
                        this.snackBar.open('Rota removida com sucesso.', 'OK', {
                            duration: 10000
                        });
                        // Reload the table after the post
                        this.loadData();
                    },
                    error => {
                        console.log(error);
                        this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                        'OK', {
                            duration: 10000
                        });
                    });
        }

    });
  }

  editarRota(transport) {
    //console.log('Transporte ID: ' + transport._id);
    this.dialog.open(DashboardRoutesComponent, {
        // data: { id: transport._id, displayName: transport.vehiclePlate, displayBody: 'Transporte:', title: 'Deseja associar um rastreador?', type: 'add', trackerSerial: '' },
        // panelClass: 'dialog-rastreador'
        data: transport,
        width: '85%', height: '93%',
    }).afterClosed().subscribe((transport: any) => {
        this.loadData();
        // if (transport) {
        //     this.apiTransport.adicionarRastreador(transport).
        //     subscribe(
        //         success => {
        //             this.snackBar.open('Rastreador associado com sucesso!', 'OK', {
        //                 duration: 10000
        //             });
        //             // Reload the table after the post
        //             this.loadData();
        //         },
        //         error => {
        //             console.log(error);
        //             this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
        //             'OK', {
        //                 duration: 10000
        //             });
        //         });
        // }

    });
  }
}
