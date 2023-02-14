sctiltle = function(s) {
       var r = s.toLowerCase(s);
       r = r.replace(new RegExp(/[àáâãäå]/g), "a");
       r = r.replace(new RegExp(/æ/g), "ae");
       r = r.replace(new RegExp(/ç/g), "c");
       r = r.replace(new RegExp(/[èéêë]/g), "e");
       r = r.replace(new RegExp(/[ìíîï]/g), "i");
       r = r.replace(new RegExp(/ñ/g), "n");
       r = r.replace(new RegExp(/[òóôõö]/g), "o");
       r = r.replace(new RegExp(/œ/g), "oe");
       r = r.replace(new RegExp(/[ùúûü]/g), "u");
       r = r.replace(new RegExp(/[ýÿ]/g), "y");
       r = r.replace(new RegExp(/[,\/]/g), ",")
       return r;
}

//let childs = document.getElementById("nuxt-main").childNodes;
//childs.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))){
const addCSS = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
addCSS("#sc-top {height: 125px;} #sc-top > div {height: 125px;} #sc-top > div > iframe {height: 125px;}.sc-sticky-refresh {height: auto; position: fixed; bottom: 0px;background-color: #000!}#sc-mpu-btf {width: 300px; margin: auto; height: 667px;} #sc-mpu-top {width: 300px; margin: auto; height: 667px;} #sc-mpu-top > div {position: sticky; top: 60px; margin: auto;} #sc-mpu-btf > div {position: sticky; top: 60px; margin: auto;} #sc-top{text-align: center;position:fixed;bottom: 0px;background-color: #000;width: 100%;border-top: 1px #14caba solid;padding:5px;z-index:100000;left: 0px;min-height: 50px;}.sc-intext{position: relative;}")
var sc_location = document.getElementById("sc-top");
function sc_avaStartCb(){
var sc_location = document.getElementById("sc-top");	
	//Remove sticky
	sc_location.classList.add("sc-intext")
}
function sc_avaEndCb(){
var sc_location = document.getElementById("sc-top");	
	//do Sticky
	sc_location.classList.remove("sc-intext")
}
function SCcloseAd() {
var sc_location = document.getElementById("sc-top");	
  sc_location.style.display = "none";
}
function SCcreateCloseAd () {
var sc_location = document.getElementById("sc-top");	
	var sc_closeButton = document.createElement("div");
		sc_location.insertBefore(sc_closeButton,null);
		sc_closeButton.id = "sc-closead-fixed";
		sc_closeButton.style.width = "25px";
		sc_closeButton.style.height = "25px";
		sc_closeButton.style.right = "0%";
		sc_closeButton.style.top = "-25px";
		sc_closeButton.style.position = "absolute";
		sc_closeButton.style.background = "black";
		sc_closeButton.style.borderRadius = "5px 5px 0px 0px";
		sc_closeButton.style.boxShadow = "#14caba -1px -1px 0px 0px";
		sc_closeButton.style.backgroundImage = "url('https://sc-devel.s3.eu-central-1.amazonaws.com/viewability/320x100/cerrar_black_inverse.jpg')";
		sc_closeButton.onclick = SCcloseAd;
} 
setTimeout(SCcreateCloseAd, 5000);	
setInterval(SCcreateCloseAd, 18000);
}else{
const addCSS = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
addCSS("#sc-top{max-width: 980px; margin: auto; text-align: center;height: auto;}#sc-superbanner-btf {max-width: 980px; margin: auto; text-align: center;height: auto;}")
}

