(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://i.snap.as/T7kaYZ4.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
