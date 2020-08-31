import './demo/index.scss';
import {createNamespace} from '../../utils/utils'

const VantButton = {
  functional: true,
  props: {
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
    const text = v.props.text
    const size = v.props.size
    const type = v.props.type
    const color = v.props.color
    const block = v.props.block
    const plain = v.props.plain
    const square = v.props.square
    const round = v.props.round
    const disabled = v.props.disabled
    const hairline = v.props.hairline
    const loading = v.props.loading
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
      <div
      size={size} 
      type={type}
      color={color}
      class={classes}
      >
        <div class={contentClass}><span class={myBem('text')}>{text}</span></div>
      </div>
    )
  }
}

export default VantButton