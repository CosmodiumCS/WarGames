   B   ¹   Yr   20170118123726q     ¹   #   Ø                                       chrome://global/content/printUtils.js     g                                 Ö    B    QÖ   B   QÖ   @   QÖ   Y       ]      a      ]      ]      ]      ]   	   ]   
   ]      a   @]   @]   @]   @]   =   ]   =   ]   B]      	a      
]      ]      ]      ]   [      ]      ]   ]      ]      ]      ]      ]       ]   !   ]   "   Q   ¸   
:  Í?ÌÌÌCÊÊHÊUÊpÊÊ  ¿Ê  üÊ Ê $Ê ,ÊÊÊ @Ê ~Ê °Ê »Ê ÕÊ ÝÏ çÊ ìÊ nÊ Ê Ê Ð ·Ð /   gPrintSettingsAreGlobal%   gSavePrintSettings   gFocusedElement   PrintUtils	   init   bundle   showPageSetup   printWindow   print   printPreview%   getWebBrowserPrint   getPrintPreview   inPrintPreview   _listener   _closeHandlerPP   _webProgressPP   _sourceBrowser      _originalTitle   _originalURL   _shouldSimplify   usingRemoteTabs)   displayPrintingError   receiveMessageI   setPrinterDefaultsForSelectedPrinter!   getPrintSettings   observe   QueryInterface   _obsPP#   setSimplifiedMode#   enterPrintPreview!   exitPrintPreview   logTelemetry   onKeyDownPP   onKeyPressPP   ÿÿÿÿ   /   gPrintSettingsAreGlobal%   gSavePrintSettings   gFocusedElement   PrintUtils                	   init@  %      ¹                                         d
  ²
  D                 ¹W   Q    5   ¸   
=   V   : QÞ    window   messageManager%   addMessageListener   Printing:Error    ÿÿÿÿ      .this                      get bundle  d      ¹   	                            
         Á
  ð  H                 ¹W   Q  Q    5   5   ¸   
    5   5   :   QV   %   QV   V  ¸   
=   : 6   ÉÉÖÏIÈKÊÔÈ    Components   classesA   @mozilla.org/intl/stringbundle;1   getService   interfaces-   nsIStringBundleService   bundle   createBundleU   chrome://global/locale/printing.properties    ÿÿÿÿ      .this                      stringService               W   ÿÿÿÿ    a                    1   PrintUtils.showPageSetupc   ÷      ¹      G                                 Ï  ë  U          
       ¹W  QV  ¸    
:  W   Q   5   5   ¸   
   5   5   : W  QV  ¸   
   V   @: Q   	   Pæ   5   5   
¸   
   5   5   : W  QV  ¸   
V   CV   5   : Qæ   =æ  Qv  Q      =   V  =   : QBÉÉ    æC  °
ËÈ
ÖÏXÈZÙ]ÖÏ]È_æaÌÞfËe !   getPrintSettings   Components   classes_   @mozilla.org/embedcomp/printingprompt-service;1   getService   interfaces1   nsIPrintingPromptService   showPageSetup   window%   gSavePrintSettingsQ   @mozilla.org/gfx/printsettings-service;1/   nsIPrintSettingsService1   savePrintSettingsToPrefs'   kInitSaveNativeData	   dump   showPageSetup    
    ÿÿÿÿ      printSettings   PRINTPROMPTSVC   PSSVC   .this                      e                 ´      Ä   )   ÿÿÿÿ    ë                    -   PrintUtils.printWindowc  J      ¹                                        Ê  p                 ¹W   Q  QT 5      QV  ¸   
