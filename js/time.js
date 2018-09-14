function styleByTime(){
  if((new Date()).getHours() >= 6 && (new Date()).getHours() < 18 )
  {
    document.getElementById("day_night").innerHTML = `
    body{
      background-image: url("img/continent_day.jpg");
    }
    `;
  }
  else {
    document.getElementById("day_night").innerHTML = `
    body{
      background-image: url("img/continent_night.jpg");
    }   
    `;
  }
}

styleByTime();
var timer = setInterval(styleByTime, 60000);
