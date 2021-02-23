(function () {
    var script = document.createElement('script');
    document.head.appendChild(script);
    script.type = 'text/javascript';
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
    script.onload = function(){
        setTimeout(function () {
            // your jQuery code here
            jQuery('body > :not(#appContainer)').hide();
            jQuery('#appContainer').appendTo('body');
            jQuery('div.LPMcontainer').hide();
        }, 200);
    }
})();
