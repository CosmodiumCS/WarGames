   H   ¹   K   20170118123726È     ¹   0   È                                       chrome://global/content/viewSourceUtils.js     NX                           5   ¸   
=   :    ¸   
º=   =   :    ¸   
º=   	=   
:    ¸   
º=   =   :    ¸   
º=   =   : Ö    [      5   5   ]      5   5   ]      5   5   ]       ]      ]      ]      ]      ]      ]      ]      ]      ]   [      5   5   ]       	]   !   
]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (@]   )@]   *@]   +@]   ,@]   -]   .   ]   /    QÚÒÒÒÒÊÔÔÔ>Ê^ÊsÊ  Ê  ¯Ê  çÊ [Ê cÊ qÊ ÔÊ Ê  Ê µÊ îÊÊÊÊËÐ  !   gViewSourceUtils   Components   utils   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter#   ViewSourceBrowserY   resource://gre/modules/ViewSourceBrowser.jsm   DeprecatedK   resource://gre/modules/Deprecated.jsm)   PrivateBrowsingUtils_   resource://gre/modules/PrivateBrowsingUtils.jsm   ServicesG   resource://gre/modules/Services.jsm   interfaces)   nsIWebBrowserPersist+   mnsIWebBrowserPersist   nsIWebProgress   mnsIWebProgress)   nsIWebPageDescriptor+   mnsIWebPageDescriptor   viewSource'   viewSourceInBrowser5   viewPartialSourceInBrowser+   _openInInternalViewer   buildEditorArgs)   openInExternalEditor-   internalViewerFallback   handleCallBack7   getExternalViewSourceEditor-   nsIWebProgressListener/   mnsIWebProgressListener   QueryInterface   destroy   onStateChange   onContentLoaded!   onLocationChange!   onProgressChange   onStatusChange!   onSecurityChange   webShell   editor   callBack	   data	   file5   viewSourceProgressListener!   getTemporaryFile   ÿÿÿÿ   !   gViewSourceUtils                7   gViewSourceUtils.viewSourcec        ¹   
   !                                    Û  >                 ¹W  Q    5   5   ¸   
    5   5   : W   QV   ¸   
=   :    &æV  ¸   
T  T T T : Q   !æV  ¸   	
T  T T T : QæÖÏ@ÈBÐ!áÜG    Components   classesE   @mozilla.org/preferences-service;1   getService   interfaces   nsIPrefBranch   getBoolPref7   view_source.editor.external)   openInExternalEditor+   _openInInternalViewer    ÿÿÿÿ      aArgsOrURL   aPageDescriptor   aDocument   aLineNumber   prefs   .this                 I   gViewSourceUtils.viewSourceInBrowserc  Y       ¹                                         Ï  Ë  ^                    Q    5   ¸   
=   : ¸   
C: Q   AT  5   ,  R    QV   ¸   
T  : QÉÑ_Êa_bÒÈÓ    Services   telemetry!   getHistogramByIdK   VIEW_SOURCE_IN_BROWSER_OPENED_BOOLEAN   add#   ViewSourceBrowser#   viewSourceBrowser   loadViewSource    ÿÿÿÿ      aArgs                  #   viewSourceBrowser                R   ÿÿÿÿ          W   gViewSourceUtils.viewPartialSourceInBrowserc  V       ¹                                      :  õ  s                  Ç   T  5       Q   ¸   
=       : Q   ¸   
=   [   [   T ]   : QÈÎÚ  Û6ÈÿÿÿÊ    messageManager%   addMessageListener7   ViewSource:GetSelectionDone!   sendAsyncMessage/   ViewSource:GetSelection   target    ÿÿÿÿ   )   aViewSourceInBrowser   aTarget   aGetBrowserFn                    mm                       gotSelectionC  )      ¹      ^                                 ë     u          	         Q      ¸    
=   : QT  5       
æÉæ     æ  :     æ@æ   QV      ^æ  Q   AV   ,  R   QV  ¸   
T  5   5   T  5   5   T  5   5   : QÉ   sæ  Q@  Q   ¸   	
=   
=   =   [    T  5   5   ]   T  5   5   ]   T  5   5   ]   C]   : QÉæÉÛx
É  {
Ì"ÐYÎÈåÍ~ËÑÊÒÒÒ     +   removeMessageListener7   ViewSource:GetSelectionDone	   data#   ViewSourceBrowser7   loadViewSourceFromSelection   uri   drawSelection   baseURI   window   openDialog[   chrome://global/content/viewPartialSource.xul   _blank   all,dialog=no   URI   partial   ÿÿÿÿ      gotSelection                        message                    browserToOpenIn                   #   viewSourceBrowser                     docUrl                         URI         drawSelection         baseURI         partial             "  ÿÿÿÿ   3             f   M          ¿   g                                      target             P   ÿÿÿÿ          M   gViewSourceUtils._openInInternalViewerc        ¹      m                                 D  L                   @W   QBW  QT    ªæ    5   ¸   
T :    æ   A=   ,  R pæ=   T 5   W   QT 5   ¸   
    5   	5   
: ¸   
    5   	5   : 5   W  Q   æ  Qv  QÉ    æ   5   ¸   
=   : ¸   
C: Q      =   =   =   T  V   T T V  : QÔ
ÏÓEÏÏ  
ÊÏ  
ÕÔÑ  ¦Ê  ¦ÏÑ  ©    Components   utils+   isCrossProcessWrapper   Error_   View Source cannot accept a CPOW as a document.   charset=   characterSet   defaultView   QueryInterface   interfaces+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils%   docCharsetIsForced   Services   telemetry!   getHistogramByIdI   VIEW_SOURCE_IN_WINDOW_OPENED_BOOLEAN   add   openDialogM   chrome://global/content/viewSource.xul   _blank   all,dialog=no    ÿÿÿÿ      aArgsOrURL   aPageDescriptor   aDocument   aLineNumber   charset   isForcedCharset                    ex              Z   I      ¬      ÿÿÿÿ          A   gViewSourceUtils.buildEditorArgsc  ÷       ¹      G                                j  w   ¯                 Z    W   Q    5   5   ¸   
    5   5   : W  QV  ¸   
=   : W  QV     æ  QV  ¸   
=   	T D   æQ=   
æ: W  Q       Qæ   1mV   ¸   
   5   D   æQ   5   æ: QãV  ¸   
V  : ÿÿÿÀæÉæV   ¸   
T  : QV   ÊÖÏ  ´ÈÐÈàÈË(Eì  »ÜÒ    Components   classesE   @mozilla.org/preferences-service;1   getService   interfaces   nsIPrefBranch   getCharPref/   view_source.editor.args   replace   %LINE%   0	   push   RegExp   $1   $2	   test    ÿÿÿÿ      aPath   aLineNumber   editorArgs   prefs	   args                    argumentRE                 "([^"]+)"|(\S+)          E      _      ÿÿÿÿ          K   gViewSourceUtils.openInExternalEditorc  æ     ¹   J   ¡                              ä'  V<  ç                 ¹W  Q  Q  QT  '=       ±æ   ¸   
=   =   : Q   5   ¸   
T :    æ   A=   	,  R pæ[    T  ]   
T ]   T ]   T ]   B]   W  QT    'æV     ¸   
T 5   : 6   Qæ   Êæ      QT     : Q5     Q5     Q5     QQ[   V  ]   
V  ]   B]   W  QV     \æV  [   V  5   ]   V  5   ]   V  5   ]   6   QV     ¸   
V  : 6   QæÉæV  ¸   
:  W   QV       !æV  ¸   
T BV  : QÉæ   5   5   ¸   
   5    5   !: W  QV  5      æV  5   5      æ@æW  QV  ¸   "
