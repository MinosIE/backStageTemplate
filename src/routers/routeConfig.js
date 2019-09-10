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
        children: [
            {
                path: 'test',
                name: 'test',
                meta: {
                    title: '测试页面',
                    icon: 'experiment',
                },
                component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue'),
            },
        ],
    },
];
export default routes;
