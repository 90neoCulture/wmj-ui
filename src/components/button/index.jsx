import './demo/index.scss';
import {createNamespace} from '../../utils/utils'

const VantButton = {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: ''
    },
    block:{
      type: Boolean,
      default: false
    },
    plain:{
      type: Boolean,
      default: false
    },
    square:{
      type: Boolean,
      default: false
    },
    round:{
      type: Boolean,
      default: false
    },
    disabled:{
      type: Boolean,
      default: false
    },
    hairline:{
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  render: (h, v) => {
    const myBem = createNamespace('button')
    const {
      tag,
      text,
      size,
      type,
      color,
      block,
      plain,
      square,
      round,
      disabled,
      hairline,
      loading
    } = v.props
    const classes = myBem([
      size,
      type,
      color,
      {
        block,
        plain,
        square,
        round,
        disabled,
        hairline,
        loading
      }
    ])
    const contentClass = myBem('content')
    return (
      <tag
      size={size} 
      type={type}
      color={color}
      class={classes}
      >
        <div class={contentClass}><span class={myBem('text')}>{text}</span></div>
      </tag>
    )
  }
}

export default VantButton