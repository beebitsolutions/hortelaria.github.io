
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
if( window.location.href.indexOf("newAd=true") < 0 ){
  ; (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: 'ca-pub-3839208778872248',
    enable_page_level_ads: true
  })

  window.googletag.cmd.push(function() {
    window.googletag.pubads().enableSingleRequest()
    window.googletag.pubads().disableInitialLoad()
    window.googletag.pubads().collapseEmptyDivs()
    window.googletag.enableServices()
  })
}

