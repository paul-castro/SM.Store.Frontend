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
 
    // SLIM SCROLL FOR CUSTOM SCROLLBAR
    // $('.nav__mobile-content').slimScroll({
    //     height: '345px',
    //     width: '288px',
    //     alwaysVisible: true,
    //     railVisible: true,
    //     railColor: '#E0E0E0',
    //     railOpacity: 1,
    //     color: '#0067B3',
    //     opacity: 1
    // });


    // TOGGLE MODAL
    $('.modal .modal__close').click(function(){
        $(this).parent().parent().removeClass('active');
    });
    $('.modal').click(function(){
        $(this).removeClass('active');
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



    // CAROUSEL - BANNER
    $('.pagination-dot__indicator').click(function() {
        var slideNum = $(this).attr('for');
        slideNum = slideNum.substr(slideNum.length - 1);
        
        $('.main-carousel').each(function() {
            $(this).removeClass('active');
        });
        $('.main-carousel').eq(slideNum - 1).addClass('active');
    });


    // CAROUSEL - EVENTS

    var eventsArr = [
        {
            isActive: true,
            url: './assets/images/event_img.jpg',
            month: 'January',
            day: '20',
            year: '2020',
            title: 'Billie Eilish Tour',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
            branch: 'SM Makati',
            pageUrl: ''
        },
        {
            isActive: false,
            url: './assets/images/event_img2.jpg',
            month: 'January',
            day: '22',
            year: '2020',
            title: 'Title 2',
            desc: 'Description 2',
            branch: 'SM Mindanao',
            pageUrl: ''
        },
        {
            isActive: false,
            url: './assets/images/event_img3.jpg',
            month: 'January',
            day: '24',
            year: '2020',
            title: 'Title 3',
            desc: 'Description 3',
            branch: 'SM Tawi Tawi',
            pageUrl: ''
        },
        {
            isActive: false,
            url: './assets/images/event_img.jpg',
            month: 'January',
            day: '26',
            year: '2020',
            title: 'Title 4',
            desc: 'Description 4',
            branch: 'SM Sultan Kudarat',
            pageUrl: ''
        },
    ];

    // Init event page
    populateEventSlider();
    populateEventDetails();
    
    $('.featured-events__footer .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];

        // REARRANGE EVENT ARRAY
        eventsArr[0].isActive = false;
        if(dir == 'right') { //to the right
            eventsArr.push(eventsArr.shift());
        }
        else { //to the left
            eventsArr.unshift(eventsArr.pop());
        }
        eventsArr[0].isActive = true;
        
        populateEventDetails(); // CHANGE EVENT DETAILS
        populateEventSlider(); // REARRANGE EVENT SLIDER
    });

    // Populate events' slider
    function populateEventSlider(){
        $('.featured-events__slider').html('');
        for(x = 0; x < eventsArr.length; x++) {
            $('.featured-events__slider').append(
            `<div class="featured-events__slider-event ${eventsArr[x].isActive ? 'active' : ''}">
                <img src="${eventsArr[x].url}" alt="">
                <div>
                    <p class="font-cta">${eventsArr[x].month.substr(0,3)}</p>
                    <p class="font-hero-m">${eventsArr[x].day}</p>
                </div>
            </div>
            `);
        }
    }
    
    // Populate events' details
    function populateEventDetails() {
        $('.featured-events__details').html(`
            <h3 class="featured-events__details-title">${eventsArr[0].title}</h3>
            <p class="featured-events__details-description">${eventsArr[0].desc}</p>
            <div class="featured-events__details-datetime">
                <img src="./assets/images/icons/icon-clock.svg" alt="">
                <span class="font-eyebrow">${eventsArr[0].month + eventsArr[0].day}</span>
            </div>
    
            <div class="featured-events__details-venue">
                <img src="./assets/images/icons/icon-location.svg" alt="">
                <p class="text-semibold">${eventsArr[0].branch}</p>
            </div>
    
            <a href="${eventsArr[0].pageUrl}" class="btn--text-link font-cta">Learn more</a>
        `);
    }


    var catalogArr = [
        {
            isActive: true,
            category: 'Magazine',
            title1: 'Real',
            title2: 'Beauty',
            image: './assets/images/slideshow1.png',
            pageUrl: '', 
        },
        {
            isActive: false,
            category: 'Women\'s',
            title1: 'Women\'s',
            title2: 'Sale',
            image: './assets/images/omnibus-promo2.jpg',
            pageUrl: '', 
        },
        {
            isActive: false,
            category: 'Kids',
            title1: 'Toy',
            title2: 'Kingdom',
            image: './assets/images/omnibus-promo1.png',
            pageUrl: '', 
        },
    ];

    populateCatalogDetails();
    populateCatalogSlider();
    
    $('.featured-stories__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];

        // REARRANGE EVENT ARRAY
        catalogArr[0].isActive = false;
        if(dir == 'right') { //to the right
            catalogArr.push(catalogArr.shift());
        }
        else { //to the left
            catalogArr.unshift(catalogArr.pop());
        }
        catalogArr[0].isActive = true;
        
    
        populateCatalogDetails(); // CHANGE EVENT DETAILS
        populateCatalogSlider(); // REARRANGE EVENT SLIDER
    });

    function populateCatalogDetails() {
        $('.featured-stories__details').html(`
            <span class="featured-stories__category font-eyebrow-semi">${catalogArr[0].category}</span>
            <h1 class="featured-stories__title font-hero">${catalogArr[0].title1}</h1>
            <h1 class="featured-stories__title font-hero">${catalogArr[0].title2}</h1>
            <a href="" class="featured-stories__btn btn--primary font-cta">Browse</a>
        `);
    }

    function populateCatalogSlider() {
        $('.featured-stories__images').html('');
        for(x = 0; x < catalogArr.length; x++) {
            $('.featured-stories__images').append(`
                <div class="featured-stories__image">
                    <img src="${catalogArr[x].image}" alt="">
                </div>
            `);
        }
    }
});