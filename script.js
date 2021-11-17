$(window).on("scroll", function () {

    $('div.info').text('The current scroll position is: ' + $(window).scrollTop().toFixed() + 'px')

    if ($(window).scrollTop() > 500) {
        $('div.info').addClass('active');

    } else {
        $('div.info').removeClass('active');
    }
    // console.log($(window).scrollTop());

})