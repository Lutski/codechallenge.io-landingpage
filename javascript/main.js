$(document).ready(function() {
  getDay();
});

function getDay() {
  var currentDate = new Date();
  var dayOfTheWeek = currentDate.getDay();

  var weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursdau",
    5: "Friday",
    6: "Saturday"
  }

  var getCurrentDay = weekDays[dayOfTheWeek];
  $('#footer h1 span').text(getCurrentDay);
}
