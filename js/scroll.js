var scrollY = 0;
var distance = 30;
var speed = 5;

function smoothScroll(id){
    var target = document.getElementById(id).offsetTop - 60;
    var currentY = window.pageYOffset;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var scrollAnimate = setTimeout(function(){
    smoothScroll(id)},speed); 

    if(currentY > target){
        if(currentY > target - distance){
            window.scrollBy(0, (-1)*distance);
        }
        else{
            clearTimeout(scrollAnimate);
        }
    }
    else if(currentY < target){
        if(yPos >= bodyHeight){
            clearTimeout(scrollAnimate);
        }
        else{
            if(currentY < target - distance){
                scrollY = currentY + distance;
                window.scrollBy(0,distance);
            }
            else{
                clearTimeout(scrollAnimate);
            }
        }
    }
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