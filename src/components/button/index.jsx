import './demo/index.scss';
import {createNamespace} from '../../utils/utils'
import { Icon } from 'vant'

const WmjButton = {
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
    icon: {
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
      icon,
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
    ]) + ' ' + myBem('icon')
    const contentClass = myBem('content')
    const myContent = () => {
      const content = []
      if(icon){
        content.push(<Icon name={icon} class={myBem('icon')} />)
      }
      if(text){
        content.push(<span class={myBem('text')} >{text}</span>)
      } 
      return content
    }
    return (
      <tag
      size={size} 
      type={type}
      color={color}
      class={classes}
      >
        <div class={contentClass}>
          {myContent()}
        </div>
      </tag>
    )
  }
}

export default WmjButton