data = ['37469', '37471', '37475', '37476', '37477', '37478'];
for (i=0; i<data.length; i++) {
    $('[value=en-' + data[i] + ']').attr('checked', true);
}
$('#compare-form').submit()

