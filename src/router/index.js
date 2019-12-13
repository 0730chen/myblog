"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vue_router_1 = require("vue-router");
const loging_vue_1 = require("../components/loging.vue");
const blog_vue_1 = require("../components/blog.vue");
const manage_vue_1 = require("./../components/manage.vue");
const register_vue_1 = require("../components/register.vue");
const addArticle_vue_1 = require("../components/addArticle.vue");
const message_vue_1 = require("../components/message.vue");
const holiday_vue_1 = require("../components/holiday.vue");
const timeClick_vue_1 = require("../components/timeClick.vue");
const wrap_vue_1 = require("../components/wrap.vue");
const Comments_vue_1 = require("../components/Comments.vue");
const Home_vue_1 = require("../components/Home.vue");
vue_1.default.use(vue_router_1.default);
exports.default = new vue_router_1.default({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home_vue_1.default
        },
        {
            path: '/blog',
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
            path: '/Comments',
            name: 'comments',
            component: Comments_vue_1.default
        },
        {
            path: '/wrap',
            name: 'wrap',
            component: wrap_vue_1.default
        }
    ]
});
