<template>
    <a-layout>
        <sider-bar :collapsed="collapsed" @addTabs="addTabs" ref="siderbar" />
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0; border-bottom: 1px solid #eee">
                <a-icon
                    :class="$style.trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="()=> collapsed = !collapsed"
                />
                <div :class="$style.headerRight">
                    <header-avatar class="header-item" />
                </div>
            </a-layout-header>
            <a-layout-content :style="{ padding: '15px', background: '#fff', minHeight: '280px' }">
                <a-tabs
                    hideAdd
                    v-model="activeKey"
                    type="editable-card"
                    @edit="onEdit"
                    @change="tabsChange"
                >
                    <a-tab-pane v-for="pane in panes" :key="pane.key" :closable="pane.closable">
                        <span slot="tab" :pagekey="pane.path">{{pane.title}}</span>
                    </a-tab-pane>
                </a-tabs>
                <slot />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import { Layout, Menu, Icon, Tabs } from 'ant-design-vue';
import HeaderAvatar from './HeaderAvatar.vue';
import SiderBar from './SiderBar';
const { Sider, Header, Content } = Layout;
const { Item: MenuItem } = Menu;
const { TabPane } = Tabs;
export default {
    components: {
        [Layout.name]: Layout,
        [Sider.name]: Sider,
        [Header.name]: Header,
        [Content.name]: Content,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Icon.name]: Icon,
        [Tabs.name]: Tabs,
        [TabPane.name]: TabPane,
        HeaderAvatar,
        SiderBar,
    },
    data() {
        return {
            collapsed: false,
            activeKey: 0,
            panes: [],
        };
    },
    created() {},
    methods: {
        onEdit(targetKey, action) {
            this[action](targetKey);
        },
        tabsChange(activeKey) {
            this.$router.push(activeKey);
            this.$refs.siderbar.getActive(activeKey);
        },
        addTabs(path, key) {
            console.log(path);
            const { panes, activeKey } = this;
            if (panes.findIndex(item => item.key == key) === -1) {
                panes.push({
                    path,
                    title: path,
                    key,
                });
            }
            this.$router.push(path);
            this.activeKey = key;
        },
        remove(targetKey) {
            let { activeKey, panes } = this;
            const targetIndex = panes.findIndex(item => item.key === targetKey);
            if (activeKey === targetKey) {
                activeKey = panes[targetIndex + (targetIndex > 0 ? -1 : 1)].key;
                this.activeKey = activeKey;
                this.$router.replace(activeKey);
            }
            panes.splice(targetIndex, 1);
        },
    },
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
.headerRight {
    float: right;
    margin: 0 24px;
}
</style>