V  5   
V  @: W  QV  V  6   #QV  5      æV  5   5      æ@æW  QV  5   $=   %   æV  ¸   &
   5    5   ': 5   %5   (W  QV  ¸   )
V  V  5   : W  QV   ¸   *
BV  V  Ù   +: QV  ¸   
T CV  : Q  æV  5   ,B6   -QV  5   ,V   6   .QV  5   ,T 6   /QV  5   ,V  6   0QV  5      Iæ    QV  ¸   1
V  V  5   V  : W  QV  5   ,V  6   %Q   5   5   2¸   3
V  5   4: W  QV  V  5   45   66   5QV  V  5   ,6   7Q   5    5   85   9  QV  ¸   :
V  @@V  @@V  V  5   : Q   5   5   ;¸   
   5    5   <:   QV  5      æV  ¸   =
V  : Q   æV  ¸   >
V  : QæÉ   ãæ   5   5   ?¸   3
:  W  	QV  	¸   &
   5    5   @: ¸   A
:  QV  5   ,V  	6   BQV  	¸   &
V  5   C: W  
QV  
¸   D
V  5   ,V  5   C5   E: QV  	¸   &
V  5   F: W  QV  ¸   G
V  5   V  5   F5   H: Qæ   Pæ  Qv  Q   5   ¸   I
V  : QV  ¸   
T BV  : QÉÉÉ    æÉÊ  ¬Ñ  ëÔ
ÏÈÈÈÈË
ÔÐÎ
òÉÉËÉ
Î
Î
ÔÔÌ  
Ë	È
× X 
ÖÏ È
Éá
ÙÈÎ

