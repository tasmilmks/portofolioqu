//event pada saat di klik
$//('.page-scroll').on('click',function(event){
    //console.log('ok')
    //ambil isi href
    //var tujuan=$(this).attr('href');
    //console.log(tujuan)
    //tangkap elemen
    //var elementujuan=$(tujuan);
    //console.log(elementujuan);
    //console.log(elementujuan.offset().top);
    //pindahkan scroll top
   // console.log($('html, body').scrollTop());
    //pindahkan scrollTop 
    //$('body').scrollTop(700);
    //$('body').scrollTop(elementujuan.offset().top);
    //event.preventDefault();
//});

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-50
        }, 1250,'easeInOutExpo');
    }
//menggunakan easing jquery
});

// parralax
// about
$(window).on('load',function(){
    $('.pKiri').addClass('pmuncul');
    $('.pKanan').addClass('pmuncul');
});
$(window).scroll(function(){
    var wscroll=$(this).scrollTop();
    // console.log(wscroll);
    // jumbotron
    $('.jumbotron img').css({
        'transform':'translate(0px,'+wscroll/4+'%)'
    });

    $('.jumbotron h1').css({
        'transform':'translate(0px,'+wscroll/2+'%)'
    });

    $('.jumbotron p').css({
        'transform':'translate(0px,'+wscroll/1.2+'%)'
    });

    // Portfolio
    if(wscroll >$('.portfolio').offset().top-250){
        // console.log('ok');
       $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');  
            },300*(i+1));
                 
       });
    }

});
// $('.portfolio .thumbnail').addClass('muncul');