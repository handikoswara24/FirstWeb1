var posY = 0;
var jarak = 15;
// var curY = document.documentElement.scrollTop;
// posY=curY;

function smoothScroll(id){
    var target = document.getElementById(id).offsetTop - 60;
    // var scrollAnimate = setTimeout(function(){
    //     smoothScroll(id)
    // },1); 

    // if(curY <= target){
    //     posY = curY;
    // }
    // else{
    //     posY = 0;
    // }

    // posY += jarak;

    // if(posY >= target){
    //     clearTimeout(scrollAnimate);
    //     posY=0;
    // }
    // else{
    //     window.scroll(0,posY);
    // }

    window.scroll(0,target);

    return false;
}

function toggleMenu(){
    var menu = document.getElementById('menu-hp');
    menu.classList.toggle('menu-open');
}

function closeMenu(){
    if($('#menu-hp').hasClass('menu-open')){
        var menu = document.getElementById('menu-hp');
        menu.classList.remove('menu-open');
    }
}