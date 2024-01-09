$(document).ready(function () {
// add current date to header, format: "Saturday, January 6th" 
// extra script needed in html (advanced dayjs)
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

    // need a function to create timeblock container to HTML and populate with id, hour values and input tasks
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
        <textarea name="task" class="task col-8 ` + colorClass + ` ">` + addInput + `</textarea>
        <button type="submit" class="saveBtn col-2"><i class="bi bi-floppy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
            <path d="M11 2H9v3h2z"/>
            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
        </svg></i></button></div>`
        //  add to container class
        $('.container').append(taskBlock);
    
    });
    // function to check time with current time and set the color
    function callColor() {
        // need a variable to store the current hour 0-24format and convert to integer
        const currentHour = parseInt(today.format("H"));
        taskDateContainer.forEach(function(checkTime, index) {
            let checkedHour = checkTime.hourValue;
            if (checkedHour > currentHour) {
                taskDateContainer[index].changeColor = "future";
            } else if (checkedHour < currentHour) {
                taskDateContainer[index].changeColor = "past";
            } else {
                taskDateContainer[index].changeColor = "present";
            } index++
        } )
    }
    // saveBtn to save task into local storage
    $('.saveBtn').on('click', function() {
        // add task input to taskDateContaner and store in local storage
        const savedTaskInput = $(this).siblings('textarea').val();
        const timeInput = $(this).parent().attr('id');
        // setItem by  Key and Value
        localStorage.setItem(timeInput, savedTaskInput);
        taskDateContainer.taskInput = JSON.parse(localStorage.getItem('savedTaskInput'));
        //  2nd version -------------------------
        // const dataStorage =    
        //         {
        //             time: $(this).parent().text(),
        //             task: $(this).children('textarea').val() 
        //         }
        //     ;
        // if (!($(this).children('textarea').val()) )  {
        //     console.log('no data');
        //     dataStorage = {};
        // } else {
        //     console.log(dataStorage);
        //     storedData.push(dataStorage);
        //     localStorage.setItem('storedData', JSON.stringify(localStorage));
        // }
        // dataStorage.time = $(this).parent().text();
        // dataStorage.task = $(this).children('textarea').val();       
        // console.log(storedData)
    })

    // to do if I refresh the page the saved data appear on page from local storage
    // need to target only child element textarea to get the exact data
    for (let i = 9; i <= 17; i++ ) {
        $(`#${i}`).children('textarea').val(localStorage.getItem(i));
        console.log($(`#${i}`).children('textarea').val(localStorage.getItem(i)).key);
    }
})