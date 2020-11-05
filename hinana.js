$(function(){
    var top=$('#particle1').offset().top;
    $(window).scroll(function(){
        var roll = $(this).scrollTop();
        var height = document.documentElement.scrollHeight;
        var view = window.innerHeight;
        $('#particle1').css('top',roll/6);
        $('#particle2').css('top',roll/8);
        if(roll>height-view-100){
            $('#image').css('color','red');
            $('#intoro').css('color','red');
            $('.sticky_container').css('background-image','url("img/haikei_dark.png")');
            $('.sticky').css('background','rgba(255,255,255,0)');
            $('#title').html('<img src="img/logo_blood_more.png" id="img">');
		$('#movie-page').html('<iframe id="movie" src="https://www.youtube.com/embed/zYpt3dPXyNQ?" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }

        });
    

    setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start p').fadeOut(500);
    },2500); //2.5秒後にロゴをフェードアウト！
    setTimeout(function(){
        $('.start').fadeOut(500);
    },3000)
	
	var audioBtnM = $('#button_stop');
	var audioWrapM = $('#madoka');
	var audioBtnH = $('#button_start');
	var audioWrapH = $('#hinana');
	
	var audio1 =document.getElementById('audio1');
	var audio2 =document.getElementById('audio2');
	
	audio2.addClass('play');
	
	audioBtnM.on('click', function () {
    if( audioWrapM.hasClass('play') || audioWrapH.hasClass('play')) {
      audio1.pause();
      audioWrapH.removeClass('play');
	audioWrapM.removeClass('play');    
    } 
  });
	
	audioBtnH.on('click', function () {
    if( audioWrapM.hasClass('play') || audioWrapH.hasClass('play')) {

    } else {
      audio2.play();
      audioWrapM.addClass('play');
	audioWrapH.addClass('play');
    }
  });

});
