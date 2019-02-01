#!/bin/bash
###################################################
### Código para gerar templates para o RCR
### Dê permissão:
### $ chmod +x ng-screen.sh
### E depois digite o que se pede
###################################################

# Leitura dos parametros
echo "Todos os itens abaixo são SEM ASPAS."
read -p "Nome da Tela no PLURAL e em PORTUGUÊS, exemplo 'Áreas Espaçadas': " screenName
read -p "Nome da Rota no PLURAL e em INGLÊS, exemplo 'areas-espacadas' (separado por hífen): " routeName
read -p "Nome da Rota no SINGULAR e em INGLÊS, exemplo 'area': " routeNameSingular
echo "Este Link pode ajudar:"
echo "https://material.io/tools/icons/?style=baseline"
read -p "Nome do Ícone Material, exemplo 'favorite': " iconMaterial
# pegando a posição do menu
menuPosition=`grep -E -o "position\:.?[0-9]+" src/app/app.component.ts | wc -l`
# Nome da rota em Camel Case
routeNameCamel=`echo $routeName | sed -e "s/\b\(.\)/\u\1/g" | sed "s/-//g"`
routeNameCamelLower=`echo $routeName | sed -e "s/\b\(.\)/\u\1/g" | sed "s/-//g" | sed -e "s/\b\(.\)/\l\1/g"`

routeNameCamelSingular=`echo $routeNameSingular | sed -e "s/\b\(.\)/\u\1/g" | sed "s/-//g"`
routeNameCamelSingularLower=`echo $routeNameSingular | sed -e "s/\b\(.\)/\u\1/g" | sed "s/-//g" | sed -e "s/\b\(.\)/\l\1/g"`

echo "Configurando o menu..."

# pega a linha do menu
menuLine=`grep -n "menu" src/app/app.component.ts | tail -1 | grep -E -o "^[0-9]+"`

# trecho de código do menu
snippet="
\nmenu.push({
\nname: '$screenName',
\nrouteOrFunction: '$routeName',
\nicon: '$iconMaterial',
\nposition: $menuPosition
\n});
"
# Adicionando o menu
sed -i "$(($menuLine-2))s/$/\n$(echo $snippet)\n/" src/app/app.component.ts

echo "Configurando a rota..."

# pega a linha para adicionar uma nova rota
childrenLine=`grep -n "children:" src/app/app-routing.module.ts | tail -1 | grep -E -o "^[0-9]+"`

# trecho de código da rota
snippet="
\n{
\npath: '$routeName',
\nloadChildren: 'app\/containers\/$routeName\/$routeName\.module\#$(echo $routeNameCamel)Module',
\n},
"
# Adicionando a rota
sed -i "$(echo $childrenLine)s/$/\n$(echo $snippet)\n/" src/app/app-routing.module.ts

echo "Criando os diretórios..."
# Criando os diretórios
mkdir -p "src/app/containers/$routeName/$routeNameSingular-create-update" # NORMAL E CREATE/UPDATE
mkdir "src/app/models/$routeName" #MODELS

echo "Criando os arquivos..."
# Criando os arquivos Gerais
touch "src/app/containers/$routeName/$routeName.module.ts"
touch "src/app/containers/$routeName/$routeName-routing.module.ts"
touch "src/app/containers/$routeName/$routeName.component.ts"
touch "src/app/containers/$routeName/$routeName.component.html"
touch "src/app/containers/$routeName/$routeName.component.scss"
touch "src/app/containers/$routeName/$routeName.fake.ts"
# Create Update
touch "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.module.ts"
touch "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.ts"
touch "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.html"
touch "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.scss"
# models    
touch "src/app/models/$routeName/$routeName.model.ts"

echo "Adicionado conteúdo aos arquivos..."
# Adicionado conteúdo aos arquivos
# Conteiners
# routename.modules.ts
echo "import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { $(echo $routeNameCamel)RoutingModule } from './$routeName-routing.module';
import { $(echo $routeNameCamel)Component } from './$routeName.component';
import { $(echo $routeNameCamelSingular)CreateUpdateModule} from './$routeNameSingular-create-update/$routeNameSingular-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    $(echo $routeNameCamel)RoutingModule,
    $(echo $routeNameCamelSingular)CreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [$(echo $routeNameCamel)Component],
  exports: [$(echo $routeNameCamel)Component]
})
export class $(echo $routeNameCamel)Module {}
" > "src/app/containers/$routeName/$routeName.module.ts"

