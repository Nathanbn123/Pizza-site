function newPizza() {
  this.totalCost = 0;
  this.size = ;
  this.toppings = [];
}



newPizza.prototype.selectSmall = function(){
  this.size = ("small")
  this.totalCost += 2;
}

newPizza.prototype.selectMedium = function(){
  this.size = ("medium")
  this.totalCost += 3;
}

newPizza.prototype.selectLarge = function(){
  this.size = ("large")
  this.totalCost += 4;
}


newPizza.prototype.addPepperoni = function(){
  (this.toppings).push("pepperoni");
  (this.totalCost) += .6;
}

newPizza.prototype.addOlives = function(){
  (this.toppings).push("olives");
  (this.totalCost) += .2;
}

newPizza.prototype.moreCheese = function(){
  (this.toppings).push("extraCheese");
  (this.totalCost) += .3;
}
