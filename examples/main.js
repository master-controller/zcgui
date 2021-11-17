import Vue from 'vue'
import App from './App.vue'


import 'zcg-ui/dist/css/index.css';
import ZUI from 'zcg-ui';
Vue.use(ZUI);

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
