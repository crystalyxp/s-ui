<template>
  <section class="Home-Page">
    <ul class="tab-list">
      <li v-for="(item,index) of list" :key="index" @click="jumpTo(item)">{{item.title}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          'path': '/pages/picker/index',
          'title': 'picker'
        },
        {
          'path': '/pages/tabs/index',
          'title': '选项卡'
        },
        {
          'path': '/pages/popup/index',
          'title': '弹框,popup'
        },
        {
          'path': '/pages/pull-scroll/index',
          'title': '下拉刷新，上拉加载'
        }
      ]
    };
  },
  methods: {
    jumpTo (item) {
      uni.navigateTo({ url: item.path });
    }
  }
};
</script>

<style lang="scss">
.Home-Page {
  .tab-list {
    li {
      font-size: 28rpx;
      padding: 30rpx;
      text-align: center;
      cursor: pointer;
      &:not(:first-child) {
        border-top: 2rpx solid #eaeaea;
      }
    }
  }
}
</style>
