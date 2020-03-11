
export const environment = {
  production: false,
  googleMapsApiKey: '', // key from w3school
  backend: '', 
  origin: {
    // transports: 'http://52.229.33.51:8080/auth/v1',
    // tracker:    'http://52.229.33.51:8080/auth/v1',
    // users:      'http://52.229.33.51:8080/auth/v1',
    // employees:  'http://52.229.33.51:8080/auth/v1',
    // transports: 'http://localhost:3001/auth/v1',
    // tracker:    'http://localhost:3001/auth/v1',
    // users:      'http://localhost:3001/auth/v1',
    // employees:  'http://localhost:3001/auth/v1',

    api: 'https://rcr-api.herokuapp.com/auth/v1',
    login: 'https://rcr-api.herokuapp.com/v1',

    // api: 'http://localhost:3001/auth/v1',
    // login: 'http://localhost:3001/v1',

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
