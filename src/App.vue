<template>
    <div id="app">
        <a-locale-provider :locale="zh_CN">
            <transition name="fade">
                <router-view />
            </transition>
        </a-locale-provider>
    </div>
</template>
<script>
import { LocaleProvider } from 'ant-design-vue';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
    components: {
        [LocaleProvider.name]: LocaleProvider,
    },
    data() {
        return {
            zh_CN,
        };
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="less">
body {
    margin: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
