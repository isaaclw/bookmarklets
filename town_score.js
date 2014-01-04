loc = window.location.href;
if(loc.indexOf('www.die2nite.com')!=-1&&l.indexOf('ghost/ingame')!=-1){
    score = 0;
    $('td.days').each(function(){
        score += parseInt($(this).text())
    });
    alert(score + ' (not including souls)')
} else {
    alert('Use this on a towns history page');
}
