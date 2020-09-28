const WmjIcon = {
  functinal: true,
  props: {
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
  },
  render: (h, context) => {
    const haha = 'haha'
    console.log(h, context)
    return (
      <div>{haha}</div>
    )
  }
  
}

export default WmjIcon