<template>
  <section class="Tabs-Page">
    <s-tabs :effect="true" v-model="activeTab" @change="change" :nav-per-view="5">
      <s-tab title="<span>Tab1</span>">1</s-tab>
      <s-tab title="Tab2" :disabled="true">2</s-tab>
      <s-tab title="Tab3">3</s-tab>
      <s-tab title="Tab4">4</s-tab>
      <s-tab title="Tab5">5</s-tab>
      <s-tab title="Tab6">6</s-tab>
      <s-tab title="Tab7">7</s-tab>
    </s-tabs>
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
      activeTab: 0
    };
  },
  methods: {
    change (index) {
      // console.log(index);
    }
  },
  onLoad () {
  }
};
</script>

<style lang="scss">
.Tabs-Page {
  /deep/.s-tabs {
    .s-tab-panel {
      padding: 40rpx;
    }
  }
}
</style>
