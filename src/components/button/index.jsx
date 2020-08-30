import './demo/index.scss';
import Utils from '../../utils/utils'

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
    }
  },
  render: (h, v) => {
    const text = v.props.text
    const size = v.props.size
    const type = v.props.type
    const color = v.props.color
    const classes = 'vant-button ' + Utils.handleClasses('button',[
      size,
      type,
      color
    ])
    return (
      <div
      size={size} 
      type={type}
      color={color}
      class={classes}
      >
        <div>{text}</div>
      </div>
    )
  }
}

export default VantButton