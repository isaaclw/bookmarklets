i = [];
$('a.tid_user').each(function () {
    i = i.concat($(this).attr('tid_id'));
});
_tid.askDiscuss(i.join(','));
