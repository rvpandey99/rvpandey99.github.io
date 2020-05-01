let hamberger = document.querySelector('#hamberger-menu');
hamberger.addEventListener('click', function () {
    hamberger.style.display = 'none';
    let nav = document.querySelector('header nav'); 
    nav.style.display = 'flex';
    setTimeout(()=>{
        nav.classList.add('horizTranslate');
    },100);
    setTimeout(()=>{
        document.querySelector('#hamberger-x').style.display = 'inline-block';
    },400);
} );

let hambergerX = document.querySelector('#hamberger-x');
hambergerX.addEventListener('click', function () {
    hambergerX.style.display = 'none';
    let nav = document.querySelector('header nav');
    nav.classList.remove('horizTranslate');
    setTimeout(()=>{
        nav.style.display = 'none';
        document.querySelector('#hamberger-menu').style.display = 'inline-block';
    },400);
} );

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});