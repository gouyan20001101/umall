import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant'
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

const router = new Router({
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
    //全局路由守卫
router.beforeEach((to, form, next) => {
    if (to.path == '/mine' || to.path == '/cart') {
        //获取用户信息
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (!user) {
            Toast.fail('请登录');
            //用户信息不存在，去到登录页
            router.push('/login')
            return
        }
    }
    next()
})

export default router