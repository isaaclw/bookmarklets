loc = window.location.href;
if(loc.indexOf('www.die2nite.com') != -1 && loc.indexOf('city/buildings') != -1){
    total = $('div.bprogress').width();
    list = [];
    CONST = 0.7;
    FACTOR = 2;
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
        if (damage.length > 0) {
            array = /<em>Status:<\/em>\s+([0-9]+\s+\/\s+[0-9]+)\s+<p>/g.exec(damage.attr('onmouseover'))[1].split('/');
            need = (Math.ceil(ar2int(array, 1) * CONST) + 1) - ar2int(array, 0);
            ap = Math.ceil(need / FACTOR);
            if (ap > 0) {
                list = list.concat([[strip($(this).children('td.name').text()), need, ap]]);
            }
        }
    });
    if (list.length == 0) {
        alert("All appear to be repaired");
    } else {
        str = '';
        t = 0;
        for (i=0; i<list.length; i++) {
            str = str + list[i][0] + ' needs ' + list[i][1] + ' so add ' + list[i][2] + '\n';
            t = t + list[i][2];
        }
        str = str + 'Total: ' + t;
        alert(str);
    }
} else {
    alert("Use this on the construction page in town");
}
