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

// create timeblock container to HTML OK OK OK 
taskDateContainer.forEach(function(timeBlock, index) {
    callColor();
    // renderTasks();
    let hourContent = timeBlock.hour;
    let colorClass = taskDateContainer[index].changeColor;
    // need to make add input work / needed to be filled up with data
    let addInput = taskDateContainer[index].taskInput;
    let idAttr = timeBlock.hourValue;
    console.log(addInput);

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
// ------------------------------------------------------------------
// newId = 3;
// let id = parseInt($(this).attr('id', 'newId'))
// console.log(id);
// const taskElement = $('.task-box');
// let taskElements = [];
// function getTaskElements() {
// taskElement.each(function() {
//     taskElements.push(taskElement.attr('id'));

// } 
// ) 
// }
// console.log(taskElements);
// getTaskElements();
// let userInput = $($('.saveBtn').siblings('.task'));
// console.log(userInput);
// loop through task inputs and store them in taskDateContainer
// ---------------------------- render Task---------------------
// function renderTasks() {
//     console.log('rendertask called');

//     let newId  = 0;
// console.log(id);

// for (i = 0; i <taskDateContainer.length; i++) {
//     if (parseInt($(this).attr('id', 'newId')) === 0) {
//         console.log(parseInt($('#0').attr('id', 'newId')));
//         newId++;


//     } else if (parseInt($('#0').attr('id', 'newId')) === 1){
//         console.log(parseInt($('#0').attr('id', 'newId')));
//         newId++;

//     }
// }
    // console.log(taskDateContainer.length);
    // let id = 0;
    // if (parseInt($('.task-block').attr('id'))) {
    //     getValue();
    //     id++;
    // }
// $('#0').sibling()     


//     taskDateContainer.forEach(function(checkInput, index) {
//         // getTaskElements()
//         let newTaskBlock = $('.container').children().children().eq(1).val();
//         let typedInput = checkInput.taskInput;
//         if (newTaskBlock) {
//             typedInput = newTaskBlock;
//             console.log('new task ' +typedInput);
//             taskDateContainer[index].taskInput = typedInput;
//             console.log(index);
//             newId = index;
//         }
//         console.log(taskDateContainer);

//     })
// }
// -----------------------------------
//         taskDateContainer.forEach(function(checkInput, index) {
//             let newId = 0;
//             $()
//             let newTaskBlock = $('.container').children().children().eq(1).val();
//             console.log($('.container').children(1));
//             // console.log(idVal);
//             console.log(newTaskBlock)
//             let typedInput = checkInput.taskInput;
//             // let getId = $('.task').parent().attr('id')(index);
//             // console.log();
//         //     // index = 0;
//             // const textarea = $('.task').val();
//             // console.log(textarea);
//         //     // checkInput[id].taskInput = textarea; 
//             // console.log(textarea);
//             // if (newTask) {
//             //     console.log('textarea not empty')
//             // } else {
//             //     return;
//             // } index++

//             // let getId = $('.task-block').attr('id');
//             // console.log(getId);
           
            
//         //     console.log(newTask);
//             if (newTaskBlock) {
//                 typedInput = newTaskBlock;
//                 console.log('new task ' +typedInput);
//                 taskDateContainer[index].taskInput = typedInput;
//                 console.log(index);
//                 newId = index;
//             }
//         // })
//         console.log(taskDateContainer);
// })
// }







const storedData = JSON.parse(localStorage.getItem('storedData')) || [];

// saveBtn to save task into local storage
$('.saveBtn').on('click', function() {
    // add task input to taskDateContaner and store in local storage
    const savedInput = $(this).siblings('textarea').val();
    const timeInput = $(this).parent().attr('value');
    localStorage.setItem(timeInput, savedInput);
  
})

// populate data from local storage to website textarea
// for (let i = 9; i < 17; i++ ) {


// }
$('#9').val(localStorage).getItem('9AM');
$('#10').val(localStorage).getItem('10AM');
$('#11').val(localStorage).getItem('11AM');
$('#12').val(localStorage).getItem('12AM');
$('#13').val(localStorage).getItem('1PM');
$('#14').val(localStorage).getItem('2PM');
$('#15').val(localStorage).getItem('3PM');
$('#16').val(localStorage).getItem('4PM');
$('#17').val(localStorage).getItem('5PM');

// const inputField = $('.task');
// function saveTasks() {

    // console.log('save task called')
    // taskDateContainer.forEach(function(checkInput, index) {
    //     let userInput = inputField.value;
    //     console.log(userInput);
    //     if (inputField.value) {
    //         inputField.append(userInput)

        


    // }
    // })

// }


})