# 每周总结可以写在这里

## Expressions

### Grammar

+ Tree vs Priority
  - +-
  - */
  - ()


+ Member
  - a.b
  - a[b]
  - foo`String`
  - super.b
  - super['b']
  - new.target
  - new Foo()

+ New
  - new Foo

+ Call
  - foo()
  - super()
  - foo()['b']
  - foo().b

+ Left Handside & Right Handside

Example
a.b = c;
a + b = c;

+ Unary
  - delete a.b
  - void foo()
  - typeof a
  - +a
  - -a
  + ~a
  + !a
  + await a


## Statement

### 简单语句

+ ExpressionStatement: a = 1 + 2;
+ EmptyStatement: ;
+ DebuggerStatement: debugger;
+ ThrowStatement: throw a;
+ ContinueStatement: continue label1;
+ BreakStatement: break label1;
+ ReturnStatement: return 1 + 2;

### 复合语句

+ BlockStatement
```
{
  const a = 1;
}
```

作用域指：变量能作用的，有效的文本范围

作用域：程序员的电脑中，源代码的文本范围
上下文：用户电脑中内存中存变量的地方，用户电脑中的 JavaScript 的内存


### 声明

+ FunctionDeclaration

```
function foo() {}

var o = function foo() {};
```

+ Generator

generator 和异步没有边毛钱关系

```
function* foo() {
  yield 1;
  yield 2;

  var i = 3;
  while(true) {
    yield i++;
  }
}

var o = function* foo() {};
```
+ AsyncFunctionDeclaration
+ AsyncGeneratorDeclaration
+ VariableStatement
+ ClassDeclaration
+ LexicalDeclaration


## Object（面向对象与 JavaScript 中的对象）

### 1.注意一个概念
+ 如果我们讲对象这个概念，它就不是一个数据存储的工具。
+ 如果我们讲结构体这个概念，它就是一个数据存储的工具。

### 2.三只一模一样的鱼，其实就是三个完全不同的对象。
+ 其中一只鱼发生了状态改变，失去了尾巴
+ 其他两只鱼并不受到影响
+ 因此，当我们在计算机中描述这三只鱼时，必须把相同的数据存储三份
+ 设计模式中的**享元模式(Flyweight)**就可以解决这个问题
  - 享元模式是设计模式中少数几个以提高系统性能为目的的模式之一
  - 核心思想：如果在一个系统中，存在多个相同的对象，那么只需要共享一份对象的拷贝，而不必为每一次使用都创建新的对象

### 3. 对象的三要素
+ 1：任何一个对象都是唯一的，这与它本身的状态没有关系(可标记)（Identifier）：唯一性
  - 即使状态完全一致的两个对象，也不相等
  - 所以，在任何面向对象的语言中，两个对象都不会相等 
+ 2：对象是有状态的（State）：有状态
  - 用状态来描述对象
  - 一个不变的东西，是没有必要把它抽象为对象的
+ 3：状态的改变即是行为（Behavior）：有行为

在 C++ 中
+ 唯一性：对象指针
+ 状态：成员变量
+ 行为：成员函数（成员方法）

关于封装、多态、继承（溯源）
+ 封装：实际上是编程上一种基本要求，描述代码架构的合理性。和封装同一层面的概念：
  - 封装（封装的好，不容见到里面的细节，不容易犯错。如：罐头的盖子）
  - 解耦（不同模块的关联性比较弱）
  - 内聚
  - 复用（设计的粒度合适、抽象合理，总可以用上）
+ 继承：面向对象的一个子系统
+ 多态：描述一种动态性的程度。写同样一套代码，产生的行为不太一样
  - 类多态
  - 函数多态

