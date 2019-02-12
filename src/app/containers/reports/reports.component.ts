
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Report } from 'app/models/reports/reports.model';
import { ReportCreateUpdateComponent } from './report-create-update/report-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './reports.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TransportControllerService } from '../transports/transports.service';
import { HttpClient } from '@angular/common/http';
import { Transport } from 'app/models/transports/transports.model';
import { TransportCustom } from 'app/models/transports/transportsCustom.model';

@Component({
    selector: 'fury-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
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
export class ReportsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Report[]> = new ReplaySubject<Report[]>(1);
    data$: Observable<Report[]> = this.subject$.asObservable();
    reports: Report[];
    expandedElement: any;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    //transports: Transport[];
    transports: TransportCustom[];
    transport: TransportCustom;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Cód. Rastreador', property: 'trackerSerial', visible: true, isModelProperty: true },
        { name: 'Modelo Rastreador', property: 'trackerModel', visible: true, isModelProperty: true },
        { name: 'Transporte', property: 'type', visible: true, isModelProperty: true },
        { name: 'Placa', property: 'vehiclePlate', visible: true, isModelProperty: true },
        { name: 'Data/Hora', property: 'date', visible: true, isModelProperty: true },
        { name: 'Status', property: 'status', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: false }
    ] as ListColumn[];
    dataSource: MatTableDataSource<TransportCustom> | null;

// Cód. Rastreador
// Modelo Rastreador
// Transporte
// Placa
// Data/Hora
// Status

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
        // private apiReport: ReportControllerService
    ) { }

    loadData() {
        this.apiTransport.getAll()
        .subscribe(trans => {
          // this.transports = trans;
          // this.dataSource.data = trans.data; //transports;
          
        //   { name: 'Cód. Rastreador', property: 'trackerSerial', visible: true, isModelProperty: true },
        //   { name: 'Modelo Rastreador', property: 'trackerModel', visible: true, isModelProperty: true },
        //   { name: 'Transporte', property: 'type', visible: true, isModelProperty: true },
        //   { name: 'Placa', property: 'vehiclePlate', visible: true, isModelProperty: true },
        //   { name: 'Data/Hora', property: 'date', visible: true, isModelProperty: true },
        //   { name: 'Status', property: 'status', visible: true, isModelProperty: true },
        //   { name: 'Ações', property: 'actions', visible: false }

          this.transports = [];
          for(var i=0; i < trans.data.length; i++){            
            if(trans.data[i].coordinates.length > 0){  
            //   console.log(trans.data[i]);    
              console.log(trans.data[i].trackerSerial);
              this.transport = {}; 
              this.transport.trackerSerial = trans.data[i].trackerSerial;
              this.transport.trackerModel = trans.data[i].tracker.trackerModel;
              this.transport.type = trans.data[i].type;
              this.transport.vehiclePlate = trans.data[i].vehiclePlate;

              let data = new Date(trans.data[i].coordinates[trans.data[i].coordinates.length-1].date);

              let month = new Array();
              month[0] = "01";
              month[1] = "02";
              month[2] = "03";
              month[3] = "04";
              month[4] = "05";
              month[5] = "06";
              month[6] = "07";
              month[7] = "08";
              month[8] = "09";
              month[9] = "10";
              month[10] = "11";
              month[11] = "12";
          
              let hora = data.getHours() + ':' + data.getMinutes();
              this.transport.date = data.getDate() + '/' + month[data.getMonth()] + '/' + data.getFullYear() + ' - ' + hora;

              //this.transport.date = trans.data[i].coordinates[0].date;
              
              this.transport.status = 'Ativo';
              this.transports.push(this.transport);
            //   console.log(this.transports);
            }
          }
          this.dataSource.data = this.transports; //transports;
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
        ).subscribe((reports) => {
            this.reports = reports;
            this.dataSource.data = reports;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(ReportCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((report: Report) => {

            if (report) {
                // this.apiReport.createUsingPOST(report).
                //     subscribe(
                //         success => {
                            this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                                duration: 10000
                            });
                        //    // Reload the table after the post
                        //     this.loadData();
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

    update(report) {

        this.dialog.open(ReportCreateUpdateComponent, {
            data: report,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_report) => {
            if (_report) {
                // this.apiReport.updateUsingPUT(_report).
                //   subscribe(
                //        success => {
                            this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                                duration: 10000
                            });
                //            // Reload the table after the post
                //            this.loadData();
                //        },
                //        error => {
                //            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                //            'OK', {
                //                duration: 10000
                //            });
                //        });
            }
        });
    }

    delete(report) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: report.id, displayName: report.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_report: Report) => {

            if (_report && _report.id) {
                // this.apiReport.deleteUsingDELETE(_report.id).
                //    subscribe(
                //        success => {
                            this.snackBar.open('Item deletado com sucesso!', 'OK', {
                                duration: 10000
                            });
                //            // Reload the table after the post
                //            this.loadData();
                //        },
                // error => {
                //            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                //            'OK', {
                //                duration: 10000
                //            });
                //        });
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

