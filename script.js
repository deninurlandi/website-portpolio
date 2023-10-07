// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    
    //ambil is href
    var href = $(this).attr('href');
    // console.log(href) //isi atribute href

    // tangkap element ybs
    var elementhref = $(href);
    // console.log(elementhref);

    //ambil jarak elementhref dari posisi tersebut ke atas
    // console.log(elementhref.offset().top);
 
    // console.log($('html,body').scrollTop());

    // pindahkan scroll
    // $('html,body').scrollTop(900);

    // $('html,body').scrollTop(elementhref.offset().top);

    // sintax sebenarnya

    $('html,body').animate({
        scrollTop: elementhref.offset().top - 40
    }, 1000,'easeInOutExpo')

    e.preventDefault();
});


// versi javascript
// const halscroll = document.querySelectorAll('.page-scroll')
// halscroll.forEach(a =>{
//     a.addEventListener('click', function(e){
//         let att = a.getAttribute('href').substring(1);
//         // console.log(att)
//         let targetElement = document.getElementById(att);

//         // console.log(targetElement.offsetTop);

//         window.scrollTo({
//             top: targetElement.offsetTop -40,
//             behavior: 'smooth'
//         });
//         e.preventDefault();
//     })
// })

$(window).on('load', function(){
    $('.awalab').addClass('kiri')
    $('.akhirab').addClass('kanan')
})

// parallax efect
// window.addEventListener('scroll',function(){
//     let wscroll = window.scrollY;
//     console.log(wscroll);
// })



$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    // console.log(wScroll);
    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, ' + wScroll/3.7  +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, ' + wScroll/4.2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, ' + wScroll/4.1 +'%)'
    });
    // akhir jumbotron

    // portpolio
    // if(wScroll > $('.portfolio').offset().top -420){
    //     // $('.thumbnail').addClass('efect');

    //     $('.portfolio .thumbnail').each(function(i){
    //         setTimeout(function(){
    //             $('.portfolio .thumbnail').eq(i).addClass('efect')
    //         },300 * (i+1))
    //     })
    // }

    // versi javascript biasa
    if(wScroll > $('.portfolio').offset().top -420){
    const  thumb = document.querySelectorAll('.thumbnail');
    thumb.forEach((a,b) => {
        setTimeout(() => {
            a.classList.add('efect')
        },300 * (b + 1));
    });
    };
    // akhir portfolio

    // contact
    if(wScroll > $('.contact').offset().top -450){
        $('.getcontact').addClass('tampilcon')
    }
    // akhir contact

});
