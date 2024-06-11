var search = document.querySelector('.input-search')
var city = document.querySelector('.city');
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.cloud span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeWeatherUI(searchValue) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=18671a41d0f3d28c8a2cb2bba05a23ae`;
    let data = await fetch(apiUrl).then(res => res.json()); 
    console.log(data);
    if(data.cod == 200){
        city.innerText = data.name
        country.innerText = data.sys.country
        let temp = Math.round(data.main.temp - 273.15);
        value.innerText = temp;
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        shortDesc.innerText = data.weather[0] ? data.weather[0].main: ''
        time.innerText = new Date().toDateString('vi')
        if (temp < 20) {
            body.setAttribute('class', 'cold');
        } else {
            body.setAttribute('class', 'hot');
        }

    }
    else{
        content.classList.add('hide')
    }
}
window.onload = function() {
    changeWeatherUI('Ha Noi'); 
    search.value = 'Ha Noi'; // Đặt giá trị mặc định cho thanh search
}

// Sự kiện keypress cho thanh tìm kiếm
search.addEventListener('keypress',function(e){
    if(e.code == 'Enter'){
        let searchValue = search.value.trim();
        changeWeatherUI(searchValue)
    }
})

