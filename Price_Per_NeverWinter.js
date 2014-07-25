$('td.desktopOnly div.single-row-button').each(function () {
    qty = parseInt($(this).children('span span.auction-browse-quantity').text());
    bidelem = $(this).children('span span.auction-browse-bid');
    buyelem = $(this).children('span span.auction-browse-buyout');

    if (buyelem.text().indexOf('|') < 0) {
        buy = buyelem.text().replace(/\D/g, '');
        if (buy.length > 0) {
            buy = parseInt(buy);
            buyelem.append(' | ' + (buy / qty).toFixed(2));
        }
    }
    if (bidelem.text().indexOf('|') < 0) {
        bid = bidelem.text().replace(/\D/g, '');
        if (bid.length > 0) {
            bid = parseInt(bid);
            bidelem.append(' | ' + (bid / qty).toFixed(2));
        }
    }
});
