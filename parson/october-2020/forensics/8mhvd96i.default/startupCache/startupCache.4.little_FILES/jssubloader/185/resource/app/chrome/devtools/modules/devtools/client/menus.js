   20170118123726  
   ¹   F         "                         `  ï       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 / * * 
   *   T h i s   m o d u l e   d e f i n e s   t h e   s o r t e d   l i s t   o f   m e n u i t e m s   i n s e r t e d   i n t o   t h e 
   *   " W e b   D e v e l o p e r "   m e n u . 
   *   I t   a l s o   d e f i n e s   t h e   k e y   s h o r t c u t s   t h a t   r e l a t e s   t o   t h e m . 
   * 
   *   V a r i o u s   f i e l d s   a r e   n e c e s s a r y   f o r   h i s t o r i c a l   c o m p a t i b l i t y   w i t h   X U L / a d d o n s : 
   *   -   i d : 
   *       u s e d   a s   < x u l : m e n u i t e m >   i d   a t t r i b u t e 
   *   -   l 1 0 n K e y : 
   *       p r e f i x   u s e d   t o   l o c a l e   l o c a l i z a t i o n   s t r i n g s   f r o m   m e n u s . p r o p e r t i e s 
   *   -   o n c o m m a n d : 
   *       f u n c t i o n   c a l l e d   w h e n   t h e   m e n u   i t e m   o r   k e y   s h o r t c u t   a r e   f i r e d 
   *   -   k e y : 
   *         -   i d : 
   *             p r e f i x e d   b y   ' k e y _ '   t o   c o m p u t e   < x u l : k e y >   i d   a t t r i b u t e 
   *         -   m o d i f i e r s : 
   *             o p t i o n a l   m o d i f i e r s   f o r   t h e   k e y   s h o r t c u t 
   *         -   k e y t e x t : 
   *             b o o l e a n ,   t o   s e t   t o   t r u e   f o r   k e y   s h o r t c u t   u s i n g   r e g u l a r   c h a r a c t e r 
   *   -   a d d i t i o n a l K e y s : 
   *       A r r a y   o f   a d d i t i o n a l   k e y s ,   s e e   ` k e y `   d e f i n i t i o n . 
   *   -   d i s a b l e d : 
   *       I f   t r u e ,   t h e   m e n u i t e m   a n d   k e y   s h o r t c u t   a r e   g o i n g   t o   b e   h i d d e n   a n d   d i s a b l e d 
   *       o n   s t a r t u p ,   u n t i l   s o m e   r u n t i m e   c o d e   e v e n t u a l l y   e n a b l e   t h e m . 
   *   -   c h e c k b o x : 
   *       I f   t r u e ,   t h e   m e n u i t e m   i s   p r e f i x e d   b y   a   c h e c k b o x   a n d   r u n t i m e   c o d e   c a n 
   *       t o g g l e   i t . 
   * / 
 
 c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 c o n s t   i s M a c   =   S e r v i c e s . a p p i n f o . O S   = = =   " D a r w i n " ; 
 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " g D e v T o o l s B r o w s e r " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / d e v t o o l s - b r o w s e r " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " C o m m a n d U t i l s " ,   " d e v t o o l s / c l i e n t / s h a r e d / d e v e l o p e r - t o o l b a r " ,   t r u e ) ; 
 l o a d e r . l a z y R e q u i r e G e t t e r ( t h i s ,   " T a r g e t F a c t o r y " ,   " d e v t o o l s / c l i e n t / f r a m e w o r k / t a r g e t " ,   t r u e ) ; 
 
 l o a d e r . l a z y I m p o r t e r ( t h i s ,   " B r o w s e r T o o l b o x P r o c e s s " ,   " r e s o u r c e : / / d e v t o o l s / c l i e n t / f r a m e w o r k / T o o l b o x P r o c e s s . j s m " ) ; 
 l o a d e r . l a z y I m p o r t e r ( t h i s ,   " R e s p o n s i v e U I M a n a g e r " ,   " r e s o u r c e : / / d e v t o o l s / c l i e n t / r e s p o n s i v e d e s i g n / r e s p o n s i v e d e s i g n . j s m " ) ; 
 l o a d e r . l a z y I m p o r t e r ( t h i s ,   " S c r a t c h p a d M a n a g e r " ,   " r e s o u r c e : / / d e v t o o l s / c l i e n t / s c r a t c h p a d / s c r a t c h p a d - m a n a g e r . j s m " ) ; 
 
 e x p o r t s . m e n u i t e m s   =   [ 
     {   i d :   " m e n u _ d e v T o o l b o x " , 
         l 1 0 n K e y :   " d e v T o o l b o x M e n u I t e m " , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             g D e v T o o l s B r o w s e r . t o g g l e T o o l b o x C o m m a n d ( w i n d o w . g B r o w s e r ) ; 
         } , 
         k e y :   { 
             i d :   " d e v T o o l b o x M e n u I t e m " , 
             m o d i f i e r s :   i s M a c   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
             / /   T h i s   i s   t h e   o n l y   o n e   w i t h   a   l e t t e r   k e y 
             / /   a n d   n e e d s   t o   b e   t r a n s l a t e d   d i f f e r e n t l y 
             k e y t e x t :   t r u e , 
         } , 
         a d d i t i o n a l K e y s :   [ { 
             i d :   " d e v T o o l b o x M e n u I t e m F 1 2 " , 
             l 1 0 n K e y :   " d e v T o o l s C m d " , 
         } ] , 
         c h e c k b o x :   t r u e 
     } , 
     {   i d :   " m e n u _ d e v t o o l s _ s e p a r a t o r " , 
         s e p a r a t o r :   t r u e   } , 
     {   i d :   " m e n u _ d e v T o o l b a r " , 
         l 1 0 n K e y :   " d e v T o o l b a r M e n u " , 
         d i s a b l e d :   t r u e , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             / /   D i s t i n g u i s h   e v e n t s   w h e n   s e l e c t i n g   a   m e n u i t e m ,   w h e r e   w e   e i t h e r   o p e n 
             / /   o r   c l o s e   t h e   t o o l b a r   a n d   w h e n   h i t t i n g   t h e   k e y   s h o r t c u t   w h e r e   w e   j u s t 
             / /   f o c u s   t h e   t o o l b a r   i f   i t   d o e s n ' t   a l r e a d y   h a s   i t . 
             i f   ( e v e n t . t a r g e t . t a g N a m e . t o L o w e r C a s e ( )   = =   " m e n u i t e m " )   { 
                 w i n d o w . D e v e l o p e r T o o l b a r . t o g g l e ( ) ; 
             }   e l s e   { 
                 w i n d o w . D e v e l o p e r T o o l b a r . f o c u s T o g g l e ( ) ; 
             } 
         } , 
         k e y :   { 
             i d :   " d e v T o o l b a r " , 
             m o d i f i e r s :   " s h i f t " 
         } , 
         c h e c k b o x :   t r u e 
     } , 
     {   i d :   " m e n u _ w e b i d e " , 
         l 1 0 n K e y :   " w e b i d e " , 
         d i s a b l e d :   t r u e , 
         o n c o m m a n d ( )   { 
             g D e v T o o l s B r o w s e r . o p e n W e b I D E ( ) ; 
         } , 
         k e y :   { 
             i d :   " w e b i d e " , 
             m o d i f i e r s :   " s h i f t " 
         } 
     } , 
     {   i d :   " m e n u _ b r o w s e r T o o l b o x " , 
         l 1 0 n K e y :   " b r o w s e r T o o l b o x M e n u " , 
         d i s a b l e d :   t r u e , 
         o n c o m m a n d ( )   { 
             B r o w s e r T o o l b o x P r o c e s s . i n i t ( ) ; 
         } , 
         k e y :   { 
             i d :   " b r o w s e r T o o l b o x " , 
             m o d i f i e r s :   " a c c e l , a l t , s h i f t " , 
             k e y t e x t :   t r u e 
         } 
     } , 
     {   i d :   " m e n u _ b r o w s e r C o n t e n t T o o l b o x " , 
         l 1 0 n K e y :   " b r o w s e r C o n t e n t T o o l b o x M e n u " , 
         d i s a b l e d :   t r u e , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             g D e v T o o l s B r o w s e r . o p e n C o n t e n t P r o c e s s T o o l b o x ( w i n d o w . g B r o w s e r ) ; 
         } 
     } , 
     {   i d :   " m e n u _ b r o w s e r C o n s o l e " , 
         l 1 0 n K e y :   " b r o w s e r C o n s o l e C m d " , 
         o n c o m m a n d ( )   { 
             l e t   H U D S e r v i c e   =   r e q u i r e ( " d e v t o o l s / c l i e n t / w e b c o n s o l e / h u d s e r v i c e " ) ; 
             H U D S e r v i c e . o p e n B r o w s e r C o n s o l e O r F o c u s ( ) ; 
         } , 
         k e y :   { 
             i d :   " b r o w s e r C o n s o l e " , 
             m o d i f i e r s :   " a c c e l , s h i f t " , 
             k e y t e x t :   t r u e 
         } 
     } , 
     {   i d :   " m e n u _ r e s p o n s i v e U I " , 
         l 1 0 n K e y :   " r e s p o n s i v e D e s i g n M o d e " , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             R e s p o n s i v e U I M a n a g e r . t o g g l e ( w i n d o w ,   w i n d o w . g B r o w s e r . s e l e c t e d T a b ) ; 
         } , 
         k e y :   { 
             i d :   " r e s p o n s i v e U I " , 
             m o d i f i e r s :   i s M a c   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
             k e y t e x t :   t r u e 
         } , 
         c h e c k b o x :   t r u e 
     } , 
     {   i d :   " m e n u _ e y e d r o p p e r " , 
         l 1 0 n K e y :   " e y e d r o p p e r " , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             l e t   t a r g e t   =   T a r g e t F a c t o r y . f o r T a b ( w i n d o w . g B r o w s e r . s e l e c t e d T a b ) ; 
 
             C o m m a n d U t i l s . c r e a t e R e q u i s i t i o n ( t a r g e t ,   { 
                 e n v i r o n m e n t :   C o m m a n d U t i l s . c r e a t e E n v i r o n m e n t ( { t a r g e t } ) 
             } ) . t h e n ( r e q u i s i t i o n   = >   { 
                 r e q u i s i t i o n . u p d a t e E x e c ( " e y e d r o p p e r   - - f r o m m e n u " ) ; 
             } ,   e   = >   c o n s o l e . e r r o r ( e ) ) ; 
         } , 
         c h e c k b o x :   t r u e 
     } , 
     {   i d :   " m e n u _ s c r a t c h p a d " , 
         l 1 0 n K e y :   " s c r a t c h p a d " , 
         o n c o m m a n d ( )   { 
             S c r a t c h p a d M a n a g e r . o p e n S c r a t c h p a d ( ) ; 
         } , 
         k e y :   { 
             i d :   " s c r a t c h p a d " , 
             m o d i f i e r s :   " s h i f t " 
         } 
     } , 
     {   i d :   " m e n u _ d e v t o o l s _ s e r v i c e w o r k e r s " , 
         l 1 0 n K e y :   " d e v t o o l s S e r v i c e W o r k e r s " , 
         d i s a b l e d :   t r u e , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             g D e v T o o l s B r o w s e r . o p e n A b o u t D e b u g g i n g ( w i n d o w . g B r o w s e r ,   " w o r k e r s " ) ; 
         } 
     } , 
     {   i d :   " m e n u _ d e v t o o l s _ c o n n e c t " , 
         l 1 0 n K e y :   " d e v t o o l s C o n n e c t " , 
         d i s a b l e d :   t r u e , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             g D e v T o o l s B r o w s e r . o p e n C o n n e c t S c r e e n ( w i n d o w . g B r o w s e r ) ; 
         } 
     } , 
     {   s e p a r a t o r :   t r u e , 
         i d :   " d e v T o o l s E n d S e p a r a t o r " 
     } , 
     {   i d :   " g e t M o r e D e v t o o l s " , 
         l 1 0 n K e y :   " g e t M o r e D e v t o o l s C m d " , 
         o n c o m m a n d ( e v e n t )   { 
             l e t   w i n d o w   =   e v e n t . t a r g e t . o w n e r D o c u m e n t . d e f a u l t V i e w ; 
             w i n d o w . o p e n U I L i n k I n ( " h t t p s : / / a d d o n s . m o z i l l a . o r g / f i r e f o x / c o l l e c t i o n s / m o z i l l a / w e b d e v e l o p e r / " ,   " t a b " ) ; 
         } 
     } , 
 ] ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/menus.js     ï                           =   ;      =    : ¡    Q    5   5   =   H¡   Q;   ¸   
