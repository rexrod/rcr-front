
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Segment } from 'app/models/segments/segments.model';
import { SegmentControllerService } from '../../module/segments';
import { SegmentCreateUpdateComponent } from './segment-create-update/segment-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';


@Component({
    selector: 'fury-segments',
    templateUrl: './segments.component.html',
    styleUrls: ['./segments.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class SegmentsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Segment[]> = new ReplaySubject<Segment[]>(1);
    data$: Observable<Segment[]> = this.subject$.asObservable();
    segments: Segment[];
    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'ID', property: 'id', visible: true, isModelProperty: true },
        { name: 'SEGMENTOS', property: 'name', visible: true, isModelProperty: true },
        { name: 'COMPANHIAS', property: 'company', visible: true, isModelProperty: true },
        { name: 'AÇÕES', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Segment> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiSegment: SegmentControllerService
    ) { }

    loadData() {
        this.apiSegment.getAllUsingGET()
            .subscribe(segments => {
                this.segments = segments;
                this.dataSource.data = segments;
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
        ).subscribe((segments) => {
            this.segments = segments;
            this.dataSource.data = segments;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(SegmentCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((segment: Segment) => {
            if (segment) {
                this.apiSegment.createUsingPOST(segment).
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

    update(segment) {

        this.dialog.open(SegmentCreateUpdateComponent, {
            data: segment,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_segment) => {
            if (_segment) {
                this.apiSegment.updateUsingPUT(_segment).
                    subscribe(
                        success => {
                            this.snackBar.open('Item atualizado com sucesso!', 'OK', {
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

    delete(segment) {
        this.dialog.open(DialogDeleteComponent, {
            data: { id: segment.id, displayName: segment.id},
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_segment: Segment) => {

            if (_segment && _segment.id) {
                this.apiSegment.deleteUsingDELETE(_segment.id).
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
                            this.snackBar.open(error.error[0] && error.error[0].title ? error.error[0].title : 'Erro na requisição.',
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
}

