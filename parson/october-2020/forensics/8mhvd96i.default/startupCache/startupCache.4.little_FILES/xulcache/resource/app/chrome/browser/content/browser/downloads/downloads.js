   e   ¹   ÔÂ   20170118123726¶  <   ¹      í      d                  A       `     chrome://browser/content/downloads/downloads.js     /Ó                                                   	   
   5=         : Q5   Ö    
    Q5   Ö   
   Q5   Ö   
   Q5   Ö   
   QQ   ¸   
=   :    ¸   
º=   =   :    ¸   
º=   =   :    ¸   
º=   =   :    ¸   
º=   =   :    ¸   
º=   =   :    ¸   
º=    =   !: Y   >]   "    a   #   a   $   a   %   a   &   a   '   a   (   ]   )   ]   *   a   +   	]   ,   
]   -   a   .   a   /   b   /   ]   0   ]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?¡   Q   ¸   @
º=      : [   !Z    ]   AB]   B[   ]   C   ]   D    ]   E¡   Q   ¸   @
º=      : Y   ×]   FB]   GZ    ]   H   IA,  R  ]   J   "]   K   #a   L   $a   M   %]   N   &]   O   ']   P   (]   Q   )]   R   *]   S   IA,  R  ]   T   +]   U   ,]   V   -]   W   .]   X   /]   Y   0]   Z   1]   [   2]   \   3]   ]   4]   ^¡   Q   ¸   @
º=      :    _Y      5   a5   `Â@]   b   6]   c   7]   d   8]   e   9]   f   :]   g   ;]   h   <]   i   =]   j   >]   k   ?]   l   @]   m   A]   n   B]   o   C]   p0   `[   L   D]   )   E]   *   F]   q   G]   e   H]   f   I]   r   J]   s   K]   t¡   Q   ¸   @
º=      : Y      Mb   u   Na   uB]   v   Ob   w   Pb   x   Qb   y   Rb   z   S]   {   T]   |   U]   }   Va   ~   Wa      Xa      Ya   ¡   Q   ¸   @
º=      : Y      Z]   {B]      [b      \a   ¡   	Q   ¸   @
º=   	   	: Y      ]a      ^a      _a      ]      `]      a]   0   b]      c]   ¡   
Q   ¸   @
º=   
   
: ü 8	>@ÿÜBÕDÒDFÒFHÒHJÒJLÒLNÒNW_bÊfÊjÊoÊsÊzÊ  Ê  «Ê  ÊÊ  ÛÊ  üÊ Ê Ê "Ê 1Ê CÊ QÊ XÊ ]Ê rÊ Ê Ê  Ê ©Ê ¸Ê ÆÊ ÌÊ üÊ -Ê CÐ rÛ { Ê  Ê Ê ³Ð ÂÛ Ì Ó Ø àÊ çÊÈ ìÊ Ê Ê Ê Ê 9Ê WÊ ^Ê lÊ ÊÈÊ Ê ¢Ê ¼Ê ÄÊ ØÊ íÊ óÊ Ê Ð )Û 8 CÊÐ IÊÊÊ vÊ Ê Ê Ê Ê Ê Ê «Ê °ÊÊ ºÐ ÊÊÊ ÙÊ ùÊ Ê Ê Ê (Ð -Û 6 ?Ê PÊ \Ê mÊ {Ê Ê Ê ¢Ê ¯Ê ¶Ê ÂÊ ÏÊ ÜÐ æÛ ï öÊ þ Ê Ð !Û *Ê 5Ê HÊ RÊ ^Ê {Ê Ê Ð Ò 3    Cc   Ci   Cu   Cr   DownloadsPanel-   DownloadsOverlayLoader   DownloadsView/   DownloadsViewController!   DownloadsSummary   DownloadsFooter/   DownloadsBlockedSubview   use strict   Components-   RequireObjectCoercible   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   DownloadsCommonO   resource:///modules/DownloadsCommon.jsm   DownloadsViewUIO   resource:///modules/DownloadsViewUI.jsm   FileUtilsI   resource://gre/modules/FileUtils.jsm   NetUtilE   resource://gre/modules/NetUtil.jsm   PlacesUtilsM   resource://gre/modules/PlacesUtils.jsm   ServicesG   resource://gre/modules/Services.jsm   _state'   kStateUninitialized   kStateHidden#   kStateWaitingData'   kStateWaitingAnchor   kStateShown#   kDownloadsOverlay   initialize   terminate   panel   showPanel   hidePanel   isPanelShowing   keyFocusing   handleEvent   setHeightToFit'   onViewLoadCompleted   onWindowUnload   onPopupShown   onPopupHidden)   onFooterPopupShowing'   onFooterPopupHidden)   showDownloadsHistory'   openDownloadsFolder+   _attachEventListeners/   _unattachEventListeners   _onKeyPress   _onKeyDown   _focusPanel+   _openPopupIfDataReady   defineConstant   _loadRequests   _overlayLoading   _loadedOverlays'   ensureOverlayLoaded-   processPendingRequests   kItemCountLimit   loading   _downloads   Map#   _visibleViewItems#   _itemCountChanged   richListBox!   downloadsHistory%   onDataLoadStarting'   onDataLoadCompleted   onDownloadAdded-   onDownloadStateChanged#   onDownloadChanged#   onDownloadRemoved#   _itemsForElements   itemForElement   _addViewItem   _removeViewItem#   onDownloadCommand   onDownloadClick%   onDownloadKeyPress'   onDownloadMouseOver%   onDownloadMouseOut+   onDownloadContextMenu'   onDownloadDragStart#   DownloadsViewItem   prototype)   DownloadElementShell   _element   onStateChanged   onChanged!   isCommandEnabled   doCommand   cmd_delete)   downloadsCmd_unblock5   downloadsCmd_chooseUnblock7   downloadsCmd_unblockAndOpen#   downloadsCmd_open#   downloadsCmd_show9   downloadsCmd_showBlockedInfo3   downloadsCmd_openReferrer3   downloadsCmd_copyLocation-   downloadsCmd_doDefault   supportsCommand   onEvent   updateCommands-   downloadsCmd_clearList   active   _active   showingProgress   percentComplete   description   details   focus   onKeyDown   onClick   _summaryNode   _progressNode!   _descriptionNode   _detailsNode   _showingSummary   showingSummary   _footerNode   subview   elements	   view   undefined   element   toggle	   hide   confirmBlock   ÿÿÿÿ   #   DownloadsViewItem   Cc   Ci   Cu   Cr   DownloadsPanel-   DownloadsOverlayLoader   DownloadsView/   DownloadsViewController!   DownloadsSummary   DownloadsFooter/   DownloadsBlockedSubview                /   get kStateUninitialized         ¹                                                b                  >     ÿÿÿÿ                        !   get kStateHidden         ¹                                            õ    f                  ?     ÿÿÿÿ                        +   get kStateWaitingData         ¹                                            Z  p  j                  ×     ÿÿÿÿ                        /   get kStateWaitingAnchor         ¹                                            è  þ  o                  ×     ÿÿÿÿ                           get kStateShown         ¹                                            -  C  s                  ×     ÿÿÿÿ                        +   get kDownloadsOverlay         ¹                                             Û  z                  =     o   chrome://browser/content/downloads/downloadsOverlay.xul    ÿÿÿÿ                           initialize@ á      ¹      I                                æ  Â                   ¹W   Q    ¸   
=   : QV   5   V   5      ;æ    ¸   
=   : Q   ¸   
V   5      : QæV   V   5   	0   Q   
¸   
=   V   5   B: Q    ¸   
:  Q    ¸   
=   : Q   ¸   
V   5       : QÕÓÕÕ    ¤  ÓßÐÕß  ¤    DownloadsCommon   logk   Attempting to initialize DownloadsPanel for a window.   _state'   kStateUninitializedM   DownloadsPanel is already initialized.-   DownloadsOverlayLoader'   ensureOverlayLoaded#   kDownloadsOverlay   kStateHidden   window!   addEventListener   unload   onWindowUnload-   initializeAllDataLinksO   Ensuring DownloadsPanel overlay loaded.    ÿÿÿÿ      aCallback   .this                   initialize/<e   Á       ¹      6                          !            ¼                        ¸   
:  Q   ¸   
=   : Q   ¸   
   : ¸   
   : Q   ¸   	
      5   
