import myBem from './myBem'

export function createNamespace(name) {
  name = `wmj-${name}`
  return myBem(name)
}