(function () {
    $j('table.vs-classic-grid tbody tr th').each(function(index, elem){
        var header = $j(elem).text();
        if(header.indexOf('DevSupport Ticket #') >= 0){
            $j('table.vs-classic-grid tbody tr').each(function(i, tr){
                var correct_td = $j($j(tr).children()[index]);
                var ticketn = correct_td.text();
                if(ticketn.length > 0) {
                    correct_td.html('<a href=\'https://trac.vistashare.net/ticket/' + ticketn + '\'>' + ticketn + '</a>');
                }
            });
            return;
        }
    });
}());
