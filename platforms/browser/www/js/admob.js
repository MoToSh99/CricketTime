
function domLoaded(){
  document.addEventListener("deviceready", onDeviceReady, false);
  window.plugins.insomnia.keepAwake()
}
 
 function onDeviceReady(){
         initAd();
         showBannerFunc();
         showInterstitialFunc();
        alert("device ready");
 }
 
 
 
 
   //initialize the goodies
 function initAd(){
     if ( window.plugins && window.plugins.AdMob ) {
         var ad_units = {
             ios : {
                 banner: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',		//PUT ADMOB ADCODE HERE
                 interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE
             },
             android : {
                 banner: 'ca-app-pub-1857291264243860/6132433044',		//PUT ADMOB ADCODE HERE
                 interstitial: 'ca-app-pub-1857291264243860/6998953855'	//PUT ADMOB ADCODE HERE
             }
         };
         var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
 
         window.plugins.AdMob.setOptions( {
             publisherId: admobid.banner,
             interstitialAdId: admobid.interstitial,
             adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
             bannerAtTop: false, // set to true, to put banner at top
             overlap: true, // banner will overlap webview
             offsetTopBar: false, // set to true to avoid ios7 status bar overlap
             isTesting: false, // receiving test ad
             autoShow: true // auto show interstitial ad when loaded
         });
 
         registerAdEvents();
     } else {
         //alert( 'admob plugin not ready' );
     }
 }
 //functions to allow you to know when ads are shown, etc.
 function registerAdEvents() {
     document.addEventListener('onReceiveAd', function(){});
     document.addEventListener('onFailedToReceiveAd', function(data){});
     document.addEventListener('onPresentAd', function(){});
     document.addEventListener('onDismissAd', function(){ });
     document.addEventListener('onLeaveToAd', function(){ });
     document.addEventListener('onReceiveInterstitialAd', function(){ });
     document.addEventListener('onPresentInterstitialAd', function(){ });
     document.addEventListener('onDismissInterstitialAd', function(){ });
 }
 
 //Add the following 2 functions and call them when you want ads to show
 //display the banner
 function showBannerFunc(){
 window.plugins.AdMob.createBannerView();
 }
 //display the interstitial
 function showInterstitialFunc(){
 window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown and show when it's loaded.
 window.plugins.AdMob.requestInterstitialAd();
 }
 
 