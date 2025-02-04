/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const text = prompt("Enter a text");

const coloredText = text
  .split("")
  .map((letter) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `<span style="color:${randomColor};">${letter}</span>`;
  })
  .join("");

document.body.innerHTML = coloredText;
