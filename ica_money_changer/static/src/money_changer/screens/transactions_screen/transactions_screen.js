/** @odoo-module */
import {Component, onWillStart, useState} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

import {registry} from "@web/core/registry";
import {NavbarComponent} from "../../components/navbar/navbar";

export class TransactionsScreen extends Component {
    static template = "ica_money_changer.transactions_screen";
    static  components = {NavbarComponent};
}

registry.category("ica_money_changer").add("transactions_screen", TransactionsScreen)