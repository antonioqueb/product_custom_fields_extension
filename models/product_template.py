# models/product_template.py
from odoo import models, fields

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    ancho = fields.Float(string='Ancho')
    gramaje = fields.Float(string='Gramaje')
    tipo = fields.Char(string='Tipo')
    kilos = fields.Float(string='Kilos')
    proveedor = fields.Many2one('res.partner', string='Proveedor')
    planta_ingreso = fields.Char(string='Planta de Ingreso')
    folio = fields.Char(string='Folio')

    _sql_constraints = [
        ('unique_folio', 'unique(folio)', 'El folio debe ser único.'),
    ]
