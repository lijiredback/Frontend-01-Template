// 在一个字符串中，找到字符"abcdef"

function match(str) {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;

  for (let c of str) {
    if (c === 'a')
      foundA = true;
    else if (foundA && c === 'b')
      foundB = true;
    else if (foundB && c === 'c')
      foundC = true;
    else if (foundC && c === 'd')
      foundD = true;
    else if (foundD && c === 'e')
      foundE = true;
    else if (foundE && c === 'f')
      return true;
    else {
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
      foundF = false;
    }
  }
  return false;
}

match("I abcdef xxx");