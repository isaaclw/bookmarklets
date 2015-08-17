(function () {
    function loadjQuery(url, callback) {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("src", url)
        script_tag.onload = callback; // Run callback once jQuery has loaded
        script_tag.onreadystatechange = function () { // Same thing but for IE
            if (this.readyState == 'complete' || this.readyState == 'loaded') callback();
        }
        script_tag.onerror = function() {
            loadjQuery("script/jquery-1.6.1.js", main);
        }
        document.getElementsByTagName("head")[0].appendChild(script_tag);
    }

    function verifyJQueryCdnLoaded() {
        if (typeof jQuery === "undefined") {
            loadjQuery("script/jquery-1.6.1.js", main);
        }
    }
    loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js", verifyJQueryCdnLoaded);
}());
