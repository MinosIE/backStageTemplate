<template>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div :class="$style.logo" />
        <a-menu theme="dark" mode="inline" @click="changeMenu" :selectedKeys="selectedKeys">
            <!--<a-menu-item v-for="item in menuList" :key="item.path">
                <a-icon :type="item.icon" />
                <span>{{item.name}}</span>
            </a-menu-item>-->
            <a-sub-menu v-for="menu in menuList" :key="menu.path">
                <span slot="title">
                    <a-icon :type="menu.meta.icon" />
                    <span>{{menu.name}}</span>
                </span>
                <a-menu-item
                    v-for="children in menu.children"
                    :key="children.path"
                >{{children.name}}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>
<script>
import { Layout, Menu, Icon } from 'ant-design-vue';
const { Sider, Header, Content } = Layout;
const { Item: MenuItem, SubMenu } = Menu;
export default {
    components: {
        [Layout.name]: Layout,
        [Sider.name]: Sider,
        [Header.name]: Header,
        [Content.name]: Content,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [SubMenu.name]: SubMenu,
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
                // {
                //     name: '工作台',
                //     icon: 'user',
                //     path: '/test',
                // },
                // {
                //     name: 'nav1',
                //     icon: 'user',
                //     path: '/nav1',
                //     children: [
                //         {
                //             name: 'child1',
                //             path: '/child1',
                //             icon: 'user',
                //         },
                //     ],
                // },
                // {
                //     name: 'nav2',
                //     icon: 'user',
                //     path: '/nav2',
                // },
            ],
        };
    },
    created() {
        this.updateMenu();
        console.log(this.$router.options.routes[1].children);
        this.menuList = this.$router.options.routes[1].children;
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
            console.log(path);
            this.$emit('addTabs', path, key);
        },
        changeMenu({ item, key, keyPath }) {
            console.log(key);
            console.log(keyPath);
            const path = key.toString();
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