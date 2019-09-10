<template>
    <div :class="$style.test">
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
import {
    SmileOutline,
    MehOutline,
    CloseOutline,
    CheckOutline,
    LoadingOutline,
    CheckCircleOutline,
    InfoCircleOutline,
    CloseCircleOutline,
    ExclamationCircleOutline,
    CheckCircleFill,
    InfoCircleFill,
    CloseCircleFill,
    ExclamationCircleFill,
    UpOutline,
    DownOutline,
    LeftOutline,
    RightOutline,
    RedoOutline,
    CalendarOutline,
    SearchOutline,
    BarsOutline,
    StarOutline,
    FilterOutline,
    CaretUpOutline,
    CaretDownOutline,
    PlusOutline,
    FileOutline,
    FolderOpenOutline,
    FolderOutline,
    PaperClipOutline,
    PictureOutline,
    EyeOutline,
    DeleteOutline,
    UploadOutline,
    DownloadOutline,
    ExportOutline,
    ClockCircleOutline,
    MenuFoldOutline,
    MenuUnfoldOutline,
    UserOutline,
    VideoCameraOutline,
} from '@/icons';
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
            iconList: [
                SmileOutline,
                MehOutline,
                CloseOutline,
                CheckOutline,
                LoadingOutline,
                CheckCircleOutline,
                InfoCircleOutline,
                CloseCircleOutline,
                ExclamationCircleOutline,
                CheckCircleFill,
                InfoCircleFill,
                CloseCircleFill,
                ExclamationCircleFill,
                UpOutline,
                DownOutline,
                LeftOutline,
                RightOutline,
                RedoOutline,
                CalendarOutline,
                SearchOutline,
                BarsOutline,
                StarOutline,
                FilterOutline,
                CaretUpOutline,
                CaretDownOutline,
                PlusOutline,
                FileOutline,
                FolderOpenOutline,
                FolderOutline,
                PaperClipOutline,
                PictureOutline,
                EyeOutline,
                DeleteOutline,
                UploadOutline,
                DownloadOutline,
                ExportOutline,
                ClockCircleOutline,
                MenuFoldOutline,
                MenuUnfoldOutline,
                UserOutline,
                VideoCameraOutline,
            ],
        };
    },
    methods: {},
    created() {},
};
</script>
<style lang="less" module>
.test {
}
</style>