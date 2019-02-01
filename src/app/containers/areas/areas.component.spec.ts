import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { AreasComponent } from './areas.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/common/material-components.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../core/common/list/list.module';
import { AreasRoutingModule } from './areas-routing.module';
import { AreaCreateUpdateModule } from './area-create-update/area-create-update.module';
import { HttpClientModule } from '@angular/common/http';
import { AreaControllerService } from '../../module/companies';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/of';
import { environment } from 'environments/environment.dev';
import { Area } from 'app/models/areas/areas.model';
import { AreaCreateUpdateComponent } from './area-create-update/area-create-update.component';
import { MatDialog } from '@angular/material';
import { inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

describe('AreasComponent', () => {
    let component: AreasComponent;
    let fixture: ComponentFixture<AreasComponent>;

    let service: AreaControllerService;
    let httpMock: HttpTestingController;

    const dummySOT: Area[] = [{
        'id': 1,
        'name': 'Área 01',
        'company': {
            'id': 1,
            'fantasyName': 'Fantasy Name',
            'cnpj': '24073072000127',
            'socialName': 'Name Social',
            'registrationState': '888888',
            'registrationMunicipal': '9999999',
            'street': 'Rua H, 768',
            'complement': 'Complementossss',
            'houseNumber': '232',
            'cep': '69075022',
            'telephoneNumber': '9212324134',
            'contactName': '12321',
            'email': 'teste@teste.com',
            'idBranch': 0
        }
    }];

    class FakeApi {
        getAllUsingGET() {
            return Observable.of(dummySOT);
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                MaterialModule,
                AreasRoutingModule,
                AreaCreateUpdateModule,
                HttpClientModule,
                HttpClientTestingModule,
                // Core
                ListModule,
                BrowserAnimationsModule,
            ],
            declarations: [AreasComponent],
            providers: [
                { provide: AreaControllerService, useClass: FakeApi }
            ]

            // providers: [AreaControllerService]
        }).compileComponents();

        service = TestBed.get(AreaControllerService);
        httpMock = TestBed.get(HttpTestingController);

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AreasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should load the first of getAllUsingGET', () => {
        component.ngOnInit();
        service.getAllUsingGET().subscribe(data => {
            expect(data.length).toBe(1);
            expect(data).toEqual(dummySOT);
        });
    });


    // it('should make a GET request', async(() => {
    //     service.getAllUsingGET();

    //     const req = httpMock.expectOne(environment.origin.serviceOrderTypes + '/areas/all');
    //     console.log(req);
    //     expect(req.request.method).toEqual('GET');
    //     req.flush([]);
    // }));

    // it('should get the correct name for areas mocking', () => {
    //     service.getAllUsingGET().subscribe(data => {
    //         expect(data[0].name).toBe('Área 01');
    //     });

    //     const req = httpMock.expectOne(environment.origin.serviceOrderTypes + '/areas/all');
    //     expect(req.request.method).toBe('GET');
    // });


    // it('form invalid when empty', () => {
    // });

});

