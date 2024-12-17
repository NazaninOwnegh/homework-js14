//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

//todo2
const para1 = document.querySelector("p");

//todo3
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");

//todo4
const paraAll = document.querySelectorAll("p");

//todo5
paraAll.forEach((x) => {
  console.log(x.textContent);
});

//todo6
para4.textContent = "I am the fourth paragraph.";

//todo7
paraAll.forEach((para, index) => {
  para.setAttribute("id", `para${index + 1}`);
  para.setAttribute("class", `para-class-${index + 1}`);
});

//todo8
paraAll.forEach((para) => {
  para.style.color = "lightblue";
  para.style.backgroundColor = "gray";
  para.style.border = "solid black 1px";
  para.style.fontSize = "18px";
  para.style.fontFamily = "'Courier New', Courier, monospace";
});

// todo9
paraAll.forEach((para, index) => {
  if (index % 2 === 0) {
    para.style.color = "green";
  } else {
    para.style.color = "red";
  }
});
