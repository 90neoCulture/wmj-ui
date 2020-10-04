import './index.scss';
import {createNamespace} from '../utils/create'
import { emit, handleRoute } from '../utils/utils'
import { Icon, Loading } from 'vant'

const [createComponent, myBem] = createNamespace('button')

function Button(h, props, slots, ctx) {
  const {
    tag,
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
    loading,
    loadingType,
    loadingText,
    loadingSize
  } = props
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
  const style = {}
  if(color){
    style.color = plain ? color : 'white'

    if(!plain) {
      style.background = color
    }

    if (color.indexOf('gradient') !== -1) {
      style.border = 0
    } else {
      style.borderColor = color
    }
  }
  

  const contentClass = myBem('content')
  const myContent = () => {
    const content = []
    if(loading){
      content.push(
        ctx.children
          ? ctx.children
          : (
            <Loading 
              class={myBem('loading')}
              size={loadingSize}
              type={loadingType}
              color="currentColor"
            />
          )
      )
    }

    if(icon){
      content.push(<Icon name={icon} class={myBem('icon')} />)
    }
    // 在添加 functional: true 之后，需要更新我们的锚点标题组件的渲染函数，为其增加 context 参数，
    // 并将 this.$slots.default 更新为 context.children，然后将 this.level 更新为 context.props.level。
    let text
    if(loading){
      text = loadingText
    }else{
      text = ctx.children ? ctx.children : props.text
    }
    if(text){
      content.push(<span class={myBem('text')} >{text}</span>)
    } 
    return content
  }

  const onClick = (e) => {
    if(loading || disabled){
      return;
    }
    emit(ctx, 'click', e)
    handleRoute(ctx)
  }

  const onTouchstart = (e) => {
    if(loading || disabled){
      return;
    }
    emit(ctx, onTouchstart, e)
  }

  return (
    <tag
      style={style}
      size={size} 
      type={type}
      color={color}
      class={classes}
      onClick={onClick}
      onTouchstart={onTouchstart}
    >
      <div class={contentClass}>
        {myContent()}
      </div>
    </tag>
  )
}

Button.props = {
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
  },
  loadingText:{
    type: String,
    default: ''
  },
  loadingType:{
    type: String,
    default: 'circular'
  },
  loadingSize:{
    type: String,
    default: '20px'
  },
  to: [String, Array],
  url: {
    type: String,
    default: ''
  },
  replace: {
    type: Boolean,
    default: false
  }
}

export default createComponent(Button)