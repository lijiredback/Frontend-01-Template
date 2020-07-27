import { createElement, Text, Wrapper } from './createElement'
import { Carousel } from './carousel.view'

/////////////////////////////
/*
class Carousel {
    constructor(config) {
        this.children = []
        this.attributes = new Map()
        this.properties = new Map()
    }

    // set cls(v) { // property
    //     console.log('Parent::class', v)
    // }

    // set id(v) {
    //     console.log('Parent::id', v)
    // }

    setAttribute(name, value) { // attribute
        // console.log(name, value)
        // this.attributes.set(name, value)
        this[name] = value
    }

    appendChild(child) {
        // child.mountTo(this.root)
        this.children.push(child)
    }

    render() {
        let children = this.data.map( url => {
            let element = <img src={url} />
            element.addEventListener('dragstart', event => event.preventDefault())
            return element
        })

        let position = 0

        let nextPic = () => {
            let nextPosition = (position + 1) % this.data.length

            let current = children[position]
            let next = children[nextPosition]

            current.style.transition = 'ease 0s'
            next.style.transition = 'ease 0s'

            current.style.transform = `translateX(${ -100 * position }%)`
            next.style.transform = `translateX(${ 100 - 100 * nextPosition }%)`

            // requestAnimationFrame 需要套两层
            setTimeout(() => {
                // current.style.transition = 'ease 0.5s'
                // next.style.transition = 'ease 0.5s'

                current.style.transition = '' // = '' means use css rule
                next.style.transition = ''

                current.style.transform = `translateX(${ -100 - 100 * position }%)`
                next.style.transform = `translateX(${ -100 * nextPosition }%)`

                position = nextPosition
            }, 16)

            // 制造循环的小技巧
            // position = (position + 1) % this.data.length

            
            setTimeout(nextPic, 3000)
        }

        setTimeout(nextPic, 3000)


        return <div class="carousel">
            { children }
        </div>
    }

    mountTo(parent) {
        this.render().mountTo(parent)
    }

    // appendChild(child) { // children
    //     console.log('Parent::appendChild', child)
    // }
}
*/


// class Child {
//     constructor(config) {
//         this.children = []
//         this.root = document.createElement('div')
//     }

//     setAttribute(name, value) { // attribute
//         this.root.setAttribute(name, value)
//     }

//     appendChild(child) {
//         child.mountTo(this.root)
//     }

//     mountTo(parent) {
//         parent.appendChild(this.root)
//     }

// }

// let component = <Parent id="a" cls="b">
//     <Child></Child>
//     <Child></Child>
//     <Child></Child>
// </ Parent>

// let component = <Div id="a" cls="b" style="width: 100px;height: 100px;background-color:lightblue">
//     <Div></Div>
//     <Div></Div>
//     <Div></Div>
// </ Div>

// let component = <div id="a" cls="b" style="width: 100px;height: 100px;background-color:lightblue">
//     <div></div>
//     <p></p>
//     <div></div>
//     <div></div>
// </ div>

let component = <Carousel data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"
]} />

// component.id = 'c'
component.mountTo(document.body)

/*

var component = createElement(
    Parent,
    {
        id: "a",
        class: "b"
    },
    createElement(Child, null),
    createElement(Child, null),
    createElement(Child, null)
)


*/

// console.log(component)

// component.setAttribute('id', 'a')