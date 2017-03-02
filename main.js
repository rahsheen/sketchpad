$(function () {
   for(var i=0;i<16;i++){
        var row = $("<div></div>").addClass("row");
       for(var j=0;j<16;j++) {
           row.append("<div></div>");
       }
        $('.container').append(row);
   }

});