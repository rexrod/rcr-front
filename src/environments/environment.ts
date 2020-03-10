
export const environment = {
  production: false,
  googleMapsApiKey: '', // key from w3school
  backend: '', 
  origin: {
    transports: 'http://rcr-api.herokuapp.com:3001/auth/v1',
    tracker:    'http://rcr-api.herokuapp.com:3001/auth/v1',
    users:      'http://rcr-api.herokuapp.com:3001/auth/v1',
    employees:  'http://rcr-api.herokuapp.com:3001/auth/v1',

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
