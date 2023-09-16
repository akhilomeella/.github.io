window.onload = function () {
  const adviceID = document.getElementById("adviceID");
  const adviceText = document.getElementById("adviceText");
  const Button = document.getElementById("button");

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
