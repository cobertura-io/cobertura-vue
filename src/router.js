import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/login'
import Profile from './views/profile.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        component: Index,
        name: 'index'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile'
    }]
})