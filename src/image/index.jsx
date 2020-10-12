import { createComponent } from "../utils/create/component";

function Image(h, props, slot, ctx) {
    console.log(props, slot, ctx)
}

Image.props = {
    
}

export default createComponent(Image)