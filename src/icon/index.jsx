import { createNamespace } from "../utils/create"

const [createComponent, myBem] = createNamespace('icon')

function Icon(h, context, slots, ctx) {
  
  console.log(createComponent)
  console.log(slots)
  console.log(ctx)
  // const haha = 'haha'
  console.log(h, context)
  console.log(myBem)
  const {
    name,
    // dot,
    // badge,
    // info, //废弃
    // color,
    // size,
    // classPrefix,
    tag
  } = context.props
  
  // function isImage(){
  //   return name ? name.indexOf('/') === -1 : false
  // }
  
    const classes = myBem([
      name,
    ])
    return (
    <tag 
    classes={classes}
    ></tag>
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