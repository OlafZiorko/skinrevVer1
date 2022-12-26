let osoczeCard = document.querySelector(".osocze");
let peelingCard = document.querySelector(".peeling");
console.log(osoczeCard);

window.addEventListener("scroll", () => {
  let pageHeight = window.pageYOffset;
  console.log(pageHeight);
  if (pageHeight > 3050) {
    osoczeCard.classList.add("animation-left");
    peelingCard.classList.add("animation-right");
  } else {
  }
});
