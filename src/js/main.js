setTimeout(function() {

var topbar = '<div id="topbar"><h2>Severnarch</h2></div>'
document.body.innerHTML = topbar + document.body.innerHTML
topbar = document.getElementById('topbar')

setInterval(function() {
 var topbarTitle = topbar.getElementsByTagName('h2')[0]
}, 10)

}, 1)