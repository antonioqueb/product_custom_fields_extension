# models/product_template.py
from odoo import models, fields

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    ancho = fields.Float(string='Ancho')
    gramaje = fields.Float(string='Gramaje')
    tipo = fields.Char(string='Tipo')
    kilos = fields.Float(string='Kilos')
    planta = fields.Selection([
        ('planta_1', 'Planta 1'),
        ('planta_2', 'Planta 2'),
        ('planta_3', 'Planta 3'),
        ('planta_4', 'Planta 4'),
        ('planta_5', 'Planta 5'),
        ('planta_6', 'Planta 6'),
    ], string='Planta', default='planta_1')
    folio = fields.Char(string='Folio')

    _sql_constraints = [
        ('unique_folio', 'unique(folio)', 'El folio debe ser único.'),
    ]
