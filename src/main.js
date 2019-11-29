"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var element = require("element-ui");
vue_1.default.use(element);
vue_1.default.config.productionTip = false;
var app = new vue_1.default({
    el: '#app',
    router: router_1.default,
    components: { App: App_vue_1.default },
    template: "<App/>"
});
exports.default = app;
//# sourceMappingURL=main.js.map