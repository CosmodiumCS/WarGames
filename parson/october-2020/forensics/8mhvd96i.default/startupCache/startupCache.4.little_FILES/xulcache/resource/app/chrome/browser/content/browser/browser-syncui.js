   Y   ¹   c¹   20170118123726C  
   ¹   6   #                        !              chrome://browser/content/browser-syncui.js     KJ                              ž   
=   :    5      !æ   ž   
º=   	=   
: æ   ž   
º=   =   : X@¡   QÖ    [   f    ]   B]   >]   >]      ]      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]      ]      ]      ]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %   &ž   '
   : ]   (   ]   )   ]   *   ]   +   ]   ,   ž   -
Z      .5   /`       .5   0`   : ]   1    Q   ž   2
    =   3   :    ž   2
    =   4   :    ž   2
    =   5   : ÃÕÊÒÒÉÊÊ$'*ÊMÊcÊwÊ  Ê  Ê  ¡Ê  œÊ  ÎÊ  ØÊ  éÊ  ñÊÊ  ýÊ Ê #Ê 8Ê DÊÊÊ dÊ yÑÈ ¯Ê ÁÊÊ ÐÊ ÑÏÏ Î ß !ßß    gSyncUI;   MIN_STATUS_ANIMATION_DURATION   Cu   importK   resource://gre/modules/XPCOMUtils.jsm   AppConstants-   MOZ_SERVICES_CLOUDSYNC   XPCOMUtils-   defineLazyModuleGetter   CloudSyncI   resource://gre/modules/CloudSync.jsm   fxAccountsK   resource://gre/modules/FxAccounts.jsm	   _obs   _unloaded   _syncStartTime'   _syncAnimationTimer	   init   initUI   _needsSetup%   _needsVerification   _loginFailed   updateUI!   _promiseUpdateUI   onActivityStart#   _updateSyncStatus   onActivityStop   onLoginError   onLogout   _getAppName   doSync'   handleToolbarButton   openSetup   openAddDevice   openPrefs'   openSignInAgainPage'   openSyncedTabsPanel3   maybeMoveSyncedTabsButton	   Task   async3   _updateSyncButtonsTooltip%   formatLastSyncDate   onSyncFinish   onClientsSynced   observe   generateQI   Ci   nsIObserver1   nsISupportsWeakReference   QueryInterface!   defineLazyGetter   _stringBundle   log   weaveService   ÿÿÿÿ      gSyncUI;   MIN_STATUS_ANIMATION_DURATION                  1   weave:service:sync:start   3   weave:service:sync:finish   1   weave:service:sync:error   9   weave:service:setup-complete   3   weave:service:login:start   5   weave:service:login:finish   3   weave:service:login:error   7   weave:service:logout:finish   1   weave:service:start-over   ?   weave:service:start-over:finish   )   weave:ui:login:error   '   weave:ui:sync:error   )   weave:ui:sync:finish   )   weave:ui:clear-error   1   weave:engine:sync:finish                gSyncUI.initc   ª      ¹      1                                 œ  
  *                 ¹W   Q    ž   
=   : QV   5   5      æV   ž   
:  QæV   ž   
:  Q   5   ž   	
V   =   
C: Q   5   ž   	
V   =   C: Q   ž   
=       B: QÕ/ÎÏK8Ï:ßß?ÖJ?K    Cu   importU   resource://services-common/stringbundle.js   weaveService   ready   initUI   updateUI   Services   obs   addObserver'   weave:service:ready!   quit-application   window!   addEventListener   unload    ÿÿÿÿ      .this                      onUnloadC          ¹                                        ú  
  ?                     C6   Q   ž   
=   B: Q   5   ž   
    =   : Q   5   ž   
    =   	: Q   
5   5       æ    5   ž   
    : QæÌ×ßßEÏÛJ    gSyncUI   _unloaded   window'   removeEventListener   unload   Services   obs   removeObserver'   weave:service:ready!   quit-application   Weave   Status   ready	   _obs   forEach   ÿÿÿÿ      onUnload                                         /   gSyncUI.init/onUnload/<c         ¹                                         %
  o
  F                      5   ž   
   T  : Q
