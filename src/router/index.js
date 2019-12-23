"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vue_router_1 = require("vue-router");
const loging_vue_1 = require("../components/loging.vue");
const blog_vue_1 = require("../components/blog.vue");
const register_vue_1 = require("../components/register.vue");
const Comments_vue_1 = require("../components/Comments.vue");
const Home_vue_1 = require("../components/Home.vue");
const Navigation_vue_1 = require("../components/Navigation.vue");
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
            path: '/register',
            name: 'register',
            component: register_vue_1.default
        },
        {
            path: '/Comments',
            name: 'comments',
            component: Comments_vue_1.default
        },
        {
            path: '/Nav',
            name: 'Navigation',
            component: Navigation_vue_1.default
        }
    ]
});
