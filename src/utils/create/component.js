import { isFunction } from '../utils.js'
import { SlotsMixin } from '../../mixins/slots'
import WmjButton from '../../button'
// import { camelize } from '../format/string'

// eslint-disable-next-line
function install(Vue) {
  // const { name } = vueThis
  Vue.component('wmj-button', WmjButton)
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

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context) => pure(h, context.props, unifySlots(context), context)
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

    sfc.name = name
    sfc.install = install

    return sfc
  }
}