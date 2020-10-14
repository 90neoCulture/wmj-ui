import { createNamespace } from "../utils/create"

const [createComponent, myBem] = createNamespace('info')

function Info() {
    console.log(myBem)
}

export default createComponent(Info)