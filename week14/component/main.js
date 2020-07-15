function createElement(Cls, attribute, ...children) {
    // console.log(arguments)
    let o = new Cls

    for (let name in attribute) {
        o[name] = attribute[name]
    }

    // console.log(children); // [] [] [] [child, child, child]   JSX 先子后父

    return o
}

class Parent {
    set class(v) {
        console.log("Parent::class", v)
    }
}

class Child {}

let component = <Parent id="a" class="b">
    <Child></Child>
    <Child></Child>
    <Child></Child>
</ Parent>

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