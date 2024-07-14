var animation = document.querySelectorAll('.show-on-scroll')

document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById("home");
    const elementsToAnimate = homeSection.querySelectorAll(".left-to-right, .zoom");
    elementsToAnimate.forEach((element) => {
      element.classList.add("start");
    });
  });
function animationInWindow(element){
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.add('start')
    }
    else{
        element.classList.remove('start')
    }
}

function chechAnimaTion(){
    animation.forEach(element => {
        animationInWindow(element)
    })
}

window.addEventListener('scroll', chechAnimaTion)