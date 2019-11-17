// Define globals
const form_submit = document.getElementById('sizePicker')
const table = document.getElementById('pixelCanvas');

// add event listener to submit button
form_submit.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
})

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    //get height and width from user 
    var table_height = document.getElementById('inputHeight').value;
    var table_width = document.getElementById('inputWidth').value;
    table.innerHTML = "";
    var x = 0;
    while (x < table_height) {
        var row = document.createElement('tr');
        table.append(row);

        for (var y = 0; y < table_width; y++) {
            var cell = document.createElement('td');
            row.append(cell);

            cell.addEventListener('click', function() {
                var color = document.getElementById('colorPicker').value;
                this.style.backgroundColor = color;
            })
        }
        x++;
    }
}