: ¸   
   : Q   ¸   
=   =   : Q   ¸   
:  Q   ¸   
=   : Q   :  QÐÕäå  Ñ  ÐÕÊ /   DownloadsViewController   initialize   DownloadsCommon   log5   Attaching DownloadsView...   getData   window   addView   DownloadsView   getSummary   kItemCountLimit!   DownloadsSummarye   DownloadsView attached - the panel for this windowM   should now see download items come in.   DownloadsPanel+   _attachEventListeners7   DownloadsPanel initialized.    ÿÿÿÿ                           terminate@        ¹      O                          (           ´  «                 ¹W   Q    ¸   
=   : QV   5   V   5      æ    ¸   
=   : Qæ   ¸   
=   V   5   	B: QV   ¸   

:  Q   ¸   
:  Q    ¸   
   : ¸   
   : Q    ¸   
      5   : ¸   
   : QV   ¸   
:  QV   V   5   0   Q   B0   Q    ¸   
=   : QÕÓÕ  Á  ²ßÏÐäå  ¹ÏÓÌÕ    DownloadsCommon   logi   Attempting to terminate DownloadsPanel for a window.   _state'   kStateUninitializedi   DownloadsPanel was never initialized. Nothing to do.   window'   removeEventListener   unload   onWindowUnload   hidePanel/   DownloadsViewController   terminate   getData   removeView   DownloadsView   getSummary   kItemCountLimit!   DownloadsSummary/   _unattachEventListeners   active5   DownloadsPanel terminated.    ÿÿÿÿ      .this                      get panel  Q      ¹      &                                     Ç  Ê                 ¹W   Q  Q    ¸   
=   :   QV      
æ@ÉæV   .   QV   V  0   ÉÉÑÈ  ÑÊÍ    document   getElementById   downloadsPanel   panel    ÿÿÿÿ      .this                      downloadsPanel               D   ÿÿÿÿ    3              N                       showPanel@        ¹   
   2                                 â   Í$  Û                  ¹   Q    ¸   
=   : Q   5      -æ    ¸   
=   : Q   ¸   
:  Qæ   ¸   
    : Q    ¸   
=   : Q      5   	0   QÕÊÕÐ  ö  äÖ  ôÕÕ    DownloadsCommon   log9   Opening the downloads panel.   isPanelShowingY   Panel is already showing - focusing instead.   _focusPanel   initializeU   Waiting for the downloads panel to appear.   _state#   kStateWaitingData    ÿÿÿÿ      .this                      showPanel/<e          ¹   
   !                                 Î!  U$  ä                    Q    ¸   
=   :    Q   5      $æV   5   ¸   
=   : Q   æV   5   ¸   
=   : Qæ   	   	    >: QÉ
ÑÈÊßÚ  ñÖ    document   getElementById-   downloadsFooterButtons   DownloadsCommon'   showPanelDropmarker   classList   remove/   downloadsHideDropmarker   add   setTimeout    ÿÿÿÿ                        -   downloadsFooterButtons                      showPanel/</<u          ¹                                          ($  J$  ñ                     ¸    
:  Ï +   _openPopupIfDataReady    ÿÿÿÿ                    x   ÿÿÿÿ             hidePanel@        ¹   
   0                                   l%  '  ü                 ¹W   Q    ¸   
=   : QV   5       æ    ¸   
=   : QæV   5   ¸   
:  QV   V   5   0   Q    ¸   
=   	: QÕÊÕ  Ô 	ÓÕ    DownloadsCommon   log9   Closing the downloads panel.   isPanelShowing_   Downloads panel is not showing - nothing to do.   panel   hidePopup   _state   kStateHidden=   Downloads panel is now closed.    ÿÿÿÿ      .this                   %   get isPanelShowing  P      ¹                                         î'  (                  ¹W   QV   5    V   5   D   4æQV   5    V   5   D   æQV   5    V   5   æÚÚÔ    _state#   kStateWaitingData'   kStateWaitingAnchor   kStateShown    ÿÿÿÿ      .this                      get keyFocusing         ¹      
                                   ë(  #)                  ¹W   QV   5    ¸   
=   : Õ    panel   hasAttribute   keyfocus    ÿÿÿÿ      .this                      set keyFocusing        ¹                                        
*   +  "                ¹W   QT     FæV   5    ¸   
=   =   : QV   5    ¸   
=   V   : Q   <æV   5    ¸   
=   : QV   5    ¸   
=   V   : QæT  AÞãÙÞ    panel   setAttribute   keyfocus	   true!   addEventListener   mousemove   removeAttribute'   removeEventListener    ÿÿÿÿ      aValue   .this                    handleEvent@ ©      ¹   
   S                                  +  8-  1                ¹W   QT  5    x=   y   ,æ=   y   2æ=   y   :æ=   y   Bæz   læV   B0   Q   [æV   ¸   
T  : æV   ¸   
T  : æV   5       æV   B0   QV   ¸   	
:  Qæ   æÈh  vËpËpËpÌËXÎ A 8Î A :É
Ë
ÐX 	   type   mousemove   keydown   keypress   popupshown   keyFocusing   _onKeyDown   _onKeyPress)   setHeightToFitOnShow   setHeightToFit    ÿÿÿÿ      aEvent   .this                    setHeightToFit@  G      ¹                                         K-  î-  C                ¹W   QV   5    V   5       æ   5   ¸   
:  Q   æV   C0   QæÓÛÌ    _state   kStateShown/   DownloadsBlockedSubview	   view   setHeightToFit)   setHeightToFitOnShow    ÿÿÿÿ      .this                   '   onViewLoadCompleted@        ¹                                         º.  ä.  Q                ¹W   QV   ¸    
:  QÏ +   _openPopupIfDataReady    ÿÿÿÿ      .this                      onWindowUnload@         ¹      	                                    o/  å/  X                     ¸   
:  QÐ    DownloadsPanel   terminate    ÿÿÿÿ                           onPopupShown@ ¶      ¹      5                                  ö/  t2  ]                ¹W   QT  5    T  5      ææ   ¸   
=   : QV   V   5   0   Q   ¸   
   : C0   	Q   
