# Criando uma Nova Tela

Para iniciar, certifique-se se seu projeto está com o branch de desenvolvimento atualizado.

```sh
git pull origin dev
```

> **Nota:** Por boas práticas, crie um outro *branch* que indentifique o que está fazendo, `git checkout -b user_tela`.

## Adicionando a tela ao menu
Inclua o trecho abaixo no arquivo `src/app/app.component.ts` no menu, adicionando a possição correta:
```typescript
    menu.push({
      name: 'Áreas',
      routeOrFunction: 'areas',
      icon: 'map',
      position: 5
    });
```
## Configurando a rota
No arquivo `src/app/app-routing.module.ts`, adicione no *array* de objetos `routes.children` o trecho abaixo de acordo com a sua tela, exemplo `Áreas`.
```typescript
    {
        path: 'areas',
        loadChildren: 'app/containers/areas/areas.module#AreasModule',
    }
```
## Criando os arquivos *containers*
Crie uma pasta da tela no caminho `src/app/containers`.
```sh
mkdir src/app/containers/areas
```
Crie os arquivos padrões para funcionamento da tela principal:
```sh
touch src/app/containers/areas/areas.module.ts
touch src/app/containers/areas/areas-routing.module.ts
touch src/app/containers/areas/areas.component.ts
touch src/app/containers/areas/areas.component.html
touch src/app/containers/areas/areas.component.scss
touch src/app/containers/areas/areas.fake.ts
```
> **Nota:** O nome da pasta é **inglês** e no **plural**.

## Criando os arquivos padrões de *create* e *update*
Crie a pasta para as "telas" *Create* e *Update*.
```sh
mkdir src/app/containers/areas/area-create-update
```
> **Nota:** O nome passa a ser no **singular** com o sufixo `-create-update`.

Crie os aruivos padrões da pasta `area-create-update`:

```sh
touch src/app/containers/areas/area-create-update/area-create-update.module.ts
touch src/app/containers/areas/area-create-update/area-create-update.component.ts
touch src/app/containers/areas/area-create-update/area-create-update.component.html
touch src/app/containers/areas/area-create-update/area-create-update.component.scss
```
## Crie os arquivos *models*
```sh
mkdir src/app/models/areas
touch src/app/models/areas/areas.model.ts
```
## Adicionando Conteúdo aos Arquivos
### Containers
<!-- Module -->
<details><summary>areas.module.ts</summary>
<p>

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { AreaCreateUpdateModule} from './area-create-update/area-create-update.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AreasRoutingModule,
    AreaCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule
  ],
  declarations: [AreasComponent],
  exports: [AreasComponent]
})
export class AreasModule {}
```
</p>
</details>
<!-- Routing -->
<details><summary>areas-routing.module.ts</summary>
<p>

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas.component';

const routes: Routes = [
  {
    path: '',
    component: AreasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule {}
```

</p>
</details>
<!-- Component -->
<details><summary>areas.component.ts</summary>
<p>

