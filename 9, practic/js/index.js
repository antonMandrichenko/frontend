function Application(list) {

  this.list = list;
  this.generateProductList = function () {
    var productList = document.querySelector('.productList');
    this.list.forEach(function (item) {
      this.createProductItem(item, productList);
    }.bind(this))
  };
  this.createProductItem = function (item, productList) {
    var wrapper = document.createElement('div');
    wrapper.className = 'itemWrapper';

    var img = document.createElement('img');
    img.setAttribute('src', item.image);

    var description = document.createElement('p');
    description.innerHTML = item.description;

    var span = document.createElement('span');
    span.innerHTML = item.price;

    var button = document.createElement("button");
    button.innerHTML = "add to bascet";

    button.onclick = function(){
      localStorage.clear();
      var basket = localStorage.getItem('basket')
      if (basket) {
        var currentBasket = JSON.parse (basket);
        currentBasket.push(item);
        localStorage.setItem('basket',JSON.stringify(currentBasket));
      } else {
        var newBasket = [];
        newBasket.push(item);
        localStorage.setItem('basket',JSON.stringify(newBasket);
      }

      // console.log(item.id);
    }

    wrapper.appendChild(img);
    wrapper.appendChild(description);
    wrapper.appendChild(span);
    wrapper.appendChild(button);

    productList.appendChild(wrapper);
  };

  this.init = function () {
    console.log(this.list);
  }
}


fetch('data.json')
  .then(function (result) {
    return result.json();
  })
.then(function (result) {
  var app = new Application(result);
  // app.init();
  app.generateProductList();
});

