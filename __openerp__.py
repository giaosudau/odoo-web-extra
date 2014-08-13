{
    'name': 'Odoo Web Extra',
    'version': '1.0',
    'category': 'web',
    'complexity': "easy",
    'description': """
Extra web feature
=================
* Fold and unfold left menu
    """,
    'author': 'giaosudau',
    'website': 'http://openerp.com',
    'depends': ['web'],
    'data': [],
    'installable': True,
    'active': False,
    'data': ['views/extra.xml', ],
    'qweb': [
        "static/src/xml/*.xml",
    ],
}
