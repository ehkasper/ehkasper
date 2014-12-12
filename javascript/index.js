(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52426011-1', 'auto');
ga('send', 'pageview');

(function() {
    var externalLink = function(href) {
        ga('send', {
          'hitType': 'event',
          'eventCategory': 'pageOpened',
          'eventAction': 'click',
          'eventLabel': href
        });
    };

    var externals = document.getElementsByClassName('js-external');
    [].forEach.call(externals, function(external) {
        external.onclick = function() {
            externalLink(external.getAttribute('href'));
        }
    });
}).call(this);