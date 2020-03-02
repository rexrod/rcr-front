export const environment = {
  production: true,
  googleMapsApiKey: 'AIzaSyC5LRTpY8NrH25OMAmTuTmfE4e1a54xOz8',
  backend: '', // Put your backend here
  origin: {
    // transports: 'http://localhost:3001/auth/v1',
    // tracker:    'http://localhost:3001/auth/v1',
    // users:      'http://localhost:3001/auth/v1',
    // employees:  'http://localhost:3001/auth/v1',
    transports: 'http://52.229.33.51:8080/auth/v1',
    tracker: 'http://52.229.33.51:8080/auth/v1',
    users: 'http://52.229.33.51:8080/auth/v1',
    employees: 'http://52.229.33.51:8080/auth/v1',

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
