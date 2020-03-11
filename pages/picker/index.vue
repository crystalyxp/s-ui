<template>
  <section class="Picker-Page">
    <div
      class="btn btn-primary btn-block"
      style="height:80rpx;font-size:30rpx"
      @click="showPicker=true"
    >选择：{{selectedText}}</div>
    <s-picker :visible.sync="showPicker" :list="list" v-model="selectedIndex"></s-picker>
  </section>
</template>

<script>
import sPicker from '@/s-ui/s-picker';

export default {
  components: {
    sPicker
  },
  computed: {
    selectedText () {
      return this.list[0][this.selectedIndex[0]];
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
</script>

<style lang="scss">
.Picker-Page {
}
</style>
