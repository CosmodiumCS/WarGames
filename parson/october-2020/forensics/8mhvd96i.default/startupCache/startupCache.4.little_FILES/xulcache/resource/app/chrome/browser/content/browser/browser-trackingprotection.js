   \   ¹   ,O   20170118123726ö      ¹                                             chrome://browser/content/browser-trackingprotection.js     û                         Ö    Y   ×]   =   ]   =   ]   B]   B]   @]   @]   	@]   
@]   @]       ]      ]      ]      a      ]      ]      ]      ]      ]      	]      
]      ]      ]      ¸   
   : ]       QÊÊÊÊ%Ê*Ê.Ê4Ê<ÊCÊJÊQÊXÊ  Ê  ¦Ê  ½Ê  ÇÑÎ  ï %   TrackingProtection   MAX_INTROSE   privacy.trackingprotection.enabled+   PREF_ENABLED_GLOBALLYS   privacy.trackingprotection.pbmode.enabled?   PREF_ENABLED_IN_PRIVATE_WINDOWS   enabledGlobally/   enabledInPrivateWindows   container   content	   icon#   activeTooltipText'   disabledTooltipText	   init   uninit   observe   enabled   updateEnabled'   enabledHistogramAdd/   disabledPBMHistogramAdd%   eventsHistogramAdd%   shieldHistogramAdd!   onSecurityChange+   disableForCurrentPage)   enableForCurrentPage/   dontShowIntroPanelAgain	   Task   async   showIntroPanel   ÿÿÿÿ   %   TrackingProtection                	   init@        ¹      L                                  h                   ¹W   Q  Q      QV   V  =   : 6    QV   V  =   : 6   QV   V  =   : 6   QV   ¸   
:  Q   5   ¸   	
V   5   
V   B: Q   5   ¸   	
V   5   V   B: QV      ¸   
=   : 6   QV      ¸   
=   : 6   QV   ¸   
V   5   : QV   ¸   
V   5    : QÉËÎÉÎÉÎÉÏããÑÉÑÉ!ØËÊÿÿÿã    container=   #tracking-protection-container   content9   #tracking-protection-content	   icon3   #tracking-protection-icon   updateEnabled   Services   prefs   addObserver+   PREF_ENABLED_GLOBALLY?   PREF_ENABLED_IN_PRIVATE_WINDOWS#   activeTooltipText!   gNavigatorBundle   getStringK   trackingProtection.icon.activeTooltip'   disabledTooltipTextO   trackingProtection.icon.disabledTooltip'   enabledHistogramAdd   enabledGlobally/   disabledPBMHistogramAdd/   enabledInPrivateWindows    ÿÿÿÿ      .this                      $                     init/$u         ¹                                           Á                        ¸   
T  : Ò    document   querySelector    ÿÿÿÿ      selector                ÿÿÿÿ             uninit@  K      ¹                                
         s    %                 ¹W   Q    5   ¸   
V   5   V   : Q    5   ¸   
V   5   V   : Qââ    Services   prefs   removeObserver+   PREF_ENABLED_GLOBALLY?   PREF_ENABLED_IN_PRIVATE_WINDOWS    ÿÿÿÿ      .this                      observe@        ¹                                           =  *                 ¹W   QV   ¸    
:  QÏ    updateEnabled    ÿÿÿÿ      .this                      get enabled  =      ¹                                         M  ß  .                 ¹W   QV   5    D   +æQV   5   E   æQ   ¸   
   : æÐÐÑ    enabledGlobally/   enabledInPrivateWindows)   PrivateBrowsingUtils   isWindowPrivate   window    ÿÿÿÿ      .this                      updateEnabled@  n      ¹   
                                      ñ  è  4                 ¹W   QV      5   ¸   