Ý    Services   obs   removeObserver   gSyncUI    ÿÿÿÿ      topic                     SUI_initUIC   ³      ¹      4                                ¬
    M                ¹W   Q  Q       æV   5   ž   
=   : QæV   5   ž   
    V   : Q   ž   
=   :   QV  ž   
=   	V   5   
ž   
=   : : QV   ž   
:  QV   ž   
:  QÉOËÚSÕUSXÑÈå"ÿÿÿÞ[Ï]Ð    gBrowser	   _obs	   push1   weave:notification:added   forEach   document   getElementById   sync-status   setAttribute   label   _stringBundle#   GetStringFromName   syncnow.label3   maybeMoveSyncedTabsButton   updateUI   ÿÿÿÿ      SUI_initUI                        .this                     broadcaster                     SUI_initUI/<c  $      ¹                                        @    S                 ¹W   Q    5   ž   
V   T  C: QÝ    Services   obs   addObserver    ÿÿÿÿ      topic   .this             Š   ÿÿÿÿ             _needsSetup@  Í      ¹      3                               	    c                 ¹W   Q  QV   5    5      (æ   ž   
:  ž   
    : Éæ=     Q   5   ž   
=   	: W  Q   æ  Qv  QÉ    æ   
ž   
   5   ž   
:     5   D   æQV  =   æ: ÉÉeÔÌÓslÊÖÐÔqÝÕËqs    weaveService#   fxAccountsEnabled   fxAccounts   getSignedInUser	   then      Services   prefs   getCharPref/   services.sync.firstSync   Promise   resolve   Weave   Status   checkSetup+   CLIENT_NOT_CONFIGURED   notReady    ÿÿÿÿ      .this                      firstSync                     e                     _needsSetup/<e         ¹                                         ·  <  f                  T  E   æQT  5    æ hÔ    verified    ÿÿÿÿ   	   user             H   #         À   ÿÿÿÿ    A             z              Ê                    %   _needsVerification@  M      ¹                                
          +  w                 ¹W   QV   5    5      &æ   ž   
:  ž   
    : æ   ž   
B: zÎÌÓ    Í    weaveService#   fxAccountsEnabled   fxAccounts   getSignedInUser	   then   Promise   resolve    ÿÿÿÿ      .this                   )   _needsVerification/<e         ¹                                         ç    {                  T      æBæT  5     }
  É    verified    ÿÿÿÿ   	   user                  )   gSyncUI._loginFailedc         ¹      2                                  û  ô                   ¹W   QV   5    5       !æV   5   ž   