```typescript
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { Area } from 'app/models/areas/areas.model';
//import { AreaControllerService } from '../../module/areas';
import { AreaCreateUpdateComponent } from './area-create-update/area-create-update.component';
// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './areas.fake'; // to test without data

@Component({
    selector: 'fury-areas',
    templateUrl: './areas.component.html',
    styleUrls: ['./areas.component.scss'],
    animations: [fadeOutAnimation],
    host: { '[@fadeOutAnimation]': 'true' },
    encapsulation: ViewEncapsulation.None
})
export class AreasComponent implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<Area[]> = new ReplaySubject<Area[]>(1);
    data$: Observable<Area[]> = this.subject$.asObservable();
    areas: Area[];

    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: 'Área', property: 'name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<Area> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar
        // private apiArea: AreaControllerService
    ) { }

    loadData() {
        // this.apiArea.getAllUsingGET1()
        //   .subscribe(areas => {
        //     this.areas = areas;
        //     this.dataSource.data = areas;
        //   });
        this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        // loads the data from the main table
        this.loadData();

        // apply filters
        this.data$.pipe(
            filter(Boolean)
        ).subscribe((areas) => {
            this.areas = areas;
            this.dataSource.data = areas;
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open(AreaCreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'area-panel'
        }).afterClosed().subscribe((area: Area) => {
            if (area) {
                // this.apiArea.createUsingPOST1(area).
                //   subscribe(() => {
                //     // Reload the table after the post
                //     this.loadData();
                //   });
                this.snackBar.open('Item Cadastrado com Sucesso!','OK',{
                    duration: 3000
                });
            }

        });
    }

    update(area) {

        this.dialog.open(AreaCreateUpdateComponent, {
            data: area,
            width: '61%', height: '77%',
            panelClass: 'area-panel'
        }).afterClosed().subscribe((area) => {
            if (area) {
                // this.apiArea.updateUsingPUT1(area).
                //   subscribe(() => {
                //     // Reload the table after the post
                //     this.loadData();
                //   });
                this.snackBar.open('Item Atualizado com Sucesso!','OK',{
                    duration: 3000
                });
            }
        });
    }

    delete(area) {
        if (area.id) {
            //   this.apiArea.deleteUsingDELETE1(area.id).
            //     subscribe(() => {
            //       // Reload the table after the post
            //       this.loadData();
            //     });
            this.snackBar.open('Item Deletado com Sucesso!','OK',{
                duration: 3000
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
}
```

</p>
</details>
<!-- Fake data -->
<details><summary>areas.fake.ts</summary>
<p>

```typescript
// This is a file for tests
export const ALL_IN_ONE_TABLE_FAKE_DATA = [
    {
      "id": 1,
      "name": "Produção",
    },
    {
        "id": 2,
        "name": "P&D",
      },
      {
          "id": 3,
          "name": "Administrativo",
      }
  ];
```
</p>
</details>
<!-- HTML -->
<details><summary>areas.component.html</summary>
<p>

```html
<div id="background-area">
    <div id="conteiner">
      <div id="card">
        <div id="table-component">
          <!-- TABLE FILTER -->
          <div id="tfilter">
            <div id="title">
              <span>Áreas</span>
            </div>
            <div id="input-filter">
              <fury-list [columns]="columns" (filterChange)="onFilterChange($event)" fxLayoutAlign="center center"
                fxLayout="row"></fury-list>
            </div>
            <div id="add">
              <button mat-mini-fab color="primary" (click)="create()" id="create">
                <mat-icon aria-label="Editar">add</mat-icon>
              </button>
            </div>
          </div>
          <!-- TABLE HEADER -->
          <div id="tmaster">
            <div id="thead" matSort>
              <div class="table-header">
                <div mat-sort-header="id" class="id" fxLayoutAlign="center">ID</div>
                <div mat-sort-header="name" class="name">NOME DA ÁREA</div>
                <div class="actions">AÇÕES</div>
              </div>
              <!-- The header is separate so you do not lose the filters or the sorting -->
            </div>
            <!-- TABLE BODY -->
            <div id="tbody">
              <!-- Note: Mat-table does not compile without mat-cell -->
              <mat-table #table [dataSource]="dataSource" matSort>
                <!-- id Column -->
                <ng-container matColumnDef="id">
                  <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign="center"> ID </mat-header-cell>
                  <mat-cell *matCellDef="let row" fxLayoutAlign="center"> {{row.id}} </mat-cell>
                </ng-container>
  
                <!-- name Column -->
                <ng-container matColumnDef="name">
                  <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign="center"> NOME </mat-header-cell>
                  <mat-cell *matCellDef="let row" fxLayoutAlign="center">{{row.name}}</mat-cell>
                </ng-container>
  
                <!-- actions Column -->
                <ng-container matColumnDef="actions">
                  <mat-header-cell *matHeaderCellDef fxLayoutAlign="center"> AÇÕES </mat-header-cell>
                  <mat-cell *matCellDef="let row" fxLayoutAlign="center">
                    <button mat-mini-fab color="primary" (click)="update(row)" class="btn-stroked no-shadow">
                      <mat-icon aria-label="Editar">edit</mat-icon>
                    </button>
                    <button mat-mini-fab color="primary" (click)="delete(row)" class="btn-stroked no-shadow">
                      <mat-icon aria-label="Deletar">delete</mat-icon>
                    </button>
                  </mat-cell>
                </ng-container>
                <mat-header-row *matHeaderRowDef="visibleColumns"></mat-header-row>
                <mat-row *matRowDef="let row; columns: visibleColumns;" class="clickable"></mat-row>
              </mat-table>
            </div>
          </div>
          <!-- TABLE FOOTER -->
          <div id="tfooter">
            <mat-paginator class="paginator" [pageSize]="pageSize" color="primary"></mat-paginator>
          </div>
        </div>
      </div>
    </div>
  </div>
```

