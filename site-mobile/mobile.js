import Vue from 'vue'
import App from '../src/App.vue'
import VueRouter from 'vue-router'
import WmjButton from '../src/components/button'
import { Icon, Loading } from 'vant'

import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import '../src/style/_variables.scss';
// import '../src/style/style.scss';

Vue.use(VueRouter)
Vue.use(Icon, Loading)
Vue.config.productionTip = false
Vue.component('wmj-button', WmjButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
