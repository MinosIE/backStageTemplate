<template>
    <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial">
        <span style="cursor: pointer">
            <a-avatar :class="$style.avatar" size="small" shape="circle" :src="currUser.avatar" />
            <span>{{currUser.name}}</span>
        </span>
        <a-menu style="width: 150px" slot="overlay">
            <a-menu-item>
                <a-icon type="user" />
                <span>个人中心</span>
            </a-menu-item>
            <a-menu-item>
                <a-icon type="setting" />
                <span>设置</span>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
                <a-icon type="poweroff" />
                <span>退出登录</span>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
import { Dropdown, Avatar, Menu, Icon } from 'ant-design-vue';
const { Item: MenuItem, Divider } = Menu;
export default {
    name: 'HeaderAvatar',
    components: {
        [Dropdown.name]: Dropdown,
        [Avatar.name]: Avatar,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Divider.name]: Divider,
        [Icon.name]: Icon,
    },
    data() {
        return {
            currUser: {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                name: 'Tom',
            },
        };
    },
    created() {},
};
</script>

<style lang="less" module>
.avatar {
    margin: 20px 4px 20px 0;
    color: #1890ff;
    background: hsla(0, 0%, 100%, 0.85);
    vertical-align: middle;
}
</style>
