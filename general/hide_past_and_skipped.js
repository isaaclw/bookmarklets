(function () {
    var script = document.createElement('script'); 
    document.head.appendChild(script);    
    script.type = 'text/javascript';
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
    script.onload = function(){
        setTimeout(function () {
            // your jQuery code here
            jQuery("span:contains('Past Messages')").closest('button').parent().parent().remove();
            jQuery("span:contains('Skipped Messages')").closest('button').parent().parent().remove();

            jQuery('div[class=container_2v5xok]').each(function(i, e){
                children = $(e).find('div > div > div');
                if ($(children[3]).text() == "") {
                    $(e).remove();
                }
            });
        }, 200);
    }
})();
