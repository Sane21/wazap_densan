$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop;
  console.log(bgPosition);

    $('#box4').css('background-position', 'center top +'+ bgPosition/2 + 'px' + ',center top +'+ bgPosition/5 + 'px' + ',center top +'+ bgPosition/8 + 'px');
    $('#box6').css('background-position', 'center top +'+ bgPosition/2 + 'px' + ',center top +'+ bgPosition/5 + 'px' + ',center top +'+ bgPosition/8 + 'px');
    $('#box5').css('background-position', 'center top +'+ bgPosition/2 + 'px' + ',center top +'+ bgPosition/5 + 'px' + ',center top +'+ bgPosition/8 + 'px');
    $('#box7').css('background-position', 'center top +'+ bgPosition/2 + 'px' + ',center top +'+ bgPosition/5 + 'px' + ',center top +'+ bgPosition/8 + 'px');
    if(bgPosition >1700){
      $("#twitter_panel:not(:animated)").fadeIn(500);
    }
    if(bgPosition >2000){
      $("#news_panel:not(:animated)").fadeIn(500);
    }
});

$(window).on("load",function(){
       $(".content").mCustomScrollbar();
       $("#twitter_panel").css('display', 'none');
       $("#news_panel").css('display', 'none');
});
