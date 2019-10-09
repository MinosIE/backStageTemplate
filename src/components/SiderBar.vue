<template>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div :class="$style.logo" />
        <a-menu theme="dark" mode="inline" @click="changeMenu" :selectedKeys="selectedKeys">
            <a-menu-item v-for="item in menuList" :key="item.path">
                <a-icon :type="item.icon" />
                <span>{{item.name}}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script>
import { Layout, Menu, Icon } from 'ant-design-vue';
const { Sider, Header, Content } = Layout;
const { Item: MenuItem } = Menu;
export default {
    components: {
        [Layout.name]: Layout,
        [Sider.name]: Sider,
        [Header.name]: Header,
        [Content.name]: Content,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Icon.name]: Icon,
    },
    props: {
        collapsed: {
            default: false,
            type: Boolean,
        },
    },
    data() {
        return {
            activeKey: 0,
            selectedKeys: '',
            menuList: [
                {
                    name: 'test',
                    icon: 'user',
                    path: '/test',
                },
                {
                    name: 'nav1',
                    icon: 'user',
                    path: '/nav1',
                    children: [
                        {
                            name: 'child1',
                            path: '/child1',
                        },
                    ],
                },
                {
                    name: 'nav2',
                    icon: 'user',
                    path: '/nav2',
                },
            ],
        };
    },
    created() {
        this.updateMenu();
    },
    watch: {
        $route: function(newRoute, oldRoute) {
            this.selectedKeys = [newRoute.fullPath];
            this.updateMenu(newRoute.fullPath, newRoute.fullPath);
        },
    },
    methods: {
        getActive(path) {
            this.selectedKeys = [path];
        },
        updateMenu(path = this.$route.path, key = this.$route.path) {
            this.selectedKeys = [path];
            this.$emit('addTabs', path, key);
        },
        changeMenu({ item, key, keyPath }) {
            const path = keyPath.toString();
            this.updateMenu(path, key);
        },
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
};
</script>
<style lang="less" module>
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>