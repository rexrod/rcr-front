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
  { 
  path: 'reports', 
  loadChildren: 'app/containers/reports/reports.module#ReportsModule', 
  },


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
        path: 'configurations',
        loadChildren: 'app/containers/configurations/configurations.module#ConfigurationsModule',
      },
      {
        path: 'models',
        loadChildren: 'app/containers/models/models.module#ModelsModule',
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
