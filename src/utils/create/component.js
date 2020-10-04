import { isFunction } from '../utils'
import SlotsMixin from '../../mixins/slots'
import { camelize } from '../format/string'

// eslint-disable-next-line
export function install(vueThis, Vue) {
  const { name } = vueThis
  Vue.component(name, vueThis)
  Vue.component(camelize(`-${name}`), vueThis)
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
    render: (h, context) => {
      pure(h, context.props, unifySlots(context), context)
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

    sfc.name = name
    sfc.install = install

    return sfc
  }
}