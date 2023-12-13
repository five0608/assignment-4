$(function(){
    var sliderCount=$(".slide").length;
    var bankslider=0;
    var slidePosition;
    setInterval(function(){
        if(bankslider<sliderCount-1){
            bankslider++;
        }else{
            bankslider=0;
        }
        slidePosition=bankslider*(-1200)+"px"
        $(".sliders").animate({ left: slidePosition},400);
    },3000);
})