const apiKey = '257ea0cc4f76917a9f0e7a3bca867eaa';
const apiLink = 'https:/api.openweathermap.org/data/2.5/weather';

document.getElementById('submit').addEventListener('click',function(){
    const city = document.getElementById('inputCountry').value;
    const url = `${apiLink}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        insertWeatherData(data);
    })
    .catch(error => console.log(error));
})

function insertWeatherData(data){
    document.getElementById('name').innerText=data.name;
    document.getElementById('tem').innerText = data.wind.deg;
    document.getElementById('weather').innerText=data.weather[0].main;
    const icon = data.weather[0].icon;
    document.getElementById('icon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

    
}