ÉáÏ  ÚÒØÈÝÝÐÓÒÓÊ DÊÜÈ
ÓÖÉ 0"È
Ø
ÓÙ
èÖÏ 9ÈÉÙÛ HÖÈ
è
ÓÔÈ
ÔÎ L
ÔÈ
ïÌÙ×    string   Deprecated   warning¥   The arguments you're passing to openInExternalEditor are using an out-of-date API.µ   https://developer.mozilla.org/en-US/Add-ons/Code_snippets/View_Source_for_XUL_Applications   Components   utils+   isCrossProcessWrapper   Error_   View Source cannot accept a CPOW as a document.   url   pageDescriptor   doc   lineNumber   isPrivate)   PrivateBrowsingUtils   isWindowPrivate   defaultView-   RequireObjectCoercible   URL   browser   characterSet'   documentContentType   contentType   contentTitle   title!   isBrowserPrivate7   getExternalViewSourceEditor   handleCallBack   classesC   @mozilla.org/network/io-service;1   getService   interfaces   nsIIOService   newURI   uri   scheme	   file   QueryInterface   nsIFileURL	   path   buildEditorArgs	   runw   length5   viewSourceProgressListener   contentLoaded   editor   callBack	   data!   getTemporaryFilei   @mozilla.org/embedding/browser/nsWebBrowserPersist;1   createInstance+   mnsIWebBrowserPersist   persistFlagsI   PERSIST_FLAGS_REPLACE_EXISTING_FILES!   progressListener   nsIHttpChannel7   REFERRER_POLICY_NO_REFERRER'   savePrivacyAwareURIi   @mozilla.org/uriloader/external-helper-app-service;1/   nsPIExternalAppLauncherM   deleteTemporaryPrivateFileWhenPossible3   deleteTemporaryFileOnExit/   @mozilla.org/docshell;1   nsIBaseWindow   create   webShell   mnsIWebProgress'   addProgressListener+   NOTIFY_STATE_DOCUMENT+   mnsIWebPageDescriptor   loadPage#   DISPLAY_AS_SOURCE   reportError    ÿÿÿÿ      aArgsOrURL   aPageDescriptor   aDocument   aLineNumber   aCallBack   editor   ios   charset   uri	   path   contentType   editorArgs	   file#   webBrowserPersist   webShell   progress   pageLoader   .this                 	   data                     URL   browser   lineNumber                     referrerPolicy   helperService                     ex                         url         pageDescriptor         doc         lineNumber         isPrivate                       url         lineNumber         isPrivate                       characterSet         contentType         title                      Ù  ÿÿÿÿ   Ü   ¶           Ì            {  4         ¡  <          Ú            Û                  O   gViewSourceUtils.internalViewerFallbackc  A      ¹                                        Ë<  V=  [                ¹W   QT      5æV   ¸    
T 5   T 5   T 5   T 5   : Qæð +   _openInInternalViewer   url   pageDescriptor   doc   lineNumber    ÿÿÿÿ      result	   data   .this                 ?   gViewSourceUtils.handleCallBackc  p      ¹      -                          
        ¶=  "?  c                ¹W   Q    5   ¸   
