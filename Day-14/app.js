fetch('https://fakestoreapi.com/products')
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data)

    var products = document.querySelector('.products')

    data.forEach(item => {
    var newProduct = document.createElement('div')
    newProduct.classList.add('product')
    newProduct.innerHTML = `
                <img src="${item.image}">
                <div class="info">
                    <div class="name">${item.title}</div>
                    <div class="price">$${item.price}</div>
                </div>`
    products.appendChild(newProduct)
});
}) 

var searchInput = document.querySelector('.search input')
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.code === 'Enter') { // or e.keyCode === 13
        let txtSearch = e.target.value.trim().toLowerCase()
        console.log(txtSearch)
    
        let listProductDOM = document.querySelectorAll('.products .product')
        listProductDOM.forEach(item => {
            if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide')
            } else {
            item.classList.add('hide')
            }
      })
    }
})


    