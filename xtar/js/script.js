let menuBtn = document.getElementById('menuBtn');
let navBar = document.getElementById('navBar');

menuBtn.addEventListener('click', function(){
    navBar.classList.toggle('active');
})