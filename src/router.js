import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Index from './views/Index'
import Erro from './views/Error'
import Profile from './views/Profile'

Vue.use(Router)

export default new Router ({
    mode: 'hash',
    routes: [{
        path: '/',
        component: Login,
        name: 'login'
    }, {
        path: '/index',
        component: Index,
        name: 'index'
    }, {
        path: '/profile',
        component: Profile,
        name: 'profile'
    }, {
        path: '*',
        component: Erro,
        name: 'error'
    }]
})