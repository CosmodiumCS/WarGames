   a   ¹  [¥   20170118123726  
   ¹   n   ö      ^                                 chrome://browser/content/nsContextMenu.js     .#                              5   ¸   
=   :    5   ¸   
=   :    5   ¸   
=   :    5   ¸   
=   :    5   ¸   
=   :    5   ¸   
=   	:    5   ¸   
=   
:    ¸   
º=   =   : Ö    @    Q   Y      ]      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]      ]      ]      ]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /    ]   0   !]   1   "]   2   #]   3   $]   4   %]   5   &]   6   ']   7   (]   8   )]   9   *]   :   +]   ;   ,]   <   -]   =   .]   >   /]   ?   0]   @   1]   A   2]   B   3]   C   4]   D   5]   E   6]   F   7]   G   8]   H   9]   I   :]   J   ;]   K   <]   L   =]   M   >]   N   ?]   O   @]   P   A]   Q   B]   R   C]   S   D]   T   E]   U   F]   V   G]   W   H]   X   I]   Y   J]   Z   K]   [   L]   \   M]   ]   N]   ^   O]   _   P]   `   Q]   a   R]   b   S]   c   T]   d   U]   e   V]   f   W]   g   Xa   h   Y]   i   Z]   j   []   k   \]   l   ]]   m6   Ê	ÚÚÚÚÚÚÚÒÌÊÊ[ÊhÊxÊ|Ê  ¬Ê  ÁÊ  ËÊ  ïÊ .Ê mÊ Ê ËÊ ùÊ ÿÊ ,ÊÊÊ NÊ Ê Ê ¤Ê ®Ê ¿Ê ÄÊ ØÊ ÞÊ åÊ Ê Ê Ê Ê Ê 'Ê ,Ê BÊ JÊÊ SÊ [Ê `Ê iÊ wÊ Ê ¦Ê «Ê ³Ê ÒÊ ØÊ lÊ uÊ {Ê Ê ÊÊÊ ²ÊÊ »Ê ×Ê äÊ îÊ þÊ Ê Ê (Ê 3Ê ;Ê JÊÊ UÊ ^Ê hÊ uÊ ÊÊ Ê ©ÊÊÊÊÊÊÊÊ ÌÊ ÒÊ ÝÊ äÊ ÿÊ #Ê 2Ê 9Ð /   gContextMenuContentData   Components   utils   importi   resource://gre/modules/ContextualIdentityService.jsm_   resource://gre/modules/PrivateBrowsingUtils.jsm[   resource://gre/modules/InlineSpellChecker.jsme   resource://gre/modules/LoginManagerContextMenu.jsmO   resource://gre/modules/BrowserUtils.jsmK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   LoginHelperM   resource://gre/modules/LoginHelper.jsm   nsContextMenu   prototype   initMenu   hiding   initItems+   initPageMenuSeparator   initOpenItems'   initNavigationItems7   initLeaveDOMFullScreenItems   initSaveItems   initViewItems   initMiscItems#   initSpellingItems%   initClipboardItems)   initMediaPlayerItems)   initClickToPlayItems1   initPasswordManagerItems   initSyncItems'   openPasswordManager   inspectNode   setTarget!   getComputedStyle   getComputedURL   isLinkSaveable)   _isSpellCheckEnabled#   _isProprietaryDRM+   _openLinkInParameters   openLink/   openLinkInPrivateWindow   openLinkInTab#   openLinkInCurrent   openFrameInTab   reloadFrame   openFrame#   showOnlyThisFrame   reload#   viewPartialSource   viewFrameSource   viewInfo   viewImageInfo   viewImageDesc   viewFrameInfo   reloadImage!   _canvasToBlobURL   viewMedia+   saveVideoFrameAsImage%   leaveDOMFullScreen   viewBGImage)   setDesktopBackground   saveFrame   saveHelper   saveLink   saveImage   saveMedia   sendImage   sendMedia   castVideo+   populateCastVideoMenu   playPlugin   hidePlugin   copyEmail   copyLink   showItem   setItemAttr'   setItemAttrFromNode   cloneNode   getLinkURL   getLinkURI   getLinkProtocol   getLinkText   linkText%   isMediaURLReusable   toString!   isTargetATextBox'   shouldShowSeparator   addDictionaries!   bookmarkThisPage   bookmarkLink'   addBookmarkForFrame   shareLink   shareImage   shareVideo   shareSelect   savePageAs   printFrame'   switchPageDirection   mediaCommand#   copyMediaLocation   drmLearnMore   imageURL/   formatSearchContextItem-   _getTelemetryClickInfo9   _getTelemetryPageContextInfo-   _checkTelemetryForMenu'   createContainerMenu   ÿÿÿÿ      nsContextMenu/   gContextMenuContentData                   nsContextMenu  '      ¹      
                                  ~  Ø                   ¹W   QV   C6    QV   ¸   
T  T : QËÕ    shouldDisplay   initMenu    ÿÿÿÿ      aXulMenu   aIsShift   .this                    CM_initMenuC       ¹   @   â                       N        >              	      ¹W   Q  QV   ¸    
   5      5      5   : QV   5       
æÉæV   B6   QV   V   5   5   	 6   QT    æ  QV   5   
   :æV      ¸   
   5   V   5   T  : 6   Q   +æV      ¸   
V   5   T  : 6   Qæ[    T  ]         #æ   ¸   
V   5   :    æ   æ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5   ]   V   5    ]   !      æ   5   "   æ   æ]   #V   5      æV   5   5   $5   %   æ   æ]   &V   5   ']   (V   5      æV   5   5   )   æ   æ]   *  QV  V  6   +Q   ,5   -¸   .
V  =   /@: QÉæV      ¸   1
=   0: 6   0QV   =   36   2QV      4¸   5
=   6   75   8: 5   96   2Q   æ  Qv  QÉ    æV   V   5   5   	 6   QV   B6   :Q   ¸   1
=   ;:   QV     æ   <¸   =
:  QæV   ¸   >
:  QV   ¸   ?
T  : QÉßÊÊY!ËÕÏ5ÖÌ&
Ï)ÜÊ-
ÈÛÔÎÎÎÎÎÎÎÎÎÎÎáÉêÎÉê@ÎáDÕÉÏ.ÕÊGÖIÔMÕËPÑÈÑUÏXÓ    setTarget   document   popupNode!   popupRangeParent!   popupRangeOffset   shouldDisplay   hasPageMenu#   isContentSelected   selectionInfo/   docSelectionIsCollapsed   isRemote   PageMenuParent   addToPopup/   gContextMenuContentData   customMenuItems   browser%   buildAndAddToPopup   target	   menu   gBrowser!   getTabForBrowser   undefined   tab   inFrame   isTextSelected   onTextInput   onLink   onImage   onVideo   onAudio   onCanvas   onEditableArea   mediaURL   srcUrl   docLocation   frameUrl   currentURI	   spec   pageUrl   linkURL   linkUrl	   text   selectionText   wrappedJSObject   Services   obs   notifyObservers)   on-build-contextmenu   isFrameImage   getElementById   ellipsis   &    gPrefService   getComplexValue   intl.ellipsis   Ci-   nsIPrefLocalizedString	   data   onPlainTextLink)   context-bookmarkpage   BookmarkingUIA   onCurrentPageContextPopupShowing   initItems-   _checkTelemetryForMenu   ÿÿÿÿ      CM_initMenu                        aXulMenu   aIsShift   .this                   bookmarkPage                     subject                     e                      	   menu         tab      #   isContentSelected         inFrame         isTextSelected         onTextInput         onLink         onImage         onVideo         onAudio         onCanvas         onEditableArea         srcUrl         frameUrl         pageUrl         linkUrl         selectionText            ¸  2         u  ÿÿÿÿ   L                         ù                      CM_hidingC   w      ¹   	   !                                   ½  ;  [                ¹W   QÖ    @    Q   ¸   
:  Q   ¸   
:  Q   ¸   
:  Q   ¸   
   : QV   5      æV   ¸   
:  QæÌÐÐÐÕcÉÐf /   gContextMenuContentData)   InlineSpellCheckerUI1   clearSuggestionsFromMenu7   clearDictionaryListFromMenu   uninit/   LoginManagerContextMenu'   clearLoginsFromMenu   document   _onPopupHiding   ÿÿÿÿ      CM_hiding                        .this                      CM_initItemsC   Ê      ¹      8                                   `  ø  h                ¹W   QV   ¸    
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   
:  QV   ¸   	
:  QV   ¸   

:  QV   ¸   
:  QV   ¸   
:  QÏÏÏÏÏÏÏÏÏÏÏÏÏ +   initPageMenuSeparator   initOpenItems'   initNavigationItems   initViewItems   initMiscItems#   initSpellingItems   initSaveItems%   initClipboardItems)   initMediaPlayerItems7   initLeaveDOMFullScreenItems)   initClickToPlayItems1   initPasswordManagerItems   initSyncItems   ÿÿÿÿ      CM_initItems                        .this                   1   CM_initPageMenuSeparatorC   $      ¹                                         5  y  x                ¹W   QV   ¸    
=   V   5   : QÝ    showItem'   page-menu-separator   hasPageMenu   ÿÿÿÿ   1   CM_initPageMenuSeparator                        .this                   !   CM_initOpenItemsC   Y     ¹   5   Í                        G         ¦  <  |                ¹W  	QBW   QV  	5       æ   5   ¸   
   5   : ¸   
=   : W  QV  5    E   ;æQV  5   	   5   
5   E   æQV  5      5   ræW   QæV  	5   E   6æQV  	5    E   %æQV  	5   E   æQV  	5   5   æ   ~æV  	V  	5   5   6   QV  	      V  	5   : 6   Q   æ  
Qv  
QÉ    æV  	V  	5   5   6   QV  	C6   QæBW  QV  	5   5   5   5   W  QV     æCW  Q   ¸   
=   : W  QV  ¸   
=   V  : Q    ¸   !
V  : W  QV  ¸   
=   "   #¸   $
=   %Z   V  `    ?: : QæV  	5   &D   æQV   D   æQV  	5   æW  Q   '¸   (
   ): W  Q   *5   +¸   ,
=   -: W  QV  	¸   .
=   /V  E   æQV   æ: QV  	¸   .
=   0V  : QV  	¸   .
=   1V  E   æQV   æ: QV  	¸   .
=   V  E   æQV  æ: QV  	¸   .
=   2V  E   æQV   E   æQV  æ: QV  	¸   .
=   3V  	5   : QV  	¸   .
=   4V  : QÉ
ÑÊÊÈÑàÛÐÑßØ!×ÑÔØÌÝ
ÑÈØ
ÐÈÐÑ.Ê  	     êÑÈÖÈÛ0ÿÿÿÐØÛ5ÿÿÿËäÛBÑÿÿÿ¾ÝØ    onMailtoLink   Cce   @mozilla.org/uriloader/external-protocol-service;1   getService   Ci5   nsIExternalProtocolService-   getProtocolHandlerInfo   mailto/   alwaysAskBeforeHandling   preferredAction   nsIHandlerInfo   useHelperApp7   preferredApplicationHandler!   nsIWebHandlerApp   isTextSelected   onLink   selectionInfo   linkURL   linkURI   makeURI   linkTextStr   linkText   onPlainTextLink   browser!   contentPrincipal!   originAttributes   userContextId   document   getElementById=   context-openlinkincontainertab   setAttribute%   data-usercontextid3   ContextualIdentityService'   getUserContextLabel   label   gBrowserBundle)   formatStringFromName3   userContextOpenLink.label   onSaveableLink)   PrivateBrowsingUtils   isWindowPrivate   window   Services   prefs   getBoolPref7   privacy.userContext.enabled   showItem!   context-openlink/   context-openlinkprivate+   context-openlinkintabE   context-openlinkinusercontext-menu3   context-openlinkincurrent!   context-sep-open   ÿÿÿÿ   !   CM_initOpenItems                  
   !   isMailtoInternal   mailtoHandler   inContainer   userContextId	   item   label   shouldShow   isWindowPrivate   showContainers   .this      
               ex   
           ò   %      &     ÿÿÿÿ          -   CM_initNavigationItemsC   y     ¹      ;                                  u  ½  ¬          	      ¹W  Q    QV  5    D   pæQV  5   D   `æQV  5   D   PæQV  5   D   @æQV  5   D   0æQV  5   D    æQV  5   D   æQV  5   æ W   QV  ¸   
