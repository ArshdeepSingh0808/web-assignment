const button = document.getElementById('colorBtn');

button.addEventListener('click',() => {
    const randomColor = 'hsl(${Math.random() *360} , 70% , 80%)';
    document.body.style.backgroundColor = randomColor;
})