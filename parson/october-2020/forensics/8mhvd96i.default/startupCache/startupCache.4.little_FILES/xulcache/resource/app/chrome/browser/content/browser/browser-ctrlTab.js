   K   ¹   p   20170118123726;     ¹   3   q      1                                 chrome://browser/content/browser-ctrlTab.js     ·D                                 Ö    [       ]      ]      ]      ]       QÖ   [   	   ]      ]   	   ]   
   ]      QÖ   Y      
a      a      a      a      a      a      a   >]      a      a      a      a      a      ]      ]   =   ]      ]      ]      ]      ]      ]       ]   !   ]   "   ]   #    ]   $   !]   %   "]   &   #]   '   $]   (   %]   )   &]   *   ']   +   (]   ,   )]   -   *]      +]   .   ,]   /   -]   0   QÖ   Y      .a   1   /a   2   0]   '   QÍÊÊÊ-ÊFÐbÊÊlÊuÊyÐ  ÊÊÊÊÊÊÊÊ  °Ê  ¶ÊÊÊÊÊ  ÍÊ  ÒÊÊ  ÞÊÊ  ìÊ Ê &Ê +Ê 7Ê <Ê AÊ MÊ SÊ dÊ oÊ Ê Ê Ê ÂÊ ×Ê ÿÊ Ê Ð 9ÊÊÊÐ K    tabPreviews+   tabPreviewPanelHelper   ctrlTab   allTabs	   init   get   capture   handleEvent   opening!   _generateHandler   _popupshown   _popuphiding   panel   showAllButton   previews   maxTabPreviews   canvasWidth   canvasHeight	   keys   _selectedIndex   selected   isOpen   tabCount   tabPreviewCount   tabList   uninit1   browser.ctrlTab.previews   prefName   readPref   observe   updatePreviews   updatePreview   advanceFocus   _mouseOverFocus	   pick   showAllTabs   remove   attachTab   detachTab	   open   _openPanel   close   setupGUI   suspendGUI   onKeyPress-   removeClosingTabFromUI9   filterForThumbnailExpiration+   _initRecentlyUsedTabs   _init   toolbarButton   canOpen   ÿÿÿÿ      tabPreviews+   tabPreviewPanelHelper   ctrlTab   allTabs                !   tabPreviews_initC        ¹      >                                 8  Z  	                ¹W   Q          QV   5       
æÉæV      5   6    Q   5   ¸   
=   V   B: Q   5   ¸   
=   V   B: Q   5   ¸   	
   