=   	V   : QV  ¸   
=   
V   : Q   5   ¸   
=   : =     Q=     QV   D   æQV  5   æ   7æV  D   æQV  5   æ   æ=      æ=   æW  QæV  ¸   
=   V  =   : QV  ¸   
=   V  =   : QÉÊððàØØÖ
ÎÊÕÕÝÞß #   isContentSelected   onLink   onImage   onCanvas   onVideo   onAudio   onTextInput   onSocial   showItem%   context-navigation-   context-sep-navigation!   XULBrowserWindow   stopCommand   getAttribute   disabled	   true      reload	   stop   context-reload   context-stop   ÿÿÿÿ   -   CM_initNavigationItems                        shouldShow   .this                     stopped   stopReloadItem               h  ÿÿÿÿ          5   CM_initLeaveFullScreenItemC   Y      ¹                                           y  Á                ¹W  QV  5    5   5   @W   QV  ¸   
=   V   : QV      æV  ¸   
=   C: QæÚØÖ    target   ownerDocument#   fullscreenElement   showItem9   context-leave-dom-fullscreen5   context-media-sep-commands   ÿÿÿÿ   5   CM_initLeaveFullScreenItem                        shouldShow   .this                   !   CM_initSaveItemsC        ¹   $                            D         ¦  	(  Ë          	      ¹W  Q    QV  5    D   `æQV  5   D   PæQV  5   D   @æQV  5   D   0æQV  5   D    æQV  5   D   æQV  5   æ W   QV  ¸   
=   V   : QV  ¸   
=   	V  5   
D   æQV  5   æ: QV  ¸   
=   V  5   D   æQV  5   æ: QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV  ¸   
=   =   V  5    : QV  ¸   
=   =   V  5    : QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV  5   ¸   
=   :   QV  ¸   
=   =   V  5    D   æQV  æ: QV  ¸   
=   =   V  5    D   æQV  æ: Q   5   ¸   
=   :   QV  E   NæQV  5   E   >æQ   5   Ù    >E   &æQ   !¸   "
V  5   #: Ù    >æW  QV  ¸   
=   =   V   : QÉÊààðØîîÝÝÝÕ2ÊÿÿÿÎÕ2ÊÿÿÿÎÝÝÝÝÕÈÕ2ÖÿÿÿÎÕ2ÖÿÿÿÎÖÈ  éÛØÕÐÕ2ÿÿÿÎ    onTextInput   onLink#   isContentSelected   onImage   onCanvas   onVideo   onAudio   showItem!   context-savepage!   context-savelink   onSaveableLink   onPlainTextLink#   context-saveimage   onLoadedImage#   context-savevideo#   context-saveaudio/   context-video-saveimage   setItemAttr   disabled   mediaURL#   context-sendimage#   context-sendvideo#   context-castvideo#   context-sendaudio   startsWith   blob:   Services   prefs   getBoolPref/   browser.casting.enabled-   SimpleServiceDiscovery   services   length   CastingApps'   getServicesForVideo   target   ÿÿÿÿ   !   CM_initSaveItems                        shouldShow   .this                     mediaIsBlob   shouldShowCast                 ÿÿÿÿ          !   CM_initViewItemsC   Ì     ¹   -   ÷                          M         6(  4  ï          
      ¹W  QV  ¸    
=   V  5   : QV  ¸    
=   V  5   E   æQV  5    æ: QV  5   D   `æQV  5   D   PæQV  5   D   @æQV  5   D   0æQV  5   D    æQV  5   	D   æQV  5   
æ W   QV  5    E   æQ   ¸   
=   : æW  QV  ¸    
=   V   : QV  ¸    
=   V   : QV  ¸    
=   V  : QV  ¸    
=   V  : QV  ¸    
=   V   : QBW  Q      :  W  QV     æV  5   W  QæV  ¸    
=   V  E   æQV  5   æ: QV  E   æQV  5   æ   *æ   ¸   
=   :    5   6   QæV  ¸    
=   V  5   E   æQV  5    æ: QV  ¸    
=   V  5   E   !æQV  5     D   æQV  5   !æD   æQV  5   æ: QV  ¸    
=   "V  5   E   !æQV  5     D   æQV  5   !æ: QV  ¸   #
=   "=   V  5   $ : QV  ¸    
=   %V   E   "æQV  5   & E   æQV  5     æ: QV  ¸    
=   'V   E   "æQV  5   & E   æQV  5     æ: Q   ¸   
=   %: V  5   ( 6   QV  ¸    
=   )V  5   : QV  ¸    
=   *V  5   E   æQV  5   +=   ,Iæ: QÐÉ  ñÐÐ#Ë  óÐàààâÉØØØØØÊÈÏÐÕ ÕÔÑà6ËÿÿÿÊàì à4ÛÿÿÿÌÕ3ÊÿÿÿÍÛ)Ñ)Ë !Û-Ñ-Ë $ÔÐÝô    showItemG   context-viewpartialsource-selection#   isContentSelectedA   context-viewpartialsource-mathml   onMathML   onImage   onCanvas   onVideo   onAudio   onLink   onTextInput   onSocial   gPrefService   getBoolPref5   devtools.inspector.enabled%   context-viewsource!   context-viewinfo#   inspect-separator   context-inspect-   context-sep-viewsource   getShellService/   canSetDesktopBackground9   context-setDesktopBackground   onLoadedImage   document   getElementById   disabled/   gContextMenuContentData7   disableSetDesktopBackground'   context-reloadimage!   onCompletedImage#   context-viewimage   inSyntheticDoc   inFrame#   context-viewvideo   setItemAttr   mediaURL'   context-viewbgimage)   _hasMultipleBGImages/   context-sep-viewbgimage   hasBGImage+   context-viewimageinfo+   context-viewimagedesc   imageDescURL      ÿÿÿÿ   !   CM_initViewItems                        shouldShow   showInspect1   haveSetDesktopBackground   shell   .this                   !   CM_initMiscItemsC        ¹   <   4                        v         È4  ð@  .               ¹W   Q          Q    ¸   
=   :   QV   ¸   
V  V   5   D   pæQV   5   D   `æQV   5   D   PæQV   5   D   @æQV   5   D   0æQV   5   	D    æQV   5   
D   æQV   5   æ : QV  ¸   
=   V  ¸   
=   : : QV   ¸   
=   V   5   E   "æQV   5    E   æQV   5   
 æD   æQV   5   æ: QV   ¸   
