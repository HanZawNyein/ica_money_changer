{
    "name": "ICA Money Changer",
    "depends": ["base", "web"],
    "data": [
        "security/ir.model.access.csv",
        "views/ica_money_changer.xml",
        "views/menus.xml",
        "views/templates.xml",
    ],
    'assets': {
        'ica_money_changer.assets_standalone_app': [
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),
            ('include', 'web._assets_core'),
            'ica_money_changer/static/src/**/*',
        ],
    },
    "license": "LGPL-3"
}
