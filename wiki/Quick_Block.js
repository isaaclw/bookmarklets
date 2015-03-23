loc = window.location.href;
if(typeof jQuery !== 'undefined' && $('.mw-htmlform-submit').length > 0 && loc.indexOf('/wiki/Special:Block/') != -1){
    $('#mw-input-wpExpiry').val('infinite');
    $('#mw-input-wpReason').val('Spamming links to external sites');
    $('#mw-input-wpDisableEmail').attr('checked', 'true');
    $('.mw-htmlform-submit').click();
} else {
    alert('This is not a wikipedia page, or it can not be submitted.');
}
