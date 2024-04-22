var tableBegin = '<table><tbody>';
var tableEnd= '<table><tbody>';

var rowBegin = '<tr>';
var rowEnd = '<tr>';

var rowData = '';
var row = '';
for (var i=0; i<20; i++){
    row +=rowBegin;
    rowData = '<td>ime' + i + '</td><td>prezime'+ i + '</td>';
    row +=rowData;
    row +=rowEnd;
}

document.write(tableBegin+ row+tableEnd);
