   T   ¹   Zb   20170118123726ø      ¹                                             chrome://browser/content/browser-plugins.js     pR                        Ö    [   =   ]   =   ]   f    ]      ]      ]      ]      ]   	   ]   
   ]      ]      ]      	]      
]      ]      ]      ]      ]      ]      ]      ]      ]       Q    ¸   
:  ÊÊÊÊÊÊ$Ê*ÊVÊ\ÊdÊmÊrÊvÊ  Ê  ÔÊ %Ê +Ê 2Ê ¸Ê ¿Ê ðÐ %Ð    gPluginHandler[   plugin.sessionPermissionNow.intervalInMinutes9   PREF_SESSION_PERSIST_MINUTESa   plugin.persistentPermissionAlways.intervalInDays)   PREF_PERSISTENT_DAYS   MESSAGES	   init   uninit   handleEvent   receiveMessage   managePlugins)   openPluginUpdatePage   submitReport   reloadPage   openHelpPageK   _clickToPlayNotificationEventCallback/   _updatePluginPermission7   showClickToPlayNotification%   removeNotification'   hideNotificationBar)   updateHiddenPluginUI%   contextMenuCommand%   NPAPIPluginCrashed;   showPluginCrashedNotification   ÿÿÿÿ      gPluginHandler                  S   PluginContent:ShowClickToPlayNotification   A   PluginContent:RemoveNotification   E   PluginContent:UpdateHiddenPluginUI   C   PluginContent:HideNotificationBar   C   PluginContent:InstallSinglePlugin   W   PluginContent:ShowPluginCrashedNotification   5   PluginContent:SubmitReport   ?   PluginContent:LinkClickCallback             '   gPluginHandler.initc         ¹   	   #                                 -  Û            	       ¹W   Q  Q    5     Q  QV   5   -Á
     .m  Q5     QV  ¸   
V  V   : QãQ¸   
:   5   ÿÿÿÁæ É    ¸   
=   V   : QÉ
ÏØ8DÒ	×ËÿÿÿðÕÚ    window   messageManager   MESSAGES   value%   addMessageListener	   next	   done!   addEventListener   unload    ÿÿÿÿ      .this                      mm                      msg            2   D            ÿÿÿÿ   !   `                 +   gPluginHandler.uninitc         ¹   	   #                                 ñ  ¥            	       ¹W   Q  Q    5     Q  QV   5   -Á
     .m  Q5     QV  ¸   
V  V   : QãQ¸   
:   5   ÿÿÿÁæ É    ¸   
=   V   : QÉ
ÏØ8DÒ	×ËÿÿÿðÕ!Ú    window   messageManager   MESSAGES   value+   removeMessageListener	   next	   done'   removeEventListener   unload    ÿÿÿÿ      .this                      mm                      msg            2   D            ÿÿÿÿ   !   `                 5   gPluginHandler.handleEventc  +      ¹                                        À  
  $                 ¹W   QT  5    =      æV   ¸   
