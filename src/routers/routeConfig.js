import test from './test';
import nav1 from './nav1';
const routes = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    },
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        redirect: { name: 'test' },
        children: [test, nav1],
    },
];
export default routes;
