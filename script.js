let input = document.querySelector('.city');
weather();
document.querySelector('.button-primary').onclick = weather;

function weather(locality) {
    locality = input.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locality}&units=metric&appid=79c6dc4653135ed4d7f145e337640bd1&lang=ru`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = `${Math.round(data.main.temp)}&deg;`;
            document.querySelector('.feels').innerHTML = `ощущается как ${Math.round(data.main.feels_like)}&deg;`;
            document.querySelector('.description').textContent = data.weather[0]['description'];
            document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.wind').textContent = `ветер ${Math.round(data.wind.speed)} м/с, ${wind(data.wind.deg)}`;
            document.querySelector('.humidity').innerHTML = `влажность ${(data.main.humidity)} %`;
            document.querySelector('.pressure').innerHTML = `давление ${(data.main.pressure * 0.75006).toFixed(0)} мм.рт.ст.`;
        })
    input.value = '';
}

function wind(deg, direction) {
    if (deg > 337 || deg < 22) {
        direction = 'С';
    } else if (deg > 22 && deg < 67) {
        direction = 'СВ';
    } else if (deg > 67 && deg < 112) {
        direction = 'В';
    } else if (deg > 112 && deg < 157) {
        direction = 'ЮВ';
    } else if (deg > 157 && deg < 202) {
        direction = 'Ю';
    } else if (deg > 202 && deg < 247) {
        direction = 'ЮЗ';
    } else if (deg > 247 && deg < 292) {
        direction = 'З';
    } else if (deg > 292 && deg < 337) {
        direction = 'СЗ';
    }
    return direction;
}