</p>
</details>
<!-- Styles -->
<details><summary>areas.component.scss</summary>
<p>

```scss
@import "_custom_color_scheme.scss";
$theme-background: map-get($map: $mat-sgm-primary, $key: 500);

@mixin column-width($property) {
    max-width: $property;
    min-width: $property;
    width: $property;    
}

// centralizes all container items
%flex-center {
    display: flex;
    flex: 1 1 auto;
    align-content: center;
    justify-content: center;
    align-items: center;
}
  

html,
body {
    height: 100%;
    margin: 0px;
    align-items: center;
}

#background-area {
    height: 100%;
    flex-direction: column;
    box-sizing: border-box;
    @extend %flex-center;
    max-width: 100%; //background: green;
    #conteiner {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: stretch;
        align-items: stretch;
        align-content: stretch;
        height: 91%;
        width: 91%;
        #card {
            flex: 1 1 auto;
            display: flex;
            flex-wrap: wrap;
            #table-component {
                //background-color: #273B56;
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                #tfilter {
                    @extend %flex-center;
                    display: flex;
                    min-height: 64px;
                    box-shadow: 0px 3px 6px rgba( black, 0.16);
                    color: $theme-background;
                    z-index: 2;
                    #title {
                        text-align: center;
                        font-size: 150%;
                        font-weight: bold;
                        display: flex;
                        flex: 1 1 auto;
                        max-width: 15%; //background: yellow;
                        border-right: 1px #707070 solid;
                        span {
                            flex: 1 1 auto;
                        }
                    }
                    #input-filter {
                        @extend %flex-center;
                        max-width: 76.5%;
                        fury-list {
                            flex: 1 1 auto;
                            .fury-list-table {
                                flex: 1 1 auto;
                                .fury-list-name {
                                    display: none;
                                }
                                .fury-list-header {
                                    border-bottom: unset !important;
                                    background: unset !important;
                                    div {
                                        align-items: center !important;
                                        justify-content: center !important;
                                    }
                                }
                            }
                        }
                    }
                    #add {
                        display: flex;
                        max-width: 8.5%;
                        @extend %flex-center;
                        button {
                            box-shadow: 0px 3px 6px rgba( black, 0.26);
                        }
                    }
                }
                #tmaster {
                    display: flex;
                    flex: 12 1 auto;
                    flex-direction: column;
                    #thead {
                        @extend %flex-center;
                        text-align: center;
                        min-height: 35px;
                        .mat-sort-header-container {
                            display: flex;
                            justify-content: center !important;
                        }
                        .table-header {
                            width: 100%;
                            color: $theme-background;
                            display: inline-flex;
                            font-weight: bold;
                            /* HEADER */
                            .id {
                                @include column-width(33%);
                                padding-left: 24px; // sorting arrow discount
                            }
                            .name {
                                @include column-width(33%);
                                padding-left: 24px; // sorting arrow discount
                            }
                            .actions {
                                @include column-width(33%);
                            }
                        }
                    }
                    #tbody {
                        flex: 10 1 auto; // background: brown;
                        align-items: flex-start;
                        text-align: center;
                        display: flex;
                        box-shadow: 0px 3px 6px rgba( black, 0.16);
                        z-index: 1;
                        overflow: auto;
                        mat-table {
                            width: 100%;
                            mat-header-row {
                                display: none;
                            }
                            .mat-header-cell:first-child {
                                padding-left: unset !important;
                            }
                            .mat-header-cell:last-child {
                                padding-right: unset !important;
                            }
                            mat-row:hover {
                                background-color: rgba($theme-background, .08);
                            }
                            mat-cell {
                                color: $theme-background !important;
                                align-items: center !important;
                                padding-left: unset !important;
                                padding-right: unset !important;
                                font-size: 100%;
                            }
                            /* BODY */
                            .mat-column-id {
                                @include column-width(33%);
                            }
                            .mat-column-name {
                                @include column-width(33%);
                            }
                            .mat-column-actions {
                                @include column-width(33%);
                                margin-left: auto;
                                margin-right: auto;
                                button {
                                    margin: 5px;
                                }
                            }
                        }
                    }
                }
                #tfooter {
                    @extend %flex-center;
                    text-align: center;
                    min-height: 60px;
                    .paginator {
                        width: 100%;
                        color: $theme-background;
                        font-size: 100%;
                    }
                }
            }
        }
    }
}

// caption formatting
.circle-small {
    width: 16px;
    height: 16px;
    display: inline-block;
    border-radius: 50%;
}

.circle {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
}

@media screen and (max-width: 320px) {
    .paginator{
        font-size:14px !important;
    }
}

@media screen and (max-width: 360px) {
    #title {
        font-size: 100% !important;
    }
    .fury-filter-input{
        width: 140px;
    }
    .mat-paginator-range-label {
        margin: unset !important;
    }
}

@media screen and (max-width: 800px) {
    #tfilter {
        #title {
            flex: 1 1 auto !important;
            max-width: unset !important;
            min-width: unset !important;
            width: unset !important;
            border-right: unset !important;
        }
        #input-filter {
            flex: 1 1 auto !important;
            max-width: unset !important;
            min-width: unset !important;
            width: unset !important;
        }
        #add {
            flex: 1 1 auto !important;
            max-width: unset !important;
            min-width: unset !important;
            width: unset !important;
        }
    }
    #thead {
        display: none !important;
    }
    #tbody{
        height: 0px !important; // fix layout in the firefox
    }
    mat-table {
        .mat-column-id,
        .mat-column-name,
        .mat-column-actions {
            max-width: unset !important;
            min-width: unset !important;
            width: unset !important;
        }
        .mat-column-name {
            text-align: center !important;
            word-break: break-word;
        }
        mat-row {
            flex-flow: column;
        }
    }
    .mat-paginator-container {
        padding: 0 8px !important;
    }
    .fury-list-table .fury-list-header {
        margin: unset !important;
        padding: unset !important;
        .fury-column-filter {
            display: none !important;
        }
    }
}

```
</p>
</details>

