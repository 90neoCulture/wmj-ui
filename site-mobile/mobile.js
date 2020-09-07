import Vue from 'vue'
import App from '../src/App.vue'
import router from '../router'
import WmjButton from '../src/components/button'
import WmjCell from '../src/components/cell'
import { Icon, Loading } from 'vant'

import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import '../src/style/_variables.scss';
// import '../src/style/style.scss';

Vue.use(Icon, Loading)
Vue.config.productionTip = false
Vue.component('wmj-button', WmjButton)
Vue.component('wmj-cell', WmjCell)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
