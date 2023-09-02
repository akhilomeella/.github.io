const mainSection = document.querySelector(".container");
const subSection = document.querySelector(".secondState");
const submitButton = document.getElementById("onSubmit");
const btns = document.querySelectorAll(".btns button");
let score;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    score = e.target.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (score !== undefined) {
    subSection.classList.remove("hide");
    mainSection.style.display = "none";
    document.getElementById("rating").innerHTML = `
      ${score}
      `;
  } else {
    alert("Please choose a rating");
  }
});