=   : QBæV   5   ž   
=   [       5   5   ]   	: Q   5   5      5   
ÏÙ    ÕÔ  Ú    weaveService   ready   log   debugg   _loginFailed has sync not ready, so returning falseG   _loginFailed has sync state=${sync}   Weave   Status   login	   sync7   LOGIN_FAILED_LOGIN_REJECTED    ÿÿÿÿ      .this                      	   sync                    updateUI@  (      ¹      
                                 B  ª                    ¹   Q   ž    
:  ž   
    : Qà !   _promiseUpdateUI   catch    ÿÿÿÿ      .this                      updateUI/<e         ¹                                         i  ¥                       5    ž   
=   T  : QÝ    log   error   updateUI failed    ÿÿÿÿ      err                  !   _promiseUpdateUI@  (      ¹                                       è  ²  ¡                  ¹   Q   ž    
:  ž   
    : ÌÓ  º    _needsSetup	   then    ÿÿÿÿ      .this                   %   _promiseUpdateUI/<e  k      ¹      V                         &           ¬  ¢                    Q        æ   ž   
:  Éæ   ž   
:     Q   ž   
=   : C6   Q   ž   
=   : C6   Q   ž   
=   	: C6   Q   
E   /æQ   
5   E   æQ   
   
:  5   5   æ   &æ   ž   
=   	: B6   Q   væV      &æ   ž   
=   : B6   Q   KæT     &æ   ž   
=   : B6   Q   !æ   ž   
=   	: B6   Qæ   ž   
:  ÉÉ
Ì  ¹  Š
ÌÈÛÛÛç*Î!á!á!áÜÌ    gBrowser   Promise   resolve   _loginFailed   document   getElementById#   sync-reauth-state   hidden!   sync-setup-state%   sync-syncnow-state   CloudSync   ready   adapters   count3   _updateSyncButtonsTooltip    ÿÿÿÿ      needsSetup                     loginFailed                d  ÿÿÿÿ    #              h                      onActivityStart@  î      ¹      F                                  é  ©  œ                 ¹W   Q  Q        
æÉæV   5   ž   
=   : Q      V   5   : QV      ž   
:  6   Q   	ž   

=   :   QV  ž   
=   =   : QV  ž   
=   V   5   ž   
=   : : QV  ž   
=   =   : QV   ž   
:  QÉ  Ì  ÁÙ×ÐÉÑÈÙå"ÿÿÿÞÙÐ    gBrowser   log   debug   onActivityStart   clearTimeout'   _syncAnimationTimer   _syncStartTime	   Date   now   document   getElementById   sync-status   setAttribute   syncstatus   active   label   _stringBundle#   GetStringFromName   syncing2.label   disabled	   true   updateUI    ÿÿÿÿ      .this                      broadcaster               á   ÿÿÿÿ                        #   _updateSyncStatus@        ¹      4                                  ¿  õ  Î                 ¹W   Q  Q        
æÉæ   ž   
=   :   QV  ž   
=   : QV  ž   
=   : QV  ž   
=   V   5   	ž   

=   : : QV   ž   
:  QÉ  Ö  ÑÑÈÔÔå"ÿÿÿÞÐ    gBrowser   document   getElementById   sync-status   removeAttribute   syncstatus   disabled   setAttribute   label   _stringBundle#   GetStringFromName   syncnow.label   updateUI    ÿÿÿÿ      .this                      broadcaster                  ÿÿÿÿ                           onActivityStop@  Ý      ¹      A                                  â  Ø                 ¹   Q     Q        
æÉæ   5   ž   
=   : Q   ž   
:     QV      5     QV        [æ  Q   V    Q         5   	: Q      
   
    V  : 6   	QÉ   æ   ž   
:  QæÉÊ  ç  ÛÚÌÈÔÊV
ÏØÙÐÒ    gBrowser   log   debug   onActivityStop	   Date   now   _syncStartTime;   MIN_STATUS_ANIMATION_DURATION   clearTimeout'   _syncAnimationTimer   setTimeout#   _updateSyncStatus    ÿÿÿÿ      .this                      now   syncDuration                      animationTime                  Q   onActivityStop/this._syncAnimationTimer<u          ¹                                          |    ã                     ž    
:  2Ï #   _updateSyncStatus    ÿÿÿÿ                    Ë   ÿÿÿÿ                  z   J                 !   SUI_onLoginErrorC   9      ¹                                           ä  é                ¹W   QV   5    ž   
=      5   : QV   ž   
:  QãÏ    log   debugU   onLoginError: login=${login}, sync=${sync}   Weave   Status   updateUI   ÿÿÿÿ   !   SUI_onLoginError                        .this                      SUI_onLogoutC         ¹                                            %   ñ                ¹W   QV   ž    
:  QÏ    updateUI   ÿÿÿÿ      SUI_onLogout                        .this                   '   gSyncUI._getAppNamec   5       ¹                                         @   ¿   õ                    Q    A=   ,  R    QV   ž   
=   : ÉÉÏÈÐ    StringBundleS   chrome://branding/locale/brand.properties   get   brandShortName    ÿÿÿÿ                           brand                .   ÿÿÿÿ    2                       doSync@  8      ¹                                       G!  "  ý                  ¹   Q   ž    
:  ž   
    : ž   
   : Qæ   þ     _needsSetup	   then   catch    ÿÿÿÿ      .this                      doSync/<e  =       ¹                                       h!  4"  þ                  T      æ            >: Qæ   5   ž   
@=   @: Q
ÖÜ    setTimeout   Services   obs   notifyObservers'   cloudsync:user-sync    ÿÿÿÿ      needsSetup                     doSync/</<u          ¹                                          €!  Ú!                        5   5   ž   
:  Ù/    Weave   Service   errorHandler'   syncAndReportErrors    ÿÿÿÿ                           doSync/<e         ¹                                         <"  "                      5    ž   
=   T  : QÝ    log   error-   Failed to force a sync    ÿÿÿÿ      err                  '   handleToolbarButton@  8      ¹                                       G#  V$                   ¹   Q   ž    
:  ž   
    : ž   
   : Qæ       _needsSetup	   then   catch    ÿÿÿÿ      .this                   +   handleToolbarButton/<e  H       ¹                                	         h#  ô#                   T  D   æQ   ž    
:  æ   æ   ž   
:  Q   æ   ž   
:  QæÖÖÑ    _loginFailed   openSetup   doSync    ÿÿÿÿ      needsSetup                  +   handleToolbarButton/<e         ¹                                         ü#  P$                      5    ž   
=   T  : QÝ    log   errorO   Failed to handle toolbar button command    ÿÿÿÿ      err                     SUI_openSetupC  &      ¹      B                                  ×%  (  #         
           Q¹W  QT     QT H   æQ=    æ  QV  5   5      }æ   5   ž   
   : E   4æQ   5   ž   
   : ž   
   5   	: æ   æ=   
W  QæV  ž   
V  : Q   næ  Q   5   ž   
=   :   QV     æV  ž   
:  Q   )æ   ž   
=   =   =   V   : QæÉæÞÒÎxÖ
ÊÖ
ØËÙ
ÖÈÕÑÊ 0 5    syncbutton   weaveService#   fxAccountsEnabled   UITour)   tourBrowsersByWindow   get   window   has   gBrowser   selectedBrowser   uitour   openPrefs   Services   wm'   getMostRecentWindow%   Weave:AccountSetup   focus   openDialogO   chrome://browser/content/sync/setup.xul   weaveSetupA   centerscreen,chrome,resizable=no   ÿÿÿÿ      SUI_openSetup                        wizardType   entryPoint   .this                  win            Â   b   ÿÿÿÿ          +   gSyncUI.openAddDevicec          ¹      6                                   û(  :*  8                   Q    5   ž   
:      
æÉæ   5   ž   
=   :    QV      æV   ž   
:  Q   %æ   ž   	
=   
=   =   : QæÉÑ B <ÖÈÕÑÊ @    Weave   Utils!   ensureMPUnlocked   Services   wm'   getMostRecentWindow   Sync:AddDevice   focus   window   openDialogW   chrome://browser/content/sync/addDevice.xul   syncAddDeviceA   centerscreen,chrome,resizable=no    ÿÿÿÿ                           win                ~   ÿÿÿÿ    $                    #   gSyncUI.openPrefsc  +       ¹                                        S*  ±*  D                         =   [   [    T  ]   ]   : QÔÍÿÿÿÕ    openPreferences   paneSync   entrypoint   urlParams    ÿÿÿÿ      entryPoint                        entrypoint                       urlParams                 7   gSyncUI.openSignInAgainPagec  3       ¹                                           Ô*  &+  H                   QT  H   æQ=    æ   Q   ž   
V   : QÌÒÔ    syncbutton   gFxAccounts'   openSignInAgainPage    ÿÿÿÿ      entryPoint                '   openSyncedTabsPanel@  ö       ¹      <                                 >+  ò-  L                   QÇ       ž   
=   :    QV      æV   5      æ    5   æ   Q   ž   
=   : D   æQ   ž   
=   : æ   Q       5      ?æ   	ž   

:  ž   
    : ž   
   5   : Q   %æ   	ž   
=         : QæÈËÑÈæÑ	ÊÑÊÐ:æÊ TÊá    CustomizableUI)   getPlacementOfWidget   sync-button	   area   AREA_NAVBAR   document   getElementById'   PanelUI-menu-button   AREA_PANEL   PanelUI	   show	   then   catch   Cu   reportError   showSubView%   PanelUI-remotetabs    ÿÿÿÿ                           placement	   area   anchor                   +   openSyncedTabsPanel/<e   *       ¹                                          ÷,  G-  T                     ž   
=               : Qé    PanelUI   showSubView%   PanelUI-remotetabs    ÿÿÿÿ                    ê   ÿÿÿÿ          3   maybeMoveSyncedTabsButton@  º       ¹   
   8                                  Š/  >1  d                     Q=      QB   Q   5   ž   
V  : W   Q   æ  Qv  QÉ    æV      
æÉæ   ž   
=   :     %æ   ž   
=      5   : Qæ   5   ž   	
V  C: QÉÊ
ÊÕÐÔ q mÑàÛ 9   browser.migrated-sync-button   Services   prefs   getBoolPref   CustomizableUI)   getPlacementOfWidget   sync-button   addWidgetToArea   AREA_PANEL   setBoolPref    ÿÿÿÿ                           migrated   prefName                      _                 "      
   ¯   ÿÿÿÿ   F              a                    E   gSyncUI._updateSyncButtonsTooltip<a   º     ¹      Æ                      ;         ²2  q:  y                 ¹   QÇ   Ô  Ê   ÐQ        æ[    ]   C]   È   Ìæ   Q   5   ž   
