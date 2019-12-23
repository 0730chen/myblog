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
import wrap from '../components/wrap.vue'
import Comments from '../components/Comments.vue'
import Home from '../components/Home.vue'
import Navigation from '../components/Navigation.vue'
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name:'home',
        component: Home
      },
      {
            path: '/blog',
            name: 'blog',
            component: blog
        },
        {
            path: '/loging',
            name: 'loging',
            component: loging
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/Comments',
            name: 'comments',
            component:Comments
        },
      {
        path: '/Nav',
        name:'Navigation',
        component: Navigation
      }
    ]
})
