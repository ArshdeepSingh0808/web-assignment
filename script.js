const button = document.getElementById('colorBtn');
const colorValue = document.getElementById('colorValue');
const resetBtn = document.getElementById('resetBtn');
const defaultColor = '#f4f4f4';

button.addEventListener('click',() => {
    const randomColor = 'hsl(${Math.random() *360} , 70% , 80%)';
    document.body.style.backgroundColor = randomColor;
    colorValue.textContent = 'Current Color: ${randomColor}';
})

resetBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = defaultColor;
    colorValue.textContent = 'Current Color: ${defaultColor}';
})