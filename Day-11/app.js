var range = document.querySelector('.range')
var rangeBar = document.querySelector('.range-bar')
var value = document.querySelector('.range-bar span')


function uppdateBar(percent){
    rangeBar.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}
range.addEventListener('mousemove',function(e){
    var bar = e.clientX - this.offsetLeft
    var percent = bar / this.offsetWidth * 100
    percent = Math.round(percent)
    uppdateBar(percent)
})