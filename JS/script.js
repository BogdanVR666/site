$('.item__content').hide();

$('.item__header').on('click', function() {
    $(this).toggleClass('on-unclick');
    $(this).toggleClass('on-click');
    $(this).next('.item__content').toggleClass('content__on-click');
    $(this).next('.item__content').toggleClass('content__on-unclick');
    $(this).next('.item__content').slideToggle(500);
});
console.log($(window).height());