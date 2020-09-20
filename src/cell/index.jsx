import './index.scss'
import { createNamespace } from '../utils/utils'

const WmjCell = {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
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
    const myBem = createNamespace('cell')
    const {
      tag,
      size,
      icon,
      iconPrefix
    } = context.props
    const classes = myBem([
      size,
      icon,
      iconPrefix
    ])
    console.log(
      // size,
      // icon,
      // iconPrefix,
      classes)

    const myContent = () => {
      const content = []

      const title = context.children ? context.children : context.props.title
      const label = context.props.label
      if(title) {
        label 
          ? content.push(
              <div class={myBem('title')}>
                <span>{title}</span>
                <div class={myBem('label')}>{label}</div>
              </div>
            )
          : content.push(
              <div class={myBem('title')}>
                <span>{title}</span>
              </div>
            )
      }

      const value = context.props.value
      if(value) {
        content.push(<span class={myBem('value')}>{value}</span>)
      }

      return content
    }
    

    return (
      <tag
        class={classes}
      >
        {myContent()}
      </tag>
    )
  }
}

export default WmjCell