import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Storage from "vue-ls";

Vue.config.productionTip = false;

Vue.use(Storage);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
