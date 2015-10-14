(function () {
    if ($('.sidebar-fixed-top,.subscribe-fixed-top,.navbar-fixed-top').is(':hidden')) {
        // restore
        $('.sidebar-fixed-top,.subscribe-fixed-top,.navbar-fixed-top').show();
        $('.container-fluid').css('top', '65px');
        $('.body-fixed-top').css('left', '200px');
        $('.body-fixed-top').css('width', 'auto');
    } else {
        // fullscreen
        $('.sidebar-fixed-top,.subscribe-fixed-top,.navbar-fixed-top').hide();
        $('.body-fixed-top').css('left', '0');
        $('.container-fluid').css('top', '10px');
        $('.body-fixed-top').css('width', 'auto');
    }
}());
