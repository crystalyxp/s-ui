import '@/css/app.scss';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

console.log('编译时间：' + process.env.VUE_APP_TIME);

App.mpType = 'app';

const app = new Vue({
  ...App
});

app.$mount();
