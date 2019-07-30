$(document).ready(function() {
  $(".image1").click(function(){
    $(".image1").toggle();
    $(".image1-hidden").toggle();
  });
  $(".image1-hidden").click(function(){
    $(".image1-hidden").toggle();
    $(".image1").toggle();
  })
  $(".image2").click(function(){
    $(".image2").toggle();
    $(".image2-hidden").toggle();
})
  $(".image2-hidden").click(function (){
    $(".image2-hidden").toggle();
    $(".image2").toggle();

  })
  $(".image3").click(function(){
    $(".image3-hidden").toggle();
    $(".image3").toggle();
})
  $(".image3-hidden").click(function (){
    $(".image3-hidden").toggle();
    $(".image3").toggle();


  })




});