V   5   : 6    QV      5   ¸   
V   5   : 6   QV   5   V   5   	 6   QÚÉÚÉÉÐ    enabledGlobally   Services   prefs   getBoolPref+   PREF_ENABLED_GLOBALLY/   enabledInPrivateWindows?   PREF_ENABLED_IN_PRIVATE_WINDOWS   container   hidden   enabled    ÿÿÿÿ      .this                   '   enabledHistogramAdd@ E       ¹                                
            ¬  <                      ¸   
   :    ææ   5   ¸   
=   : ¸   
T  : QÑA@ç )   PrivateBrowsingUtils   isWindowPrivate   window   Services   telemetry!   getHistogramById7   TRACKING_PROTECTION_ENABLED   add    ÿÿÿÿ      value                  /   disabledPBMHistogramAdd@ E       ¹                                
         È  y	  C                      ¸   
   :    ææ   5   ¸   
=   : ¸   
T  : QÑHGç )   PrivateBrowsingUtils   isWindowPrivate   window   Services   telemetry!   getHistogramByIdA   TRACKING_PROTECTION_PBM_DISABLED   add    ÿÿÿÿ      value                  %   eventsHistogramAdd@ E       ¹                                
         	  ;
  J                      ¸   
   :    ææ   5   ¸   
=   : ¸   
T  : QÑONç )   PrivateBrowsingUtils   isWindowPrivate   window   Services   telemetry!   getHistogramById5   TRACKING_PROTECTION_EVENTS   add    ÿÿÿÿ      value                  %   shieldHistogramAdd@ E       ¹                                
         R
  ý
  Q                      ¸   
   :    ææ   5   ¸   
=   : ¸   
T  : QÑVUç )   PrivateBrowsingUtils   isWindowPrivate   window   Services   telemetry!   getHistogramById5   TRACKING_PROTECTION_SHIELD   add    ÿÿÿÿ      value                  !   onSecurityChange@      ¹                               @          û  X          	       ¹W   Q    QV   5        
æÉæT    $æV   5   ¸   
=   : Q   $æV   5   ¸   
=   =   : QæT     5   5     QT     5   5   	  QV     æV   5   ¸   
=   
V   5   : QV   5   ¸   
=   =   : QV   5   ¸   
=   =   : QV   5      |æ  Q   ¸   
=   :   QV     5      Fæ   ¸   
=   V  #?W  : Q   ¸   
@: QV   ¸   
:  QæÉæV   ¸   
×: Q   ßæV     yæV   5   ¸   
=   
V   5   : QV   5   ¸   
=   =   : QV   5   ¸   
=   =   : QV   ¸   
?: Q   aæV   5   ¸   
=   
: QV   5   ¸   
=   : QV   5   ¸   
=   : QV   ¸   
>: QæV   ¸   
>: QÉÊÊ  _ßßeØØh  ûâÞÞnÉÑÈÏ
à
Ñ
Òw×tâÞÞ}ÖÙÙÙÑÑ    enabled	   icon   removeAttribute   animate   setAttribute	   true   Ci-   nsIWebProgressListener=   STATE_BLOCKED_TRACKING_CONTENT;   STATE_LOADED_TRACKING_CONTENT   tooltiptext#   activeTooltipText   state1   blocked-tracking-content   content   enabledGlobally   gPrefService   getIntPrefK   privacy.trackingprotection.introCount%   TrackingProtection   MAX_INTROS   setIntPref   savePrefFile   showIntroPanel%   shieldHistogramAdd'   disabledTooltipText/   loaded-tracking-content%   eventsHistogramAdd    ÿÿÿÿ      state   isSimulated   .this                    isBlocking   isAllowing                     introCount               |  ÿÿÿÿ    #               p                 +   disableForCurrentPage@  ç      ¹      E                                     Ç                   ¹W   Q  Q    5   ¸   
=      5   5   5   @@:   Q   ¸   	
   5   :    æ   ¸   

