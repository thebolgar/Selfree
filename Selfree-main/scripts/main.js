$(document).ready(function(){
    $('.widget__link').on('click', function (){
        $('.icon-block__info').removeClass('icon-block__info--close')    
    });
    $('.block-info__close').on('click', function (){
        $('.icon-block__info').addClass('icon-block__info--close')    
    });
});