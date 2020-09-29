import Button from '../src/button'
import Cell from '../src/cell'
import CellGroup from '../src/cell-group'
import Icon from '../src/icon'
import Image from '../src/image'

function install(Vue) {
    const components = [
        Button,
        Cell,
        CellGroup,
        Icon,
        Image
    ]

    components.forEach(Component => {
        Vue.use(Component)
    })
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install,
    Button,
    Cell,
    CellGroup,
    Icon,
    Image
}