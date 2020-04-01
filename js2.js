window.onload = function () {

  //var item_template = $('.bl-product-container').outerHTML;
  //var node = $(item_template);
  console.log(">>>>>>")
  addItem("Помідори",2);
  addItem("Печиво",3);
  addItem("Сир",4);
  let idCounter = 5;

  
  

  

  //console.log(">>>>", node.find("button.bl-plus"));
  //node.find("button.bl-plus")[0];
  



  $(".bl-add").click(function () {
    let product_on_the_left = $("#1").clone(true);
    product_on_the_left.find(".nameOfRow").find("input").val($("#inp").val());
    $(".bl-container").append(product_on_the_left);
    product_on_the_left.slideDown();
    product_on_the_left.css("display", "flex");

    let product_on_the_right = $("#1buy").clone(true);
    product_on_the_right.find("div").html($('#inp').val());
    product_on_the_right.css("display", "flex");
    product_on_the_right.attr("id", idCounter + "buy");

    idCounter++;

    product_on_the_right.appendTo("#left");


    $("#inp").val("");
    
  });
  $(".bl-cross").on('click', function () {
    //   //alert('Clicked');
       remove(this);
    });

  






function loadContent() {
  $('.bl-product').load(toLoad, '', show)
}
function remove(button) {
  //var name = $(button).closest(".bl-product").find(".nameOfRow ").text();
  $(button).closest(".bl-product-container-list").remove();
}
// function add(){
//   $(".bl-container".append(document.show.RowTemplate))
// }
// function plusMinusCounter(button) {
//   var span = $("#count");
//   var plus=$(".bl-plus");
//   if ($(button).hasClass('.bl-plus'))
//     span.val(parseInt(span.val()) + 1);
//     if ($(button).hasClass('.bl-minus')
//    (span.val() >= 1))
//     span.val(parseInt(span.val()) - 1);

// }
function plusMoreProduct(button) {
  var plus = $(button).siblings().last().text();
  if (plus < 2) {
      $(button).siblings().first().attr("disabled", false);
  }
  plus++;
  $(button).siblings().last().text(plus);
  $("#" + $(button).parent().parent().attr("id") + "buy").find("span").html(parseInt($(button).siblings().last().text(plus)));
  // $(".nameOfBought:8contains(" + $(button).closest('#1').find(".nameOfRow").text() + ")")
  //     .find('#count').text(plus);

}
function minusProduct(button) {
  var elements =  $(button).next("#count").text();
  elements--;
  if (elements < 2) {
      $(button).attr("disabled",true);
     
  }
  
  
  $(button).next().text(elements);
  $(".nameOfBought:contains(" + $(button).closest('#1').find(".nameOfRow ").text() + ")")
      .find("#count").text(elements);
}
// function createRow() {
//   var item_template = $('.template').outerHTML;
//   //var node = $(item_template);
//   $(".bl-add").click(function () {
//     var node = $(item_template);
//     node.find("input").val($("#inp").val());
//   $(".bl-container").append(node);});
 

// }
function addItem(name,id){
  var product_on_the_left = $("#1").clone(true);
  product_on_the_left.find(".nameOfRow").find("input").val(name);
  $(".bl-container").append(product_on_the_left);
  product_on_the_left.slideDown();
  product_on_the_left.css("display", "flex");

  let product_on_the_right = $("#1buy").clone(true);
        product_on_the_right.find("div").html(name);
        product_on_the_right.css("display", "flex");
        product_on_the_right.attr("id", id + "buy");
        $("#left").append(product_on_the_right);
        
        


}
$(".bl-plus").click(function () {
  plusMoreProduct(this);
});
$(".bl-minus").click(function () {
           minusProduct(this);
       });

} 
  