=   :    Q   æÇ   v   QÈ    æ[     ž   
:  ]   B]     Ë  Ð   Q[     ž   
:  ]   B]     Ë  Ð   Q  ž   	
:     Q   Q      :æ   
5   ž   
=   Z      `    ?:    Q   Þæ      *æ  5   ž   
=   :    Q   ®æ      :æ   
5   ž   
=   Z      `    ?:    Q   næÇ      A   5   ž   
=   : ,  R    Q  ž   
   :   QÈ   æÇ   v   QÈ    æ        æ[   ]   C]   È   Ìæ   ž   
=   :    Q      Fæ      %æ   ž   
=      : Q   æ   ž   
=   : QæÈ[   ]   C]      ÌÅ ¬ yÌÑ ­É } ÖÑÔÑÞÑÞÌÉ5ÛMËÿÿÿÁÏ%ÖÏ5ÛPËÿÿÿŸÏMÜÿÿÿ÷ÉÑÒÔ ¢Ñ ­É ¥ÑÉ àï    gBrowser   value	   done   Services   prefs   getCharPref-   services.sync.username   _needsSetup%   _needsVerification   _loginFailed   gFxAccounts   strings)   formatStringFromName#   verifyDescription   _stringBundle#   GetStringFromName1   signInToSync.description)   reconnectDescription	   Date-   services.sync.lastSync%   formatLastSyncDate   document   getElementById   sync-status   setAttribute   tooltiptext   removeAttribute    ÿÿÿÿ      .generator   .this                      email   needsSetup#   needsVerification   loginFailed   tooltiptext   broadcaster                       ex                       lastSync                       e                           value      	   done                       value      	   done                       value      	   done                       value      	   done                       value      	   done            ¥  Q        ?   $           ÿÿÿÿ    7             r             ±  G                       3            ©   Ø             5   gSyncUI.formatLastSyncDatec  Ë      ¹      @                               :  +=  ¯         	       ¹W   Q      Q  Q    :    QT  V     )æ[   =    ]   =   ]   W  Q   .æ[   =    ]   =   ]   =   ]   W  QæT  ž   
   V  :   QV   5   	ž   

