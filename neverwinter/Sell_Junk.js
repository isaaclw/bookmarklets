/*globals $, setTimeout*/
function menuItem(select, not, menu) {
    "use strict";
    var elemset = $(select).not(not);
    if (elemset.length > 0) {
        console.log(elemset.length);
        var item = $(elemset[0]);
        $('button.closeNotification').click();
        item.contextmenu();
        setTimeout(function () {
            console.log("click menu");
            $("button:contains('" + menu + "')").click();
            setTimeout(function () {
                console.log("click confirm");
                $("button:contains('Confirm')").click();
                setTimeout(function () {
                    var ok = $('button:contains("OK")');
                    if (ok.length > 0) {
                        ok.click();
                        setTimeout(function () {
                            console.log("initiating next iteration");
                            menuItem(select, not, menu);
                        }, 1500);
                    } else {
                        console.log("initiating next iteration");
                        menuItem(select, not, menu);
                    }
                }, 1500);
            }, 500);
        }, 500);
    }
}

function sellItem(select, not) {
    "use strict";
    menuItem(select, not, 'Sell to Vendor');
}
sellItem('.Upgrade', '.Special,.Gold');
