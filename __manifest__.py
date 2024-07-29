{
    'name': 'Product Custom Fields Extension',
    'version': '1.3',
    'category': 'Product',
    'summary': 'Extiende el modelo de producto para incluir campos personalizados adicionales',
    'author': 'Alphaqueb Consulting S.A.S.',
    'depends': ['product'],
    'assets': {
        'web.assets_backend': [
            'product_custom_fields_extension/static/src/js/product_template_visibility.js',
        ],
    },
    'installable': True,
    'application': False,
}
