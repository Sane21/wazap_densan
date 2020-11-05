var cnt1 = 0;
var cnt2 = 0;
var cnt3 = 0;
$(function() {
    var rotate = function(logo, angle) {
     logo.css({
     "transform" : "rotate("+angle+"deg)"
     });
    }
    $(window).scroll(function(){
     rotate($("#pic1"), $(window).scrollTop()*0.4+100);
     rotate($("#pic2"), $(window).scrollTop()*-0.5);
     rotate($("#pic3"), $(window).scrollTop()*0.3);
     rotate($("#pic4"), $(window).scrollTop()*0.6);
     rotate($("#pic5"), $(window).scrollTop()*0.5);
     rotate($("#pic6"), $(window).scrollTop()*0.4+100);
     rotate($("#pic7"), $(window).scrollTop()*-0.5);
     rotate($("#pic8"), $(window).scrollTop()*0.3);
     rotate($("#pic9"), $(window).scrollTop()*0.6);
     rotate($("#pic10"), $(window).scrollTop()*0.5);
     $('#pic1').css('top',`${$(window).scrollTop()}px`);
     $('#pic2').css('top',`${$(window).scrollTop()/5+250}px`);
     $('#pic3').css('top',`${$(window).scrollTop()/3+200}px`);
     $('#pic4').css('top',`${$(window).scrollTop()/4+500}px`);
     $('#pic5').css('top',`${$(window).scrollTop()/2+300}px`);
     $('#pic6').css('top',`${$(window).scrollTop()}px`);
     $('#pic7').css('top',`${$(window).scrollTop()/2+250}px`);
     $('#pic8').css('top',`${$(window).scrollTop()/6+500}px`);
     $('#pic9').css('top',`${$(window).scrollTop()/4+400}px`);
     $('#pic10').css('top',`${$(window).scrollTop()/2+600}px`);
     console.log($(window).scrollTop());//スクロール量確認（最大約10000)
     if($(window).scrollTop() < 700){
         $('.side').children('img').attr('src', './ukiwa.png');
         if($(window).scrollTop() < 100){
            $('.side').css({
                'background-color':'rgba(125,188,222)'
            });
            $('.main').css({
               'background-color':'rgba(125,188,222)'
           });
           $('body').css({
               'background-color':'rgba(125,188,222)'
           });
         }else if($(window).scrollTop() < 500){
            $('.side').css({
                'background-color':'rgba(81,168,221)'
            });
            $('.main').css({
               'background-color':'rgba(81,168,221)'
           });
           $('body').css({
               'background-color':'rgba(81,168,221)'
           });
         }else{
            $('.side').css({
                'background-color':'rgba(46,92,110)'
            });
            $('.main').css({
               'background-color':'rgba(46,92,110)'
           });
           $('body').css({
               'background-color':'rgba(46,92,110)'
           });
         }
     }else{
        $('.side').children('img').attr('src', './illustrain01-kouyou02.png');
        $('.side').css({
            'background-color':'rgba(82,67,61)'
        });
        $('.main').css({
           'background-color':'rgba(82,67,61)'
       });
       $('body').css({
           'background-color':'rgba(82,67,61)'
       });
     };
     if($(window).scrollTop()>=0 && $(window).scrollTop() <100 &&cnt1 == 0){
        cnt1 =1; 
        $("#text1 p").show('slow');
     }else if($(window).scrollTop()>=500 && $(window).scrollTop() <600 &&cnt2 == 0){
         cnt2=1;
         $("#text2 p").show('slow');
     }else if($(window).scrollTop()>=700 && $(window).scrollTop() <800 &&cnt3 == 0){
        cnt3 = 1;
        $("#text3 p").show('slow');
        $("#text3 img").show('slow');
        $('#id').css('z-index','10'); 
     }
    });
   });