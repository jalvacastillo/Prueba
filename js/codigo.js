$(document).ready(function() {
  

    // $('.popup').magnificPopup({type:'image'});

    $('.carrusel').slick();

    setTimeout(()=>{
        document.documentElement.style.setProperty('--animate-duration', '2s');

    }, 2000);


});