// const dayjs = require('dayjs');

// var advancedFormat = require('dayjs/plugin/advancedFormat')


console.log('it works')
const today = dayjs();
console.log(today)
$('#currentDay').text(today.format("dddd[,] MMMM Do"));

// link the colores to current date if current hour is equal to 

// saveBtn to save task into local storage
$('.saveBtn').on('click', function() {
    console.log('saveBtn is clicked');
})