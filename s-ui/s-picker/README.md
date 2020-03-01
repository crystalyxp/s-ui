# 提示
后续将不在插件市场更新，组件包和示例请访问github中[s-ui地址](https://github.com/sldt/s-ui)下载

# s-picker

## 参数说明

``` js
{
  customClass: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'bottom'
  },
  // 双向绑定picker显示隐藏
  visible: {
    type: Boolean,
    default: false
  },
  // 是否使用过渡效果
  effect: {
    type: Boolean,
    default: true
  },
  // 过渡时间
  effectDuration: {
    type: Number,
    default: 300
  },
  // 是否显示遮罩
  mask: {
    type: Boolean,
    default: true
  },
  // 遮罩透明度
  maskOpacity: {
    type: Number,
    default: 0.7
  },
  // 点击遮罩是否关闭弹框
  maskClose: {
    type: Boolean,
    default: true
  },
  // 数据
  list: {
    type: Array,
    default () {
      return [];
    }
  },
  // item文本key
  textKey: {
    type: String,
    default: 'text'
  },
  // v-model双向绑定选中的下标数组
  value: {
    type: Array,
    default () {
      return [];
    }
  },
  title: {
    type: String,
    default: 'picker'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  cancelColor: {
    type: String,
    default: '#999'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  confirmColor: {
    type: String,
    default: '#007bff'
  }
}
```

## 使用方式

#### template

``` html
<div
  class="btn btn-primary btn-block"
  style="height:80rpx;font-size:30rpx"
  @click="showPicker=true"
>选择：{{selectedText}}</div>
<s-picker :visible.sync="showPicker" :list="list" v-model="selectedIndex"><s-picker>
```

#### script
``` js
import sPicker from '@/s-ui/s-picker';

export default {
  components: {
    sPicker
  },
  computed: {
    selectedText () {
      return this.list[0][this.selectedIndex];
    }
  },
  data () {
    return {
      showPicker: false,
      list: [['中国', '美国', '伊朗', '日本']],
      selectedIndex: [0]
    };
  }
};
```