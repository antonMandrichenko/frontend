function Basket(basketList) {
  this.list = basketList;
  this.init = function () {

  }
}


var basket = localStorage.getItem('basket');

function createBasketList(list) {
  var basketList = document.querySelector('.productList');
  list.forEach(function (item) {
    var wrapper = document.createElement('div');
    wrapper.className = 'itemWrapper';

    var img = document.createElement('img');
    img.setAttribute('src', item.image);

    var span = document.createElement('span');
    span.innerHTML = item.price;

    var buuton = document.createElement('button');
    buuton.innerHTML = 'Delete';

    wrapper.appendChild(img);
    wrapper.appendChild(span);
    wrapper.appendChild(buuton);

    basketList.appendChild(wrapper);
  });
  
}

if (basket) {
  alert ("basket is here")
} else {
  alert ("basket is empty")
}
