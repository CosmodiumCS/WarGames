   `   ¹   [É   20170118123726     ¹   '   Ó                                       chrome://browser/content/browser-fxaccounts.js     µ?                        Ö    Y   =   ]   B]   B]       a      a      a      a      a   	   a   
   a      a      a      	a      
a      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]       Q   ¸    
    =   !   :    ¸   "
    =   #=   $:    ¸   "
º=   %=   &: ÊÊ	ÊÊ#Ê(Ê-Ê2Ê7Ê<ÊCÊRÊVÊ[ÊnÊzÊ  Ê  ²Ê  ·Ê  ÅÊ CÊ XÊÊ sÊÊÊ ¥Ê ¯Ð ÅßÖ ÉÒ Ì5    gFxAccounts   fxa-migrationC   SYNC_MIGRATION_NOTIFICATION_TITLE   _initialized)   _inCustomizationMode   weave   topics   panelUIFooter   panelUIStatus   panelUIAvatar   panelUILabel   panelUIIcon   strings   loginFailed-   sendTabToDeviceEnabled   remoteClients	   init   uninit   observe/   onMigrationStateChanged   handleEvent   updateUI#   updateAppMenuItem%   onMenuPanelCommand   openPreferences!   openAccountsPage'   openSignInAgainPage   sendTabToDevice9   populateSendTabToDevicesMenu)   updateTabContextMenu'   initPageContextMenu   XPCOMUtils!   defineLazyGetter!   FxAccountsCommon-   defineLazyModuleGetter   fxaMigratorQ   resource://services-sync/FxaMigrator.jsm5   EnsureFxAccountsWebChannel_   resource://gre/modules/FxAccountsWebChannel.jsm   ÿÿÿÿ      gFxAccounts                   get weave  >      ¹                                         \                     ¹W   QV   %    QV      5   ¸   
   5   : 5   6    ÊÕÊÍ    weave   Cc9   @mozilla.org/weave/service;1   getService   Ci   nsISupports   wrappedJSObject    ÿÿÿÿ      .this                      get topics        ¹      2                                   '                     ¹W   QV   %    QV   Z   	=   `    =   `   =   `   =   `   =   `   =   `   V   5   5   `   V   5   5   	`   V   5   5   
`   6    ÊÉÊÊÊÊÊÊÓÓØ!    topics'   weave:service:ready5   weave:service:login:change9   weave:service:setup-complete1   weave:service:sync:error)   weave:ui:login:error7   fxa-migration:state-changed!   FxAccountsCommon)   ONLOGIN_NOTIFICATION+   ONLOGOUT_NOTIFICATION=   ON_PROFILE_CHANGE_NOTIFICATION    ÿÿÿÿ      .this                   #   get panelUIFooter  /      ¹                                         $    #                 ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    panelUIFooter   document   getElementById%   PanelUI-footer-fxa    ÿÿÿÿ      .this                   #   get panelUIStatus  /      ¹                                         °  &  (                 ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    panelUIStatus   document   getElementById%   PanelUI-fxa-status    ÿÿÿÿ      .this                   #   get panelUIAvatar  /      ¹                                         <  ²  -                 ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    panelUIAvatar   document   getElementById%   PanelUI-fxa-avatar    ÿÿÿÿ      .this                   !   get panelUILabel  /      ¹                                         Ç  :  2                 ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    panelUILabel   document   getElementById#   PanelUI-fxa-label    ÿÿÿÿ      .this                      get panelUIIcon  /      ¹                                         N  ¾  7                 ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    panelUIIcon   document   getElementById!   PanelUI-fxa-icon    ÿÿÿÿ      .this                      get strings  4      ¹                                         Î  c  <                 ¹W   QV   %    QV      5    ¸   
=   : 6    ÊÕ>ÈA    strings   Services   createBundleW   chrome://browser/locale/accounts.properties    ÿÿÿÿ      .this                      get loginFailed  g       ¹      "                                   w  æ	  C                    Q    5   ¸   
   5   5   : 5      QV   5       
