loc = window.location.href;
function getmsg(qrystr) {
    score = 0, count = $(qrystr).length;
    $(qrystr).each(function() {
        score += parseInt($(this).text());
    });
    additional = (40 - count) * (parseInt($(qrystr + ':first').text()) + 1);
    str = score + ' (not including souls)';
    if (additional>0){
        str += '\nand at least ' + additional + ' points if the rest (' + (40 - count) + ') die today\nTotalling: ' + (score + additional);
    }
    return str;
}
if(loc.indexOf('www.die2nite.com') != -1){
    if (loc.indexOf('ghost/ingame') != -1){
        str = getmsg('td.days');
/*    } else if (loc.indexOf('ghost/ranking') != -1){
        str = getmsg('table.details td:not(\'.uname\'):not(\'.comment\')'); */
    } else {
        str = 'This only works on Town history pages';
    }
} else {
    str = 'This only works on die2nite.com';
}
alert(str);