=   Z   V  `    ?: ÉÉÎÈ žÈ$ÊÕÊÊÐÓÈÚCÊÿÿÿÄ 	   long   month   numeric   day   weekday	   hour   minute%   toLocaleDateString   undefined   _stringBundle)   formatStringFromName   lastSync2.label    ÿÿÿÿ   	   date   .this                    dateFormat   sixDaysAgo%   lastSyncDateString                  M   gSyncUI.formatLastSyncDate/sixDaysAgo<e   T       ¹                                         Æ:  L;  ±                   Q    A,  R     QV   ž   
V   ž   
:  ×: QV   ž   
>>>>: QV   ÉÉ
ÊÈÖÿÿÿóÓ 	   Date   setDate   getDate   setHours    ÿÿÿÿ                        	   date                M   ÿÿÿÿ    Q                          month         day                       weekday      	   hour         minute             ¶   ÿÿÿÿ    È                    !   SUI_onSyncFinishC   +      ¹                                        W=  ©=  Á               ¹W   Q  QV   5    ž   
=   :   QÉÕÉ    _stringBundle#   GetStringFromName!   error.sync.title   ÿÿÿÿ   !   SUI_onSyncFinish                        .this                     title                  ÿÿÿÿ          /   gSyncUI.onClientsSyncedc          ¹                                         Ç=  ?  Å                   Q    ž   
=   :    QV      _æ   5   5   5   5   ?   $æV   ž   
=   	=   
: Q   æV   ž   
=   	=   : QæÉÑÈÛßÛ    document   getElementById%   sync-syncnow-state   Weave   Service   clientsEngine   stats   numClients   setAttribute   devices-status   multi   single    ÿÿÿÿ                           broadcaster                ~   ÿÿÿÿ             SUI_observeC  p     ¹   '   Ö                          !        #?  G  Ð               ¹W   QV   5    ž   
=   T : QV   5      !æ   ž   
=   T : QæT  E   6æQT  '=   E   %æQ=   T  qE   æQ=   	T  5   qæ   æT  5   5   U  QæT x=   
y   !æ=   y   +æ=   y    æz   /æV   ž   
:  Q   æV   ž   
:  Q   æT x=   y   æ=   y   €æ=   y   æ=   y   æ=   y   æ=   y   xæ=   y   æ=   y   wæ=   y   æ=   y   æ=   y   æ=   y   æ=   y   ©æ=   y   Åæz   ÜæV   ž   
:  Q   ÇæV   ž   
:  Q   ²æV   ž   
:  Q   æV   ž    
:  Q   æV   ž   
:  Q   sæV   ž   !
:  Q   ^æV   ž   "
:  Q   IæT =   #   ææV   ž   $
:  Q   "æ   %   %V   5   &: Q   æÜÉÙ  ØÊÑÐÏÒkQvËpËpÌÏXÏXk wvËpËpËpËpËpËpËpËpËpËpËpËpËpÌÏXÏXÏXÏXÏXÏXÏXÉ
  	ÏX×X    log   debug   observed   _unloaded   Cu   reportErrorK   SyncUI observer called after unload:    object   wrappedJSObject;   observersModuleSubjectWrapper1   weave:service:sync:start3   weave:service:sync:finish1   weave:service:sync:error   onActivityStart   onActivityStop)   weave:ui:sync:finish'   weave:ui:sync:error9   weave:service:setup-complete5   weave:service:login:finish3   weave:service:login:start1   weave:service:start-over)   weave:ui:login:error3   weave:service:login:error7   weave:service:logout:finish?   weave:service:start-over:finish'   weave:service:ready1   weave:notification:added1   weave:engine:sync:finish!   quit-application   onSyncFinish   updateUI   onLoginError   onLogout   initUI#   initNotifications   clients   onClientsSynced   clearTimeout'   _syncAnimationTimer   ÿÿÿÿ      SUI_observe                        subject   topic	   data   .this                    	   _obs         _unloaded         _syncStartTime      '   _syncAnimationTimer      	   init         initUI         _needsSetup      %   _needsVerification         _loginFailed         updateUI      !   _promiseUpdateUI         onActivityStart      #   _updateSyncStatus         onActivityStop         onLoginError         onLogout         _getAppName         doSync      '   handleToolbarButton         openSetup         openAddDevice         openPrefs      '   openSignInAgainPage      '   openSyncedTabsPanel      3   maybeMoveSyncedTabsButton      3   _updateSyncButtonsTooltip      %   formatLastSyncDate         onSyncFinish         onClientsSynced         observe         QueryInterface                  C   /       ¹                                          ­G  åH                       5   ž   
   5   : ž   
=   : ÑÊ 	Ê 	    CcA   @mozilla.org/intl/stringbundle;1   getService   Ci-   nsIStringBundleService   createBundle]   chrome://weave/locale/services/sync.properties    ÿÿÿÿ                         C          ¹                                          I  ^I  !                     5   ž   
=   : Ö    Log   repository   getLogger)   browserwindow.syncui    ÿÿÿÿ                         C   /       ¹                                	          I  HJ  %                     5   5   ž   
    5   5   : 5   ÖÏ &	È    Components   classes9   @mozilla.org/weave/service;1   getService   interfaces   nsISupports   wrappedJSObject    ÿÿÿÿ              