=   V   5   E   æQV   5   æ: QV   ¸   
=   V   5   : QV   5   D   æQV   5   æE   æQV   5    æ  QV   ¸   
=   V  : QV     æV   ¸   
:  QæV   ¸   
=   V   5    : QV   ¸   
=   V   5    : QV   ¸   
=   V   5    : QV   ¸   
=   V   5    : QV   ¸   
=   V   5    : QV   ¸   
=    V   5   E   æQV   5   æ: QV   5      kæ   !¸   "
V   5   #5   $5   %:    $æV   5   &¸   '
=   (: Q   $æV   5   &¸   
=   (=   ): QæV   ¸   
=   *V   5   + E   æQ   ,5   -æ: QV   ¸   
=   .V   5   E   "æQV   5   + E   æQ   ,5   -æ: QV   ¸   
=   /V   5    E   æQ   ,5   -æ: Q   05   1  QV  E   "æQV  5   2 E   æQV   5   
 æ  QV  E   ræQV   5   D   `æQV   5   D   PæQV   5   D   @æQV   5   D   0æQV   5   D    æQV   5   	D   æQV   5   æ æ  QV   ¸   
=   3V  : QV   ¸   
=   4V  E   æQV   5   æ: QV   ¸   
=   5V  E   2æQV   5   D   æQV   5   æE   æQV   5    æ: QV   ¸   
=   6V  E   æQV   5   æ: QV   ¸   
=   7V  E   æQV   5   æ: QV   ¸   8
=   7=   2V   5   9 D   æQV   5   9¸   :
=   ;: æ: QÉÖÑÈÏðÿË 1à)ÿÿÿ×à6Ñ+Ü 7ÐÚ 9Ýá;ÐØÐ HÐ+ÊÿÿÿÕÐ(ÊÿÿÿØÐ#ÊÿÿÿÝÐ'ÊÿÿÿÙÐ ÊÿÿÿàîÉß
ßßÐ"ÜÿÿÿÞÐÐ&Ü ZÐÜ \ÏËÑÐËÐðñØéü\Ëÿÿÿ¤ééÕ3æÿÿÿ»    document   getElementById)   context-bookmarkpage   showItem#   isContentSelected   onTextInput   onLink   onImage   onVideo   onAudio   onSocial   onCanvas   setAttribute   tooltiptext   getAttribute#   buttontooltiptext)   context-bookmarklink   onMailtoLink   onPlainTextLink)   context-keywordfield   onKeywordField   frame   inFrame   isTextSelected)   context-searchselect/   formatSearchContextItem3   context-showonlythisframe   inSrcdocFrame-   context-openframeintab#   context-openframe+   context-bookmarkframe   open-frame-sep   frame-sep   BrowserUtils'   mimeTypeIsTextBased   target   ownerDocument   contentType   isFrameImage   removeAttribute   hidden	   true!   context-sep-bidi   onNumeric   top   gBidiUIE   context-bidi-text-direction-toggleE   context-bidi-page-direction-toggle   SocialShare   shareButton   disabled#   context-sharepage'   context-shareselect#   context-sharelink%   context-shareimage%   context-sharevideo   setItemAttr   mediaURL   startsWith   blob:   ÿÿÿÿ   !   CM_initMiscItems                        .this                     bookmarkPage!   showSearchSelect   shareButton   shareEnabled   pageShare                 ÿÿÿÿ          S   nsContextMenu.prototype.initSpellingItemsc   °     ¹                               =         A  I  m      	          ¹W  Q    5   E   "æQ    5    E   æQV  5   æW   Q    5   W  QV   E   æQ    ¸   
:  æW  QV  ¸   
=   V   : QV  ¸   
=   V   D   æQV  5   æ: Q   	¸   

=   : ¸   
=   V   E   æQ    5   æ: QV  ¸   
=   V  : QV  ¸   
=   V  : QV  ¸   
=   V  D   æQV  æ: QV     aæ   	¸   

=   : W  Q    ¸   
V  5   V  ×: W  QV  ¸   
=   V  >: Q   æV  ¸   
=   B: QæV  ¸   
=   V   E   æQ    5   æ: QV      æ  Q   	¸   

=   : W  Q   	¸   

=   : W  Q    ¸   
V  V  :   QV  ¸   
V  V  >: QV  ¸   
=   B: QÉ   EæV  5       æV  ¸   
=   C: Q   æV  ¸   
=   B: QæÑÒÏÏ×ÉØéÛÛ uØØä\
ÑÈ
Õ ÈàÖê  
ÑÈ
Ñ
È
ÔÈÙÜÉÛÖ )   InlineSpellCheckerUI   canSpellCheck1   initialSpellCheckPending   overMisspelling   canUndo   showItem'   spell-check-enabled   spell-separator   onEditableArea   document   getElementById   setAttribute   checked   enabled/   spell-add-to-dictionary9   spell-undo-add-to-dictionary7   spell-suggestions-separator)   addSuggestionsToMenu   parentNode)   spell-no-suggestions%   spell-dictionaries/   spell-dictionaries-menu1   spell-language-separator/   addDictionaryListToMenu7   spell-add-dictionaries-main    ÿÿÿÿ      canSpell   onMisspelling   showUndo)   suggestionsSeparator   numsug   dictMenu   dictSep   .this                      count      	      ì  }   ÿÿÿÿ          U   nsContextMenu.prototype.initClipboardItemsc        ¹      ­                          G         "I  ²R                  ¹W   Q        :  QV   ¸   
=   V   5   : QV   ¸   
=   V   5   : QV   ¸   
=   V   5   : QV   ¸   
=   V   5   D   æQV   5   æ: QV   ¸   
=   V   5   : QV   ¸   
=   	V   5   : QV   ¸   
=   
V   5   : QV   ¸   
=   V   5   D   @æQV   5   D   0æQV   5   D    æQV   5   D   æQV   5   æ D   æQV   5   æ: QV   ¸   
=   V   5   : QV   ¸   
=   V   5   : QV   ¸   
=   V   5   E   æQV   5    æ: QV   ¸   
=   V   5   E   0æQV   5   D    æQV   5   D   æQV   5   æ: QV   ¸   
=   V   5   : QV   ¸   
=   V   5   : QV   ¸   
=   V   5   : QV   ¸   
=   V   5   : QV   ¸   
=   =   V   5    : QV   ¸   
=   =   V   5    : QV   ¸   
=   V   5   D    æQV   5   D   æQV   5   æ: Q  ÎÝÝÝÐÚ ¥ÝÝÝÐ#ààÒÊ ªÝ ¶Ýà1ËÿÿÿÏàê º ¿ÝÝÝÝÕ6ÊÿÿÿÊÕ6ÊÿÿÿÊàÚ Ç 7   goUpdateGlobalEditMenuItems   showItem   context-undo   onTextInput!   context-sep-undo   context-cut   context-copy#   isContentSelected   context-paste   context-delete#   context-sep-paste#   context-selectall   onLink   onImage   onVideo   onAudio   inSyntheticDoc   isDesignMode+   context-sep-selectall#   context-copyemail   onMailtoLink!   context-copylink)   context-sep-copylink5   context-copyimage-contents#   context-copyimage)   context-copyvideourl)   context-copyaudiourl   setItemAttr   disabled   mediaURL+   context-sep-copyimage    ÿÿÿÿ      .this                   Y   nsContextMenu.prototype.initMediaPlayerItemsc        ¹   +   È                        w         ÕR  D_  Ë         
       ¹W  QV  5    D   æQV  5   æW   QV  ¸   
=   V   E   *æQV  5   5   D   æQV  5   5   æ: QV  ¸   
=   V   E   ,æQV  5   5    E   æQV  5   5    æ: QV  ¸   
=   V   E   æQV  5   5   	 æ: QV  ¸   
=   
V   E   æQV  5   5   	æ: QV  ¸   
=   V   E    æQV  5   5      5   æ: QV  ¸   
=   V   : QV  ¸   
=   V   E   æQV  5   5    æ: QV  ¸   
=   V  5   5   E   1æQV  5    D   !æQV  5   E   æQV  5    æ: QV  ¸   
=   V  5    E   æQV  5   5   5   @æ: QV  ¸   
=   V  5   : QV  ¸   
=   V  5   : QV     "æV  ¸   
=   =   V  5   5   <    : QV  ¸   
=   =   V  5   5   ?: QV  ¸   
=   =   V  5   5   <   : QV  ¸   
=    =   V  5   5   <   : QV  ¸   
=   !=   V  5   5   ×: QV  ¸   
=   =   V  5   5   ": QV  5   5   #@D   $æQV  5   5   $V  5   5   %æW  QV  ¸   
=   =   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=   
=   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=    =   &V  : QV  ¸   
=   !=   &V  : QV  ¸   
=   =   &V  : QV  ¸   
=   =   &V  : QV  5       |æ  QV  5    E   $æQV  5   5   'V  5   5   (æ  QV  ¸   
=   )=   &V   : QV  ¸   
=   =   &V  : QÉæV  ¸   
=   *V   : QßÿÛ0ÖÐÿÿÿ¹Û1ÐÿÿÿÏîùØÛ7ÐÿÿÿÉÿfËÿÿÿúÝÝíéííêç
×ãÝÝÝÝÝÝÝÝÝÝÝÝÉôÕ9ÿÿÿÇßØ    onVideo   onAudio   showItem%   context-media-play   target   paused   ended'   context-media-pause%   context-media-mute   muted)   context-media-unmute5   context-media-playbackrate   duration   Number#   POSITIVE_INFINITY%   context-media-loop5   context-media-showcontrols   controls5   context-media-hidecontrols   inSyntheticDoc1   context-video-fullscreen   ownerDocument#   fullscreenElement7   context-media-eme-learnmore   onDRMMedia7   context-media-eme-separator   setItemAttr?   context-media-playbackrate-050x   checked   playbackRate?   context-media-playbackrate-100x?   context-media-playbackrate-125x?   context-media-playbackrate-150x?   context-media-playbackrate-200x	   loop   error   networkState#   NETWORK_NO_SOURCE   disabled   readyState#   HAVE_CURRENT_DATA/   context-video-saveimage5   context-media-sep-commands         à?         ô?         ø?    ÿÿÿÿ      onMedia   hasError   .this                      canSaveSnapshot              p   ÿÿÿÿ          Y   nsContextMenu.prototype.initClickToPlayItemsc   ^      ¹                                	         g_  `  ù                ¹W   QV   ¸    
=   V   5   : QV   ¸    
=   V   5   : QV   ¸    
=   V   5   : QÝÝÝ    showItem!   context-ctp-play   onCTPPlugin!   context-ctp-hide   context-sep-ctp    ÿÿÿÿ      .this                   a   nsContextMenu.prototype.initPasswordManagerItemsc   ³     ¹       À                         :         @`  cg  ÿ      	          ¹W   Q                Q    E   æQ    5   æ  QV  E   æQV  5   5   æ  QV   D   dæQ   5    D   RæQ   5   5    D   ;æQV  5   5   D   &æQV   5    E   æQV  5   	5   æ  QV   ¸   

=   V  : QV   ¸   

=   V  : QV   ¸   
=   =   V  : Q   ¸   
=   :   QV   5      YæV  ¸   
=   V  ¸   
=   : : QV  ¸   
=   V  ¸   
=   : : Q   TæV  ¸   
=   V  ¸   
=   : : QV  ¸   
=   V  ¸   
=   : : QæV   D   æQV  æ   
æÉæ    5     Q   ¸   
V   5   V   5   V  :   QV   ¸   

=   V   : QV      
æÉæ   ¸   
=   :   Q   ¸   
=   :   QV  ¸   
V  V  : QÉâÜßÌÒ×ÕåØØÝÑÈÉTàÿÿÿáà#ÿÿÿÝÊàÿÿÿáà#ÿÿÿÝÑ * ÏâÈÐ&ÿÿÿÚ * 'ÑÈÑÈØ /   gContextMenuContentData   loginFillInfo   passwordField   found   Services   logins   isLoggedIn   disabled   onPassword   usernameField   showItem)   fill-login-separator   fill-login   setItemAttr   document   getElementById   setAttribute   label   getAttribute   label-password   accesskey%   accesskey-password   label-login   accesskey-login#   documentURIObject/   LoginManagerContextMenu   addLoginsToMenu   target   browser)   fill-login-no-logins!   fill-login-popup   insertBefore    ÿÿÿÿ      .this                      loginFillInfo   showFill   disableFill   fillMenu   documentURI   fragment   popup'   insertBeforeElement      	      (     ÿÿÿÿ                 f                   K   nsContextMenu.prototype.initSyncItemsc         ¹                                         g  ²g  ,                ¹W   Q    ¸   
V   : QÔ    gFxAccounts'   initPageContextMenu    ÿÿÿÿ      .this                   W   nsContextMenu.prototype.openPasswordManagerc   %       ¹                                          Ôg  9h  0                     ¸   
      5   5   : Qä    LoginHelper'   openPasswordManager   window/   gContextMenuContentData#   documentURIObject	   host    ÿÿÿÿ                        G   nsContextMenu.prototype.inspectNodec   ®      ¹      #                                Sh  l  4                ¹   Q       Q    ¸   
=   [    :    : Q5      QQ   5   5   5     QV   5   ¸   	
V  5   
:   Q   ¸   
V  =   : ¸   
   : ÉÉÎÖÜÙÙ	ÈÕÓ K    Cu   importK   resource://devtools/shared/Loader.jsm-   RequireObjectCoercible   devtools   browser   ownerGlobal   gBrowser   TargetFactory   forTab   selectedTab   gDevTools   showToolbox   inspector	   then    ÿÿÿÿ      .this                      devtools   gBrowser   target                                  K   nsContextMenu.prototype.inspectNode/<e  ²       ¹      4                                ]i  l  9                   QÇ   T  ¸    
:     Q   5   ¸   
=   :    Q  5   5   ¸   
=   [    [     5   ]   	: Q   5   
¸   
:  ¸   
   : QV   ¸   
   : ÈÈË
ÊÉ
ÖÈåCÏÿÿÿ½åÑ J    getCurrentPanel   selection	   once   new-node-front   browser   messageManager!   sendAsyncMessage   debug:inspect   target	   node   walker%   findInspectingNode	   then    ÿÿÿÿ      toolbox                     inspector   onNewNode                                      	   node                O   nsContextMenu.prototype.inspectNode/</<e  #       ¹                                         ßj  Bk  A                       5    ¸   
T  =   : Qâ    selection   setNodeFront)   browser-context-menu    ÿÿÿÿ      nodeFront                 O   nsContextMenu.prototype.inspectNode/</<e          ¹                                          bk  l  E                       ¸    
=   : Ö 	   once#   inspector-updated    ÿÿÿÿ                    ¦   ÿÿÿÿ    ¯                   ÿÿÿÿ    «                    C   nsContextMenu.prototype.setTargetc       ¹      H         	      	       *      |l  Ø  N                ¹W  	Q  
      QÇ       W  Q  
QV  	   E   æQ   5    æ6    QV  	5       Næ   5   5   U  Q   5   5   U Q   5   5   U Q   5   W  
Qæ=      QT  5      	5   
D   (æQT  5      E   æQV  T  :  æ   æV  	B6   QÈæV  	B6   QV  	B6   QV  	B6   QV  	=   6   QV  	B6   QV  	B6   QV  	B6   QV  	B6   QV  	B6   QV  	B6   QV  	B6   QV  	=   6   QV  	B6   QV  	B6   QV  	B6   QV  	@6   QV  	=   6   QV  	@6   QV  	=   6    QV  	=   6   !QV  	=   6   "QV  	B6   #QV  	B6   $QV  	B6   %QV  	B6   &QV  	B6   'QV  	B6   (QV  	=   6   )QV  	B6   *QV  	B6   +QV  	B6   ,QV  	B6   -QV  	B6   .QV  	5       æV  	   5   /6   /Q   $æV  	   0¸   1
   2: 6   /QæV  	V  	5   /5   46   3QV  	V  	5   3Ù   6>6   5QV  	T  6   QV  	5   5   7  QV  	V  6   8QV  	5       GæV  	   5   96   9QV  	   5   :6   :QV  	   5   ;6   ;Q   Ïæ   <¸   =
V  	5      2: W  
QV  	V  5   >¸   ?
   @5   A: ¸   B
   @5   C: ¸   ?
   @5   D: 5   E6   9QV  	V  5   F6   :QV  	V  5   >¸   ?
   @5   A: ¸   B
   @5   G: 5   H6   ;QæV  	V  	5   9¸   J
=   K:   6   IQV  	V  5   L6   'QV  	5   5      	5   M  ÎæV  	5      @5   NrE   æQV  	5   5   Oæ  (æV  	C6   QV  	5   ¸   P
   @5   N5   Q: W   QV   E   æQV   5   RV   5   Sæ   æV  	C6   QæV   E   5æQV   5   RV   5   TE   æQV   5   RV   5   U æ   æV  	C6   QæV  	V  	5   5   O5   V6   QV  	5   ¸   J
=   W: W  QV     /æV  	   X   XV  5   Y5   ZV  : 6   Qæ  TæV  	5      [r   æV  	C6   Q  .æV  	5      \r   ñæ  QV  	5   5   ]D   æQV  	5   5   ^æ  QV  	¸   _
V  :    æV  	V  6   QæV  	¸   `
:     æV  	C6   QæV  	5   5   aV  	5   5   bE   .æQV  	5   5   c>D   æQV  	5   5   d>æ   æV  	C6   Q   æV  	C6   QæÉ  -æV  	5      er   æ  QV  	C6   QV  	5   5   ]D   æQV  	5   5   ^æ  QV  	¸   _
V  :    æV  	V  6   QæV  	¸   `
:     æV  	C6   QæÉ  æV  
   <5   f   <5   g  æV  	V  
   <5   h>I6   QV  	V  
   <5   i>I6   QV  	V  
   <5   j>I6   *QV  	V  
   <5   k>I6   .QV  	5   *   }æV  	5       %æ   l¸   m
   5   n: Q   Næ   l¸   o
V  	5   ¸   ?
   @5   p: 5   q: Q   l¸   r
T T : QæV  	V  
   <5   s6   Q  ^æV  	5      tr   ºæV  5   YW  QV     æ  Q  QV  	¸   u
V  =   v: W  QV  	B6   wQ   &æ  Qv  QV  	C6   wQÉ    æV     5æV  	C6   (QV  	   X   XV  5   ZV  : 6   )QæÉæ   æV  	5      xrD   ,æQV  	5      yrD   æQV  	5      zræE   @æQV  	5   5   {   y5   |E    æQV  	5   5   }   y5   ~æ   æV  	C6   ,QæV  	V  	¸   
V  	5   : 6   -Q   \æV  	5   5      	5      =æV  	V  	5   5   E   æQV  	¸   
V  	5   : æ6   -Qæ=     QV  	5   W  Qæ  ´mV  5      	5   M  æV  	5    E   æQV  V  : D   zæQV     rE   æQV  5   æD   XæQV     rE   æQV  5   æD   6æQV     rD   %æQV  ¸   
=   =   : =   æ  4æV  	C6   QV  	V  6   QV  	V  	¸   
:  6   QV  	V  	¸   
:  6   QV  	V  	¸   
:  6    QV  	V  	¸   
:  6   !QV  	V  	5   !=   6   QV  	V  	¸   
V  	5   : 6   QV  	   0¸   #
V  : 6   #QV  5      8æV  	5   :¸   
V  	5   BC: QV  	V  5   6   "Qæ   æ  Qv  QÉ    æV  	5   ( E   æQV  	5   w æ   æ  Q  QV  	¸   u
V  =   v: W  QV  	B6   wQ   &æ  Qv  QV  	C6   wQÉ    æV     5æV  	C6   (QV  	   X   XV  5   ZV  : 6   )QæÉæV  5   W  QãV  ÿÿýKæ=     QV  	5   5      	5   E   æQV  	5   5   5   V  æD   æQV  	5   5   V  æ   æV  	C6   $QæV  5   >W  QV  V  5      +æV  	C6   %QV  5      æV  	C6   &QæV  	5   *   ³æV  
   <5     æV  	C6   QV  	B6   QV  	B6   QV  	B6   QV  	B6   QV  	B6   $QV  	B6   %QV  	B6   &QV  	B6   (QV  	C6   +QV  	C6   *QV  	5       %æ   l¸   m
   5   n: Q   ¥æV  5   >W  QV  ¸   ?
   @5   A: ¸   B
   @5   C: ¸   ?
   @5   A: ¸   B
   @5   : W  Q   l¸   o
V  ¸   
V  : : Q   l¸   r
T T : Qæ   l5   -E   æQV  	5   -æW  QV  	¸   
=   V  : QV  	¸   
=   V  : QæÈ× Ê RáÉÓÓÓÐ
ËÚÕ(ÈË  dËËËÏËËËËËËËÏËËËËÏËÏÏÏËËËËËËÏËËËËËÉÚÕÊØÚÍÓÎÉBÔÔÚÚÈÔÊ ÊÊ ÊÊ Î ¢ÓÔÊ £ ÊÊ £ Ï ¨ÕËÓÙ ÉÛÏ #Ëß
Èß
ÌËÚÕ
ÌÝÕ
È
àÐÏÑÏ  ìéÏ
ÏË
Ì Ôäè
Ñ
ÓÏ  ËéÏ
ÏË
ÓÚ ÛÛÛÛÉÉ àæÈÿÿÿæ×ßÏ  µÎ(ÔÈÓÌÓË× Ò ÖÖ×àÚÌØÏÙÙÔË 
ÊÏ( º ÔÑÉÊââÑÕÊ
Ë
Î
ÏÉ
ÏÉ
ÏÉ
ÏÉ
Ù
ØÉ
ÔÉCÉßÜÔ ?ÑË(ÔÈÓÌÓË× JÌ PÎ Ì T
ÊààÔÌÎÎËÉ
Ì eÊÏËËËËËËËËËËËÉ 
àÎÕÊÊ yÊÊ yÊÊ yÈ
Ûÿÿÿæ
×àØÙ     isRemote/   gContextMenuContentData   event   target   rangeParent   rangeOffset   editFlags{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   nodeType	   Node   DOCUMENT_NODE   namespaceURI   shouldDisplay   onImage   onLoadedImage!   onCompletedImage   imageDescURL      onCanvas   onVideo   onAudio   onDRMMedia   onTextInput   onNumeric   onKeywordField   mediaURL   onLink   onMailtoLink   onSaveableLink	   link   linkURL   linkURI   linkTextStr   linkProtocol   linkDownload#   linkHasNoReferrer   onMathML   inFrame   inSrcdocFrame   inSyntheticDoc   hasBGImage   bgImageURL   onEditableArea   isDesignMode   onCTPPlugin   canSpellCheck   onPassword   selectionInfo   BrowserUtils'   getSelectionDetails   window   textSelected	   text   isTextSelected   length   ownerDocument   ownerDoc   browser   principal%   frameOuterWindowID!   SpellCheckHelper   isEditable   defaultView   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell%   chromeEventHandler   nodePrincipal#   nsIDOMWindowUtils   outerWindowID   onSocial   getAttribute   origin)   mozSyntheticDocument   ELEMENT_NODE-   nsIImageLoadingContent   currentURI   getRequest   CURRENT_REQUEST   imageStatus+   STATUS_SIZE_AVAILABLE)   STATUS_LOAD_COMPLETE   STATUS_ERROR	   spec   longdesc   makeURLAbsolute	   body   baseURI#   HTMLCanvasElement!   HTMLVideoElement   currentSrc   src%   isMediaURLReusable#   _isProprietaryDRM   readyState   HAVE_METADATA   videoWidth   videoHeight!   HTMLAudioElement   INPUT   TEXTAREA   TEXTINPUT   NUMERIC   EDITABLE   PASSWORD)   InlineSpellCheckerUI   initFromRemote   spellInfo	   init/   nsIDOMNSEditableElement   editor   initFromEvent   KEYWORD   HTMLHtmlElement   getComputedURL!   background-image)   _hasMultipleBGImages!   HTMLEmbedElement#   HTMLObjectElement#   HTMLAppletElement   displayedType   TYPE_NULL%   pluginFallbackType)   PLUGIN_CLICK_TO_PLAY)   _isSpellCheckEnabled   TEXT_NODE   parentNodeI   http://www.w3.org/XML/1998/namespace#   HTMLAnchorElement	   href   HTMLAreaElement   HTMLLinkElement   getAttributeNS9   http://www.w3.org/1999/xlink	   type   simple   getLinkURL   getLinkURI   getLinkText   getLinkProtocol   mailto   isLinkSaveable   download   checkMayLoadE   http://www.w3.org/1998/Math/MathML   top!   isSrcdocDocument   CONTENTEDITABLE#   nsIEditingSession%   getEditorForWindow   showItem'   spell-check-enabled   spell-separator    ÿÿÿÿ      aNode   aRangeParent   aRangeOffset   request   descURL   bodyElt	   elem   docDefaultView   targetWin   editingSession   canSpell%   isXULTextLinkLabel   .this    
                editFlags   ownerDoc   xulNS   XMLNS   NS_MathML   
                  mediaURL                     mediaURL                     computedURL                     e                     ex                     bgImgUrl                     e                  %   isXULTextLinkLabel  X       ¹                                         &  Ô                   T  5          E   BæQT  5   =   E   -æQT  5   ¸   
=   : E   æQT  5   æÚÕÔÊÉ    namespaceURI   tagName   label   classList   contains   text-link	   href    ÿÿÿÿ   	   node            Û
  º       ò  ,        e  G         	  ,         ö  ÿÿÿÿ                7  à          8  |          	            [	           »            ñ            -                  Q   nsContextMenu.prototype.getComputedStylec  .       ¹                                         8  Î                   T  5    5   ¸   
T  =   : ¸   
T : ÔÈ Ê     ownerDocument   defaultView!   getComputedStyle   !   getPropertyValue    ÿÿÿÿ      aElem   aProp                  M   nsContextMenu.prototype.getComputedURLc         ¹      7                                   >   Å¡                  T  5    5   ¸   
T  =   : ¸   
T : W   QV      r   )æV   Ù   ?   æ=   pæV   >7W   QæV   5      	5   
   æV   ¸   
:     æ@æÔÈ Ê ÈÊËÌÔËË    ownerDocument   defaultView!   getComputedStyle   '   getPropertyCSSValue   CSSValueList   length'   found multiple URLs   primitiveType#   CSSPrimitiveValue   CSS_URI   getStringValue    ÿÿÿÿ      aElem   aProp   url                 M   nsContextMenu.prototype.isLinkSaveablec  l      ¹                                        -¢  £  ¤                ¹W   QV   5    E   ZæQV   5    =   D   BæQV   5    =   D   ,æQV   5    =   D   æQV   5    =   æ æÐÖÖÖÒ    linkProtocol   mailto   javascript	   news   snews    ÿÿÿÿ      aLink   .this                 Y   nsContextMenu.prototype._isSpellCheckEnabledc  y      ¹      ;                                  ¤£  ­¥  ®                ¹W  QV  ¸    
T  :    æCæT  5   W   QV    E   æQT  5   æ   æT  5   5   =   W   QæV       æBæT  5   Î ½ ´ÍÕÙ ¼È !   isTargetATextBox#   isContentEditable   ownerDocument   designMode   on   spellcheck    ÿÿÿÿ      aNode   editable   .this                 S   nsContextMenu.prototype._isProprietaryDRMc   L      ¹      
                                   Í¥  U¦  ¿                ¹W   QV   5    5   E   5æQV   5    5   E    æQV   5    5   5   =   æêÚ    target   isEncrypted   mediaKeys   keySystem   org.w3.clearkey    ÿÿÿÿ      .this                   [   nsContextMenu.prototype._openLinkInParametersc  ×      ¹      3                               {¦  ê¨  Ä         	       ¹W   Q  Q[        5   ]       5   ]       5   ]   V   5   ]     Q  QT  K   "m  Q  V  V  T  V  78QãQLMÿÿÿÞæQNÉ=   V  qE   $æQV  5   V   5   	5   
5   æ   æV  C6   QæV  ÉÉÏÏÏÓÌ0'Ì	à ÏÑÞÌ /   gContextMenuContentData   charSet   charset#   documentURIObject   referrerURI   referrerPolicy#   linkHasNoReferrer   noReferrer   userContextId   principal!   originAttributes    ÿÿÿÿ      extra   .this                    params                     p                         charset         referrerURI         referrerPolicy         noReferrer          \   )         Ê   ÿÿÿÿ   W   6           Ô                    A   nsContextMenu.prototype.openLinkc   Q      ¹                                	         ,©  ®©  Ø                ¹W   Q        V   5   V   5   : Q      V   5   =   V   ¸   
:  : Qàã#ÿÿÿÝ !   urlSecurityCheck   linkURL   principal   openLinkIn   window+   _openLinkInParameters    ÿÿÿÿ      .this                   _   nsContextMenu.prototype.openLinkInPrivateWindowc   \      ¹                               	         ª  ©ª  Þ         	       ¹W   Q        V   5   V   5   : Q      V   5   =   V   ¸   
[    C]   : : QàØÐ,ÿÿÿã à !   urlSecurityCheck   linkURL   principal   openLinkIn   window+   _openLinkInParameters   private    ÿÿÿÿ      .this                         private                 K   nsContextMenu.prototype.openLinkInTabc  ,     ¹      P                               ëª  ®  å                ¹W   Q      Q        V   5   V   5   : Q   5     QB  Q   5      læ  Q   5     Q  QV   5     QV  ¸   	
V  V  B: QCW  QÉ   æ  Qv  QÉ    æÉæ[    V  ]   
      T  5   ¸   
=   : : ]     Q      V   5   =   V   ¸   
V  : : QÉÎàÏ ìÊÏ4ÎØÏÖÉÞÿÿÿ÷Íç ÿÿÿà !   urlSecurityCheck   linkURL   principal/   gContextMenuContentData#   documentURIObject1   parentAllowsMixedContent   Services+   scriptSecurityManager   linkURI%   checkSameOriginURI#   allowMixedContent   parseInt   target   getAttribute%   data-usercontextid   userContextId   openLinkIn   tab+   _openLinkInParameters    ÿÿÿÿ      event   .this                    referrerURIE   persistAllowMixedContentInChildTab   params                     sm                      targetURI                     e                      #   allowMixedContent         userContextId            i   8           ÿÿÿÿ   _   `          u   -         °                   S   nsContextMenu.prototype.openLinkInCurrentc   Q      ¹                                	         Õ®  X¯                  ¹W   Q        V   5   V   5   : Q      V   5   =   V   ¸   
:  : Qàã$ÿÿÿÜ !   urlSecurityCheck   linkURL   principal   openLinkIn   current+   _openLinkInParameters    ÿÿÿÿ      .this                   M   nsContextMenu.prototype.openFrameInTabc   p       ¹   	   "                        
          ¯  °           	          Q    5      Q          5   =   [        5   ]   V      æ      V   :    æ@æ]   : QÉÏÙÏÔÐ 	 /   gContextMenuContentData   referrer   openLinkIn   docLocation   tab   charSet   charset   makeURI   referrerURI    ÿÿÿÿ                           referrer                          charset         referrerURI             i   ÿÿÿÿ          G   nsContextMenu.prototype.reloadFramec   9      ¹                                        Ä°  i±                  ¹W   QV   5    5   ¸   