# src/app/containers/routeName/routeName-routing.module.ts
echo "
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { $(echo $routeNameCamel)Component } from './$routeName.component';

const routes: Routes = [
  {
    path: '',
    component: $(echo $routeNameCamel)Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class $(echo $routeNameCamel)RoutingModule {}
" > "src/app/containers/$routeName/$routeName-routing.module.ts"

# "src/app/containers/$routeName/$routeName.component.ts"
echo "
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../core/common/list/list-column.model';
import { fadeOutAnimation } from '../../core/common/route.animation';

import { $( echo $routeNameCamelSingular ) } from 'app/models/$( echo $routeName )/$( echo $routeName ).model';
import { $( echo $routeNameCamelSingular )CreateUpdateComponent } from './$( echo $routeNameSingular )-create-update/$( echo $routeNameSingular )-create-update.component';
import { DialogDeleteComponent } from '../../core/common/dialog-delete/dialog-delete.component';

// To work with fake data
import { of } from 'rxjs/internal/observable/of'; // to test without data
import { ALL_IN_ONE_TABLE_FAKE_DATA } from './$( echo $routeName ).fake'; // to test without data
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'fury-$( echo $routeName )',
    templateUrl: './$( echo $routeName ).component.html',
    styleUrls: ['./$( echo $routeName ).component.scss'],
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
export class $( echo $routeNameCamel )Component implements OnInit, AfterViewInit, OnDestroy {

    subject$: ReplaySubject<$( echo $routeNameCamelSingular )[]> = new ReplaySubject<$( echo $routeNameCamelSingular )[]>(1);
    data$: Observable<$( echo $routeNameCamelSingular )[]> = this.subject$.asObservable();
    $( echo $routeNameCamelLower ): $( echo $routeNameCamelSingular )[];
    expandedElement: any;
    pageSize = 10;

    // this component is useful for the filter and show colums in table
    @Input()
    columns: ListColumn[] = [
        { name: 'Id', property: 'id', visible: true, isModelProperty: true },
        { name: '$( echo $screenName | tr [:lower:] [:upper:] )', property: 'name', visible: true, isModelProperty: true },
        { name: 'Ações', property: 'actions', visible: true }
    ] as ListColumn[];
    dataSource: MatTableDataSource<$( echo $routeNameCamelSingular )> | null;


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        // private api$( echo $routeNameCamelSingular ): $( echo $routeNameCamelSingular )ControllerService
    ) { }

    loadData() {
        // this.api$( echo $routeNameCamelSingular ).getAllUsingGET()
        //   .subscribe($( echo $routeNameCamelLower ) => {
        //     this.$( echo $routeNameCamelLower ) = $( echo $routeNameCamelLower );
        //     this.dataSource.data = $( echo $routeNameCamelLower );
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
        ).subscribe(($( echo $routeNameCamelLower )) => {
            this.$( echo $routeNameCamelLower ) = $( echo $routeNameCamelLower );
            this.dataSource.data = $( echo $routeNameCamelLower );
        });

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    create() {

        this.dialog.open($( echo $routeNameCamelSingular )CreateUpdateComponent, {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(($( echo $routeNameCamelSingularLower ): $( echo $routeNameCamelSingular )) => {

            if ($( echo $routeNameCamelSingularLower )) {
                // this.api$( echo $routeNameCamelSingular ).createUsingPOST($( echo $routeNameCamelSingularLower )).
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

    update($( echo $routeNameCamelSingularLower )) {

        this.dialog.open($( echo $routeNameCamelSingular )CreateUpdateComponent, {
            data: $( echo $routeNameCamelSingularLower ),
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_$( echo $routeNameCamelSingularLower )) => {
            if (_$( echo $routeNameCamelSingularLower )) {
                // this.api$( echo $routeNameCamelSingular ).updateUsingPUT(_$( echo $routeNameCamelSingularLower )).
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

    delete($( echo $routeNameCamelSingularLower )) {

        this.dialog.open(DialogDeleteComponent, {
            data: { id: $( echo $routeNameCamelSingularLower ).id, displayName: $( echo $routeNameCamelSingularLower ).id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe((_$( echo $routeNameCamelSingularLower ): $( echo $routeNameCamelSingular )) => {

            if (_$( echo $routeNameCamelSingularLower ) && _$( echo $routeNameCamelSingularLower ).id) {
                // this.api$( echo $routeNameCamelSingular ).deleteUsingDELETE(_$( echo $routeNameCamelSingularLower ).id).
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
        if ($( echo '!')this.dataSource) {
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
" > "src/app/containers/$routeName/$routeName.component.ts"

# touch "src/app/containers/$routeName/$routeName.fake.ts"
echo "
// This is a file for tests
export const ALL_IN_ONE_TABLE_FAKE_DATA = [
    {
      'id': 1,
      'name': 'Produção',
    },
    {
        'id': 2,
        'name': 'P&D',
      },
      {
          'id': 3,
          'name': 'Administrativo',
      }
  ];
" > "src/app/containers/$routeName/$routeName.fake.ts"

# "src/app/containers/$routeName/$routeName.component.html"
echo "
<div id=\"background-$(echo $routeNameSingular)\">
    <div id=\"conteiner\">
      <div id=\"card\">
        <div id=\"table-component\">
          <$( echo '!' )-- TABLE FILTER -->
          <div id=\"tfilter\">
            <div id=\"title\">
              <span>$(echo $screenName)</span>
            </div>
            <div id=\"input-filter\">
              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($(echo '$event'))\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>
            </div>
            <div id=\"add\">
              <button mat-mini-fab color=\"primary\"  matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\">
                <mat-icon aria-label=\"Adicionar\">add</mat-icon>
              </button>
            </div>
          </div>
          <$( echo '!' )-- TABLE HEADER -->
          <$( echo '!' )-- The header is separate so you do not lose the filters or the sorting and keep the layout-->
          <div id=\"tmaster\">
            <div id=\"thead\" matSort>
              <div class=\"table-header\">
                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" 
                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">
                  {{column.name | uppercase}}
                </div>
              </div>
            </div>
            <$( echo '!' )-- TABLE BODY -->
            <div id=\"tbody\">
              <$( echo '!' )-- Note: Mat-table does not compile without mat-cell -->
              <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>
              <$( echo '!' )-- fullName Column -->
              <ng-container *ngFor=\"let column of columns\">
                <ng-container *ngIf=\"column.isModelProperty\" [matColumnDef]=\"column.property\">
                  <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.name }}</mat-header-cell>
                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">
                    <$( echo '!' )-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->
                    {{ extractValue(row,column.cellContent,column.property) }}
                  </mat-cell>
                </ng-container>
              </ng-container>

                 <$( echo '!' )-- Expanded Row -->
                  <$( echo '!' )-- 
               <ng-container matColumnDef=\"expandedDetail\">
                <mat-cell *matCellDef=\"let row\" [attr.colspan]=\"visibleColumns.length\">
                    <div class=\"image\">
                        <div class=\"element-detail\">
                            <div class=\"picture\">
                              <img [src]=\"urlImg(row.picture)\" *ngIf=\"urlImg\">
                            </div>
                          </div>
                    </div>
                  <div class=\"fields\">
                    <div class=\"element-detail\">
                      <label>Observação:</label>
                      <span>{{ row.observation }}</span>
                    </div>
                  </div>
                </mat-cell>
              </ng-container>
              -->

                <$( echo '!' )-- actions Column -->
                <ng-container matColumnDef=\"actions\">
                  <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> AÇÕES </mat-header-cell>
                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">
                    <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">
                      <mat-icon aria-label=\"Editar\">edit</mat-icon>
                    </button>
                    <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">
                      <mat-icon aria-label=\"Deletar\">delete</mat-icon>
                    </button>
                  </mat-cell>
                </ng-container>

                <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>
                <mat-row *matRowDef=\"let row; columns: visibleColumns;\" class=\"clickable\"></mat-row>

                <$( echo '!' )-- Expanded Row -->
                <$( echo '!' )--
                <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>
                <mat-row *matRowDef=\"let row; columns: visibleColumns;\" matRipple class=\"element-row\" [class.expanded]=\"expandedElement == row\"
                  (click)=\"toggleRow(row)\">
                </mat-row>
                <mat-row *matRowDef=\"let row; columns: ['expandedDetail'];\" [@detailExpand]=\"row == expandedElement ? 'expanded' : 'collapsed'\"
                style=\"overflow: hidden\">
                </mat-row>
                -->

              </mat-table>
            </div>
          </div>
          <$( echo '!' )-- TABLE FOOTER -->
          <div id=\"tfooter\">
            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>
          </div>
        </div>
      </div>
    </div>
  </div>
" > "src/app/containers/$routeName/$routeName.component.html"
# "src/app/containers/$routeName/$routeName.component.scss"
echo "
@import \"_custom_color_scheme.scss\";
\$theme-background: map-get(\$map: \$mat-sgm-primary, \$key: 500);

// Lista de campos
\$fields: ('id',
'name',
'actions'
);

// Padroniza o tamanho dos campos
\$length: 100/length(\$fields)*1%;


@mixin column-width(\$property) {
    max-width: \$property;
    min-width: \$property;
    width: \$property;    
}

// centralizes all container items
%flex-center {
    display: flex;
    flex: 1 1 auto;
    align-content: center;
    justify-content: center;
    align-items: center;
}

// Configurações não padrões para as colunas
%table-columns {

    @each \$heading in \$fields {

        .#{\$heading} {
            @include column-width(\$length);
            margin-left: auto;
            margin-right: auto;
            padding-left: 24px; // sorting arrow discount
        }

        .mat-column-#{\$heading} {
            @include column-width(\$length);
            margin-left: auto;
            margin-right: auto;
            @if #{\$heading}==actions {
                button {
                    margin: 5px;
                }
            }
        }
    }
}

html,
body {
    height: 100%;
    margin: 0px;
    align-items: center;
}

#background-$(echo $routeNameSingular) {
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
                    color: \$theme-background;
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
                                    border-bottom: unset $( echo '!' )important;
                                    background: unset $( echo '!' )important;
                                    div {
                                        align-items: center $( echo '!' )important;
                                        justify-content: center $( echo '!' )important;
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
                            justify-content: center $( echo '!' )important;
                        }
                        .table-header {
                            width: 100%;
                            color: \$theme-background;
                            display: inline-flex;
                            font-weight: bold;
                            /* HEADER */
                            @extend %table-columns;
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
                        height: 0;
                        mat-table {
                            width: 100%;
                            mat-header-row {
                                display: none;
                            }
                            .mat-header-cell:first-child {
                                padding-left: unset $( echo '!' )important;
                            }
                            .mat-header-cell:last-child {
                                padding-right: unset $( echo '!' )important;
                            }
                            mat-row:hover {
                                background-color: rgba(\$theme-background, .08);
                            }
                            mat-cell {
                                color: \$theme-background $( echo '!' )important;
                                align-items: center $( echo '!' )important;
                                padding-left: unset $( echo '!' )important;
                                padding-right: unset $( echo '!' )important;
                                font-size: 100%;
                            }
                            .mat-column-expandedDetail {
                                
                                -webkit-box-shadow: inset 0px 18px 10px -18px rgba(0,0,0,0.2);
                                -moz-box-shadow: inset 0px 18px 10px -18px rgba(0,0,0,0.2);
                                box-shadow: inset 0px 18px 10px -18px rgba(0,0,0,0.2);

                                .element-detail {
                                    padding: 20px;
                                    text-align: left;

                                    label {
                                        font-weight: 500;
                                    }

                                    p {
                                        font-weight: 300;
                                    }
                                }
                            }

                            .element-row {
                                position: relative;
                            }
                            /* BODY */
                            @extend %table-columns;
                        }
                    }
                }
                #tfooter {
                    @extend %flex-center;
                    text-align: center;
                    min-height: 60px;
                    .paginator {
                        width: 100%;
                        color: \$theme-background;
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
        font-size:14px $( echo '!' )important;
    }
}

@media screen and (max-width: 360px) {
    #title {
        font-size: 100% $( echo '!' )important;
    }
    .fury-filter-input{
        width: 140px;
    }
    .mat-paginator-range-label {
        margin: unset $( echo '!' )important;
    }
}

@media screen and (max-width: 800px) {
    %unset-width{
        flex: 1 1 auto $( echo '!' )important;
        max-width: unset $( echo '!' )important;
        min-width: unset $( echo '!' )important;
        width: unset $( echo '!' )important;
    }
    #tfilter {
        #title, #input-filter, #add{
            @extend %unset-width;
        }
        #add{
            border-right: unset $( echo '!' )important;
        }
    }
    #thead {
        display: none $( echo '!' )important;
    }
    #tbody{
        height: 0px $( echo '!' )important; // fix layout in the firefox
    }
        mat-table {
        @each \$heading in \$fields {
            .mat-column-#{\$heading} {
                @include column-width(unset $( echo '!' )important);
            }
        }

        mat-row {
            flex-flow: column;
        }
    }
    .mat-paginator-container {
        padding: 0 8px $( echo '!' )important;
    }
    .fury-list-table .fury-list-header {
        margin: unset $( echo '!' )important;
        padding: unset $( echo '!' )important;
        .fury-column-filter {
            display: none $( echo '!' )important;
        }
    }
}
" > "src/app/containers/$routeName/$routeName.component.scss"
# # Create Update
# "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.module.ts"
echo "
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
import { $(echo $routeNameCamelSingular)CreateUpdateComponent } from './$(echo $routeNameSingular)-create-update.component';
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
  declarations: [$(echo $routeNameCamelSingular)CreateUpdateComponent],
  entryComponents: [$(echo $routeNameCamelSingular)CreateUpdateComponent],
  exports: [$(echo $routeNameCamelSingular)CreateUpdateComponent]
})
export class $(echo $routeNameCamelSingular)CreateUpdateModule {}
" > "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.module.ts"

# "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.ts"
echo "
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { $(echo $routeNameCamelSingular) } from 'app/models/$(echo $routeName)/$(echo $routeName).model';

@Component({
  selector: 'fury-$(echo $routeNameSingular)-create-update',
  templateUrl: './$(echo $routeNameSingular)-create-update.component.html',
  styleUrls: ['./$(echo $routeNameSingular)-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class $(echo $routeNameCamelSingular)CreateUpdateComponent implements OnInit {

  $(echo $routeNameCamelSingularLower): $(echo $routeNameCamelSingular)[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<$(echo $routeNameCamelSingular)CreateUpdateComponent>,
             // private api$(echo $routeNameCamelSingular): $(echo $routeNameCamelSingular)ControllerService,
              private fb: FormBuilder) {
                // load the $(echo $routeNameSingular)
            //     this.api$(echo $routeNameCamelSingular). getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.$(echo $routeNameSingular) =  <$(echo $routeNameCamelSingular)[]>noti;
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
      this.defaults = {} as $( echo $routeNameCamelSingular ); // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.create$( echo $routeNameCamelSingular )();
    } else if (this.mode === 'update') {
      this.update$( echo $routeNameCamelSingular )();
    }
  }

  create$( echo $routeNameCamelSingular )() {
    // send the color as object instead of value
    const $( echo $routeNameCamelSingularLower ) = this.form.value;
    this.dialogRef.close($( echo $routeNameCamelSingularLower ));
  }

  update$( echo $routeNameCamelSingular )() {
    // send the color as object instead of value
    const $( echo $routeNameCamelSingularLower ) = this.form.value;
    $( echo $routeNameCamelSingularLower ).id = this.defaults.id;
    this.dialogRef.close($( echo $routeNameCamelSingularLower ));
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}
" >  "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.ts"

# "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.html"
echo "
<fury-dialog-panel>

    <div class=\"form-content\">
        <div class=\"form-title\">
            <span>Cadastrar $(echo $screenName)</span>
        </div>
        <div class=\"form-fields\">
            <form [formGroup]=\"form\">
                <div class=\"name\">
                    <mat-form-field>
                        <input matInput placeholder=\"$( echo $routeNameCamelSingular)\" pattern=\"^(?!\s*$).+\" formControlName=\"name\" id=\"name\" required />
                    </mat-form-field>
                </div>
            </form>
        </div>
    </div>
    <div class=\"footer-content\" footer-content>
        <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"$( echo '!' )form.valid\" class=\"btn-rounded btn-save\" (click)=\"save()\" color=\"primary\">SALVAR</button>
        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"$( echo '!' )form.valid\" class=\"btn-rounded btn-save\" color=\"primary\"  (click)=\"save()\">ATUALIZAR</button>
    </div>

</fury-dialog-panel>
" > "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.html"

# "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.scss"
echo "
@import \"_custom_color_scheme.scss\";
\$color-font: map-get(\$map: \$mat-sgm-primary, \$key: 500);

.dialog-content {
    .form-content {
        display: flex;
        flex-direction: column;
        height: 100%;

        .form-title {
            font-size: 150%;
            color: \$color-font;
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
        line-height: 24px $( echo '!' )important;
    }
}

@media screen and (max-width: 600px),
(max-height : 600px) {
    .area-panel {
        max-width: unset $( echo '!' )important;
        width: 100% $( echo '!' )important;
        height: 100% $( echo '!' )important;
    }
}
" > "src/app/containers/$routeName/$routeNameSingular-create-update/$routeNameSingular-create-update.component.scss"

## models
# "src/app/models/$routeName/$routeName.model.ts"   
echo "
export interface $( echo $routeNameCamelSingular) {
    id?: number;
    name?: string;
}
" > "src/app/models/$routeName/$routeName.model.ts"

echo "Arquivos criados com sucesso!!! Reinicie seu server."