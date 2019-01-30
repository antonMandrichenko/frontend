"use strict";
//classwork
var doc = document;
var table = doc.getElementById('age-table');
var allLabel = table.getElementsByTagName('label');
console.log(allLabel);

var firstSellOfTable = table.querySelector('td');
console.log(firstSellOfTable);

var secondForm = doc.getElementsByTagName('form');
secondForm = secondForm[1];
console.log(secondForm);

var searchForm = doc.getElementsByName('search');
console.log(searchForm[0]);

var inputInSearchForm = searchForm[0].getElementsByTagName('input');
console.log(inputInSearchForm[0]);

var infoElement = doc.getElementsByName('info[0]');
console.log(infoElement);

var infoElementInForm = secondForm.querySelector('td>input');
console.log(infoElementInForm);

//to create table 10х10 by javascript

var tableCreate = doc.createElement('table');
var tableCreateInBody = doc.body.appendChild(tableCreate);

for (let i = 0; i < 10; i++) {
  var tr = doc.createElement('tr');
  tr = tableCreateInBody.appendChild(tr);
  for (let j = 0; j < 10; j++) {
    var td = doc.createElement('td');
    tr.appendChild(td).innerText = ''+ i + j;
  }
}
