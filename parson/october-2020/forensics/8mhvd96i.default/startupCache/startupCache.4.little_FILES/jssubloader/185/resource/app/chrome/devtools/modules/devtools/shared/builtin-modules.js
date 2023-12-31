   20170118123726÷  i   ¹   F                           v       `  ''       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 / * * 
   *   T h i s   m o d u l e   d e f i n e s   c u s t o m   g l o b a l s   i n j e c t e d   i n   a l l   o u r   m o d u l e s   a n d   a l s o 
   *   p s e u d o   m o d u l e s   t h a t   a r e n ' t   s e p a r a t e   f i l e s   b u t   j u s t   d y n a m i c a l l y   s e t   v a l u e s . 
   * 
   *   A s   i t   d o e s   s o ,   t h e   m o d u l e   i t s e l f   d o e s n ' t   h a v e   a c c e s s   t o   t h e s e   g l o b a l s , 
   *   n o r   t h e   p s e u d o   m o d u l e s .   B e   c a r e f u l   t o   a v o i d   l o a d i n g   a n y   o t h e r   j s   m o d u l e   a s 
   *   t h e y   w o u l d   a l s o   m i s s   t h e m . 
   * / 
 
 c o n s t   {   C u ,   C C ,   C c ,   C i   }   =   r e q u i r e ( " c h r o m e " ) ; 
 c o n s t   {   L o a d e r   }   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / c o m m o n j s / t o o l k i t / l o a d e r . j s " ,   { } ) ; 
 c o n s t   p r o m i s e   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / P r o m i s e . j s m " ,   { } ) . P r o m i s e ; 
 c o n s t   j s m S c o p e   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / S e r v i c e s . j s m " ,   { } ) ; 
 c o n s t   {   S e r v i c e s   }   =   j s m S c o p e ; 
 / /   S t e a l   v a r i o u s   g l o b a l s   o n l y   a v a i l a b l e   i n   J S M   s c o p e   ( a n d   n o t   S a n d b o x   o n e ) 
 c o n s t   {   P r o m i s e D e b u g g i n g ,   C h r o m e U t i l s ,   T h r e a d S a f e C h r o m e U t i l s ,   H e a p S n a p s h o t , 
                 a t o b ,   b t o a ,   I t e r a t o r   }   =   j s m S c o p e ; 
 c o n s t   {   U R L   }   =   C u . S a n d b o x ( C C ( " @ m o z i l l a . o r g / s y s t e m p r i n c i p a l ; 1 " ,   " n s I P r i n c i p a l " ) ( ) , 
                                                       { w a n t G l o b a l P r o p e r t i e s :   [ " U R L " ] } ) ; 
 
 / * * 
   *   D e f i n e s   a   g e t t e r   o n   a   s p e c i f i e d   o b j e c t   t h a t   w i l l   b e   c r e a t e d   u p o n   f i r s t   u s e . 
   * 
   *   @ p a r a m   a O b j e c t 
   *                 T h e   o b j e c t   t o   d e f i n e   t h e   l a z y   g e t t e r   o n . 
   *   @ p a r a m   a N a m e 
   *                 T h e   n a m e   o f   t h e   g e t t e r   t o   d e f i n e   o n   a O b j e c t . 
   *   @ p a r a m   a L a m b d a 
   *                 A   f u n c t i o n   t h a t   r e t u r n s   w h a t   t h e   g e t t e r   s h o u l d   r e t u r n .     T h i s   w i l l 
   *                 o n l y   e v e r   b e   c a l l e d   o n c e . 
   * / 
 f u n c t i o n   d e f i n e L a z y G e t t e r ( a O b j e c t ,   a N a m e ,   a L a m b d a ) 
 { 
     O b j e c t . d e f i n e P r o p e r t y ( a O b j e c t ,   a N a m e ,   { 
         g e t :   f u n c t i o n   ( )   { 
             / /   R e d e f i n e   t h i s   a c c e s s o r   p r o p e r t y   a s   a   d a t a   p r o p e r t y . 
             / /   D e l e t e   i t   f i r s t ,   t o   r u l e   o u t   " t o o   m u c h   r e c u r s i o n "   i n   c a s e   a O b j e c t   i s 
             / /   a   p r o x y   w h o s e   d e f i n e P r o p e r t y   h a n d l e r   m i g h t   u n w i t t i n g l y   t r i g g e r   t h i s 
             / /   g e t t e r   a g a i n . 
             d e l e t e   a O b j e c t [ a N a m e ] ; 
             l e t   v a l u e   =   a L a m b d a . a p p l y ( a O b j e c t ) ; 
             O b j e c t . d e f i n e P r o p e r t y ( a O b j e c t ,   a N a m e ,   { 
                 v a l u e , 
                 w r i t a b l e :   t r u e , 
                 c o n f i g u r a b l e :   t r u e , 
                 e n u m e r a b l e :   t r u e 
             } ) ; 
             r e t u r n   v a l u e ; 
         } , 
         c o n f i g u r a b l e :   t r u e , 
         e n u m e r a b l e :   t r u e 
     } ) ; 
 } 
 
 / * * 
   *   D e f i n e s   a   g e t t e r   o n   a   s p e c i f i e d   o b j e c t   f o r   a   s e r v i c e .     T h e   s e r v i c e   w i l l   n o t 
   *   b e   o b t a i n e d   u n t i l   f i r s t   u s e . 
   * 
   *   @ p a r a m   a O b j e c t 
   *                 T h e   o b j e c t   t o   d e f i n e   t h e   l a z y   g e t t e r   o n . 
   *   @ p a r a m   a N a m e 
   *                 T h e   n a m e   o f   t h e   g e t t e r   t o   d e f i n e   o n   a O b j e c t   f o r   t h e   s e r v i c e . 
   *   @ p a r a m   a C o n t r a c t 
   *                 T h e   c o n t r a c t   u s e d   t o   o b t a i n   t h e   s e r v i c e . 
   *   @ p a r a m   a I n t e r f a c e N a m e 
   *                 T h e   n a m e   o f   t h e   i n t e r f a c e   t o   q u e r y   t h e   s e r v i c e   t o . 
   * / 
 f u n c t i o n   d e f i n e L a z y S e r v i c e G e t t e r ( a O b j e c t ,   a N a m e ,   a C o n t r a c t ,   a I n t e r f a c e N a m e ) 
 { 
     d e f i n e L a z y G e t t e r ( a O b j e c t ,   a N a m e ,   f u n c t i o n   X P C U _ s e r v i c e L a m b d a ( )   { 
         r e t u r n   C c [ a C o n t r a c t ] . g e t S e r v i c e ( C i [ a I n t e r f a c e N a m e ] ) ; 
     } ) ; 
 } 
 
 / * * 
   *   D e f i n e s   a   g e t t e r   o n   a   s p e c i f i e d   o b j e c t   f o r   a   m o d u l e .     T h e   m o d u l e   w i l l   n o t 
   *   b e   i m p o r t e d   u n t i l   f i r s t   u s e .   T h e   g e t t e r   a l l o w s   t o   e x e c u t e   s e t u p   a n d 
   *   t e a r d o w n   c o d e   ( e . g .     t o   r e g i s t e r / u n r e g i s t e r   t o   s e r v i c e s )   a n d   a c c e p t s 
   *   a   p r o x y   o b j e c t   w h i c h   a c t s   o n   b e h a l f   o f   t h e   m o d u l e   u n t i l   i t   i s   i m p o r t e d . 
   * 
   *   @ p a r a m   a O b j e c t 
   *                 T h e   o b j e c t   t o   d e f i n e   t h e   l a z y   g e t t e r   o n . 
   *   @ p a r a m   a N a m e 
   *                 T h e   n a m e   o f   t h e   g e t t e r   t o   d e f i n e   o n   a O b j e c t   f o r   t h e   m o d u l e . 
   *   @ p a r a m   a R e s o u r c e 
   *                 T h e   U R L   u s e d   t o   o b t a i n   t h e   m o d u l e . 
   *   @ p a r a m   a S y m b o l 
   *                 T h e   n a m e   o f   t h e   s y m b o l   e x p o r t e d   b y   t h e   m o d u l e . 
   *                 T h i s   p a r a m e t e r   i s   o p t i o n a l   a n d   d e f a u l t s   t o   a N a m e . 
   *   @ p a r a m   a P r e L a m b d a 
   *                 A   f u n c t i o n   t h a t   i s   e x e c u t e d   w h e n   t h e   p r o x y   i s   s e t   u p . 
   *                 T h i s   w i l l   o n l y   e v e r   b e   c a l l e d   o n c e . 
   *   @ p a r a m   a P o s t L a m b d a 
   *                 A   f u n c t i o n   t h a t   i s   e x e c u t e d   w h e n   t h e   m o d u l e   h a s   b e e n   i m p o r t e d   t o 
   *                 r u n   o p t i o n a l   t e a r d o w n   p r o c e d u r e s   o n   t h e   p r o x y   o b j e c t . 
   *                 T h i s   w i l l   o n l y   e v e r   b e   c a l l e d   o n c e . 
   *   @ p a r a m   a P r o x y 
   *                 A n   o b j e c t   w h i c h   a c t s   o n   b e h a l f   o f   t h e   m o d u l e   t o   b e   i m p o r t e d   u n t i l 
   *                 t h e   m o d u l e   h a s   b e e n   i m p o r t e d . 
   * / 
 f u n c t i o n   d e f i n e L a z y M o d u l e G e t t e r ( a O b j e c t ,   a N a m e ,   a R e s o u r c e ,   a S y m b o l , 
                                                                 a P r e L a m b d a ,   a P o s t L a m b d a ,   a P r o x y ) 
 { 
     l e t   p r o x y   =   a P r o x y   | |   { } ; 
 
     i f   ( t y p e o f   ( a P r e L a m b d a )   = = =   " f u n c t i o n " )   { 
         a P r e L a m b d a . a p p l y ( p r o x y ) ; 
     } 
 
     d e f i n e L a z y G e t t e r ( a O b j e c t ,   a N a m e ,   f u n c t i o n   X P C U _ m o d u l e L a m b d a ( )   { 
         v a r   t e m p   =   { } ; 
         t r y   { 
             C u . i m p o r t ( a R e s o u r c e ,   t e m p ) ; 
 
             i f   ( t y p e o f   ( a P o s t L a m b d a )   = = =   " f u n c t i o n " )   { 
                 a P o s t L a m b d a . a p p l y ( p r o x y ) ; 
             } 
         }   c a t c h   ( e x )   { 
             C u . r e p o r t E r r o r ( " F a i l e d   t o   l o a d   m o d u l e   "   +   a R e s o u r c e   +   " . " ) ; 
             t h r o w   e x ; 
         } 
         r e t u r n   t e m p [ a S y m b o l   | |   a N a m e ] ; 
     } ) ; 
 } 
 
 / * * 
   *   D e f i n e   a   g e t t e r   p r o p e r t y   o n   t h e   g i v e n   o b j e c t   t h a t   r e q u i r e s   t h e   g i v e n 
   *   m o d u l e .   T h i s   e n a b l e s   d e l a y i n g   i m p o r t i n g   m o d u l e s   u n t i l   t h e   m o d u l e   i s 
   *   a c t u a l l y   u s e d . 
   * 
   *   @ p a r a m   O b j e c t   o b j 
   *         T h e   o b j e c t   t o   d e f i n e   t h e   p r o p e r t y   o n . 
   *   @ p a r a m   S t r i n g   p r o p e r t y 
   *         T h e   p r o p e r t y   n a m e . 
   *   @ p a r a m   S t r i n g   m o d u l e 
   *         T h e   m o d u l e   p a t h . 
   *   @ p a r a m   B o o l e a n   d e s t r u c t u r e 
   *         P a s s   t r u e   i f   t h e   p r o p e r t y   n a m e   i s   a   m e m b e r   o f   t h e   m o d u l e ' s   e x p o r t s . 
   * / 
 f u n c t i o n   l a z y R e q u i r e G e t t e r ( o b j ,   p r o p e r t y ,   m o d u l e ,   d e s t r u c t u r e )   { 
     O b j e c t . d e f i n e P r o p e r t y ( o b j ,   p r o p e r t y ,   { 
         g e t :   ( )   = >   { 
             / /   R e d e f i n e   t h i s   a c c e s s o r   p r o p e r t y   a s   a   d a t a   p r o p e r t y . 
             / /   D e l e t e   i t   f i r s t ,   t o   r u l e   o u t   " t o o   m u c h   r e c u r s i o n "   i n   c a s e   o b j   i s 
             / /   a   p r o x y   w h o s e   d e f i n e P r o p e r t y   h a n d l e r   m i g h t   u n w i t t i n g l y   t r i g g e r   t h i s 
             / /   g e t t e r   a g a i n . 
             d e l e t e   o b j [ p r o p e r t y ] ; 
             l e t   v a l u e   =   d e s t r u c t u r e 
                 ?   r e q u i r e ( m o d u l e ) [ p r o p e r t y ] 
                 :   r e q u i r e ( m o d u l e   | |   p r o p e r t y ) ; 
             O b j e c t . d e f i n e P r o p e r t y ( o b j ,   p r o p e r t y ,   { 
                 v a l u e , 
                 w r i t a b l e :   t r u e , 
                 c o n f i g u r a b l e :   t r u e , 
                 e n u m e r a b l e :   t r u e 
             } ) ; 
             r e t u r n   v a l u e ; 
         } , 
         c o n f i g u r a b l e :   t r u e , 
         e n u m e r a b l e :   t r u e 
     } ) ; 
 } 
 
 / /   L i s t   o f   p s e u d o   m o d u l e s   e x p o s e d   t o   a l l   d e v t o o l s   m o d u l e s . 
 e x p o r t s . m o d u l e s   =   { 
     " S e r v i c e s " :   O b j e c t . c r e a t e ( S e r v i c e s ) , 
     " t o o l k i t / l o a d e r " :   L o a d e r , 
     p r o m i s e , 
     P r o m i s e D e b u g g i n g , 
     C h r o m e U t i l s , 
     T h r e a d S a f e C h r o m e U t i l s , 
     H e a p S n a p s h o t , 
 } ; 
 
 d e f i n e L a z y G e t t e r ( e x p o r t s . m o d u l e s ,   " D e b u g g e r " ,   ( )   = >   { 
     / /   a d d D e b u g g e r T o G l o b a l   o n l y   a l l o w s   a d d i n g   t h e   D e b u g g e r   o b j e c t   t o   a   g l o b a l .   T h e 
     / /   t h i s   o b j e c t   i s   n o t   g u a r a n t e e d   t o   b e   a   g l o b a l   ( i n   p a r t i c u l a r   o n   B 2 G ,   d u e   t o 
     / /   c o m p a r t m e n t   s h a r i n g ) ,   s o   a d d   t h e   D e b u g g e r   o b j e c t   t o   a   s a n d b o x   i n s t e a d . 
     l e t   s a n d b o x   =   C u . S a n d b o x ( C C ( " @ m o z i l l a . o r g / s y s t e m p r i n c i p a l ; 1 " ,   " n s I P r i n c i p a l " ) ( ) ) ; 
     C u . e v a l I n S a n d b o x ( 
         " C o m p o n e n t s . u t i l s . i m p o r t ( ' r e s o u r c e : / / g r e / m o d u l e s / j s d e b u g g e r . j s m ' ) ; "   + 
         " a d d D e b u g g e r T o G l o b a l ( t h i s ) ; " , 
         s a n d b o x 
     ) ; 
     r e t u r n   s a n d b o x . D e b u g g e r ; 
 } ) ; 
 
 d e f i n e L a z y G e t t e r ( e x p o r t s . m o d u l e s ,   " T i m e r " ,   ( )   = >   { 
     l e t   { s e t T i m e o u t ,   c l e a r T i m e o u t }   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / T i m e r . j s m " ,   { } ) ; 
     / /   D o   n o t   r e t u r n   C u . i m p o r t   r e s u l t ,   a s   S D K   l o a d e r   w o u l d   f r e e z e   T i m e r . j s m   g l o b a l s . . . 
     r e t u r n   { 
         s e t T i m e o u t , 
         c l e a r T i m e o u t 
     } ; 
 } ) ; 
 
 d e f i n e L a z y G e t t e r ( e x p o r t s . m o d u l e s ,   " x p c I n s p e c t o r " ,   ( )   = >   { 
     r e t u r n   C c [ " @ m o z i l l a . o r g / j s i n s p e c t o r ; 1 " ] . g e t S e r v i c e ( C i . n s I J S I n s p e c t o r ) ; 
 } ) ; 
 
 d e f i n e L a z y G e t t e r ( e x p o r t s . m o d u l e s ,   " F i l e R e a d e r " ,   ( )   = >   { 
     l e t   s a n d b o x 
         =   C u . S a n d b o x ( C C ( " @ m o z i l l a . o r g / s y s t e m p r i n c i p a l ; 1 " ,   " n s I P r i n c i p a l " ) ( ) , 
                                   { w a n t G l o b a l P r o p e r t i e s :   [ " F i l e R e a d e r " ] } ) ; 
     r e t u r n   s a n d b o x . F i l e R e a d e r ; 
 } ) ; 
 
 / /   L i s t   o f   a l l   c u s t o m   g l o b a l s   e x p o s e d   t o   d e v t o o l s   m o d u l e s . 
 / /   C h a n g e s   h e r e   s h o u l d   b e   m i r r o r e d   t o   d e v t o o l s / . e s l i n t r c . 
 c o n s t   g l o b a l s   =   e x p o r t s . g l o b a l s   =   { 
     i s W o r k e r :   f a l s e , 
     r e p o r t E r r o r :   C u . r e p o r t E r r o r , 
     a t o b :   a t o b , 
     b t o a :   b t o a , 
     U R L , 
     _ I t e r a t o r :   I t e r a t o r , 
     l o a d e r :   { 
         l a z y G e t t e r :   d e f i n e L a z y G e t t e r , 
         l a z y I m p o r t e r :   d e f i n e L a z y M o d u l e G e t t e r , 
         l a z y S e r v i c e G e t t e r :   d e f i n e L a z y S e r v i c e G e t t e r , 
         l a z y R e q u i r e G e t t e r :   l a z y R e q u i r e G e t t e r , 
         i d :   n u l l   / /   D e f i n e d   b y   L o a d e r . j s m 
     } , 
 
     / /   L e t   n e w   X M L H t t p R e q u e s t   d o   t h e   r i g h t   t h i n g . 
     X M L H t t p R e q u e s t :   f u n c t i o n   ( )   { 
         r e t u r n   C c [ " @ m o z i l l a . o r g / x m l e x t r a s / x m l h t t p r e q u e s t ; 1 " ] 
                       . c r e a t e I n s t a n c e ( C i . n s I X M L H t t p R e q u e s t ) ; 
     } , 
 
     N o d e :   C i . n s I D O M N o d e , 
     E l e m e n t :   C i . n s I D O M E l e m e n t , 
     D o c u m e n t F r a g m e n t :   C i . n s I D O M D o c u m e n t F r a g m e n t , 
 
     / /   M a k e   s u r e   ` d e f i n e `   f u n c t i o n   e x i s t s .     T h i s   a l l o w s   d e f i n i n g   s o m e   m o d u l e s 
     / /   i n   A M D   f o r m a t   w h i l e   r e t a i n i n g   C o m m o n J S   c o m p a t i b i l i t y   t h r o u g h   t h i s   h o o k . 
     / /   J S O N   V i e w e r   n e e d s   m o d u l e s   i n   A M D   f o r m a t ,   a s   i t   c u r r e n t l y   u s e s   R e q u i r e J S 
     / /   f r o m   a   c o n t e n t   d o c u m e n t   a n d   c a n ' t   a c c e s s   o u r   u s u a l   l o a d e r s .     S o ,   a n y 
     / /   m o d u l e s   s h a r e d   w i t h   t h e   J S O N   V i e w e r   s h o u l d   i n c l u d e   a   d e f i n e   w r a p p e r : 
     / / 
     / /       / /   M a k e   t h i s   a v a i l a b l e   t o   b o t h   A M D   a n d   C J S   e n v i r o n m e n t s 
     / /       d e f i n e ( f u n c t i o n ( r e q u i r e ,   e x p o r t s ,   m o d u l e )   { 
     / /           . . .   c o d e   . . . 
     / /       } ) ; 
     / / 
     / /   B u g   1 2 4 8 8 3 0   w i l l   w o r k   o u t   a   b e t t e r   p l a n   h e r e   f o r   o u r   c o n t e n t   m o d u l e 
     / /   l o a d i n g   n e e d s ,   e s p e c i a l l y   a s   w e   h e a d   t o w a r d s   d e v t o o l s . h t m l . 
     d e f i n e ( f a c t o r y )   { 
         f a c t o r y ( t h i s . r e q u i r e ,   t h i s . e x p o r t s ,   t h i s . m o d u l e ) ; 
     } , 
 } ; 
 
 / /   L a z i l y   d e f i n e   a   f e w   t h i n g s   s o   t h a t   t h e   c o r r e s p o n d i n g   j s m s   a r e   o n l y   l o a d e d 
 / /   w h e n   u s e d . 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " c o n s o l e " ,   ( )   = >   { 
     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / C o n s o l e . j s m " ,   { } ) . c o n s o l e ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " c l e a r T i m e o u t " ,   ( )   = >   { 
     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / T i m e r . j s m " ,   { } ) . c l e a r T i m e o u t ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " s e t T i m e o u t " ,   ( )   = >   { 
     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / T i m e r . j s m " ,   { } ) . s e t T i m e o u t ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " c l e a r I n t e r v a l " ,   ( )   = >   { 
     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / T i m e r . j s m " ,   { } ) . c l e a r I n t e r v a l ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " s e t I n t e r v a l " ,   ( )   = >   { 
     r e t u r n   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / T i m e r . j s m " ,   { } ) . s e t I n t e r v a l ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " C S S R u l e " ,   ( )   = >   C i . n s I D O M C S S R u l e ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " D O M P a r s e r " ,   ( )   = >   { 
     r e t u r n   C C ( " @ m o z i l l a . o r g / x m l e x t r a s / d o m p a r s e r ; 1 " ,   " n s I D O M P a r s e r " ) ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " C S S " ,   ( )   = >   { 
     l e t   s a n d b o x 
         =   C u . S a n d b o x ( C C ( " @ m o z i l l a . o r g / s y s t e m p r i n c i p a l ; 1 " ,   " n s I P r i n c i p a l " ) ( ) , 
                                   { w a n t G l o b a l P r o p e r t i e s :   [ " C S S " ] } ) ; 
     r e t u r n   s a n d b o x . C S S ; 
 } ) ; 
 d e f i n e L a z y G e t t e r ( g l o b a l s ,   " W e b S o c k e t " ,   ( )   = >   { 
     r e t u r n   S e r v i c e s . a p p S h e l l . h i d d e n D O M W i n d o w . W e b S o c k e t ; 
 } ) ; 
 l a z y R e q u i r e G e t t e r ( g l o b a l s ,   " i n d e x e d D B " ,   " s d k / i n d e x e d - d b " ,   t r u e ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/builtin-modules.js     ''                                                   	   
                              =   ;      =   :    : Q5    ¡    Q5   ¡   Q5   ¡   Q5   ¡   QQ    ¸   
=   [    :    : Q5   ¡   QQ    ¸   
=   [   : 5   ¡   Q    ¸   
=   [   : ¡   Q      : Q5   ¡   QQ      : Q5   ¡   Q5   	¡   	Q5   
¡   
Q5   ¡   Q5   ¡   Q5   ¡   Q5   ¡   QQ    ¸   
      =   =   : :  [   f   ]   :    : Q5   ¡   QQ;   [   	;    ¸   !
   : ]      ]   "   ]      ]      	]   	   
]   
   ]   0      #   #;   5   =   $@   
:    #   #;   5   =   %@   :    #   #;   5   =   &@   :    #   #;   5   =   '@   : ;   [   B]   (    5   )]   )   ]      ]      ]      ]   *[      #]   +   ,]   -   .]   /   0]   0@]   1]   2   ]   3   5   4]   5   5   6]   7   5   8]   9   ]   :0   ¡   Q   #   #   =   ;@   :    #   #   =   <@   :    #   #   =   =@   :    #   #   =   >@   :    #   #   =   ?@   :    #   #   =   @@   :    #   #   =   A@   :    #   #   =   B@   :    #   #   =   C@   :    0   0   =   D=   EC: ÿÛ&	J	k	  	ÏÿÖÝÖ
ÎÖÉßÿèàÊÝ&Jk    «ÊÑÈÊÊÊÊÊÐã  Âã  Ëãã  ØÊÏÊÊÊÊÊÊÊÊËÊ  íÏÏÏ  þÕ ÞÞÞÞÞÞÞÞ ÞÞ@    Cu   CC   Cc   Ci   Loader   promise   jsmScope   Services!   PromiseDebugging   ChromeUtils+   ThreadSafeChromeUtils   HeapSnapshot	   atob	   btoa   Iterator   URL   globals   use strict   require   chrome-   RequireObjectCoercible   importc   resource://gre/modules/commonjs/toolkit/loader.jsE   resource://gre/modules/Promise.jsm   PromiseG   resource://gre/modules/Services.jsm   Sandbox=   @mozilla.org/systemprincipal;1   nsIPrincipal)   wantGlobalProperties   exports   modules   Object   create   toolkit/loader!   defineLazyGetter   Debugger   Timer   xpcInspector   FileReader   isWorker   reportError   _Iterator   lazyGetter-   defineLazyModuleGetter   lazyImporter/   defineLazyServiceGetter#   lazyServiceGetter#   lazyRequireGetter   id   loader   XMLHttpRequest   nsIDOMNode	   Node   nsIDOMElement   Element-   nsIDOMDocumentFragment!   DocumentFragment   define   console   clearTimeout   setTimeout   clearInterval   setInterval   CSSRule   DOMParser   CSS   WebSocket   indexedDB   sdk/indexed-db   ÿÿÿÿ   !   defineLazyGetter/   defineLazyServiceGetter-   defineLazyModuleGetter#   lazyRequireGetter   Cu   CC   Cc   Ci   Loader   promise   jsmScope   Services!   PromiseDebugging   ChromeUtils+   ThreadSafeChromeUtils   HeapSnapshot	   atob	   btoa   Iterator   URL   globals                                                                  URL                )   wantGlobalProperties                 !   defineLazyGetter  6       ¹                                       D  º  &                  ;    ¸   
      [       ]   C]   C]   : QÛÊ8(;    Object   defineProperty   get   configurable   enumerable    ÿÿÿÿ      aObject   aName   aLambda                 -   defineLazyGetter/<.getc   n       ¹      )                                     )                   Q      /Q   ¸    
   O    Q;   ¸   
      [    V   ]   C]   C]   C]   : QV   ÉÉ.Ì
ÑÈÛÉ06    apply   Object   defineProperty   value   writable   configurable   enumerable    ÿÿÿÿ                           value                          value         writable         configurable         enumerable             g   ÿÿÿÿ    k          ¹    @                 get         configurable         enumerable                 /   defineLazyServiceGetter         ¹                                       
  @  J                  ;        T  T     : QÙO !   defineLazyGetter    ÿÿÿÿ      aObject   aName   aContract   aInterfaceName                 %   XPCU_serviceLambdaC   "       ¹      
                                   û
  <  L   >             ;       7¸   
;      7: Ý    Cc   getService   Ci   ÿÿÿÿ   %   XPCU_serviceLambda                                ¹    @           -   defineLazyModuleGetter  \       ¹                                      Í    k                  Ç   T D   æQ[    æ   QT '=    H   æT ¸   
   O Qæ;      T       : QÈmÖpÊÔtÜ      function   apply!   defineLazyGetter    ÿÿÿÿ      aObject   aName   aResource   aSymbol   aPreLambda   aPostLambda   aProxy                    proxy                                   #   XPCU_moduleLambdaC   ¬       ¹      )                                Ý    t   =            [    W   Q;    ¸   
  V   : Q  '=   H    æ  ¸   
      O Qæ   Aæ  Qv  Q;    ¸   
=     =   : QV  pÉ    æV     D   æQ  æ7ÊGÙy
Ìã|ÌáÍ×    Cu   import   function   apply   reportError-   Failed to load module    .   ÿÿÿÿ   #   XPCU_moduleLambda                     	   temp                     ex                                K      _   -   ÿÿÿÿ¹    @       V   ÿÿÿÿ          #   lazyRequireGetter  7       ¹                                       å                      ;    ¸   
      [       ]   C]   C]   : QÛË  ¥    ¨    Object   defineProperty   get   configurable   enumerable    ÿÿÿÿ      obj   property   module   destructure                 /   lazyRequireGetter/<.gete   £       ¹      :                                 >  b     	                Q      /Q      #æ;           :    7   %æ;           D   æQ   æ: æ   Q;   ¸   
      [    V   ]   C]   C]   C]   : QV   ÉÉ  Ì
Ï
ÏÜ
ÉÛÉ    £    require   Object   defineProperty   value   writable   configurable   enumerable    ÿÿÿÿ                           value                          value         writable         configurable         enumerable                ÿÿÿÿ               ¹    @                 get         configurable         enumerable                       Services         toolkit/loader         promise      !   PromiseDebugging         ChromeUtils      +   ThreadSafeChromeUtils         HeapSnapshot                  E   \       ¹      '                         
         µ  «  µ   .                Q;    ¸   
;      =   =   : :  :    Q;    ¸   
=   V   : QV   5   ÉÉàÿÿÿõÈÌ  º  ¿É    Cu   Sandbox   CC=   @mozilla.org/systemprincipal;1   nsIPrincipal   evalInSandbox·   Components.utils.import('resource://gre/modules/jsdebugger.jsm');addDebuggerToGlobal(this);   Debugger    ÿÿÿÿ                           sandbox                U   ÿÿÿÿ    Y          ¹    @            E   c       ¹                                       Ú  ¿  Â                      Q    ¸   
=   [    :    : Q5      Q5     QQ[   V   ]   V  ]   ÉÉÊÖçÉÉ    Cu   importA   resource://gre/modules/Timer.jsm-   RequireObjectCoercible   setTimeout   clearTimeout    ÿÿÿÿ                           setTimeout   clearTimeout                                         setTimeout         clearTimeout          
   X   ÿÿÿÿ    `                     E           ¹                                         õ  G  Ë   2              ;    5   ¸   
