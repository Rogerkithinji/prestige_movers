$(document).ready(function(){
    $(".main-header").sticky({topSpacing:0});

    $('.main-header').on('sticky-start', function() { 
    	$(this).removeClass("main-header").addClass("main-header-sticky");
    });

    $('.main-header').on('sticky-end', function() { 
    	$(this).addClass("main-header").removeClass("main-header-sticky");
    });
});