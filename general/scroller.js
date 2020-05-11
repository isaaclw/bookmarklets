function Scroller() {
    var fnhandle;

    function start_scroll(timeout) {
        if (timeout === undefined) {
            timeout = 1;
        }
        scroll(timeout);
    }

    function scroll (timeout) {
        window.scrollTo(0,document.body.scrollHeight);
        fnhandle = setTimeout(scroll, timeout * 1000);
    }
    function cancel() {
        clearTimeout(fnhandle);
    }

    return {
        start: start_scroll,
        stop: cancel
    }
}
var s = new Scroller()
alert("Type: 's.stop()' to stop the scrolling");
s.start(1);
