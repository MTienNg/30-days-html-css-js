// Dữ liệu sản phẩm
var products = [
    { name: "Áo thun" },
    { name: "Quần jean" },
    { name: "Giày thể thao" },
    { name: "Mũ lưỡi trai" }
];

// Lấy các element cần thiết
var btnSearch = document.querySelector('.search-btn');
var searchInput = document.querySelector('.search-input');
var productList = document.getElementById('product-list'); // Giả sử bạn có element <ul id="product-list">

// Hiển thị danh sách sản phẩm ban đầu
function displayProducts(products) {
    productList.innerHTML = ""; // Xóa nội dung cũ
    products.forEach(function (product) {
        var li = document.createElement('li');
        li.textContent = product.name
        productList.appendChild(li);
    });
}


// Xử lý sự kiện click nút tìm kiếm
btnSearch.addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();

    // Lấy giá trị tìm kiếm
    var searchTerm = searchInput.value.toLowerCase();

    // Lọc sản phẩm
    var filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchTerm)
    });

    // Hiển thị sản phẩm đã lọc
    if (filteredProducts.length > 0) {
        alert("Tìm thấy " + filteredProducts.length + " sản phẩm!");
    } else {
        alert("Không tìm thấy sản phẩm nào!");
    }
    displayProducts(filteredProducts);
});