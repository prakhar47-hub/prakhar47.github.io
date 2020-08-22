const arrow = document.querySelector(".nav button");
const homebtn = document.querySelector('#btn2');

arrow.addEventListener('click', home);
homebtn.addEventListener('click', home);

function home() {
 
    window.location = "../home.html";
   }