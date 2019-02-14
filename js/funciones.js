
// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
jQuery('document').ready(function($){

    var subir = $('#irArriba');
    subir.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},500)
    });
    subir.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 125 ){
            subir.fadeIn();
        }
        else{
            subir.fadeOut();
        }
       
    });

});