   20170118123726ĺ   (   š      V                                `  Y       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 " u s e   s t r i c t " ; 
 
 m o d u l e . m e t a d a t a   =   { 
     " s t a b i l i t y " :   " u n s t a b l e " 
 } ; 
 
 c o n s t   {   f l a t t e n   }   =   r e q u i r e ( ' . / a r r a y ' ) ; 
 
 / * * 
   *   M e r g e s   a l l   t h e   p r o p e r t i e s   o f   a l l   a r g u m e n t s   i n t o   f i r s t   a r g u m e n t .   I f   t w o   o r 
   *   m o r e   a r g u m e n t   o b j e c t s   h a v e   o w n   p r o p e r t i e s   w i t h   t h e   s a m e   n a m e ,   t h e   p r o p e r t y 
   *   i s   o v e r r i d d e n ,   w i t h   p r e c e d e n c e   f r o m   r i g h t   t o   l e f t ,   i m p l y i n g ,   t h a t   p r o p e r t i e s 
   *   o f   t h e   o b j e c t   o n   t h e   l e f t   a r e   o v e r r i d d e n   b y   a   s a m e   n a m e d   p r o p e r t y   o f   t h e 
   *   o b j e c t   o n   t h e   r i g h t . 
   * 
   *   A n y   a r g u m e n t   g i v e n   w i t h   " f a l s y "   v a l u e   -   c o m m o n l y   ` n u l l `   a n d   ` u n d e f i n e d `   i n 
   *   c a s e   o f   o b j e c t s   -   a r e   s k i p p e d . 
   * 
   *   @ e x a m p l e s 
   *         v a r   a   =   {   b a r :   0 ,   a :   ' a '   } 
   *         v a r   b   =   m e r g e ( a ,   {   f o o :   ' f o o ' ,   b a r :   1   } ,   {   f o o :   ' b a r ' ,   n a m e :   ' b '   } ) ; 
   *         b   = = =   a       / /   t r u e 
   *         b . a               / /   ' a ' 
   *         b . f o o           / /   ' b a r ' 
   *         b . b a r           / /   1 
   *         b . n a m e         / /   ' b ' 
   * / 
 f u n c t i o n   m e r g e ( s o u r c e )   { 
     l e t   d e s c r i p t o r   =   { } ; 
 
     / /   ` B o o l e a n `   c o n v e r t s   t h e   f i r s t   p a r a m e t e r   t o   a   b o o l e a n   v a l u e .   A n y   o b j e c t   i s 
     / /   c o n v e r t e d   t o   ` t r u e `   w h e r e   ` n u l l `   a n d   ` u n d e f i n e d `   b e c a m e s   ` f a l s e ` .   T h e r e f o r e 
     / /   t h e   ` f i l t e r `   m e t h o d   w i l l   k e e p   o n l y   o b j e c t s   t h a t   a r e   d e f i n e d   a n d   n o t   n u l l . 
     A r r a y . s l i c e ( a r g u m e n t s ,   1 ) . f i l t e r ( B o o l e a n ) . f o r E a c h ( f u n c t i o n   o n E a c h ( p r o p e r t i e s )   { 
         g e t O w n P r o p e r t y I d e n t i f i e r s ( p r o p e r t i e s ) . f o r E a c h ( f u n c t i o n ( n a m e )   { 
             d e s c r i p t o r [ n a m e ]   =   O b j e c t . g e t O w n P r o p e r t y D e s c r i p t o r ( p r o p e r t i e s ,   n a m e ) ; 
         } ) ; 
     } ) ; 
     r e t u r n   O b j e c t . d e f i n e P r o p e r t i e s ( s o u r c e ,   d e s c r i p t o r ) ; 
 } 
 e x p o r t s . m e r g e   =   m e r g e ; 
 
 / * * 
   *   R e t u r n s   a n   o b j e c t   t h a t   i n h e r i t s   f r o m   t h e   f i r s t   a r g u m e n t   a n d   c o n t a i n s   a l l   t h e 
   *   p r o p e r t i e s   f r o m   a l l   f o l l o w i n g   a r g u m e n t s . 
   *   ` e x t e n d ( s o u r c e 1 ,   s o u r c e 2 ,   s o u r c e 3 ) `   i s   e q u i v a l e n t   o f 
   *   ` m e r g e ( O b j e c t . c r e a t e ( s o u r c e 1 ) ,   s o u r c e 2 ,   s o u r c e 3 ) ` . 
   * / 
 f u n c t i o n   e x t e n d ( s o u r c e )   { 
     l e t   r e s t   =   A r r a y . s l i c e ( a r g u m e n t s ,   1 ) ; 
     r e s t . u n s h i f t ( O b j e c t . c r e a t e ( s o u r c e ) ) ; 
     r e t u r n   m e r g e . a p p l y ( n u l l ,   r e s t ) ; 
 } 
 e x p o r t s . e x t e n d   =   e x t e n d ; 
 
 f u n c t i o n   h a s ( o b j ,   k e y )   { 
     r e t u r n   o b j . h a s O w n P r o p e r t y ( k e y ) ; 
 } 
 e x p o r t s . h a s   =   h a s ; 
 
 f u n c t i o n   e a c h ( o b j ,   f n )   { 
     f o r   ( l e t   k e y   i n   o b j )   h a s ( o b j ,   k e y )   & &   f n ( o b j [ k e y ] ,   k e y ,   o b j ) ; 
 } 
 e x p o r t s . e a c h   =   e a c h ; 
 
 / * * 
   *   L i k e   ` m e r g e ` ,   e x c e p t   n o   p r o p e r t y   d e s c r i p t o r s   a r e   m a n i p u l a t e d ,   f o r   u s e 
   *   w i t h   p l a t f o r m   o b j e c t s .   I d e n t i c a l   t o   u n d e r s c o r e ' s   ` e x t e n d ` .   U s e f u l   f o r 
   *   m e r g i n g   X P C O M   o b j e c t s 
   * / 
 f u n c t i o n   s a f e M e r g e ( s o u r c e )   { 
     A r r a y . s l i c e ( a r g u m e n t s ,   1 ) . f o r E a c h ( f u n c t i o n   o n E a c h   ( o b j )   { 
         f o r   ( l e t   p r o p   i n   o b j )   s o u r c e [ p r o p ]   =   o b j [ p r o p ] ; 
     } ) ; 
     r e t u r n   s o u r c e ; 
 } 
 e x p o r t s . s a f e M e r g e   =   s a f e M e r g e ; 
 
 / * 
   *   R e t u r n s   a   c o p y   o f   t h e   o b j e c t   w i t h o u t   o m i t t e d   p r o p e r t i e s 
   * / 
 f u n c t i o n   o m i t ( s o u r c e ,   . . . v a l u e s )   { 
     l e t   c o p y   =   { } ; 
     l e t   k e y s   =   f l a t t e n ( v a l u e s ) ; 
     f o r   ( l e t   p r o p   i n   s o u r c e ) 
         i f   ( ! ~ k e y s . i n d e x O f ( p r o p ) ) 
             c o p y [ p r o p ]   =   s o u r c e [ p r o p ] ; 
     r e t u r n   c o p y ; 
 } 
 e x p o r t s . o m i t   =   o m i t ; 
 
 / /   g e t   o b j e c t ' s   o w n   p r o p e r t y   S y m b o l s   a n d / o r   N a m e s ,   i n c l u d i n g   n o n E n u m e r a b l e s   b y   d e f a u l t 
 f u n c t i o n   g e t O w n P r o p e r t y I d e n t i f i e r s ( o b j e c t ,   o p t i o n s   =   {   n a m e s :   t r u e ,   s y m b o l s :   t r u e ,   n o n E n u m e r a b l e s :   t r u e   } )   { 
     c o n s t   s y m b o l s   =   ! o p t i o n s . s y m b o l s   ?   [ ]   : 
                                     O b j e c t . g e t O w n P r o p e r t y S y m b o l s ( o b j e c t ) ; 
     c o n s t   n a m e s   =   ! o p t i o n s . n a m e s   ?   [ ]   : 
                                 o p t i o n s . n o n E n u m e r a b l e s   ?   O b j e c t . g e t O w n P r o p e r t y N a m e s ( o b j e c t )   : 
                                 O b j e c t . k e y s ( o b j e c t ) ; 
     r e t u r n   [ . . . n a m e s ,   . . . s y m b o l s ] ; 
 } 
 e x p o r t s . g e t O w n P r o p e r t y I d e n t i f i e r s   =   g e t O w n P r o p e r t y I d e n t i f i e r s ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/util/object.js     Y                                             =   ;   [    =   ]   0   ;      =   :    : Q5    Ą    QQ;   	   
0   
;   	   0   ;   	   0   ;   	   0   ;   	   0   ;   	   0   ;   	   0   Ę	4	;	@	J	U	`	ĘĐ
ĎÝ,Đ49Đ;>Đ@CĐJPĐU]Đ`hĐ>    flatten   use strict   module   metadata   unstable   stability   require   ./array-   RequireObjectCoercible   exports   merge   extend   has	   each   safeMerge	   omit3   getOwnPropertyIdentifiers   ˙˙˙˙      merge   extend   has	   each   safeMerge	   omit3   getOwnPropertyIdentifiers   flatten                      stability                    merge  e      š                                    "  ˙  6                   	W   QÇ   [       Q;    ¸   
V   ?: ¸   
;   : ¸   
   : Q;   ¸   
T     : ČČË%ó*Ô    Array   slice   filter   Boolean   forEach   Object!   defineProperties    ˙˙˙˙      source   arguments                    descriptor                                    onEachC  #       š      	                                 S  ü  %                 ;           : ¸   
    : Qâ) 3   getOwnPropertyIdentifiers   forEach   ˙˙˙˙      onEach                        properties                   onEach/<c  '       š      
                                    ö  &   :                  T  ;    ¸   
   T  : 9Qá    Object1   getOwnPropertyDescriptor    ˙˙˙˙   	   name        š    @       Y   ˙˙˙˙    b                       extend  _      š                                     "  P  Í  4                	W   Q  Q;    ¸   
V   ?:   QV  ¸   
;   ¸   
T  : : Q;   ¸   
@V  O ÉÉŃČÚ˙˙˙óŃ    Array   slice   unshift   Object   create   merge   apply    ˙˙˙˙      source   arguments                 	   rest               R   ˙˙˙˙    \          š    @              has         š                                        ô  $  ;                 T  ¸    
T : Í    hasOwnProperty    ˙˙˙˙      obj   key        š    @           	   each  ^       š                                      F    @                   QT  K   Cm   Q   ;        T  V   : E   ćQT T  V   7V   T  : ćQăQLM˙˙˙˝ćQNÉĚ0HĚîÓ    has    ˙˙˙˙      obj   fn                     key                J         W   ˙˙˙˙š    @              safeMerge  1      š      
                               2  o	  
  J                 	W   Q;    ¸   
V   ?: ¸   
    : Q   äN    Array   slice   forEach    ˙˙˙˙      source   arguments                   onEachC  >       š                                       Ž	  í	  K   4               QT  K   #m   Q      V   T  V   79QăQLM˙˙˙ÝćQNÉĚ0(Ě	á    ˙˙˙˙      onEach                        obj                 	   prop                *         7   ˙˙˙˙š    @           	   omit        š      %                               r
  !  U         	       ŕU Q     Q[       Q;        T :   Q  QT  K   =m  Q  V  ¸   
V  : !    ćV   V  T  V  79QćăQLM˙˙˙ĂćQNÉV   ÉÉĘĘÍČĚ0BĚĎá    flatten   indexOf    ˙˙˙˙      source   values                  	   copy	   keys                   	   prop                           ?   D         ~   ˙˙˙˙   4   Q                     š    @           3   getOwnPropertyIdentifiers  `      š   
   @                              ą    `   "                  QT     QT H   ćQ[    C]    C]   C]   ć  Q    QV  5       ćZ       ć;   ¸   
V   : ć  QV  5        ćZ       AćV  5      ć;   ¸   
V   :    ć;   ¸   
V   : ć  QZ    >V  -Á
     m5   _ă,  ¸   
:   5   	˙˙˙áć V  -Á
     m5   _ă,  ¸   
:   5   	˙˙˙áć QÉÉŘĚ7ĚĘ
ĘŃĐÉĘŃÉÖ)ÉĐÉĐ8$ď
Đ8$đ    names   symbols   nonEnumerables   Object+   getOwnPropertySymbols'   getOwnPropertyNames	   keys   value	   next	   done    ˙˙˙˙      object   options                   symbols   names                   symbols   names                          names         symbols         nonEnumerables          0  $      ń   $      <   Ă˙˙˙˙˙˙˙   F            ]        š    @ 