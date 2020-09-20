/* eslint-disable */
// const buttonProps = {
//   type,
//   size,
//   text,
//   color,
//   icon,
//   iconPrefix,
//   tag,
//   nativeType,
//   block,
//   plain,
//   square,
//   round,
//   disabled,
//   hairline,
//   loading,
//   loadingText,
//   loadingType,
//   loadingSize,
//   url,
//   to,
//   replace
// }

const [cComponent, bem] = createNamespace('button')

function Button(
  h,
  props,
  slots,
  ctx
) {
  

}

function createNamespace(name) {
  name = `van-${name}`
  return createComponent(name)
}

function createComponent(name) {
  return sfc => {
    if(typeof sfc === 'function'){
      // sfc = transformFunctionComponent(sfc)
    }

    if(!sfc.isfunctional) {
      sfc.mixins = sfc.mixins || []
      sfc.mixins.push()
    }
  }
  
  sfc.name = name
  sfc.install = install
}

export default cComponent(Button)