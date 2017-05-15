$(function() {
    var INTERVAL = 10000;
    var BASEURL = 'http://comediededante.net/api/v1/';

    function updateIcon() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        $.ajax({
            method: 'GET',
            url: BASEURL + 'ticker/btc_usd',
            success: function(response) {
                try {
                    var value = numeral(response.btc_usd.last).format('0,0.00');
                    var img = new Image();

                    img.src = 'icon.png';
                    img.onload = function() {
                        ctx.drawImage(img, 0, 0, 32, 32);
                        ctx.font = 'bold 21px monospace';
                        ctx.fillStyle = '#fff';
                        ctx.textAlign = 'center';
                        ctx.fillText(value, 16, 22, 28);

                        var imageData = ctx.getImageData(0, 0, 32, 32);

                        chrome.browserAction.setIcon({imageData: imageData});
                    };
                } catch (e) {}
            }
        });
    }

    updateIcon();

    setTimeout(updateIcon, INTERVAL);
});
