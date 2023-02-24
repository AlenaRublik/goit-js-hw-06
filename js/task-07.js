const inputFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("span");
inputFontSizeEl.addEventListener("input", fontSizeText);
textEl.style.fontSize = `${inputFontSizeEl.value}` + "px";
console.log(`${inputFontSizeEl.value} px`);
function fontSizeText() {
  textEl.style.fontSize = `${inputFontSizeEl.value}px`;
  console.log(`${inputFontSizeEl.value} px`);
}
