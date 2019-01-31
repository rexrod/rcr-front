function checkOnline(url, error, ok) {
    try {
        var scriptElem = document.createElement('script');
        scriptElem.type = 'text/javascript';
        scriptElem.onerror = function () {
            if (typeof error == 'function') {
                error();
            }
        };
        scriptElem.onload = function () {
            if (typeof ok == 'function') {
                ok();
            }
        };
        scriptElem.src = url;
        document.getElementsByTagName('body')[0].appendChild(scriptElem);
    } catch (err) {
        error(err);
    }
};

var base_url_repo = 'http://172.100.10.24/micro-services/sgm/';
var base_url_api = 'http://172.100.10.34:8080/';
var services_repo = ['ws-sgm-notices',
    'ws-sgm-companies',
    'ws-sgm-segments', 'ws-sgm-fabricators',
    'ws-sgm-service-order-types',
    'ws-sgm-slas',
    'ws-sgm-equipments',
    'ws-sgm-service-order-titles',
    'ws-sgm-models',
    'ws-sgm-equipments',
    'ws-sgm-parts',
    'ws-sgm-measures-units'
];
var services_api = ['ws-sgm-notices',
    'ws-sgm-companies',
    'ws-sgm-segments',
    'ws-sgm-fabricators',
    'ws-sgm-service-order-types',
    'ws-sgm-slas',
    'ws-sgm-equipments',
    'ws-sgm-service-order-titles',
    'ws-sgm-models',
    'ws-sgm-equipments',
    'ws-sgm-parts',
    'ws-sgm-measures-units',
    'ws-sgm-service-orders',
    'ws-sgm-materials',
    'ws-sgm-activities'
];
// REPOSITORIES
services_repo.forEach(function (_service) {
    checkOnline(base_url_repo + _service,
        function () {
            var el = document.getElementById('repo-' + _service);
            if (el) {
                el = document.getElementById('repo-' + _service).children[0];
                el.textContent = 'Desativo';
                el.className = 'badge badge-pill badge-danger';
            }
        },
        function () {
            var el = document.getElementById('repo-' + _service);
            if (el) {
                el = document.getElementById('repo-' + _service).children[0];
                el.textContent = 'Ativo';
                el.className = 'badge badge-pill badge-success';
            }
        })
});
// APIS
services_api.forEach(function (_service) {
    checkOnline(base_url_api + _service + '/api/swagger-ui.html#/',
        function () {
            var el = document.getElementById('api-' + _service);
            if (el) {
                el = document.getElementById('api-' + _service).children[0];
                el.textContent = 'OFF';
                el.className = 'badge badge-pill badge-danger';
            }
        },
        function () {
            var el = document.getElementById('api-' + _service);
            if (el) {
                el = document.getElementById('api-' + _service).children[0];
                el.textContent = 'ON';
                el.className = 'badge badge-pill badge-success';
            }
        })
});