
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ElementRef, ViewEncapsulation, Injectable, Inject } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { DashboardRoutes } from 'app/models/dashboard-routes/dashboard-routes.model';
import { DashboardRoutesCreateUpdateComponent } from './dashboard-routes-create-update/dashboard-routes-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';
import { HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent }                           from '@angular/common/http';
import { environment } from 'environments/environment.dev';
import { Transport } from 'app/models/transports/transports.model';
import { Coordinates } from 'app/models/transports/coordinates.model';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './dashboard-routes.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TransportControllerService } from '../transports/transports.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RastreadoresRoutingModule } from '../rastreadores/rastreadores-routing.module';
import { Http } from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { EmployeesControllerService } from '../employees/employees.service';
import { Employees } from 'app/models/employees/employees.model';
import { EmployeesRoute } from 'app/models/employees/employees-route.model';

// export interface Rastreador {
//     value: string;
//     viewValue: string;
//   }

declare var H: any;

@Injectable() 
export class Service {
    [x: string]: any;

  constructor(private httpClient: HttpClient) { }

  getSuggestions(search): Observable<any[]> {
    //console.log('Search: ' + search);
    
    if(search === ''){
        search = 'Rua Diamantina';
    }
    const url = 'https://autocomplete.geocoder.api.here.com/6.2/suggest.json';
    const query = '?' +
                  'query=' +  encodeURIComponent(search) +   // The search text which is the basis of the query
                  '&beginHighlight=' + encodeURIComponent('<mark>') + //  Mark the beginning of the match in a token. 
                  '&endHighlight=' + encodeURIComponent('</mark>') + //  Mark the end of the match in a token. 
                  '&maxresults=5' +  // The upper limit the for number of suggestions to be included in the response.  Default is set to 5.
                  '&app_id=' + 'f9xS9zNUPJwcnpSM5fkl' +
                  '&app_code=' + 'KFOs5agTKxE3hV8cJIA_7Q';

    //this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
    const endpoint = url + query;
    //console.log(endpoint);
    let suggestions: any;
    suggestions = this.httpClient.get<any>(url + query); 
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users');
  }

}

@Injectable()
export class AppService {

    url: string
    constructor(private http : HttpClient){
        this.url  = 'https://autocomplete.geocoder.api.here.com/6.2/suggest.json';
    }

    search_word(term){

        const query = '?' +
                    'query=' +  encodeURIComponent(term) +   // The search text which is the basis of the query
                    //'&beginHighlight=' + encodeURIComponent('<mark>') + //  Mark the beginning of the match in a token. 
                    //'&endHighlight=' + encodeURIComponent('</mark>') + //  Mark the end of the match in a token. 
                    '&maxresults=8' +  // The upper limit the for number of suggestions to be included in the response.  Default is set to 5.
                    '&app_id=' + 'f9xS9zNUPJwcnpSM5fkl' +
                    '&app_code=' + 'KFOs5agTKxE3hV8cJIA_7Q';


        return this.http.get<any>(this.url + query).map(res => {
            //console.log(res);
            return res.suggestions;
        })
    }
}
@Component({
    selector: 'fury-dashboard-routes',
    templateUrl: './dashboard-routes.component.html',
    styleUrls: ['./dashboard-routes.component.scss'],
    animations: [fadeOutAnimation,
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
          ])
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [TransportControllerService, EmployeesControllerService]
})
export class DashboardRoutesComponent implements OnInit, AfterViewInit, OnDestroy {
    
    // filter(arg0: any): any {
    //     throw new Error("Method not implemented.");
    // }

    // myControl = new FormControl();
    // filteredOptions: Observable<any[]>;

    searchTerm : FormControl = new FormControl({disabled: true});
    searchResult = [];
    positions = [];
    places = false;

    subject$: ReplaySubject<DashboardRoutes[]> = new ReplaySubject<DashboardRoutes[]>(1);
    data$: Observable<DashboardRoutes[]> = this.subject$.asObservable();
    dashboardLives: DashboardRoutes[];
    
    transports: Transport[];
    coordinates: any[];
    transport: Transport;

    // form: FormGroup;
    selectedValue: string;
    employeeValue: Employees;
    employeeRoutes: EmployeesRoute;
    employeeIDs: string[] = [];
    addressValue: string;
    searchValue: string;
    lived = false;
    editando = false;
    
    @Input()
    employees: any[] = [];

