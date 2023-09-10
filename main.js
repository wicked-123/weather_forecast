
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1a758d007msh0ebe6203c02e7e6p1177d8jsn9f8d5bd2fb29',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city)=>{
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response=>response.json())
    .then((response)=>{

    
        temp.innerHTML=response.temp
        
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        var temperature=response.temp;
    var humid=response.humidity;
    var winds=response.wind_speed;
    var pd = predictWeather(temperature,humid,winds);
    console.log(pd);
    if(pd=="Raining"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","rainy dy.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","rain.mp4");
    }
    else if(pd=="Cloudy"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","cloudy.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","cloudy.mp4");
    }
        
    else if(pd=="Windy"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","windy.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","windy.mp4");
    }
    else if(pd=="Stormy"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","storm.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","storm.mp4");
    }
    else if(pd=="Sunny"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","sunny.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","sunny.mp4");
        
    }
    else if(pd=="Hot and Dry"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","hot and dry.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","hot.mp4");
    }
    else if(pd=="cold"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","snow.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","cold.mp4");
    }
    else if(pd=="normal"){
        var image = document.getElementById("cloud");
        image.setAttribute("src","snow.png");
        var video= document.getElementsByTagName("video")[0];
        video.setAttribute("src","cold.mp4");
    }



  
        
        console.log(response)})
	.catch(err=>console.error(err))
    var ele = document.getElementById("my");
    ele.style.opacity="1";
    ele.style.top="10em";




}
var searcht=document.getElementsByClassName('searcht')[0];
searcht.addEventListener('keydown', (e) => {
    if(e.key=='Enter'){
        getWeather(city.value)
    }
    
});


submit.addEventListener("click",(e)=>{
    getWeather(city1.value)
    document.getElementById("et").remove();
})
btnn.addEventListener("click",(e)=>{
    getWeather(city.value)
})
var search=document.getElementsByClassName('search')[0];

search.addEventListener('keydown', (e) => {
    if(e.key=='Enter'){
        getWeather(city1.value)
        document.getElementById("et").remove();
    }
    
});



function predictWeather(temperature,humid,winds) {

    if( temperature<=10 ){
        weatherCondition='cold';
    }
    else if (temperature < 30 && humid > 70 && winds > 7) {
        weatherCondition = 'Stormy';
    } else if (temperature < 29 && humid > 70 && winds <=7) {
        weatherCondition = 'Raining';
    } else if (temperature >= 32 && humid < 50) {
        weatherCondition = 'Hot and Dry';
    } else if (cloudyCondition(temperature, humid)) {
        weatherCondition = 'Cloudy';
    } else if (windyCondition(winds)) {
        weatherCondition = 'Windy';
    } else if(temperature>20 && temperature<=32 && winds<10 && humid<60 ){
        weatherCondition = 'Sunny';
    }
    else 
    weatherCondition='normal';
return weatherCondition;
   
}

function cloudyCondition(temperature, humidity) {
 
    return temperature >= 15 && temperature <= 25 && humidity <=50 && winds<10;
}

function windyCondition(windSpeed) {

    return windSpeed > 6 && temperature>20 && temperature<30 ;
}
time.innerHTML=updateClock();
console.log(updateClock());
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');


    const timeString = `${hours} : ${minutes}`;
    return timeString;
}
console.log(document.getElementById("city1").value);


if( typeof document.getElementById("city1").value==="undefined")
{
    alert("giv correct city name");
}
    
