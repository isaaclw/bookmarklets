function Opener() {
    var fnhandle_load, fnhandle_open, timeout = -1;

    function start(aT) {
        if (aT === undefined) {
            aT = 1;
        }
        timeout = aT;
        open_closed();
        load_more();
    }

    function open_closed() {
        var tag = 'a.expand';
        if ($(tag).length > 0) {
            $($(tag)[0]).click();
            fnhandle_open = setTimeout(open_closed, timeout * 100)
        }
    }
    function load_more() {
        var tag = 'a[id^=more_]';
        if ($(tag).length > 0) {
            $($(tag)[0]).click();
            fnhandle_open = setTimeout(load_more, timeout * 1000)
            open_closed();
        }
    }

    function cancel() {
        clearTimeout(fnhandle_load);
        clearTimeout(fnhandle_open);
    }

    return {
        start: start,
        stop: cancel
    }
}
var o = new Opener();
alert("Type: 's.stop()' to stop prematurely");
o.start();
