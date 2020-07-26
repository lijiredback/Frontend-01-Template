function createElement(Cls, attribute, ...children) {
    // console.log(arguments)

    let o
    
    if (typeof Cls === 'string') {    // 解决小写问题
        o = new Wrapper(Cls)
    } else {
        o = new Cls({
            timer: {}
        })
    }
    
    // let o = new Cls
    // let o = new Cls({
    //     timer: {}
    // })

    

    for (let name in attribute) {
        // o[name] = attribute[name]
        o.setAttribute(name, attribute[name])
    }

    // console.log(children); // [] [] [] [child, child, child]   JSX 先子后父
    for (let child of children) {
        if (typeof child === 'string') {
            child = new Text(child)
        }
        o.appendChild(child)
        // o.children.push(child)
    }

    return o
}

class Text {
    constructor(text) {
        // console.log('config', config)
        this.children = []
        this.root = document.createTextNode(text)
    }

    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

class Wrapper {
    constructor(type) {
        // console.log('config', config)
        this.children = []
        this.root = document.createElement(type)
    }

    setAttribute(name, value) { // attribute
        this.root.setAttribute(name, value)
    }

    appendChild(child) {
        this.children.push(child)
    }

    mountTo(parent) {
        parent.appendChild(this.root)

        for (let child of this.children) {
            child.mountTo(this.root)
        }
    }
}

class MyComponent {
    constructor(config) {
        // console.log('config', config)
        this.children = []
        // this.root = document.createElement('div')
    }

    // set cls(v) { // property
    //     console.log('Parent::class', v)
    // }

    // set id(v) {
    //     console.log('Parent::id', v)
    // }

    setAttribute(name, value) { // attribute
        // console.log(name, value)
        this.root.setAttribute(name, value)
    }

    appendChild(child) {
        // child.mountTo(this.root)
        this.children.push(child)
    }

    render() {
        return <article>
            <header>I'm a header</header>
            { this.slot }
            <header>I'm a footer</header>
        </article>
    }

    mountTo(parent) {
        this.slot = <div></div>
        for (let child of this.children) {
            // child.mountTo(this.root)
            this.slot.appendChild(child)
            // child.mountTo(this.slot)
        }
        this.render().mountTo(parent)
    }

    // appendChild(child) { // children
    //     console.log('Parent::appendChild', child)
    // }
}

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

let component = <MyComponent>
    <div>text text text</div>
</MyComponent>

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

console.log(component)

// component.setAttribute('id', 'a')