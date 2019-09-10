<template>
    <div :class="$style.test">
        <a-card title="按钮">
            <div :class="$style.btnWrap">
                <a-button type="primary">Primary</a-button>
                <a-button>Default</a-button>
                <a-button type="dashed">Dashed</a-button>
                <a-button type="danger">Danger</a-button>
                <a-button type="link">Link</a-button>
            </div>
        </a-card>

        <a-card title="项目中用到的图标">
            <a-row v-for="i in Math.ceil(iconList.length / 6)" :key="i">
                <a-col
                    :span="4"
                    v-for="(item, index) in iconList.slice(6 * (i - 1), 6 * i)"
                    :key="index"
                >
                    <a-icon :type="item.name" />
                    {{item.name}}
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
import * as icons from '@/icons';
import { Button, Select, Message, Icon, Row, Col, Card } from 'ant-design-vue';
const { Option } = Select;

export default {
    components: {
        [Button.name]: Button,
        [Select.name]: Select,
        [Option.name]: Option,
        [Icon.name]: Icon,
        [Row.name]: Row,
        [Col.name]: Col,
        [Card.name]: Card,
    },
    mixins: [],
    data() {
        return {
            iconList: Object.values(icons),
        };
    },
    methods: {},
    created() {},
};
</script>
<style lang="less" module>
.btnWrap {
    margin: 10px 0;
    button {
        margin-right: 10px;
    }
}
:global {
    .ant-card {
        margin-bottom: 20px;
    }
}
</style>