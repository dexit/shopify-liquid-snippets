jQuery(document).ready(function ($) {


let firstrun = 0;
const theslider =    jQuery('.featured_slider_new');
theslider.slick({
            dots: false,
              infinite: true,
              speed: 1000,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5050,
             lazyLoad: 'ondemand',
          pauseOnHover: true,
          responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            ]
        });

});