æBÉæ   5   	5   
   5   ÉÉFÑÏFÍIÊPOÚ    Cc9   @mozilla.org/weave/service;1   getService   Components   interfaces   nsISupports   wrappedJSObject   ready   Weave   Status   login7   LOGIN_FAILED_LOGIN_REJECTED    ÿÿÿÿ                           service                `   ÿÿÿÿ    F              d                    5   get sendTabToDeviceEnabled         ¹      
                                    
  ]
  R                      5   ¸   
=   : Ö    Services   prefs   getBoolPrefK   services.sync.sendTabToDevice.enabled    ÿÿÿÿ                        #   get remoteClients  &       ¹                                        s
  ê
  V                      5   5   5   ¸   
    : ÛWY    Weave   Service   clientsEngine   remoteClients	   sort    ÿÿÿÿ                        '   get remoteClients/<u         ¹                                         ¾
  ä
  X                  T  5    ¸   
T 5    : Ú 	   name   localeCompare    ÿÿÿÿ      a   b                  !   gFxAccounts.initc   ø      ¹      @                                 þ
  Ï  [          	       ¹W   QV   5    D   æQ   5   5    æ   ææ  QV   5   -Á
     5m  Q5     Q   5   ¸   
V   V  B: QãQ¸   	
:   5   
ÿÿÿºæ É   ¸   
=   V   : Q   ¸   
=   V   : Q      :  QV   C6    QV   ¸   
:  Q]ÐÑlaØ8KÒ	ÞaËÿÿÿîÕeÙÙhÎËkÏ    _initialized   window   toolbar   visible   topics   value   Services   obs   addObserver	   next	   done   gNavToolbox!   addEventListener+   customizationstarting'   customizationending5   EnsureFxAccountsWebChannel   updateUI    ÿÿÿÿ      .this                      topic            G   K      6   g   ÿÿÿÿ          %   gFxAccounts.uninitc         ¹      ,                                 å    n                 ¹W   QV   5        ææ  QV   5   -Á
     4m  Q5     Q   5   ¸   
V   V  : QãQ¸   
:   5   ÿÿÿ»æ ÉV   B6    QÊxsØ8JÒ	ÝsËÿÿÿîÕwË    _initialized   topics   value   Services   obs   removeObserver	   next	   done    ÿÿÿÿ      .this                      topic            0   J         f   ÿÿÿÿ          '   gFxAccounts.observec  u      ¹      '                                  ²  ü  z                 ¹W   QT x=    y   æV   5   5   y   &æz   5æV   ¸   
T T  : Q   /æV   ¸   
:  Q   æV   ¸   
:  Q   ækjvÎpÌ|ÕXÏXÏX 7   fxa-migration:state-changed!   FxAccountsCommonG   ONPROFILE_IMAGE_CHANGE_NOTIFICATION/   onMigrationStateChanged   updateUI    ÿÿÿÿ      subject   topic	   data   .this                 G   gFxAccounts.onMigrationStateChangedc   ã     ¹                              -        #  Å         	          ¹   Q                 Q    5   ¸   
=   :    Q   5   ¸   
=   :   Q   5   ¸   
=   :   Q   5   ¸   
=   :   Q   5   	5   
  QZ   [   V  ]   V  ]       ]   `      Q   ¸   
:    Q   ¸   
V  :   QV  ¸   
V  : QV     xæ  Q   ¸   
=   :   QV  =   6   QV  ¸   
=   V  5   : QV  V  5   6   QV  ¸   
V  : QÉæV   ¸   
V     5      V   5   V  : Q   ¸   
:  QÉâÖÈÖÈÖÈÖÈÔÉÉÕ  ÌÈÐ
ÈÓ
ÑÈÏÝÓÕÏÊÉ  ¨  ¯Ñ    window   document   getElementById-   global-notificationbox   strings#   GetStringFromName3   autoDisconnectDescription5   autoDisconnectSignIn.label=   autoDisconnectSignIn.accessKey   fxaMigrator   learnMoreLink   label   accessKey   callback-   createDocumentFragment   createTextNode   appendChild   createElement   className   text-link   setAttribute   value	   text	   href%   appendNotificationC   SYNC_MIGRATION_NOTIFICATION_TITLE   undefined)   PRIORITY_WARNING_LOW#   updateAppMenuItem    ÿÿÿÿ      .this                      nb   msg   signInLabel   signInAccessKey   learnMoreLink   buttons   fragment   msgNode                   	   link      	            k   gFxAccounts.onMigrationStateChanged/buttons<.callbacke          ¹                                          ¸  ë                       ¸    
:  Q
Ð    openPreferences    ÿÿÿÿ                              label         accessKey         callback          )   ¹  ÿÿÿÿ   5  l                 /   gFxAccounts.handleEventc  .      ¹                                        à  R  ²                 ¹W   QV   T  5   =   6    QV   ¸   
:  QØÏ )   _inCustomizationMode	   type+   customizationstarting#   updateAppMenuItem    ÿÿÿÿ      event   .this                 )   gFxAccounts.updateUIc   z      ¹      "                                  j  >  ·                 ¹W   Q    Q    5   ¸   
=   :   QV  ¸   
V   5   :   QV     æV  ¸   
V  C: QæV   ¸   
:  QÉÊÖÈÔÈÕÐ    window   document   getElementById-   global-notificationbox1   getNotificationWithValueC   SYNC_MIGRATION_NOTIFICATION_TITLE%   removeNotification#   updateAppMenuItem    ÿÿÿÿ      .this                      nb   n               i   ÿÿÿÿ          ;   gFxAccounts.updateAppMenuItemc   \     ¹      ­                       G        ¯  -  Å                 ¹   QÇ   B   Q    5   ¸   
=   :    Q   æ   Qv   QÉ    æ  5   5       æ   ¸   
:  Èæ  5   B6   	Q  5   
   æ  5   ¸   
