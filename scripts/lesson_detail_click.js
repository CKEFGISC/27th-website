var d1 = true;
$(".down1").click(function(){
  if(d1 == true){
    $(".down1").html("△");
    $(".slides1").css("height", "40vw");
    d1 = false;
  }
  else{
    $(".down1").html("▽");
    $(".slides1").css("height", "0");
    d1 = true;
  }
});

var d2 = true;
$(".down2").click(function(){
  if(d1 == true){
    $(".down2").html("△");
    $(".slides2").css("height", "40vw");
    d1 = false;
  }
  else{
    $(".down2").html("▽");
    $(".slides2").css("height", "0");
    d2 = true;
  }
});