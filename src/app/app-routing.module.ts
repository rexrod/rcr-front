import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/core/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/demo/custom-pages/register/register.module#RegisterModule',
  },
  {
    path: 'forgot-password',
    loadChildren: 'app/demo/custom-pages/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  {
    path: '',
    //loadChildren: 'app/containers/dashboard/dashboard.module#DashboardModule',
    loadChildren: 'app/core/login/login.module#LoginModule',    
  },
  {
    path: '',
    component: LayoutComponent,
    children: [

// { 
// path: 'teste-coutinho', 
// loadChildren: 'app/containers/teste-coutinho/teste-coutinho.module#TesteCoutinhoModule', 
// },


// { 
// path: 'reports', 
// loadChildren: 'app/containers/reports/reports.module#ReportsModule', 
// },


{ 
path: 'rastreadores', 
loadChildren: 'app/containers/rastreadores/rastreadores.module#RastreadoresModule', 
},


{ 
path: 'dashboard-lives', 
loadChildren: 'app/containers/dashboard-lives/dashboard-lives.module#DashboardLivesModule', 
//loadChildren: 'app/demo/maps/google-maps/google-maps.module#GoogleMapsModule', 
},


{ 
path: 'transports', 
loadChildren: 'app/containers/transports/transports.module#TransportsModule', 
},

      
      {
        path: 'profiles',
        loadChildren: 'app/containers/profiles/profiles.module#ProfilesModule',
      },


      {
        path: 'users',
        loadChildren: 'app/containers/users/users.module#UsersModule',
      },

      {
        path: 'teams',
        loadChildren: 'app/containers/teams/teams.module#TeamsModule',
      },


      {
        path: 'periodicities',
        loadChildren: 'app/containers/periodicities/periodicities.module#PeriodicitiesModule',
      },


      {
        path: 'activities',
        loadChildren: 'app/containers/activities/activities.module#ActivitiesModule',
      },


      {
        path: 'materials',
        loadChildren: 'app/containers/materials/materials.module#MaterialsModule',
      },


      {
        path: 'service-order-priorities',
        loadChildren: 'app/containers/service-order-priorities/service-order-priorities.module#ServiceOrderPrioritiesModule',
      },

      {
        path: 'measures-units',
        loadChildren: 'app/containers/measures-units/measures-units.module#MeasuresUnitsModule',
      },


      {
        path: 'configurations',
        loadChildren: 'app/containers/configurations/configurations.module#ConfigurationsModule',
      },


      {
        path: 'equipments',
        loadChildren: 'app/containers/equipments/equipments.module#EquipmentsModule',
      },


      {
        path: 'parts',
        loadChildren: 'app/containers/parts/parts.module#PartsModule',
      },


      {
        path: 'models',
        loadChildren: 'app/containers/models/models.module#ModelsModule',
      },
      {
        path: 'slas',
        loadChildren: 'app/containers/slas/slas.module#SlasModule',
      },

      {
        path: 'service-order-types',
        loadChildren: 'app/containers/service-order-types/service-order-types.module#ServiceOrderTypesModule',
      },


      {
        path: 'fabricators',
        loadChildren: 'app/containers/fabricators/fabricators.module#FabricatorsModule',
      },


      {
        path: 'segments',
        loadChildren: 'app/containers/segments/segments.module#SegmentsModule',
      },


      {
        path: 'sectors',
        loadChildren: 'app/containers/sectors/sectors.module#SectorsModule',
      },


      {
        path: 'departments',
        loadChildren: 'app/containers/departments/departments.module#DepartmentsModule',
      },

      // {
      //   path: '',
      //   //loadChildren: 'app/containers/dashboard/dashboard.module#DashboardModule',
      //   loadChildren: 'app/core/login/login.module#LoginModule',    
      //   pathMatch: 'full'
      // },
      {
        path: 'menu',
        loadChildren: 'app/containers/menu/menu.module#MenuModule',
      },
      {
        path: 'notices',
        loadChildren: 'app/containers/notices/notices.module#NoticesModule',
      },
      {
        path: 'notices-priorities',
        loadChildren: 'app/containers/notices-priorities/notices-priorities.module#NoticesPrioritiesModule',
      },
      {
        path: 'areas',
        loadChildren: 'app/containers/areas/areas.module#AreasModule',
      },
      {
        path: '**',
        loadChildren: 'app/containers/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
