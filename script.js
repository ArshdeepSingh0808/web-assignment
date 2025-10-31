const button = document.getElementById('colorBtn');
const colorValue = document.getElementById('colorValue');
const resetBtn = document.getElementById('resetBtn');
const defaultColor = '#f4f4f4';
const themeToggle = document.getElementById('themeToggle');

button.addEventListener('click',() => {
    const randomColor = 'hsl(${Math.random() *360} , 70% , 80%)';
    document.body.style.backgroundColor = randomColor;
    colorValue.textContent = 'Current Color: ${randomColor}';
    localStorage.setItem('lastColor', randomColor);
});

resetBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = defaultColor;
    colorValue.textContent = 'Current Color: ${defaultColor}';
    localStorage.removeItem('lastColor');
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  const savedColor = localStorage.getItem('lastColor');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = 'Switch to Light Mode';
  }
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorValue.textContent = `Current color: ${savedColor}`;
  }
});