const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
nameInputEl.addEventListener("input", handleTextInput);
function handleTextInput() {
  let name = nameInputEl.value.trim();
  if (name === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = nameInputEl.value;
  }
}
