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
    
    $('.modal--terms .modal__close').click(function(){
        $('.modal--terms').parent().removeClass('active');
    });

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

    // ACCORDION WHEN MENU CLICK
    var $root = $('html, body');

    $('.link-delivery__item, .nav__mobile-upper-item').click(function () {
        if(!($('.accordion'+$.attr(this, 'href')).hasClass('active'))){
            $('.accordion'+$.attr(this, 'href')).addClass('active');
        }

        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });


    // CLOSE COOKIE MODAL
    $('.cookie__btn .btn--primary:nth-child(1)').click(function() {
        $('.cookie__container').css('display', 'none');
    });


    // CLOSE WELCOME MODAL
    $('.modal--welcome .modal-content button').click(function() {
        $('.modal').removeClass('active');
    });


    // TOGGLE FILTER ESSENTIAL IN MOBILE
    $(window).on('resize', function(){
        if($(window).width() < 600) {
            $('.delivery-catalog__filter').css('display', 'none');
        }
        else {
            $('.delivery-catalog__filter').css('display', 'flex');
        }
    });
    $('.catalog-sorter div:nth-of-type(1) button').click(function() {
        if ($(window).width() < 600) {
            $('.delivery-catalog__filter').css('display', 'flex');
        }
    });

    $('.delivery-catalog__filter img').click(function() {
        $('.delivery-catalog__filter').css('display', 'none');
    });


    // AUTO SUGGESTION SEARCH BRANCH
    
    $('.search-branch-input').keyup(() => {
        var list = [];
        if($('.search-branch-input').val()) {
            var key = $('.search-branch-input').val();
            $('.branch-suggestion-box').css('display', 'block');
            for(i = 0; i < branch.length; i++) {
                if(branch[i].name.toLowerCase().includes(key.toLowerCase())) {
                    if(list.indexOf(branch[i]) == -1) {
                        list.push(branch[i]);
                        populateSuggestionBox(list);
                    }
                }
            }
        }
        else {
            $('.branch-suggestion-box').css('display', 'none');
        }   
    });

    $('body').click(function(e) {
        
        if($(e.target).hasClass('search-branch-input') || $(e.target).hasClass('branch-suggestion-box') || $(e.target).parent().hasClass('slimScrollDiv')){
            return false;
        }
        else {
            if($('.branch-suggestion-box').css('display') == 'block') {
                $('.branch-suggestion-box').css('display', 'none');
            }
        }
    });

    
    $('.branch-suggestion-box').on('click', '.store-name', function() {
        $('.search-branch-input').val('The SM Store ' + $(this).data('name'));
        $('.branch-suggestion-box').css('display', 'none');
        populateBranchDetails($(this).data('name'));
        $('.branch-details').css('display', 'flex');
    });

    $('.delivery-catalog__accordion-item div:nth-child(1)').click(function() {
        $(this).parent().toggleClass('active');
    });

    function populateSuggestionBox(arr) {
        var list = '';
        var metro = '';
        var northl = '';
        var southl = '';
        var vis = '';
        var minda = '';
        for(i = 0; i < arr.length; i++) {
            switch (arr[i].group) {
                case 1: 
                    metro += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 2: 
                    northl += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 3: 
                    southl += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 4: 
                    vis += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 5: 
                    minda += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
            }
        }

        if(metro !== '') {
            list += `<b>Metro Manila</b><br>${metro}<br>`;
        }
        if(northl !== '') {
            list += `<b>North Luzon</b><br>${northl}<br>`;
        }
        if(southl !== '') {
            list += `<b>South Luzon</b><br>${southl}<br>`;
        }
        if(vis !== '') {
            list += `<b>Visayas</b><br>${vis}<br>`;
        }
        if(minda !== '') {
            list += `<b>Mindanao</b><br>${minda}`;
        }

        $('.branch-suggestion-box div').html(list);
        putSlimScroll();
    }



    function putSlimScroll() {
        $('.branch-suggestion-box div').slimScroll({
            height: '188px',
            width: '313px',
            size: '3px',
            alwaysVisible: true,
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: '5'
        });
    }


    
    function populateBranchDetails(name) {
        var i = branch.findIndex(x => x.name === name);

        $('.branch-details').html(
            `<div class="header">
            <div>
                <img src="./assets/images/icons/Navigationbranded.svg" alt="">
                <span class="font-headline">The SM Store ${branch[i].name}</span>
            </div>
            <div>
                <img src="./assets/images/icons/icon-clock.svg" alt="">
                <span class="font-eyebrow-medium">Operating hours: Mon - Sun 9:00AM to 4:00PM</span>
            </div>
        </div>
        <div class="contacts">
            <div class="number">
                <h2>
                    <span class="font-fineprint">Contact</span>
                </h2>
                <div>
                    <span class="contact-number">0917 861 5396</span>
                    <div>
                        <img src="./assets/images/icons/btn_Call.svg" alt="">
                        <img src="./assets/images/icons/btn_Message.svg" alt="">
                        <img src="./assets/images/icons/btn_Viber.svg" alt="">
                    </div>
                </div>
                <div>
                    <span class="contact-number">0917 861 5396</span>
                    <div>
                        <img src="./assets/images/icons/btn_Call.svg" alt="">
                        <img src="./assets/images/icons/btn_Message.svg" alt="">
                        <img src="./assets/images/icons/btn_Viber.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="email">
                <h2>
                    <span class="font-fineprint">Email</span>
                </h2>
                <div>
                    <span class="email-address">megamall@smmalls.com</span>
                    <div>
                        <img src="./assets/images/icons/btn_Email.svg" alt="">
                    </div>
                </div>
            </div>
        </div>`
        );
    }
});