5   5   >E   æQ   
5   5   ×ÿæ   æ   
5   >0   QæV   ¸   
:  QÑ p cÕÓÛØÓÒÏ    target   currentTarget   DownloadsCommon   log5   Downloads panel has shown.   _state   kStateShown!   getIndicatorData   window'   attentionSuppressed   DownloadsView   richListBox   itemCount   selectedIndex   _focusPanel    ÿÿÿÿ      aEvent   .this                    onPopupHidden@       ¹      3                                  2  í4  r                ¹W   QT  5    T  5      ææ   ¸   
=   : QV   B0   Q   ¸   
   : B0   Q   	¸   

:  QV   V   5   0   QÑ  xÕËÛÐÓ    target   currentTarget   DownloadsCommon   log7   Downloads panel has hidden.   keyFocusing!   getIndicatorData   window'   attentionSuppressed   DownloadsButton   releaseAnchor   _state   kStateHidden    ÿÿÿÿ      aEvent   .this                 )   onFooterPopupShowing@ ©       ¹      .                                  5  ¦6                     Q    ¸   
=   :    Q   ¸   
   : 5      æV   ¸   
=   : Q   æV   ¸   	
=   =   
: Qæ   ¸   
:  Q    ¸   
=   : ¸   	
=   C: QÉÑÈÑÈÚÚÐÛ     document   getElementById=   downloadsDropdownItemClearList   DownloadsCommon   getData   window#   canRemoveFinished   removeAttribute   hidden   setAttribute	   true/   DownloadsViewController   updateCommands   downloadsFooter   showingdropdown    ÿÿÿÿ      aEvent                     itemClearList                ¢   ÿÿÿÿ          '   onFooterPopupHidden@ %       ¹                                         ¾6  &7                       ¸   
=   : ¸   
=   : QÛ     document   getElementById   downloadsFooter   removeAttribute   showingdropdown    ÿÿÿÿ      aEvent                  )   showDownloadsHistory@  9      ¹                                          8  9                   ¹W   Q    ¸   
=   : QV   ¸   
:  Q      :  QÕÏÎ    DownloadsCommon   log3   Showing download history.   hidePanel%   BrowserDownloadsUI    ÿÿÿÿ      .this                   '   openDownloadsFolder@  J      ¹                                       9  å9  ©                ¹W   Q    ¸   
:  ¸   
    : ¸   
   5   : QV   ¸   
:  QæÊ ªÏ    Downloads=   getPreferredDownloadsDirectory	   then   catch   Cu   reportError   hidePanel    ÿÿÿÿ      .this                   +   openDownloadsFolder/<e  &       ¹                                         S9  ³9  ª                     ¸   
   5   AT  ,  R : QÞÿÿÿâ    DownloadsCommon   showDirectory   FileUtils	   File    ÿÿÿÿ      downloadsPath                  +   _attachEventListeners@  a      ¹                                	         5;  ¿<  ¸                ¹W   QV   5    ¸   