=   @[    V   5   ]   : QÚ9Î     browser   messageManager!   sendAsyncMessage/   ContextMenu:ReloadFrame   target    ÿÿÿÿ      .this                         target                 C   nsContextMenu.prototype.openFramec   p       ¹   	   "                        
          ¯±  «²           	          Q    5      Q          5   =   [        5   ]   V      æ      V   :    æ@æ]   : QÉÏÙÏÔÐ  /   gContextMenuContentData   referrer   openLinkIn   docLocation   window   charSet   charset   makeURI   referrerURI    ÿÿÿÿ                           referrer                          charset         referrerURI             i   ÿÿÿÿ          S   nsContextMenu.prototype.showOnlyThisFramec   ¢      ¹      2                                 ú²  ¤´           
       ¹W   Q  Q           5   V   5   5      5   5   : Q   5     Q   	   	   5   =   
[    C]   V     æ      V  :    æ@æ]   : QÉÔÎÏ ÏÙÔÐ " !   urlSecurityCheck/   gContextMenuContentData   docLocation   browser!   contentPrincipal   Ci1   nsIScriptSecurityManager   DISALLOW_SCRIPT   referrer   openUILinkIn   current1   disallowInheritPrincipal   makeURI   referrerURI    ÿÿÿÿ      .this                      referrer                      1   disallowInheritPrincipal         referrerURI                ÿÿÿÿ          =   nsContextMenu.prototype.reloadc         ¹                                         ¹´  ë´  '                         T  : QÑ 1   BrowserReloadOrDuplicate    ÿÿÿÿ      event                  S   nsContextMenu.prototype.viewPartialSourcec        ¹      #                               $µ  g¸  ,         	       ¹W   Q      Q    5   ¸   
=   :    QV     æ@   æ    æ  QT  =      æV   5      æ@æ  Q   5   ¸   
   	5   
