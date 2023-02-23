let form = document.querySelector('form');
let btnOpen = document.querySelector('.hire');
let popup = document.querySelector('.mod-window');
let inputName = document.querySelector('.name')
let inputEmail = document.querySelector('.email')

function open() {
    popup.style.display = 'block'
}
btnOpen.addEventListener('click', open)


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(inputName.value + ' ' + inputEmail.value);
    popup.style.display = 'none'
})