:  QæÎÐ( 	   type   unload   uninit    ÿÿÿÿ      event   .this                 ;   gPluginHandler.receiveMessagec       ¹   (                             A        (  º  *                 ¹W   QT  5    x=   y   Xæ=   y   æ=   y   ¸æ=   y   ùæ=   y  æ=   y  /æ=   y  [æ=   y  æz  æV   ¸   	
T  5   
T  5   5   T  5   5   T  5   T  5   5   : Q  ÞæV   ¸   
T  5   
T  5   5    : Q  ´æV   ¸   
T  5   
T  5   5   T  5   5   T  5   T  5   5   : Q  hæV   ¸   
T  5   
T  5   5    : Q  >æV   ¸   
T  5   5   : Q  æV   ¸   
T  5   
T  5   5   T  5   5   : Q   åæ   5      <æV   ¸   
T  5   5   T  5   5   T  5   5   : Qæ   æT  5   5    x=    y   !æ=   !y   æ=   "y   æz   9æV   T  5   5    7¸   #
V   T  5   5   $l Q   æ   )æ   %¸   &
=   'T  5    : Q   æÈh vËpËpËpËpËpËpËpÌíÕ-/XäXíÕ46XäXÜXàÍ>@XÊ
÷EXÍh[vËpËpÌîXNXÞXS 	   nameS   PluginContent:ShowClickToPlayNotificationA   PluginContent:RemoveNotificationE   PluginContent:UpdateHiddenPluginUIC   PluginContent:HideNotificationBarC   PluginContent:InstallSinglePluginW   PluginContent:ShowPluginCrashedNotification5   PluginContent:SubmitReport?   PluginContent:LinkClickCallback7   showClickToPlayNotification   target	   data   plugins   showNow   principal   location%   removeNotification)   updateHiddenPluginUI   haveInsecure   actions'   hideNotificationBar'   installSinglePlugin   pluginInfo;   showPluginCrashedNotification   messageString   pluginID   AppConstants#   MOZ_CRASHREPORTER   submitReport   runID   keyVals   submitURLOptIn   managePlugins   openHelpPage)   openPluginUpdatePage	   call   pluginTag   Cu   reportErrora   gPluginHandler did not expect to handle message     ÿÿÿÿ      msg   .this                 9   gPluginHandler.managePluginsc          ¹                                            F  V                          =   : QÓ )   BrowserOpenAddonsMgr)   addons://list/plugin    ÿÿÿÿ                        G   gPluginHandler.openPluginUpdatePagec  c       ¹                               
         Õ    \                    Q    5   ¸   
T  :    QV       "æ    5   ¸   
T  : W   Qæ      V   =   : QÉÔÈÔÉaØ    Services   blocklist!   getPluginInfoURL+   getPluginBlocklistURL   openUILinkIn   tab    ÿÿÿÿ      pluginTag                     url                \   ÿÿÿÿ             submitReportC  H       ¹                                	         Á  ³  d                     5       ææ   5   ¸   
=   T : Q   ¸   
T  T : QËjhÝÖ    AppConstants#   MOZ_CRASHREPORTER   Services   prefs   setBoolPref=   dom.ipc.plugins.reportCrashURL'   PluginCrashReporter#   submitCrashReport   ÿÿÿÿ      submitReport                        runID   keyVals   submitURLOptIn                  3   gPluginHandler.reloadPagec         ¹                                           '  m                  T  ¸    
:  QÎ    reload    ÿÿÿÿ      browser                  7   gPluginHandler.openHelpPagec          ¹                                          q  ¤  r                          =   B: QÔ    openHelpLink   plugin-crashed    ÿÿÿÿ                        '   PH_ctpEventCallbackC  Í      ¹      9                                 ì  {  v                ¹W   QT  =       æ  Q   5   ¸   
=   : ¸   
V   5   5    : QV   5   5   5   	?  QV  ×   æ×W  Qæ   5   ¸   
=   
: ¸   
V  : QÉ   %æT  =      æV   5   @6   QæÉ  àÏx{
ÚÈàËÉÑ    showing   Services   telemetry!   getHistogramById5   PLUGINS_NOTIFICATION_SHOWN   add   options   primaryPlugin   pluginData	   sizeC   PLUGINS_NOTIFICATION_PLUGIN_COUNT   dismissed   ÿÿÿÿ   '   PH_ctpEventCallback                        event   .this                   histogramCount                  ÿÿÿÿ          M   gPluginHandler._updatePluginPermissionc  t     ¹   1                          V        i                     ¹W   Q            Q  Q  Q  Q    5   ¸   
=   :   QT x=   y   ,æ=   y   °æ=   y  :æ=   y  æz  æ   5   	5   
W  Q   5   	5   W  Q   ¸   
:      5   ¸   
V   5   : ×<XèW  QV  ¸   
>: QT    5   5   6   Q  ¶æ   5   	5   
W  Q   5   	5   W  Q   ¸   
:      5   ¸   
V   5   : ××<×<XèW  QV  ¸   
?: QT    5   5   6   Q  !æ   5   	5   W  Q   5   	5   W  Q>W  QV  ¸   
×: QT 5   x   5   5   y    æ   5   5   y   )æz   AæT    5   5   6   Q   <æT    5   5   6   Q   æT    5   5   6   Qæ   NæT    5   5   6   Q   0æ    ¸   !
   "   "=   #T : : QÉæT  5   $  QV  5   %  QT =      Yæ  QT  5   &5   '  Q    5   (¸   )
V  T 5   *V  V  V  : QT V  6   +QÉæV  5   ,¸   -
=   .[    T ]   /T ]   0: QÉÚÖÈ  k rvËpËpËpÌÔÔÌÝÐÐØXÔÔÌÚ
ÖÐØXÔÔÑÈh  ÏpÏpÌ  °ØXØXÙXØXßÿÿÿñ  Ò  ÅÍÎÉ
ÒÝÌ  ÉÏÚÈÈ  Î    Services   telemetry!   getHistogramByIdA   PLUGINS_NOTIFICATION_USER_ACTION   allownow   allowalways   block   continue   Ci)   nsIPermissionManager   ALLOW_ACTION   EXPIRE_SESSION	   Date   now   prefs   getIntPref9   PREF_SESSION_PERSIST_MINUTES   add   fallbackType/   nsIObjectLoadingContent   PLUGIN_ACTIVE   EXPIRE_TIME)   PREF_PERSISTENT_DAYS   PROMPT_ACTION   EXPIRE_NEVER   blocklistState'   nsIBlocklistServiceC   STATE_VULNERABLE_UPDATE_AVAILABLE5   STATE_VULNERABLE_NO_UPDATE7   PLUGIN_VULNERABLE_UPDATABLE7   PLUGIN_VULNERABLE_NO_UPDATE)   PLUGIN_CLICK_TO_PLAY   Cu   reportError   Error3   Unexpected plugin state:    browser   contentWindow   options   principal   perms!   addFromPrincipal!   permissionString)   pluginPermissionType   messageManager!   sendAsyncMessage=   BrowserPlugins:ActivatePlugins   pluginInfo   newState    ÿÿÿÿ      aNotification   aPluginInfo   aNewState   .this                    permission   expireType   expireTime   histogram   browser   contentWindow                     principal                         pluginInfo         newState              S  ÿÿÿÿ    Ä            ö  M                 U   gPluginHandler.showClickToPlayNotificationc  è     ¹   ,                         =        ¶  *  Ô                 ¹W  Q          QT ¸    
T  5   :     
æÉæ   ¸   
T :   QT  5   ¸   
V  :     
æÉæ   ¸   
=   T  :   Q  QV     æV  5   	5   
W  Q   æ   A,  R  W  QæT -Á
     m5   W   Q  QV  ¸   
