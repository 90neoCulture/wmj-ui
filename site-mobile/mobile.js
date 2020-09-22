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
import { get } from '../src/utils/utils'
import { camelize } from '../src/utils/format/string'

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
Locale.add({
  'zh-CN': zhCN,
})

Vue.mixin({
  computed: {
    t() {
      const { name } = this.$options
      const { lang = 'zh-CN' } = (this.$route && this.$route.meta) || {}
      const prefix = name ? camelize(name) + '.' : ''
      const messages = this.$wmjMessages[lang]

      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path)
        return typeof message === 'function' ? message(...args) : message
      }
    }
  }
})

// add some basic locale messages
Locale.add({
  'zh-CN': {
    add: '增加',
    decrease: '减少',
    red: '红色',
    orange: '橙色',
    yellow: '黄色',
    purple: '紫色',
    tab: '标签',
    tag: '标签',
    desc: '描述信息',
    back: '返回',
    title: '标题',
    status: '状态',
    button: '按钮',
    option: '选项',
    search: '搜索',
    content: '内容',
    custom: '自定义',
    username: '用户名',
    password: '密码',
    disabled: '禁用状态',
    uneditable: '不可编辑',
    basicUsage: '基础用法',
    advancedUsage: '高级用法',
    loadingStatus: '加载状态',
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码',
  },
  'en-US': {
    add: 'Add',
    decrease: 'Decrease',
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    purple: 'Purple',
    tab: 'Tab',
    tag: 'Tag',
    desc: 'Description',
    back: 'Back',
    title: 'Title',
    status: 'Status',
    button: 'Button',
    option: 'Option',
    search: 'Search',
    content: 'Content',
    custom: 'Custom',
    username: 'Username',
    password: 'Password',
    loadingStatus: 'Loading',
    disabled: 'Disabled',
    uneditable: 'Uneditable',
    basicUsage: 'Basic Usage',
    advancedUsage: 'Advanced Usage',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
