/** @odoo-module */
import {Component} from "@odoo/owl";

import {registry} from "@web/core/registry";

export class AuthScreen extends Component {
    static template = "ica_money_changer.auth_screen";

    async login() {
        console.log(this.props)
        this.props.switchScreen('home_screen');
    }
}

registry.category("ica_money_changer").add("auth_screen", AuthScreen)