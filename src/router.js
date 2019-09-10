import Vue from "vue";
import Router from "vue-router";
import routes from "@/routers/routeConfig";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const { meta } = to;
    document.title = meta.title;
    next();
});

export default router;
