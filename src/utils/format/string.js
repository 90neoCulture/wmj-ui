const camelizeRE = /-(\w)/g

export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}