const mainSection = document.querySelector(".container");
const subSection = document.querySelector(".secondState");
const submitButton = document.getElementById("onSubmit");
let score;

document.querySelectorAll(".btns button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    score = e.target.textContent;
  });
});

submitButton.addEventListener("click", () => {
  subSection.classList.remove("hide");
  mainSection.style.display = "none";
  document.getElementById("rating").innerHTML = `
      ${score}
      `;
});
 