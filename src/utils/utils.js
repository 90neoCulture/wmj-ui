import myBem from './myBem'

export function createNamespace(name) {
  name = `wmj-${name}`
  return myBem(name)
}

export function noop() {}

export function isDef(val){
  return val !== undefined && val !== null
}

export function isObject(val) {
  return val !== null && typeof val === 'object'
}

export function get(object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}