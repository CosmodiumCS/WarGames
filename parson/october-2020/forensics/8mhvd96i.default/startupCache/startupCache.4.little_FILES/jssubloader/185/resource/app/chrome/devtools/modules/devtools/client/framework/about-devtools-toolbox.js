   20170118123726Ñ  -   ¹   $   o                         (       `  H       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 / /   R e g i s t e r   a b o u t : d e v t o o l s - t o o l b o x   w h i c h   a l l o w s   t o   o p e n   a   d e v t o o l s   t o o l b o x 
 / /   i n   a   F i r e f o x   t a b   o r   a   c u s t o m   h t m l   i f r a m e   i n   b r o w s e r . h t m l 
 
 c o n s t   {   C i ,   C u ,   C m ,   c o m p o n e n t s   }   =   r e q u i r e ( " c h r o m e " ) ; 
 c o n s t   r e g i s t r a r   =   C m . Q u e r y I n t e r f a c e ( C i . n s I C o m p o n e n t R e g i s t r a r ) ; 
 c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 c o n s t   {   X P C O M U t i l s   }   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / X P C O M U t i l s . j s m " ,   { } ) ; 
 c o n s t   {   n s I A b o u t M o d u l e   }   =   C i ; 
 
 f u n c t i o n   A b o u t U R L ( )   { } 
 
 A b o u t U R L . p r o t o t y p e   =   { 
     u r i :   S e r v i c e s . i o . n e w U R I ( " c h r o m e : / / d e v t o o l s / c o n t e n t / f r a m e w o r k / t o o l b o x . x u l " , 
                                                     n u l l ,   n u l l ) , 
     c l a s s D e s c r i p t i o n :   " a b o u t : d e v t o o l s - t o o l b o x " , 
     c l a s s I D :   c o m p o n e n t s . I D ( " 1 1 3 4 2 9 1 1 - 3 1 3 5 - 4 5 a 8 - 8 d 7 1 - 7 3 7 a 2 b 0 a d 4 6 9 " ) , 
     c o n t r a c t I D :   " @ m o z i l l a . o r g / n e t w o r k / p r o t o c o l / a b o u t ; 1 ? w h a t = d e v t o o l s - t o o l b o x " , 
 
     Q u e r y I n t e r f a c e :   X P C O M U t i l s . g e n e r a t e Q I ( [ n s I A b o u t M o d u l e ] ) , 
 
     n e w C h a n n e l :   f u n c t i o n   ( a U R I ,   a L o a d I n f o )   { 
         l e t   c h a n   =   S e r v i c e s . i o . n e w C h a n n e l F r o m U R I W i t h L o a d I n f o ( t h i s . u r i ,   a L o a d I n f o ) ; 
         c h a n . o w n e r   =   S e r v i c e s . s c r i p t S e c u r i t y M a n a g e r . g e t S y s t e m P r i n c i p a l ( ) ; 
         r e t u r n   c h a n ; 
     } , 
 
     g e t U R I F l a g s :   f u n c t i o n   ( a U R I )   { 
         r e t u r n   n s I A b o u t M o d u l e . A L L O W _ S C R I P T   | |   n s I A b o u t M o d u l e . E N A B L E _ I N D E X E D _ D B ; 
     } 
 } ; 
 
 A b o u t U R L . c r e a t e I n s t a n c e   =   f u n c t i o n   ( o u t e r ,   i i d )   { 
     i f   ( o u t e r )   { 
         t h r o w   C r . N S _ E R R O R _ N O _ A G G R E G A T I O N ; 
     } 
     r e t u r n   n e w   A b o u t U R L ( ) ; 
 } ; 
 
 e x p o r t s . r e g i s t e r   =   f u n c t i o n   ( )   { 
     i f   ( r e g i s t r a r . i s C I D R e g i s t e r e d ( A b o u t U R L . p r o t o t y p e . c l a s s I D ) )   { 
         c o n s o l e . e r r o r ( " T r y i n g   t o   r e g i s t e r   "   +   A b o u t U R L . p r o t o t y p e . c l a s s D e s c r i p t i o n   + 
                                     "   m o r e   t h a n   o n c e . " ) ; 
     }   e l s e   { 
         r e g i s t r a r . r e g i s t e r F a c t o r y ( A b o u t U R L . p r o t o t y p e . c l a s s I D , 
                                               A b o u t U R L . p r o t o t y p e . c l a s s D e s c r i p t i o n , 
                                               A b o u t U R L . p r o t o t y p e . c o n t r a c t I D , 
                                               A b o u t U R L ) ; 
     } 
 } ; 
 
 e x p o r t s . u n r e g i s t e r   =   f u n c t i o n   ( )   { 
     i f   ( r e g i s t r a r . i s C I D R e g i s t e r e d ( A b o u t U R L . p r o t o t y p e . c l a s s I D ) )   { 
         r e g i s t r a r . u n r e g i s t e r F a c t o r y ( A b o u t U R L . p r o t o t y p e . c l a s s I D ,   A b o u t U R L ) ; 
     } 
 } ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/framework/about-devtools-toolbox.js     H                                                =   ;   	   	=   
:    : Q5    ¡    Q5   ¡   Q5   ¡   Q5   ¡   QQ   ž   
    5   : ¡   Q;   	   	=   : ¡   Q   ž   
=   [    :    : Q5   ¡   QQ       : Q5   ¡   QQ   [      5   ž   
=   @@: ]   =   ]      ž   
=   : ]   =   ]      ž   
Z      `    : ]      ]      ]   0         0    ;   !   0   ";   !   0   #í	
ÏÿÖÉÏÉÖÝßÊÖÈÊÑ	ÈÊÑ'ÊÿÿÿéÈÊ!Ð&Ð-Ð9Ð=    Ci   Cu   Cm   components   registrar   Services   XPCOMUtils   nsIAboutModule   use strict   require   chrome-   RequireObjectCoercible   QueryInterface+   nsIComponentRegistrar   importK   resource://gre/modules/XPCOMUtils.jsm   AboutURL   prototype   io   newURI_   chrome://devtools/content/framework/toolbox.xul   uri-   about:devtools-toolbox!   classDescription   IDI   11342911-3135-45a8-8d71-737a2b0ad469   classIDw   @mozilla.org/network/protocol/about;1?what=devtools-toolbox   contractID   generateQI   newChannel   getURIFlags   createInstance   exports   register   unregister   ÿÿÿÿ	      AboutURL   Ci   Cu   Cm   components   registrar   Services   XPCOMUtils   nsIAboutModule                                  AboutURL          ¹                                                                      ÿÿÿÿ              ¹    @           ;   AboutURL.prototype.newChannelc  X      ¹                               	       #  à                  ¹W   Q  Q;    5   ž   
V   5   T :   QV  ;    5   ž   
:  0   QV  ÉÉÝÈÕÉ    Services   io;   newChannelFromURIWithLoadInfo   uri   owner+   scriptSecurityManager%   getSystemPrincipal    ÿÿÿÿ   	   aURI   aLoadInfo   .this                 	   chan               K   ÿÿÿÿ    U          ¹    @           =   AboutURL.prototype.getURIFlagsc         ¹                                        û  S  !                 ;    5   D   æQ;    5   æÜ    nsIAboutModule   ALLOW_SCRIPT#   ENABLE_INDEXED_DB    ÿÿÿÿ   	   aURI        ¹    @                 uri      !   classDescription         classID         contractID         QueryInterface         newChannel         getURIFlags                 /   AboutURL.createInstancec  $       ¹                                        {  Ý  &   #              T     æ;    5   pæ;   A,  R  Ì*Ê    Cr/   NS_ERROR_NO_AGGREGATION   AboutURL    ÿÿÿÿ      outer   iid        ¹    @           !   exports.registerc          ¹      "                                   ü    -                 ;    ž   
;   5   5   :    6æ;   ž   
=   ;   5   5   =   	: Q   Hæ;    ž   

;   5   5   ;   5   5   ;   5   5   ;   : QæÛ1á/Ê1ÛÏÏ27    registrar   isCIDRegistered   AboutURL   prototype   classID   console   error'   Trying to register !   classDescription!    more than once.   registerFactory   contractID    ÿÿÿÿ              ¹    @           %   exports.unregisterc   J       ¹                                         ¶  F  9                 ;    ž   
;   5   5   :    *æ;    ž   
;   5   5   ;   : QæÛå=    registrar   isCIDRegistered   AboutURL   prototype   classID#   unregisterFactory    ÿÿÿÿ              ¹    @ 