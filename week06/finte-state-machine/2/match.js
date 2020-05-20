// 在一个字符串中，找到字符 "ab"

function match(str) {
  // 给一个找到 a 的状态
  let foundA = false;

  for (let c of str) {
    console.log(c);
    if (c === 'a')
      foundA = true;
    else if (foundA && c === 'b')
      return true;
    else
      foundA = false;
  }

  return false;
}

match("I ammb xxx");