window.onload = function () {
  const adviceID = document.getElementById("ID");
  const adviceText = document.getElementById("Text");
  const Button = document.getElementById("button");
  const Loader = document.querySelector(".custom-loader");

  async function getAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const quote = data.slip;
      adviceID.textContent = `${quote.id}`;
      adviceText.textContent = `${quote.advice}`;
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }

  Button.addEventListener("click", getAdvice);
};
