const inputs = Array.from(document.querySelectorAll("input")).filter(input => !input.classList.contains("hidden"))
const btn = document.querySelector("button");
const form = document.querySelector("form");
form.action = "http://127.0.0.1:5500/pin.html"

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