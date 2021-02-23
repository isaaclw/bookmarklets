function Scroller() {
    var fnhandle, timeout = -1;

    function start_scroll(aT) {
        if (aT === undefined) {
            aT = 2;
        }
        timeout = aT;
        scroll();
    }

    function scroll () {
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
s.start(2);
