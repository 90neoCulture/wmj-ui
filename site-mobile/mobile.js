import Vue from 'vue'
import App from '../src/App.vue'
import router from '../router'
import WmjButton from '../src/components/button'
import WmjCell from '../src/components/cell'
import WmjCellGroup from '../src/components/cell-group'
import WmjIcon from '../src/components/icon'
import WmjImage from '../src/components/image'
import { Icon, Loading } from 'vant'

import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import '../src/style/_variables.scss';
// import '../src/style/style.scss';

Vue.use(Icon, Loading)
Vue.config.productionTip = false
Vue.component('wmj-button', WmjButton)
Vue.component('wmj-cell', WmjCell)
Vue.component('wmj-cell-group', WmjCellGroup)
Vue.component('wmj-icon', WmjIcon)
Vue.component('wmj-image', WmjImage)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
