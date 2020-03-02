// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.


export const environment = {
  production: false,
  googleMapsApiKey: '', // key from w3school
  // backend: 'http://localhost:4200/login', // Put your backend here
  backend: '', 
  origin: {
    // transports: 'http://52.229.33.51:8080/auth/v1',
    // tracker:    'http://52.229.33.51:8080/auth/v1',
    // users:      'http://52.229.33.51:8080/auth/v1',
    // employees:  'http://52.229.33.51:8080/auth/v1',
    transports: 'http://localhost:3001/auth/v1',
    tracker:    'http://localhost:3001/auth/v1',
    users:      'http://localhost:3001/auth/v1',
    employees:  'http://localhost:3001/auth/v1',

// from template    
    notices: '',
    companies: '',
    segments: '',
    fabricators: '',
    serviceOrderTypes: '',
    slas: '',
    serviceOrderTitles: '',
    models: '',
    parts: '',
    equipments: '',
    measuresUnits: '',
    serviceOrders: '',
    materials: '',
    activities: '',
    performaApi: '',
    fileServer: ''
  }
};