Grandy Booch - UML 之父：[《面向对象分析与设计》](https://book.douban.com/subject/3892590/)


### 4. 面向对象的第一个范式：基于类的面向对象（Class Base Object-Oriented） Object - Class

+ 代表
  - OC
  - C++
  - Java

+ 类是一种常见的描述对象的方式

+ 而“归类”和“分类”则是两种主要的流派
  - 对于“归类”方法而言，多继承是非常自然的事情（菱形继承，一个类的两个父类继承了同一个父类），因为一个对象可能既属于这个类，也属于另外一个类。代表：C++。
  - 对于“分类”方法而言，则是单继承结构，并且会有一个基类 Object。代表：Java。而有时候，又希望将两个类抽象到一起，就有了接口（Interface）机制；另一方面，解决了抽象问题，但又没有解决复用的问题，两个类有一些共性，但是它们又没有共同的基类，所以有了 mixin 的机制

### 5. 面向对象的第二个范式：基于原型的面向对象 Object - Prototype

+ 解释华南虎：它和东北虎很像，略小（基于东北虎描述）

+ Object Prototype -> Nihilo(虚无，Null)

+ 原型是一种更接近人类原始认知的描述对象的方法
  - 不试图做严谨的分类，而是采用“相似”这样的方式去描述对象
  - 任何对象仅仅需要描述它自己与原型的区别即可

### 6. 练习：狗咬人，“咬”这个行为该如何使用对象描述？

+ 状态的改变即是行为
+ 谁的状态变了？（人的状态变了）

```
// 错误的
// 狗的方法应该让狗状态改变的方法
// 狗急了，急就是狗的行为
class Dog {
  bite(human) {
    // ...
  }
}
```

```
// 正确的
class Human {
  hurt(damage) {
    // ...
  }
}
```

注意：
+ 我们不应该受到语言描述的干扰
+ 在设计对象的状态和行为时，我们总是遵循“行为改变状态”的原则（人受伤，狗着急）


### 7.JavaScript 中的对象模型

+ 在 JavaScript 中，原生对象描述方式非常简单，我们只需要关心两个部分即可
  - 原型：[[ Prototype ]] (原型绝对不是属性)
  - 属性：Property
    - 可以有多个，所有属性都属于运行时
    - JavaScript 中的属性是 k-v 对
      - k 有两种：Symbol 和 String
      - v 有两种：Data（数据型） 和 Accessor（访问器型）

+ JavaScript 运行时中，实际上是没有**方法**这个概念的

+ JavaScript 中，用属性来统一描述对象的状态和行为
+ 一般来说，数据属性用于描述状态，访问器属性则用于描述行为
+ 数据属性中如果存储函数，也可以用于描述行为

+ Data Property
  - [[ value ]]
  - writable
  - enumerable
  - configurable

+ Accessor Property（能不用就不用，要用就用在基础库中）
  - get
  - set
  - enumerable
  - configurable

+ 当我们访问属性时(o.a)，如果当前对象没有，则会沿着原型找原型对象是否有次名称的属性，而原型对象还可能有原型，因此，会有“原型链”这一说法
+ 这一算法保证了每个对象只需要描述自己和原型的区别即可

### 8.JavaScript Object API / Grammar(4组)
+ {} / [''] / Object.defineProperty (最基础的创建对象的能力)
+ Object.create / Object.setPrototypeOf / Object.getPrototypeOf（ES5 加入的原型 API，加上一组，基于原型的面向对象编程）
+ new / class / extends（ES6 加入的最新的 API，基于类的面向对象编程）
+ new / function / prototype（早期，运行时是原型，语法像 Java，现在不推荐使用）

+ 第四不使用
+ 二、三不混用

### 9.JavaScript 中特殊的对象：Function Object

+ 前面讲述了 JavaScript 中的一般对象，但是 JavaScript 中还有一些特殊的对象。比如函数对象
+ 除了一般对象的属性和原型，函数对象还有**一个行为 [[ call ]]**
+ 我们用 JavaScript 中的 function 关键字、箭头运算符或者 Function 构造器创建的对象，会有 [[ call ]] 这个行为
+ 我们用类似 f() 这样的语法把对象当作函数调用时，会访问到 [[ call ]] 这个行为。如果对应的对象没有 [[ call ]] 这个行为，则会报错

其他特殊的对象
+ Array - [[ length ]]
+ Object.prototype [[ setPropertyOf ]]