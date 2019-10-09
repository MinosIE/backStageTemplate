import RouterView from '../layout/RouterView';
const routes = {
    path: 'nav1',
    name: 'nav1',
    meta: {
        title: '测试页面',
        icon: 'experiment',
    },
    component: RouterView,
    children: [
        {
            path: '/nav1',
            name: 'nav1',
            meta: {
                title: '测试页面',
                icon: 'experiment',
            },
            component: () => import(/* webpackChunkName: "nav1" */ '@/views/nav1/nav1.vue'),
        },
    ],
};
export default routes;
