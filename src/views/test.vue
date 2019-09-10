<template>
  <div :class="$style.container">
    <div :class="$style.optBtnWrap"></div>
    <div :class="$style.test">
      <div></div>
      <div></div>
    </div>
    <a-card title="项目中用到的图标">
      <a-row v-for="i in Math.ceil(iconList.length / 12)" :key="i">
        <a-col :span="2" v-for="(item, index) in iconList.slice(12 * (i - 1), 12 * i)" :key="index">
          <a-icon :type="item.type" />
          {{item.name}}
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import { Button, Select, Message, Icon, Row, Col, Card } from "ant-design-vue";
const { Option } = Select;
export default {
  components: {
    [Button.name]: Button,
    [Select.name]: Select,
    [Option.name]: Option,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col,
    [Card.name]: Card
  },
  mixins: [],
  data() {
    return {
      iconList: [
        { type: "upload", name: "上传" },
        { type: "download", name: "下载" },
        { type: "export", name: "导出" },
        { type: "loading", name: "加载" },
        { type: "plus", name: "加号" },
        { type: "check", name: "完成" }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" module>
.test {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
}
</style>