import RouterView from '../layout/RouterView';
const routes = {
    path: 'test',
    name: 'test',
    meta: {
        title: '测试页面',
        icon: 'experiment',
    },
    component: RouterView,
    children: [
        {
            path: '/test',
            name: 'test',
            meta: {
                title: '测试页面',
                icon: 'experiment',
            },
            component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue'),
        },
    ],
};

export default routes;
