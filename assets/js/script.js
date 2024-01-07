// add current date to header, format: "Saturday, January 6th" 
// extra script needed in html (advanced dayjs) OK OK OK OK
const today = dayjs();
$('#currentDay').text(today.format("dddd[,] MMMM Do"));


// ----------------------------------
// create an array to store data then add html elements to html file, fill the data from this array
const taskDateContainer = [
    {
        hour: "9AM",
        hourValue: 9,
        taskInput: ""
    },
    {
        hour: "10AM",
        hourValue: 10,
        taskInput: ""
    },
    {
        hour: "11AM",
        hourValue: 11,
        taskInput: ""
    },
    {
        hour: "12AM",
        hourValue: 12,
        taskInput: ""
    },
    {
        hour: "1PM",
        hourValue: 13,
        taskInput: ""
    },
    {
        hour: "2PM",
        hourValue: 14,
        taskInput: ""
    },
    {
        hour: "3PM",
        hourValue: 15,
        taskInput: ""
    },
    {
        hour: "4PM",
        hourValue: 16,
        taskInput: ""
    },
    {
        hour: "5PM",
        hourValue: 17,
        taskInput: ""
    },
];


// create timeblock container to HTML
taskDateContainer.forEach(function(timeBlock, index) {
    let hourContent = timeBlock.hour;
    let colorClass = callColor(hourContent);
    console.log(colorClass);
    let taskBlock = 
    `<div class="task-block row" id=" `+ index +` ">
        <div class="hour col-2">` + hourContent + `</div>
      <textarea class="task col-8 `+ colorClass +`"></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button></div>`
    //   add to container class
    $('.container').append(taskBlock);
});

// console.log(taskDateContainer.values(0));
function callColor(time) {
    console.log('color called');
    // need a variable to store the current hour 0-24format and convert to integer
    const currentHour = parseInt(today.format("H"));
    taskDateContainer.forEach(function(checkTime, index) {

        let checkedHour = checkTime.hourValue;
        console.log(checkedHour);
        if (checkedHour > currentHour) {
            console.log('future');
            return "future" ;
        } else if (checkedHour < currentHour) {
            console.log('past');
            return "past";
        } else {
            console.log('present');
            return "present";
        }
    })


}




// saveBtn to save task into local storage
$('.saveBtn').on('click', function() {
    console.log('saveBtn is clicked');
})