import { isFunction, formatName } from '../utils.js'
import { SlotsMixin } from '../../mixins/slots'
import { components, componentsStr } from '../../../site-mobile/installs'
// import Button from '../../button'
// import { camelize } from '../format/string'

// vant源码此处传了两个参数，第一个为this，思考：this是在何处传进来的(故改为用自己的方法传入)
// eslint-disable-next-line
function install(Vue) {
  // const { name } = vueThis
  components.forEach((item, index) => {
    Vue.component(formatName(componentsStr[index]), item)
  })
  // Vue.component(camelize(`-${name}`), Vue)
}

export function unifySlots(context) {
  // 兼容低版本vue写法
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {}
  const slots = context.slots()

  Object.keys(slots).forEach(key => {
    if(!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key]
    }
  })
}

// 函数式组件的处理
function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context) => {
      return pure(h, context.props, unifySlots(context), context)
    }
  }
}

export function createComponent(name) {
  return sfc => {
    if(isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc)
    }

    if(!sfc.functional) {
      sfc.mixins = sfc.mixins || []
      sfc.mixins.push(SlotsMixin)
    }

    // name如何塞到install的第一个参数中
    sfc.name = name
    sfc.install = install

    return sfc
  }
}