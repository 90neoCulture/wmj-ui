import './index.scss';
import { createNamespace } from "../utils/create"

const [createComponent, myBem] = createNamespace('icon')

function isImage(){
  return name ? name.indexOf('/') === -1 : false
}

function Icon(h, props, slots, ctx) {
  console.log(slots, ctx,myBem)
  const {
    name,
    // dot,
    // badge,
    // // info, //废弃
    // color,
    // size,
    // classPrefix
  } = props
  
  
  
  // const classes = {
  //   `wmj-icon-${name}`,
  // }
  
  const onClick = () => {
    if(!isImage()){
      location.href = name
    }
  }

  return (
    <props.tag 
    class={
      `van-icon van-icon-${name}`
    }
    onClick={onClick}
    ></props.tag>
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