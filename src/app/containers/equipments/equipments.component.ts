
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Equipment } from 'app/models/equipments/equipments.model';
import { EquipmentCreateUpdateComponent } from './equipment-create-update/equipment-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

import { EquipmentControllerService } from 'app/module/equipments';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EquipmentAddPartComponent } from './equipmentAddPartComponent/equipment-add-part.component';
import { environment } from 'environments/environment';
import { ListEquipment } from 'app/models/equipments/lists.model';
import { EquipmentAddActivityComponent } from './equipment-add-activity-component/equipment-add-activity.component';

@Component({
    selector: 'fury-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss'],
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
export class EquipmentsComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Equipment[]> = new ReplaySubject<Equipment[]>(1);
    data$: Observable<Equipment[]> = this.subject$.asObservable();
    equipments: Equipment[];
    expandedElement: any;
    pageSize = 10;
    lists: ListEquipment[] = [
        { id: 1, name: 'Peças' },
        { id: 2, name: 'Ações' },
    ];
    // Seleciona Peças por padrão
    selected: any[] = [];

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'EQUIPAMENTOS', property: 'name', visible: true, isModelProperty: true },
        { name: 'Setor', property: 'sector', cellContent: 'sector.name', visible: true, isModelProperty: true },
        { name: 'Fabricante', property: 'fabricator', cellContent: 'model.fabricator.name', visible: true, isModelProperty: true },
        { name: 'Modelo', property: 'model', cellContent: 'model.name', visible: true, isModelProperty: true },
        { name: 'Listas', property: 'lists', visible: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Equipment> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        private apiEquipment: EquipmentControllerService
    ) {

    }

    loadData() {
        this.apiEquipment.getAllUsingGET()
            .subscribe(equipments => {
                this.equipments = equipments;
                // Preenche o valor padrão da coluna lista
                for (let i = 0; i < equipments.length; i++) {
                    this.selected[i] = 1;
                }
                // Dados da tabela
                this.dataSource.data = equipments;
            },
                error => {
                    // console.log(error);
                    if (error.status === 0 || error.status === 404 || error.status === 500) {
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
        ).subscribe((equipments) => {
            this.equipments = equipments;
            this.dataSource.data = equipments;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }

    create() {

        this.dialog.open(EquipmentCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((equipment: Equipment) => {

            if (equipment) {
                this.apiEquipment.createUsingPOST(equipment).
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

    update(equipment) {

        this.dialog.open(EquipmentCreateUpdateComponent, {
            data: equipment,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_equipment) => {
            if (_equipment) {
                this.apiEquipment.updateUsingPUT(_equipment).
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

    delete(equipment) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: equipment.id, displayName: equipment.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_equipment: Equipment) => {

            if (_equipment && _equipment.id) {
                this.apiEquipment.deleteUsingDELETE(_equipment.id).
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

    addPart(part) {
        this.dialog.open(EquipmentAddPartComponent, {
            data: part,
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe((_part) => {
            if (_part) {
                this.apiEquipment.updateUsingPUT(_part).
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

    deletePart(obj, _equipment) {
        const _parts = _equipment.parts;
        const index = _parts.indexOf(obj);
        // remove o objeto
        _parts.splice(index, 1);
        // Recebe os ids dos objetos
        _equipment.idsPart = _parts.map(_obj => _obj.id);
        _equipment.idModel = _equipment.model.id;
        _equipment.idSector = _equipment.sector.id;
        // Que a força esteja com você!
        if (_equipment) {
            this.apiEquipment.updateUsingPUT(_equipment).
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
    }

    addActivity(activity) {
        this.dialog.open(EquipmentAddActivityComponent, {
            data: activity,
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe((_activity) => {
            if (_activity) {
                this.apiEquipment.updateUsingPUT(_activity).
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

    deleteActivity(obj, _equipment) {
        const _activities = _equipment.activities;
        const index = _activities.indexOf(obj);
        // remove o objeto
        _activities.splice(index, 1);
        // Recebe os ids dos objetos
        _equipment.idsPart = _activities.map(_obj => _obj.id);
        // _equipment.idModel = _equipment.model.id;
        // _equipment.idSector = _equipment.sector.id;
        // Que a força esteja com você!
        if (_equipment) {
            this.apiEquipment.updateUsingPUT(_equipment).
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
    toggleRow(i, row) {
        const isPart = this.selected[i] === 1;
        const isActivity = this.selected[i] === 2;

        if (isPart) {
            if (this.expandedElement === row) {
                this.expandedElement = null;
            } else {
                this.expandedElement = row;
            }
        }

        if (isActivity) {
            if (this.expandedElement === row) {
                this.expandedElement = null;
            } else {
                this.expandedElement = row;
            }
        }

    }

    urlImg(img) {
        return img ? environment.origin.fileServer + img : '/assets/icons/baseline_add_a_photo_black_48dp.png';
    }

    onChange() {
        this.expandedElement = null;
    }


}

