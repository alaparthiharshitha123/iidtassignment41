
function changeColor() {
  const colorBox = document.getElementById('colorBox');
  const colorName = document.getElementById('colorName');
  const randomColor = generateRandomColor();
  
  document.body.style.backgroundColor = randomColor;
  colorBox.style.backgroundColor = randomColor;
  colorName.textContent = `Background-color: ${randomColor}`;
}

function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}