=   V   B: QV   5    ¸   
=   V   B: QV   5    ¸   
=   V   B: QÞÞÞ    panel!   addEventListener   keydown   keypress   popupshown    ÿÿÿÿ      .this                   /   _unattachEventListeners@  a      ¹                                	         g=  '>  Æ                ¹W   QV   5    ¸   
=   V   B: QV   5    ¸   
=   V   B: QV   5    ¸   
=   V   B: QÞÞÞ    panel'   removeEventListener   keydown   keypress   popupshown    ÿÿÿÿ      .this                      _onKeyPress@ º     ¹      q                         .        7>  vD  Ì                ¹W   Q  QT  5    D   -æQT  5   D   æQT  5   D   æQT  5   æ   
æÉæ   5     QT  5      5   5   	D   >æQT  5      5   5   
D   æQT  5      5   5   æE   æQV   5    æ   MæV   C0   Q   5   5   ×ÿ   æ   5   >0   QæT  ¸   
:  QÉæT  5      5   5      cæV  5   V  5   HD   !æQ   5   5   5   =   Hæ   (æ   ¸   
:  QT  ¸   
:  QÉæ   5   V  H   æ   ¸   
T  : QæÉü õ ÒÏ ØßßàËËÒÒÎ õ æØÚÛÐÎ õ òÏÕ    altKey   ctrlKey   shiftKey   metaKey   DownloadsView   richListBox   keyCode   Ci   nsIDOMKeyEvent   DOM_VK_TAB   DOM_VK_UP   DOM_VK_DOWN   keyFocusing   selectedIndex   preventDefault   selectedItem   lastChild   document   activeElement   parentNode   id   downloadsFooter   DownloadsFooter   focus%   onDownloadKeyPress    ÿÿÿÿ      aEvent   .this                    richListBox               ­  ÿÿÿÿ    K                                                 _onKeyDown@ Ñ      ¹   /   Â                       O         YE  nK  ü                       QT  5       5   5   E   7æQ   5   5   5   =   HE   æQ   	5   
5   æ   Læ   	5   
¸   
:  Q   	5   
   	5   
5   0   QT  ¸   
:  QÉæT  5       5   5   E   æQT  ¸   
=   : æ   QV       
æÉæ   ¸   
=   : Q   5   ¸   
   5   :   QV  ¸   
@: Qf      QV  ¸   
V  5   : Q   5   ¸   
V     5   5    : Q        Q[     QV  ¸   !
[   V  [   : QV  5   "¸   #
   5   $: 5   %¸   &
=   ': -Á
  ¸   (
:   5   )   æQå   æ5   "æ  Q¸   (
:   5   )   æQå   æ5   "æ  QQQV      æÉÉæ   *¸   +
V  :   Q   ¸   
=   ,: Q   -   -V  5   .V     : QÉ   æ  Qv  QÉ    æÉíáÐÕßÎ ' ßÏÉ ' ÕÑÊ ÈÐÊØè /Ò
ÊÝ
ÐÊ Ï ÔÿÿÿòË	í	Ü
 ' #
ÐÈÕéÕ    keyCode   Ci   nsIDOMKeyEvent   DOM_VK_UP   document   activeElement   parentNode   id   downloadsFooter   DownloadsView   richListBox   firstChild   focus   selectedItem   lastChild   preventDefault   DOM_VK_V!   getModifierState   Accel   DownloadsCommon   log/   Received a paste event.   CcE   @mozilla.org/widget/transferable;1   createInstance   nsITransferable	   init   forEach   addDataFlavor   Services   clipboard   getData!   kGlobalClipboard%   getAnyTransferData   value   QueryInterface#   nsISupportsString	   data   split   
	   next	   done   NetUtil   newURIU   Pasted URL seems valid. Starting download.   DownloadURL	   spec    ÿÿÿÿ      aEvent                     pasting   trans   flavors                   	   data   url	   name   uri                     ex                        text/x-moz-url      text/unicode                                                       3        Â  ÿÿÿÿ    ©              ð                        b            c           Á                      _focusPanel@  Å      ¹      F                                 L  ÚM  -                ¹W   Q  QV   5    V   5      
æÉæ   5   5     Qæ   mV  5   W  QãV  E   æQV  V   5   æÿÿÿÕæV      Hæ   5   5   	>    æ   5   ¸   

:  Q   æ   ¸   

:  QæÉÙ > 3Õ(0 4Î 4âÑÛÒ    _state   kStateShown   document#   commandDispatcher   focusedElement   parentNode   panel   DownloadsView   richListBox   itemCount   focus   DownloadsFooter    ÿÿÿÿ      .this                      element             >   0         ¸   ÿÿÿÿ    (                    +   _openPopupIfDataReady@  c      ¹      &                                 CN  U  C                 ¹   Q   5       5   D   æQ   5   æ   ææ      5   0    Q   ¸   
    : Qç o JÕÖ o    _state#   kStateWaitingData   DownloadsView   loading'   kStateWaitingAnchor   DownloadsButton   getAnchor    ÿÿÿÿ      .this                   /   _openPopupIfDataReady/<e  A      ¹      p                        *         üO  U  N         	          5       5      ææ   5      5   5      -æ   ¸   
:  Q      5   	0    QæT      æ   
¸   
=   : Qæ   Q   5   ¸   
:  -Á
     ?m   Q5      QV   5   ¸   
:  ¸   
   5   : QãQ¸   
:   5   ÿÿÿ°æ É   
¸   
=   : Q   5   ¸   
T  =   >>B@: QÕ n YÚÐÕ n _
Õ n h×Ì8UÒÿÿÿðè hËÿÿÿëÕÕá    _state'   kStateWaitingAnchor   window   windowState   Ci%   nsIDOMChromeWindow   STATE_MINIMIZED   DownloadsButton   releaseAnchor   kStateHidden   DownloadsCommon   errorC   Downloads button cannot be found.   DownloadsView#   _visibleViewItems   values   value   download   refresh   catch   Cu   reportError	   next	   done   log=   Opening downloads panel popup.   panel   openPopup+   bottomcenter topright    ÿÿÿÿ      anchor                     viewItem             °   U         |   ÿÿÿÿ                         '   ensureOverlayLoaded@ ©      ¹      J                                7Z  «\                   ¹   Q      5    q   æT :  Qæ   5   ¸   
[       ]   T ]   : Q   5      ææ   C0   Q   ¸   
=      : Q   	¸   

      : QÐÈ ¬ ÖÊÈÿÿÿÓÊ ¬ ¤ÌÚÛ ¬    _loadedOverlays   _loadRequests	   push   overlay   callback   _overlayLoading   DownloadsCommon   log!   Loading overlay    document   loadOverlay    ÿÿÿÿ      aOverlay   aCallback   .this                       overlay         callback                 +   ensureOverlayLoaded/<e   /       ¹                                          !\  ¥\  ¦                    B0    Q   5      C9Q   ¸   
:  QÌÒÐ    _overlayLoading   _loadedOverlays-   processPendingRequests    ÿÿÿÿ                        -   processPendingRequests@        ¹      C                        	         µ]  ú_  ³                ¹W   Q  QV   5    Ù     Q  Q>  Q    Um  QV   5    ¸   
:    QV   ¸   
V  5   V  5   : QÉæV  #?W  QQãV  V  ÿÿÿ¥æÉÉÓ	&UF` ·
Ð
È ½ã ·'Î ½ ·Ó ¿    _loadRequests   length   shift'   ensureOverlayLoaded   overlay   callback    ÿÿÿÿ      .this                      currentLength                     i                     request             +   `            ÿÿÿÿ   %   n          8   :                      _loadRequests         _overlayLoading         _loadedOverlays      '   ensureOverlayLoaded      -   processPendingRequests                 #   _itemCountChanged@  ç      ¹      8                                  e  ½h  ì                ¹W   Q    Q    ¸   
=   V   5   Ù   =   : QV   5   Ù     QV  V   5     QV  >   ?æ    ¸   
=   : Q   5   	¸   

=   =   : Q   5æ    ¸   
=   : Q   5   	¸   
=   : Qæ   V  >0   QÉÊÑÓ íÓÓ:ÕåÕÛ ýÒ    DownloadsCommon   logm   The downloads item count has changed - we are tracking   _downloads   length'   downloads in total.   kItemCountLimitg   Setting the panel's hasdownloads attribute to true.   DownloadsPanel   panel   setAttribute   hasdownloads	   trueY   Removing the panel's hasdownloads attribute.   removeAttribute!   DownloadsSummary   active    ÿÿÿÿ      .this                      count   hiddenCount               Ö   ÿÿÿÿ             get richListBox  /      ¹                                         i  i                  ¹W   QV   .    QV      ¸   
=   : 0    ÊÕÈ    richListBox   document   getElementById!   downloadsListBox    ÿÿÿÿ      .this                   )   get downloadsHistory  /      ¹                                         ìi  fj                  ¹W   QV   .    QV      ¸   
=    : 0    ÊÕÈ !   downloadsHistory   document   getElementById    ÿÿÿÿ      .this                   %   onDataLoadStarting@  '      ¹                                         Fk  °k                  ¹W   Q    ¸   
=   : QV   C0   QÕË    DownloadsCommon   logY   onDataLoadStarting called for DownloadsView.   loading    ÿÿÿÿ      .this                   '   onDataLoadCompleted@  F      ¹                                         ýk  Øm                  ¹W   Q    ¸   
=   : QV   B0   QV   ¸   
:  Q   ¸   
:  QÕËÏÐ    DownloadsCommon   log[   onDataLoadCompleted called for DownloadsView.   loading#   _itemCountChanged   DownloadsPanel'   onViewLoadCompleted    ÿÿÿÿ      .this                      onDownloadAdded@      ¹      H                                 Ap  ¢t  9                ¹W   Q  Q    ¸   
=   T : QT    "æV   5   ¸   
T  : Q   æV   5   ¸   
T  : QæV   5   Ù   V   5     QT D   æQV   æ   æV   ¸   
T  T : QæT E   æQV  æ   (æV   ¸   	
V   5   V   5   7: QæV   5   
    æV   ¸   
:  QæÉÑ :ÝØÝÊÖÏã RÊÑ    DownloadsCommon   log]   A new download data item was added - aNewest =   _downloads   unshift	   push   length   kItemCountLimit   _addViewItem   _removeViewItem   loading#   _itemCountChanged    ÿÿÿÿ      download   aNewest   .this                 !   itemsNowOverflow               ø   ÿÿÿÿ          -   onDownloadStateChanged@ C      ¹                                       ½t  Au  W                ¹W   Q  QV   5    ¸   
T  :   QV     æV  ¸   
:  QæÉÓÈÑ #   _visibleViewItems   get   onStateChanged    ÿÿÿÿ      download   .this                    viewItem               6   ÿÿÿÿ          #   onDownloadChanged@ C      ¹                                       Wu  Öu  ^                ¹W   Q  QV   5    ¸   
T  :   QV     æV  ¸   
:  QæÉÓÈÑ #   _visibleViewItems   get   onChanged    ÿÿÿÿ      download   .this                    viewItem               6   ÿÿÿÿ          #   onDownloadRemoved@ à      ¹      2                                 Îv  Hy  l                ¹W   Q  Q    ¸   
=   : QV   5   ¸   
T  :   QV   5   ¸   
V  ?: QV  V   5      [æV   ¸   
T  : QV   5   Ù   V   5      +æV   ¸   	
V   5   V   5   ?7B: QæV   ¸   

:  Q   ¸   
:  QÉÕÓÈÙÎÒØæÏÑ    DownloadsCommon   logC   A download data item was removed.   _downloads   indexOf   splice   kItemCountLimit   _removeViewItem   length   _addViewItem#   _itemCountChanged   DownloadsPanel   setHeightToFit    ÿÿÿÿ      download   .this                    itemIndex               Ó   ÿÿÿÿ             itemForElement@       ¹      
                                  ïy  .z                  ¹W   QV   5    ¸   
T  : Ó #   _itemsForElements   get    ÿÿÿÿ      element   .this                    _addViewItem@ æ      ¹      8                                 Èz  à|                  ¹W   Q    Q    ¸   
=   =   T : Q   ¸   
=   :   Q   AT  V  ,  R   QV   5   ¸   	
T  V  : QV   5   
¸   	
V  V  : QT    1æV   5   ¸   
V  V   5   5   : Q   æV   5   ¸   
V  : QæÉÊÑÈ Ñ
ÈÑÈÛÜ,ìÚ    DownloadsCommon   logk   Adding a new DownloadsViewItem to the downloads list.   aNewest =   document   createElement   richlistitem#   DownloadsViewItem#   _visibleViewItems   set#   _itemsForElements   richListBox   insertBefore   firstChild   appendChild    ÿÿÿÿ      download   aNewest   .this                    element   viewItem               Õ   ÿÿÿÿ             _removeViewItem@ á      ¹      2                                 D}  o  ¢         	       ¹W   Q    Q    ¸   
=   : QV   5   ¸   
T  : 5     QV   5   5     QV   5   ¸   
V  : QV  ×ÿ   8æV   5      	¸   

V  V   5   5   ?: 0   QæV   5   ¸   
T  : QV   5   ¸   
V  : QÉÊÕÓ
ÍÓØÙÐ ¨'Ê×Ù    DownloadsCommon   logk   Removing a DownloadsViewItem from the downloads list.#   _visibleViewItems   get   element   richListBox   selectedIndex   removeChild	   Math   min   itemCount   delete#   _itemsForElements    ÿÿÿÿ      download   .this                    element+   previousSelectedIndex               Ð   ÿÿÿÿ          #   onDownloadCommand@ b       ¹      %                                   R  ¼                   QT  5       Qæ   mV   5   W   QãV   5   =   ÿÿÿàæ   ¸   
V   : ¸   
T : QÉÎ(% ¾Î ¾×â    target   parentNode   nodeName   richlistitem   DownloadsView   itemForElement   doCommand    ÿÿÿÿ      aEvent   aCommand                     target                 %         [   ÿÿÿÿ             onDownloadClick@ Ï       ¹      B                                 f  u  Ä                T  5    >E   æQT  5   ¸   
=   :  æ   £æ     QT  5      Qæ   mV   5   W   QãV   5   =   ÿÿÿàæ   ¸   	
V   : 5   
  QV  5      æ      =   : Q   æ      =   : QæÉæÑÔÊ
Î(% ÉÎ É×
ÐÍÉÙÖ    button   originalTarget   hasAttribute   oncommand   target   parentNode   nodeName   richlistitem   DownloadsView   itemForElement   download   hasBlockedData   goDoCommand9   downloadsCmd_showBlockedInfo#   downloadsCmd_open    ÿÿÿÿ      aEvent                     target   download              M   %      :      ÿÿÿÿ          %   onDownloadKeyPress@ ¢       ¹      =                                   É  Ã  Ø                 T  5    ¸   
=   : D   æQT  5    ¸   
=   : æ   ææT  5   =   ¸   
>:    æ      =   : QæT  5   	   
5      æ      =   : QæÔÊÔ è àÕÓ è åÓÔ    originalTarget   hasAttribute   command   oncommand   charCode       charCodeAt   goDoCommand1   downloadsCmd_pauseResume   keyCode   KeyEvent   DOM_VK_RETURN-   downloadsCmd_doDefault    ÿÿÿÿ      aEvent                  '   onDownloadMouseOver@ <      ¹                                          «  í                ¹W   QT  5    5   V   5      æV   5   T  5    0   Qæ×Ø    originalTarget   parentNode   richListBox   selectedItem    ÿÿÿÿ      aEvent   .this                 %   onDownloadMouseOut@       ¹      0                                Â  W  ó                ¹W   QT  5    5   V   5      mæ  QT  5     Qæ   mV  5   W  QãV  E   æQV  T  5    æÿÿÿÖæV      æV   5   ×ÿ0   QæÉæ×
Î(/ øÎ øá
Ô    originalTarget   parentNode   richListBox   relatedTarget   selectedIndex    ÿÿÿÿ      aEvent   .this                    element             6   /      )   a   ÿÿÿÿ          +   onDownloadContextMenu@ ¶      ¹      C                                 q  k           	       ¹W   Q    QV   5    5     QV      
æÉæ   ¸   
:  Q   ¸   
=   :   QV  ¸   
=   V  ¸   	
=   : : QV  5   
¸   
=   V  5   
¸   
=   : : QÉÊÓ  ÐÑÈà"ÿÿÿÞÕÕ!     richListBox   selectedItem/   DownloadsViewController   updateCommands   document   getElementById)   downloadsContextMenu   setAttribute   state   getAttribute   classList   toggle   temporary-block   contains    ÿÿÿÿ      aEvent   .this                    element   contextMenu               ¥   ÿÿÿÿ    1                    '   onDownloadDragStart@ 3     ¹      b                                   `           
       ¹W   Q        QV   5    5     QV      
æÉæ   5   A   ¸   
V  : 5   5   5   ,  R   QV  ¸   	
:      
æÉæT  5   
  QV  ¸   
=   V  >: QV  =   0   Q   ¸   
V  : 5     QV  ¸   
=   V  : QV  ¸   
=   V  : QV  ¸   
V  : QT  ¸   
:  QÉÒÓ & ÛÖÿÿÿíÈË & ÍÙÏÐÍØØÓÏ    richListBox   selectedItem   FileUtils	   File   DownloadsView   itemForElement   download   target	   path   exists   dataTransfer   mozSetDataAt-   application/x-moz-file   effectAllowed   copyMove   NetUtil   newURI	   spec   setData   text/uri-list   text/plain   addElement   stopPropagation    ÿÿÿÿ      aEvent   .this                    element	   file   dataTransfer	   spec                 ÿÿÿÿ    9                                  #   DownloadsViewItem        ¹   	                             
        Ï  ¶  8                ¹W   QV   T  0    QV   T 0   QV   5   V   0   QV   5   ¸   
=   =    : QV   5   5   ¸   
=   : QV   ¸   
:  QÍÍÓÞÞÏ    download   element   _shell   setAttribute	   type   classList   add   download-state   _updateState    ÿÿÿÿ      download   aElement   .this                    onStateChanged@        ¹                                           ­  K                ¹W   QV   ¸    
:  QÏ    _updateState    ÿÿÿÿ      .this                      onChanged@        ¹                                         »  ß  O                ¹W   QV   ¸    
:  QÏ    _updateProgress    ÿÿÿÿ      .this                   !   isCommandEnabled@      ¹      Á                         %        ô  Ø  S                ¹W   QT  x=    y   Mæ=   y   æ=   y  =æ=   y  2æ=   y  'æ=   y  æ=   y  æz  æ  QV   5   5       
æBÉæ   	5   
AV   5   5   5   ,  R   QV  ¸   
:  ÉÉæ    Q   	5   
AV   5   5   5   ,  R   QV  ¸   
:     
æCÉæV   5   5   5       
æBÉæ   	5   
AV   5   5   5   ,  R   QV  ¸   
:  ÉÉæCæV   5   5   æ   5   5   5   ¸   
V   T  l k lvËpËpËpËpËpËpÌÏ
 t ZâÈË t ]ÊâÈË
 t cÔ
 t gâÈË t j t oÎ rÛ r #   downloadsCmd_open#   downloadsCmd_show   cmd_delete'   downloadsCmd_cancel3   downloadsCmd_copyLocation-   downloadsCmd_doDefault9   downloadsCmd_showBlockedInfo   download   succeeded   FileUtils	   File   target	   path   exists   partFilePath   hasBlockedData   DownloadsViewUI)   DownloadElementShell   prototype!   isCommandEnabled	   call    ÿÿÿÿ      aCommand   .this                 	   file                   	   file   partFile            c   V   ÿÿÿÿ    {              ·             Ä      ÿÿÿÿ                $            `                     doCommand@ -      ¹                                        æ  ?  v                ¹W   QV   ¸    
T  :    æV   T  Á
:  QæÎÏ !   isCommandEnabled    ÿÿÿÿ      aCommand   .this                    cmd_delete@  W      ¹   
                                      µ  f                  ¹W   Q    ¸   
V   5   : Q   5   ¸   
   ¸   
V   5   5   5   	: : QÙÑß     DownloadsCommon3   removeAndFinalizeDownload   download   PlacesUtils   bhistory   removePage   NetUtil   newURI   source   url    ÿÿÿÿ      .this                   )   downloadsCmd_unblock@  0      ¹                                           Ó                  ¹W   Q    ¸   
:  QV   ¸   
   =   : QÐÙ    DownloadsPanel   hidePanel   confirmUnblock   window   unblock    ÿÿÿÿ      .this                   5   downloadsCmd_chooseUnblock@  0      ¹                                         ò  L                  ¹W   Q    ¸   
