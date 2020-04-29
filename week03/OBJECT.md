> 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？

> 摘自重学前端：有些对象，对象中的一些字段使得原型继承方法无法正常工作。我们可以认为，这些对象都是为了特定的能力或者性能，而设计出来的“特权对象”

以下参考：
+ [重学前端 - JavaScript 对象：你知道全部的对象分类吗?](https://time.geekbang.org/column/article/80011)
+ [ECMA-262-10.0 第18章 The Global Object](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-global-object)


## 1. 构造器对象（原生对象）

### 基本类型

+ Boolean
  - [[ BooleanData ]]
+ Number
  - [[ NumberData ]]
+ Symbol
  - [[ SymbolData ]]
+ String
  - [[ length ]]
+ Object.prototype
  - [[ constructor ]]
  - [[ hasOwnProperty ]]
  - [[ isPrototypeOf ]]
  - [[ propertyIsEnumerable ]]
  - [[ toLocaleString ]]
  - [[ toString ]]
  - [[ valueOf ]]
  - [[ setPropertyOf ]]



### 基本功能和数据结构

+ Array
  - [[ length ]]
+ Date
  - [[ DateValue ]]
+ RegExp
  - [[ RegExpMatcher ]]
+ Promise
  - [[ PromiseState ]]
  - [[ PromiseResult ]]
  - [[ PromiseFulfillReactions ]]
  - [[ PromiseRejectReactions ]]
  - [[ PromiseIsHandled ]]
+ Proxy
  - [[ RevocableProxy ]]
+ Map
  - [[ MapData ]]
+ WeakMap
  - [[ WeakMapData ]]
+ Set
  - [[ SetData ]]
+ WeakSet
  - [[ WeakSetData ]]
+ Function
  - [[ call ]]：函数对象的定义，具有 [[ call ]] 这个私有字段的对象
  - [[ construct ]]：构造器对象的定义，具有 [[ construct ]] 私有字段的对象
  - [[ Environment]]
  - [[ FormalParameters ]]
  - [[ FunctionKind ]]
  - [[ ECMAScriptCode ]]
  - [[ ConstructorKind ]]
  - [[ Realm ]]
  - [[ ScriptOrModule ]]
  - [[ ThisMode ]]
  - [[ Strict ]]
  - [[ HomeObject ]]
  - [[ SourceText ]]


### 错误类型

+ Error
  - [[ ErrorData ]]
+ EvalError
  - [[ ErrorData ]]
+ RangeError
  - [[ ErrorData ]]
+ ReferenceError
  - [[ ErrorData ]]
+ SyntaxError
  - [[ ErrorData ]]
+ TypeError
  - [[ ErrorData ]]
+ URIError
  - [[ ErrorData ]]

### 二进制操作

+ ArrayBuffer
  - [[ ArrayBufferData ]]
  - [[ ArrayBufferByteLength ]]
  - [[ ArrayBufferDetachKey ]]
+ SharedArrayBuffer
  - [[ ArrayBufferData ]]
  - [[ ArrayBufferByteLength ]]
+ DataView
  - [[ DataView ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]

### 带类型的数组

+ Float32Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ Float64Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ Int8Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ Int16Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ Int32Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ UInt8Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ UInt16Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ UInt32Array
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]
+ UInt8ClampedArray
  - [[ TypedArrayName ]]
  - [[ ViewedArrayBuffer ]]
  - [[ ByteLength ]]
  - [[ ByteOffset ]]
  - [[ ArrayLength ]]

## 2. 其他属性对象

+ Atomics
+ JSON
+ Math
+ Reflect
  - Proxy.prototype
    - [[ revocable ]]
    - [[ ProxyTarget ]]
    - [[ ProxyHandler ]]
    - [[ length ]]
  - Module Namespace
    - [[ Module ]]
    - [[ Exports ]]
    - [[ Prototype ]]


+ Arguments
  - [[ length ]]

+ Module Namespace
  - [[ Module ]]

