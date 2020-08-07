$('.item__content').hide(); /*$('.item__price').hide();*/
$('.item__title').on('click', function() {
    if($('.catalog').hasClass('one')) {
        $('.item__title').not($(this)).removeClass('active');
        $('.item__content').not($(this).next()).slideUp(500);
    }
    $(this).toggleClass('active').next('.item__content').slideToggle(500);
});