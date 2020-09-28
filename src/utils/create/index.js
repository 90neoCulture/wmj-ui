import { createComponent } from './component'
import myBem from '../myBem'

export function createNamespace(name) {
  name = `wmj-${name}`
  return [createComponent(name), myBem(name)]
}