// convertStringToNumber

function convertStringToNumber(string, x) {
  if (arguments.length < 2)
      x = 10;


  // 将 string 转为字符数组
  var chars = string.split('');
  // 初始一个 number 变量
  var number = 0;

  var i = 0;
  // 循环遍历数组, 整数
  while(i < chars.length && chars[i] !== '.') {
    // 位
    number = number * x;
    // codePointAt() 方法返回一个 Unicode 编码点值的非负整数。
    // 把单个的字符转为数字
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i ++;
  }

  if (chars[i] === '.') {
    i++;
  }

  // 小数
  var fraction = 1;
  while(i < chars.length) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i ++;
  }

  return number;
}



// convertNumberToString

function converNumberToString(number, x = 10) {
    if (arguments.length === 0) {
      return "";
    }

    if (number === 0) {
      return "0";
    }

    if (typeof number === 'number') {
      // 向下取整,整数部分
      var integer = Math.floor(number);
      // 小数部分
      var fraction = number - integer;
      var string = '';

      while(integer > 0) {
        string = String(integer % x) + string;
        integer = Math.floor(integer / x);
        console.log(integer);
      }


      if (fraction > 0) {
        string += '.';
      }


       while (fraction > 0) {
        integer = Math.floor(fraction * x);
        string += integer;
        fraction = fraction * x - integer;
      }

      if (!integer) {
        return '0' + string;
      } else {
        return string;
      }
    } else {
      return number;
    }
}