º=   	=   
C: ;   ¸   
º=   =   C: ;   ¸   
º=   =   C: ;   ¸   
º=   =   : ;   ¸   
º=   =   : ;   ¸   
º=   =   : ;   Z   [   =   ]   =   ]       ]   [   =   ]         æ=      æ=   æ]   C]    ]   !Z   [   =   "]   =   #]   `    ]   $C]   %`    [   =   &]   C]   '`   [   =   (]   =   )]   C]   *   ]   [   =   +]   =   ,]   ]   !C]   %`   [   
=   -]   =   .]   C]   *   ]   [   	=   .]   =   ,]   ]   !`   [   =   /]   =   0]   C]   *   ]   [   =   1]   =   2]   C]    ]   !`   [   =   3]   =   4]   C]   *   ]   `   [   =   5]   =   6]      ]   [   =   7]   =   ]   C]    ]   !`   [   =   8]   =   9]      ]   [   =   :]         æ=      æ=   æ]   C]    ]   !C]   %`   [   =   ;]   =   <]      ]   C]   %`   [   =   =]   =   >]      ]   [   =   >]   =   ,]   ]   !`   	[   =   ?]   =   @]   C]   *   ]   `   
[   =   A]   =   B]   C]   *   ]   `   [   C]   '=   C]   `   [   !=   D]   =   E]       ]   `   0   Ã$ÏÉÛ'ÜÜÜ+ÛÛÛ/ÊÊÊÊ6ÊÜ;Ë=ÊÔAËCÊËÊÊÊSÊÏWËYÊÊÊ_ÊÔdÊÊÊjÊÊÐpÊÊÏxÊÊÊ~ÊÊÐÊÊÊÊÜËËÊÊÊ  ËÊÊÊÊÔÊÊÏ  ±ÊÊÏ  ¹ÏÊÊÕ  Ã    Services   isMac   use strict   require   appinfo   OS   Darwin   loader#   lazyRequireGetter!   gDevToolsBrowserU   devtools/client/framework/devtools-browser   CommandUtilsQ   devtools/client/shared/developer-toolbar   TargetFactoryA   devtools/client/framework/target   lazyImporter+   BrowserToolboxProcesso   resource://devtools/client/framework/ToolboxProcess.jsm'   ResponsiveUIManager   resource://devtools/client/responsivedesign/responsivedesign.jsm#   ScratchpadManagery   resource://devtools/client/scratchpad/scratchpad-manager.jsm   exports   menuitems   menu_devToolbox   id%   devToolboxMenuItem   l10nKey   oncommand   accel,alt   accel,shift   modifiers   keytext   key+   devToolboxMenuItemF12   devToolsCmd   additionalKeys   checkbox/   menu_devtools_separator   separator   menu_devToolbar   devToolbarMenu   disabled   devToolbar   shift   menu_webide   webide'   menu_browserToolbox%   browserToolboxMenu   browserToolbox   accel,alt,shift5   menu_browserContentToolbox3   browserContentToolboxMenu'   menu_browserConsole#   browserConsoleCmd   browserConsole#   menu_responsiveUI)   responsiveDesignMode   responsiveUI   menu_eyedropper   eyedropper   menu_scratchpad   scratchpad9   menu_devtools_serviceworkers-   devtoolsServiceWorkers+   menu_devtools_connect   devtoolsConnect)   devToolsEndSeparator   getMoreDevtools%   getMoreDevtoolsCmd   ÿÿÿÿ      Services   isMac                     oncommand@ 8       ¹                                         §  2                   QT  5    5   5      Q;   ¸   
V   5   : QÉ
×Ú    target   ownerDocument   defaultView!   gDevToolsBrowser)   toggleToolboxCommand   gBrowser    ÿÿÿÿ      event                     window                1   ÿÿÿÿ¹    @                 id         modifiers         keytext                       id         l10nKey                       id         l10nKey         oncommand         key         additionalKeys         checkbox                       id         separator                    oncommand@ q       ¹   	                                    
  ^  H                   QT  5    5   5      QT  5    5   ¸   
:  =      æV   5   ¸   
:  Q   æV   5   ¸   
:  QæÉ
×MÔ
ÉÚÖR    target   ownerDocument   defaultView   tagName   toLowerCase   menuitem!   DeveloperToolbar   toggle   focusToggle    ÿÿÿÿ      event                     window                j   ÿÿÿÿ¹    @                 id         modifiers                       id         l10nKey         disabled         oncommand         key         checkbox                    oncommand@         ¹                                         
  9  \                 ;    ¸   
:  QÐ !   gDevToolsBrowser   openWebIDE    ÿÿÿÿ              ¹    @                 id         modifiers                       id         l10nKey         disabled         oncommand         key                    oncommand@         ¹                                         á    g                 ;    ¸   
:  QÐ +   BrowserToolboxProcess	   init    ÿÿÿÿ              ¹    @                 id         modifiers         keytext                       id         l10nKey         disabled         oncommand         key                    oncommand@ 8       ¹                                       ì  y  s                   QT  5    5   5      Q;   ¸   
V   5   : QÉ
×Ú    target   ownerDocument   defaultView!   gDevToolsBrowser3   openContentProcessToolbox   gBrowser    ÿÿÿÿ      event                     window                1   ÿÿÿÿ¹    @                 id         l10nKey         disabled         oncommand                    oncommand@  .       ¹                                        Í  N  z                   Q;        =   :    QV   ¸   
:  QÉ
ÏÈÐ    requireK   devtools/client/webconsole/hudservice3   openBrowserConsoleOrFocus    ÿÿÿÿ                           HUDService                '   ÿÿÿÿ¹    @                 id         modifiers         keytext                       id         l10nKey         oncommand         key                    oncommand@ A       ¹                                                              QT  5    5   5      Q;   ¸   
V   V   5   5   : QÉ
×ã    target   ownerDocument   defaultView'   ResponsiveUIManager   toggle   gBrowser   selectedTab    ÿÿÿÿ      event                     window                :   ÿÿÿÿ¹    @                 id         modifiers         keytext                       id         l10nKey         oncommand         key         checkbox                    oncommand@        ¹      9                                i  à            
            QT  5    5   5      Q;   ¸   
V   5   5   :   Q;   ¸   
V  [   ;   ¸   	
[    V  ]    : ]   
: ¸   
      : QÉÊ
×
Ú	ÈÕÑ-ÉÿÿÿàÈ  Ê        target   ownerDocument   defaultView   TargetFactory   forTab   gBrowser   selectedTab   CommandUtils#   createRequisition#   createEnvironment   environment	   then    ÿÿÿÿ      event                     window   target                          target                       environment                   oncommand/<e         ¹                                        p  Á                   T  ¸    
=   : QÓ    updateExec+   eyedropper --frommenu    ÿÿÿÿ      requisition        ¹    @             oncommand/<u         ¹                                        Ã  Ø     	              ;    ¸   
T  : Ò    console   error    ÿÿÿÿ      e        ¹    @    
      ÿÿÿÿ                id         l10nKey         oncommand         checkbox                    oncommand@         ¹                                         =  q  ¡                 ;    ¸   
:  QÐ #   ScratchpadManager   openScratchpad    ÿÿÿÿ              ¹    @                 id         modifiers                       id         l10nKey         oncommand         key                    oncommand@ =       ¹                                       *  »  ¬                   QT  5    5   5      Q;   ¸   
V   5   =   : QÉ
×ß    target   ownerDocument   defaultView!   gDevToolsBrowser%   openAboutDebugging   gBrowser   workers    ÿÿÿÿ      event                     window                6   ÿÿÿÿ¹    @                 id         l10nKey         disabled         oncommand                    oncommand@ 8       ¹                                       #  ¨  ´                   QT  5    5   5      Q;   ¸   
V   5   : QÉ
×Ú    target   ownerDocument   defaultView!   gDevToolsBrowser#   openConnectScreen   gBrowser    ÿÿÿÿ      event                     window                1   ÿÿÿÿ¹    @                 id         l10nKey         disabled         oncommand                       separator         id                    oncommand@ 8       ¹                                       2  æ  ¾                   QT  5    5   5      QV   ¸   
=   =   : QÉ
×Ú    target   ownerDocument   defaultView   openUILinkIn   https://addons.mozilla.org/firefox/collections/mozilla/webdeveloper/   tab    ÿÿÿÿ      event                     window                1   ÿÿÿÿ¹    @                 id         l10nKey         oncommand       