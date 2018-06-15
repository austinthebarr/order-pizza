//backend


function Pizza(toppings,size){
  this.toppings = toppings
  this.size = size
  this.price = 20
};

Pizza.prototype.priceCheck = function(){
  if(this.size === "20 inch" && this.toppings === "Pepperoni" || this.size === "20 inch" && this.toppings === "Spinach"){
    this.price += 5;
  }else if(this.size === "20 inch" && this.toppings === "Skittles" || this.toppings === "Fried Chicken"){
    this.price += 10;
  }else if(this.toppings === "Pepperoni" || this.toppings === "Spinach"){
    this.price -= 10;
  }
};


//fronend
$(function(){
  ticket = 0;
  $("#inputForm").submit(function(event){
    event.preventDefault();
    ticket += 1;

    var inputtedToppings =  $("#toppings").val()
    var inuputtedSize =  $("#size").val()

    var newPizza = new Pizza(inputtedToppings, inuputtedSize)
    debugger;
    newPizza.priceCheck()

    var priceString = newPizza.price.toLocaleString('en-US',{style: 'currency', currency: 'USD'});

    $("#hide").show()
    $("#hideThis").show()
    $(".ticketNumber").text(ticket)
    $(".finalPrice").text(priceString)
    $(".finalToppings").text(inputtedToppings)
    $(".finalSize").text(inuputtedSize)

    console.log(newPizza)
    console.log(inuputtedSize)
  });
});
