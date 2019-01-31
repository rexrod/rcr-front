import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ServiceOrderTypesComponent } from './service-order-types.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/common/material-components.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../core/common/list/list.module';
import { ServiceOrderTypesRoutingModule } from './service-order-types-routing.module';
import { ServiceOrderTypeCreateUpdateModule } from './service-order-type-create-update/service-order-type-create-update.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceOrderTypeControllerService } from '../../module/service-order-types';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { environment } from 'environments/environment.dev';

describe('ServiceOrderTypesComponent', () => {
    let component: ServiceOrderTypesComponent;
    let fixture: ComponentFixture<ServiceOrderTypesComponent>;

    let service: ServiceOrderTypeControllerService;
    let httpMock: HttpTestingController;

    const dummySOT = [{
        'id': 1,
        'name': 'Elétrico03',
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
                ServiceOrderTypesRoutingModule,
                ServiceOrderTypeCreateUpdateModule,
                HttpClientModule,
                HttpClientTestingModule,
                // Core
                ListModule,
                BrowserAnimationsModule,
            ],
            declarations: [ServiceOrderTypesComponent],
            providers: [
                { provide: ServiceOrderTypeControllerService, useClass: FakeApi }
            ]

            // providers: [ServiceOrderTypeControllerService]
        }).compileComponents();

        service = TestBed.get(ServiceOrderTypeControllerService);
        httpMock = TestBed.get(HttpTestingController);

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceOrderTypesComponent);
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

    //     const req = httpMock.expectOne(environment.origin.serviceOrderTypes + '/service-order-types/all');
    //     console.log(req);
    //     expect(req.request.method).toEqual('GET');
    //     req.flush([]);
    // }));

    // it('should get the correct name for service-order-types mocking', () => {
    //     service.getAllUsingGET().subscribe(data => {
    //         expect(data[0].name).toBe('Elétrico03');
    //     });

    //     const req = httpMock.expectOne(environment.origin.serviceOrderTypes + '/service-order-types/all');
    //     expect(req.request.method).toBe('GET');
    // });

});
