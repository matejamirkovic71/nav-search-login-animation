const labels = document.querySelectorAll('.form-control label')

const search = document.querySelector('.search-container');
const btn = document.querySelector('.search-btn');
const input = document.querySelector('.input');

const toggleNav = document.getElementById('toggle')
const nav = document.getElementById('nav')



/* Splits each letter of the labels and puts them in spans to start the animation, delaying each 50ms */

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span
        style="transition-delay:${idx*50}ms">${letter}</span>` )
        .join('')
})



btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


toggleNav.addEventListener('click', () => 
    nav.classList.toggle('active'))