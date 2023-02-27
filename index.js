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


let modal1 = document.getElementById('modal1');
let img1 = document.getElementById('photo1');
let modalImg1 = document.getElementById("one");
img1.onclick = function() {
    modal1.style.display = "block";
    modalImg1.src = this.src;
}

let span1 = document.getElementsByClassName("close1")[0];

span1.onclick = function() {
    modal1.style.display = "none";
}


let modal2 = document.getElementById('modal2');
let img2 = document.getElementById('photo2');
let modalImg2 = document.getElementById("two");
img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
}

let span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() {
    modal2.style.display = "none";
}

let modal3 = document.getElementById('modal3');
let img3 = document.getElementById('photo3');
let modalImg3 = document.getElementById("three");
img3.onclick = function() {
    modal3.style.display = "block";
    modalImg3.src = this.src;
}

let span3 = document.getElementsByClassName("close3")[0];

span3.onclick = function() {
    modal3.style.display = "none";
}

let modal4 = document.getElementById('modal4');
let img4 = document.getElementById('photo4');
let modalImg4 = document.getElementById("four");
img4.onclick = function() {
    modal4.style.display = "block";
    modalImg4.src = this.src;
}

let span4 = document.getElementsByClassName("close4")[0];

span4.onclick = function() {
    modal4.style.display = "none";
}

let modal5 = document.getElementById('modal5');
let img5 = document.getElementById('photo5');
let modalImg5 = document.getElementById("five");
img5.onclick = function() {
    modal5.style.display = "block";
    modalImg5.src = this.src;
}

let span5 = document.getElementsByClassName("close5")[0];

span5.onclick = function() {
    modal5.style.display = "none";
}

let modal6 = document.getElementById('modal6');
let img6 = document.getElementById('photo6');
let modalImg6 = document.getElementById("six");
img6.onclick = function() {
    modal6.style.display = "block";
    modalImg6.src = this.src;
}

let span6 = document.getElementsByClassName("close6")[0];

span6.onclick = function() {
    modal6.style.display = "none";
}