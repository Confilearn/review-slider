const slide = document.getElementById("slide");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");

// x represents the initial position of the first card in the slide which is 0px.
let x = 0;

upArrow.addEventListener("click", function () {
  // Since position top of the last card is 900px, hence this statement stops the card from moving above 900px.
  if (x > "-900") {
    // Because the slide is 300px, we subtract x with 300
    x = x - 300;
    // Whenever the upArrow is clicked, the card moves -300px from the top.
    slide.style.top = x + "px";
  }
});

downArrow.addEventListener("click", function () {
  // Since position top of the first card in the slide is 0px, hence this statement stops the card from moving below 0px
  if (x < 0) {
    // Because the slide is 300px, we add x with 300
    x = x + 300;
    // Whenever the downArrow is clicked, the card moves 300px from the top.
    slide.style.top = x + "px";
  }
});
