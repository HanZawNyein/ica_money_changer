/** @odoo-module */
import {Component, useState} from "@odoo/owl";
import {registry} from "@web/core/registry";
import {session} from "@web/session";

export class Root extends Component {
    static template = "ica_money_changer.Root";
    static props = {};

    setup() {
        this.state = useState({
            "mainScreen": "home_screen"
        });
        this.routerService = this.env.services.router;
        this.switchScreen = this.switchScreen.bind(this);
    }

    getInitScreen() {
        this.state.mainScreen = session.uid ? 'home_screen' : 'auth_screen';
    }

    switchScreen(screenName) {
        this.state.currentScreen = screenName;
    }

    getComponent() {
        this.routerService.pushState({route: this.state.mainScreen});
        return registry.category("ica_money_changer").get(this.state.mainScreen);
    }
}