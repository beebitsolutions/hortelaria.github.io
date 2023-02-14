var initialscript = document.createElement('script');
initialscript.onload = function () {
};
initialscript.src = "https://sc-devel.s3.eu-central-1.amazonaws.com/sc-tagmanager/wegow-initial.js";
document.head.appendChild(initialscript);


//window.onpopstate = function() {
//var goonscript = document.createElement('script');	
//goonscript.onload = function () {
//};
//goonscript.src = "https://sc-devel.s3.eu-central-1.amazonaws.com/sc-tagmanager/wegow-goon.js";
//document.head.appendChild(goonscript);
//}


document.addEventListener('click', function (event) {
var goonscript = document.createElement('script');	
goonscript.onload = function () {
};
goonscript.src = "https://sc-devel.s3.eu-central-1.amazonaws.com/sc-tagmanager/wegow-goon.js";
document.head.appendChild(goonscript);
});

window.addEventListener('popstate', function (event) {
var script = document.createElement('script');
script.onload = function () {
};
script.src = "https://sc-devel.s3.eu-central-1.amazonaws.com/sc-tagmanager/wegow-refresh.js";
document.head.appendChild(script);
});