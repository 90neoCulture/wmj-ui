import './index.scss';
import {createNamespace} from '../utils/create'
import { BORDER_TOP_BOTTOM } from '../utils/constant'

const [createComponent, myBem] = createNamespace('cell-group')

function CellGroup (h, props, slots, ctx){

  const title = (typeof ctx.children === String && ctx.children) ? ctx.children : props.title
  
  const Group =  (
    <div class={[myBem(), { [BORDER_TOP_BOTTOM]: props.border }]}>
      {ctx.children}
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

CellGroup.props = {
  title: {
    type: String,
    default: ''
  },
  border: {
    type: Boolean,
    default: true
  }
}

export default createComponent(CellGroup)