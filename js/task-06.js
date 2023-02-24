const inputValidationEl = document.querySelector("#validation-input");
inputValidationEl.addEventListener("blur", handleInputBlur);
const DATA_LENGTH = parseInt(inputValidationEl.getAttribute("data-length"));
function handleInputBlur() {
  const inputLength = inputValidationEl.value.length;
  if (inputLength === 0) {
    inputValidationEl.classList.remove("valid");
    inputValidationEl.classList.remove("invalid");
  } else if (inputLength === DATA_LENGTH) {
    inputValidationEl.classList.add("valid");
    inputValidationEl.classList.remove("invalid");
  } else if (inputLength !== DATA_LENGTH) {
    inputValidationEl.classList.add("invalid");
    inputValidationEl.classList.remove("valid");
  }
}