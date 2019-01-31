import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SegmentsComponent } from './segments.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/common/material-components.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../core/common/list/list.module';
import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentCreateUpdateModule } from './segment-create-update/segment-create-update.module';
import { HttpClientModule } from '@angular/common/http';
import { SegmentControllerService } from '../../module/segments';


describe('SegmentsComponent', () => {
    let component: SegmentsComponent;
    let fixture: ComponentFixture<SegmentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                MaterialModule,
                SegmentsRoutingModule,
                SegmentCreateUpdateModule,
                HttpClientModule,
                // Core
                ListModule,
                BrowserAnimationsModule,
            ],
            declarations: [SegmentsComponent],
            providers: [SegmentControllerService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SegmentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