V  V  : QÉÎÖÉØ =ÉÜè    Services   prefs   getBoolPref   view_source.tab   mathml   target   top!   gViewSourceUtils5   viewPartialSourceInBrowser   gBrowser   selectedBrowser    ÿÿÿÿ      aContext   .this                    inWindow   openSelectionFn   target                  u   nsContextMenu.prototype.viewPartialSource/openSelectionFn<c   ¡       ¹      :                                  ¨µ  ¾·  .                     Q       QV    D   æQ   5   5    æ   /æ  Q   ¸   
:    QV  5    W   QÉæV   ¸   
=   [    C]   B]   	:   QV   ¸   

V  : ÉÉÊ
Ê
ÌÑÌÈÐ
Õ 6ÈÏ    gBrowser   window   toolbar   visible   RecentWindow5   getMostRecentBrowserWindow   loadOneTab   about:blank!   relatedToCurrent   inBackground!   getBrowserForTab    ÿÿÿÿ                           tabBrowser   tab                      browserWindow                      !   relatedToCurrent         inBackground          
      ÿÿÿÿ   =   #                              ÿÿÿÿ          O   nsContextMenu.prototype.viewFrameSourcec   E      ¹                                        ¾¸  k¹  B                ¹W   Q        [    V   5   ]      5   ]   V   5   ]   : QÏÎÏÎ C H 7   BrowserViewSourceOfDocument   browser/   gContextMenuContentData   docLocation   URL%   frameOuterWindowID   outerWindowID    ÿÿÿÿ      .this                         browser         URL         outerWindowID                 A   nsContextMenu.prototype.viewInfoc   +      ¹                                         ¹  ä¹  J                ¹W   Q           5   @@@V   5   : Qä    BrowserPageInfo/   gContextMenuContentData   docLocation   browser    ÿÿÿÿ      .this                   K   nsContextMenu.prototype.viewImageInfoc   7      ¹                                          º  º  N                ¹W   Q           5   =   V   5   @V   5   : QÙÓ O    BrowserPageInfo/   gContextMenuContentData   docLocation   mediaTab   target   browser    ÿÿÿÿ      .this                   K   nsContextMenu.prototype.viewImageDescc  o      ¹      '                                 º  ð»  S                ¹W   Q        V   5   V   5   5      5   5   : Q      V   5   T  [    C]      	5   
]   : QÓÎÏ TÛ#'Ï W !   urlSecurityCheck   imageDescURL   browser!   contentPrincipal   Ci1   nsIScriptSecurityManager   DISALLOW_SCRIPT   openUILink1   disallowInheritPrincipal/   gContextMenuContentData#   documentURIObject   referrerURI    ÿÿÿÿ      e   .this                    1   disallowInheritPrincipal         referrerURI                 K   nsContextMenu.prototype.viewFrameInfoc   3      ¹                                         ¼  ¼  [                ¹W   Q           5   @@V   5   V   5   : QÖÒ \    BrowserPageInfo/   gContextMenuContentData   docLocation%   frameOuterWindowID   browser    ÿÿÿÿ      .this                   G   nsContextMenu.prototype.reloadImagec   m      ¹      &                                  ¯¼  ð½  `                ¹W   Q        V   5   V   5   5      5   5   : QV   5   5   ¸   
=   	@[    V   5   
]   
: QÓÎÏ aÚ9Î e !   urlSecurityCheck   mediaURL   browser!   contentPrincipal   Ci1   nsIScriptSecurityManager   DISALLOW_SCRIPT   messageManager!   sendAsyncMessage/   ContextMenu:ReloadImage   target    ÿÿÿÿ      .this                         target                 Q   nsContextMenu.prototype._canvasToBlobURLc  6      ¹                                     ¾  ¾¿  i                ¹W   QÇ   V   5    5      Q   A    ,  R ÈÈÔÏ t    browser   messageManager   Promise    ÿÿÿÿ      target   .this                   mm                  U   nsContextMenu.prototype._canvasToBlobURL/<c  [       ¹                                      c¾  ¸¿  k                 Ç       ¸    
=   [    [     ]   : Q      Q  ¸   
=      : QÈà:ÊÿÿÿÆ
ÌÛ !   sendAsyncMessage9   ContextMenu:Canvas:ToBlobURL   target%   addMessageListenerG   ContextMenu:Canvas:ToBlobURL:Result    ÿÿÿÿ      resolve                    onMessage                                          target                i   nsContextMenu.prototype._canvasToBlobURL/</onMessagee  <       ¹                                         Ñ¾  b¿  n                     ¸    
=         : Q  T  5   5   : Qä× +   removeMessageListenerG   ContextMenu:Canvas:ToBlobURL:Result	   data   blobURL    ÿÿÿÿ      message              U   ÿÿÿÿ      *   ÿÿÿÿ    3                    C   nsContextMenu.prototype.viewMediac  É      ¹      E                               À  Â  w                ¹W   QÇ       5      QV   5      <æV   ¸   
V   5   : ¸   
       5   : Q   kæ      V   5   	V   5   
5      5   5   : Q      V   5   	  [   C]      ]   : QæÈÐÉ7ãÊ zÊ ÓÎÏ Ý%Ê  /   gContextMenuContentData#   documentURIObject   onCanvas!   _canvasToBlobURL   target	   then   Cu   reportError!   urlSecurityCheck   mediaURL   browser!   contentPrincipal   Ci1   nsIScriptSecurityManager   DISALLOW_SCRIPT   openUILink1   disallowInheritPrincipal   referrerURI    ÿÿÿÿ      e   .this                   referrerURI                  G   nsContextMenu.prototype.viewMedia/<c  1       ¹                                        ±À  CÁ  z                         T    [    C]         ]   : Q×!Ï {    openUILink1   disallowInheritPrincipal   referrerURI    ÿÿÿÿ      blobURL                     1   disallowInheritPrincipal         referrerURI                    1   disallowInheritPrincipal         referrerURI             ½   ÿÿÿÿ          [   nsContextMenu.prototype.saveVideoFrameAsImagec   V     ¹      ]                               ½Â  oÆ           	       ¹W   QÇ   V   5    5      Q   ¸   
V   5    :    Q=      QV   5      æ    Q      V   5   :   QV  ¸   
   5   	:   QV  5   
   (æ      V  5   
: =      QæÉ   æ  Qv  QÉ    æ       æ=      Qæ   ¸   
=   [    [   V   5   ]   : Q      Q   ¸   
=      : QÈÔÕÉËÉvÊÓÈÕÈÉ
ÓÙÔÌÛÎ Ì £Û    browser   messageManager)   PrivateBrowsingUtils!   isBrowserPrivate      mediaURL   makeURI   QueryInterface   Ci   nsIURL   fileBaseName   decodeURI	   .jpg   snapshot.jpg!   sendAsyncMessageC   ContextMenu:SaveVideoFrameAsImage   target%   addMessageListenerQ   ContextMenu:SaveVideoFrameAsImage:Result    ÿÿÿÿ      .this                      mm   isPrivate	   name   onMessage                     uri   url                     e                                        target                o   nsContextMenu.prototype.saveVideoFrameAsImage/onMessagee  x       ¹                                        âÄ  Æ                     Q      ¸    
=         : QT  5   5      Q      V         =   CB   5   @@@      : 
QÉä
ÒßÍÊ  +   removeMessageListenerQ   ContextMenu:SaveVideoFrameAsImage:Result	   data   dataURL   saveImageURL   SaveImageTitle   document#   documentURIObject    ÿÿÿÿ      message                     dataURL                q   ÿÿÿÿ     R   z         J  ÿÿÿÿ   b   k          Û                    U   nsContextMenu.prototype.leaveDOMFullScreenc          ¹                                          Æ  ·Æ  ¦                     ¸   
:  QÐ    document   exitFullscreen    ÿÿÿÿ                        G   nsContextMenu.prototype.viewBGImagec  o      ¹      '                                 Ç  [È  «                ¹W   Q        V   5   V   5   5      5   5   : Q      V   5   T  [    C]      	5   
]   : QÓÎÏ ¬Û!%Ï ¯ !   urlSecurityCheck   bgImageURL   browser!   contentPrincipal   Ci1   nsIScriptSecurityManager   DISALLOW_SCRIPT   openUILink1   disallowInheritPrincipal/   gContextMenuContentData#   documentURIObject   referrerURI    ÿÿÿÿ      e   .this                    1   disallowInheritPrincipal         referrerURI                 Y   nsContextMenu.prototype.setDesktopBackgroundc   p      ¹      &                        
        ~È  'Í  ³                ¹W   QÇ   V   5    5      Q   ¸   
=   @[    V   5   ]   : Q      Q   ¸   
=      : QÈÔÒÎ ¶Ì ÎÛ    browser   messageManager!   sendAsyncMessageE   ContextMenu:SetAsDesktopBackground   target%   addMessageListenerS   ContextMenu:SetAsDesktopBackground:Result    ÿÿÿÿ      .this                      mm   onMessage                         target                m   nsContextMenu.prototype.setDesktopBackground/onMessagee  §       ¹      I                                  9É  ÎÌ  ¹                     Q      ¸    
=         : QT  5   5      
æÉæ   ¸   
=   =   :    QV   T  5   5   	6   Q=   
  Q      V  =   =   V   : QÉÊÖÊ ºÍ Ì À
ÖÈ×ÊÓ È +   removeMessageListenerS   ContextMenu:SetAsDesktopBackground:Result	   data   disable   document   createElementNS9   http://www.w3.org/1999/xhtml   img   src   dataUrlc   chrome://browser/content/setDesktopBackground.xul   openDialog   U   centerscreen,chrome,dialog,modal,dependent    ÿÿÿÿ      message                     image+   kDesktopBackgroundURL             
      ÿÿÿÿ    D                d   ÿÿÿÿ          C   nsContextMenu.prototype.saveFramec   (      ¹                                         cÍ  ªÍ  Ò                ¹W   Q        V   5   BV   5   : Qá    saveBrowser   browser%   frameOuterWindowID    ÿÿÿÿ      .this                   E   nsContextMenu.prototype.saveHelperc        ¹   *   ï                       ?        3Î  ¼å  Ø                  QÇ       W   Q   W  Q   W  Q<       QV   [   @]      ]      ]      ]   6    QV  [      ]   6    QV  [   
   	]   6    Q   ¸   
