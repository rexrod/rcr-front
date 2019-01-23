import { Component } from '@angular/core';
import { SidenavItem } from './core/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/sidenav/sidenav.service';
import { SessionService } from 'app/service/session.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    sidenavService: SidenavService,
    private sessionService: SessionService,

  ) {
    const menu: SidenavItem[] = [];

    // menu.push({
    //   name: 'Dashboard',
    //   routeOrFunction: '',
    //   icon: 'dashboard',
    //   position: 0,
    //   customClass: 'menu-dashboard',
    // });

    // menu.push({
    //   name: 'Cadastros',
    //   icon: 'add_box',
    //   position: 1,
    //   subItems: [
    //     {
    //       name: 'Avisos',
    //       routeOrFunction: '/notices',
    //       icon: 'add_alert',
    //       position: 1,
    //     },
    //     {
    //       name: 'Prioridades',
    //       routeOrFunction: '/notices-priorities',
    //       icon: 'notification_important',
    //       position: 2
    //     },
    //     {
    //       name: 'Companhias',
    //       routeOrFunction: '/companies',
    //       icon: 'business',
    //       position: 3
    //     },
    //     {
    //       name: 'Áreas',
    //       routeOrFunction: '/areas',
    //       icon: 'map',
    //       position: 4
    //     },
    //     {
    //       name: 'Departamentos',
    //       routeOrFunction: '/departments',
    //       icon: 'location_city',
    //       position: 5
    //     },
    //     {
    //       name: 'Setores',
    //       routeOrFunction: '/sectors',
    //       icon: 'my_location',
    //       position: 6
    //     },
    //     {
    //       name: 'Segmentos',
    //       routeOrFunction: '/segments',
    //       icon: 'compare_arrows',
    //       position: 7
    //     },
    //     {
    //       name: 'Fabricantes',
    //       routeOrFunction: '/fabricators',
    //       icon: 'next_week',
    //       position: 8
    //     },
    //     {
    //       name: 'Tipos de OS',
    //       routeOrFunction: '/service-order-types',
    //       icon: 'flag',
    //       position: 9
    //     },
    //     {
    //       name: 'SLAs',
    //       routeOrFunction: '/slas',
    //       icon: 'signal_cellular_alt',
    //       position: 10
    //     },
    //     {
    //       name: 'Título de OS',
    //       routeOrFunction: '/service-order-titles',
    //       icon: 'title',
    //       position: 12
    //     },
    //     {
    //       name: 'Modelos',
    //       routeOrFunction: '/models',
    //       icon: 'device_hub',
    //       position: 13
    //     },
    //     {
    //       name: 'Peças',
    //       routeOrFunction: '/parts',
    //       icon: 'link',
    //       position: 14
    //     },
    //     {
    //       name: 'Equipamentos',
    //       routeOrFunction: '/equipments',
    //       icon: 'build',
    //       position: 15
    //     },
    //     {
    //       name: 'Unidades de Medida',
    //       routeOrFunction: '/measures-units',
    //       icon: 'straighten',
    //       position: 17
    //     },
    //     {
    //       name: 'Prioridades da OS',
    //       routeOrFunction: '/service-order-priorities',
    //       icon: 'announcement',
    //       position: 18
    //     },
    //     {
    //       name: 'Materiais',
    //       routeOrFunction: '/materials',
    //       icon: 'ballot',
    //       position: 19
    //     },
    //     {
    //       name: 'Atividades',
    //       routeOrFunction: '/activities',
    //       icon: 'list',
    //       position: 20
    //     },
    //     // {
    //     //   name: 'Periodicidades',
    //     //   routeOrFunction: 'periodicities',
    //     //   icon: 'event',
    //     //   position: 21
    //     // },
    //     {
    //       name: 'Equipes',
    //       routeOrFunction: '/teams',
    //       icon: 'supervisor_account',
    //       position: 23
    //     }
    //   ]
    // });

    menu.push({
      name: 'Configurações',
      // routeOrFunction: '/configurations',
      icon: 'settings',
      position: 99,
      subItems: [
        {
          name: 'Usuários',
          routeOrFunction: '/users',
          icon: 'supervised_user_circle',
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


menu.push({ 
  name: 'Live View', 
  routeOrFunction: 'dashboard-lives', 
  icon: 'dashboard', 
  position: 0 
  });

menu.push({ 
name: 'Transportes', 
routeOrFunction: 'transports', 
icon: 'map', 
position: 25 
});


menu.push({ 
name: 'Rastreadores', 
routeOrFunction: 'rastreadores', 
icon: 'router', 
position: 27 
});


menu.push({ 
name: 'Relatórios', 
routeOrFunction: 'reports', 
icon: 'description', 
position: 28 
});

    // Send all created Items to SidenavService
    menu.forEach(item => sidenavService.addItem(item));
    this.sessionService.loadUser();

  }


}