=   =   : Q  5   ¸   
=   =   : Q  5   ¸   
=   =   : Q  5   ¸   
=   =   : Q   næ  5   ¸   
=   : Q  5   ¸   
=   : Q  5   ¸   
=   : Q  5   ¸   
=   : Qæ  5   ¸   
=   :    Q  5   ¸   
=   :    Q  5   ¸   
=   :    Q  5   ¸   
=   :    Q       Q      Q   ¸   
:  ¸   
   : ¸   
   : ¸   
   : ÈÈ ÖÑÔÐÌ A  ÐÑÊ  ßßßåÚÚÚÛÖÉÖÉÖÉÖÉÌ Ì (ÌÚ 4 (Ê 9 ( A    Services   prefs   getBoolPrefS   identity.fxaccounts.profile_image.enabled   weave#   fxAccountsEnabled   Promise   resolve   panelUIFooter   hidden)   _inCustomizationMode   panelUIStatus   setAttribute   disabled	   true   panelUILabel   panelUIAvatar   panelUIIcon   removeAttribute   getAttribute   defaultlabel   errorlabel   unverifiedlabel'   signedinTooltiptext   fxAccounts   getSignedInUser	   then   catch    ÿÿÿÿ      .this                   %   profileInfoEnabled   defaultLabel   errorLabel   unverifiedLabel%   defaultTooltiptext%   updateWithUserData#   updateWithProfile                       e                   a   gFxAccounts.updateAppMenuItem/updateWithUserDatae        ¹                                \         Ö  Á$  å                    Q    5      
æÉæ  5   ¸   
=         : Q  5   ¸   
=         : Q  5   ¸   
=   	: Q  5   ¸   
=   
: Q  5   5   ¸   
=   : QB   QT    ÿæ  5      ªæ  Q  5   ¸   
=   Z   T  5   `    ?:   Q  5   ¸   
=   	=   : Q  5   ¸   
=         : Q  5   ¸   
=   V  : QCW   QÉ  æT  5       Éæ  Q  5   ¸   
=   Z   T  5   `    ?:   Q  5   ¸   
=   	=   : Q  5   ¸   
=   =   : Q  5   ¸   
=         : Q  5   ¸   
=   V  : QCW   QÉ   Gæ  5   ¸   
=   	=   : Q  5   ¸   
=   T  5   : Qæ         %æ  5   ¸   
=   
=   : QæV      *æ   ¸   
   5   =   : Q    æ   ¸   
   5   : QæÉÐ   ìääÚÚß
Ê  ¥ÛPÎÿÿÿÅÈ
ß
ä
Þ
ÍÉ  ÄÛMÎÿÿÿÈÈ
ß
ß
ä
Þ
Í
ß
ãÊ
à%åÜ    window   closed   panelUILabel   setAttribute   label   panelUIStatus   tooltiptext   panelUIFooter   removeAttribute   fxastatus   fxaprofileimage   panelUIAvatar   style   removeProperty!   list-style-image   loginFailed   strings)   formatStringFromName)   reconnectDescription   email   error   verified#   verifyDescription   unverified	   true   signedin   enabled/   gMenuButtonBadgeManager   addBadge   BADGEID_FXA1   fxa-needs-authentication   removeBadge    ÿÿÿÿ      userData                     showErrorBadge                   %   tooltipDescription                  %   tooltipDescription                 ÿÿÿÿ                 Û               ¸                _   gFxAccounts.updateAppMenuItem/updateWithProfilee  ä       ¹      5                                ß$  (                           ØæT  5       (æ  5   ¸   
=   T  5    : QæT  5      æ   QÇ     5   ¸   
=   =   : Q=   T  5   =   	   Q  5   
5      6   Q   A,  R     QV       6   QV   T  5   6   QÈæÊÈ
ãÈË
ßÚ
ÚÊÈ
Ð #
Ô    displayName   panelUILabel   setAttribute   label   avatar   panelUIFooter   fxaprofileimage   set   url("   ")   panelUIAvatar   style   listStyleImage   Image   onerror   src    ÿÿÿÿ      profile                     bgImage   img                   w   gFxAccounts.updateAppMenuItem/updateWithProfile/img.onerrore   `       ¹                                          &  C(                     5    5   5         H   ?æ  5   ¸   
=   : Q  5    5   ¸   
=   : QæßÚà
    panelUIAvatar   style   listStyleImage   panelUIFooter   removeAttribute   fxaprofileimage   removeProperty!   list-style-image    ÿÿÿÿ                 Z      ÿÿÿÿ         ?   gFxAccounts.updateAppMenuItem/<e  c       ¹      .                         	        ¯(  +  (                       T  : QT   D   "æQT  5     D   æQ       æ   æ@æ   ¸   
:  ¸   
    : Ò
ËÐÌ 4 0ÌÓ    verified   fxAccounts-   getSignedInUserProfile   catch    ÿÿÿÿ      userData                  C   gFxAccounts.updateAppMenuItem/</<e         ¹                                           *  þ*  0                 @     ÿÿÿÿ      err                 ?   gFxAccounts.updateAppMenuItem/<e          ¹                                          +  o+  4                 T      ææ      T  : Q
 8Ò     ÿÿÿÿ      profile                 ?   gFxAccounts.updateAppMenuItem/<e  3       ¹                                         w+  -  9                   5    5   ¸   
=   T  : Q      @: Q >âÐ !   FxAccountsCommon   log   error?   Error updating FxA account info    ÿÿÿÿ      error                $         O  ÿÿÿÿ   A              v              Y                   =   gFxAccounts.onMenuPanelCommandc   Ä      ¹      <                                   *-  Â.  C                ¹W   QV   5    ¸   
=   : x=   y   æ=   y    æz   hæV   ¸   
:  Q   hæV   5    ¸   
=   :    æV   ¸   
:  Q   æV   ¸   
=   : Qæ   æV   ¸   
:  Q   æ   	¸   

:  QÕk  vËpÌÏXÕ
ÕÕXÏXÐ    panelUIFooter   getAttribute   fxastatus   signedin   error   openPreferences   unverified'   openSignInAgainPage   menupanel   PanelUI	   hide    ÿÿÿÿ      .this                   7   gFxAccounts.openPreferencesc   -       ¹                                         á.  6/  X                         =   [   [    =   ]   ]   : QÔÏÿÿÿÕ    openPreferences   paneSync   menupanel   entrypoint   urlParams    ÿÿÿÿ                              entrypoint                       urlParams                 9   gFxAccounts.openAccountsPagec  Y      ¹      L                                V/  G2  \                     QT     QT H   æQ[    æ  Q    Q    5   ¸   
   : E   4æQ    5   ¸   
   : ¸   
   5   : æ   æV  =   6   Qæ   	A,  R    QV      æV  ¸   

=   V   : Qæ  QV  K   Bm  Q  V  V  7   I   "æV  ¸   

V  V  V  7: QæãQLMÿÿÿ¾æQNÉ=   V    Q      V  C[   C]   : QÉØÒàÊÖØÐÊ	ÈÙÍ0GÌ	ÏëÏÔ n    UITour)   tourBrowsersByWindow   get   window   has   gBrowser   selectedBrowser   entrypoint   uitour   URLSearchParams   set   action   undefined   about:accounts?)   switchToTabHavingURI%   replaceQueryString    ÿÿÿÿ      action   urlParams                   params   url                   params   url                  	   name                                     %   replaceQueryString          ß   I      *   Õÿÿÿÿÿÿÿ   4   $         Ó   W                ?   gFxAccounts.openSignInAgainPagec  (      ¹                                       j2  ½2  s                ¹W   QV   ¸    
=   [    T  ]   : QÕ"ÈÿÿÿÞ !   openAccountsPage   reauth   entrypoint    ÿÿÿÿ      entryPoint   .this                       entrypoint                 7   gFxAccounts.sendTabToDevicec  $       ¹                                         Ü2  I3  w                     5   5   ¸   
T  T T : Qã    Weave   Service   clientsEngine3   sendURIToClientForDisplay    ÿÿÿÿ      url   clientId   title                  Q   gFxAccounts.populateSendTabToDevicesMenuc  r     ¹                             "       u3  9  {         
       ¹   Q  QÇ       W   Qæ   mT  ¸    
T  5   : QãT  ¸   
:  ÿÿÿÚæ   ¸   
:     Q      Q  5     Q  QV  -Á
     2m  Q5     QV   V  5   V  5   : QãQ¸   	
:   5   
ÿÿÿ½æ ÉV  Ù   ?   næ    Q   ¸   
=   :   Q   ¸   
V  : Q  5   ¸   
=   :   QV   =   V  : QÉæT  ¸   
   : QÈË Ë(+ ~ }Ö }Õ
ÌÉ
Ì  
ÏÓ8HÒ	Û ËÿÿÿíÕ ËÊÑÈÔÖÈÔÔ    removeChild   firstChild   hasChildNodes   document-   createDocumentFragment   remoteClients   value   id	   name	   next	   done   length   createElement   menuseparator   appendChild   strings#   GetStringFromName9   sendTabToAllDevices.menuitem       ÿÿÿÿ      devicesPopup   url   title   addTargetDevice   .this                   fragment+   onTargetDeviceCommand   clients                      client                     separator   allDevicesLabel                      addTargetDevice          ¹                                        ¿5  07                     Q    ¸   
=   :    QV   ¸   
=         C: QV   ¸   
=   =   : QV   ¸   
=   T  : QV   ¸   
=   	T : Q      ¸   

V   : QÉÑÈßÙ××Ú    document   createElement   menuitem!   addEventListener   command   setAttribute   class   sendtab-target   clientId   label   appendChild    ÿÿÿÿ      clientId	   name                     targetDevice                    ÿÿÿÿ         }   gFxAccounts.populateSendTabToDevicesMenu/onTargetDeviceCommande  {       ¹                              	        z4  ¡5                       QT  5    ¸   
=   :    QV      æZ   V   `        æ  5   ¸   
    : æ  QV  ¸   
   : QÉÊÔÈÏ×ÉÖ    target   getAttribute   clientId   remoteClients   map   forEach    ÿÿÿÿ      event                     clientId   clients                       gFxAccounts.populateSendTabToDevicesMenu/onTargetDeviceCommand/clients<u  
       ¹                                         65  I5                   T  5    9È    id    ÿÿÿÿ      client                    gFxAccounts.populateSendTabToDevicesMenu/onTargetDeviceCommand/<u         ¹                                         c5  5                     ¸    
  T    : "Ü)    sendTabToDevice    ÿÿÿÿ      clientId           
   p   ÿÿÿÿ      H          +         _  ÿÿÿÿ      _          þ   ^                 A   gFxAccounts.updateTabContextMenuc  N      ¹      (                               79  ]:  ¥                ¹W   QÇ   V   5        
æÈæV   5   Ù   >   Qf    ¸   
   : QÈÊ ­ ª
ÖÌ « -   sendTabToDeviceEnabled   remoteClients   length   forEach    ÿÿÿÿ      aPopupMenu   .this                 '   remoteClientPresent                      /   context_sendTabToDevice   C   context_sendTabToDevice_separator            E   gFxAccounts.updateTabContextMenu/<e  $       ¹      	                                   :  W:  ¬                     ¸   
T  :        6   QÒ%Ñ    document   getElementById   hidden    ÿÿÿÿ      id              B   ÿÿÿÿ                        ?   gFxAccounts.initPageContextMenuc  '     ¹      N                               :  0>  ¯                ¹W   Q  QÇ   V   5        
æÈæV   5   Ù   >  QV  E   "æQ  5   D   æQ  5   æ   Q    E   æQV  E   yæQ  5   D   fæQ  5   D   UæQ  5   D   DæQ  5   D   3æQ  5   	D   "æQ  5   
D   æQ  5   æ æ   Qf    ¸   
   : Qf   ¸   
   : QÈËÊ Â ´
Õ
Ëâ
ØÑââäÌ ¾Ì À -   sendTabToDeviceEnabled   remoteClients   length   onSaveableLink   onPlainTextLink#   isContentSelected   onImage   onCanvas   onVideo   onAudio   onLink   onTextInput   forEach    ÿÿÿÿ      contextMenu   .this                '   remoteClientPresent   showSendLink   showSendPage                      1   context-sendpagetodevice   9   context-sep-sendpagetodevice            C   gFxAccounts.initPageContextMenu/<u         ¹                                         =  ­=  ¿                   ¸    
T        : Ü%    showItem    ÿÿÿÿ      id                    1   context-sendlinktodevice   9   context-sep-sendlinktodevice            C   gFxAccounts.initPageContextMenu/<u         ¹                                         þ=  *>  Á                   ¸    
T        : Ü%    showItem    ÿÿÿÿ      id                ÿÿÿÿ    $                     C          ¹                                         {>  Ç>  Å                     ¸   
=   [    : Ö    Cu   importU   resource://gre/modules/FxAccountsCommon.js    ÿÿÿÿ                             