//var sctagsgpt = document.createElement('script');
//sctagsgpt.onload = function() {
//};
//sctagsgpt.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
//document.head.appendChild(sctagsgpt); 

 window.googletag = window.googletag || {cmd: []};
 		var sctop;
 		var scmputop;
 		var scsuperbannerbtf;
 		var scmpubtf; 		 		 		 
  googletag.cmd.push(function() {
   		var mappingnative = googletag.sizeMapping().addSize([320, 200], [[320, 900]]).addSize([729, 200], [[728, 900]]).addSize([980, 200], [[980, 900]]).addSize([1279, 500], [[980, 900]]).build();
		var mappingsctop = googletag.sizeMapping().addSize([320, 200], [[320, 100], [320, 50], [200, 200], 'fluid']).addSize([769, 200], [728, 90]).addSize([980, 200], [[728, 90], [970, 250]]).addSize([1025, 200], [[728, 90], [980, 250], [970, 250]]).build();
		var mappingscbottom = googletag.sizeMapping().addSize([320, 200], []).addSize([769, 200], []).addSize([980, 200], [[728, 90], [970, 250]]).addSize([1025, 200], [[728, 90], [980, 250], [970, 250]]).build();		
		var mappingscmputop = googletag.sizeMapping().addSize([320, 200], [[300, 600], [300, 250], [336, 280], [125, 125]]).addSize([769, 200], [[300, 600], [300, 250], [336, 280], [125, 125]]).addSize([980, 200], []).addSize([1025, 200], []).build();		
  		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		if(document.querySelector("meta[property='og:description']")){
		var tags2 = document.querySelector("meta[property='og:description']").getAttribute("content").split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		} else {
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		}

if (document.location.href.indexOf("youtube") != -1) {
	adunitnative = "youtube";
} else if (document.location.href.indexOf("twitter") != -1) {
	adunitnative = "twitter";		
} else if (document.location.href.indexOf("instagram") != -1) {
	adunitnative = "instagram";	
} else if (document.location.href.indexOf("ig_") != -1) {
	adunitnative = "instagram";	
} else if (document.location.href.indexOf("linkinbio") != -1) {
	adunitnative = "instagram";	
} else if (document.location.href.indexOf("linkin.bio") != -1) {
	adunitnative = "instagram";	
} else if (document.location.href.indexOf("utm_medium=social") != -1) {
	adunitnative = "social";					
} else if (document.location.href.indexOf("tiktok") != -1) {
	adunitnative = "tiktok";	
} else if (document.location.href.indexOf("facebook") != -1) {
	adunitnative = "facebook";	
} else if (document.location.href.indexOf("pinterest") != -1) {
	adunitnative = "pinterest";	
} else if (document.location.href.indexOf("linkedin") != -1) {
	adunitnative = "linkedin";	
} else if (document.location.href.indexOf("snapchat") != -1) {
	adunitnative = "snapchat";	
} else if (document.location.href.indexOf("twitch") != -1) {
	adunitnative = "twitch";	
} else if (document.location.href.indexOf("artist") != -1) {
	adunitnative = "artistas";
} else if (document.location.href.indexOf("concert") != -1) {
	adunitnative = "conciertos";		
} else if (document.location.href.indexOf("festiva") != -1) {
	adunitnative = "festivales";	
} else if (document.location.href.indexOf("recint") != -1) {
	adunitnative = "recintos";
} else if (document.location.href.indexOf("conciert") != -1) {
	adunitnative = "conciertos";	
} else {
	adunitnative = "wegow";
}
//	  	var REFRESH_KEY = 'inview';
// 	 	var REFRESH_VALUE = 'true';	
	  	var REFRESHKEY = 'inview';
 	 	var REFRESHVALUE = 'true';	 	 			
  	sctop = googletag.defineSlot('/5555,21692105105/WEGOW.ES/'+ adunitnative +'', [[728, 90], [980, 250], [970, 250], [980, 200], [125, 125], [200, 200]], 'sc-top').defineSizeMapping(mappingsctop).addService(googletag.pubads()).setTargeting("refresh", "true").setTargeting(REFRESHKEY, REFRESHVALUE).setTargeting("seccion", seccion).setTargeting("tags", tags);	
 	scsuperbannerbtf = googletag.defineSlot('/5555,21692105105/WEGOW.ES/'+ adunitnative +'_btf', [[728, 90], [980, 250], [970, 250], [980, 200], [125, 125], [200, 200]], 'sc-superbanner-btf').defineSizeMapping(mappingscbottom).setTargeting("refresh", "false").addService(googletag.pubads()).setTargeting("seccion", seccion).setTargeting("tags", tags);		
 	scmputop = googletag.defineSlot('/5555,21692105105/WEGOW.ES/'+ adunitnative +'', [[300, 600], [300, 250], [336, 280]], 'sc-mpu-top').defineSizeMapping(mappingscmputop).addService(googletag.pubads()).setTargeting("refresh", "false").setTargeting("seccion", seccion).setTargeting("tags", tags);		
	scmpubtf = googletag.defineSlot('/5555,21692105105/WEGOW.ES/'+ adunitnative +'_btf', [[300, 600], [300, 250], [336, 280]], 'sc-mpu-btf').defineSizeMapping(mappingscmputop).addService(googletag.pubads()).setTargeting("refresh", "false").setTargeting("seccion", seccion).setTargeting("tags", tags);		  		
 //   googletag.defineSlot('/5555,21692105105/WEGOW.ES/'+ adunitnative +'_native', [[1, 1]], 'nuxt-main').defineSizeMapping(mappingnative).addService(googletag.pubads()).setTargeting("seccion", seccion).setTargeting("tags", tags);
	var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 20;
//	googletag.pubads().enableLazyLoad();
//	googletag.pubads().enableLazyLoad({
//		fetchMarginPercent : 75
//	});
//	googletag.pubads().enableLazyLoad({
//		fetchMarginPercent : 75,
//		renderMarginPercent : 25,
//		mobileScaling : 0
//	});
//  	googletag.pubads().addEventListener('impressionViewable', function(event) {
//    	var slot = event.slot;
//    	if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
//      	setTimeout(function() {
//        googletag.pubads().refresh([slot]);        
//      	}, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
//    	}
//  	});
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    	var sctop = event.slot;
        var sc_refresh = document.getElementById("sc-top");    	
    	if (sctop.getTargeting(REFRESHKEY).indexOf(REFRESHVALUE) > -1) {
      	setTimeout(function() {
        googletag.pubads().refresh([sctop]);
		//sc_refresh.classList.remove("sc-sticky-refresh");	
		sc_refresh.classList.remove("sc_sticky_changDir");	
		sc_refresh.classList.remove("sc_stickyscroller_3_0");	
		sc_refresh.classList.remove("sc_catalogueAd");		
		sc_refresh.classList.remove("sc_bannerAnim");	
		sc_refresh.classList.remove("sc_newFixedDesplegable");		
		sc_refresh.classList.remove("sc_expanded");		
		//sc_refresh.classList.add("sc-sticky-refresh");								
      	}, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);	
    	}
  	});  	
//  	googletag.pubads().disableInitialLoad();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
   	googletag.display('sc-top');  
   	googletag.display('sc-superbanner-btf');  
   	googletag.display('sc-mpu-top');  
   	googletag.display('sc-mpu-btf');     	   	   	  

 //  	googletag.display('nuxt-main');
//   	googletag.pubads().clear();
//   	googletag.pubads().refresh();	
//   	googletag.pubads().refresh([sctop]);   	
//   	googletag.pubads().refresh([scmputop]);
//   	googletag.pubads().refresh([scmpubtf]);
//   	googletag.pubads().refresh([scsuperbannerbtf]);     	   	
  });