[      	   	  : ]   
C]   :   	QT    æ  	T 6   Qæ  	   5   r   ?æ  Q   ¸   
   5   :   Q  	¸   
V  : QÉæ  	V  A,  R  6   Q   5   5     Q     æV     5   5   W  Qæ  	   5   r   æV     5   5   W  Qæ  	5   V  6   Q  	   5   r   8æ  	  6   Q  	   5   r   æ  	C6   Qæ    ¸   !
=   ": W  Q   #5   $¸   %
   5   &:   
Q  
¸   '
V  A,  R  V    
5   (: Q  	¸   )
V   A,  R  : QÈË áÊ "Ê 5Ê Û
Ë áÉÊ Ê Ð "ÉÐ 5ÉÐ CÑÏÈ CÉ HÏÐ
ÖÈÖÎ ÉÔÚÐÚÏxÐÐÐÍÑÈÛÉÕÊ dÕÿÿÿí    prototype   extListener   onStartRequest   onStopRequest   onDataAvailable   getInterface   notify   NetUtil   newChannel   makeURI   uri1   loadUsingSystemPrincipal5   contentDispositionFilename   Ci3   nsIPrivateBrowsingChannel)   PrivateBrowsingUtils!   isBrowserPrivate   gBrowser   selectedBrowser   setPrivate+   notificationCallbacks   nsIChannel5   LOAD_CALL_CONTENT_SNIFFERS   nsIRequest#   LOAD_BYPASS_CACHE#   nsICachingChannel?   LOAD_BYPASS_LOCAL_CACHE_IF_BUSY   loadFlags   nsIHttpChannel   referrer-   nsIHttpChannelInternal5   forceAllowThirdPartyCookie   gPrefService   getIntPrefU   browser.download.saveLinkAsFilenameTimeout   Cc)   @mozilla.org/timer;1   createInstance   nsITimer!   initWithCallback   TYPE_ONE_SHOT   asyncOpen2       àA    ÿÿÿÿ      linkURL   linkText   dialogTitle   bypassCache   doc   docURI   windowID   linkDownload   saveAsListener   callbacks   timerCallback   channel   timeToWait   timer                   flags;   NS_ERROR_SAVE_LINK_AS_TIMEOUT                     docIsPrivate                     saveAsListener          ¹                                            ãÏ  èÏ  á                       ÿÿÿÿ                          callbacks          ¹                                            ¼Ú  ÁÚ  "                       ÿÿÿÿ                          timerCallback          ¹                                            @Þ  EÞ  5                       ÿÿÿÿ                       3   saveLinkAs_onStartRequestC       ¹      ½                        7        \Ð  ×  å      
         ¹W   Q    QT  5             
æÉæ  
¸   
:  Q   ¸   
T  5    :    *æ              	Q   5   ¸   
   5   :   QV  ¸   	
=   
:   QV  ¸   
=   :   QV  ¸   
=   :   Q   5   ¸   
   5   :   Q   5   ¸   
   5   :   	QV  	¸   
  :   QV  ¸   
V  V  V  : QÉ   æ  Qv  QÉ    æÉæ   5   ¸   
   5   :   QT  ¸   
   5   :   QV   V  ¸   
V  5   T  @C   : 6   QV   5   ¸   
T  T : QÉ êÝ
  íÐÔ ÞÑÊ òÈË ôÈÐÈÐÈÑÊ úÈÑÊ üÈÐ	ÈäÔ
  ÑÊ 
