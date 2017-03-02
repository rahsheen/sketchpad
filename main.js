$(function () {

    function drawGrid(gridSpaces) {
        var rowHeight = 500 / gridSpaces;
        var colWidth = 500 / gridSpaces;

        // Clear the sketchpad
        $('#sketchpad').empty();

        //Draw the grid with divs
        for(var i=0;i<gridSpaces;i++){
                var row = $("<div></div>").addClass("row").css("height",500/gridSpaces);
            for(var j=0;j<gridSpaces;j++) {
                var div = $("<div></div>").css("height", rowHeight).css("width", colWidth);
                row.append(div);
            }
            $('#sketchpad').append(row);
        }

        //Activate sketchpad for drawing events
        $( "#sketchpad .row div" ).hover(function() {
  $( this ).addClass('blackBox');
});
    }

drawGrid(16);

$('#start-over').click(function(e) {
    e.preventDefault();

    var newGrid = prompt("How many spaces for next grid?");
    drawGrid(newGrid);
})
});