import './index.scss'
import {createNamespace} from '../utils/create'

const [createComponent, myBem] = createNamespace('cell')
function Cell (h, props, slots, ctx){
  const {
    tag,
    size,
    icon,
    iconPrefix
  } = props
  const classes = myBem([
    size,
    icon,
    iconPrefix
  ])

  const myContent = () => {
    const content = []

    const title = ctx.children ? ctx.children : props.title
    const label = props.label
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

    const value = props.value
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

Cell.props = {
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
}

export default createComponent(Cell)