import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticesComponent } from './notices.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/common/material-components.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../core/common/list/list.module';
import { NoticeControllerService } from '../../module/notices';
import { NoticesRoutingModule } from './notices-routing.module';
import { NoticeCreateUpdateModule } from './notice-create-update/notice-create-update.module';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
// import { Notice } from 'app/models/notices/notices.model';
// import { Observable, Subscriber } from 'rxjs';

// class MockCompanyService extends NoticeControllerService {

//     private notices: Notice[] = [
//         {
//             description: 'descrição',
//             id: 10,
//             priorityId: 3,
//             priorityName: 'alta',
//             priorityColor: '#FFF000',
//             validate: '2008-08-08 08:08:08',
//         }
//     ];

//     getAll(): Observable<Notice[]> {
//         console.log('getAll');
//         return Observable.create((observer: Subscriber<any>) => {
//             observer.next(this.notices);
//             observer.complete();
//         });
//     }
// }

describe('NoticesComponent', () => {
    let component: NoticesComponent;
    let fixture: ComponentFixture<NoticesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                MaterialModule,
                NoticesRoutingModule,
                NoticeCreateUpdateModule,
                HttpClientModule,
                // Core
                ListModule,
                BrowserAnimationsModule,
            ],
            declarations: [NoticesComponent],
            providers: [
                NoticeControllerService,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NoticesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

