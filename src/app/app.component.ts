import { Component } from '@angular/core';
import { SidenavItem } from './core/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/sidenav/sidenav.service';
import { SessionService } from 'app/service/session.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    sidenavService: SidenavService,
    private sessionService: SessionService,
    private router: Router,
    private location: Location,
  ) {
    const menu: SidenavItem[] = [];

    if(this.location.path() == '/' || this.location.path() == '/login'){
      localStorage.clear();
    }

    let admin = localStorage.getItem('admin');
    //console.log(this.router.url);
    //console.log(this.location.path());
    //console.log('Usuário administrador: ' + admin);
      if(admin){
        //console.log(menu);

        let configAdded: boolean = false;

        for(var i=0; i < menu.length; i++){
          if(menu[i].name == 'Configurações'){
            configAdded = true;
          }
        }

        if(!configAdded){
          menu.push({
            name: 'Configurações',
            // routeOrFunction: '/configurations',
            icon: 'settings',
            position: 99,
            subItems: [
              {
                name: 'Usuários',
                routeOrFunction: '/users',
                //icon: 'supervised_user_circle',
                position: 1
              },
              // {
              //   name: 'Perfis',
              //   routeOrFunction: '/profiles',
              //   icon: 'group',
              //   position: 21
              // }
             ]
            });
          }    
      // admin = 'false';
    }

    //   menu.push({
    //     name: 'Configurações',
    //     // routeOrFunction: '/configurations',
    //     icon: 'settings',
    //     position: 99,
    //     subItems: [
    //       {
    //         name: 'Usuários',
    //         routeOrFunction: '/users',
    //         icon: 'supervised_user_circle',
    //         position: 1
    //       },
    //       // {
    //       //   name: 'Perfis',
    //       //   routeOrFunction: '/profiles',
    //       //   icon: 'group',
    //       //   position: 21
    //       // }
    //     ]
    // });

menu.push({ 
  name: 'Dashboard', 
  routeOrFunction: 'dashboard-lives', 
  icon: 'dashboard', 
  position: 0 
  });

  // menu.push({ 
  //   name: 'Rotas', 
  //   routeOrFunction: 'dashboard-routes', 
  //   icon: 'departure_board', 
  //   position: 0 
  // });

menu.push({ 
name: 'Transportes', 
//routeOrFunction: 'transports', 
icon: 'map', 
position: 25,
subItems: [
  {
    name: 'Cargas',
    routeOrFunction: '/transports',
    //icon: 'supervised_user_circle',
    position: 1
  },
  // {
  //   name: 'Funcionários',
  //   routeOrFunction: '/transports-employee',
  //   //icon: 'group',
  //   position: 2
  // },
  //{
  //  name: 'Outros',
    //routeOrFunction: '/transports-employee',
    //icon: 'group',
  //  position: 3
  //}
 ] 
});

menu.push({ 
name: 'Rastreadores', 
routeOrFunction: 'rastreadores', 
icon: 'router', 
position: 27 
});

// menu.push({ 
//   name: 'Funcionários', 
//   routeOrFunction: 'employees', 
//   icon: 'supervised_user_circle', 
//   position: 28 
// });

menu.push({ 
name: 'Relatórios', 
routeOrFunction: 'reports', 
icon: 'description', 
position: 29 
});


// menu.push({ 
// name: 'teste-coutinho', 
// routeOrFunction: 'teste-coutinho', 
// icon: '', 
// position: 32 
// });

    // Send all created Items to SidenavService
     menu.forEach(item => sidenavService.addItem(item));
     this.sessionService.loadUser();

  }


}