:  QV   ¸   
   =   : QÐÙ    DownloadsPanel   hidePanel   confirmUnblock   window   chooseUnblock    ÿÿÿÿ      .this                   7   downloadsCmd_unblockAndOpen@  :      ¹                                	         l  Í                  ¹W   Q    ¸   
:  QV   ¸   
:  ¸   
   5   : QÐã    DownloadsPanel   hidePanel-   unblockAndOpenDownload   catch   Cu   reportError    ÿÿÿÿ      .this                   #   downloadsCmd_open@  ?      ¹                                
         ã                    ¹W   QV   5    ¸   
:  ¸   
   5   : Q   ¸   
:  Qè Ð    download   launch   catch   Cu   reportError   DownloadsPanel   hidePanel    ÿÿÿÿ      .this                   #   downloadsCmd_show@  \      ¹   	                                     ¯  ¬                  ¹W   Q  Q    5   AV   5   5   5   ,  R   Q   ¸   
V  : Q   ¸   
:  QÉâÈÔ ¨Ñ    FileUtils	   File   download   target	   path   DownloadsCommon%   showDownloadedFile   DownloadsPanel   hidePanel    ÿÿÿÿ      .this                   	   file               O   ÿÿÿÿ          9   downloadsCmd_showBlockedInfo@  n      ¹                                        Í  M  «                ¹W   Q    ¸   
~   V   5   `    ?V   5   -Á
     m5   _ã,  ¸   
:   5   ÿÿÿáæ Q)QÑÏ#Õ8$ò /   DownloadsBlockedSubview   toggle   element3   rawBlockedTitleAndDetails   value	   next	   done    ÿÿÿÿ      .this            :   $             3   downloadsCmd_openReferrer@  (      ¹                                         k    °                ¹W   Q        V   5   5   5   : Qá    openURL   download   source   referrer    ÿÿÿÿ      .this                   3   downloadsCmd_copyLocation@  S      ¹   	                                     ½  q  ´                ¹W   Q  Q    5   ¸   
   5   :   QV  ¸   
V   5   5   5   : QÉÑÊ µÈã    CcK   @mozilla.org/widget/clipboardhelper;1   getService   Ci%   nsIClipboardHelper   copyString   download   source   url    ÿÿÿÿ      .this                      clipboard               F   ÿÿÿÿ          -   downloadsCmd_doDefault@  T      ¹                                          <   º                ¹W   Q  QV   5      QV  E   æQV   ¸   
V  : æ   æV   ¸   
V  : QæÉÎÚÕ 3   currentDefaultCommandName!   isCommandEnabled   doCommand    ÿÿÿÿ      .this                      defaultCommand               G   ÿÿÿÿ             initialize@  !      ¹                                         0¢  l¢  Î                ¹W   Q    5   ¸   
>V   : QÚ    window   controllers%   insertControllerAt    ÿÿÿÿ      .this                      terminate@         ¹                                         z¢  ±¢  Ò                ¹W   Q    5   ¸   
V   : QÙ    window   controllers!   removeController    ÿÿÿÿ      .this                      supportsCommand@ þ      ¹                                     ,£  §  Ù                ¹W   Q  QT  =    H   
æCÉæ   ¸   
T  :     
æBÉæT  V   q E   æQT     5   q æ   
æBÉæ   5   5      .æ  Qf      QV  ¸   
T  : >ÉÉÉæ   	5   
5     Qæ   mV  5   W  QãV  E   æQV     5   æÿÿÿÔæV    ÉÉÏ ÷ ÞÏ ÷ áÐÐ ÷ çÏ
ÊÎ ÷ ðÕ(1 ñÎ ñã ö -   downloadsCmd_clearList   DownloadsViewUI   isCommandName#   DownloadsViewItem   prototype/   DownloadsBlockedSubview	   view   showingSubView   indexOf   document#   commandDispatcher   focusedElement   parentNode   DownloadsView   richListBox    ÿÿÿÿ      aCommand   .this                    element                  %   blockedSubviewCmds                     7   downloadsCmd_unblockAndOpen      cmd_delete       »   1         ñ   ÿÿÿÿ                  <              g                "          £             ¤             û                    !   isCommandEnabled@ w       ¹   
   .                                  ¥§  H©  ù                   QT  =       "æ   ¸   
   : 5   Éæ   5   5      QV   E   'æQ   ¸   
V   : ¸   	
T  : æÉÉÏÑÈ   ÔÛÊ  -   downloadsCmd_clearList   DownloadsCommon   getData   window#   canRemoveFinished   DownloadsView   richListBox   selectedItem   itemForElement!   isCommandEnabled    ÿÿÿÿ      aCommand                     element                p   ÿÿÿÿ    0              t                       doCommand@ o      ¹      &                         
        V©  öª                  ¹W   Q  QT  V   q   æV   T  Á
:  QÉæ    5   5     QV     'æ    ¸   
V  : ¸   
T  : QæÉÎÎ  Ôã    DownloadsView   richListBox   selectedItem   itemForElement   doCommand    ÿÿÿÿ      aCommand   .this                    element               b   ÿÿÿÿ    +                       onEvent@         ¹                                            «  «                         ÿÿÿÿ                           updateCommands@  1      ¹                                       «  ¤¬                  ¹W  Q    W   QV   V  : QV       5   : QÊ  !ÍÓ #   DownloadsViewItem   prototype    ÿÿÿÿ   /   updateCommandsForObject   .this                   /   updateCommandsForObject  W       ¹                                       ¬«  C¬                     QT  K   <m   Q       ¸   
V   :    æ      V   : QæãQLMÿÿÿÄæQNÉÌ0AÌÐ
á    DownloadsViewUI   isCommandName   goUpdateCommand    ÿÿÿÿ      object                  	   name                C         P   ÿÿÿÿ          -   downloadsCmd_clearList@          ¹                                          7­  u­  (                     ¸   
   : ¸   
:  Qß    DownloadsCommon   getData   window   removeFinished    ÿÿÿÿ                              initialize         terminate         supportsCommand      !   isCommandEnabled         doCommand         onEvent         updateCommands      -   downloadsCmd_clearList                    set active        ¹   
   5                                  Ë¯  ±  ?                ¹W   QT  V   5    D   æQV   5    æ   æV   5    æT     8æ   ¸   
      5   : ¸   
V   : Q   æ   B0   	QæV   T  0    Ô#ËÉ K C3å DÊÍÌ    _active   _summaryNode   DownloadsCommon   getSummary   window   DownloadsView   kItemCountLimit   refreshView   DownloadsFooter   showingSummary    ÿÿÿÿ      aActive   .this                    get active        ¹                                         p±  ±  P                ¹W   QV   5    É    _active    ÿÿÿÿ      .this                   '   set showingProgress  \      ¹                                        R²  ³  \                ¹W   QT     )æV   5    ¸   
=   =   : Q   æV   5    ¸   
=   : Qæ   T  0   $äÚÍ    _summaryNode   setAttribute   inprogress	   true   removeAttribute   DownloadsFooter   showingSummary    ÿÿÿÿ   !   aShowingProgress   .this                 '   set percentComplete  7      ¹                                        ´   µ  m                ¹W   QV   5       "æV   5    ¸   
=   T  : QæT  ÉÝ    _progressNode   setAttribute   value    ÿÿÿÿ      aValue   .this                    set description  S      ¹                                        Çµ  ¶  {                ¹W   QV   5       >æV   5    ¸   
=   T  : QV   5    ¸   
=   T  : QæT  ÉÜÝ !   _descriptionNode   setAttribute   value   tooltiptext    ÿÿÿÿ      aValue   .this                    set details  S      ¹                                        ·  E¸                  ¹W   QV   5       >æV   5    ¸   
=   T  : QV   5    ¸   
=   T  : QæT  ÉÜÝ    _detailsNode   setAttribute   value   tooltiptext    ÿÿÿÿ      aValue   .this                    focus@  +      ¹                                         ¸  Õ¸                  ¹W   QV   5       æV   5    ¸   
:  QæÉÕ    _summaryNode   focus    ÿÿÿÿ      .this                      onKeyDown@ L       ¹                                	         r¹  º  ¢                 T  5    =   ¸   
>: D   æQT  5      5   æ   æ   ¸   
:  QæÕËÔÑ    charCode       charCodeAt   keyCode   KeyEvent   DOM_VK_RETURN   DownloadsPanel)   showDownloadsHistory    ÿÿÿÿ      aEvent                     onClick@        ¹                                         ®º  çº  ¯                     ¸   
:  QÐ    DownloadsPanel)   showDownloadsHistory    ÿÿÿÿ      aEvent                  !   get _summaryNode  Q      ¹      $                                  I»  ú»  ¶                ¹W   Q  Q    ¸   
=   :   QV      
æ@ÉæV   .   QV   V  0   ÉÉÑÈ »ÊÍ    document   getElementById!   downloadsSummary   _summaryNode    ÿÿÿÿ      .this                   	   node               D   ÿÿÿÿ    3              N                    #   get _progressNode  Q      ¹      $                                  e¼   ½  Â                ¹W   Q  Q    ¸   
=   :   QV      
æ@ÉæV   .   QV   V  0   ÉÉÑÈ ÇÊÍ    document   getElementById1   downloadsSummaryProgress   _progressNode    ÿÿÿÿ      .this                   	   node               D   ÿÿÿÿ    3              N                    )   get _descriptionNode  Q      ¹      $                                  ½  [¾  Ï                ¹W   Q  Q    ¸   
=   :   QV      
æ@ÉæV   .   QV   V  0   ÉÉÑÈ ÔÊÍ    document   getElementById7   downloadsSummaryDescription!   _descriptionNode    ÿÿÿÿ      .this                   	   node               D   ÿÿÿÿ    3              N                    !   get _detailsNode  Q      ¹      $                                  Ó¾  ¿  Ü                ¹W   Q  Q    ¸   
=   :   QV      
æ@ÉæV   .   QV   V  0   ÉÉÑÈ áÊÍ    document   getElementById/   downloadsSummaryDetails   _detailsNode    ÿÿÿÿ      .this                   	   node               D   ÿÿÿÿ    3              N                       focus@  B      ¹                                         Á  Â  ö                ¹W   QV   5       æ   ¸   
:  Q   æ   5   ¸   
:  QæÉÖÖ    _showingSummary!   DownloadsSummary   focus   DownloadsView!   downloadsHistory    ÿÿÿÿ      .this                   %   set showingSummary        ¹      '                                  éÂ  £Ä                  ¹W   QV   5       æT     )æV   5    ¸   
=   =   : Q   æV   5    ¸   
=   : QæT   E   æQV   5   æ   æ   ¸   
:  QæV   T  0   QæT  É$äÚ
ÕÑÎ    _footerNode   setAttribute   showingsummary	   true   removeAttribute   _showingSummary   DownloadsPanel   setHeightToFit    ÿÿÿÿ      aValue   .this                    get _footerNode  Q      ¹      $                                  Å  ²Å                  ¹W   Q  Q    ¸   
=   :   QV      
æ@ÉæV   .   QV   V  0   ÉÉÑÈ ÊÍ    document   getElementById   downloadsFooter   _footerNode    ÿÿÿÿ      .this                   	   node               D   ÿÿÿÿ    3              N                       get subview  A      ¹                                        öÆ  Ç  ,                ¹W   Q  Q    ¸   
=   :   QV   .   QV   V  0   ÉÉÑ
ÈÊÍ    document   getElementById;   downloadsPanel-blockedSubview   subview    ÿÿÿÿ      .this                      subview               4   ÿÿÿÿ    >                       get elements  T      ¹      '                                ÁÇ  %É  5                ¹W   Q    Qf      QV  ¸    
   [   :   QV   .   QV   V  0   ÉÉÊÊ =Ñ =ÈÊÍ    reduce   elements    ÿÿÿÿ      .this                      idSuffixes   elements                        title      details1      details2      openButton      deleteButton            -   get elements/elements<e  %       ¹                                         fÈ  ÜÈ  =                 T  T     ¸   
=   T : 9QT  Û
    document   getElementById=   downloadsPanel-blockedSubview-    ÿÿÿÿ   	   memo   s                             C   ÿÿÿÿ    Q                       get view  A      ¹                                        É  Ê  H                ¹W   Q  Q    ¸   
=   :   QV   .   QV   V  0   ÉÉÑÈÊÍ    document   getElementById1   downloadsPanel-multiView	   view    ÿÿÿÿ      .this                   	   view               4   ÿÿÿÿ    >                       toggle@      ¹   "   _                         (        äË  sÏ  ^                ¹W   Q      QV   5    5      æV   ¸   
:  QÉæV   T  0   QT  ¸   
=   =   : QV   5     Q   5   	  QV  5   
T 0   QV  5   T >70   QV  5   T ?70   QV  5   V  5   0   QV  5   V  5   0   QT  ¸   
=   :   QV   5   ¸   
=   V  : QV   5   ¸   
=   V   : QV   5    ¸   
V   5   5   : Q   ¸   
=   : 5      ¸    
V   5    : 5   !0   QÉÜÏ y dÍØÎÏÒÔÔØØÏ
ÈÝÝâÙÕÏ 	   view   showingSubView	   hide   element   setAttribute   showingsubview	   true   elements   DownloadsCommon   strings   title   textContent   details1   details2   openButton   label#   unblockButtonOpen   deleteButton3   unblockButtonConfirmBlock   getAttribute   verdict   subview!   addEventListener   ViewHiding   showSubView   id   document   getElementById/   downloadsPanel-mainView   style   minWidth   window!   getComputedStyle   width    ÿÿÿÿ      element   title   details   .this                    e   s   verdict                 ÿÿÿÿ    :                       handleEvent@       ¹   
   -                                  Ï  úÐ  {                ¹W   QT  5    x=   y   æz   NæV   5   ¸   
T  5    V   : QV   5   ¸   
=   : QV   .   Q   )æ   ¸   
=   	T  5    : Q   æÈh~vÌàÙÊXÑÉ X 	   type   ViewHiding   subview'   removeEventListener   element   removeAttribute   showingsubview   DownloadsCommon   logS   Unhandled DownloadsBlockedSubview event:     ÿÿÿÿ      event   .this                 	   hide@  +      ¹                                         LÑ   Ò                  ¹W   QV   5    ¸   
:  Q   ¸   
:  QÔÐ 	   view   showMainView   DownloadsPanel   showPanel    ÿÿÿÿ      .this                      confirmBlock@  $       ¹                                          sÒ  ºÒ                           =   : Q   ¸   
:  QÓÐ    goDoCommand   cmd_delete   DownloadsPanel   hidePanel    ÿÿÿÿ              