V   5   :    æÉ   Ëæ   5   ¸   
V   5   :   QV   5      5   5      9æV      (æ   5   ¸   
V   5   : W  Qæ   *æ   5   ¸   
=   : =   W  QæV   V  6   QV  ¸   
V   5   V   : QÉãQ¸   
:   5   ÿÿþïæ @  QT    æT >75   W  QæV     NæT    @æV  5   	V  6    QV  ¸   !
:  QT  5   "¸   #
=   $: QæÉæ[    T  ]   %V  5   &]   'V  ]    V  ]   
T ]   (  Q   ¸   )
T  =   =   *=   +@@V  : QT  5   "¸   #
=   $: QÉ  ÛÖÒ #  ãÏÈÓ #  èÔÈÙÊÉÌ8 Ì	Ú
A  ù
ÚÈÙ4
ÚÏÖÏÎÝ  òËÿÿÿéÔ ÐÓÏÙ # ÉÎÉÉÍÔÊ Ù    equals!   contentPrincipal   BrowserUtils   makeURI   documentURI   equalsExceptRef%   PopupNotifications   getNotification+   click-to-play-plugins   options   pluginData   Map   value   has!   permissionString   Services   blocklist!   getPluginInfoURL   pluginTag   blocklistState   Ci'   nsIBlocklistService#   STATE_NOT_BLOCKED+   getPluginBlocklistURL   urlFormatter   formatURLPref'   app.support.baseURL   clicktoplay   detailsLink   set	   next	   done   primaryPlugin   reshow   messageManager!   sendAsyncMessageA   BrowserPlugins:NotificationShown   dismissedK   _clickToPlayNotificationEventCallback   eventCallback   principal	   show   3   plugins-notification-icon    ÿÿÿÿ      browser   plugins   showNow   principal   location   pluginInfo   .this                    receivedURI   notification   pluginData/   primaryPluginPermission   options                     url                         dismissed         eventCallback         primaryPlugin         pluginData         principal          Ù           Ë  ÿÿÿÿ    ;              t             ñ   é                      i                   C   gPluginHandler.removeNotificationc  A       ¹                                        ¬*  P+  %                   Q    ¸   
T T  :    QV      æ    ¸   
V   : QæÉÒÈÖ %   PopupNotifications   getNotification   remove    ÿÿÿÿ      browser	   name                     notification                :   ÿÿÿÿ          E   gPluginHandler.hideNotificationBarc  X       ¹                                        s+  c,  +                     Q    ¸   
T  :    QV   ¸   
T :   QV     æV   ¸   
V  C: QæÉÊÏÈÎÈÖ    gBrowser%   getNotificationBox1   getNotificationWithValue%   removeNotification    ÿÿÿÿ      browser	   name                     notificationBox   notification             
   M   ÿÿÿÿ          G   gPluginHandler.updateHiddenPluginUIc  X      ¹                              &        ,  w@  2                  QÇ       W   Q   W  Q  5       Q  ¸   
  5   :     
