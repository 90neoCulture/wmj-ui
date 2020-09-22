import { isDef, isObject } from './utils'

const { hasOwnProperty } = Object.prototype

function assignKey(to, from, key){
  const val = from[key]

  if(!isDef(val)) {
    return ;
  }

  if(!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val
  } else {
    to[key] = deepAssign(Object(to[key]), from[key])
  }
}

export function deepAssign(to, from){
  console.log(from)
  Object.keys(from).forEach(key => {
    assignKey(to, from, key)
  })

  return to
}