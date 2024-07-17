/** @odoo-module */
import {Component, onWillStart, useState} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

import {registry} from "@web/core/registry";
import {NavbarComponent} from "../../components/navbar/navbar";

export class HomeScreen extends Component {
    static template = "ica_money_changer.home_screen";
    static props = {};
    static  components = {NavbarComponent};

    setup() {
        this.state = useState({
            "currencies": []
        });
        this.ormService = this.env.services.orm;
        onWillStart(async () => {
            await this.getCurrencies();
        })
    }

    async getCurrencies() {
        this.state.currencies = await this.ormService.searchRead(
            "res.currency",
            [["active", "=", true]]
        );
    }
}

registry.category("ica_money_changer").add("home_screen", HomeScreen)