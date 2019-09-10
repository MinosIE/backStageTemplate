<template>
    <a-layout>
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div :class="$style.logo" />
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0; border-bottom: 1px solid #eee">
                <a-icon
                    :class="$style.trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-content :style="{ padding: '15px', background: '#fff', minHeight: '280px' }">
                <div :class="$style.breadcrumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>
                            <a href>Application Center</a>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                            <a href>Application List</a>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>An Application</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>

                <slot />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import { Layout, Menu, Icon, Breadcrumb } from 'ant-design-vue';
const { Sider, Header, Content } = Layout;
const { Item: MenuItem } = Menu;
const { Item: BreadcrumbItem } = Breadcrumb;
export default {
    components: {
        [Layout.name]: Layout,
        [Sider.name]: Sider,
        [Header.name]: Header,
        [Content.name]: Content,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Icon.name]: Icon,
        [Breadcrumb.name]: Breadcrumb,
        [BreadcrumbItem.name]: BreadcrumbItem,
    },
    data() {
        return {
            collapsed: false,
        };
    },
    created() {},
};
</script>
<style lang="less" module>
:global {
    .ant-layout {
        height: 100vh;
    }
}
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}
.trigger:hover {
    color: #1890ff;
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
.breadcrumb {
    margin-bottom: 15px;
}
</style>
