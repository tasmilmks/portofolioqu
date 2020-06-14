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