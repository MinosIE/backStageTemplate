<template>
    <Layout :class="$style.componentsLayout">
        <!-- <dl>
            <dt>{{loginUserInfo.role == roleKey.bidder ? '交易管理' : '分包租赁'}}</dt>
            <dd>
                <a href="/laborWage" style="color:#666;">劳务工资</a>
            </dd>
        </dl>-->
        <Layout :class="$style.content">
            <!-- 面包屑 -->
            <a-breadcrumb style="margin: 16px 0 0 20px">
                <a-breadcrumb-item
                    v-for="(item, index) in breadcrumb[loginUserInfo.role]"
                    :key="index"
                >
                    <a
                        :href="item.url ? webUrl + item.url : 'javascript:void(0)'"
                        target="_blank"
                    >{{item.name}}</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item v-if="$route.name !='laborWage'">
                    <router-link to="/laborWage" replace>劳务工资</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
            </a-breadcrumb>
            <!-- 内容区 -->
            <Content :style="{ minHeight: '280px' }">
                <slot></slot>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import router from '@/config/routeConfig';
import getUserInfo from '@/mixin/getUserInfo';
import { roleKey, breadcrumb } from '@/utils/constant';
import { Layout, Menu, Avatar, Breadcrumb, Message, Divider } from 'ant-design-vue';
import config from '../config/';
const [Header, Sider, Content, MenuItem, BreadcrumbItem] = [
    Layout.Header,
    Layout.Sider,
    Layout.Content,
    Menu.Item,
    Breadcrumb.Item,
];

export default {
    components: {
        Layout,
        Header,
        Sider,
        Content,
        Menu,
        MenuItem,
        Divider,
        Avatar,
        [Breadcrumb.name]: Breadcrumb,
        [BreadcrumbItem.name]: BreadcrumbItem,
    },
    mixins: [getUserInfo],
    data() {
        return {
            collapsed: false,
            defaultSelectedKeys: [],
            routerList: [],
            roleKey,
            breadcrumb,
            webUrl: config.webUrl,
        };
    },
    methods: {
        navClick({ key }) {
            this.$router.push({ name: key });
        },
        logout() {
            Message.success('退出成功');
        },
    },
    created() {
        this.routerList = router[0].children;
        this.defaultSelectedKeys.push(this.$route.name);
    },
};
</script>
<style lang="less" module>
.componentsLayout {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    .relative;
    dl {
        .absolute;
        left: 0;
        top: 0;
        padding: 1px;
        width: 166px;
        border: 1px solid #ddd;
        background-color: #f8f8f8;
        min-height: 500px;
    }
    dt {
        font-size: 16px;
        border-bottom: 1px solid #e7e7e7;
        padding: 10px 15px;
        color: #777;
        line-height: 1;
        font-weight: bold;
    }
    dd {
        padding: 5px 15px 5px 30px;
        color: #000;
        margin-bottom: 0;
        .pointer;
        &:hover {
            background-color: #eee;
        }
    }
    .content {
    }
}

:global {
}
</style>