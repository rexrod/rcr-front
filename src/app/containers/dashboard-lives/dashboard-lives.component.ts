
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { DashboardLive } from 'app/models/dashboard-lives/dashboard-lives.model';
import { DashboardLiveCreateUpdateComponent } from './dashboard-live-create-update/dashboard-live-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';
import { HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent }                           from '@angular/common/http';
import { environment } from 'environments/environment.dev';
import { Transport } from 'app/models/transports/transports.model';
import { Coordinates } from 'app/models/transports/coordinates.model';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './dashboard-lives.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TransportControllerService } from '../transports/transports.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RastreadoresRoutingModule } from '../rastreadores/rastreadores-routing.module';

// export interface Rastreador {
//     value: string;
//     viewValue: string;
//   }

declare var H: any;

@Component({
    selector: 'fury-dashboard-lives',
    templateUrl: './dashboard-lives.component.html',
    styleUrls: ['./dashboard-lives.component.scss'],
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
export class DashboardLivesComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<DashboardLive[]> = new ReplaySubject<DashboardLive[]>(1);
    data$: Observable<DashboardLive[]> = this.subject$.asObservable();
    dashboardLives: DashboardLive[];
    
    transports: Transport[];
    transport: Transport;

    // form: FormGroup;
    selectedValue: string;
    lived = false;

    @Input()
    rastreadores: any[] = [];

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
    dataSource: MatTableDataSource<DashboardLive> | null;

    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }


    private platform: any;

    @ViewChild("map")
    public mapElement: ElementRef;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiTransport: TransportControllerService,
        protected httpClient: HttpClient, 
        // private apiDashboardLive: DashboardLiveControllerService
    ) { 
        this.platform = new H.service.Platform({
            "app_id": "f9xS9zNUPJwcnpSM5fkl",
            "app_code": "KFOs5agTKxE3hV8cJIA_7Q"
        });
        // lives: DashboardLivesComponent;
    }

    loadData() {

        this.apiTransport.getAll()
          .subscribe(trans => {
            //console.log(trans);
            //console.log(trans.data);
            // this.transports = trans;
            // this.dataSource.data = trans.data; //transports;
            
            this.transports = [];
            this.rastreadores = [];
            for(var i=0; i < trans.data.length; i++){
              //console.log(trans.data[i]);
              
            //   if(trans.data[i].trackerSerial){
              if(trans.data[i].coordinates.length > 0){
                //console.log(trans.data[i]);
                if((trans.data[i].status === true) && (trans.data[i].trackerSerial)){
                  this.transports.push(trans.data[i]);
                  this.rastreadores.push(trans.data[i].trackerSerial);
                }
              }
            }
            //console.log(this.rastreadores);
          },
           error => {
               if (error.status === 0 || error.status === 404) {
                   this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
                   });
               }
           });
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
        //let icon = new H.map.Icon('assets/rcr/icon-logo.png');
        let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');   
        
        let marker = new H.map.Marker({ lat: transport.coordinates[0].coords.lat, lng: transport.coordinates[0].coords.long }, { icon: icon });
        let markerFinal = new H.map.Marker({ lat: transport.coordinates[transport.coordinates.length-1].coords.lat, lng: transport.coordinates[transport.coordinates.length-1].coords.long }, { icon: iconFinal });
    
        //this.map.addObject(marker);
        //this.map.addObject(markerFinal);
        //this.group.addObject(marker);
        this.group.addObject(markerFinal);

        for(var i=0; i < transport.coordinates.length; i++){
        //console.log(transport.coordinates[i].coords);
            //console.log(transport.coordinates[i].coords.lat);
            var latitude = transport.coordinates[i].coords.lat.toString();
            //console.log(latitude);
            //console.log(typeof latitude.toString());

            if(latitude.substring(0, 1) == '0'){
                //console.log(transport.coordinates[i].coords.lat);
                continue;
            }
            //0.5666667
            points.push({'lat': transport.coordinates[i].coords.lat, 'lng': transport.coordinates[i].coords.long });
        }
    
        //console.log(points);
    
        // Initialize a linestring and add all the points to it:
        let linestring = new H.geo.LineString();
        points.forEach(function(point) {
        linestring.pushPoint(point);
        });
        
        // Initialize a polyline with the linestring:
        let polyline = new H.map.Polyline(linestring,{
            //style: { lineWidth: 10 },
            //style: { strokeColor: 'black', lineWidth: 7 },
            style: { strokeColor: 'black', lineWidth: 4 },
            //arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
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
                center: { lat: -3.04945, lng:  -60.01845 }  
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

        // Create a marker using the previously instantiated icon:
        // let marker = new H.map.Marker({ lat: -3.04945, lng:  -60.01845 }, { icon: icon });
        // let marker1 = new H.map.Marker({ lat: -3.0587, lng:  -60.03195 }, { icon: icon });
        // let marker2 = new H.map.Marker({ lat: -3.06046, lng:  -60.00178 }, { icon: icon });
        // let marker3 = new H.map.Marker({ lat: -3.03579, lng:  -59.97076 }, { icon: icon });
        // let marker4 = new H.map.Marker({ lat: -3.07024, lng:  -59.97119 }, { icon: icon });
        // let marker5 = new H.map.Marker({ lat: -3.05421, lng:  -60.00145 }, { icon: icon });
        // let marker6 = new H.map.Marker({ lat: -3.05832, lng:  -59.96532 }, { icon: icon });
        
        //Add the marker to the map:
        // this.map.addObject(marker);
        // this.map.addObject(marker1);
        // this.map.addObject(marker2);
        // this.map.addObject(marker3);
        // this.map.addObject(marker4);
        // this.map.addObject(marker5);
        // this.map.addObject(marker6);      

        setTimeout(() => {

            //console.log(this.transports);
            let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');

            this.group = new H.map.Group();

            this.map.addObject(this.group);
            let that = this;
            // add 'tap' event listener, that opens info bubble, to the group
            // this.group.addEventListener('tap', function (evt, that) {
            //   // event target is the marker itself, group is a parent event target
            //   // for all objects that it contains
            // //   let bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
            // //     // read custom data
            // //     content: evt.target.getData()
            // //   });
            //   console.log(evt.target.getData());
            //   this.selectedValue = evt.target.getData();
            //   that.rastrear();
            //   // show info bubble
            // //   this.ui.addBubble(bubble);
            // }, false);

            this.group.addEventListener('tap', (evt) => this.rastrear(evt),false);

            this.group.addEventListener('tap', (evt) => this.rastrear(evt),false);

            for(var i=0; i < this.transports.length; i++){
                //console.log(this.transports[i].coordinates[0].coords);
                let marker = new H.map.Marker({ lat: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.lat, lng: this.transports[i].coordinates[this.transports[i].coordinates.length-1].coords.long }, { icon: icon });    
                // this.map.addObject(marker);
                // marker.setData('rastreador adicionado: ' + this.transports[i].trackerSerial);
                marker.setData(this.transports[i].trackerSerial);
                marker.addEventListener('pointerenter',function(evt) {
                    // evt.target.style.opacity = 0.6
                    //console.log(evt.target.style.opacity); 
                });

                this.group.addObject(marker);
            }
        }, 1300);
    }

    create() {

        this.dialog.open(DashboardLiveCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((dashboardLive: DashboardLive) => {

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

        this.dialog.open(DashboardLiveCreateUpdateComponent, {
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
        }).afterClosed().subscribe((_dashboardLive: DashboardLive) => {

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
    //console.log('desativando rastreamento...');
    //console.log(this.rastreamento);
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
        //console.log(this.transports[i].coordinates[0].coords);
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

    var map = this.map;
    var group = this.group;
    const transport =  this.transports.find(x => x.trackerSerial === this.selectedValue );
    this.transport = transport;

    // Create the parameters for the routing request:
    let routingParameters = {
        // The routing mode:
        'mode': 'fastest;car',
        // The start point of the route:
        'waypoint0': 'geo!' + transport.coordinates[0].coords.lat + ',' + transport.coordinates[0].coords.long,
        // The end point of the route:
        'waypoint1': 'geo!' + transport.coordinates[transport.coordinates.length-1].coords.lat + ',' + transport.coordinates[transport.coordinates.length-1].coords.long,
        // To retrieve the shape of the route we choose the route
        // representation mode 'display'
        'representation': 'display'
    };

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
            style: { strokeColor: 'green', lineWidth: 6 },
            arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
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
        group.setViewBounds(routeLine.getBounds());
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
}

    