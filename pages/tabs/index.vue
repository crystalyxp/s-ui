<template>
  <section class="Tabs-Page">
    <div class="article">
      <p class="title">自定义导航内容</p>
      <p
        class="desc"
      >使用:slot-title="true"时，导航下面的内容区域需自己去写，此时s-tab组件下的slot将成为导航的自定义内容文字填充，此功能可以更灵活地配置导航</p>
      <s-tabs slot-title :nav-per-view="5" v-model="activeTab">
        <s-tab v-for="item of tabList" :key="item">Tab{{item}}</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">自适应导航宽度</p>
      <s-tabs effect @change="change" @render="render">
        <s-tab title="Tab1">1</s-tab>
        <s-tab title="Tab2222">2</s-tab>
        <s-tab title="Tab33">3</s-tab>
        <s-tab title="Tab444444">4</s-tab>
        <s-tab title="Tab55">5</s-tab>
        <s-tab title="Tab66666">6</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">自定义导航间距样式</p>
      <s-tabs class="custom-tabs">
        <s-tab title="Tab1">1</s-tab>
        <s-tab title="Tab2">2</s-tab>
      </s-tabs>
    </div>
  </section>
</template>

<script>
import sTabs from '@/s-ui/s-tabs';
import sTab from '@/s-ui/s-tab';

export default {
  components: {
    sTabs,
    sTab
  },
  data () {
    return {
      tabList: [1, 2, 3, 4, 5, 6, 7],
      activeTab: 3
    };
  },
  methods: {
    change (index) {
      console.log('change:', index);
    },
    render (index) {
      console.log('render:', index);
    }
  },
  onLoad () {
  }
};
</script>

<style lang="scss">
.Tabs-Page {
  .article {
    &:not(:first-child) {
      margin-top: 40rpx;
    }
    .title {
      padding: 20rpx;
      font-size: 28rpx;
      text-align: center;
    }
    .desc {
      padding: 0 40rpx;
      font-size: 26rpx;
    }
  }
  /deep/.s-tabs {
    .s-tab-panel {
      padding: 30rpx;
    }
  }
  .custom-tabs {
    /deep/.s-tab-nav-view {
      display: flex;
      justify-content: center;
      .s-tab-nav {
        &:not(:first-child) {
          margin-left: 40rpx;
        }
      }
    }
  }
}
</style>
