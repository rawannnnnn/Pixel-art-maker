// Define globals
const form_submit = document.getElementById('sizePicker')
const table = document.getElementById('pixelCanvas');

// add event listener to submit button
form_submit.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
})