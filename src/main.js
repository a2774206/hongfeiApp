// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import publicSm from './components/public/public_sm'
Vue.use(MintUi);
import 'mint-ui/lib/style.css';

//全局组件注册
Vue.component('publicSm',publicSm);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
