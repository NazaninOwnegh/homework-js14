//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

const heading = document.querySelector("h1");
const listItems = document.querySelectorAll("li");

const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

setInterval(() => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heading.innerHTML = `Asabeneh Yetayeh challenges in <span style="color:${randomColor};">2020</span>`;
}, 1000);

listItems.forEach((li) => {
  if (li.innerText.includes("Done")) {
    li.style.backgroundColor = "green";
  } else if (li.innerText.includes("Ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (li.innerText.includes("Coming")) {
    li.style.backgroundColor = "red";
  }
});
