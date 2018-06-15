//backend
function Pizza(toppings,size){
  this.toppings = toppings
  this.size = size
  this.price = 20
};

//fronend
$(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputtedToppings =  $("#toppings").val()
    var inuputtedSize =  $("#size").val()
    console.log(inputtedToppings)
    console.log(inuputtedSize)
  });
});
