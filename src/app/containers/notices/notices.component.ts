import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
// import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';
// import { ALL_IN_ONE_TABLE_FAKE_DATA } from './notices.fake'; // to test without data
import { NoticeCreateUpdateComponent } from './notice-create-update/notice-create-update.component';
import { Notice } from 'app/models/notices/notices.model';
// import { Notice } from 'app/module/notices/model/notice';
import { NoticeControllerService } from '../../module/notices';
import { ViewEncapsulation } from '@angular/core';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'fury-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
  animations: [fadeOutAnimation,
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class NoticesComponent implements OnInit, AfterViewInit, OnDestroy {

  private static isInitialLoad = true;
  subject$: ReplaySubject<Notice[]> = new ReplaySubject<Notice[]>(1);
  data$: Observable<Notice[]> = this.subject$.asObservable();
  notices: Notice[];

  pageSize = 10;

  // this component is useful for the filter
  @Input()
  columns: ListColumn[] = [
    { name: 'Id', property: 'id', visible: true, isModelProperty: true },
    { name: 'Título', property: 'title', visible: true, isModelProperty: true },
    { name: 'Validade', property: 'validate', visible: true, isModelProperty: true },
    { name: 'Prioridade', property: 'priorityName', visible: true, isModelProperty: true },
    { name: 'Cor', property: 'priorityColor', visible: true, isModelProperty: true },
    // { name: 'expandedDetail', property: 'detailRow', visible: true, isModelProperty: true },
    { name: 'Ações', property: 'actions', visible: true }
  ] as ListColumn[];
  dataSource: MatTableDataSource<Notice> | null;

  expandedElement: any;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  constructor(
    private dialog: MatDialog,
    private apiNotice: NoticeControllerService,
    public snackBar: MatSnackBar) {

  }

  loadData() {
    this.apiNotice.getAllUsingGET()
      .subscribe(notices => {
        this.notices = notices;
        this.dataSource.data = notices;
        // assignment of sub-objects to the main object
        // const rows = [];

        this.dataSource.data.forEach((n, i) => {
          if (!n.priority) { return; }
          this.dataSource.data[i].priorityId = n.priority.id;
          this.dataSource.data[i].priorityName = n.priority.name;
          this.dataSource.data[i].priorityColor = n.priority.color;
        });
        // this.dataSource.data.forEach(detail => rows.push(detail, { detailRow: true, detail }));
        // this.dataSource.data = rows;
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
    ).subscribe((notices) => {
      this.notices = notices;
      this.dataSource.data = notices;
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create() {

    this.dialog.open(NoticeCreateUpdateComponent, {
      width: '800px',
      panelClass: 'notices-dialog'
    }).afterClosed().subscribe((notice: Notice) => {

      if (notice) {
        this.apiNotice.createUsingPOST(notice).
          subscribe(
            success => {
              this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                duration: 10000
              });
              // Reload the table after the post
              this.loadData();
            },
            error => {
              this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                duration: 10000
              });
            });
      }

    });
  }

  update(notice) {

    this.dialog.open(NoticeCreateUpdateComponent, {
      data: notice,
      width: '800px',
      panelClass: 'notices-dialog'
    }).afterClosed().subscribe((_notice) => {
      if (_notice) {

        this.apiNotice.updateUsingPUT(_notice).
          subscribe(
            success => {
              this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                duration: 10000
              });
              // Reload the table after the post
              this.loadData();
            },
            error => {
              this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                duration: 10000
              });
            });

      }
    });
  }

  delete(notice) {
    this.dialog.open(DialogDeleteComponent, {
      data: { id: notice.id, displayName: notice.id },
      panelClass: 'dialog-delete'
    }).afterClosed().subscribe((_notice: Notice) => {

      if (_notice && _notice.id) {
        this.apiNotice.deleteUsingDELETE(_notice.id).
          subscribe(
            success => {
              this.snackBar.open('Item deletado com sucesso!', 'OK', {
                duration: 10000
              });
              // Reload the table after the post
              this.loadData();
            },
            error => {
              this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
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

