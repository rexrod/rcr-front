// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.


export const environment = {
  production: false,
  googleMapsApiKey: '', // key from w3school
  // backend: 'http://localhost:4200/login', // Put your backend here
  backend: 'http://172.100.10.112:8081/login', // Put your backend here
  origin: {
    notices: 'http://172.100.10.34:8080/ws-sgm-notices/api',
    companies: 'http://172.100.10.34:8080/ws-sgm-companies/api',
    segments: 'http://172.100.10.34:8080/ws-sgm-segments/api',
    fabricators: 'http://172.100.10.34:8080/ws-sgm-fabricators/api',
    serviceOrderTypes: 'http://172.100.10.34:8080/ws-sgm-service-order-types/api',
    slas: 'http://172.100.10.34:8080/ws-sgm-slas/api',
    serviceOrderTitles: 'http://172.100.10.34:8080/ws-sgm-service-order-titles/api',
    models: 'http://172.100.10.34:8080/ws-sgm-models/api',
    parts: 'http://172.100.10.34:8080/ws-sgm-parts/api',
    equipments: 'http://172.100.10.34:8080/ws-sgm-equipments/api',
    measuresUnits: 'http://172.100.10.34:8080/ws-sgm-measures-units/api',
    serviceOrders: 'http://172.100.10.34:8080/ws-sgm-service-orders/api',
    materials: 'http://172.100.10.34:8080/ws-sgm-materials/api',
    activities: 'http://172.100.10.34:8080/ws-sgm-activities/api',
    users: 'http://localhost:8081/ws-users/api', 
    performaApi: 'http://172.100.10.34:8081/ws-performa/api',
    fileServer: 'http://172.100.10.22:8282/download/name?filename='


    // products:'http://localhost:8081/ws-products/api'

  }
};