### Create-Update
<!-- Module -->
<details><summary>area-create-update.module.ts</summary>
<p>

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatDividerModule
} from '@angular/material';
import { AreaCreateUpdateComponent } from './area-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatSidenavModule,
    MatDividerModule,
    DialogPanelModule
  ],
  declarations: [AreaCreateUpdateComponent],
  entryComponents: [AreaCreateUpdateComponent],
  exports: [AreaCreateUpdateComponent]
})
export class AreaCreateUpdateModule {}
```

</p>
</details>
<!-- Component -->
<details><summary>area-create-update.component.ts</summary>
<p>

```typescript
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Area } from 'app/models/areas/areas.model';
//import { AreaControllerService } from '../../../module/areas/api/AreaController.service';

@Component({
  selector: 'fury-area-create-update',
  templateUrl: './area-create-update.component.html',
  styleUrls: ['./area-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AreaCreateUpdateComponent implements OnInit {

  area: Area[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<AreaCreateUpdateComponent>,
             // private apiArea: AreaControllerService,
              private fb: FormBuilder)
              {
                // load the area
            //     this.apiArea.getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.area =  <Area[]>noti;
            // });
            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              id: new FormControl(),
              name: new FormControl()
            });
            
  }
 
  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Area; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createArea();
    } else if (this.mode === 'update') {
      this.updateArea();
    }
  }

  createArea() {
    // send the color as object instead of value
    const area = this.form.value;
    this.dialogRef.close(area);
  }

  updateArea() {
    // send the color as object instead of value
    const area = this.form.value;
    area.id = this.defaults.id;
    this.dialogRef.close(area);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}
