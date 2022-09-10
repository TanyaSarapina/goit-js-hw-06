function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ChangeColorBtn = document.querySelector('.change-color');
// console.log(ChangeColorBtn);
let colorName = document.querySelector('.color');
// console.log(colorName.textContent);
const widget = document.querySelector('.widget');
// console.log(widget);


const onClickChangeColor = () => {
  const randomColor = getRandomHexColor();
  colorName.textContent = randomColor;
  widget.style.backgroundColor = randomColor;
}

ChangeColorBtn.addEventListener('click', onClickChangeColor);