5   :   Q[      Q[     Q[     Q[     QV  5   ¸   
V  V  V  V  : QV   V  5   V  5   6   QÉßÔßßÑÊÈÊÊ
ÊÊäÞ    _selectedTab   gBrowser   selectedTab   tabContainer!   addEventListener   TabSelect   SSTabRestored   CcA   @mozilla.org/gfx/screenmanager;1   getService   Ci!   nsIScreenManager   primaryScreen#   GetRectDisplayPix   aspectRatio   value   ÿÿÿÿ   !   tabPreviews_init                        .this                     screenManager	   left   top   width   height                                                                           ó   ÿÿÿÿ   .                       tabPreviews_getC  û      ¹      M                                 |  c            	      ¹W   Q  QT  5    5   5     QT  5   E   æQT  5   V  æ   æT  @6   QT  @6   QæT  5      æT  5   ÉæT  ¸   
=   : =      Dæ  Q   A,  R    QV     
¸   
V  : 6   	QV  ÉÉÉæV   ¸   
T  T  ¸   
=   :  : ÉÉ×ÏÎÊË!ÈÈ+$ÏÉ
ÊÈÔ
É+*ÎÏÿÿÿì    linkedBrowser   currentURI	   spec'   __thumbnail_lastURI   __thumbnail   getAttribute   pending	   true   Image   src   PageThumbs   getThumbnailURL   capture   hasAttribute	   busy   ÿÿÿÿ      tabPreviews_get                     	   aTab   .this                   uri                     img               î   ÿÿÿÿ   s                8          Î            Ï            ø                    '   tabPreviews_captureC  i       ¹                                          -                 Ç     5       Q   5   5      Q   ¸   
   :    Q   ¸   
       : Q   ÈÈÐÕÑ	ÉÛC    linkedBrowser   currentURI	   spec   PageThumbs   createCanvas   window)   shouldStoreThumbnail   ÿÿÿÿ   '   tabPreviews_capture                     	   aTab   aShouldCache                   browser   uri   canvas                    +   tabPreviews_capture/<e  g       ¹                               
        P    1                  T  E   æQ  æ   *æ    ¸   
          : Q   0æ    ¸   
               : QæÐ%å:ëB    PageThumbs   captureAndStore   captureToCanvas    ÿÿÿÿ      aDoStore                  /   tabPreviews_capture/</<c          ¹   	                                      »  ¡  3                    Q    A,  R     QV      ¸   
      : 6   Q  V   6   Q     6   Q      ¸   
=   : ¸   
V   >>: QÉÊÈ
Ú
É
Ï
Ð
ë    Image   src   PageThumbs   getThumbnailURL   __thumbnail'   __thumbnail_lastURI   getContext   2d   drawImage    ÿÿÿÿ                           img                   ÿÿÿÿ          /   tabPreviews_capture/</<e   7       ¹                                          ç  u  ;                       0æ        6    Q        6   QæÕÖ@    __thumbnail'   __thumbnail_lastURI    ÿÿÿÿ                    c   ÿÿÿÿ   f                    /   tabPreviews_handleEventC  Ç      ¹   	   ;                                Ð  ±  F                ¹W   QT  5    x=   y   æ=   y   æz    æV   5   E   &æQV   5   5   E   æQV   5    æ   4æV   C6   Q          XÐV   V   5   : QæV   T  5   6   Q   #æV   ¸   
T  5   C: Q   æÈh  ·vËpÌÐÕËP
Ë
ÏWÐQ
YÒXØX_ 	   type   TabSelect   SSTabRestored   _selectedTab   parentNode   _pendingUpdate   setTimeout   target   capture   ÿÿÿÿ   /   tabPreviews_handleEvent                        event   .this                3   tabPreviews_handleEvent/<c  a       ¹                                           î  Q                  T  B6    QT 5   E   4æQT ¸   
=   :  E   æQT ¸   
=   :  æ   æT  ¸   
T C: QæÊÏÏËÏÓ
    _pendingUpdate   parentNode   hasAttribute	   busy   pending   capture    ÿÿÿÿ   	   self	   aTab                     	   init         get         capture         handleEvent                 ;   tabPreviewPanelHelper.openingc  ~      ¹   
                                     è    c                 ¹W  QT  5    B6   QV  ¸   
T  : W   QT  5    ¸   
=   V   B: QT  5    ¸   
=   V   B: QT     5   5   	6   QÏfÎ
ÈÝÝjØ    panel   hidden!   _generateHandler!   addEventListener   popupshown   popuphiding   _prevFocus   document#   commandDispatcher   focusedElement    ÿÿÿÿ   	   host   handler   .this                 M   tabPreviewPanelHelper._generateHandlerc        ¹                                        #    l                 ¹W   QV      Q    Êt     ÿÿÿÿ   	   host	   self   .this                Q   tabPreviewPanelHelper._generateHandler/<c  g      ¹                                          U    n                 	W   QT  5       5      Læ   5   ¸   
T  5   V   5   B: Q   =   T  5   Á
   : QæÓçàs    target   panel'   removeEventListener	   type   callee   _    ÿÿÿÿ      event   arguments                 C   tabPreviewPanelHelper._popupshownc         ¹                                         &  e  u                  =    T  q   æT  ¸    
:  QæÉÏ    setupGUI    ÿÿÿÿ   	   host                  E   tabPreviewPanelHelper._popuphidingc  «       ¹      *                                     ó  y                  =    T  q   æT  ¸    
:  QæT  5      Aæ   5   ¸   
T  5      5   5   : QT  @6   Q   æ   5   	¸   
:  QæT  5   
   #æ   T  5   
6   QT  @6   
QæÉÏ}È<ìÐÖÈÓË    suspendGUI   _prevFocus   Services   focus   setFocus   Ci   nsIFocusManager   FLAG_NOSCROLL   gBrowser   selectedBrowser   tabToSelect   selectedTab    ÿÿÿÿ   	   host                        opening      !   _generateHandler         _popupshown         _popuphiding                    get panel  /      ¹                                         .                     ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    panel   document   getElementById   ctrlTab-panel    ÿÿÿÿ      .this                   #   get showAllButton  /      ¹                                         ¥                     ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ    showAllButton   document   getElementById   ctrlTab-showAll    ÿÿÿÿ      .this                      get previews  3      ¹                                         )                     ¹W   QV   %    QV   V   5   ¸   
=   : 6    ÊÙÈ    previews   panel-   getElementsByClassName   ctrlTab-preview    ÿÿÿÿ      .this                   %   get maxTabPreviews  +      ¹                                         ³                     ¹W   QV   %    QV   V   5   Ù   ?6    ÊÙ    maxTabPreviews   previews   length    ÿÿÿÿ      .this                      get canvasWidth  D      ¹                                        *  §                   ¹W   QV   %    QV      ¸   
   5   <    V   5   : 6    ÊêÈ    canvasWidth	   Math	   ceil   screen   availWidth   maxTabPreviews   333333ë?    ÿÿÿÿ      .this                   !   get canvasHeight  >      ¹                                         ¼  9  ¢                 ¹W   QV   %    QV      ¸   
V   5      5   : 6    ÊäÈ    canvasHeight	   Math   round   canvasWidth   tabPreviews   aspectRatio    ÿÿÿÿ      .this                      get keys  @      ¹                                       F  }  ¦                 ¹W   Q[       Qf   ¸    
   : QV   %   QV      6   ËÕ  ­ÊÎ    forEach	   keys    ÿÿÿÿ   	   keys   .this                                      close   	   find      selectAll                get keys/<c  G       ¹                                
           D  ¨                     T      ¸   
=   T  : ¸   
=   : ¸   
:  ¸   
>: 8QÝÊ  ©Ô  ©    document   getElementById	   key_   getAttribute   key#   toLocaleLowerCase   charCodeAt    ÿÿÿÿ      key                     get selected  F      ¹                                         £  ,  ±                 ¹W   QV   5    >   æ   5      "æV   5   ¸   
V   5    : æËÐÙ    _selectedIndex   document   activeElement   previews	   item    ÿÿÿÿ      .this                      get isOpen  H      ¹                                         ;    ¶                 ¹W   QV   5    5   =   D   +æQV   5    5   =   D   æQV   5   æÿ    panel   state	   open   showing   _timer    ÿÿÿÿ      .this                      get tabCount        ¹                                         «  Ó  ¹                 ¹W   QV   5    Ù   Î    tabList   length    ÿÿÿÿ      .this                   '   get tabPreviewCount  )      ¹      
                                   ë  ,  ¼                 ¹W   Q    ¸   
V   5   V   5   : Þ 	   Math   min   maxTabPreviews   tabCount    ÿÿÿÿ      .this                      get tabList        ¹                                         =  h  À                 ¹W   QV   5    É #   _recentlyUsedTabs    ÿÿÿÿ      .this                      ctrlTab_initC   G      ¹                                             Ä                ¹W   QV   5        5æ   ¸   
:  QV   ¸   
:  QV   ¸   
C: QæÊÐÏÑ #   _recentlyUsedTabs   tabPreviews	   init+   _initRecentlyUsedTabs   _init   ÿÿÿÿ      ctrlTab_init                        .this                      ctrlTab_uninitC   "      ¹                                         4  v  Í                ¹W   QV   @6    QV   ¸   
B: QËÐ #   _recentlyUsedTabs   _init   ÿÿÿÿ      ctrlTab_uninit                        .this                   !   ctrlTab_readPrefC         ¹      '                                   Æ  ö  Ó                ¹W  Q    ¸   
V  5   : E   8æQ    ¸   
=   :  D   æQ    ¸   
=   :  æW   QV      æV  ¸   
:  Q   æV  ¸   
:  QæÕÊÑËÑÊÕÐ    gPrefService   getBoolPref   prefName!   prefHasUserValueQ   browser.ctrlTab.disallowForScreenReaders	   init   uninit   ÿÿÿÿ   !   ctrlTab_readPref                        enable   .this                      ctrlTab.observec        ¹                                          D  Þ                 ¹W   QV   ¸    
:  QÏ    readPref    ÿÿÿÿ      aSubject   aTopic   aPrefName   .this                 -   ctrlTab_updatePreviewsC   æ      ¹      ?                                 x  â  â                ¹W  Q  Q>  Q    @mV  ¸    
V  5   V  7V  5   V  7: QæV  #?W  QQãV  V  5   Ù   ÿÿÿ°æÉ   ¸   
=   : W   QV  5      	¸   

V  5   V   : ¸   
=   V  5   : 6   QV  5      5    6   Q	&@1Uí  ã.Î  ä  ãÜÑÈÉÙáÉÑ    updatePreview   previews   tabList   length!   gNavigatorBundle   getString3   ctrlTab.listAllTabs.label   showAllButton   label   PluralForm   get   tabCount   replace   #1   hidden   allTabs   canOpen   ÿÿÿÿ   -   ctrlTab_updatePreviews                        showAllLabel   .this                     i                U         c   ÿÿÿÿ          +   ctrlTab_updatePreviewC  á     ¹                               %          º   ì                ¹W   QT  V   5       ææT  T 6   QT  5      æT  ¸   
T  5   : QæT   Kæ    QV   5     QV   5     QT  ¸   
   ¸   
T : : QT  ¸   	
=   
T 5   
: QT  ¸   	
=   T 5   
: QT  ¸   	
=   T 5   : QT  ¸   	
=   V  : QT  ¸   	
=   =   V  =   V  =   V  =   V  =   : QT 5      &æT  ¸   	
=   T 5   : Q   æT  ¸   
=   : QæT  B6   QÉ   IæT  C6   QT  ¸   
=   
: QT  ¸   
=   : QT  ¸   
=   : QæÍ   ðÌÈ× FÊ
Î
ÎÙÿÿÿëÛÛÛ×ÏÐËËË  ü È!áÔÑÊÓÓÔ    showAllButton	   _tab   firstChild   removeChild   canvasWidth   canvasHeight   appendChild   tabPreviews   get   setAttribute   label   tooltiptext	   crop   canvaswidth   canvasstyle   max-width:   px;min-width:   px;max-height:   px;min-height:   px;   image   removeAttribute   hidden   ÿÿÿÿ   +   ctrlTab_updatePreview                        aPreview	   aTab   .this                   canvasWidth   canvasHeight            `   6  ÿÿÿÿ          )   ctrlTab_advanceFocusC  6     ¹      N                                ê   o#                 ¹W   Q  Q    ¸   
V   5   V   5   :   Q mãV  T     æ?   æ×ÿæW  QV  >    æV   5   Ù   ?W  Q   %æV  V   5   Ù      æ>W  QæV   5   V  75   ÿÿÿæV   5   ×ÿ   $æV   5   V  7¸   
:  Q   æV   V  6   QæV   5      7æ   	   	V   5   : QV   @6   QV   ¸   

:  QæÉÞÈ(g)z ÖÛÓÙÌßÏÉ×ËÑ    Array   indexOf   previews   selected   length   hidden   _selectedIndex   focus   _timer   clearTimeout   _openPanel   ÿÿÿÿ   )   ctrlTab_advanceFocus                        aForward   .this                   selectedIndex             -            )  ÿÿÿÿ          -   ctrlTab_mouseOverFocusC  %      ¹                                        ¤#  ê#  &               ¹W   QV   5       æT  ¸   
:  QæÉÏ    _trackMouseOver   focus   ÿÿÿÿ   -   ctrlTab_mouseOverFocus                        aPreview   .this                    ctrlTab_pickC  u      ¹      )                                  
$  Ø$  +               ¹W  QV  5        ææT  D   æQV  5   æW   QV   V  5      æV  ¸   
:  Q   æV  ¸   
V   5   : QæÊ 5 /ÙÎÕÙ    tabCount   selected   showAllButton   showAllTabs   close	   _tab   ÿÿÿÿ      ctrlTab_pick                        aPreview   select   .this                 '   ctrlTab_showAllTabsC  5      ¹                                        %  h%  7               ¹W   QV   ¸    
:  Q   ¸   
=   : ¸   
:  QÏß    close   document   getElementById'   Browser:ShowAllTabs   doCommand   ÿÿÿÿ   '   ctrlTab_showAllTabs                        aPreview   .this                    ctrlTab_removeC  (       ¹                                         %  Ü%  <                T  5       æ   ¸   
T  5    : QæÈÙ 	   _tab   gBrowser   removeTab   ÿÿÿÿ      ctrlTab_remove                        aPreview                  #   ctrlTab_attachTabC        ¹      (                          
        &  õ&  A               ¹W   QT  5       ææT >   "æV   5   ¸   
T  : Q   GæT    &æV   5   ¸   
T >T  : Q   æV   5   ¸   
T  : QæÈ K EÝ!áØ    closing#   _recentlyUsedTabs   unshift   splice	   push   ÿÿÿÿ   #   ctrlTab_attachTab                     	   aTab	   aPos   .this                 #   ctrlTab_detachTabC  H      ¹                                        '  '  M               ¹W  QV  5    ¸   
T  : W   QV   >   æV  5    ¸   
V   ?: QæÓÈÚ #   _recentlyUsedTabs   indexOf   splice   ÿÿÿÿ   #   ctrlTab_detachTab                     	   aTab   i   .this                    ctrlTab_openC   p      ¹      7                                 ¸'  C)  S               ¹W   QV   5       ææ   ¸   
=   V   C: QV   ¸   
:  QV   ?6   QV             X ÈV   : 6   QÉ b WÚÏËÓ ^É    isOpen   document!   addEventListener   keyup   updatePreviews   _selectedIndex   _timer   setTimeout   ÿÿÿÿ      ctrlTab_open                        .this                  3   ctrlTab_open/this._timer<c         ¹                                         ñ(  2)  ^                 T  @6    QT  ¸   
:  QÊÎ    _timer   _openPanel    ÿÿÿÿ   	   self                  #   ctrlTab_openPanelC   Ò      ¹      ,                                  n)  I+  d               ¹W  Q    ¸   
V  : QV  5      ¸   
   5   <    V  5   <   V  5   	: 6   QV  5   
<   ×KW   QV  5   ¸   
   5      5   V  5   5   ×   5      5   V   ×B: QÔåÙ gÉ×÷Ý j +   tabPreviewPanelHelper   opening   panel   width	   Math   min   screen   availWidth   canvasWidth   tabPreviewCount   canvasHeight#   openPopupAtScreen   availLeft   availTop   availHeight   ®Gáz®ï?         ô?         ô?   ÿÿÿÿ   #   ctrlTab_openPanel                        estimateHeight   .this                      ctrlTab_closeC        ¹   	   B                                  k+  ª,  o               ¹W   QV   5        ææV   5      Qæ      V   5   : QV   @6   QV   ¸   
:  QT     æ   T  6   QææV   T  6   QV   5   ¸   
:  QÊ ~ sÉ×ËÏÏ ~ |ÍÔ    isOpen   _timer   clearTimeout   suspendGUI   gBrowser   selectedTab   tabToSelect   panel   hidePopup   ÿÿÿÿ      ctrlTab_close                        aTabToSelect   .this                 !   ctrlTab_setupGUIC   J      ¹      $                                 Ò,  D.                 ¹W   QV   5    ¸   
:  QV   ×ÿ6   QV   B6   Q          >V   : QÔÌËÏ     selected   focus   _selectedIndex   _trackMouseOver   setTimeout   ÿÿÿÿ   !   ctrlTab_setupGUI                        .this                  %   ctrlTab_setupGUI/<c         ¹                                         ë-  5.                   T  5       æT  C6   QæÈË    isOpen   _trackMouseOver    ÿÿÿÿ   	   self                  %   ctrlTab_suspendGUIC         ¹      $                                 p.  /                 ¹W   Q    ¸   
=   V   C: Q  QV   5   -Á
     +m  Q5     QV   ¸   
V  @: QãQ¸   
:   5   ÿÿÿÄæ ÉÚØ8AÒ	Ô ËÿÿÿìÕ    document'   removeEventListener   keyup   previews   value   updatePreview	   next	   done   ÿÿÿÿ   %   ctrlTab_suspendGUI                        .this                     preview            7   A      &   ]   ÿÿÿÿ          %   ctrlTab_onKeyPressC  9     ¹                               .        4/  ê3                 ¹W  QV  5    W   QV      "æT  ¸   
:  QT  ¸   
:  QæT  5   xT  5   y   æz  æT  5   E    æQT  5    E   æQT  5    æ   ãæV      #æV  ¸   
T  5   	 : Q   »æT  5   	    ¬æ  QT  ¸   
:  QT  ¸   
:  Q   
5     QV  Ù   ×   æV  ¸   
:  Q   RæV  Ù   ×   @æ  QV  >75      æ?   æ>æ  Q   
V  V  76   QÉæÉæ   ÒæV   E   æQT  5   æ   ¸æT  5   T  5      #æV  ¸   
V  5   : Q   æT  5   xV  5   5   y   3æV  5   5   y   =æV  5   5   y   )æz   8æV  ¸   
V  5   : Q   æV  ¸   
:  Q   æÎÎÏÈh ô	ÈpÌÏÐÊËÉÿÿÿîÊÉÎÎÏÌÕÌËÔØXÔÑØXÈhuÎpÎpÎpÌ ¶ØXÏX    isOpen   preventDefault   stopPropagation   keyCode   DOM_VK_TAB   ctrlKey   altKey   metaKey   advanceFocus   shiftKey   gBrowser   visibleTabs   length	   open   selected   selectedTab   DOM_VK_DELETE   remove   charCode	   keys   close	   find   selectAll   showAllTabs   ÿÿÿÿ   %   ctrlTab_onKeyPress                        event   isOpen   .this                	   tabs                     index            Ä       ÿÿÿÿ   .  4                 =   ctrlTab_removeClosingTabFromUIC  Ñ      ¹      B                                .4  
6  Â               ¹W   QV   5    ×   æV   ¸   
:  QæV   ¸   
:  QV   5   5      æV   ¸   
B: QæV   5   V   5      æV   ¸   
B: QæT  5   E   æQV   5   5   =   	æ   #æ   
   
    >V   5   : QæÌÏ Õ ÈÏÎÑÓÑäÏÊ Ñ    tabCount   close   updatePreviews   selected   hidden   advanceFocus   showAllButton   panel   state	   open   setTimeout   ÿÿÿÿ   =   ctrlTab_removeClosingTabFromUI                     	   aTab   .this                A   ctrlTab_removeClosingTabFromUI/<c         ¹                                         ¾5  ì5  Ñ                 T  ¸    
:  QÎ    focus    ÿÿÿÿ      selected                  '   ctrlTab_handleEventC  Q     ¹      ¥                        .        86  æ:  ×               ¹W   QT  5    x=   y   Xæ=   y   bæ=   y  æ=   y  .æ=   y  Aæ=   y  zæ=   y  æ=   y  ©æz  èæV   ¸   	
:  Q  Óæ  QV   5   
Ù   ?  Q    |mV   5   
V  75   E   #æQV   5   
V  75   T  5   æ   0æV   ¸   
V   5   
V  7T  5   : Q   !æV  #?W  QQãV  >ÿÿÿæÉ  &æV   ¸   
T  5   : QV   ¸   
T  5   >: Q   ñæV   ¸   
T  5   ?: Q   ÓæV   ¸   
T  5   : QV   5      æV   ¸   
T  5   : Qæ   æV   ¸   
T  : Q   wæT  5   T  5      æV   ¸   
:  Qæ   JæT  5   5   =      +æ   ¸   
=   :    5    6   Qæ   æÈh AvËpËpËpËpËpËpËpÌÏXÕ |m  
 Þ÷åH Þ7Î á Þ/Ï äX×ØXØX×É
ØXÒXÑ
ÐXÓ
Ô5ÒX 	   type!   SSWindowRestored   TabAttrModified   TabSelect   TabOpen   TabClose   keypress   keyup   popupshowing+   _initRecentlyUsedTabs   previews   length	   _tab   target   updatePreview   detachTab   attachTab   isOpen-   removeClosingTabFromUI   onKeyPress   keyCode   DOM_VK_CONTROL	   pick   id   menu_viewPopup   document   getElementById!   menu_showAllTabs   hidden   allTabs   canOpen   ÿÿÿÿ   '   ctrlTab_handleEvent                        event   .this                   i                         ¡   ÿÿÿÿ          I   ctrlTab.filterForThumbnailExpirationc  ¾      ¹   	   F                                ;  ì<  ÿ         	       ¹W   Q      Q×  Q    ¸   
V   5   V  V   5   :   QZ      Q  Q>  Q    AmV  ¸   
V   5   V  75   5   5   : QæV  #?W  QQãV  V  ÿÿÿ¹æÉT  V  : QÉÎ

ÚÉ ÈÊ	&A2Lî (Î  ÒÍ 	   Math   min   tabPreviewCount   tabCount	   push   tabList   linkedBrowser   currentURI	   spec    ÿÿÿÿ      aCallback   .this                 	   urls   extraThumbnails   thumbnailCount                     i             \   L         ©   ÿÿÿÿ   V   Z                 ;   ctrlTab._initRecentlyUsedTabsc   @      ¹                                       =  ¶=                  ¹W   QV      ¸   
   5       : ¸   
   : 6    QÜÊ É #   _recentlyUsedTabs   Array   filter   gBrowser	   tabs	   sort    ÿÿÿÿ      .this                   k   ctrlTab._initRecentlyUsedTabs/this._recentlyUsedTabs<u         ¹                                         U=  h=                   T  5     )É    closing    ÿÿÿÿ      tab                  k   ctrlTab._initRecentlyUsedTabs/this._recentlyUsedTabs<u         ¹                                         {=  °=                   T 5    T  5    !Ñ    lastAccessed    ÿÿÿÿ   	   tab1	   tab2                     ctrlTab__initC  µ     ¹      a                          '        Ø=  ÐB           	      ¹W  QT     æ=       æ=   æW   Q   V   Á
=   V  B: Q   5   W  QV  V   Á
=   V  B: QV  V   Á
=   V  B: QV  V   Á
=   V  B: QV  V   Á
=   	V  B: Q   
V   Á
=   V  B: Q   5   T   6   QT     æ   ¸   
V  : Q   æ   ¸   
V  : Qæ   
¸   
=   : T   6   Q   
¸   
=   : V   Á
=   V  : Q   
¸   
=   : W  QT     æV  ¸   
=   : Q   æV  ¸   
=   =   : QæÜÚÏÙÙÙÙÚÊ!ÊÚÕÔ5ÊèÑÈÚÚ !   addEventListener'   removeEventListener   window!   SSWindowRestored   gBrowser   tabContainer   TabOpen   TabAttrModified   TabSelect   TabClose   document   keypress   mTabBox   handleCtrlTab   PageThumbs'   addExpirationFilter-   removeExpirationFilter   getElementById!   menu_showAllTabs   hidden   menu_viewPopup   popupshowing   key_showAllTabs   removeAttribute   disabled   setAttribute	   true   ÿÿÿÿ      ctrlTab__init                        enable'   toggleEventListener   tabContainer   key_showAllTabs   .this                 #   get toolbarButton         ¹      
                                    C  PC  :                     ¸   
=   : Ñ    document   getElementById   alltabs-button    ÿÿÿÿ                           get canOpen        ¹      
                                   `C  C  >                ¹W   Q        V   5   : Ó !   isElementVisible   toolbarButton    ÿÿÿÿ      .this                      allTabs_openC   .      ¹                                       ¹C  ³D  B                ¹   Q   5       æ          >: QæÊÐ F    canOpen   setTimeout   ÿÿÿÿ      allTabs_open                        .this                     allTabs_open/<e          ¹                                          mD  ¤D  F                    5    C6   QÑ    toolbarButton	   open    ÿÿÿÿ              