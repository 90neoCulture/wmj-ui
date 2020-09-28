import myBem from './myBem'
import { createComponent } from './create/component'

export function createNamespace(name) {
  name = `wmj-${name}`
  return [createComponent(name), myBem(name)]
}

export function noop() {}

export function isDef(val){
  return val !== undefined && val !== null
}

export function isObject(val) {
  return val !== null && typeof val === 'object'
}

export function isFunction(val) {
  return typeof val === 'function'
}

export function get(object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}