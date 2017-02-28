(function toggle() {
    if ($('div.content-cell').parent().get(0) == $('body').get(0)) {
        $('body > :not(div.content-cell)').show();
        $('div.content-cell').appendTo('div.main-row');
        $('div.content-cell').removeAttr('style');
    } else {
        $('body > :not(div.content-cell)').hide();
        $('div.content-cell').appendTo('body');
        $('div.content-cell').css('top', 0);
        $('div.content-cell').css('left', 0);
    }
}());
