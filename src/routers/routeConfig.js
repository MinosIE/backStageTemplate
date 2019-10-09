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
            {
                path: 'nav1',
                name: 'nav1',
                meta: {
                    title: '测试页面',
                    icon: 'experiment',
                },
                component: () => import(/* webpackChunkName: "nav1" */ '@/views/nav1/nav1.vue'),
            },
            {
                path: 'nav2',
                name: 'nav2',
                meta: {
                    title: '测试页面',
                    icon: 'experiment',
                },
                component: () => import(/* webpackChunkName: "nav2" */ '@/views/nav2/nav2.vue'),
            },
        ],
    },
];
export default routes;
