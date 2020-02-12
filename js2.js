$(document).ready(function() { 
  $(".bl-add").click(function() { 
      $(this).fadeOut(); 
  });
  
  
  $(".bl-minus").click (function() { 
    var i = parseInt($(".bl-label").text())-1;
    $(".bl-label").text(i);
  });
  $(".bl-cross").click(function(){
    remove(this);
  });
  $(".bl-add").click(function(){

}); 
function remove(button){
  var name = $(button).closest(".bl-product").find(".nameOfRow ").text();
  $(button).closest(".bl-product").remove();
}
