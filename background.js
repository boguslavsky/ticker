var INTERVAL = 5000;

function updateIcon() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    var value = 1248;

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

    setTimeout(updateIcon, INTERVAL);
}

document.addEventListener('DOMContentLoaded', updateIcon);
