import Vue from 'vue'
import App from '../src/App.vue'
import VantButton from '../src/components/button'

import '../src/style/_variables.scss';
// import '../src/style/style.scss';

Vue.config.productionTip = false
Vue.component('vant-button', VantButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