æÈæ   ¸   
T :   Q  5   ¸   
V  :     
æÈæ   ¸   
=   	: 5   
¸   
=     : Q   ¸   
  :    Q  Ù   >   æV   :  Q   cæ  Q   5   ¸   
  =   :   QV     5   5      æV   :  Q   æV  :  QæÉæÈË OÊ ]Ê 4Ð ;Ö ¶ CÏÈÕ ¶ IàÊ IÑÉ ] «ÌÏ
ÑÊ ®#ÈÔÏÍ    originNoSuffix   equals!   contentPrincipal   BrowserUtils   makeURI   documentURI   equalsExceptRef   document   getElementById3   plugins-notification-icon   classList   toggle   plugin-blocked   gBrowser%   getNotificationBox   length   Services   perms7   testPermissionFromPrincipal5   plugin-hidden-notification   Ci)   nsIPermissionManager   DENY_ACTION    ÿÿÿÿ      browser   haveInsecure   actions   principal   location!   hideNotification!   showNotification                   origin   receivedURI   notificationBox                  -   notificationPermission                  !   hideNotification   F       ¹                                         n1  2  O                   Q      ¸    
=   :    QV      æ   ¸   
V   C: QæÉ
ÖÈ× 1   getNotificationWithValue   plugin-hidden%   removeNotification    ÿÿÿÿ                           n                ?   ÿÿÿÿ         !   showNotification   ö      ¹   %                          B         Ç3  ?  ]                         Q      ¸    
=   :    QV      
æÉæ   5   ¸   
=   : ¸   
C: Q  Q   ¸   
=   	: ¸   

=   :   Q  Ù   ?  @æ    Q  >7  QV  5     QV  5   x   5   5   y   5æ   5   5   y   \æ   5   5   y   æz   Ææ   ¸   
=   Z   V  `          `   : W  Q   æ   ¸   
=   Z   V  `          `   V  `   : W  Q   Eæ   ¸   
=   Z   V  `          `   V  `   : W  QæÉ   3æ   ¸   
=   Z         `    : W  QæZ   [      ¸   

=   : ]      ¸   

=   : ]       ]   `    [      ¸   

=   : ]      ¸   

