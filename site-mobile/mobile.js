import Vue from 'vue'
import App from '../src/App.vue'
import router from '../router'
import Locale from '../src/locale'
import zhCN from '../src/locale/lang/zh-CN'
import { get } from '../src/utils/utils'
import { camelize } from '../src/utils/format/string'

import '../src/style/_variables.scss';

import 'vant/lib/tab/style';
import 'vant/lib/tabs/style';
import 'vant/lib/col/style';

Vue.config.productionTip = false

Locale.add({
  'zh-CN': zhCN,
})

let demoUid = 0;

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
  },
  beforeCreate() {
    if (!this.$options.name) {
      this.$options.name = `demo-${demoUid++}`
    }

    const { i18n, name } = this.$options

    if(i18n && name) {
      const locales = {}
      const camelizedName = camelize(name)

      Object.keys(i18n).forEach(key => {
        locales[key] = { [camelizedName]: i18n[key] }
      })

      Locale.add(locales)
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


import WmjButton from '../src/button'
// import WmjCell from '../src/cell'
// import WmjCellGroup from '../src/cell-group'
// import WmjIcon from '../src/icon'
// import WmjImage from '../src/image'

Vue.use(WmjButton)
// function install(Vue) {
//     const components = [
//         WmjButton,
//         // WmjCell,
//         // WmjCellGroup,
//         // WmjIcon,
//         // WmjImage
//     ]

//     components.forEach(item => {
//       if(item.install){
//         Vue.use(item)
//       } else {
//         Vue.component(item.name, item)
//       }
      
//     })
// }

// // if(typeof window !== 'undefined' && window.Vue) {
// //   install(window.Vue)
// // }

// export {
//     install,
//     WmjButton,
//     // WmjCell,
//     // WmjCellGroup,
//     // WmjIcon,
//     // WmjImage
// }

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')