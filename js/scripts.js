Function newPizza(totalCost, size, ) {
  this.totalCost = totalCost;
  this.size = size;
  this.toppings = [];
}





newPizza.prototype.pepperoni = function(pizza){
  (this.toppings).push(pepperoni);
  this.totalCost + .6;
}
