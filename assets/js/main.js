require.config({
	baseUrl:'assets/',
    paths: {
        'jquery': 'js/jquery',
        $: "js/jquery",
        swiper:'js/swiper-3.4.2.jquery.min',
        app:"js/app",
        sidebar:"js/sidebar",
        fancybox:"js/fancybox",
        fancyboxthumbs:"js/fancyboxthumbs",
        mmenu:"js/mmenu"
    },
    shim: {
        app: {
            deps: ['jquery'],
            app: 'app'
        },
        swiper:{
            deps:['jquery'],
            exports:'swiper-3.4.2.jquery.min'
        },
        sidebar:{
            deps:['jquery'],
            exports:'js/sidebar'
        },
        mmenu:{
            deps:['jquery'],
            exports:'js/mmenu'
        },
        fancybox:{
            deps:['jquery'],
            exports:'js/fancybox'
        },
        fancyboxthumbs:{
            deps:['fancybox'],
            exports:'js/fancyboxthumbs'
        }
    }
});