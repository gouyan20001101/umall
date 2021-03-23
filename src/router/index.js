import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () =>
    import ('../pages/index')
const login = () =>
    import ('../pages/login')
const register = () =>
    import ('../pages/register')
const home = () =>
    import ('../pages/home')
const goodsList = () =>
    import ('../pages/goodsList')
const cate = () =>
    import ('../pages/cate');
const cart = () =>
    import ('../pages/cart')
const mine = () =>
    import ('../pages/mine')

export default new Router({
    routes: [{
            path: '/',
            component: index,
            redirect: '/home',
            children: [{
                    path: 'home',
                    component: home
                },

                {
                    path: 'cate',
                    component: cate
                },
                {
                    path: 'cart',
                    component: cart
                },
                {
                    path: 'mine',
                    component: mine
                },
            ]
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/goodsList',
            component: goodsList
        },
        {
            path: '*',
            redirect: '/login'
        },

    ]
})