//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

const images = document.querySelectorAll("img");

for (const image of images) {
  if (image.getAttribute("id") === "Hermione-Granger") {
    image.src =
      "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg";
  } else if (image.getAttribute("id") === "Ron-Weasley") {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR48oCAtcGidlWNRYMm0esF2dJaaMKBnCOKQ&s";
  } else if (image.getAttribute("id") === "Severus-Snape") {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuGgclxgyD05mtc28kqEwA2MjVlOGoNqyGw&s";
  } else if (image.getAttribute("id") === "Draco-Malfoy") {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPy1dydltURowc74B3l2DfUEFVNPQj5aOPg&s";
  } else if (image.getAttribute("id") === "Cedric-Diggory") {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpokwuXDozBN1ap7HFw-T_hrQPkEDvxzr6pA&s";
  } else if (image.getAttribute("id") === "Lord-Voldemort") {
    image.src =
      "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg";
  } else if (image.getAttribute("id") === "Bellatrix-Lestrange") {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4k6aka05ccXEKWCnqRzeheFJ29DIWMfcTQ&s";
  }
}
