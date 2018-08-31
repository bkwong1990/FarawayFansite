var test_opposite = false;

function styleByTime(){
  if((new Date()).getHours() >= 6 && (new Date()).getHours() < 18 && !test_opposite)
  {
    document.getElementById("day_night").innerHTML = `
    body{
      background-image: url("img/continent_day.jpg");
    }

    body > h1 {
      color: brown;
      text-shadow: 2px 2px 4px gray;
      text-align: center;
    }
    `;
  }
  else {
    document.getElementById("day_night").innerHTML = `
    body{
      background-image: url("img/continent_night.jpg");
    }

    #title {
      color: white;
      text-shadow: 2px 2px 4px gray;
      text-align: center;
    }
    `;
  }
}

styleByTime();
var timer = setInterval(styleByTime, 60000);
