function newPizza(totalCost, size, toppings) {
  this.totalCost = totalCost;
  this.size = size;
  this.toppings = toppings;
}

newPizza.prototype.calcSizePrice = function(){
  if (this.size == ("small")) {
    (this.totalCost) += 3;
  } else if (this.size == ("medium")){
    this.totalCost += 4;
  } else if   (this.size == ("large")){
    this.totalCost += 5;
  }
  return this.totalCost
}

newPizza.prototype.calcToppingPrice = function(){
  if (this.toppings.includes('pepperoni')) {
    (this.totalCost) +=.6
  } if (this.toppings.includes('olives')) {
    (this.totalCost) +=.4
  } if (this.toppings.includes('moCheese')) {
    (this.totalCost) +=.2
  }
  return this.totalCost
}


$(document).ready(function() {
  $("form.pizza-order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var toppingArray = []
    $("input:checkbox[name=topping]:checked").map(function(toppings){
      toppingArray[toppings] = $(this).val();
    });
    var pizzo = new newPizza(0, size, toppingArray )
    var toppingNo = toppingArray.length
    console.log(pizzo)
    pizzo.calcSizePrice();
    console.log(pizzo)
    pizzo.calcToppingPrice();
    var finalCost = pizzo.totalCost.toFixed(2);
    console.log(pizzo)
    $('#output').show();
    $('#pizza-size').text(pizzo.size + " ");
    $('#topping-no').text(toppingNo);
    $('#pizza-cost').text(finalCost);
 });
});
