function gen(name, mods) {
  if(!mods){
    return ''
  }

  if(typeof mods === 'string'){
    return ` ${name}--${mods}`
  }

  if(Array.isArray(mods)){
    return mods.reduce((ret, item) => ret + gen(name, item), '')
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    ''
  )
}

function myBem(name) {
  return (el, mods) => {
    if(el && typeof el !== 'string'){
      mods = el
      el = ''
    }

    el = el ? `${name}__${el}` : name
    return `${el}${gen(el, mods)}`
  }
}

export default myBem