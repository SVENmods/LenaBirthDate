
let timer_show = document.getElementById("timer");

function diffSubtract(date1, date2) {
     return date2 - date1;
}

let end_date = {
"full_year": "2022",
"month": "12",
"day": "14",
"hours": "00",
"minutes": "00",
"seconds": "00"
}

let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

timer = setInterval(function () {
let now = new Date();
let date = new Date(end_date_str);
let ms_left = diffSubtract(now, date);
if (ms_left <= 0) {
     clearInterval(timer);
     alert("Время закончилось");
} else {
     let res = new Date(ms_left);
     function checkMonth(){
          if(res.getUTCMonth() > 1){
               return "месяца";
          }
          else if(res.getUTCMonth() == 0){
               return "месяцев";
          }
          else {
               return "месяц";
          }
     };
     function checkDays(){
          var n1 = res.getUTCDate() % 10;
          if (res.getUTCDate() > 10 && res.getUTCDate() < 20) { return 'дней'; }
          if (n1 > 1 && n1 < 5) { return 'дня'; }
          if (n1 == 1) { return 'день'; }
          return 'дней';
     }
     function checkHours(){
          var n1 = res.getUTCHours() % 10;
          if (res.getUTCHours() > 10 && res.getUTCHours() < 20) { return 'часов'; }
          if (n1 > 1 && n1 < 5) { return 'часa'; }
          if (n1 == 1) { return 'час'; }
          return 'часов';
     }
     function checkMinutes(){
          var n1 = res.getUTCMinutes() % 10;
          if (res.getUTCMinutes() > 10 && res.getUTCMinutes() < 20) { return 'минут'; }
          if (n1 > 1 && n1 < 5) { return 'минуты'; }
          if (n1 == 1) { return 'минута'; }
          return 'минут';
     }
     function checkSeconds(){
          var n1 = res.getUTCSeconds() % 10;
          if (res.getUTCSeconds() > 10 && res.getUTCSeconds() < 20) { return 'секунд'; }
          if (n1 > 1 && n1 < 5) { return 'секунды'; }
          if (n1 == 1) { return 'секунда'; }
          return 'секунд';
     }
     let str_timer = `${res.getUTCMonth() + ' ' + checkMonth()} ${res.getUTCDate() - 1 + ' ' + checkDays()} ${res.getUTCHours() + ' ' + checkHours()} ${res.getUTCMinutes() + ' ' + checkMinutes()} ${res.getUTCSeconds() + ' ' + checkSeconds()}`;
     timer_show.innerHTML = str_timer;
}
}, 500);
