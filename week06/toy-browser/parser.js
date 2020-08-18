let currentToken = null

function emit(token) {
    // if (token.type !== 'text') {
    //     console.log(token)
    // }
    console.log(token)
}

const EOF = Symbol('EOF') // EOF: End Of File 标识文件结尾

function data(c) {
    if (c === '<') {
        return tagOpen // 可能是: 开始标签、结束标签、自封闭标签、注释标签
    } else if (c === EOF) {
        emit({
            type: 'EOF'
        })
        return
    } else {
        emit({
            type: 'text',
            content: c
        })
        return data
    }
}

function tagOpen(c) {
    if (c === '/') { // </
        return endTagOpen
    } else if (c.match(/^[a-zA-Z]$/)) { // <p
        return tagName(c)
    } else {
        return
    }
}

function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'endTag',
            tagName: ''
        }
        return tagName
    } else if (c === '>') {

    } else if (c === EOF) {

    } else {

    }
}

// 处理标签名
function tagName(c) {
    if (c.match(/^[\t\n\f ]$/)) { // 空格
        return beforeAttributeName
    } else if (c === '/') { // 自封闭标签 <input /
        return selfClosingStartTag
    } else if (c === '>') { // 结束 <p>
        return data
    } else {
        return tagName
    }
}

// 处理属性
function beforeAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    } else if (c === '>') {
        return data
    } else if (c === '=') {
        return beforeAttributeName
    } else {
        return beforeAttributeName
    }
}

// 自闭和
function selfClosingStartTag(c) {
    if (c === '>') {
        currentToken.isSelfClosing = true
        return data
    } else if (c === EOF) {

    } else {

    }
}

module.exports.parseHTML = function parseHTML(html) {
    // console.log(html)
    let state = data

    for (let c of html) {
        state = state(c)
    }

    state = state(EOF)
}