=    : ]      ]   `     Q   ¸   !
V  =   @   5   "V  : W   Q     æV   5   #¸   
=   $: QæÉÒ
ÖÈ © dà d

Ñ×Ì ;ÊÌÎÉh Ïp vÏp {ÏpÌ qÌÉÏ rÈXÌÉÏÉ wÈXÌÉÏÉ |ÐÌÊ-Ï É

ÑÈ
ÑÈ
Ï 
ÑÈ
ÑÈ
Ô £ÌÊÎ £
ÈÛ 1   getNotificationWithValue   plugin-hidden   Services   telemetry!   getHistogramById+   PLUGINS_INFOBAR_SHOWN   add   document   getElementById   bundle_brand   getString   brandShortName   length   pluginName   fallbackType   Ci/   nsIObjectLoadingContent)   PLUGIN_CLICK_TO_PLAY7   PLUGIN_VULNERABLE_UPDATABLE7   PLUGIN_VULNERABLE_NO_UPDATE!   gNavigatorBundle%   getFormattedString3   pluginActivateNew.message=   pluginActivateOutdated.messageA   pluginActivateVulnerable.message=   pluginActivateMultiple.message9   pluginContinueBlocking.label   labelA   pluginContinueBlocking.accesskey   accessKey   callback7   pluginActivateTrigger.label?   pluginActivateTrigger.accesskey%   appendNotification%   PRIORITY_INFO_HIGH   classList!   pluginVulnerable    ÿÿÿÿ                           n   message   brand   buttons                      pluginInfo   pluginName                     gPluginHandler.updateHiddenPluginUI/showNotification/buttons<.callbackc   T       ¹   	   "                                    :  ¾;                       5   ¸   
=   : ¸   
C: Q    5   ¸   
  =       5   5   : Qà ÖÏ 
    Services   telemetry!   getHistogramById+   PLUGINS_INFOBAR_BLOCK   add   perms!   addFromPrincipal5   plugin-hidden-notification   DENY_ACTION    ÿÿÿÿ                              label         accessKey         callback                   gPluginHandler.updateHiddenPluginUI/showNotification/buttons<.callbackc   e       ¹   	   (                                   <  >                     Q    5   ¸   
=   : ¸   
C: Q   ¸   
=     :    QV      æV   ¸   
:  QæÉà Ñ ÈÑ
    Services   telemetry!   getHistogramById+   PLUGINS_INFOBAR_ALLOW   add%   PopupNotifications   getNotification+   click-to-play-plugins   reshow    ÿÿÿÿ                           curNotification                ^   ÿÿÿÿ                label         accessKey         callback             ã  ÿÿÿÿ    =             ®   +            L  ÿÿÿÿ    R                           þ   W                 C   gPluginHandler.contextMenuCommandc  3       ¹                                        @  ;A  ¸                 T  5    ¸   
=   [    T ]   [   T ]   : QÔÍÈ ¹    messageManager!   sendAsyncMessageC   BrowserPlugins:ContextMenuCommand   command   plugin    ÿÿÿÿ      browser   plugin   command                        command                       plugin                 C   gPluginHandler.NPAPIPluginCrashedc  ³      ¹                                       ÝA   G  ¿                               QT     QV       5   r D   MæQV       5   r D   6æQV   ¸   
=   :  D   æQV   ¸   
=   :  æ   æ   ¸   
=   : QÉæV   ¸   	
=   :   QV   ¸   

=   :   Q   ¸   
V  :   QV   ¸   

=   :   Q  Q   5    D   æQ   5    æ   æ=   W  Q   +æV      æ=   W  Q   æ=   W  Qæ   ¸   
=   :   QV  ¸   
=   [    V  ]   V  ]   V  ]   : QÉÞÈ××ÐËÐÕ á ÊÐÈÐÈÐÈÐÈÒ#ÌÐÐËÑÈÐÉÉÉ ß    Ci   nsIPropertyBag2/   nsIWritablePropertyBag2   hasKey   runID   pluginName   Cu   reportError   A NPAPI plugin crashed, but the properties of this plugin cannot be read.'   getPropertyAsUint32)   getPropertyAsAString   BrowserUtils%   makeNicePluginName   pluginDumpID   AppConstants#   MOZ_CRASHREPORTER   gCrashReporter   enabled   noSubmit   noReport   please   window-   getGroupMessageManager   browsers+   broadcastAsyncMessageQ   BrowserPlugins:NPAPIPluginProcessCrashed   state    ÿÿÿÿ      subject   topic	   data                     propertyBag   runID   uglyPluginName   pluginName   pluginDumpID   state   mm                          pluginName         runID         state               ÿÿÿÿ    ¢                    Y   gPluginHandler.showPluginCrashedNotificationc        ¹   &   È                        ,        êI  SR  ð                                     	  
Q    ¸   
   :    QV   ¸   
=   :   QV     
æÉæV   5     Q=     Q   ¸   
=   :   Q   ¸   
=   	:   QZ   [   V  ]   
V  ]   @]       ]   `      Q   5   E   æQ   ¸   
   : æ   æ      Q   ¸   