;   5   : Û    Cc5   @mozilla.org/jsinspector;1   getService   Ci   nsIJSInspector    ÿÿÿÿ              ¹    @            E   R       ¹                                       {  2  Ï   0                Q;    ¸   
;      =   =   : :  [   f    ]   :    QV   5   ÉÉàÊ  ÑÈÉ    Cu   Sandbox   CC=   @mozilla.org/systemprincipal;1   nsIPrincipal)   wantGlobalProperties   FileReader    ÿÿÿÿ                           sandbox                         FileReader                )   wantGlobalProperties             K   ÿÿÿÿ    O          ¹    @                 lazyGetter         lazyImporter      #   lazyServiceGetter      #   lazyRequireGetter         id                 =   exports.globals.XMLHttpRequestc           ¹                                         d  ×  è                 ;    5   ¸   
;   5   : ÑÊ  é    CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest    ÿÿÿÿ              ¹    @              define@ *      ¹                                       ç!  ,"  þ                ¹W   QT  V   5    V   5   V   5   : Qã    require   exports   module    ÿÿÿÿ      factory   .this       ¹    @                 isWorker         reportError      	   atob      	   btoa         URL         _Iterator         loader         XMLHttpRequest      	   Node         Element      !   DocumentFragment         define                  E           ¹      	                                  ²"  #    %              ;    ¸   
=   [    : 5   ÖÈ    Cu   importE   resource://gre/modules/Console.jsm   console    ÿÿÿÿ                             ¹    @            E           ¹      	                                  .#  #    *              ;    ¸   
=   [    : 5   ÖÈ    Cu   importA   resource://gre/modules/Timer.jsm   clearTimeout    ÿÿÿÿ                             ¹    @            E           ¹      	                                  «#  û#    (              ;    ¸   
=   [    : 5   ÖÈ    Cu   importA   resource://gre/modules/Timer.jsm   setTimeout    ÿÿÿÿ                             ¹    @            E           ¹      	                                  )$  |$    +              ;    ¸   
=   [    : 5   ÖÈ    Cu   importA   resource://gre/modules/Timer.jsm   clearInterval    ÿÿÿÿ                             ¹    @            E           ¹      	                                  ¨$  ù$    )              ;    ¸   
=   [    : 5   ÖÈ    Cu   importA   resource://gre/modules/Timer.jsm   setInterval    ÿÿÿÿ                             ¹    @            U          ¹                                         !%  7%    %              ;    5   +Ê    Ci   nsIDOMCSSRule    ÿÿÿÿ              ¹    @            E          ¹                                         a%  ­%    '              ;        =   =   : Ô    CCE   @mozilla.org/xmlextras/domparser;1   nsIDOMParser    ÿÿÿÿ              ¹    @            E   R       ¹                                       Ñ%  z&    !                Q;    ¸   
;      =   =   : :  [   f    ]   :    QV   5   ÉÉàÊ ÈÉ    Cu   Sandbox   CC=   @mozilla.org/systemprincipal;1   nsIPrincipal)   wantGlobalProperties   CSS    ÿÿÿÿ                           sandbox                         CSS                )   wantGlobalProperties             K   ÿÿÿÿ    O          ¹    @            E          ¹                                         ¤&  ã&    '              ;    5   5   5   Ô    Services   appShell   hiddenDOMWindow   WebSocket    ÿÿÿÿ              ¹    @ 