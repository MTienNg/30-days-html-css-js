const upload = document.querySelector('#input-img')
const preview = document.querySelector('.preview')
upload.addEventListener('change', function(e){
    const img = document.createElement('img')
    const file = e.target.files[0]
    if(!file) return
    if(file.size / (1024*1024) > 5){
        alert("Hình ảnh phải nhỏ hơn 5 MB")
        return
    }
    img.src=URL.createObjectURL(file)
    preview.appendChild(img)
})