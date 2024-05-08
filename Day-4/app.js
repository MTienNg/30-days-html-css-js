var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.gallery .close')
var galleryImage = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')
var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    }
    else {
        prev.classList.remove('hide')

    }
    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    }
    else {
        next.classList.remove('hide')

    }
    galleryImage.src = images[currentIndex].src
    gallery.classList.add('show')
}
images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index
        showGallery()
    })
})
close.addEventListener('click', () => {
    gallery.classList.remove('show')
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')

    }
})


function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    }
}
function moveRight() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37) { //sang trai
        moveLeft()
        showGallery()

    }
})


document.addEventListener("keydown", function (e) {
    if (e.keyCode == 39) { //sang phai
        moveRight()
        showGallery()

    }
})
prev.addEventListener('click', function () {
    moveLeft()
    showGallery()
})
next.addEventListener('click', function () {
    moveRight()
    showGallery()
})


