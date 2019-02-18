'use strict';

function VigenerCipher() {
  var doc = document;
  var input = doc.createElement('textarea');
  var inputForSecretWord = doc.createElement('input');
  var button = doc.createElement('input');
  var form = doc.createElement('form');
  var alf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var arrOfCode;

  inputForSecretWord.type = 'text';
  button.type = 'button';
  button.value = 'click';
  doc.body.appendChild(input);
  doc.body.appendChild(inputForSecretWord);
  doc.body.appendChild(button);

  this.createForm = function () {
    var divRoot = doc.getElementById('root'),
      h2 = doc.createElement('h2'),
      divRow1 = doc.createElement('div'),
      divRow2 = doc.createElement('div'),
      divRow3 = doc.createElement('div'),
      divCol1 = doc.createElement('div'),
      divCol2 = doc.createElement('div'),
      divCol3 = doc.createElement('div'),
      label1 = doc.createElement('label'),
      label2 = doc.createElement('label');

    h2.classList.add('title');
    divRow1.classList.add('form-group', 'row');
    divRow2.classList.add('form-group', 'row');
    divRow3.classList.add('form-group', 'row');
    label1.classList.add('col-sm-2', 'col-form-label');
    label2.classList.add('col-sm-2', 'col-form-label');
    divCol1.classList.add('col-sm-10');
    divCol2.classList.add('col-sm-10');
    divCol3.classList.add('col-sm-10');
    input.classList.add('form-control');
    inputForSecretWord.classList.add('form-control');
    button.classList.add('btn', 'btn-primary');
    label1.innerHTML = 'Text:';
    label2.innerHTML = 'Key:';
    button.value = 'Calculation';
    input.placeholder = 'Enter text for coding...';
    inputForSecretWord.placeholder = 'Input key ...';
    h2.innerHTML = 'Vigener Cipher';
    divRoot.appendChild(form);
    form.appendChild(h2);
    form.appendChild(divRow1);
    form.appendChild(divRow2);
    form.appendChild(divRow3);
    divRow1.appendChild(label1);
    divRow2.appendChild(label2);
    divRow3.appendChild(divCol3);
    divRow1.appendChild(divCol1);
    divRow2.appendChild(divCol2);
    divCol1.appendChild(input);
    divCol2.appendChild(inputForSecretWord);
    divCol3.appendChild(button);
  };

  this.createForm();

  this.codeWords = function(str) {
    let arr = Array.from(str.toLowerCase()).map(function (item) {
      item = alf.indexOf(item);
      return item;
    });
    return arr;
  };

  this.showResults = function() {
    var strFirst = input.value;
    var strKey = inputForSecretWord.value;
    var arrOfFirst = this.codeWords(strFirst);
    var arrOfSecretKey = this.codeWords(strKey);
    var countSpaces = 0;
    //array with code's number
    arrOfCode = arrOfFirst.map( (item, i) => {
      if (item === -1) {
        countSpaces++;
        return item = -1;
      }
      var koef = Math.floor((i - countSpaces) / arrOfSecretKey.length);
      item += arrOfSecretKey[i - arrOfSecretKey.length*koef - countSpaces];
      if (item >= alf.length) item -= alf.length;
      return item;
    });
    //array with code's chars
    var newResultsArr = arrOfCode.map((item)=> item = alf[item]);
    var stringResults1 = '';
    newResultsArr.forEach((item) => {
      item === undefined ? stringResults1 += ' ' : stringResults1 += item;
    });
    //transcript
    var countSpaces2 = 0;
    var transcriptArray = arrOfCode.map((item, i) => {
      if (item === -1) {
        countSpaces2++;
        return item = undefined;
      }
      var koef = Math.floor((i - countSpaces2) / arrOfSecretKey.length);
      item -= arrOfSecretKey[i - arrOfSecretKey.length*koef - countSpaces2];
      if (item < 0) item += alf.length;
      return item = alf[item];
    });
    var stringResults2 = '';
    transcriptArray.forEach((item) => {
      item === undefined ? stringResults2 += ' ' : stringResults2 += item;
    });

    var divResult = doc.createElement('div');
    divResult.classList.add('alert', 'alert-primary');
    divResult.innerHTML = 'Source text: "' + strFirst + '" , cipter text: "' + stringResults1 + '" , descripter' +
      ' text: "' + stringResults2 + '"';
    form.appendChild(divResult);
  };

  button.onclick = function () {
    this.showResults();
  }.bind(this);

}

var view = new VigenerCipher();
