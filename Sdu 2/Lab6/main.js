$(document).ready(function(){
    $("#assort").click(function(){
    $("#models").show();
    $("#models2").hide();
    $("#models").animate({left: '+=450px', opacity: '1'}, 700);
   }) 
   $("#contact").click(function(){
   $("#models").hide();
    $("#models2").hide();
    $(".lorem").hide();
    $(".registration").show();
   })
   $("#submit").click(function(){
      $(".registration").hide();
   })
 });

 function load() {
 	$("#models2").animate({left: '+=580px', opacity: '1'}, 900);
    $("#models").hide();
    $(".lorem").animate({opacity: '1'}, 900);
    $(".registration").hide();
 }
 function font_bigger(element) {
	element.style.fontSize = "24px";
}
function font_smaller(element) {
	element.style.fontSize = "21px";
}
