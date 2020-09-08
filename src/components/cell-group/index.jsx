import './index.scss';
import { createNamespace } from '../../utils/utils'
import { BORDER_TOP_BOTTOM } from '../../utils/constant'

const cellGroup = {
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  render: (h, context) => {
    const myBem = createNamespace('cell-group')

    const title = context.children ? context.children : context.props.title

    const Group =  (
      <div class={BORDER_TOP_BOTTOM}>
        {context.children}
      </div>
    )

    if(title) {
      return (
        <div>
          <div class={myBem('title')}>{title}</div>
          { Group }
        </div>
      )
    }
    
    return Group
  }
}

export default cellGroup