    expandedElement: any;
    pageSize = 10;
    
    rastreamento: any;
    textoRastrear: string = 'Rastrear';

    map: any;
    ui: any;
    group: any;
    
    lat: number = -3.096771;
    lng: number = -59.936741;

    // @Input()
    // rastreadores: Rastreador[] = [
    //     {value: 'all', viewValue: 'Todos os rastreadores'},
    //     {value: 'rastreador-1', viewValue: 'Rastreador 1'},
    //     {value: 'rastreador-1', viewValue: 'Rastreador 2'}
    //   ];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: '', property: 'id', visible: true, isModelProperty: true },
        { name: '', property: 'name', visible: true, isModelProperty: true },
        { name: '', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<DashboardRoutes> | null;

    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }


    private platform: any;

    @ViewChild("map")
    public mapElement: ElementRef;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<DashboardRoutesComponent>,
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiTransport: TransportControllerService,
        private apiEmployee: EmployeesControllerService,
        protected httpClient: HttpClient, 
        // private apiDashboardLive: DashboardLiveControllerService,
        private service: Service,
        private services: AppService,
    ) { 
        this.platform = new H.service.Platform({
            "app_id": "f9xS9zNUPJwcnpSM5fkl",
            "app_code": "KFOs5agTKxE3hV8cJIA_7Q"
        });
        // lives: DashboardLivesComponent;

        // this.filteredOptions = this.myControl.valueChanges
        // .pipe(
        //   startWith(null),
        //   debounceTime(200),
        //   distinctUntilChanged(),
        //   switchMap(val => {
        //     console.log(val);
        //     return this.filter(val || '')
        //   })       
        // );
        
        // this.searchTerm.setValue("Brasil, Manaus, ");

        // this.searchTerm.valueChanges
        // .debounceTime(400) 
        // .subscribe(data => {
        //     this.services.search_word(data).subscribe(response =>{
        //         this.searchResult = response
        //     })
        // })
        //this.searchTerm.disable;
        //console.log(this.data);
        //this.employeeRoutes.employees = ["5c73fe6768eba032065df362","5c7404ae0bbb8635c617983a"];

        //console.log(this.data);
        if(this.data){
            //console.log(this.data);
        }
    }

    
    filter(val: string): Observable<any[]> {
        //console.log('filter: ' + val);
        return this.service.getSuggestions(val)
        .pipe(
          map(response => response.filter(option => { 
            //console.log('Entrou aqui: ' + option.suggestions);
            return option.label.toLowerCase().indexOf(val.toLowerCase()) === 0
          }))
        )
    }
    
    loadData() {

        /*
        this.apiEmployee.getAll()
          .subscribe(employees => {

            this.transports = [];
            //this.employees = employees;
            
            for(var i=0; i < employees.length; i++){              
              if(!employees[i].route){  
                this.employees.push(employees[i]);
              }
            }
          },
           error => {
               console.log(error);
               if (error.status === 0 || error.status === 404) {
                   this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
                   });
               }
           });
           */
        //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
        //console.log('loaddata call here');
    }

    rastrear(evt?: any) {

        if(evt){
            this.selectedValue = evt.target.getData();
        }

        //console.log('rastreando...');
        const transport =  this.transports.find(x => x.trackerSerial === this.selectedValue );
        this.transport = transport;
    
        //console.log(transport.coordinates.length);
        
        if(!transport.coordinates.length){
            this.snackBar.open('O rastreador ainda não possui coordenadas!', 'OK', {
                duration: 10000
            });
        }
        //   console.log(this.selectedValue);
    
        //this.map.clearContent();
        //this.map.removeObjects(this.map.getObjects()); 
        //this.map.removeAll();
        this.group.removeAll();
        // this.group = new H.map.Group();
        // this.map.addObject(this.group);
        //marker.setData(this.transports[i].trackerSerial);

        let points = [];
    
        //let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        let iconFinal = new H.map.Icon('assets/rcr/icon-local.png');
        let icon = new H.map.Icon('assets/rcr/icon-logo.png');
        
        let marker = new H.map.Marker({ lat: transport.coordinates[0].coords.lat, lng: transport.coordinates[0].coords.long }, { icon: icon });
        let markerFinal = new H.map.Marker({ lat: transport.coordinates[transport.coordinates.length-1].coords.lat, lng: transport.coordinates[transport.coordinates.length-1].coords.long }, { icon: iconFinal });
    
        //this.map.addObject(marker);
        //this.map.addObject(markerFinal);
        this.group.addObject(markerFinal);

        for(var i=0; i < transport.coordinates.length; i++){
        //console.log(transport.coordinates[i].coords);
        points.push({'lat': transport.coordinates[i].coords.lat, 'lng': transport.coordinates[i].coords.long });
        }
    
        //console.log(points);
    
        // Initialize a linestring and add all the points to it:
        let linestring = new H.geo.LineString();
        points.forEach(function(point) {
        linestring.pushPoint(point);
        });
        
        // Initialize a polyline with the linestring:
        let polyline = new H.map.Polyline(linestring, { 
            style: { lineWidth: 10 },
            arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
        });
        
        // Add the polyline to the map:
        //this.map.addObject(polyline);
        this.group.addObject(polyline);

        // Zoom the map to make sure the whole polyline is visible:
        this.map.setViewBounds(polyline.getBounds());
    
        // Create an info bubble object at a specific geographic location:
        let bubble = new H.ui.InfoBubble({ lng: transport.coordinates[transport.coordinates.length-1].coords.long, lat: transport.coordinates[transport.coordinates.length-1].coords.lat }, {
            content: 'Localização atual'
        });
    
        // Add info bubble to the UI:
        // this.ui.addBubble(bubble);
    
        if(transport.coordinates.length > 0){
            //console.log(this.rastreamento);
            if(this.lived){
                //console.log(this.lived);
                if(this.rastreamento === undefined){
                    this.rastreamento = setInterval(() => { this.rastrear(); }, 1000 * 5);
                }
                this.textoRastrear = 'Rastreando...';
            }else{
                this.textoRastrear = 'Rastreado';
            }
            //this.rastreamento = setInterval( this.rastrear() , 1000 * 5 );      
        }

        this.loadData();
    }

    visualizarRota(coordinates: any) {

        this.group.removeAll();

        let points = [];
    
        let iconFinal = new H.map.Icon('assets/rcr/icon-local.png');
        let icon = new H.map.Icon('assets/rcr/icon-logo.png');
        
        let marker = new H.map.Marker({ lat: coordinates[0].coords.lat, lng: coordinates[0].coords.long }, { icon: icon });
        let markerFinal = new H.map.Marker({ lat: coordinates[coordinates.length-1].coords.lat, lng: coordinates[coordinates.length-1].coords.long }, { icon: iconFinal });
    
        //this.map.addObject(marker);
        this.group.addObject(markerFinal);

        for(var i=0; i < coordinates.length; i++){

            var latitude = coordinates[i].coords.lat.toString();
            
            if(latitude.substring(0, 1) == '0'){
                continue;
            }

            points.push({'lat': coordinates[i].coords.lat, 'lng': coordinates[i].coords.long });
        }
    
        let linestring = new H.geo.LineString();
        points.forEach(function(point) {
        linestring.pushPoint(point);
        });
        
        // Initialize a polyline with the linestring:
        let polyline = new H.map.Polyline(linestring, { 
            style: { strokeColor: 'black', lineWidth: 4 },
            //arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
        });
        
        this.group.addObject(polyline);

        this.map.setViewBounds(polyline.getBounds());    
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();
        // this.rastrear();
        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((dashboardLives) => {
            this.dashboardLives = dashboardLives;
            this.dataSource.data = dashboardLives;
        });

        // this.defaults = {}; // takes blank :)
        // console.log(this.transports); 
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        let defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
            this.mapElement.nativeElement,
            // defaultLayers.terrain.map,
            defaultLayers.normal.map,
            {
                zoom: 13,
                //center: { lat: -3.04945, lng:  -60.01845 }  
                center: { lat: -3.0791, lng:  -60.00613 } 
            }
        );
        let mapEvents = new H.mapevents.MapEvents(this.map);
        // Add event listener:
        this.map.addEventListener('tap', function(evt) {
        // Log 'tap' and 'mouse' events:
            console.log(evt.type, evt.currentPointer.type); 
        });
        // Instantiate the default behavior, providing the mapEvents object: 
        let behavior = new H.mapevents.Behavior(mapEvents);
        this.ui = H.ui.UI.createDefault(this.map, defaultLayers, 'pt-BR');

        let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');

        let mapSettings = this.ui.getControl('mapsettings');
        let zoom = this.ui.getControl('zoom');
        let scalebar = this.ui.getControl('scalebar');
        //let panorama = ui.getControl('panorama');

        //panorama.setAlignment('top-left');
        mapSettings.setAlignment('top-left');
        zoom.setAlignment('top-left');
        scalebar.setAlignment('top-left'); 

        this.group = new H.map.Group();
        this.map.addObject(this.group);

        let iconBus = new H.map.Icon('assets/rcr/icon-rota.png');

        //console.log(this.data);

        this.apiTransport.getTransportID(this.data).
            subscribe(
                transport => {
                    console.log(transport.data);

                    this.transports = [];
                    this.coordinates = [];
                    let tracker = this.data.trackerSerial;

                    for(var i=0; i < transport.data.coordinates.length; i++){
                        //console.log(transport.coordinates[i].coords);
                        //points.push({'lat': transport.coordinates[i].coords.lat, 'lng': transport.coordinates[i].coords.long });
                    
                        //tracker
                        //console.log(trans.data[i].trackerSerial);
                        
                        if(tracker == transport.data.coordinates[i].tracker){
                            this.coordinates.push(transport.data.coordinates[i]); 
                        }
                    }

                    //console.log(this.coordinates);
                    this.visualizarRota(this.coordinates);
                },
                error => {
                    console.log(error);
                });

        if(this.data.routes){
            //console.log('entrou aqui');
            //console.log(this.data.routes.employees.lenght);
            for(var i=0; i < this.data.routes.employees.length; i++){
                var obj = JSON.parse(this.data.routes.employees[i].coordinates);
                //console.log(this.data.routes.employees[i]);
                this.positions.push(obj);
                this.employeeIDs.push(this.data.routes.employees[i]._id);

                //var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
                //console.log(obj.lat);
                //let marker = new H.map.Marker({ lat: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.lat, lng: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.long }, { icon: icon });    
                let marker = new H.map.Marker({ lat: obj.lat, lng: obj.lng},{ icon: iconBus });
                this.group.addObject(marker);
            }

            setTimeout(() => {
                this.editando = true;
            }, 1000);
            
            this.transport = this.data;

            this.calcularRota();
        }

        // setTimeout(() => {

        //     console.log(this.transports);
        //     let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');

        //     this.group = new H.map.Group();

        //     this.map.addObject(this.group);
        //     let that = this;
        //     // add 'tap' event listener, that opens info bubble, to the group
        //     // this.group.addEventListener('tap', function (evt, that) {
        //     //   // event target is the marker itself, group is a parent event target
        //     //   // for all objects that it contains
        //     // //   let bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
        //     // //     // read custom data
        //     // //     content: evt.target.getData()
        //     // //   });
        //     //   console.log(evt.target.getData());
        //     //   this.selectedValue = evt.target.getData();
        //     //   that.rastrear();
        //     //   // show info bubble
        //     // //   this.ui.addBubble(bubble);
        //     // }, false);

        //     this.group.addEventListener('tap', (evt) => this.rastrear(evt),false);

        //     this.group.addEventListener('tap', (evt) => this.rastrear(evt),false);

        //     for(var i=0; i < this.transports.length; i++){
        //         console.log(this.transports[i].coordinates[0].coords);
        //         let marker = new H.map.Marker({ lat: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.lat, lng: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.long }, { icon: icon });    
        //         // this.map.addObject(marker);
        //         // marker.setData('rastreador adicionado: ' + this.transports[i].trackerSerial);
        //         marker.setData(this.transports[i].trackerSerial);
        //         marker.addEventListener('pointerenter',function(evt) {
        //             // evt.target.style.opacity = 0.6
        //             //console.log(evt.target.style.opacity); 
        //         });

        //         this.group.addObject(marker);
        //     }
        // }, 1300);
    }

    create() {

        this.dialog.open(DashboardRoutesCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((dashboardLive: DashboardRoutes) => {

            if (dashboardLive) {
                // this.apiDashboardLive.createUsingPOST(dashboardLive).
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

    update(dashboardLive) {

        this.dialog.open(DashboardRoutesCreateUpdateComponent, {
            data: dashboardLive,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_dashboardLive) => {
            if (_dashboardLive) {
                // this.apiDashboardLive.updateUsingPUT(_dashboardLive).
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

    delete(dashboardLive) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: dashboardLive.id, displayName: dashboardLive.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_dashboardLive: DashboardRoutes) => {

            if (_dashboardLive && _dashboardLive.id) {
                // this.apiDashboardLive.deleteUsingDELETE(_dashboardLive.id).
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

  desativarRastrear(){
    console.log('desativando rastreamento...');
    console.log(this.rastreamento);
    clearInterval(this.rastreamento); 
    this.textoRastrear = 'Rastrear';  
    this.lived = false;

    // this.map.removeObjects(this.map.getObjects());
    this.group.removeAll();
    // this.map.Zoom

    let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
    this.map.setZoom(13);
    this.map.setCenter( { lat: -3.04945, lng:  -60.01845 } );

    for(var i=0; i < this.transports.length; i++){
        console.log(this.transports[i].coordinates[0].coords);
        let marker = new H.map.Marker({ lat: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.lat, lng: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.long }, { icon: icon });    
        //this.map.addObject(marker);
        marker.setData(this.transports[i].trackerSerial);
        this.group.addObject(marker);
    }

    this.group.addEventListener('tap', (evt) => this.rastrear(evt),false);
  }

  calcularRota(){
    //this.group.removeAll();
    //this.map.setZoom(13);
    //this.map.setCenter( { lat: -3.04945, lng:  -60.01845 } );

    console.log('Rota: ' + this.searchTerm.value);
    var map = this.map;
    //console.log(this.group);
    //console.log(this.group.forEach());
    //console.log(this.group.getObjects());
    console.log(this.positions);

    var group = this.group;
    var map = this.map;
    // Create the parameters for the routing request:
    let routingParameters = {};
        // The routing mode:
    routingParameters['mode'] = 'fastest;car';
        // The start point of the route:
    for(var i=0; i < this.positions.length; i++){
        routingParameters['waypoint' + i] = 'geo!' + this.positions[i].lat + ',' + this.positions[i].lng;
    }

    routingParameters['representation'] = 'display';

    // Define a callback function to process the routing response:
    let onResult = function(result) {
    let route,
        routeShape,
        startPoint,
        endPoint,
        linestring;
    
    if(result.response.route) {
        // Pick the first route from the response:
        route = result.response.route[0];
        // Pick the route's shape:
        routeShape = route.shape;

        // Create a linestring to use as a point source for the route line
        linestring = new H.geo.LineString();

        // Push all the points in the shape into the linestring:
        routeShape.forEach(function(point) {
            var parts = point.split(',');
            linestring.pushLatLngAlt(parts[0], parts[1]);
        });

        // Retrieve the mapped positions of the requested waypoints:
        startPoint = route.waypoint[0].mappedPosition;
        endPoint = route.waypoint[1].mappedPosition;

        // Create a polyline to display the route:
        let routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'black', lineWidth: 4 },
            //style: { strokeColor: 'blue', lineWidth: 7 },
            //arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
        });

        // Create a marker for the start point:
        let startMarker = new H.map.Marker({
            lat: startPoint.latitude,
            lng: startPoint.longitude
        });

        // Create a marker for the end point:
        let endMarker = new H.map.Marker({
            lat: endPoint.latitude,
            lng: endPoint.longitude
        });

        // Add the route polyline and the two markers to the map:
        //group.addObjects([routeLine, startMarker, endMarker]);
        //group.addObjects([routeLine, endMarker]);
        group.addObjects([routeLine]);
        
        // Set the map's viewport to make the whole route visible:
        map.setViewBounds(routeLine.getBounds());
        }
    };

    // Get an instance of the routing service:
    let router = this.platform.getRoutingService();

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
    function(error) {
        alert(error.message);
    });
  }

  pesquisarEndereco(){

    console.log('Rota: ' + this.searchTerm.value);
    this.searchValue = this.searchTerm.value;

    var group = this.group;
    console.log(this.searchValue);
    // Create the parameters for the geocoding request:
    let geocodingParams = {
        searchText: this.searchValue
    };
    
    var positions = this.positions

    // Define a callback function to process the geocoding response:
    let onResult = function(result) {
        var locations = result.Response.View[0].Result,position,marker;
        // Add a marker for each location found
        for (var i = 0;  i < locations.length; i++) {
            position = {
            lat: locations[i].Location.DisplayPosition.Latitude,
            lng: locations[i].Location.DisplayPosition.Longitude
            };

            positions.push(position);
            
            marker = new H.map.Marker(position);
            group.addObject(marker);
        }
    };
    
    // Get an instance of the geocoding service:
    let geocoder = this.platform.getGeocodingService();
    
    // Call the geocode method with the geocoding parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    geocoder.geocode(geocodingParams, onResult, function(e) {
        alert(e);
    });
  }

  limpar(){

    //console.log('Entrou no limpar()');
    this.group.removeAll();
    this.searchTerm.setValue("Brasil, Manaus, ");

    this.positions = [];
    this.employeeIDs = [];
    //this.map.setZoom(13);
    //this.map.setCenter( { lat: -3.04945, lng:  -60.01845 } );
  }

  pesquisarLugares(){

    var group = this.group;
    //this.searchValue = this.searchTerm.value;
    this.searchValue = this.addressValue;
    
    // Obtain a Search object through which to submit search
    // requests:
    let search = new H.places.Search(this.platform.getPlacesService()),
      searchResult, error;

    // Define search parameters:
    let params = {
    // Plain text search for places with the word "hotel"
    // associated with them:
      'q': this.searchValue,
    //  Search in the Chinatown district in San Francisco:
      'at': '-3.04945,-60.01845'
    };

    // Define a callback function to handle data on success:
    function onResult(data) {
      addPlacesToMap(data.results);
    }

    // Define a callback function to handle errors:
    function onError(data) {
      error = data;
    }

    var positions = this.positions;

    var employees =  this.employees.find(e => e.id === this.employeeValue.id );

    this.employeeIDs.push(employees.id);
    //this.employeeIDs = ["5c73fe6768eba032065df362","5c7404ae0bbb8635c617983a"];
    console.log(this.employeeIDs);
    
    //this.employeeRoutes.employees.push(employees.id);

    var apiEmployee = this.apiEmployee;
    // This function adds markers to the map, indicating each of
    // the located places:
    function addPlacesToMap(result) {
      var item = result.items[0];
      result.items = [];
      result.items.push(item);
      //console.log(result);
      group.addObjects(result.items.map(function (place) {
        //console.log(place);
        let iconBus = new H.map.Icon('assets/rcr/icon-rota.png');
        var marker = new H.map.Marker(
         {lat: place.position[0],lng: place.position[1]},{ icon: iconBus })

      positions.push({"lat": place.position[0],"lng": place.position[1]});

      //console.log(positions);
      employees.coordinates = '{"lat":' + place.position[0] + "," + '"lng":' + place.position[1]+ '}';
      //JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
      console.log(employees.coordinates);

      apiEmployee.updateEmployees(employees).
          subscribe(
              success => {
                  console.log('Coordanada atualizada com sucesso');
                  // Reload the table after the post
              },
              error => {
                  console.log(error);
              });

      return marker;
      }));
    }   

    // Run a search request with parameters, headers (empty), and
    // callback functions:
    search.request(params, {}, onResult, onError);
    //console.log(this.employees);
}

  employeeChange(value){
    //this.searchTerm.setValue(value.address);
    this.addressValue = value.address;
  }

  confirmarRota(){

    let employeeRoutesJson = {};
        // The routing mode:
    employeeRoutesJson['employees'] = this.employeeIDs;

    //const employees =  this.employees.find(e => e.id === this.employeeValue.id );
    console.log(this.employeeRoutes);
    console.log( this.data);


    if(this.data.routes){
        this.apiTransport.editarRota(employeeRoutesJson, this.data).
        subscribe(
            success => {
                this.snackBar.open('Rota criada com sucesso!', 'OK', {
                    duration: 10000
                });

                //console.log('Coordanada atualizada com sucesso');
                this.dialogRef.close(this.data);
                // Reload the table after the post
            },
            error => {
                console.log(error);
            });
    }else{
        this.apiTransport.adicionarRota(employeeRoutesJson, this.data).
            subscribe(
                success => {
                    this.snackBar.open('Rota criada com sucesso!', 'OK', {
                        duration: 10000
                    });

                    //console.log('Coordanada atualizada com sucesso');
                    this.dialogRef.close(this.data);
                    // Reload the table after the post
                },
                error => {
                    console.log(error);
                });
    }
  }

  popularRota(){
    for(var i=0; i < this.positions.length; i++){
        //routingParameters['waypoint' + i] = 'geo!' + this.positions[i].lat + ',' + this.positions[i].lng;
        console.log(this.positions[i]);
    }
  }
}

    