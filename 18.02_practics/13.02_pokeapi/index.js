"use strict";

function ListOfPokemons() {

  var doc = document;
  var divConteiner = doc.getElementById('root');
  var offsetCount = 0;
  var limitCount = 10;

  var createDomList = function (limit) {
    var h1 = doc.createElement('h1');
    var buttonPrev = doc.createElement('button');
    var buttonNext = doc.createElement('button');
    h1.classList.add('title');
    divConteiner.classList.add('container');
    buttonPrev.classList.add('btn', 'btn-outline-primary');
    buttonNext.classList.add('btn', 'btn-outline-primary');
    h1.innerHTML = 'Pokemons from API';
    buttonPrev.innerHTML = 'Prev';
    buttonNext.innerHTML = 'Next';
    divConteiner.appendChild(h1);

    for (var i = 0; i < limit; i++) {
      var divCard = doc.createElement('div');
      var divHeader = doc.createElement('div');
      var divBody = doc.createElement('div');
      var blockquoteCard = doc.createElement('blockquote');
      var pCard = doc.createElement('p');
      divCard.classList.add('card');
      divHeader.classList.add('card-header');
      divBody.classList.add('card-body');
      blockquoteCard.classList.add('blockquote', 'mb-0');

      divConteiner.appendChild(divCard);
      divCard.appendChild(divHeader);
      divCard.appendChild(divBody);
      divBody.appendChild(blockquoteCard);
      blockquoteCard.appendChild(pCard);
    }
    divConteiner.appendChild(buttonPrev);
    divConteiner.appendChild(buttonNext);
  };

  createDomList(limitCount);

  var divCardHeaderInDom = doc.getElementsByClassName('card-header');
  var pInDom = doc.querySelectorAll('.blockquote >p');
  var divCard = doc.getElementsByClassName('card');


  this.createList = function (obj) {
    console.dir(obj);
    obj.results.forEach(function (item, i) {
      divCardHeaderInDom[i].innerHTML = item.name;
      pInDom[i].innerHTML = item.url;
    }, this)
  };

  this.getPokemons = function (offset) {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=' + (offset || 0) + '&limit=' + limitCount)
      .then(function (result) {
        return result.json();
      })
      .then(function (pokemons) {
        this.createList(pokemons);
        var butPrev = doc.getElementsByClassName('btn');
        pokemons.previous === null ? butPrev[0].disabled = true : butPrev[0].disabled = false;
      }.bind(this))
  };

  this.getPokemons(offsetCount);

  this.showPokemon = function(e) {
    var target = e.target;
    while (target.className !== 'card') {
      target = target.parentNode;
    }
    var url = target.childNodes[1].childNodes[0].childNodes[0].innerHTML;
    var parseUrl = url.split('/');
    var id = parseUrl[parseUrl.length - 2];
    window.location.assign('./pokemon.html#' + id);
  };

  doc.body.addEventListener('click', function (e) {
    if (e.target.type === 'submit') {
      e.target.textContent === 'Next' ? console.log(offsetCount += 10) : console.log(offsetCount -= 10) ;
      this.getPokemons(offsetCount);
    }
  }.bind(this));

  Array.from(divCard).forEach(function (item) {
    item.addEventListener('click', this.showPokemon);
  }, this);
}

var list1 = new ListOfPokemons();
