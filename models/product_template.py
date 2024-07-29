from odoo import models, fields

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    ancho = fields.Float(string='Ancho')
    gramaje = fields.Float(string='Gramaje')
    tipo = fields.Char(string='Tipo')
    kilos = fields.Float(string='Kilos')
    folio = fields.Char(string='Folio')
    is_paper_roll = fields.Boolean(string="Es rollo de papel", default=False)

    _sql_constraints = [
        ('unique_folio', 'unique(folio)', 'El folio debe ser único.'),
    ]
