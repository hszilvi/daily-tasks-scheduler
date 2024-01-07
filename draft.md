


// $('.task-block').each()


// link the colors to current date if current hour is equal to 
// current hour red, past hours gray, future hours green
// create variable to store the current hour / than compare the elements of the calendar to it
const currentHour = today.format("hA");
// const currentHour = '10AM';
console.log('currenthour ' + currentHour);
console.log('type current hour ' + typeof(currentHour));


// add hour value from my taskDataContainer to html div
// let calHours = $('hour');
// $.each(taskDateContainer.hour, function(index, value) {
//     calHours.append($('value'));
//     console.log(calHours.text());
// })

// const currentHourToArray = Object.values(currentHour);
// console.log('string current ' + currentHourToArray);
// console.log(typeof{currentHourToArray});
// const currentHourArraytoString = currentHourToArray.join("");
// console.log('end ' +currentHourArraytoString);
// console.log(currentHourArraytoString);
// console.log(typeof(currentHourArraytoString));


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
if (calendarHour.innerText === currentHour) {
    console.log(hour.innerText);
    console.log(currentHour);
task.addClass('present');
console.log('its present')
}

// $.each(calendarHourToString, function(index, hour) {
//     if (hour.innerText === currentHourArraytoString) {
//         console.log(hour.innerText);
//         console.log(currentHourArraytoString);
//     task.addClass('present');
//     console.log('its present')
// } else {
//     console.log('not the same hour')
//     // i have to compare the child elements  - nth hour is above or below the present element
// }
// })

// console.log('end ' +neededHourFormat);
// console.log('typeof ' + typeof{neededHourFormat});

// need a variable to get hour classes from html and have to split them by letters to make them comparable to current hour
// const calendarHours = $('.hour').text(); //

// const calendarHours = $('.hour');
// console.log(calendarHours);
// console.log(calendarHours.text());
// console.log(calendarHours.length)

// I need a function to get all the text() elements of each calendarhours
// let hourTextArray = [];
// for (i = 0; i< calendarHours.length; i++) {
//     let hourText = calendarHours.text();
    
//     hourTextArray.push(hourText[i]);
// }
// console.log(hourTextArray);
// console.log('calendar hour type ' + typeof(calendarHours));
// console.log(calendarHours)
// const calendarHours = [];
// calendarHours.forEach(hour => {
//     calendarHours.push(hour);

    
// });

// convert calendarHour values to array
// const neededArray = Object.values(calendarHours);
// console.log('type of neeededArray ' +neededArray);
// console.log(neededArray);
// const dataFromArray = neededArray.children().innerHtml;
// console.log(dataFromArray);
// const splittedCalendarHour = calendarHour.split(' ');
// const calendarHourToString = Object.values(calendarHour);
// console.log('calendarhoutostring ' + calendarHourToString);
// console.log('splitted' + splittedCalendarHour);
// const task =$('.task');

// calendarHourToString.forEach(hour => {
//     console.log(hour.innerText);
// })

// const noon = $(".hour-noon");
// console.log('noon ' + typeof(noon.text()));
// // console.log('type of objec value calendarHOur ' + typeof(Object.values(calendarHours)));
// taskDateContainer.forEach(function (element) {
//     if (element.hour === currentHour === calendarHours.text()) {
//         task.addClass('present');
//         console.log('present')
//     } else {
//         console.log('not present')
//     }
//     // console.log(element.hour);
// })
// neededArray.forEach(hour =>  {
//     hour.innerText = taskDateContainer.hour;
//     console.log(hour.innerText());

// })

// $.each(neededHourFormat, function(index, hour) {
//     if (hour.innerText === currentHourToArray) {
//     task.addClass('present');
//     console.log('its present')
// } else {
//     console.log('not the same hour')
//     // i have to compare the child elements  - nth hour is above or below the present element
// }})


// else if (currentHourArraytoString > hour.innerText) {
//     task.addClass('past');
//     console.log('its past')
// } else {
//     task.addClass('future');
//     console.log('its future')
// }
// });

    
    <!-- <div class="task-block row">
      <div class="hour col-2">9AM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">10AM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">11AM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour hour-noon col-2">12AM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">1PM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">2PM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">3PM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">4PM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
    <div class="task-block row">
      <div class="hour col-2">5PM</div>
      <textarea class="task col-8"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button>
    </div>
  </div> -->