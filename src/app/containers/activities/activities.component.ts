
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Activity } from 'app/models/activities/activities.model';
import { ActivityCreateUpdateComponent } from './activity-create-update/activity-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './activities.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ActivityControllerService } from 'app/module/activities';

@Component({
    selector: 'fury-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss'],
    animations: [fadeOutAnimation,
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Activity[]> = new ReplaySubject<Activity[]>(1);
    data$: Observable<Activity[]> = this.subject$.asObservable();
    activities: Activity[];
    expandedElement: any;
    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'Atividade', property: 'description', visible: true, isModelProperty: true },
        // { name: 'Periodicidade', property: 'periodicity', cellContent: 'periodicity.name',visible: true, isModelProperty: true },
        { name: 'Tipo', property: 'serviceOrderType', cellContent: 'serviceOrderType.name', visible: true, isModelProperty: true },
        { name: 'Equipe', property: 'team', cellContent: 'team.name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Activity> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiActivity: ActivityControllerService
    ) { }

    loadData() {
        this.apiActivity.getAllUsingGET()
            .subscribe(activities => {
                this.activities = activities;
                this.dataSource.data = activities;
                this.paginator.firstPage();
            },
                error => {
                    if (error.status === 0 || error.status === 404) {
                        this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
                        });
                    }
                });
        // this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((activities) => {
            this.activities = activities;
            this.dataSource.data = activities;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(ActivityCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((activity: Activity) => {

            if (activity) {
                this.apiActivity.createUsingPOST(activity).
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

    update(activity) {

        this.dialog.open(ActivityCreateUpdateComponent, {
            data: activity,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_activity) => {
            if (_activity) {
                this.apiActivity.updateUsingPUT(_activity).
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

    delete(activity) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: activity.id, displayName: activity.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_activity: Activity) => {

            if (_activity && _activity.id) {
                this.apiActivity.deleteUsingDELETE(_activity.id).
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

        if (typeof (_cell) === 'undefined') {
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

