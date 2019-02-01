function newPizza() {
  this.totalCost = 0;
  this.size = "";
  this.toppings = [];
}



newPizza.prototype.selectSmall = function(pizza){
  this.size = ("small")
}

newPizza.prototype.selectMedium = function(pizza){
  this.size = ("medium")
}

newPizza.prototype.selectLarge = function(pizza){
  this.size = ("large")
}


newPizza.prototype.addPepperoni = function(pizza){
  (this.toppings).push("pepperoni");
  (this.totalCost) += .6;
}

newPizza.prototype.addOlives = function(pizza){
  (this.toppings).push("olives");
  (this.totalCost) += .2;
}

newPizza.prototype.moreCheese = function(pizza){
  (this.toppings).push("extraCheese");
  (this.totalCost) += .3;
}

newPizza.prototype.calcSizePrice = function(pizza){
  if (this.size == ("small")) {
    (this.totalCost) += 2;
  } else if (this.size == ("medium")){
    this.totalCost += 3;
  } else if   (this.size == ("large")){
  this.totalCost += 4;
  }
}

newPizza.prototype.calcToppingPrice = function(pizza){
  var toppingTotal = this.toppings.length
  var toppingPrice = toppingTotal * .2;
  this.totalCost += toppingPrice;
}
