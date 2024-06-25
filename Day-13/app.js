var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var listDivImg = document.querySelectorAll('.list-img div')
var imgWrap = document.querySelector('.img-wrap img')
var currentIndex = 0

setCurrent(currentIndex)
console.log(listDivImg)
function setCurrent(index) {
    imgWrap.src = listDivImg[index].querySelector('img').src
    console.log(imgWrap)
  
    // remove all active img
    listDivImg.forEach((item) => {
      item.classList.remove('active')
    })
  
    // set active
    listDivImg[index].classList.add('active')
}
listDivImg.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		setCurrent(index)
	})
})

next.addEventListener('click',()=>{
    if(currentIndex < listDivImg.length - 1){
        currentIndex++
    }
    else{
        currentIndex = 0
    }
    setCurrent(currentIndex)
})
prev.addEventListener('click',()=>{
    if(currentIndex > 0){
        currentIndex--
    }
    else{
        currentIndex = 0;
    }
    setCurrent(currentIndex)
})