import Vue from 'vue'
import App from '../src/App.vue'
import router from '../router'
import WmjButton from '../src/button'
import WmjCell from '../src/cell'
import WmjCellGroup from '../src/cell-group'
import WmjIcon from '../src/icon'
import WmjImage from '../src/image'
import { Icon, Loading, Tab, Tabs, Col } from 'vant'
import Locale from '../src/locale'
import zhCN from '../src/locale/lang/zh-CN'

import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import '../src/style/_variables.scss';

Vue.use(Icon, Loading, Tab, Tabs, Col )
Vue.config.productionTip = false
Vue.component('wmj-button', WmjButton)
Vue.component('wmj-cell', WmjCell)
Vue.component('wmj-cell-group', WmjCellGroup)
Vue.component('wmj-icon', WmjIcon)
Vue.component('wmj-image', WmjImage)

console.log(Locale, zhCN)
// Locale.add({
//   'zh-CN': zhCN,
// })

// Vue.mixin({

// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
