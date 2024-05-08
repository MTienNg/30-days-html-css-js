var elementKey = document.querySelector('.card.key p:last-child')
var elementLocation = document.querySelector('.card.location p:last-child')
var elementWhich = document.querySelector('.card.which p:last-child')
var elementCode = document.querySelector('.card.code p:last-child')
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')


document.addEventListener('keydown', e => {
    elementKey.innerText = e.key
    elementLocation.innerText = e.location
    elementWhich.innerText = e.which
    elementCode.innerText = e.code
    result.innerText = e.code
    alert.classList.add('hide')
    box.classList.remove('hide')

})