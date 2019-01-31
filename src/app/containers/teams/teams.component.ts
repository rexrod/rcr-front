
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Team } from 'app/models/teams/teams.model';
import { TeamCreateUpdateComponent } from './team-create-update/team-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './teams.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TeamControllerService } from 'app/module/activities';

@Component({
    selector: 'fury-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
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
export class TeamsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Team[]> = new ReplaySubject<Team[]>(1);
    data$: Observable<Team[]> = this.subject$.asObservable();
    teams: Team[];
    expandedElement: any;
    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'EQUIPES', property: 'name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Team> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiTeam: TeamControllerService
    ) { }

    loadData() {
        this.apiTeam.getAllUsingGET1()
            .subscribe(teams => {
                this.teams = teams;
                this.dataSource.data = teams;
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
        ).subscribe((teams) => {
            this.teams = teams;
            this.dataSource.data = teams;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(TeamCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((team: Team) => {

            if (team) {
                this.apiTeam.createUsingPOST1(team).
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

    update(team) {

        this.dialog.open(TeamCreateUpdateComponent, {
            data: team,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_team) => {
            if (_team) {
                this.apiTeam.updateUsingPUT1(_team).
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

    delete(team) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: team.id, displayName: team.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_team: Team) => {

            if (_team && _team.id) {
                this.apiTeam.deleteUsingDELETE1(_team.id).
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

