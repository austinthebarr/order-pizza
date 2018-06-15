//backend
function Pizza(toppings,size){
  this.toppings = toppings
  this.size = size
  this.price = 20
};

Pizza.prototype.priceCheck = function(){
  if(this.size === "20 inch" && this.toppings === "Pepperoni" || this.toppings === "Spinach"){
    this.price += 5;
  }else if(this.size === "20 inch" && this.toppings === "Skittles" || this.toppings === "Penutbutter Cups"){
    this.price += 10;
  }else if(this.toppings === "Pepperoni" || this.toppings === "Spinach"){
    this.price -= 10;
  }
}

//fronend
$(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputtedToppings =  $("#toppings").val()
    var inuputtedSize =  $("#size").val()

    newPizza = new Pizza(inputtedToppings, inuputtedSize)
    newPizza.priceCheck()
    console.log(newPizza)
    console.log(inuputtedSize)
  });
});