```

</p>
</details>
<!-- Html -->
<details><summary>area-create-update.component.html</summary>
<p>

```html
<fury-dialog-panel>
    
    <div class="form-content">
        <div class="form-title">
            <span>Cadastro de Áreas</span>
        </div>
        <div class="form-fields">
            <form [formGroup]="form">
                <div class="name">
                    <mat-form-field>
                        <input matInput placeholder="Nome da Área" pattern="[À-ú]?\w+[À-ú]?(([\s]?[À-ú]?\w+[À-ú]?)+)?" formControlName="name" id="name" required />
                    </mat-form-field>
                </div>
            </form>
        </div>
    </div>
    <div class="footer-content" footer-content>
        <button *ngIf="isCreateMode()" mat-raised-button [disabled]="!form.valid" class="btn-rounded btn-save" (click)="save()" color="primary">SALVAR</button>
        <button *ngIf="isUpdateMode()" mat-raised-button [disabled]="!form.valid" class="btn-rounded btn-save" color="primary"  (click)="save()">ATUALIZAR</button>
    </div>

</fury-dialog-panel>
```

</p>
</details>
<!-- Styles -->
<details><summary>area-create-update.component.scss</summary>
<p>

```scss
@import "_custom_color_scheme.scss";
$color-font: map-get($map: $mat-sgm-primary, $key: 500);

.area-panel {
    .dialog-content {
        .form-content {
            display: flex;
            flex-direction: column;
            height: 100%;

            .form-title {
                font-size: 150%;
                color: $color-font;
                font-weight: bold;
                text-align: center;
                height: 20%;
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .form-fields {
                flex: 1 1 auto;
                align-items: center;
                justify-content: center;
                display: flex;
                height: 80%;

                form {
                    height: 100%;
                    width: 100%;

                    .name {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;

                        mat-form-field {
                            flex: .3 1 auto;
                        }
                    }
                }
            }
        }
    }
}

.dialog-footer {
    display: flex;
    padding-right: 24px;

    .footer-content {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: flex-end;

        .btn-save {
            flex: .2 1 0%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
            font-size: 100%;
            font-weight: lighter;
        }
    }
}

@media screen and (max-height: 400px) {
    .btn-save {
        line-height: 24px !important;
    }
}

@media screen and (max-width: 600px),
(max-height : 600px) {
    .area-panel {
        max-width: unset !important;
        width: 100% !important;
        height: 100% !important;
    }
}
```

</p>
</details>

### Models
<!-- Styles -->
<details><summary>areas.model.ts</summary>
<p>

```typescript
export interface Area {
    id?: number;
    name?: string;
}
```

</p>
</details>

## Script para geração de templates
Se preferir, pode usar um script de criação de tela, para gerar um template padrão.

> **Nota:** O script ainda é **experimental** e pode estar sujeito a _bugs_.

Para usá-lo basta estar na raíz do seu projeto:

```sh
cd ~/projects/sgm
```

Aplicar permissão:

```sh
chmod +x ng-template.sh
```

E rodar o script:

```
user@ITB00000 ~/projects/sgm $ ./ng-template.sh
Todos os itens abaixo são SEM ASPAS.
Nome da Tela no PLURAL, exemplo 'Áreas Espaçadas': Áreas
Nome da Rota no PLURAL e em INGLÊS, exemplo 'areas': areas
Nome da Rota no SINGULAR e em INGLÊS, exemplo 'area': area
Este Link pode ajudar:
https://material.io/tools/icons/?style=baseline
Nome do Ícone Material, exemplo 'favorite': map
Posição no Menu Lateral, é um NÚMERO, exemplo '2': 5
Configurando o menu...
Configurando a rota...
Criando os diretórios...
Criando os arquivos...
Adicionado conteúdo aos arquivos...
Arquivos cridados com sucesso!!! Reinicie seu server.
```