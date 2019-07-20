import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/login'
import Profile from './views/profile'
import Erro from './views/error'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
            {
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
            },
            {
                path: '*',
                component: Erro,
                name: 'error'

            }
        ]

})