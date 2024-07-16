from odoo.http import request, route, Controller

class YourController(Controller):
    @route("/ica-money-changer", auth="public")
    def standalone_app(self):
        return request.render(
            'ica_money_changer.standalone_app',
            {
                'session_info': request.env['ir.http'].get_frontend_session_info(),
            }
        )