=   [    T  ]   V   5   ]   : QÉÍÕÈÎsw    messageManager!   sendAsyncMessage   Printing:Print   windowID   _shouldSimplify   simplifiedMode    ÿÿÿÿ      aWindowID   aBrowser   .this                    mm                         windowID         simplifiedMode             =   ÿÿÿÿ          !   PrintUtils.printc   ¨     ¹      {                        /         J  l                   ¹W   Q              Q       0æV   ¸   
    5   5       5   : ÉæV   5      æ   A=   ,  R pæ   5     QV  ¸   	
   
5   5   :   QV  ¸   
   
5   5   : ¸   	
   
5   5   : 5     QV      æ   A=   ,  R pæV  ¸   
   
5   5   : 5     Q   
5   ¸   
=   [    : 5     Q=     Q=     QV  ¸   
V  V  : QV   ¸   
V  V  : Q   ÉÉãÚÊ      ÉÏÏÚÈÚ
ÊÏ  ÍÏÚÍÛÍÊÊ××    gBrowser   printWindow   selectedBrowser   outerWindowID   usingRemoteTabs   ErrorÏ   PrintUtils.print cannot be run in windows running with remote tabs. Use PrintUtils.printWindow instead.   window   content   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell%   chromeEventHandler   PrintUtils.print could not resolve content window to a browser.#   nsIDOMWindowUtils   utils   importK   resource://gre/modules/Deprecated.jsm   Deprecated   PrintUtils.print is now deprecated. Please use PrintUtils.printWindow.   https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Printing   warning   undefined    ÿÿÿÿ      .this                      domWindow   ifReq   browser   windowID   Deprecated   msg   url                           $     ÿÿÿÿ    X              ¥                   /   PrintUtils.printPreviewc       ¹                             +        ý  ;%  ¿                 ¹W   Q        QV   5        xæV   T  6   QV   T  ¸   
:  6   QV   V   5   5   6   QV   V   5   5   5   6   QV   ¸   	
=   
: Q   3æV   V   5   ¸   
:  6   QV   5   C6   QæV   [    6   Q[     Q[     QV   ¸   
:    Q   5   5   ¸   
   5   5   :   QV  ¸   
   @V  V   5   BV   5   V  V  : QV  5      6æV  5   V   5   6   QV  5   V   5   6   QæV  5   ¸   
:   D   æQV   5   5   @æ   æV   ¸   
:  Qæ   *æ  Qv  QV   ¸   
:  QÉ    æÉÒÊsÍÎÉØÝÚÔÉÑÏÊÊËÈ  ÝÖÏ  ÝÈ  ·ßÑ  âÉØÙ  ë
ÐÜØÌØ    inPrintPreview   _listener   _sourceBrowser!   getSourceBrowser   _originalTitle   contentTitle   _originalURL   currentURI	   spec   logTelemetry5   PRINT_PREVIEW_OPENED_COUNT-   getPrintPreviewBrowser   collapsed   _webProgressPP!   getPrintSettings   Components   classes_   @mozilla.org/embedcomp/printingprompt-service;1   getService   interfaces1   nsIPrintingPromptService   showProgress   window   _obsPP   value   docTitle   docURL   valueOf#   enterPrintPreview    ÿÿÿÿ      aListenerObj   .this                    ppParams   notifyOnOpen   printSettings   PPROMPTSVC                     e                                                           '  »         ÷  ÿÿÿÿ   ñ                   ;   PrintUtils.getWebBrowserPrintc  Ô      ¹      B                                À&  )  ü          	       ¹W  Q      Q    5   ¸   
=   [    : 5     Q=     Q=     QV  ¸   
V  V  : QV  5      æ[   ÉæT  D   æQ   	5   
æW   QV   ¸   
    5   5   : ¸   
    5   5   : ÉÉÎÛÍÊÊ×É  	ÚÚÊÏ 
    Components   utils   importK   resource://gre/modules/Deprecated.jsm   DeprecatedG  getWebBrowserPrint is now deprecated, and fully unsupported for multi-process browsers. Please use a frame script to get access to nsIWebBrowserPrint from content.   https://developer.mozilla.org/en-US/docs/Printing_from_a_XUL_App   warning   usingRemoteTabs   window   content   QueryInterface   interfaces+   nsIInterfaceRequestor   getInterface%   nsIWebBrowserPrint    ÿÿÿÿ      aWindow   contentWindow   .this                    Deprecated	   text   url                                             ¿   ÿÿÿÿ    }              Ñ                    5   PrintUtils.getPrintPreviewc   ¡      ¹      2                                 É*  
-                  ¹W   Q      Q    5   ¸   
=   [    : 5     Q=     Q=     QV  ¸   
V  V  : QV   5      æ[   ÉæV   5   	¸   

:  5   5   ÉÉÎÛÍÊÊ×É !ÐÍ    Components   utils   importK   resource://gre/modules/Deprecated.jsm   DeprecatedA  getPrintPreview is now deprecated, and fully unsupported for multi-process browsers. Please use a frame script to get access to nsIWebBrowserPrint from content.   https://developer.mozilla.org/en-US/docs/Printing_from_a_XUL_App   warning   usingRemoteTabs   _listener-   getPrintPreviewBrowser   docShell   printPreview    ÿÿÿÿ      .this                      Deprecated	   text   url                                                ÿÿÿÿ    }                                  %   get inPrintPreview         ¹      
                                    !-  n-  $                     ¸   
=   : @Ñ    document   getElementById+   print-preview-toolbar    ÿÿÿÿ                        '   get usingRemoteTabs        ¹   
   .                                  Ì.  0  4                ¹W   Q  Q    ¸   
   5   5   : ¸   
   5   5   : ¸   
   5   5   : 5     QV   %   	QV   V  6   	ÉÉÛÊÏ 8ÊÏ 8ÍÊÍ    window   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsILoadContext   useRemoteTabs   usingRemoteTabs    ÿÿÿÿ      .this                      usingRemoteTabs               u   ÿÿÿÿ                        )   displayPrintingError@ Ô     ¹                                     ©0  K9  @                ¹W   Q        Qf      QÖ    =       Q  QV  -Á
     bm  Q5     Q  Q=   V    Q   5   V  7T     !æÖ    =   V      QÉ   "æÉãQ¸   
:   5   ÿÿÿæ É  Q  QT     Væ  Q    =   	  QV   5   
¸   
V  : W  Q   æ  Qv  QÉ    æÉæV      #æV   5   
¸   
    : W  QæV   5   
¸   
T    æ=      æ=   æ: W  Q   5   5   ¸   
   5   5   :   QV  ¸   
   V  V  : QÉ JÒ
Ê [ÐÓ8xÒ	
ÏÓÕI ]ËÿÿÿïÕ e
ÐÔÐÖ rÕÉÓÑ vÈÖÏ yÈÝ    msgName   PERR_FAILURE   value   NS_ERROR_   Components   results   PERR_	   next	   done   _PP   bundle#   GetStringFromName1   print_error_dialog_title?   printpreview_error_dialog_title   classesO   @mozilla.org/embedcomp/prompt-service;1   getService   interfaces!   nsIPromptService   alert   window    ÿÿÿÿ      nsresult   isPrinting   .this                    msg   title   promptSvc   MSG_CODES                  	   code                     nsErrorResult                     ppMsgName                     e                     A   GFX_PRINTER_NO_PRINTER_AVAILABLE   5   GFX_PRINTER_NAME_NOT_FOUND   ?   GFX_PRINTER_COULD_NOT_OPEN_FILE   )   GFX_PRINTER_STARTDOC   %   GFX_PRINTER_ENDDOC   +   GFX_PRINTER_STARTPAGE   /   GFX_PRINTER_DOC_IS_BUSY      ABORT      NOT_AVAILABLE      NOT_IMPLEMENTED      OUT_OF_MEMORY      UNEXPECTED        î   !      D   x         »  ÿÿÿÿ   8             b   E                      ã   J                               receiveMessage@      ¹      ©                         %        ^9  )A  ~                ¹W   Q      QT  5    =      7æV   ¸   
T  5   5   T  5   5   : Q   ÉæV   5   5       æ   ÉæV   5   5     QT  5   	5   
  QT  5     QT  5    x=   y   æ=   y   Hæz   ÂæV  ¸   
@@V  5   V  5   V  5   V  5   : É   æV  5      5   5   5      6æV  ¸   
=   V   : QV  ¸   
=   V   : QæV  ¸   
@@V  5   V  5   : É   æ   ÉÉÜØÍ  ® Ï ® ÓÒÍÈh  ÙvËpÌÍÉÉÉÉ  ® XÞ £
Ø
ÙÍÉÉ § ® ªX 	   name   Printing:Error)   displayPrintingError	   data   nsresult   isPrinting   undefined   _webProgressPP   value   target   messageManager?   Printing:Preview:ProgressChange9   Printing:Preview:StateChange!   onProgressChange   curSelfProgress   maxSelfProgress!   curTotalProgress!   maxTotalProgress   stateFlags   Components   interfaces-   nsIWebProgressListener   STATE_STOP+   removeMessageListener   onStateChange   status    ÿÿÿÿ      aMessage   .this                    listener   mm	   data                 ÿÿÿÿ    X              v                                                           _   PrintUtils.setPrinterDefaultsForSelectedPrinterc  U       ¹                                         ]A  ÷B  °                 T 5        æT T  5   6    QæT  ¸   
T 5    T : QT  ¸   
T CT 5   : QÉÒÙÚ    printerName%   defaultPrinterName9   initPrintSettingsFromPrinter5   initPrintSettingsFromPrefs   kInitSaveAll    ÿÿÿÿ      aPSSVC   aPrintSettings                  7   PrintUtils.getPrintSettingsc   /     ¹      V                                 C  F  »         
       ¹W  Q    5   5   ¸   
    5   5   : W   QV      DæÖ   V   ¸   
=   B:    QÖ   	V   ¸   
=   
B:    	Qæ    5   5   ¸   
    5   5   : W  Q      0æV  5   W  QV  ¸   
V  V  : Q   æV  5   W  Qæ   9æ  Qv  Q      =   V  =   : QÉ    æV  ÖÏ ½ÈÖÉÖÊs
ÖÏ ÆÈ+ÎÝ×Ìæ    Components   classesE   @mozilla.org/preferences-service;1   getService   interfaces   nsIPrefBranch/   gPrintSettingsAreGlobal   getBoolPref=   print.use_global_printsettings%   gSavePrintSettings3   print.save_print_settingsQ   @mozilla.org/gfx/printsettings-service;1/   nsIPrintSettingsService'   globalPrintSettingsI   setPrinterDefaultsForSelectedPrinter!   newPrintSettings	   dump%   getPrintSettings:    
    ÿÿÿÿ   	   pref   printSettings   PSSVC   .this                      e              w   w      ý   %   ÿÿÿÿ          3   PrintUtils._obsPP.observec         ¹      
                                 òF  ©G  ×                             >: QÔ    setTimeout    ÿÿÿÿ      aSubject   aTopic   aData                  7   PrintUtils._obsPP.observe/<c          ¹                                          xG  G  Ú                     ¸   
:  QÐ     PrintUtils#   enterPrintPreview    ÿÿÿÿ                        A   PrintUtils._obsPP.QueryInterfacec        ¹      #                                  ÉG  ÚH  Ý                ¹W   QT  ¸    
   5   5   : D   FæQT  ¸    
   5   5   : D   #æQT  ¸    
   5   5   : æ   æV   æ   5   5   pÙ
ÊÙ
ÊÙ
 ãÐ    equals   Components   interfaces   nsIObserver1   nsISupportsWeakReference   nsISupports   results   NS_NOINTERFACE    ÿÿÿÿ      iid   .this                       observe         QueryInterface                 9   PrintUtils.setSimplifiedModec        ¹      	                                   ÿH  BI  ç                ¹W   QV   T  6    QÍ    _shouldSimplify    ÿÿÿÿ      shouldSimplify   .this                 9   PrintUtils.enterPrintPreviewc   å     ¹                              ?        cI  ;^  ì                 ¹   QÇ     5    ¸   
:     Q   5      Q       Q  5     æÇ     5    ¸   
:     Q      æ     C: Q   ÀæÇ     5    ¸   
:    Q  5      Q   ¸   
=      : Q   ¸   
=   	[     5    ¸   

:  5   5   ]     5    ¸   

:  5   ]   : Q  ¸   
=   : QÈæÈ   %æ     5    ¸   

:  B: Qæ  5   5      :æ   ¸   
=     : Q   ¸   
=     : Qæ      Q   ¸   
=      : QÈ óÑÉÐË Ê 
ÑÉÖÑÉ ÐÚ Ö
ÑÒ
Ñ
Í  Þ×ÿÿÿèÏÚÛÌ kÛ    _listener-   getPrintPreviewBrowser   messageManager   _shouldSimplify5   getSimplifiedSourceBrowser/   createSimplifiedBrowser%   addMessageListenerA   Printing:Preview:ReaderModeReady!   sendAsyncMessage=   Printing:Preview:ParseDocument!   getSourceBrowser   currentURI	   spec   URL   outerWindowID   windowID   logTelemetryQ   PRINT_PREVIEW_SIMPLIFY_PAGE_OPENED_COUNT   _webProgressPP   value9   Printing:Preview:StateChange?   Printing:Preview:ProgressChange1   Printing:Preview:Entered    ÿÿÿÿ      .this                      ppBrowser   mm/   sendEnterPreviewMessage   onEntered                    #   simplifiedBrowser                    	   spMM                    i   PrintUtils.enterPrintPreview/sendEnterPreviewMessagec  5       ¹                                        K  »K  ö                       ¸    
=   [    T  5   ]   T ]   : QÛÍÈ ÷ !   sendAsyncMessage-   Printing:Preview:Enter   outerWindowID   windowID   simplifiedMode    ÿÿÿÿ      browser   simplified                        windowID         simplifiedMode                   onReaderReadyC   6       ¹                                          ±O  TP                        ¸    
=   : Q        C: Q
Û
Ú +   removeMessageListenerA   Printing:Preview:ReaderModeReady   ÿÿÿÿ      onReaderReady                                                URL         windowID                M   PrintUtils.enterPrintPreview/onEnterede        ¹   /   Ê                         `         ÍS  ó]  &                       Q      ¸    
=         : QT  5   5      4æ  5   ¸   
:  Q  5   ¸   
:  QÉæÖ      5   	5   
   Q   ¸   
=   :    QV      :æV   ¸   
:  Q      B6   Q   ¸   
:  QÉæ  5   5      *æ  5   ¸   
  5   : Q   æ  5   C6   Qæ=     Q   ¸   
V  =   : W   QV   ¸   
=   C: QV   ¸   
=   C: QV   =   6   Q  5   ¸   
:    QV  5   ¸   
V   V  : QV   ¸   
      : Q  5   5      æV   ¸   
:  Q   *æ  ¸    
=   !: QV   ¸   "
:  Qæ   5   #¸   $
=   %:    /æ     5   #¸   '
=   %: 6   &Q   æ  @6   &Qæ   5   #¸   
=   %=   (: Q   )¸   *
=   +  5   ,C: Q   )¸   *
=   -  5   .C: Q   B6   Q   ¸   
:  Q  5   ¸   
:  QÉÎäÍÕÕ i 3Ú
ÑÈÏÑÐ i ?Ï%åÒ GÊÕÈÕÕÏ
ÑÈÜÙÏÕÕÐÖ
*ÛÏÍßààÌÐÖ +   removeMessageListener;   Printing:PrintPreview:Entered	   data   failed   _listener   onEnter   onExit   gFocusedElement   document#   commandDispatcher   focusedElement   getElementById+   print-preview-toolbar   updateToolbar   collapsed   focus   activateBrowser   _sourceBrowser!   docShellIsActive{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   createElementNS   toolbar   setAttribute   printpreview#   fullscreentoolbar   id   getNavToolbox   parentNode   insertBefore   initialize   isArticle%   enableSimplifyPage   logTelemetry[   PRINT_PREVIEW_SIMPLIFY_PAGE_UNAVAILABLE_COUNT'   disableSimplifyPage   documentElement   hasAttribute   onclose   _closeHandlerPP   getAttributeY   PrintUtils.exitPrintPreview(); return false;   window!   addEventListener   keydown   onKeyDownPP   keypress   onKeyPressPP    ÿÿÿÿ      message                     printPreviewTB   navToolbox   XUL_NS                  ÿÿÿÿ    r              ä                Ø  ÿÿÿÿ   V   ÷             µ                7   PrintUtils.exitPrintPreviewc         ¹   "   ^                         1         [^  Hb  n         
       ¹W   Q        QV   5    ¸   
:    QV  5     QV  ¸   
=   : Q   ¸   
=   V   5   C: Q   ¸   
=   	V   5   
C: Q   5   ¸   
=   V   5   : QV   @6   Q   ¸   
=   :   QV   5    ¸   
:  5   ¸   
V  : Q   5   5   ¸   
   5   5   :   Q      (æV  ¸   
   V  5   : Q   æV   5   ¸   
:  QæÖ   @   QV   ¸    
B: QV   5    ¸   !
:  QÉÒÐÈÎÔßßãËÑÈçÖÏ ~È#ãÕÌÐÕ    _listener-   getPrintPreviewBrowser   messageManager!   sendAsyncMessage+   Printing:Preview:Exit   window'   removeEventListener   keydown   onKeyDownPP   keypress   onKeyPressPP   document   documentElement   setAttribute   onclose   _closeHandlerPP   getElementById+   print-preview-toolbar   getNavToolbox   parentNode   removeChild   Components   classes9   @mozilla.org/focus-manager;1   getService   interfaces   nsIFocusManager   gFocusedElement   setFocus   FLAG_NOSCROLL   _sourceBrowser   focus#   setSimplifiedMode   onExit    ÿÿÿÿ      .this                      ppBrowser   browserMM   printPreviewTB   fm                 ÿÿÿÿ          /   PrintUtils.logTelemetryc  4       ¹                                        db  Æb                     Q    5   ¸   
T  :    QV   ¸   
C: QÉÔÈÑ    Services   telemetry!   getHistogramById   add    ÿÿÿÿ      ID                     histogram                -   ÿÿÿÿ          -   PrintUtils.onKeyDownPPc  )       ¹                                         áb  fc                   T  5    T  5      æ   ¸   
:  QæÑÑ    keyCode   DOM_VK_ESCAPE   PrintUtils!   exitPrintPreview    ÿÿÿÿ      aEvent                  /   PrintUtils.onKeyPressPPc        ¹      ^                        #         c  úf           	           ¸   
=   : ¸   
=   : W   QT  =   V   7W   Q   æ  Qv  QÉ    æT  5   D   æQT  5   æW  QV  E   +æQT  5   V   D   æQT  5   V   × æ   æ   	¸   

:  Q   æV     æ    ¸   
=   : W  Q    ¸   
=   : ¸   
=   : ¸   
:  W  Q   ¸   
T  5   : ¸   
:  W  QV  V     æV  ¸   
:  QæV     "æT  ¸   
:  QT  ¸   
:  Qæ<ÑÊ ÈÛÔÝËåÖ
ÑÈ
Ñá
ÔÒÉÐÎÏ    document   getElementById   key_close   getAttribute   key   DOM_VK_   ctrlKey   metaKey   charCode   PrintUtils!   exitPrintPreview+   print-preview-toolbar   printKb   toUpperCase   String   fromCharCode   print   preventDefault   stopPropagation    ÿÿÿÿ      aEvent   closeKey   isModif   printPreviewTB   printKey   pressedKey                    e                 @      J      ÿÿÿÿ