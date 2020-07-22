var parser = require('./parser')
module.exports = function(source,map){
    let tree = parser.parseHTML(source)
    let template = null,script = null;
    for (const node of tree.children) {
        if(node.tagName==="template"){
            template = node.children.filter(child=>child.type!=='text')[0]
        }
        if(node.tagName==="script"){
            script = node
        }
    }
    let visit = (node)=>{
        if(node.type === "text"){
            return JSON.stringify(node.content)
        }
        let attrs = {}
        if(node.attributes){
            for (const att of node.attributes) {
                if(att.name === 'attr'){
                    attrs[att.value.attrName] = att.value.attrValue
                }
            }
        }
        
        let children = (node.children || []).map(childNode=>visit(childNode))
        return  `create("${node.tagName}",${JSON.stringify(attrs)},${children})`
    }
   
    
   return `
import {create,Text,Wrapper} from './createElement'; 
export class Carousel{
    constructor(){
        this.children = []
    }
    setAttribute(name,value){
        this[name] = value
    }
    appendChild(child){
        this.children.push(child)
    }
    render(){
        return ${visit(template)}
    }
    mountTo(parent){
        this.render().mountTo(parent)
    }
}`
}