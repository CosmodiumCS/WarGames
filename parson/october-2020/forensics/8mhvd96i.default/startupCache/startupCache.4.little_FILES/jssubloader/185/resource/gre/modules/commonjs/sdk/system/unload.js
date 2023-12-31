   20170118123726m  2   ¹      W       	                             Ø
       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 / /   P a r t s   o f   t h i s   m o d u l e   w e r e   t a k e n   f r o m   n a r w h a l : 
 / / 
 / /   h t t p : / / n a r w h a l j s . o r g 
 
 m o d u l e . m e t a d a t a   =   { 
     " s t a b i l i t y " :   " e x p e r i m e n t a l " 
 } ; 
 
 c o n s t   {   C u   }   =   r e q u i r e ( ' c h r o m e ' ) ; 
 c o n s t   {   o n ,   o f f   }   =   r e q u i r e ( ' . / e v e n t s ' ) ; 
 c o n s t   u n l o a d S u b j e c t   =   r e q u i r e ( ' @ l o a d e r / u n l o a d ' ) ; 
 
 c o n s t   o b s e r v e r s   =   [ ] ; 
 c o n s t   u n l o a d e r s   =   [ ] ; 
 
 f u n c t i o n   W e a k O b s e r v e r ( i n n e r )   { 
     t h i s . _ i n n e r   =   C u . g e t W e a k R e f e r e n c e ( i n n e r ) ; 
 } 
 
 O b j e c t . d e f i n e P r o p e r t y ( W e a k O b s e r v e r . p r o t o t y p e ,   ' v a l u e ' ,   { 
     g e t :   f u n c t i o n ( )   {   t h i s . _ i n n e r . g e t ( )   } 
 } ) ; 
 
 v a r   w h e n   =   e x p o r t s . w h e n   =   f u n c t i o n   w h e n ( o b s e r v e r ,   o p t s )   { 
     o p t s   =   o p t s   | |   { } ; 
     f o r   ( v a r   i   =   0 ;   i   <   o b s e r v e r s . l e n g t h ;   + + i )   { 
         i f   ( o b s e r v e r s [ i ]   = = =   o b s e r v e r   | |   o b s e r v e r s [ i ] . v a l u e   = = =   o b s e r v e r )   { 
             r e t u r n ; 
         } 
     } 
     i f   ( o p t s . w e a k )   { 
         o b s e r v e r s . u n s h i f t ( n e w   W e a k O b s e r v e r ( o b s e r v e r ) ) ; 
     }   e l s e   { 
         o b s e r v e r s . u n s h i f t ( o b s e r v e r ) ; 
     } 
 } ; 
 
 v a r   e n s u r e   =   e x p o r t s . e n s u r e   =   f u n c t i o n   e n s u r e ( o b j ,   d e s t r u c t o r N a m e )   { 
     i f   ( ! d e s t r u c t o r N a m e ) 
         d e s t r u c t o r N a m e   =   " u n l o a d " ; 
     i f   ( ! ( d e s t r u c t o r N a m e   i n   o b j ) ) 
         t h r o w   n e w   E r r o r ( " o b j e c t   h a s   n o   ' "   +   d e s t r u c t o r N a m e   +   " '   p r o p e r t y " ) ; 
 
     l e t   c a l l e d   =   f a l s e ; 
     l e t   o r i g i n a l D e s t r u c t o r   =   o b j [ d e s t r u c t o r N a m e ] ; 
 
     f u n c t i o n   u n l o a d W r a p p e r ( r e a s o n )   { 
         i f   ( ! c a l l e d )   { 
             c a l l e d   =   t r u e ; 
             l e t   i n d e x   =   u n l o a d e r s . i n d e x O f ( u n l o a d W r a p p e r ) ; 
             i f   ( i n d e x   = =   - 1 ) 
                 t h r o w   n e w   E r r o r ( " i n t e r n a l   e r r o r :   u n l o a d e r   n o t   f o u n d " ) ; 
             u n l o a d e r s . s p l i c e ( i n d e x ,   1 ) ; 
             o r i g i n a l D e s t r u c t o r . c a l l ( o b j ,   r e a s o n ) ; 
             o r i g i n a l D e s t r u c t o r   =   n u l l ; 
             d e s t r u c t o r N a m e   =   n u l l ; 
             o b j   =   n u l l ; 
         } 
     } ; 
 
     / /   T O D O :   F i n d   o u t   w h y   t h e   o r d e r   i s   i n v e r t e d   h e r e .   I t   s e e m s   t h a t 
     / /   i t   m a y   b e   c a u s i n g   i s s u e s ! 
     u n l o a d e r s . p u s h ( u n l o a d W r a p p e r ) ; 
 
     o b j [ d e s t r u c t o r N a m e ]   =   u n l o a d W r a p p e r ; 
 } ; 
 
 f u n c t i o n   u n l o a d ( r e a s o n )   { 
     o b s e r v e r s . f o r E a c h ( f u n c t i o n ( o b s e r v e r )   { 
         t r y   { 
             i f   ( o b s e r v e r   i n s t a n c e o f   W e a k O b s e r v e r )   { 
                 o b s e r v e r   =   o b s e r v e r . v a l u e ; 
             } 
             i f   ( t y p e o f   o b s e r v e r   = = =   ' f u n c t i o n ' )   { 
                 o b s e r v e r ( r e a s o n ) ; 
             } 
         } 
         c a t c h   ( e r r o r )   { 
             c o n s o l e . e x c e p t i o n ( e r r o r ) ; 
         } 
     } ) ; 
 } 
 
 w h e n ( f u n c t i o n ( r e a s o n )   { 
     u n l o a d e r s . s l i c e ( ) . f o r E a c h ( f u n c t i o n ( u n l o a d W r a p p e r )   { 
         u n l o a d W r a p p e r ( r e a s o n ) ; 
     } ) ; 
 } ) ; 
 
 o n ( ' s d k : l o a d e r : d e s t r o y ' ,   f u n c t i o n   o n u n l o a d ( {   s u b j e c t ,   d a t a :   r e a s o n   } )   { 
     / /   I f   t h i s   l o a d e r   i s   u n l o a d   t h e n   ` s u b j e c t . w r a p p e d J S O b j e c t `   w i l l   b e 
     / /   ` d e s t r u c t o r ` . 
     i f   ( s u b j e c t . w r a p p e d J S O b j e c t   = = =   u n l o a d S u b j e c t )   { 
         o f f ( ' s d k : l o a d e r : d e s t r o y ' ,   o n u n l o a d ) ; 
         u n l o a d ( r e a s o n ) ; 
     } 
 / /   N o t e   t h a t   w e   u s e   s t r o n g   r e f e r e n c e   t o   l i s t e n e r   h e r e   t o   m a k e   s u r e   i t ' s   n o t 
 / /   G C - e d ,   w h i c h   m a y   h a p p e n   o t h e r w i s e   s i n c e   n o t h i n g   k e e p s   r e f e r e n c e   t o   ` o n u n o l a d ` 
 / /   f u n c t i o n . 
 } ,   t r u e ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/system/unload.js     Ø
                                                   ;   [    =   
]   6   	;      =   :    : Q5   ¡   QQ;      =   :    : Q5   ¡   Q5   ¡   QQ;      =   : ¡   QZ    ¡   QZ    ¡   Q;   ¸   
   5   =   [      ]   : Ö    ;      6        QÖ   ;      6      Q           :       =      C: í	H		ÊÐÏ	ÝÏéÏÉËËàÊÚ*ÚHXÓ^Ôh^h	 	   when   ensure   Cu   on   off   unloadSubject   observers   unloaders   module   metadata   experimental   stability   require   chrome-   RequireObjectCoercible   ./events   @loader/unload   Object   defineProperty   WeakObserver   prototype   value   get   exports%   sdk:loader:destroy   ÿÿÿÿ
      WeakObserver   unload	   when   ensure   Cu   on   off   unloadSubject   observers   unloaders                      stability                    WeakObserver  #      ¹      	                                   G                  ¹W   QV   ;   ¸   
T  : 6    QÓÉ    _inner   Cu!   getWeakReference    ÿÿÿÿ      inner   .this       ¹                	   .getc         ¹                                          ©                  ¹W   QV   5    ¸   
:  QÔ    _inner   get    ÿÿÿÿ      .this         ¹                      get                 	   whenC  ¿       ¹      ?                                Ö       '            T D   æQ[    æU Q>W   Q    Dm;    V   7T  HD   æQ;    V   75   T  Hæ   ææV   #?W   QãV   ;    Ù   ÿÿÿ°æT 5      +æ;    ¸   
;   AT  ,  R : Q   æ;    ¸   
T  : QæÔ&D7Ué((Ì ×#È&ÙÿÿÿîÊÔ(    observers   value   length	   weak   unshift   WeakObserver   ÿÿÿÿ   	   when                        observer	   opts   i                              U   ¹                   ensureC         ¹      0                                4  \  *                 Ç         Q      æ=      Qæ    q    %æ;   A=     =   ,  R pæB   Q    7   Q;   ¸   
  : Q      8QÈ3Ë+ÌÌÛ0Ñ3?CÕEÒ    unload   Error   object has no '   ' property   unloaders	   push   ÿÿÿÿ      ensure                        obj   destructorName   unloadWrapper                   called%   originalDestructor                       unloadWrapper  §       ¹      /                                 J  ®  3                          æ   QC      Q;    ¸   
  :    QV   ×ÿ   æ;   A=   ,  R pæ;    ¸   
V   ?: Q      ¸   
  T  l Q@   Q@  Q@  QÉæËÌ
ÑÈÏÕÝÉ?    unloaders   indexOf   ErrorE   internal error: unloader not found   splice	   call    ÿÿÿÿ      reason                     index                   ÿÿÿÿ¹               ÿÿÿÿ             unload         ¹                                       n    H                  ;    ¸   
    : QÕV    observers   forEach    ÿÿÿÿ      reason                    unload/<c  l       ¹                                           I                T  ;    r   æT  5   U  QæT  '=   H   æT     : Qæ   /æ   Qv   Q;   ¸   
V   : QÉ    æ;ÉÍN
ÊÖRÌÜU    WeakObserver   value   function   console   exception    ÿÿÿÿ      observer                     error                  ?      I      ÿÿÿÿ¹                 C          ¹                                       ©  	  X                  ;    ¸   
:  ¸   
    : Qß\    unloaders   slice   forEach    ÿÿÿÿ      reason                  C         ¹                                         Ø  	  Y   $              T     : QÍ     ÿÿÿÿ      unloadWrapper        ¹                   onunloadC  d       ¹                                
         :	  Ï
  ^                T      : Q5   W   Q5   W  QQV   5      H   ,æ      =   : Q      V  : QæçaÏÔÓh -   RequireObjectCoercible   subject	   data   wrappedJSObject   unloadSubject   off%   sdk:loader:destroy   unload   ÿÿÿÿ      onunload                         subject   reason       