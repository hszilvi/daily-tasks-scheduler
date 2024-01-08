$(document).ready(function () {
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
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "10AM",
            hourValue: 10,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "11AM",
            hourValue: 11,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "12AM",
            hourValue: 12,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "1PM",
            hourValue: 13,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "2PM",
            hourValue: 14,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "3PM",
            hourValue: 15,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "4PM",
            hourValue: 16,
            changeColor: "",
            taskInput: ""
        },
        {
            hour: "5PM",
            hourValue: 17,
            changeColor: "",
            taskInput: ""
        },
    ];

    // need a function to create timeblock container to HTML and populate with id, hour values and input tasks OK OK OK 
    taskDateContainer.forEach(function(timeBlock, index) {
        // call the callColor function which check hours and render colors to html elements
        callColor();
        // define variables to put values dynamically into html
        let hourContent = timeBlock.hour;
        let colorClass = taskDateContainer[index].changeColor;
        // need to make add input work / needed to be filled up with data
        let addInput = taskDateContainer[index].taskInput;
        // set id to hour value 
        let idAttr = timeBlock.hourValue;
        // console.log(addInput);

        let taskBlock = 
        `<div class="task-block row" id="`+ idAttr +`">
            <div class="hour col-2">` + hourContent + `</div>
        <textarea class="task col-8 ` + colorClass + ` ">` + addInput + `</textarea>
        <button type="submit" class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
            <path d="M11 2H9v3h2z"/>
            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
        </svg></i></button></div>`
        //  add to container class
        $('.container').append(taskBlock);
    
    });
    // OK OK OK OK OK ---------------------------------------------------
    function callColor() {
        // console.log('color called');
        // need a variable to store the current hour 0-24format and convert to integer
        const currentHour = parseInt(today.format("H"));
        // console.log(currentHour); 
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
        // console.log(taskDateContainer)
    }


    // const storedData = JSON.parse(localStorage.getItem('storedData')) || [];

    // saveBtn to save task into local storage
    $('.saveBtn').on('click', function() {
        // add task input to taskDateContaner and store in local storage
        const savedInput = $(this).siblings('textarea').val();
        const timeInput = $(this).parent().text();
        console.log(savedInput);
        console.log(timeInput);
        // setItem by  Key and Value
        localStorage.setItem(timeInput, savedInput);
        taskDateContainer.taskInput = JSON.parse(localStorage.getItem('savedInput'));
        console.log(taskDateContainer.taskInput);
        taskDateContainer[0].taskInput = JSON.parse(localStorage.getItem('9AM'));
        console.log($('#9').val(localStorage.getItem('9AM')));
        alert(JSON.parse(localStorage.getItem('9AM')));
    })

    // to do get data from local storage and add to website textarea
    // for (let i = 9; i < 17; i++ ) {
    //     $(`#{i}`).val(localStorage.getItem(i));
    //     taskDateContainer[i-9].taskInput = $('#{i}').val(localStorage.getItem(i)).value;

    // }
    taskDateContainer[0].taskInput = localStorage.getItem('9AM');
    // taskDateContainer[1].taskInput = $('#10').val(localStorage.getItem('10AM')).value;
    // console.log($('#10').val(localStorage.getItem('10AM')))
    // getItem value by key getItem('key')
    $('#9').val(localStorage.getItem('9AM'));
    $('#10').val(localStorage.getItem('10AM'));
    $('#11').val(localStorage.getItem('11AM'));
    $('#12').val(localStorage.getItem('12AM'));
    $('#13').val(localStorage.getItem('1PM'));
    $('#14').val(localStorage.getItem('2PM'));
    $('#15').val(localStorage.getItem('3PM'));
    $('#16').val(localStorage.getItem('4PM'));
    $('#17').val(localStorage.getItem('5PM'));
    console.log($('#9').val(localStorage.getItem('9AM')));



    // to do if I refresh the page the saved data appear on page from local storage....

})