import './index.scss';
import { createNamespace } from '../../utils/utils'

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

    const title = context.props.title
    // const classes = myBem([
    //   {
    //     title: title
    //   }
    // ])
    console.log(h)
    console.log(context)
    return (
      <div
      class={myBem('title')}
      >{title}
      </div>
    )
  }
}

export default cellGroup