V  : Q   3æ    5   ¸   
V  =       5   5   : QæV   ¸   
?: Q   ¸   
=   : ¸   
:  Q      :  QÉÑÚ  È  ÖÚÕÔ    ÐßÏ    Services   io   newURI   https://   gBrowser   selectedBrowser   currentURI   hostPort)   PrivateBrowsingUtils!   isBrowserPrivate-   addToTrackingAllowlist   perms   add%   trackingprotection   ALLOW_ACTION%   eventsHistogramAdd   document   getElementById   identity-popup   hidePopup   BrowserReload    ÿÿÿÿ      .this                      normalizedUrl               Ú   ÿÿÿÿ          )   enableForCurrentPage@  Ù      ¹      :                                  à  Å  ¦                 ¹W   Q  Q    5   ¸   
=      5   5   5   @@:   Q   ¸   	
   5   :    æ   ¸   

V  : Q   $æ    5   ¸   
V  =   : QæV   ¸   
×: Q   ¸   
=   : ¸   
:  Q      :  QÉÑÚ  ªÈÖÚßÑßÏ    Services   io   newURI   https://   gBrowser   selectedBrowser   currentURI   hostPort)   PrivateBrowsingUtils!   isBrowserPrivate7   removeFromTrackingAllowlist   perms   remove%   trackingprotection%   eventsHistogramAdd   document   getElementById   identity-popup   hidePopup   BrowserReload    ÿÿÿÿ      .this                      normalizedUrl               Ì   ÿÿÿÿ          /   dontShowIntroPanelAgain@  F      ¹                                         á  A  ½                 ¹W   QV   5       5æ   ¸   
=   V   5   : Q   ¸   
@: QæÉÑÉ  ÁÒ    enabledGlobally   gPrefService   setIntPrefK   privacy.trackingprotection.introCount   MAX_INTROS   savePrefFile    ÿÿÿÿ      .this                   E   TrackingProtection.showIntroPanel<a   ¤     ¹                             '        j  õ   Ç           
       ¹   QÇ   Ô  Ê   ÐQ    ¸   
=   :    Q   ¸   
=   :    Q       QZ   [      ¸   
=   : ]   =   ]   	`    [      ]   
   ¸   
=   : ]   =   ]   	`      Q[      ¸   
   =   : ]   B]     Ë  Ð   Q   ¸   
   5      : Q   ¸   
         ¸   
=   :    ¸   
=   Z      `    :       [      ]   : QÈ[   ]   C]      ÌÅ  í  ÇÌÑÉÑÉÌ  ÚÑÈÏÊÑÈÕÛÞßÖÑÑ9Ê  êÊË  èÝ  î    document   getElementById   bundle_brand   getString   brandShortName!   gNavigatorBundleC   trackingProtection.intro.step1of3   label	   text   style   callbackS   trackingProtection.intro.nextButton.label   primary   UITour   getTarget   window%   trackingProtection   value	   done   initForBrowser   gBrowser   selectedBrowser   showInfo=   trackingProtection.intro.title%   getFormattedStringK   trackingProtection.intro.description2   undefined'   closeButtonCallback    ÿÿÿÿ      .generator   .this                      brandBundle   brandShortName   openStep2   buttons   panelTarget                    Y   TrackingProtection.showIntroPanel</openStep2e   ^       ¹   	   )                        	              Ë                    Q  ¸    
:  Q   5   ¸   
=   : =      Q      V   C[    =   ]   : QÉÐ
Ö
ËÔÊ  Ò  Ø /   dontShowIntroPanelAgain   Services   urlFormatter   formatURLPrefG   privacy.trackingprotection.introURL'   ?step=2&newtab=true)   switchToTabHavingURI/   whenComparingAndReplace   ignoreFragment    ÿÿÿÿ                           nextURL                          ignoreFragment             W   ÿÿÿÿ                label         style                       callback         label         style                       value      	   done                q   TrackingProtection.showIntroPanel</<.closeButtonCallbacku          ¹                                          É   í   í                    ¸    
:  1Ï /   dontShowIntroPanelAgain    ÿÿÿÿ                           '   closeButtonCallback                       value      	   done               ÿÿÿÿ   ù   