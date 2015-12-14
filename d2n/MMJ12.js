data = ['en-36692', 'en-36693', 'en-36697', 'en-36698', 'en-36699', 'en-36700', 'en-36701', 'en-36703'];
for (i=0; i<data.length; i++) {
    $('[value=' + data[i] + ']').attr('checked', true);
}
$('#compare-form').submit()
