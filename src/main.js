"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const App_vue_1 = require("./App.vue");
const router_1 = require("./router");
const Element = require("element-ui");
require("./style/index.scss");
require("element-ui/lib/theme-chalk/index.css");
vue_1.default.use(Element);
vue_1.default.config.productionTip = false;
const app = new vue_1.default({
    el: '#app',
    router: router_1.default,
    components: { App: App_vue_1.default },
    render: h => h(App_vue_1.default),
});
exports.default = app;
