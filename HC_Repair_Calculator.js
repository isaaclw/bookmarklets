total = $('div.bprogress').width();
list = [];
CONST = 0.75;
strip = function(a){
    // strip
    return a.replace(/^\s+|\s+$/g,'');
}
ar2int = function(a,i){
    // array, strip, then parse
    return parseInt(strip(a[i]));
}

$('tr.building').each(function() {
    damage = $(this).children('td.rsc').children('div.damage');
    if (!damage.length == 0) {
        if ((damage.children('div.bprogress').children('div.bbar').width() / total) < CONST){
            array = /<em>Status:<\/em>\s+([0-9]+\s+\/\s+[0-9]+)\s+<p>/g.exec(damage.attr('onmouseover'))[1].split('/');
            need = (ar2int(aray, 1) * CONST) - ar2int(array, 0);
            list = list.concat([[strip($(this).children('td.name').text()), need]]);
        }
    }
});
str = 'These need repair:\n';
for (i=0; i<list.length; i++) {
    str = str + list[i][0] + ' needs ' + list[i][1] + '\n';
}
alert(str);
