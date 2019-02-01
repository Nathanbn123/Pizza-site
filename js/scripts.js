function newPizza() {
  this.totalCost = 0;
  this.size = "";
  this.toppings = [];
}

// newPizza.prototype.addPepperoni = function(pizza){
  //   (this.toppings).push("pepperoni");
  //   (this.totalCost) += .3;
  // }
  //
  // newPizza.prototype.addOlives = function(pizza){
    //   (this.toppings).push("olives");
    //   (this.totalCost) += .2;
    // }
    //
    // newPizza.prototype.moreCheese = function(pizza){
      //   (this.toppings).push("extraCheese");
      //   (this.totalCost) += .1;
      // }


newPizza.prototype.calcSizePrice = function(pizza){
  if (this.size == ("small")) {
    (this.totalCost) += 2;
  } else if (this.size == ("medium")){
    this.totalCost += 3;
  } else if   (this.size == ("large")){
  this.totalCost += 4;
  }
  return this.totalCost
}

newPizza.prototype.calcToppingPrice = function(input){
    if (input.includes('pepperoni')) {
    (this.totalcost) +=.6
  } if (input.includes('olives')) {
  (this.totalcost) +=.4
} if (input.includes('moCheese')) {
(this.totalcost) +=.2
}
}

function submitSize(){

}

function submitToppings(input){
  var pizzoArray = [input]
  console.log(pizzoArray)
  var pizzo = new newPizza;  
  var topPrice = pizzo.calcToppingPrice;
  }



$(document).ready(function() {
  $("form.pizza-order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();


    var toppingArray = []
    $("input:checkbox[name=topping]:checked").map(function(toppings){
      toppingArray[toppings] = $(this).val();
    });
      var toppingPrice = submitToppings(toppingArray);
      alert(toppingPrice)
 });
});
