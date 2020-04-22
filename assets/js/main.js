$(document).ready(function(){
    // WIDGET ANIMATION
    $(window).scroll(() => {
        // console.log($(this).scrollTop());
        var fromTop = $(this).scrollTop();
        var widgetHeight = $('.widgets').height();
        $('.widgets').css('margin-bottom', '-' + fromTop + 'px');
    });


    // BURGER MENU
    // onclick outside mobile menu
    const $menu = $('.burger-menu, .nav__mobile, .nav__mobile-sub, .nav__mobile *, .nav__mobile-sub *');
    $(document).mouseup(function (e) {
        var win = $(window);
        if (!$menu.is(e.target)) {
            $('.burger-menu-default').prop('hidden', false);
            $('.burger-menu-close').prop('hidden', true);
            $('.nav__mobile').css('display', 'none');
            $('.nav__mobile-sub').css('display', 'none');
            $('.nav__mobile').css('left', '12px');
            refreshBurgerMenu();
        }
    });
    // on window resize
    $(window).on('resize', function () {
        var win = $(this);
        $('.burger-menu-default').prop('hidden', false);
        $('.burger-menu-close').prop('hidden', true);
        $('.nav__mobile').css('display', 'none');
        $('.nav__mobile-sub').css('display', 'none');
        $('.nav__mobile').css('left', '12px');
        refreshBurgerMenu();
    });
    $('.burger-menu').click(function(){
        if($('.nav__mobile').css('display') == 'none'){
            $('.nav__mobile').css('display', 'flex');
            $('.burger-menu-default').prop('hidden', true);
            $('.burger-menu-close').prop('hidden', false);
        }
        else {
            $('.nav__mobile').css('display', 'none');
            $('.nav__mobile-sub').css('display', 'none');
            $('.burger-menu-default').prop('hidden', false);
            $('.burger-menu-close').prop('hidden', true);
            $('.nav__mobile').css('left', '12px');
            refreshBurgerMenu();
        }
    });

    // CHANGE BURGER MENU CONTENT
    $('.nav__mobile-upper-item').click(function(){
        var submenu = $(this).data('item');
        $('.nav__mobile').css('left', '-360px');
        $('.nav__mobile-sub').css('display', 'flex');
        $('.nav__mobile--'+submenu).css('display', 'flex');
        $('.nav__mobile-control-back').data('item', submenu);
    });
    $('.nav__mobile-control-back').click(function(){
        $('.nav__mobile').css('left', '12px');
        $('.nav__mobile-sub').css('display', 'none');
        refreshBurgerMenu();
    });

    function refreshBurgerMenu() {
        // var submenu = $('.nav__mobile-control-back').data('item');
        $('.nav__mobile-container').css('display', 'none');
    }
    

    
    // TOGGLE MODAL
    $('.modal .modal__close').click(function(){
        $(this).parent().parent().removeClass('active');
    });
    $('.modal--item .modal__close').click(function(){
        $(this).parent().parent().parent().removeClass('active');
    });
    // $('.modal').click(function(){
    //     $(this).removeClass('active');
    // }).children().not('.modal__close').click(function(e) {
    //     return false;
    // });

    $('.carousel__item').click(function() {
        $('.modal').addClass('active');
    });

    $('.card--service-btn').click(function() {
        $('.modal').addClass('active');
    });



    // CATEGORIES MENU CONTROLS
    $('.nav__dropdown-controls--right').click(function() {
        $(this).css('opacity', '0');
        $('.nav__dropdown-controls--left').css('opacity', '1');
        $('.card--menu-categories:nth-of-type(1), .card--menu-categories:nth-of-type(2), .card--menu-categories:nth-of-type(3)').css('display', 'none');
        $('.card--menu-categories:nth-of-type(5), .card--menu-categories:nth-of-type(6), .card--menu-categories:nth-of-type(7)').css('display', 'block');
    });
    $('.nav__dropdown-controls--left').click(function() {
        $(this).css('opacity', '0');
        $('.nav__dropdown-controls--right').css('opacity', '1');
        $('.card--menu-categories:nth-of-type(1), .card--menu-categories:nth-of-type(2), .card--menu-categories:nth-of-type(3)').css('display', 'block');
        $('.card--menu-categories:nth-of-type(5), .card--menu-categories:nth-of-type(6), .card--menu-categories:nth-of-type(7)').css('display', 'none');
    });



    // LOCATION ACCORDION
    $('.viber-main__location-header').click(function() {
        if($(window).width() <= 600 ) {
            if($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            }
            else {
                $(this).parent().addClass('active');
            }
        }
    });

    // ACCORDION
    $('.accordion__header').click(function(){
        $(this).parent().toggleClass('active');
    });
});