   20170118123726       ¹                                      `  ¥       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 / /   A   f e w   w r a p p e r s   f o r   s t a c k - m a n i p u l a t i o n .     T h i s   v e r s i o n   o f   t h e   m o d u l e 
 / /   i s   u s e d   i n   c h r o m e   c o d e . 
 
 " u s e   s t r i c t " ; 
 
 ( f u n c t i o n   ( f a c t o r y )   { 
     / /   T h i s   f i l e   m i g h t   b e   r e q u i r e ( ) d ,   b u t   m i g h t   a l s o   b e   l o a d e d   v i a 
     / /   C u . i m p o r t .     A c c o u n t   f o r   t h e   d i f f e r e n c e s   h e r e . 
     i f   ( t h i s . m o d u l e   & &   m o d u l e . i d . i n d e x O f ( " s t a c k " )   > =   0 )   { 
         / /   r e q u i r e . 
         c o n s t   { c o m p o n e n t s ,   C u }   =   r e q u i r e ( " c h r o m e " ) ; 
         f a c t o r y . c a l l ( t h i s ,   c o m p o n e n t s ,   C u ,   e x p o r t s ) ; 
     }   e l s e   { 
         / /   C u . i m p o r t . 
         t h i s . i s W o r k e r   =   f a l s e ; 
         f a c t o r y . c a l l ( t h i s ,   C o m p o n e n t s ,   C o m p o n e n t s . u t i l s ,   t h i s ) ; 
         t h i s . E X P O R T E D _ S Y M B O L S   =   [ " c a l l F u n c t i o n W i t h A s y n c S t a c k " ,   " d e s c r i b e N t h C a l l e r " , 
                                                           " g e t S t a c k " ] ; 
     } 
 } ) . c a l l ( t h i s ,   f u n c t i o n   ( c o m p o n e n t s ,   C u ,   e x p o r t s )   { 
     / * * 
       *   R e t u r n   a   d e s c r i p t i o n   o f   t h e   N t h   c a l l e r ,   s u i t a b l e   f o r   l o g g i n g . 
       * 
       *   @ p a r a m   { N u m b e r }   n   t h e   c a l l e r   t o   d e s c r i b e 
       *   @ r e t u r n   { S t r i n g }   a   d e s c r i p t i o n   o f   t h e   n t h   c a l l e r . 
       * / 
     f u n c t i o n   d e s c r i b e N t h C a l l e r ( n )   { 
         i f   ( i s W o r k e r )   { 
             r e t u r n   " " ; 
         } 
 
         l e t   c a l l e r   =   c o m p o n e n t s . s t a c k ; 
         / /   D o   o n e   e x t r a   i t e r a t i o n   t o   s k i p   t h i s   f u n c t i o n . 
         w h i l e   ( n   > =   0 )   { 
             - - n ; 
             c a l l e r   =   c a l l e r . c a l l e r ; 
         } 
 
         l e t   f u n c   =   c a l l e r . n a m e ; 
         l e t   f i l e   =   c a l l e r . f i l e n a m e ; 
         i f   ( f i l e . i n c l u d e s ( "   - >   " ) )   { 
             f i l e   =   c a l l e r . f i l e n a m e . s p l i t ( /   - >   / ) [ 1 ] ; 
         } 
         l e t   p a t h   =   f i l e   +   " : "   +   c a l l e r . l i n e N u m b e r ; 
 
         r e t u r n   f u n c   +   " ( )   - >   "   +   p a t h ; 
     } 
 
     / * * 
       *   R e t u r n   a   s t a c k   o b j e c t   t h a t   c a n   b e   s e r i a l i z e d   a n d ,   w h e n 
       *   d e s e r i a l i z e d ,   p a s s e d   t o   c a l l F u n c t i o n W i t h A s y n c S t a c k . 
       * / 
     f u n c t i o n   g e t S t a c k ( )   { 
         r e t u r n   c o m p o n e n t s . s t a c k . c a l l e r ; 
     } 
 
     / * * 
       *   L i k e   C u . c a l l F u n c t i o n W i t h A s y n c S t a c k   b u t   h a n d l e s   t h e   i s W o r k e r   c a s e 
       *   - -   | C u |   i s n ' t   d e f i n e d   i n   w o r k e r s . 
       * / 
     f u n c t i o n   c a l l F u n c t i o n W i t h A s y n c S t a c k ( c a l l e e ,   s t a c k ,   i d )   { 
         i f   ( i s W o r k e r )   { 
             r e t u r n   c a l l e e ( ) ; 
         } 
         r e t u r n   C u . c a l l F u n c t i o n W i t h A s y n c S t a c k ( c a l l e e ,   s t a c k ,   i d ) ; 
     } 
 
     e x p o r t s . c a l l F u n c t i o n W i t h A s y n c S t a c k   =   c a l l F u n c t i o n W i t h A s y n c S t a c k ; 
     e x p o r t s . d e s c r i b e N t h C a l l e r   =   d e s c r i b e N t h C a l l e r ; 
     e x p o r t s . g e t S t a c k   =   g e t S t a c k ; 
 } ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/platform/chrome/stack.js     ¥                    =        ž   
º   l 
Ì
K    use strict	   call   ÿÿÿÿ                       C  ß      ¹      %                               I  e  
          	       ¹W   QV   5    E   "æQ;    5   ž   
=   : >æ   kæ    Q;      =   :    : Q5     Q5     QQT  ž   	
V   V  V  ;   
l QÉ   EæV   B0   QT  ž   	
V   ;   ;   5   V   l QV   f    0   QææfÊ
ÏçæËåÐ    module   id   indexOf   stack   require   chrome-   RequireObjectCoercible   components   Cu	   call   exports   isWorker   Components   utils!   EXPORTED_SYMBOLS    ÿÿÿÿ      factory   .this                    components   Cu                      5   callFunctionWithAsyncStack   #   describeNthCaller      getStack      B   V   ÿÿÿÿ           C  F       ¹                                         {  ¢                       W   Q   W  Q   W  QT V  0    QT V   0   QT V  0   QÊ9ÊAÊ9AHÍÍÍ 5   callFunctionWithAsyncStack#   describeNthCaller   getStack    ÿÿÿÿ      components   Cu   exports#   describeNthCaller   getStack5   callFunctionWithAsyncStack                #   describeNthCaller  ã       ¹      G                               l  #                           Q;       æ=   Éæ   5      Qæ   mT  #?U  QV   5   W   QãT  >ÿÿÿàæV   5     QV   5     QV  ž   
=   :    %æV   5   ž   
     : ?7W  QæV  =   	V   5   
  QV  =   V  ÉÉ×3$Ð(%'&ÊÎ&Í+ÎÎÐÕË0Ù2Ï    isWorker      stack   caller	   name   filename   includes	    ->    split   :   lineNumber   () ->     ÿÿÿÿ      n                     caller	   func	   file	   path              	    ->         ;   %         Ð   ÿÿÿÿ    $              à          ¹    @              getStack          ¹                                         ¹  å  9                    5    5   Ï    stack   caller    ÿÿÿÿ              ¹    @           5   callFunctionWithAsyncStack  .       ¹                                            A   %              ;       æT  :  æ   ž   
T  T T : FEÕ    isWorker5   callFunctionWithAsyncStack    ÿÿÿÿ      callee   stack   id        ¹    @ 