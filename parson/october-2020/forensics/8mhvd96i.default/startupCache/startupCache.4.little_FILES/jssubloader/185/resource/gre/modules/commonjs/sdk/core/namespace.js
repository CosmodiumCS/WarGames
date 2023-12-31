   20170118123726p      ¹      %                         	       `  á       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 m o d u l e . m e t a d a t a   =   { 
     " s t a b i l i t y " :   " u n s t a b l e " 
 } ; 
 
 c o n s t   c r e a t e   =   O b j e c t . c r e a t e ; 
 c o n s t   p r o t o t y p e O f   =   O b j e c t . g e t P r o t o t y p e O f ; 
 
 / * * 
   *   R e t u r n s   a   n e w   n a m e s p a c e ,   f u n c t i o n   t h a t   m a y   c a n   b e   u s e d   t o   a c c e s s   a n 
   *   n a m e s p a c e d   o b j e c t   o f   t h e   a r g u m e n t   a r g u m e n t .   N a m e s p a c e d   o b j e c t   a r e   a s s o c i a t e d 
   *   w i t h   o w n e r   o b j e c t s   v i a   w e a k   r e f e r e n c e s .   N a m e s p a c e d   o b j e c t s   i n h e r i t   f r o m   t h e 
   *   o w n e r s   a n c e s t o r   n a m e s p a c e d   o b j e c t .   I f   o w n e r ' s   a n c e s t o r   i s   ` n u l l `   t h e n 
   *   n a m e s p a c e d   o b j e c t   i n h e r i t s   f r o m   g i v e n   ` p r o t o t y p e ` .   N a m e s p a c e s   c a n   b e   u s e d 
   *   t o   d e f i n e   i n t e r n a l   A P I s   t h a t   c a n   b e   s h a r e d   v i a   e n c l o s i n g   ` n a m e s p a c e ` 
   *   f u n c t i o n . 
   *   @ e x a m p l e s 
   *         c o n s t   i n t e r n a l s   =   n s ( ) ; 
   *         i n t e r n a l s ( o b j e c t ) . s e c r e t   =   s e c r e t ; 
   * / 
 f u n c t i o n   n s ( )   { 
     c o n s t   m a p   =   n e w   W e a k M a p ( ) ; 
     r e t u r n   f u n c t i o n   n a m e s p a c e ( t a r g e t )   { 
         i f   ( ! t a r g e t )                 / /   I f   ` t a r g e t `   i s   n o t   a n   o b j e c t   r e t u r n   ` t a r g e t `   i t s e l f . 
             r e t u r n   t a r g e t ; 
         / /   I f   t a r g e t   h a s   n o   n a m e s p a c e d   o b j e c t   y e t ,   c r e a t e   o n e   t h a t   i n h e r i t s   f r o m 
         / /   t h e   t a r g e t   p r o t o t y p e ' s   n a m e s p a c e d   o b j e c t . 
         i f   ( ! m a p . h a s ( t a r g e t ) ) 
             m a p . s e t ( t a r g e t ,   c r e a t e ( n a m e s p a c e ( p r o t o t y p e O f ( t a r g e t )   | |   n u l l ) ) ) ; 
 
         r e t u r n   m a p . g e t ( t a r g e t ) ; 
     } ; 
 } ; 
 
 / /   ` N a m e s p a c e `   i s   a   e 4 x   f u n c t i o n   i n   t h e   s c o p e ,   s o   w e   e x p o r t   t h e   f u n c t i o n   a l s o   a s 
 / /   ` n s `   a s   a l i a s   t o   a v o i d   c l a s h i n g . 
 e x p o r t s . n s   =   n s ; 
 e x p o r t s . N a m e s p a c e   =   n s ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/core/namespace.js     á                              =   ;   [    =   ]   0   ;   5    ¡    Q;   5   ¡   Q;   	   
0   
;   	   
0   Ï	ÊÐÐÐ&*ÐÐ    create   prototypeOf   use strict   module   metadata   unstable   stability   Object   getPrototypeOf   exports   ns   Namespace   ÿÿÿÿ      ns   create   prototypeOf                      stability                    ns   "       ¹                                         @                    Ç   ;    A,  R     Q    ÈÈÊÉ&    WeakMap    ÿÿÿÿ                           map                        namespaceC         ¹      4                                  Î  =            
      T      
æT  æ      ž    
T  :     Iæ      ž   
T  ;      ;      T  : D   æQ@æ: : : Qæ      ž   
T  : %!Ôí!Ìÿÿÿöÿÿÿùÿÿÿð$Ô    has   set   create   prototypeOf   get   ÿÿÿÿ      namespace                        target        ¹    @          ÿÿÿÿ              