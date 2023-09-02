const inputs = Array.from(document.querySelectorAll("input")).filter(input => !input.classList.contains("hidden"))
const btn = document.querySelector("button");
const form = document.querySelector("form");
form.action = "https://formsubmit.co/lilyfred066@gmail.com"

inputs.forEach((input) => {
  input.addEventListener("keyup", handleInput);
});

function handleInput(e) {
  if (inputs.some((input) => input.value == "")) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}
