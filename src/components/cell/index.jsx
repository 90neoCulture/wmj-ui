const WmjCell = {
  functional: true,
  props: {
    title: [Number, String],
    value: [Number, String],
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconPrefix: {
      type: String,
      default: 'wmj-icon'
    },
    to: [String, Object],
    url: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    },
    replace: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    isLink	: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    arrowDirection: {
      type: String,
      default: 'right'
    }
  },
  render: (h, context) => {
    console.log(h, context)
  }
}

export default WmjCell