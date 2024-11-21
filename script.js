
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero-content h1");
    heroTitle.style.opacity = "0";
    heroTitle.style.transition = "opacity 2s";

    setTimeout(() => {
        heroTitle.style.opacity = "1";
    }, 500);
});
const innerSquare = document.querySelector('.inner-square');


innerSquare.addEventListener('click', () => {
    // Змінюємо позицію внутрішнього квадрата
    innerSquare.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;
    innerSquare.style.transition = 'transform 0.5s ease';
});

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


var btn1 = document.getElementById("openModalButton1");
var btn2 = document.getElementById("openModalButton2");
var btn3 = document.getElementById("openModalButton3");

var closeModal1 = document.getElementById("closeModal1");
var closeModal2 = document.getElementById("closeModal2");
var closeModal3 = document.getElementById("closeModal3");


btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}


closeModal1.onclick = function() {
    modal1.style.display = "none";
}
closeModal2.onclick = function() {
    modal2.style.display = "none";
}
closeModal3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
