const counter = document.querySelector('.counter');
const filed = document.querySelector('.filed');

filed.addEventListener('keyup', () => {
    counter.innerHTML = filed.value.length
});