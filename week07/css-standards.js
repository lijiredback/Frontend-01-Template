let lis = document.getElementById("container")

let result = [];

for (let li of lis) {
  if (li.getAttribute('data-tag').match(/css/))
    result.push({
      name: li.children[1].innerText,
      url: li.children[0].href
    });
}

console.log(result);