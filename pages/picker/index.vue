<template>
  <section class="Picker-Page">
    <div
      class="btn btn-primary btn-block"
      style="height:80rpx;font-size:30rpx"
      @click="showOnePicker=true"
    >一级：{{oneSelectedText}}</div>

    <s-picker :visible.sync="showOnePicker" :list="onePickerList" v-model="oneSelected"></s-picker>

    <div
      class="btn btn-primary btn-block"
      style="height:80rpx;font-size:30rpx;margin-top:40rpx"
      @click="showTwoPicker=true"
    >二级联动：{{twoSelectedText}}</div>

    <s-picker
      :visible.sync="showTwoPicker"
      :list="twoPickerList"
      @change="twoChange"
      v-model="twoSelected"
    ></s-picker>
  </section>
</template>

<script>
import sPicker from '@/s-ui/s-picker';

export default {
  components: {
    sPicker
  },
  computed: {
    oneSelectedText () {
      return this.listData[this.oneSelected[0]].text;
    },
    twoSelectedText () {
      return this.listData[this.twoSelected[0]].text + '-' + this.listData[this.twoSelected[0]].child[this.twoSelected[1]];
    }
  },
  data () {
    return {
      listData: [
        {
          text: '山西',
          child: ['太原', '运城', '临汾', '吕梁']
        },
        {
          text: '河北',
          child: ['石家庄', '邯郸']
        },
        {
          text: '陕西',
          child: ['西安']
        }
      ],
      // 一级
      onePickerList: [],
      showOnePicker: false,
      oneSelected: [0],
      // 二级
      twoPickerList: [],
      showTwoPicker: false,
      twoSelected: [0, 0]
    };
  },
  methods: {
    twoChange (i, indexList) {
      if (i == 0) {
        this.twoPickerList = [this.listData, this.listData[indexList[0]].child];
      }
    }
  },
  onLoad () {
    this.onePickerList = [this.listData];
    this.twoPickerList = [this.listData, this.listData[0].child];
  }
};
</script>

<style lang="scss">
.Picker-Page {
}
</style>
