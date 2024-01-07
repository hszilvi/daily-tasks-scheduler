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
        changeColor: ""
    },
    {
        hour: "10AM",
        hourValue: 10,
        changeColor: ""
    },
    {
        hour: "11AM",
        hourValue: 11,
        changeColor: ""
    },
    {
        hour: "12AM",
        hourValue: 12,
        changeColor: ""
    },
    {
        hour: "1PM",
        hourValue: 13,
        changeColor: ""
    },
    {
        hour: "2PM",
        hourValue: 14,
        changeColor: ""
    },
    {
        hour: "3PM",
        hourValue: 15,
        changeColor: ""
    },
    {
        hour: "4PM",
        hourValue: 16,
        changeColor: ""
    },
    {
        hour: "5PM",
        hourValue: 17,
        changeColor: ""
    },
];


// create timeblock container to HTML
taskDateContainer.forEach(function(timeBlock, index) {
    callColor();
    let hourContent = timeBlock.hour;
    console.log('hourcontent' + hourContent);
    let colorClass = taskDateContainer[index].changeColor;
    console.log('class ' + colorClass);

    let taskBlock = 
    `<div class="task-block row" id=" `+ index +` ">
        <div class="hour col-2">` + hourContent + `</div>
      <textarea class="task col-8 ` + colorClass + ` "></textarea>
      <button class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
        <path d="M11 2H9v3h2z"/>
        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg></i></button></div>`
    //  add to container class
    $('.container').append(taskBlock);
   
});


console.log(taskDateContainer.values(0));
function callColor() {
    console.log('color called');
    // need a variable to store the current hour 0-24format and convert to integer
    const currentHour = parseInt(today.format("H"));
    console.log(currentHour); 
    taskDateContainer.forEach(function(checkTime, index) {
        let checkedHour = checkTime.hourValue;
        // console.log(checkedHour);
        if (checkedHour > currentHour) {
            taskDateContainer[index].changeColor = "future";
        } else if (checkedHour < currentHour) {
            taskDateContainer[index].changeColor = "past";
        } else {
            taskDateContainer[index].changeColor = "present";
        } index++
    } )
    console.log(taskDateContainer)
}


const storedData = JSON.parse(localStorage.getItem('storedData')) || [];

// saveBtn to save task into local storage
$('.saveBtn').on('click', function() {
    // add task input to taskDateContaner and store in local storage
    saveTasks();
    console.log('saveBtn is clicked');
})
const inputField = $('.task');
function saveTasks() {
    console.log('save task called')
    taskDateContainer.forEach(function(checkInput, index) {
        let userInput = inputField.value;
        console.log(userInput);
        if (inputField.value) {
            inputField.append(userInput)

        


    }
    })

}