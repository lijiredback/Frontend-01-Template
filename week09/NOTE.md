# 第九周（6.1 - 6.7）

## Animation

+ @keyframes

```
@keyframes mykf {
  from { background: red; }
  to { background: yellow; }
}

div {
  animation: mykf 5s infinite;
}
```

+ animation-name 时间曲线
+ animation-duration 动画的时长
+ animation-timing-function 动画的时间曲线
+ animation-delay 动画开始前的延迟
+ animation-iteration-count 动画播放的次数
+ animation-direction 动画的方向

## Transition

+ transition-property 要变换的属性
+ transition-duration 变换的市场
+ transition-timing-function 时间曲线
+ transition-delay 延迟

## DTD 与 XML namespace

+ http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd
+ http://www.w3.org/1999/xhtml

## 合法元素

+ Element: < tagname >...< /tagname >
+ Text: text
+ Comment: < !--conmment-- >
+ DocumentType
+ ProcessingInstruction

## DOM

+ 导航类
  - parentNode
  - childNodes
  - fitstChild
  - lastChild
  - nextSibling
  - previousSibling
+ 修改操作
  - appendChild
  - insertBefore
  - removeChild
  - replaceChild