=   :   Q   ¸   
=   :   Q[   V  ]   
V  ]   @]      ]     QV  ¸   
V  : QÉæV   ¸   
T =   V  V  V  : W  Q=     QV  5   ¸   
V  =   
:   QV  =   6   QV  ¸   
=      ¸   
=   : : Q      =   C:   	QV  	=    W  	QV  V  	6   !QV  5   ¸   "
V  =   #=   $:   
QV  
¸   %
V  : QÉîÑÈÐÈ " ùÎÊÑÈÑÈÉÉÔÑÑÎ
ÑÈ
ÑÈ
ÉÉÐ ÕÓÌ ÈÊÙÈÏáÿÿÿåÐÈÏÎÞÈÔ    gBrowser%   getNotificationBox1   getNotificationWithValue   plugin-crashed/   PRIORITY_WARNING_MEDIUMk   chrome://mozapps/skin/plugins/notifyPluginCrashed.png!   gNavigatorBundle   getStringQ   crashedpluginsMessage.reloadButton.labelY   crashedpluginsMessage.reloadButton.accesskey   label   accessKey   popup   callback   AppConstants#   MOZ_CRASHREPORTER'   PluginCrashReporter   hasCrashReportQ   crashedpluginsMessage.submitButton.labelY   crashedpluginsMessage.submitButton.accesskey	   push%   appendNotification{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   ownerDocument   createElementNS   className   text-link   setAttribute   value?   crashedpluginsMessage.learnMore   formatURL'   app.support.baseURL=   plugin-crashed-notificationbar	   href=   getAnonymousElementByAttribute   anonid   messageText   appendChild    ÿÿÿÿ      browser   messageString   pluginID                    notificationBox   notification   priority   iconURL   reloadLabel   reloadKey   buttons   XULNS	   link   crashurl   description                      submitLabel   submitKey   submitButton                  }   gPluginHandler.showPluginCrashedNotification/buttons<.callbackc          ¹                                          þL  M                      ¸    
:  QÐ    reload    ÿÿÿÿ                              label         accessKey         popup         callback                   gPluginHandler.showPluginCrashedNotification/submitButton.callbacke          ¹                                          ÃN  O                       ¸   
   : Q
Õ '   PluginCrashReporter#   submitCrashReport    ÿÿÿÿ                              label         accessKey         popup         callback          .   f  ÿÿÿÿ    l             (  s                    9   PREF_SESSION_PERSIST_MINUTES      )   PREF_PERSISTENT_DAYS         MESSAGES      	   init         uninit         handleEvent         receiveMessage         managePlugins      )   openPluginUpdatePage         submitReport         reloadPage         openHelpPage      K   _clickToPlayNotificationEventCallback      /   _updatePluginPermission      7   showClickToPlayNotification      %   removeNotification      '   hideNotificationBar      )   updateHiddenPluginUI      %   contextMenuCommand      %   NPAPIPluginCrashed      ;   showPluginCrashedNotification       