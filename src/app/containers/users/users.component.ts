
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { User } from 'app/models/users/users.model';
import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './users.fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';
import { UserControllerService } from 'app/module/users';

@Component({
    selector: 'fury-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
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
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
    data$: Observable<User[]> = this.subject$.asObservable();
    users: User[];
    expandedElement: any;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'Nome', property: 'name', visible: true, isModelProperty: true },
        { name: 'Email', property: 'email', visible: true, isModelProperty: true },
        { name: 'Login', property: 'login', visible: true, isModelProperty: true },
        { name: 'Setor', property: 'sector', visible: true, isModelProperty: true },
        { name: '', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<User> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiUser: UserControllerService
    ) { }

    loadData() {
        // this.apiUser.getAllUsingGET()
        //   .subscribe(users => {
        //     this.users = users;
        //     this.dataSource.data = users;
        //      this.paginator.firstPage();
        //   },
        //    error => {
        //        if (error.status === 0 || error.status === 404) {
        //            this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
        //            });
        //        }
        //    });
        this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((users) => {
            this.users = users;
            this.dataSource.data = users;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(UserCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((user: User) => {

            if (user) {
                // this.apiUser.createUsingPOST(user).
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

    update(user) {

        this.dialog.open(UserCreateUpdateComponent, {
            data: user,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_user) => {
            if (_user) {
                // this.apiUser.updateUsingPUT(_user).
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

    delete(user) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: user.id, displayName: user.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_user: User) => {

            if (_user && _user.id) {
                // this.apiUser.deleteUsingDELETE(_user.id).
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

