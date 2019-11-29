import Vue from 'vue'
import Router from 'vue-router'
import loging from '../components/loging.vue'
import blog from '../components/blog.vue'
import manage from './../components/manage.vue'
import register from '../components/register.vue'
import addArticle from '../components/addArticle.vue'
import message from '../components/message.vue'
import holiday from '../components/holiday.vue'
import timeClick from '../components/timeClick.vue'
import note from '../components/note.vue'
// @ts-ignore
import wrap from '../components/wrap.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'blog',
            component: blog
        },
        {
            path: '/loging',
            name: 'loging',
            component: loging
        },
        {
            path: '/manage',
            name: 'management',
            component: manage

        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/addArticle',
            name: 'addArticle',
            component: addArticle
        },
        {
            path: '/Message',
            name: 'Message',
            component: message
        },
        {
            path: '/holiday',
            name: 'holiday',
            component: holiday
        },
        {
            path: '/timeClick',
            name: 'timeClick',
            component: timeClick,
        },
        {
            path: '/note',
            name: 'note',
            component: note
        },
        {
            path: '/wrap',
            name: 'wrap',
            component: wrap
        }
    ]
})