=   : ¸   
T : QT     H    æV   ¸   
T T : Q   æT     æT  T T : QæÑ eÊ eÉÛÏ    Services   telemetry!   getHistogramByIdG   VIEW_SOURCE_EXTERNAL_RESULT_BOOLEAN   add   undefined-   internalViewerFallback    ÿÿÿÿ      aCallBack   result	   data   .this                 Y   gViewSourceUtils.getExternalViewSourceEditorc   Ö       ¹      X                                  ?  öA  q                     Q    5   5   ¸   
    5   5   : ¸   
=       5   5   :    Q    5   5   	¸   

    5   5   :   QV  ¸   
V   : QV  ÉÉ   4æ   Qv   Q    5   ¸   
V   : QÉ    æ@  Ê
ÖÏ u
ÊÏ u
È
ÖÏ yÈÓ Ì Ìá    Components   classesE   @mozilla.org/preferences-service;1   getService   interfaces   nsIPrefBranch   getComplexValue/   view_source.editor.path   nsIFile7   @mozilla.org/process/util;1   createInstance   nsIProcess	   init   utils   reportError    ÿÿÿÿ                        #   viewSourceAppPath   editor                       ex                  ¢            ÿÿÿÿ                 ¬       ÿÿÿÿ          u   gViewSourceUtils.viewSourceProgressListener.QueryInterfacec        ¹      "                                  B  C                  ¹W   QT  ¸    
V   5   : D   FæQT  ¸    
   5   5   : D   #æQT  ¸    
   5   5   : æ   æV   æ   5   5   pÓ	ÊÙ	ÊÙ	 Ð    equals/   mnsIWebProgressListener   Components   interfaces1   nsISupportsWeakReference   nsISupports   results   NS_NOINTERFACE    ÿÿÿÿ   	   aIID   .this                 g   gViewSourceUtils.viewSourceProgressListener.destroyc   {      ¹   
                              	         ¡C  ¥D                  ¹W   QV   5       3æV   5    ¸   
   5   5   : ¸   
:  QæV   @6    QV   @6   QV   @6   QV   @6   QV   @6   	QÉîËËËËË    webShell   QueryInterface   Components   interfaces   nsIBaseWindow   destroy   editor   callBack	   data	   file    ÿÿÿÿ      .this                   s   gViewSourceUtils.viewSourceProgressListener.onStateChangec  ×      ¹      G                                  qE  ÀH                   ¹W  QT V  5    5   E   æQT >æ   ®æV  5       æV  ¸   
:  Q>æV  5   ¸   
   5   5   : W   QV   5   5   	=   
   æV  ¸   
:  Q   6æV   5   ¸   
=   V  5   ¸   
V  : : Qæ>ßÊ
Ï
 ³ ©ßÈÔ
Õ
ÕÔ2 ®
 /   mnsIWebProgressListener   STATE_STOP   webShell   onContentLoaded   QueryInterface   Components   interfaces!   nsIWebNavigation   document   readyState   complete!   addEventListener!   DOMContentLoaded	   bind    ÿÿÿÿ      aProgress   aRequest   aFlag   aStatus   webNavigation   .this                 w   gViewSourceUtils.viewSourceProgressListener.onContentLoadedc   ú     ¹   +   Å                        ^         àH  äR  µ                ¹W  QV  5       ææV  5      Ùæ  QV     ¸   
V  5   5   V  5   5   V  5   5   5   : 6   QV  5   ¸   	
   
5   5   : W   Q   
5   5   ¸   
   
5   5   : W  QV  ¸   
V  5   ××× ×ÿ>: Q   
5   5   ¸   
   
5   5   : W  QV  ¸   
V  V  5   5   5   >@: QV  ¸   
V   5   5   5   : QV  ¸   
:  QV  ¸   
:  Q   
5   5   ¸   
   
5   5   :   QV  5   5      #æV  ¸   
V  5   : Q   æV  ¸   
V  5   : QæÉæ   ¸    
V  5   5   !V  5   5   ": W  QV  5   #¸   $
BV  V  Ù   %: QV  C6    Q   ¸   &
V  5   'CV  5   : Qt   bæ   sæ  Qv  Q   
5   (¸   )
V  : Q   ¸   &
V  5   'BV  5   : QÉt   æ   æV  ¸   *
:  Qu æÉ ì » kÊ Á
ìÓ ÁÉßÈÖÏ ÆÈ
ãÖÏ ÉÈ
è
â
Ï
ÏÖÏ ÔÈÎÞÛÚÎ ßÈâËñÌÙðÕ    contentLoaded	   file!   gViewSourceUtils!   getTemporaryFile	   data   uri   doc   contentType   webShell   QueryInterface   Components   interfaces!   nsIWebNavigation   classesS   @mozilla.org/network/file-output-stream;1   createInstance'   nsIFileOutputStream	   initW   @mozilla.org/intl/converter-output-stream;11   nsIConverterOutputStream   characterSet   writeString   document	   body   textContent   closei   @mozilla.org/uriloader/external-helper-app-service;1   getService/   nsPIExternalAppLauncher   isPrivateM   deleteTemporaryPrivateFileWhenPossible3   deleteTemporaryFileOnExit   buildEditorArgs	   path   lineNumber   editor	   runw   length   handleCallBack   callBack   utils   reportError   destroy    ÿÿÿÿ      webNavigation   foStream   coStream   editorArgs   .this                      helperService                      ex                Æ          o     /   Í  ÿÿÿÿ     C   ÿÿÿÿ          y   gViewSourceUtils.viewSourceProgressListener.onLocationChangec          ¹                                            S  S  î                 >#
     ÿÿÿÿ                        y   gViewSourceUtils.viewSourceProgressListener.onProgressChangec          ¹                                            5S  ES  ï                 >#
     ÿÿÿÿ                        u   gViewSourceUtils.viewSourceProgressListener.onStatusChangec          ¹                                            cS  sS  ð                 >!
     ÿÿÿÿ                        y   gViewSourceUtils.viewSourceProgressListener.onSecurityChangec          ¹                                            S  £S  ñ                 >#
     ÿÿÿÿ                           /   mnsIWebProgressListener         QueryInterface         destroy         onStateChange         onContentLoaded      !   onLocationChange      !   onProgressChange         onStatusChange      !   onSecurityChange         webShell         editor         callBack      	   data      	   file                 C   gViewSourceUtils.getTemporaryFilec  A     ¹      U                         $        nT  KX  û                ¹W  QV  5        _æ   5   5   ¸   
   5   5   : W   QV  [    6    QV   ¸   
=   V  5    : Qæ   5   5   	¸   
   5   5   
: W  QV  ¸   
=      5   5   : W  QV  5    ¸   
@T  T T : W  QV  5    ¸   
V  T  T : W  QV  5    ¸   
V  V  : W  QV  ¸   
V  : QV  Ê
ÖÏ þÈÏÞÖÏ ÈßÈÚÈÚÈØÈÓ    _caUtils   Components   classesK   @mozilla.org/moz/jssubscript-loader;1   getService   interfaces+   mozIJSSubScriptLoader   loadSubScriptW   chrome://global/content/contentAreaUtils.jsK   @mozilla.org/file/directory_service;1   nsIProperties   get	   TmpD   nsIFile%   getDefaultFileName'   getDefaultExtension+   getNormalizedLeafName   append    ÿÿÿÿ
   	   aURI   aDocument   aContentType   scriptLoader   fileLocator   tempFile   fileName   extension   leafName   .this                                   +   mnsIWebBrowserPersist         mnsIWebProgress      +   mnsIWebPageDescriptor         viewSource      '   viewSourceInBrowser      5   viewPartialSourceInBrowser      +   _openInInternalViewer         buildEditorArgs      )   openInExternalEditor      -   internalViewerFallback         handleCallBack      7   getExternalViewSourceEditor      5   viewSourceProgressListener      !   getTemporaryFile       