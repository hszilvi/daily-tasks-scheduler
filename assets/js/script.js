// add current date to header, format: "Saturday, January 6th" 
// extra script needed in html (advanced dayjs)
const today = dayjs();
console.log(today)
$('#currentDay').text(today.format("dddd[,] MMMM Do"));


// ----------------------------------
// link the colors to current date if current hour is equal to 
// current hour red, past hours gray, future hours green
// create variable to store the current hour / than compare the elements of the calendar to it
const currentHour = today.format("hA");
// const currentHour = '10AM';
console.log('currenthour ' + currentHour);
// need only the values of currentHour object > example: array ["8", 'P', 'M']
const currentHourToArray = Object.values(currentHour);
console.log('string current ' + currentHourToArray);
console.log(typeof{currentHourToArray});
const currentHourArraytoString = currentHourToArray.join("");
console.log('end ' +currentHourArraytoString);

// need a variable to get hour classes from html and have to split them by letters to make them comparable to current hour
const calendarHour = $('.hour');


// const splittedCalendarHour = calendarHour.split(' ');
const calendarHourToString = Object.values(calendarHour);
console.log('calendarhoutostring ' + calendarHourToString);
// console.log('splitted' + splittedCalendarHour);
const task =$('.task');

// calendarHourToString.forEach(hour => {
//     console.log(hour.innerText);
// })

const noon = $(".hour-noon");
console.log('noon ' + noon.text());

calendarHourToString.forEach(hour => {
    if (hour.innerText === currentHourArraytoString) {
    task.addClass('present');
    console.log('its present')
} else {
    console.log('not the same hour')
    // i have to compare the child elements  - nth hour is above or below the present element
}


// else if (currentHourArraytoString > hour.innerText) {
//     task.addClass('past');
//     console.log('its past')
// } else {
//     task.addClass('future');
//     console.log('its future')
// }
});


// saveBtn to save task into local storage
$('.saveBtn').on('click', function() {
    console.log('saveBtn is clicked');
})