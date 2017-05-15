$(function() {
    var INTERVAL = 5000;
    var BASEURL = 'http://comediededante.net/api/v1/';

    function setTicker(response, pairs) {
        for (var i = 0, len = pairs.length; i < len; i++) {
            var ticker = response[pairs[i]];

            var $value = $('#' + pairs[i]);
            $value.text('$' + numeral(ticker.last).format('0,0.00'));

            var $trend = $('#' + pairs[i] + '-trend');
            if (ticker.last > ticker.avg) {
                $trend.addClass('growth').removeClass('drop');
                $trend.text('+' + numeral(ticker.last - ticker.avg).format('0,0.00') + ' (' + numeral(100 * (ticker.last / ticker.avg - 1)).format('0.00') + '%)');
            } else {
                $trend.addClass('drop').removeClass('growth');
                $trend.text('-' + numeral(Math.abs(ticker.last - ticker.avg)).format('0,0.00') + ' (' + numeral(100 * (1 - ticker.last / ticker.avg)).format('0.00') + '%)');
            }
        }
    }

    function loadInfo() {
        $.ajax({
            method: 'GET',
            url: BASEURL + 'ticker/btc_usd-ltc_usd-dsh_usd-eth_usd',
            success: function(response) {
                try {
                    setTicker(response, ['btc_usd', 'ltc_usd', 'dsh_usd', 'eth_usd']);
                } catch (e) {}
            }
        });
    }

    loadInfo();

    setTimeout(loadInfo, INTERVAL);
});
