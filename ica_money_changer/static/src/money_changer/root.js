/** @odoo-module */
import {Component, useState} from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Root extends Component {
    static template = "ica_money_changer.Root";
    static props = {};

    setup() {
        this.state = useState({
            "mainScreen": "home_screen"
        });
    }

    getComponent() {
        return registry.category("ica_money_changer").get(this.state.mainScreen);
    }
}