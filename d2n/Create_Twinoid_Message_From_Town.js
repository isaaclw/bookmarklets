loc = window.location.href;
if(loc.indexOf('www.die2nite.com') != -1 && loc.indexOf('city/co') != -1){
    i = [];
    $('a.tid_user').each(function () {
        i = i.concat($(this).attr('tid_id'));
    });
    if (i.length === 0) {
        alert("Can't find any citizens in this town, use it on the Citizen's page");
    }
    _tid.askDiscuss(i.join(','));
} else {
    alert("Use this on the list of citizens in town");
}
