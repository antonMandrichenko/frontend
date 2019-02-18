'use strict';

function CreatePokemon() {
  var doc = document;
  var divConteiner = doc.getElementById('root');
  var id = window.location.hash.slice(1);


  this.getPokemon = function () {
    var url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url + id + '/')
      .then(function (result) {
        return result.json();
      })
      .then(function (pokemon) {
        this.getSpecies (pokemon);
        // console.log(pokemon);
      }.bind(this))
  };

  this.getSpecies = function (obj) {
    fetch(obj.species.url)
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        this.createView(obj, result);
      }.bind(this))
  };

  this.createView = function (pokemon, species) {
    var h1 = doc.createElement('h1');
    h1.classList.add('title');
    h1.innerHTML = pokemon.name.toUpperCase();
    divConteiner.appendChild(h1);
    var divRow = doc.createElement('div');
    divRow.classList.add('row');
    divConteiner.appendChild(divRow);
    var divCol = doc.createElement('div');
    divCol.classList.add('col-6');
    divRow.appendChild(divCol);
    var image = doc.createElement('img');
    image.src = pokemon.sprites.front_default;
    divCol.appendChild(image);
    var image2 = doc.createElement('img');
    image2.src = pokemon.sprites.back_default;
    divCol.appendChild(image2);
    var image3 = doc.createElement('img');
    image3.src = pokemon.sprites.front_shiny;
    divCol.appendChild(image3);
    var image4 = doc.createElement('img');
    image4.src = pokemon.sprites.back_shiny;
    divCol.appendChild(image4);
    var divCol2 = doc.createElement('div');
    divCol2.classList.add('col-6');
    divRow.appendChild(divCol2);
    var ulList = doc.createElement('ul');
    ulList.classList.add('list-group');
    divCol2.appendChild(ulList);
    var count = 6;
    for (var i = 0; i < count; i++) {
      var li = doc.createElement('li');
      li.classList.add('list-group-item');
      switch (i) {
        case 0:
          li.innerHTML = 'id: ' + pokemon.id;
          break;
        case 1:
          li.innerHTML = 'weight: ' + pokemon.weight;
          break;
        case 2:
          li.innerHTML = 'order: ' + pokemon.order;
          break;
        case 3:
          li.innerHTML = 'height: ' + pokemon.height;
          break;
        case 4:
          li.innerHTML = 'base experience: ' + pokemon.base_experience;
          break;
        case 5:
          li.innerHTML = 'base happiness: ' + species.base_happiness;
          break;
      }
      ulList.appendChild(li);
    }
  };
  this.getPokemon();
}

var pokemon = new CreatePokemon();
