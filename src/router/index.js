"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var loging_vue_1 = require("../components/loging.vue");
var blog_vue_1 = require("../components/blog.vue");
var manage_vue_1 = require("./../components/manage.vue");
var register_vue_1 = require("../components/register.vue");
var addArticle_vue_1 = require("../components/addArticle.vue");
var message_vue_1 = require("../components/message.vue");
var holiday_vue_1 = require("../components/holiday.vue");
var timeClick_vue_1 = require("../components/timeClick.vue");
var note_vue_1 = require("../components/note.vue");
var wrap_vue_1 = require("../components/wrap.vue");
vue_1.default.use(vue_router_1.default);
exports.default = new vue_router_1.default({
    routes: [{
            path: '/',
            name: 'blog',
            component: blog_vue_1.default
        },
        {
            path: '/loging',
            name: 'loging',
            component: loging_vue_1.default
        },
        {
            path: '/manage',
            name: 'management',
            component: manage_vue_1.default
        },
        {
            path: '/register',
            name: 'register',
            component: register_vue_1.default
        },
        {
            path: '/addArticle',
            name: 'addArticle',
            component: addArticle_vue_1.default
        },
        {
            path: '/Message',
            name: 'Message',
            component: message_vue_1.default
        },
        {
            path: '/holiday',
            name: 'holiday',
            component: holiday_vue_1.default
        },
        {
            path: '/timeClick',
            name: 'timeClick',
            component: timeClick_vue_1.default,
        },
        {
            path: '/note',
            name: 'note',
            component: note_vue_1.default
        },
        {
            path: '/wrap',
            name: 'wrap',
            component: wrap_vue_1.default
        }
    ]
});
//# sourceMappingURL=index.js.map