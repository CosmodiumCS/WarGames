   [   ¹   Å   20170118123726¬      ¹      _                                        chrome://browser/content/browser-thumbnails.js     )                        Ö    Y   =   ]   Xè]   @]   @]   f    ]      ]      ]      ]   	   ]   
   ]      ]      ]      ]      	]      
a      ]       QÊÊÈÊÊ.Ê8ÊIÊNÊVÊ]ÊhÊvÊÊ  Ð   %   gBrowserThumbnails9   browser.cache.disk_cache_ssl'   PREF_DISK_CACHE_SSL   _captureDelayMS)   _sslDiskCacheEnabled   _timeouts   _tabEvents	   init   uninit   handleEvent   observe9   filterForThumbnailExpiration   onStateChange   _capture   _delayedCapture   _shouldCapture   _topSiteURLs   _clearTimeout   ÿÿÿÿ   %   gBrowserThumbnails                     TabClose      TabSelect                Thumbnails_initC   ­      ¹      ,                                   «                  ¹W   Q    ¸   
V   : Q   ¸   
V   : Q   5   ¸   
V   5   V   B: QV      5   ¸   	
V   5   : 6   QV   5   
¸   
    V   : QV      A,  R  6   QÔÔã$ÚÉ'Õ)'+ÎÉ    PageThumbs'   addExpirationFilter   gBrowser/   addTabsProgressListener   Services   prefs   addObserver'   PREF_DISK_CACHE_SSL)   _sslDiskCacheEnabled   getBoolPref   _tabEvents   forEach   _timeouts   WeakMap   ÿÿÿÿ      Thumbnails_init                        .this                  #   Thumbnails_init/<c  $      ¹                                        '  z  '                 ¹W   Q    5   ¸   
T  V   B: QÝ    gBrowser   tabContainer!   addEventListener    ÿÿÿÿ      aEvent   .this                 #   Thumbnails_uninitC   n      ¹   
                                    Ò  þ  .                ¹W   Q    ¸   
V   : Q   ¸   
V   : Q   5   ¸   
V   5   V   : QV   5   ¸   	
    V   : QÔÔâ3Õ536    PageThumbs-   removeExpirationFilter   gBrowser5   removeTabsProgressListener   Services   prefs   removeObserver'   PREF_DISK_CACHE_SSL   _tabEvents   forEach   ÿÿÿÿ   #   Thumbnails_uninit                        .this                  '   Thumbnails_uninit/<c  $      ¹                                          ò  3                 ¹W   Q    5   ¸   
T  V   B: QÝ    gBrowser   tabContainer'   removeEventListener    ÿÿÿÿ      aEvent   .this                 -   Thumbnails_handleEventC  Æ      ¹      4                                 /  Ë  8                ¹W   QT  5      Qx=   y   !æ=   y   Zæ=   y   qæz   æT  5     QV   5   ¸   
V  :    æV   ¸   
V  : Qæ   IæV   ¸   
T  5   5   	: Q   'æV   ¸   

T  5   5   	: Q   æÉÎh  ¯vËpËpÌÍÔ
ÔXÜXÜXG 	   type   scroll   TabSelect   TabClose   currentTarget   _timeouts   has   _delayedCapture   target   linkedBrowser   _clearTimeout   ÿÿÿÿ   -   Thumbnails_handleEvent                        aEvent   .this                   browser               ±   ÿÿÿÿ          %   Thumbnails_observeC   .      ¹                                         ô  X  I                ¹W   QV      5   ¸   
V   5   : 6    QÚÉ )   _sslDiskCacheEnabled   Services   prefs   getBoolPref'   PREF_DISK_CACHE_SSL   ÿÿÿÿ   %   Thumbnails_observe                        .this                   O   Thumbnails_filterForThumbnailExpirationC        ¹                                        ­  à  O                ¹W   QT  V   5    : QÑ    _topSiteURLs   ÿÿÿÿ   O   Thumbnails_filterForThumbnailExpiration                        aCallback   .this                 1   Thumbnails_onStateChangeC  N      ¹                                        S	  j
  V                ¹W   QT     5   5   E   æQT     5   5   æ   æV   ¸   
T  : QæÚÔÓ    Ci-   nsIWebProgressListener   STATE_STOP!   STATE_IS_NETWORK   _delayedCapture   ÿÿÿÿ   1   Thumbnails_onStateChange                        aBrowser   aWebProgress   aRequest   aStateFlags   aStatus   .this                 %   Thumbnails_captureC  N      ¹                               	       
  ²  ]                ¹W   QV   5    ¸   
   5   5   : ×ÿ   ææV   ¸   
       : Q_ßfaÙf    _topSiteURLs   indexOf   currentURI	   spec   _shouldCapture   ÿÿÿÿ   %   Thumbnails_capture                        aBrowser   .this               )   Thumbnails_capture/<c          ¹                                         I  ¬  a                  T     æ    ¸   
   : QæÖe    PageThumbs-   captureAndStoreIfStale    ÿÿÿÿ      aResult                  3   Thumbnails_delayedCaptureC  ¾      ¹   
   3                               ê  V  h                ¹W   Q  QV   5    ¸   
   :    1æ      V   5    ¸   
   : : Q    æ   ¸   
=   V   C: Qæ          ¸   
V   : V   5   :   QV   5    ¸   	
   V  : QÉÛ,ßÿÿÿóÊlÛnÖqnqÉnÈsÞ    _timeouts   has   clearTimeout   get!   addEventListener   scroll   setTimeout	   bind   _captureDelayMS   set   ÿÿÿÿ   3   Thumbnails_delayedCapture                        aBrowser   .this                  timeout                  E   Thumbnails_delayedCapture/timeout<c   /      ¹                                         ¶    n                 ¹W   QV   ¸    
   : QV   ¸   
   : QÔÔ    _clearTimeout   _capture    ÿÿÿÿ      .this               ±   ÿÿÿÿ          1   Thumbnails_shouldCaptureC  7       ¹                                           u  v                 T      5      æT B: Qæ   ¸   
T  T : QxÎÉ}|Ö    gBrowser   selectedBrowser   PageThumbs)   shouldStoreThumbnail   ÿÿÿÿ   1   Thumbnails_shouldCapture                        aBrowser   aCallback                  !   get _topSiteURLs  +       ¹                                                                  5   ¸   
:  ¸   
    Z    : ÑÐ        NewTabUtils   links   getLinks   reduce    ÿÿÿÿ                        %   get _topSiteURLs/<e  %       ¹                                         ¾                      T    æT  ¸    
T 5   : QæT  × 	   push   url    ÿÿÿÿ   	   urls	   link                  /   Thumbnails_clearTimeoutC  w      ¹                                        S  %                  ¹W   QV   5    ¸   
T  :    YæT  ¸   
=   V   B: Q      V   5    ¸   
T  : : QV   5    ¸   
T  : QæÓØÝÿÿÿóØ    _timeouts   has'   removeEventListener   scroll   clearTimeout   get   delete   ÿÿÿÿ   /   Thumbnails_clearTimeout                        aBrowser   .this       