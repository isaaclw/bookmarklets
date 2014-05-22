loc = window.location.href;
if(typeof jQuery !== 'undefined' && $('#wpConfirmB').length > 0 && loc.indexOf('/index.php?title=') != -1 && loc.indexOf('&action=delete') != -1){
    $('#wpDeleteReasonList').val('Spam');
    $('#wpConfirmB').click();
} else {
    alert('This is not a wikipedia page, or it can not be submitted.');
}

