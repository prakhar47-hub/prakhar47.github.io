const navbar = document.querySelector('header');

window.addEventListener('scroll', function(){

    

    navbar.classList.toggle('sticky', window.scrollY>0);
   
});