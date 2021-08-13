$(function (){
    $('.h_fixed > div.menu_icon').click(function(){
        $(this).children().toggleClass('on');
        $('header > nav').toggleClass('on');
    });

    
   $('.dots > li').click(function(){
       $('.dots > li').removeClass('on');
       $(this).addClass('on');
       var idx = $(this).index()
       $('.video_title > li').removeClass('on');
       $('.video_title > li').eq(idx).addClass('on');
       $('.video > li').removeClass('on');
       $('.video > li').eq(idx).addClass('on');
   });

   $('.tab_list > li').click(function(){
       $('.tab_list > li').removeClass('on');
       $(this).addClass('on');
       var idx = $(this).index();
       $('.tab_cont > li').removeClass('on');
       $('.tab_cont > li').eq(idx).addClass('on');
   });

});

$(function(){
    // $(window).scroll(function(){
    //     var window_scroll = $(window).scrollTop();
    //     $('section').each(function(){
    //         var scroll_section = $(this).offset().top;
    //         if(window_scroll > scroll_section - 400) {
    //             $(this).childeren('article').addClass('on');
    //         }
    //         if(window_scroll < 100) {
    //             $('section').childeren('article').removeClass('on');
    //         }
    //     });
    // });
    // $(window).scroll(function(){
    //     var scroll_window = $(window).scrollTop() + $(window).height();
    //     var scroll_this = $(this).offset().top + $(this).height();
    // });
        $(window).scroll(function(){
            var scroll_window = $(window).scrollTop();

            //console.log(scroll_window);
            //console.log(scroll_this - 400);
            $('section').each(function(){
                var scroll_this = $(this).offset().top;
                if(scroll_window > scroll_this - 450) {
                    $(this).addClass('on');
                }
                if(scroll_window < 200) {
                    $('section').removeClass('on');
                }
            });
            
        });
});

