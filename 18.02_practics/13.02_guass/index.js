'use strict';

function GaussEquation() {
  var doc = document,
    divRoot = doc.getElementById('root'),
    divShow = doc.getElementById('show'),
    arr = [],
    that = this;

  this.showCalculation = function (result, string) {
    var divForShow = doc.createElement('div'),
      h3 = doc.createElement('h3');
    divForShow.classList.add('alert', 'alert-primary');
    h3.classList.add('title');
    h3.innerHTML = 'Сalculation order: ' + string;
    divShow.appendChild(h3);
    if (result !== 0) {
      divShow.appendChild(divForShow);
      result.forEach((item) => {
        var divParent = doc.createElement('div');
        divParent.classList.add('parent', 'row');
        divForShow.appendChild(divParent);
        item.forEach((value) => {
          var divChild = doc.createElement('div');
          divChild.classList.add('col-1', 'child');
          divChild.innerHTML = value;
          divParent.appendChild(divChild);
        })
      })
    }
  };

  this.solutionEquation = function (arr) {
    var result = '';
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) this.showCalculation (arr, 'Initial matrix');
      if (arr[i].every((item) => item === 0) || arr[i][i] === 0) {
        if (i === arr.length-1) continue;
        var arr2 = arr[i+1].splice(0, arr[i+1].length);
        arr.splice(i+1, 1);
        arr.splice(i, 0, arr2);
        this.showCalculation (arr, `${i+1} row change by ${i+2}`);
      }
      for (let j = 0; j < arr.length; j++) {
        if (j < i) continue;
        let key1 = arr[i][i];
        let key2 = arr[j][i];
        for (let k = 0; k <= arr.length; k++) {
          if (i === j) {
            arr[j][k] = arr[j][k] / key1;
          } else {
            arr[j][k] = arr[j][k] - arr[i][k]*key2;
          }
        }
        this.showCalculation (arr, `Change ${i+1} column`);
      }
      for (let j = i-1; j >= 0; j--) {
        if (i === 0) continue;
        let key2 = arr[j][i];
        for (let k = 0; k <= arr.length; k++) {
          arr[j][k] = arr[j][k] - arr[i][k]*key2;
        }
        this.showCalculation (arr, `Change ${i+1} column under 0`);
      }
    }
    this.showCalculation (arr, `Final matrix`);

    arr.forEach((item, i) => {
      item.forEach((value, j, arrInArr) => {
        if (!item.every((list) => list === 0)) {
          if (i === j) result += ` x${i+1} = ${arrInArr[arrInArr.length-1]}`;
        } else {
          result = `There are many solutions`
        }
      })
    });
    this.showCalculation (0, result);
    return arr;
  };

  this.createSelect = function () {
    var divForm = doc.createElement('div'),
      h2 = doc.createElement('h2'),
      label = doc.createElement('label'),
      select = doc.createElement('select');
    divForm.classList.add('form-group');
    select.classList.add('form-control');
    h2.classList.add('title');
    label.innerHTML = 'How many unknown values in the system:';
    h2.innerHTML = 'Linear equations by the Gauss method';
    divRoot.appendChild(divForm);
    divForm.appendChild(h2);
    divForm.appendChild(label);
    divForm.appendChild(select);

    for (var i = 2; i < 11; i++) {
      var option = doc.createElement('option');
      option.innerHTML = i;
      select.appendChild(option);
    }

    select.onchange = function (e) {
      divShow.innerHTML = '';
      this.removeElement();
      this.createInputs(+e.target.value);
    }.bind(this);
  };

  this.createArray = function (length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(new Array(length+1).fill(0));
    }
    return arr;
  };

  this.createInputs = function (count) {
    var table = doc.createElement('table'),
      thead = doc.createElement('thead'),
      tbody = doc.createElement('tbody'),
      button = doc.createElement('button');
    table.classList.add('table');
    button.classList.add('btn', 'btn-primary');
    button.innerHTML = 'Сalculation';
    divRoot.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(button);

    for (var i = 0; i <= count; i++) {
      var trHead = doc.createElement('tr'),
        trBody = doc.createElement('tr');
      i === 0 ? thead.appendChild(trHead) : tbody.appendChild(trBody);
      for (var j = 0; j < count + 1; j++) {
        if (i === 0) {
          var th = doc.createElement('th');
          th.setAttribute('scope', 'col');
          trHead.appendChild(th);
          j === count ?  th.innerHTML = `Result` :  th.innerHTML = `X ${j+1}`;
        }
        var td = doc.createElement('td'),
          input = doc.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.setAttribute('data-count', `${i-1}${j}`);
        // input.value = 0;
        trBody.appendChild(td);
        td.appendChild(input);
      }
    }

    arr = that.createArray(count);

    table.onchange = function (e) {
      var target = e.target;
      if (target.nodeName === 'INPUT') {
        var count = target.dataset.count;
        arr[+count.slice(0, 1)].splice(+count.slice(1), 1, +target.value);
      }
    };

    table.addEventListener('keypress', function (e) {
      var num = /[0-9,\.\-]/;
      if (!num.test(e.key)) {
        e.returnValue = false;
      }
    });

    button.onclick = function () {
      divShow.innerHTML = '';
      this.solutionEquation(arr);
    }.bind(this);
  };

  this.removeElement = function () {
    var table = doc.getElementsByClassName('table');
    if (!table) return;
    table[0].remove();
  };

  this.createSelect();
  this.createInputs(2);
}

var view = new GaussEquation();
