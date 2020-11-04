$(function(){
    var top=$('#particle1').offset().top;
    $(window).scroll(function(){
        var roll = $(this).scrollTop();
        var height = document.documentElement.scrollHeight;
        var view = window.innerHeight;
        $('#particle1').css('top',roll/7);
        $('#particle2').css('top',roll/11);

        if(roll <= (height-view*5)){
            $('#right_side').html('<img src="img/spring_r.jpg">');
            $('#left_side').html('<img src="img/spring_l.jpg">');
            $('#particle1').html('<img src="img/sakura_fubuki.png">');
            $('#particle2').html('<img src="img/sakura_fubuki.png">'); 
        }
        if(roll > height-view*5){
            $('#right_side').html('<img src="img/summer__r.jpg">');
            $('#left_side').html('<img src="img/summer__l.jpg">');
            $('#particle1').html('<img src="img/himawari.png">');
            $('#particle2').html('<img src="img/himawari.png">');
        }
        /*if(roll>height-view-100){
            $('#hist1').css('color','red');
            $('#hist2').css('color','red');
            $('.sticky_container').css('background-image','url("img/haikei_dark.png")');
            $('.sticky').css('background','rgba(255,255,255,0)');
            $('#title').html('<img src="img/logo_blood_more.png" id="img">')
        }*/

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
});