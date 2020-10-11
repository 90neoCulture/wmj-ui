import './index.scss';
import { createNamespace } from "../utils/create"

const [createComponent, myBem] = createNamespace('icon')

function isImage(name){
  return name ? name.indexOf('/') !== -1 : false
}

function Icon(h, props, slots, ctx) {
  console.log( ctx)
  const {
    name,
    // dot,
    // badge,
    // // info, //废弃
    // color,
    // size,
    classPrefix
  } = props
  
  const onClick = () => {
    if(isImage(name)){
      location.href = name
    }
  }

  const imageIcon = isImage(name)

  return (
    <props.tag 
    class={[
      classPrefix,
      imageIcon ? '' : `${classPrefix}-${name}`
    ]}
    onClick={onClick}
    >
      { imageIcon && <img class={myBem('image')} src={name} alt=""/> }
      
    </props.tag>
  )
}

Icon.props = {
  name: {
    type: String,
    default: ''
  },
  dot: {
    type: Boolean,
    default: false
  },
  badge: [Number, String],
  // info: [Number, String],  // 废弃
  color: {
    type: String,
    default: ''
  },
  size: [Number, String],
  classPrefix: {
    type: String,
    default: 'van-icon'
  },
  tag: {
    type: String,
    default: 'i'
  }
}

export default createComponent(Icon)