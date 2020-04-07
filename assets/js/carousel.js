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
            videoUrl: 'https://storage.coverr.co/videos/coverr-meditation-couple-in-the-park-1566577927549?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyNzcyNzk2fQ.02ngrtvWjl3gOlqlCqYXerXmA9N2JcoUqXH-gu66oiA'
        },
        {
            header: 'Women Video',
            title1: 'Test1',
            title2: 'Test1',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://storage.coverr.co/videos/coverr-meditation-couple-in-the-park-1566577927549?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyNzcyNzk2fQ.02ngrtvWjl3gOlqlCqYXerXmA9N2JcoUqXH-gu66oiA'
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
    
});