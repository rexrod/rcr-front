export const SCHEMA = {
    // '$schema': 'http://json-schema.org/draft-07/schema#',
    // '$id': 'http://example.com/product.schema.json',
    'title': 'Prioridades da OS',
    'titleSingle': 'Prioridade da OS',
    'description': 'Contém as prioridades da ordem de serviço',
    'type': 'object',
    'properties': {
        'id': {
            'columnName': 'Id',
            'description': 'Id',
            'type': 'integer',
            'visible': true,
            'isModelProperty': true,
            'required': true
        },
        'name': {
            'columnName': 'Prioridade',
            'description': 'Nome da Prioridade',
            'type': 'string',
            'pattern': '^(?!\\\s*$).+',
            'visible': true,
            'isModelProperty': true,
            'required': true,
            'isForm': true,
            'verifyName': {
                'data': ['idCompany', 'name'],
                'url': '/service-order-priorities/name'
            }
        },
        'level': {
            'columnName': 'Nível',
            'description': 'Nível',
            'type': 'number',
            // 'pattern': '^(?!\\\s*$).+',
            'visible': true,
            'isModelProperty': true,
            'required': true,
        },
        'color': {
            'columnName': 'Cor',
            // 'cellContent': 'company.name',
            // 'updateValue': 'company.id',
            'description': 'Escolha uma Cor',
            // 'value': 1,
            'type': 'object',
            'visible': false,
            'isModelProperty': true,
            'isForm': true
        },
        'idCompany': {
            'columnName': 'Companhia',
            // 'cellContent': 'company.name',
            // 'updateValue': 'company.id',
            'description': 'Companhia',
            'value': 1,
            'type': 'string',
            'visible': false,
            'isModelProperty': true
        },
        'actions': {
            'columnName': 'Ações',
            'visible': true
        },
        'formStyles': {
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'height': '50%',
        }
    },
    // 'required': ['id', 'name', 'initials'],
    'FAKE_DATA': [
        {
            'id': 1,
            'name': 'Quilometro',
            'initials': 'KM',
            'company': {
                'id': 1,
                'name': 'ITBAM'
            }
        },
        {
            'id': 2,
            'name': 'Metro',
            'initials': 'M',
            'company': {
                'id': 1,
                'name': 'Transire'
            }
        },
        {
            'id': 3,
            'name': 'Litrão',
            'initials': '^L^',
            'company': {
                'id': 1,
                'name': 'Brahma'
            }
        }
    ]
};