ÈÔ
È× 	
ÉÛ    status   cancel   Components   isSuccessCode   CcA   @mozilla.org/intl/stringbundle;1   getService   Ci-   nsIStringBundleService   createBundlem   chrome://mozapps/locale/downloads/downloads.properties#   GetStringFromName/   downloadErrorAlertTitle)   downloadErrorGenericO   @mozilla.org/embedcomp/prompt-service;1!   nsIPromptServiceO   @mozilla.org/appshell/window-mediator;1#   nsIWindowMediator)   getOuterWindowWithId   alerti   @mozilla.org/uriloader/external-helper-app-service;17   nsIExternalHelperAppService   QueryInterface   nsIChannel   extListener   doContent   contentType   window   onStartRequest   ÿÿÿÿ   3   saveLinkAs_onStartRequest                        aRequest   aContext   .this                   extHelperAppSvc   channel                     window   sbs   bundle   title   msg   promptSvc   wm      
               ex              W           ö  ÿÿÿÿ   ,             {   å          n                              1   saveLinkAs_onStopRequestC  v      ¹                                        @×  (Ù           
      ¹W   QT          3æ                B    : QæV   5      #æV   5   ¸   
T  T T : QæÎ
ä 
É
Þ    saveURL   extListener   onStopRequest   ÿÿÿÿ   1   saveLinkAs_onStopRequest                        aRequest   aContext   aStatusCode   .this                5   saveLinkAs_onDataAvailableC  *      ¹                                        eÙ  Ú                 ¹W   QV   5    ¸   
T  T T T T : QÙ     extListener   onDataAvailable   ÿÿÿÿ   5   saveLinkAs_onDataAvailable                        aRequest   aContext   aInputStream   aOffset   aCount   .this                       extListener         onStartRequest         onStopRequest         onDataAvailable                5   sLA_callbacks_getInterfaceC  s       ¹                                         Û  cÝ  $                T  ¸    
   5   : D   æQT  ¸    
   5   : æ   0æ  
¸   
:  Q  	¸   
      : Qæ   5   pÔÞ! +
Ð
ÛË    equals   Ci   nsIAuthPrompt   nsIAuthPrompt2   cancel   Cr+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ   5   sLA_callbacks_getInterface                     	   aIID                        getInterface                !   sLA_timer_notifyC         ¹                                         Þ  æÞ  7                  	¸    
      : QÚ    cancel   ÿÿÿÿ   !   sLA_timer_notify                        aTimer                        notify                       uri      1   loadUsingSystemPrincipal               ÿÿÿÿ     3                 A   nsContextMenu.prototype.saveLinkc   o      ¹   
                                      õå  ç  l                ¹W   Q        V   5   V   5   : QV   ¸   
V   5   V   5   @CV   5      5   V   5   V   5   	: QàèÊÉÉ n !   urlSecurityCheck   linkURL   principal   saveHelper   linkTextStr   ownerDoc/   gContextMenuContentData#   documentURIObject%   frameOuterWindowID   linkDownload    ÿÿÿÿ      .this                   C   nsContextMenu.prototype.saveImagec   7      ¹                                         Rç  ç  u                ¹W   QV   5    D   æQV   5   æ   æV   ¸   
:  QæÚÐ    onCanvas   onImage   saveMedia    ÿÿÿÿ      .this                   C   nsContextMenu.prototype.saveMediac   £     ¹      f                        )        íç  Yì  {                ¹W  Q  QÇ   V  5      Q   5      Q   ¸   
V  5   :    QV  5      <æV  ¸   
V  5   : ¸   	
       
5   : Q  æV  5      iæ      V  5   V  5   : Q      V  5   @=   BB   @   5      5      : 
Q    æV  5   D   æQV  5   æ   æ      V  5   V  5   : QV  5      æ=      æ=   æW   QV  ¸   
V  5   @V   BV     V  5   =   : QæÈËÎÐÕÉÉ7ãÊ Ê ÉdàÚÑÏ ÊÚà
ÉÜãÎ     ownerDoc/   gContextMenuContentData#   documentURIObject)   PrivateBrowsingUtils!   isBrowserPrivate   browser   onCanvas!   _canvasToBlobURL   target	   then   Cu   reportError   onImage!   urlSecurityCheck   mediaURL   principal   saveImageURL   SaveImageTitle   contentType%   contentDisposition   onVideo   onAudio   SaveVideoTitle   SaveAudioTitle   saveHelper%   frameOuterWindowID       ÿÿÿÿ      dialogTitle   .this                      doc   referrerURI   isPrivate                  G   nsContextMenu.prototype.saveMedia/<c  5       ¹                                         é  Êé                           T  =   =   CB      @@@      : 
Q×ÏÊ     saveImageURL   canvas.png   SaveImageTitle    ÿÿÿÿ      blobURL                ÿÿÿÿ          C   nsContextMenu.prototype.sendImagec   7      ¹                                         ì  àì                  ¹W   QV   5    D   æQV   5   æ   æV   ¸   
:  QæÚÐ    onCanvas   onImage   sendMedia    ÿÿÿÿ      .this                   C   nsContextMenu.prototype.sendMediac   %      ¹                                         øì  4í                  ¹W   Q    ¸   
V   5   =   : QÞ    MailIntegration   sendMessage   mediaURL       ÿÿÿÿ      .this                   C   nsContextMenu.prototype.castVideoc   %      ¹                                         Lí  í                  ¹W   Q    ¸   
V   5      : QÞ    CastingApps   openExternal   target   window    ÿÿÿÿ      .this                   [   nsContextMenu.prototype.populateCastVideoMenuc  l      ¹                               
       «í  zï  £                ¹W   Q  QÇ   V   5       Q  @6   Q  5      Q   ¸   
   :   QV  ¸   
    : QÈËÏÌÐÑÈÖ °    target   innerHTML   ownerDocument   CastingApps'   getServicesForVideo   forEach    ÿÿÿÿ      popup   .this                   videoEl   doc   services                  _   nsContextMenu.prototype.populateCastVideoMenu/<e  r       ¹                                      eî  tï  ¨                   Q    ¸    
=   :    QV   ¸   
=      5   : QV   ¸   
=       : Q  ¸   
V   : QÉ
ÖÈÞÚÕ    createElement   menuitem   setAttribute   label   friendlyName!   addEventListener   command   appendChild    ÿÿÿÿ      service                 	   item                   c   nsContextMenu.prototype.populateCastVideoMenu/</<e          ¹                                         ï  Mï  «                     ¸   
       : Qß    CastingApps%   sendVideoToService    ÿÿÿÿ      event              k   ÿÿÿÿ      Z   ÿÿÿÿ          E   nsContextMenu.prototype.playPluginc   .      ¹                                         ï  åï  ²                ¹W   Q    ¸   
V   5   V   5   =   : Qç    gPluginHandler%   contextMenuCommand   browser   target	   play    ÿÿÿÿ      .this                   E   nsContextMenu.prototype.hidePluginc   .      ¹                                         þï  Pð  ¶                ¹W   Q    ¸   
V   5   V   5   =   : Qç    gPluginHandler%   contextMenuCommand   browser   target	   hide    ÿÿÿÿ      .this                   C   nsContextMenu.prototype.copyEmailc        ¹      _                                 ð  Xô  »         
       ¹W  QV  5    W   QV   ¸   
=   : W  QV  ×   æV   ¸   
×V  :    æV   ¸   
×: æW  Q  Q   5   ¸   
   5   	:   QV  ¸   

   5   V  : W  QÉ   æ  Qv  QÉ    æ   5   ¸   
   5   : W  QV  ¸   
V  : QÎÐÈ×ÖÉLÑÊ ÉÈÕ ËÑÔÑÊ ÒÈÓ    linkURL   indexOf   ?   substring   substr   CcA   @mozilla.org/intl/texttosuburi;1   getService   Ci   nsITextToSubURI!   unEscapeURIForUI/   gContextMenuContentData   charSetK   @mozilla.org/widget/clipboardhelper;1%   nsIClipboardHelper   copyString    ÿÿÿÿ      url   qmark   addresses   clipboard   .this                      textToSubURI                       ex              d   P      p   E   ÿÿÿÿ   Ã      ÿÿÿÿ          A   nsContextMenu.prototype.copyLinkc   f      ¹   	                                    oô  õ  ×                ¹W  Q  QV  5    ¸   
     =   :   Q   5   ¸   
   5   : W   QV   ¸   
V  : QÉÚ
ÈÑÊ ÚÈÔ    linkURL   replace      CcK   @mozilla.org/widget/clipboardhelper;1   getService   Ci%   nsIClipboardHelper   copyString    ÿÿÿÿ      clipboard   .this                      linkURL                ^view-source:          Y   ÿÿÿÿ          A   nsContextMenu.prototype.showItemc  O       ¹                                         +ö  Ôö  ä                T  5          æ   ¸   
T  :    	æT  æW   QV      æV   T  6   QæÎÏÒË    constructor   String   document   getElementById   hidden    ÿÿÿÿ      aItemOrId   aShow	   item                 G   nsContextMenu.prototype.setItemAttrc  [       ¹                                         ÷  Âø  î                    ¸   
T  : W   QV      >æT @   æV   ¸   
T : Q   æV   ¸   
T T : QæÏÈØÖ    document   getElementById   removeAttribute   setAttribute    ÿÿÿÿ      aID   aAttr	   aVal	   elem                 W   nsContextMenu.prototype.setItemAttrFromNodec  ~      ¹                                	        Nù  @ú  þ                ¹W  Q    ¸   
T : W   QV   E   æQV   ¸   
T : =   æ   %æV  ¸   
T  T =   : Q   æV  ¸   
T  T @: QæÏÈÙÊ à×    document   getElementById   getAttribute	   true   setItemAttr    ÿÿÿÿ      aItem_id   aAttr   aOther_id	   elem   .this                 C   nsContextMenu.prototype.cloneNodec         ¹   	   J                                   ú  %ü                      ¸   
T  5   : W   QT  5   W  Q>W  Q    MmV  ¸   
V  : W  QV   ¸   
V  5   V  5   : QæV  #?W  QQãV  V  Ù   ÿÿÿ¨æV   ÔÈÍ	&M>] 
ÏÈâ &Î  Ö     document   createElement   tagName   attributes	   item   setAttribute   nodeName   nodeValue   length    ÿÿÿÿ      aItem	   node   attrs   i	   attr           5   ]             E   nsContextMenu.prototype.getLinkURLc   º      ¹   	   <                                  uü  #þ                  ¹W  QV  5    5   W   QV      æV   æV  5    ¸   
=   : D   $æQV  5    ¸   
=   =   : æW   QV    D   æQV   ¸   
     :  æ   æ=   pæ      V  5    5   V   : Ó & ÕÊÚÉÌ	ÐÜ 	   link	   href   getAttribute   getAttributeNS9   http://www.w3.org/1999/xlink   match   Empty href   makeURLAbsolute   baseURI    ÿÿÿÿ   	   href   .this                \S              E   nsContextMenu.prototype.getLinkURIc   =      ¹      !                                 <þ  ¿þ  (                ¹W   Q        V   5   :    æ  Qv  QÉ    æ@Ó 1É ,Ô    makeURI   linkURL    ÿÿÿÿ      .this                      ex                       ,      ÿÿÿÿ          O   nsContextMenu.prototype.getLinkProtocolc   (      ¹                                         Ýþ  Eÿ  3                ¹W   QV   5       æV   5    5   æ@ÉÎ 7    linkURI   scheme    ÿÿÿÿ      .this                   G   nsContextMenu.prototype.getLinkTextc   å      ¹      A                                  vÿ  º  ;                ¹W  Q        V  5   : W   QV    D   æQV   ¸   
     :  æ   æV  5   ¸   
=   : W   QV    D   æQV   ¸   
    :  æ   XæV  5   ¸   
=   : W   QV    D   æQV   ¸   
    :  æ   æV  5   W   QæV   ÓÈÌ	ÐÕÈ
Ì	ÐÕÈÌ	Ð
Ï    gatherTextUnder	   link   match   getAttribute   title   alt   linkURL    ÿÿÿÿ   	   text   .this                \S           \S           \S              A   nsContextMenu.prototype.linkTextc         ¹                                         ì   J                ¹W   QV   5    É    linkTextStr    ÿÿÿÿ      .this                   U   nsContextMenu.prototype.isMediaURLReusablec  /       ¹                                         2  N                 T  ¸    
=   :    æ   ¸   
T  : æCÏÏ R    startsWith   blob:   URL   isValidURL    ÿÿÿÿ   	   aURL                  A   nsContextMenu.prototype.toStringc   m      ¹                                         ´ 3 U                ¹W   Q=    V   5   =   V   5   =   V   5   =   V   5   =   V   5   	=   
V   5   =   ÕÐÐÐÐÐ 3   contextMenu.target     =    target5   
contextMenu.onImage    =    onImage5   
contextMenu.onLink     =    onLink5   
contextMenu.link       = 	   link5   
contextMenu.inFrame    =    inFrame5   
contextMenu.hasBGImage =    hasBGImage   
    ÿÿÿÿ      .this                   Q   nsContextMenu.prototype.isTargetATextBoxc  *       ¹                                         R ä ^                 T      r   æT  ¸   
B: æT     rÉË bÉ !   HTMLInputElement   mozIsTextField'   HTMLTextAreaElement    ÿÿÿÿ   	   node                  W   nsContextMenu.prototype.shouldShowSeparatorc  }       ¹      B                                  Ã  h                    ¸   
T  : W   QV      ^æV   5   W  Qæ   'mV  5       æCæV  5   W  QãV  E   æQV  5   =   æÿÿÿÁæBÏÈ
Ï(D lÊ
 s oÎ lã r    document   getElementById   previousSibling   hidden   localName   menuseparator    ÿÿÿÿ      aSeparatorID   separator   sibling           5   D             O   nsContextMenu.prototype.addDictionariesc   E      ¹      _                                 3 æ u                        =   C: W   Q=   W  Q   ¸   
=      5   : 5   W  Q   æ  Qv  QÉ    æ=   W  Q   	5   
¸   
   5   : 5   W  Q   æ  Qv  QÉ    æV   ¸   
           V  : : ¸   
    V  : W   Q   ¸   
=   : W  QV  ×   æ=      æ=   æW  Q      V   V  : QÐÈÊ)ÑÊ zÕÔÊ)ÑÊ ÕÔÞÿÿÿèÛÑÈÜÖ    formatURLC   browser.dictionaries.download.url   -   gPrefService   getComplexValue+   intl.accept_languages   Ci-   nsIPrefLocalizedString	   data   Cc7   @mozilla.org/xre/app-info;1   getService   nsIXULAppInfo   version   replace   escape   getIntPref7   browser.link.open_newwindow   tab   window   openUILinkIn    ÿÿÿÿ      uri   locale   version   newWindowPref   where                      e                      e                %LOCALE%           %VERSION%         r   -        #   -      Y      ÿÿÿÿ   ¨      ÿÿÿÿ          '   CM_bookmarkThisPageC   5      ¹                                         	 	                ¹W   Q    5   5   ¸   
V   5      5   C: Qî    window   top#   PlacesCommandHook   bookmarkPage   browser   PlacesUtils+   bookmarksMenuFolderId   ÿÿÿÿ   '   CM_bookmarkThisPage                        .this                      CM_bookmarkLinkC   =      ¹                                	         ²	 Z
                ¹W   Q    5   5   ¸   
   5   V   5   V   5   : QàÒ     window   top#   PlacesCommandHook   bookmarkLink   PlacesUtils+   bookmarksMenuFolderId   linkURL   linkTextStr   ÿÿÿÿ      CM_bookmarkLink                        .this                   -   CM_addBookmarkForFrameC         ¹   	   &                                
 |                ¹W   QÇ       5      QV   5   5      Q       Q   ¸   
=      : Q   ¸   
=   @[   V   5   ]   : QÈÐÔÌ ¤Ú×9ÎÿÿÿÇ /   gContextMenuContentData#   documentURIObject   browser   messageManager%   addMessageListenerA   ContextMenu:BookmarkFrame:Result!   sendAsyncMessage3   ContextMenu:BookmarkFrame   target   ÿÿÿÿ   -   CM_addBookmarkForFrame                        .this                     uri   mm   onMessage                  A   CM_addBookmarkForFrame/onMessagee         ¹      +                                    ×                        ¸    
=         : Q   5   5   ¸   
   5         5   T  5   	5   
T  5   	5   : ¸   
   5   5   : QäàÏÍÍ ÊÏ  £ +   removeMessageListenerA   ContextMenu:BookmarkFrame:Result   window   top#   PlacesCommandHook   bookmarkLink   PlacesUtils+   bookmarksMenuFolderId	   spec	   data   title   description   catch   Components   utils   reportError    ÿÿÿÿ      message                        target             t   ÿÿÿÿ             CM_shareLinkC   9      ¹                                        ¡ ó ©               ¹W   Q    ¸   
@[    V   5   5   ]   V   5   : QÒÜÿÿÿâ    SocialShare   sharePage   linkURI	   spec   url   target   ÿÿÿÿ      CM_shareLink                        .this                         url                    CM_shareImageC   L      ¹                                          ­               ¹W   Q    ¸   
@[    V   5   ]   Z   V   5   `    ]   V   5   : QÒÎÜÿÿÿÂ    SocialShare   sharePage   imageURL   url   mediaURL   previews   target   ÿÿÿÿ      CM_shareImage                        .this                         url         previews                    CM_shareVideoC   B      ¹                                        ¬  ±               ¹W   Q    ¸   
@[    V   5   ]   V   5   ]   V   5   : QÒÎ×ÿÿÿÎ    SocialShare   sharePage   mediaURL   url   source   target   ÿÿÿÿ      CM_shareVideo                        .this                         url         source                    CM_shareSelectC   L      ¹   	                                     : ° µ               ¹W   Q    ¸   
@[    V   5   5   5   ]   V   5   ]   V   5   : QÒØ#×ÿÿÿ¿    SocialShare   sharePage   browser   currentURI	   spec   url   textSelected	   text   target   ÿÿÿÿ      CM_shareSelect                        .this                         url      	   text                    CM_savePageAsC         ¹                                         × þ ¹               ¹W   Q        V   5   : Q×    saveBrowser   browser   ÿÿÿÿ      CM_savePageAs                        .this                      CM_printFrameC   )      ¹                                         % p ½               ¹W   Q    ¸   
V   5   V   5   : Qâ    PrintUtils   printWindow%   frameOuterWindowID   browser   ÿÿÿÿ      CM_printFrame                        .this                   -   CM_switchPageDirectionC   %      ¹                                         © þ Á               ¹W   QV   5    5   ¸   
=   : QÞ    browser   messageManager!   sendAsyncMessage/   SwitchDocumentDirection   ÿÿÿÿ   -   CM_switchPageDirection                        .this                      CM_mediaCommandC  ]      ¹                                       *  Å               ¹W   Q  QV   5    5     QV  ¸   
=   [    T  ]   T ]   [   V   5   ]   : QÉÓÐÈÈÎ Ç    browser   messageManager!   sendAsyncMessage1   ContextMenu:MediaCommand   command	   data   target   element   ÿÿÿÿ      CM_mediaCommand                        command	   data   .this                   mm                         command      	   data                       element             P   ÿÿÿÿ          S   nsContextMenu.prototype.copyMediaLocationc   B      ¹                                	         ( Ñ Ì                ¹W  Q    5   ¸   
   5   : W   QV   ¸   
V  5   : QÑÊ ÍÈØ    CcK   @mozilla.org/widget/clipboardhelper;1   getService   Ci%   nsIClipboardHelper   copyString   mediaURL    ÿÿÿÿ      clipboard   .this                   I   nsContextMenu.prototype.drmLearnMorec  v       ¹   	   !                                  ì i Ò                     Q    5   ¸   
=   : =      Q      T  :   QV  =      æ=   W  Qæ      V   V  : QÉÊÖÎÍÈÊË×    Services   urlFormatter   formatURLPref'   app.support.baseURL   drm-content   whereToOpenLink   current   tab   openUILinkIn    ÿÿÿÿ      aEvent                     drmInfoURL	   dest             
   k   ÿÿÿÿ             get imageURL  '      ¹                                         z Ã Ý                ¹W   QV   5       æV   5   æ=   ÉÉ à    onImage   mediaURL       ÿÿÿÿ      .this                   _   nsContextMenu.prototype.formatSearchContextItemc   f     ¹      a                                  9 ÿ ä                ¹W  Q    Q    ¸   
=   : W   QV  5      æV  5      æV  5   æ  QV   V  6   QV  Ù   ×   ~æ    Q×  QV  ×7¸   
>:   QV  XÜ E   æQV  Xßÿæ   æV  #?W  QQæV  ¸   	
>V  : V  5   
W  QÉæ   5   5   5     Q   ¸   
=   Z   V  `    V  `   : W  QV   V  6   QV      ¸   
=   : 6   QÉÊÑÈÉäÎ îÌÊ

ÏÈØÏÐÔÙÑ9É9É øÈÎÕÊ    document   getElementById)   context-searchselect   isTextSelected   textSelected   linkTextStr   searchTerms   length   charCodeAt   substr   ellipsis   Services   search   currentEngine	   name!   gNavigatorBundle%   getFormattedString#   contextMenuSearch   label   accessKey   getString7   contextMenuSearch.accesskey    ÿÿÿÿ      menuItem   menuLabel   .this                      selectedText   engineName                     truncLength   truncChar               U  ÿÿÿÿ      n                 ]   nsContextMenu.prototype._getTelemetryClickInfoc  k      ¹                                     $ ¹ ÿ                 ¹   QÇ         6    Q      Q  5   ¸   
=      C: Q  ¸   
=     5    C: QÈÑ Ì àá    _onPopupHiding   ownerDocument!   addEventListener   command   popuphiding    ÿÿÿÿ      aXulMenu   .this                 #   activationHandler                       nsContextMenu.prototype._getTelemetryClickInfo/this._onPopupHidinge   Ï       ¹      )                                   K C                       Q  5    ¸   
=         C: Q  ¸   
=     5   C: Q  %   QZ     5   `      5      æ=      æ=   æ`      Q  5   	D   æQ=   
æ  Q   ¸   
V   V  : QÉÊåàË

Ï
Êá
ÜÙ    ownerDocument'   removeEventListener   command   popuphiding   _onPopupHiding+   _telemetryPageContext1   _telemetryHadCustomItems   withcustom   withoutcustom#   _telemetryClickID3   close-without-interaction%   BrowserUITelemetry=   registerContextMenuInteraction    ÿÿÿÿ                           eventKey   target             
   Ä   ÿÿÿÿ            nsContextMenu.prototype._getTelemetryClickInfo/activationHandlere  ¯       ¹      8                                  a                   T  5       æT  5    U  Qæ  ¸   
T  5   :     ææT  5   ¸   
   5   :    æ  =   6   Q   ?æ  T  5   5   D   æQ=   	æ¸   

     =   : 6   QæÈÍ
Ô  Ù
ÖðÊ    sourceEvent   contains   target   hasAttribute   PageMenuParent)   GENERATEDITEMID_ATTR#   _telemetryClickID!   custom-page-item   id   unknown   replace       ÿÿÿÿ      e               ^context-         ^   ÿÿÿÿ          i   nsContextMenu.prototype._getTelemetryPageContextInfoc   Ö      ¹   	   A                               ä d! #                ¹W   Q  QZ      Q  Qf    -Á
     Om  Q5      QV   V  7   .æV  ¸   
V  ¸   
       : : QæãQ¸   
:   5   ÿÿÿ æ ÉV  Ù       æV  ¸   
=   : Qæ   ¸   
V  : ÉÉÊÔ8eÒ	Éáÿÿÿø %ËÿÿÿòÕ +ÊÕÐ    value	   push   replace	   next	   done   length   other	   JSON   stringify    ÿÿÿÿ      .this                      rv                     k                     #   isContentSelected      onLink      onImage      onCanvas      onVideo      onAudio      onTextInput      onSocial          ^(?:is|on)(.)             m   nsContextMenu.prototype._getTelemetryPageContextInfo/<u         ¹                                         Ê  û  (                 T ¸    
:  CÍ    toLowerCase    ÿÿÿÿ      match   firstLetter           )   e         É   ÿÿÿÿ      }           Ó                    ]   nsContextMenu.prototype._checkTelemetryForMenuc  O      ¹                                        ! c" 2                ¹W   QV   @6    QV   V   ¸   
:  6   QV   V   5   6   QV   ¸   
T  : QËÏÉÓÒ #   _telemetryClickID+   _telemetryPageContext9   _getTelemetryPageContextInfo1   _telemetryHadCustomItems   hasPageMenu-   _getTelemetryClickInfo    ÿÿÿÿ      aXulMenu   .this                 W   nsContextMenu.prototype.createContainerMenuc  :      ¹                                        " )# 9                ¹W  QV  5    5   5   5   W   Q      T  BV   : ÝÒ    browser!   contentPrincipal!   originAttributes   userContextId+   createUserContextMenu    ÿÿÿÿ      aEvent   userContextId   .this       