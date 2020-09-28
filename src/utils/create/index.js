import { createComponent } from './component'
import { myBem } from '../myBem'

export function createNamespace(name) {
  name = `wmj-${name}`
  console.log(typeof createComponent(name))
  return [createComponent(name), myBem(name)]
}