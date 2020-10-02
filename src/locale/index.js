import Vue from 'vue'
import { deepAssign } from '../utils/deep-assign'
import defaultMessages from './lang/zh-CN'

const proto = Vue.prototype
const { defineReactive } = Vue.util

defineReactive(proto, '$wmjLang', 'zh-CN')
defineReactive(proto, '$wmjMessages', {
  'zh-CN': defaultMessages
})

export default {
  messages() {
    return proto.$wmjMessages[proto.$wmjLang]
  },

  // use(lang, messages) {
  //   proto.$wmjLang = lang
  //   this.add({[lang]:messages })
  // },

  add(messages = {}) {
    deepAssign(proto.$wmjMessages, messages)
  }
}