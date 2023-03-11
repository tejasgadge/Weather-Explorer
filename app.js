const API_KEY = `12c6fcc8ff905836eb95a824e014d64b`;
const inputfield=document.getElementById('input-field');
const weather=document.getElementById('weather');
const form=document.querySelector('form');
// 


const getWeather= async(city)=>{
    weather.innerHTML = `<h2 style="color: aliceblue;"> Loading... <h2>`
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response= await fetch(url);
    const data=await response.json();
    show(data);
}

const show=(data)=>{
    if(data.cod=='404')
    {
        weather.innerHTML = `<h2 style="color: aliceblue;"> City Not Found <h2>`
        return;
    }
    weather.innerHTML=`
            <div>
                 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" >
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4>${data.weather[0].main}</h4>
            </div>`
    weather.body.style="display:flex";
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(inputfield.value);
        console.log("submit");
        event.preventDefault();
    }
)