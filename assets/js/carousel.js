$(document).ready(function() {
    

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


    // CAROUSEL - CATALOG

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

    
    // CAROUSEL - VIDEOS
    var videoArr = [
        {
            header: 'Official Campaign Video',
            title1: 'SM Real',
            title2: 'Beauty',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        },
        {
            header: 'Women Video',
            title1: 'Test1',
            title2: 'Test1',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        },
    ];

    populateVideoDetails();
    populateVideoSlider();
    
    $('.featured-video__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        
        // REARRANGE EVENT ARRAY
        videoArr[0].isActive = false;
        if(dir == 'right') { //to the right
            videoArr.push(videoArr.shift());
        }
        else { //to the left
            videoArr.unshift(videoArr.pop());
        }
        videoArr[0].isActive = true;
        
        populateVideoDetails(); // CHANGE EVENT DETAILS
        populateVideoSlider(); // REARRANGE EVENT SLIDER
    });
    
    function populateVideoDetails() {
        
        $('.featured-video__text').html(`
            <span class="font-eyebrow">${videoArr[0].header}</span>
            <h1 class="font-hero">
                <span>${videoArr[0].title1}</span> 
                <span>${videoArr[0].title2}</span>
            </h1>
            <p>${videoArr[0].content}</p>
        `);
    }
    function populateVideoSlider() {
        
        $('.featured-video__video').html(`
            <video class="featured-video__video-file" playsinline="" autoplay="" muted="" loop="" src="${videoArr[0].videoUrl}" class="ng-star-inserted"></video>
        `);
    }
    


    // Landing Pages
    // Mens
    const mensEventArr = [
        {
            imgUrl: './assets/images/cards/men-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/men-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/men-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Womens
    const womensEventArr = [
        {
            imgUrl: './assets/images/cards/women-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/women-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/women-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/women-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Kids
    const kidsEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Youth
    const youthEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Home
    const homeEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Beauty
    const beautyEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Others
    const othersEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];

    var category = $('.omnibus-slider__details-controls').attr('data-category');
    
        
    if(category == 'mens') {
        landingGenerateCarousel(mensEventArr);
    }
    else if (category == 'womens') {
        landingGenerateCarousel(womensEventArr);
    }
    else if (category == 'kids') {
        landingGenerateCarousel(kidsEventArr);
    }
    else if (category == 'youth') {
        landingGenerateCarousel(youthEventArr);
    }
    else if (category == 'home') {
        landingGenerateCarousel(homeEventArr);
    }
    else if (category == 'beauty') {
        landingGenerateCarousel(beautyEventArr);
    }
    else if (category == 'others') {
        landingGenerateCarousel(othersEventArr);
    }

    $('.omnibus-slider__details-controls .controls__arrow').click(function() {
        
        var dir = $(this).attr('class').split('--')[1];
        var array = $(this).parent().attr('data-category') + 'EventArr';
        var arr = new Array;
        
        if(array == 'mensEventArr') {
            arr = mensEventArr;
        }
        else if (array == 'womensEventArr') {
            arr = womensEventArr;
        }
        else if (array == 'kidsEventArr') {
            arr = kidsEventArr;
        }
        else if (array == 'youthEventArr') {
            arr = youthEventArr;
        }
        else if (array == 'homeEventArr') {
            arr = homeEventArr;
        }
        else if (array == 'beautyEventArr') {
            arr = beautyEventArr;
        }
        else if (array == 'othersEventArr') {
            arr = othersEventArr;
        }
        
        landingRearrangeCarousel(arr,dir);
    });

    function landingGenerateCarousel(arr) {
        $('.omnibus-slider__slider').html('');
        for(var i = 0; i < arr.length; i++) {
            $('.omnibus-slider__slider').append(`<div class="card--event">
                <img class="card--event-poster" src="${arr[i].imgUrl}" alt="">
                <div class="card--event-details">
                    <p class="font-eyebrow card--event-details-month">${arr[i].month}</p>
                    <h1 class="font-h1 card--event-details-day">${arr[i].day}</h1>
                    <p class="font-eyebrow card--event-details-title">${arr[i].event}</p>
                </div>
            </div>`); 
        }
    }

    function landingRearrangeCarousel(arr, dir) {
        
        arr[0].isActive = false;
        if(dir == 'right') { //to the right
            arr.push(arr.shift());
        }
        else { //to the left
            arr.unshift(arr.pop());
        }
        arr[0].isActive = true;

        landingGenerateCarousel(arr);
    }




    // Carousel Gift Pages 
    // Gift Card Page
    $('.gift__controls button').click(function() {

        var slider = $('.gift-card__sleeves');
        var slider2 = $('.gift-card__cards');
        var sliderMargin = parseFloat(slider.css('margin-left').split('px')[0]);
        var sliderMargin2 = parseFloat(slider2.css('margin-left').split('px')[0]);
        var dir = $(this).attr('class').split('--')[1];
        
        if(dir == 'right') {
            if(isMarginValid(sliderMargin - 137.22)) {
                slider.css('margin-left', `${sliderMargin - 137.22}px`);
            }
            else {
                slider.css('margin-left', '0px');
            }
        }
        else {
            sliderMargin + 137.22;
            if(isMarginValid(sliderMargin + 137.22)) {
                slider.css('margin-left', `${sliderMargin + 137.22}px`);
            }
            else {
                slider.css('margin-left', '0px');
            }
        }

        function isMarginValid(val) {
            if(val < 0 && val >= -411.66) { 
                $('.gift__controls--left').css('visibility', 'visible');
                return true;
            }
            else {
                $('.gift__controls--left').css('visibility', 'hidden');
                return false;
            }
        }
    });



    var dragItem = $('.gift-card__cards div');
    var container = $('.gift-card__cards');

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.mousedown(dragStart);
    container.mousemove(drag);
    container.mouseup(dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
  
        if (e.target === dragItem) {
          active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
  
        active = false;
      }
  
      function drag(e) {
        if (active) {
        
            e.preventDefault();

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;
            
            console.log(currentX);
  
            setTranslate(currentX, currentY, dragItem);
        }
      }
  
      function setTranslate(xPos, yPos, el) {
        el.style.marginLeft = xPos + 'px';
      }
    
});