import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
// import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';
// import { ALL_IN_ONE_TABLE_FAKE_DATA } from './notices.fake'; // to test without data
import { NoticePriority } from 'app/models/notices/notices-priorities.model';
// import { Notice } from 'app/module/notices/model/notice';
import { NoticePriorityControllerService } from '../../module/notices';
import { ViewEncapsulation } from '@angular/core';
import { NoticePriorityCreateUpdateComponent } from './notice-priority-create-update/notice-priority-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

@Component({
  selector: 'fury-notices-priorities',
  templateUrl: './notices-priorities.component.html',
  styleUrls: ['./notices-priorities.component.scss'],
  animations: [fadeOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class NoticesPrioritiesComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<NoticePriority[]> = new ReplaySubject<NoticePriority[]>(1);
  data$: Observable<NoticePriority[]> = this.subject$.asObservable();
  priorities: NoticePriority[];

  pageSize = 10;

  // this component is useful for the filter
  @Input()
  columns: ListColumn[] = [
    { name: 'Id', property: 'id', visible: true, isModelProperty: true },
    { name: 'Prioridade', property: 'name', visible: true, isModelProperty: true },
    { name: 'Nível', property: 'level', visible: true, isModelProperty: true },
    { name: 'Cor', property: 'color', visible: true, isModelProperty: true },
    { name: 'Ações', property: 'actions', visible: true }
  ] as ListColumn[];
  dataSource: MatTableDataSource<NoticePriority> | null;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private apiNoticePriority: NoticePriorityControllerService,
    public snackBar: MatSnackBar) {
  }

  loadData() {
    this.apiNoticePriority.getAllUsingGET1()
      .subscribe(priorities => {
        this.priorities = priorities;
        this.dataSource.data = priorities;
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
    ).subscribe((priorities) => {
      this.priorities = priorities;
      this.dataSource.data = priorities;
    });

    this.sort.active = 'level';
    this.sort.direction = 'desc';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create() {

    this.dialog.open(NoticePriorityCreateUpdateComponent, {
      width: '61%', height: '77%',
      panelClass: 'dialog-create-update'
    }).afterClosed().subscribe((priority: NoticePriority) => {

      if (priority) {
        this.apiNoticePriority.createUsingPOST1(priority).
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

  update(priority) {

    this.dialog.open(NoticePriorityCreateUpdateComponent, {
      data: priority,
      width: '61%', height: '77%',
      panelClass: 'dialog-create-update'
    }).afterClosed().subscribe((_priority) => {
      if (_priority) {

        this.apiNoticePriority.updateUsingPUT1(_priority).
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


  delete(priority) {
    this.dialog.open(DialogDeleteComponent, {
        data: { id: priority.id, displayName: priority.id},
        panelClass: 'dialog-delete'
    }).afterClosed().subscribe((_priority: NoticePriority) => {

        if (_priority && _priority.id) {
            this.apiNoticePriority.deleteUsingDELETE1(_priority.id).
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
}
