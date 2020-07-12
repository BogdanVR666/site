$('.content').hide();

function GetAppIndex(string) {
    if(navigator.appVersion.indexOf(string) <= 0) {
        return false;
    } else {
        return true;
    }
}
function GetOS() {
    if(GetAppIndex('Android')) {
        return 'Android';
    } else if(GetAppIndex('Windows')) {
        return 'Windows';
    } else if(GetAppIndex('MacOS')) {
        return 'MacOS';
    } else if(GetAppIndex('Linux')) {
        return 'Linux';
    }
}

function HoverSlider(jQweryObject) {
    let Clicked = false;
    if((GetOS() === 'Windows') || 
       (GetOS() === 'MacOS') || 
       (GetOS() === 'Linux')) {
        jQweryObject.on('mouseover', function() {
            $(this).next('.content').slideDown();
            $(this).css({
                'border-bottom-right-radius': '0px',
                'border-bottom-left-radius': '0px',
            });
            $(this).next('.content').css({
                'border-top-left-radius': '0px',
                'border-top-right-radius': '0px',
            });
        });
        jQweryObject.next().on('mouseover', function() {
            $(this).next('.content').slideDown();
            $(this).css({
                'border-bottom-right-radius': '0px',
                'border-bottom-left-radius': '0px',
            });
            $(this).next('.content').css({
                'border-top-left-radius': '0px',
                'border-top-right-radius': '0px',
            });
        });
        jQweryObject.on('mouseout', function() {
            $(this).next().on('mouseout', function() {
                $(this).next('.content').slideUp();
                $(this).css({
                    'border-bottom-right-radius': '10px',
                    'border-bottom-left-radius': '10px',
                });
                $(this).next('.content').css({
                    'border-top-left-radius': '10px',
                    'border-top-right-radius': '10px',
                });
            });
        });
    }
    jQweryObject.on('click', function() {
        if(Clicked == false) {
            $(this).next('.content').slideDown();
            $(this).css({
                'border-bottom-right-radius': '0px',
                'border-bottom-left-radius': '0px',
            });
            $(this).next('.content').css({
                'border-top-left-radius': '0px',
                'border-top-right-radius': '0px',
            });
            Clicked = true;
        } else {
            $(this).next('.content').slideUp();
            $(this).css({
                'border-bottom-right-radius': '10px',
                'border-bottom-left-radius': '10px',
            });
            $(this).next('.content').css({
                'border-top-left-radius': '10px',
                'border-top-right-radius': '10px',
            });
            Clicked = false;
        }
    });
}

HoverSlider($('.header'));
$('CatalogItem').width(165);
$('.content').append('<br/><br/><a class="read_more" href="#">подробнее</a><a class="bascket" href="#">в корзину</a>');