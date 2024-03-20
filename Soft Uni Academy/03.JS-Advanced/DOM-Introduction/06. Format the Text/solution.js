function solve() {

  const textArr = document.getElementById('input').value.split(".");
  textArr.pop();
  let output = "";

  for (let i = 0; i < textArr.length; i++) {

    output += textArr[i] + "."
    if ((i + 1) % 3 == 0 || (i + 1) == textArr.length) {
      let paragraph = `<p>${output}</p>`;
      document.getElementById('output').innerHTML += paragraph;
      output = "";
    }
  }
}