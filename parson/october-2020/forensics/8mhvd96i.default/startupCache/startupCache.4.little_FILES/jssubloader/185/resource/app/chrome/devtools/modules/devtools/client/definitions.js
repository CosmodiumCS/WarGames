   20170118123726î  -   ¹   À   X      I                  ê       `  È;       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 c o n s t   o s S t r i n g   =   S e r v i c e s . a p p i n f o . O S ; 
 
 / /   P a n e l s 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " O p t i o n s P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / f r a m e w o r k / t o o l b o x - o p t i o n s " ) . O p t i o n s P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " I n s p e c t o r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / i n s p e c t o r / i n s p e c t o r - p a n e l " ) . I n s p e c t o r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " W e b C o n s o l e P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / w e b c o n s o l e / p a n e l " ) . W e b C o n s o l e P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " D e b u g g e r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / d e b u g g e r / p a n e l " ) . D e b u g g e r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " S t y l e E d i t o r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / s t y l e e d i t o r / s t y l e e d i t o r - p a n e l " ) . S t y l e E d i t o r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " S h a d e r E d i t o r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / s h a d e r e d i t o r / p a n e l " ) . S h a d e r E d i t o r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " C a n v a s D e b u g g e r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / c a n v a s d e b u g g e r / p a n e l " ) . C a n v a s D e b u g g e r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " W e b A u d i o E d i t o r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / w e b a u d i o e d i t o r / p a n e l " ) . W e b A u d i o E d i t o r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " M e m o r y P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / m e m o r y / p a n e l " ) . M e m o r y P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " P e r f o r m a n c e P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / p e r f o r m a n c e / p a n e l " ) . P e r f o r m a n c e P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " N e t M o n i t o r P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / n e t m o n i t o r / p a n e l " ) . N e t M o n i t o r P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " S t o r a g e P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / s t o r a g e / p a n e l " ) . S t o r a g e P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " S c r a t c h p a d P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / s c r a t c h p a d / s c r a t c h p a d - p a n e l " ) . S c r a t c h p a d P a n e l ) ; 
 l o a d e r . l a z y G e t t e r ( t h i s ,   " D o m P a n e l " ,   ( )   = >   r e q u i r e ( " d e v t o o l s / c l i e n t / d o m / d o m - p a n e l " ) . D o m P a n e l ) ; 
 
 c o n s t   { L o c a l i z a t i o n H e l p e r }   =   r e q u i r e ( " d e v t o o l s / s h a r e d / l 1 0 n " ) ; 
 c o n s t   L 1 0 N   =   n e w   L o c a l i z a t i o n H e l p e r ( " d e v t o o l s / l o c a l e / s t a r t u p . p r o p e r t i e s " ) ; 
 
 v a r   T o o l s   =   { } ; 
 e x p o r t s . T o o l s   =   T o o l s ; 
 
 / /   D e f i n i t i o n s 
 T o o l s . o p t i o n s   =   { 
     i d :   " o p t i o n s " , 
     o r d i n a l :   0 , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / f r a m e w o r k / t o o l b o x - o p t i o n s . x h t m l " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - o p t i o n s . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     b g T h e m e :   " t h e m e - b o d y " , 
     l a b e l :   l 1 0 n ( " o p t i o n s . l a b e l " ) , 
     i c o n O n l y :   t r u e , 
     p a n e l L a b e l :   l 1 0 n ( " o p t i o n s . p a n e l L a b e l " ) , 
     t o o l t i p :   l 1 0 n ( " o p t i o n s B u t t o n . t o o l t i p " ) , 
     i n M e n u :   f a l s e , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( )   { 
         r e t u r n   t r u e ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   O p t i o n s P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . i n s p e c t o r   =   { 
     i d :   " i n s p e c t o r " , 
     a c c e s s k e y :   l 1 0 n ( " i n s p e c t o r . a c c e s s k e y " ) , 
     k e y :   l 1 0 n ( " i n s p e c t o r . c o m m a n d k e y " ) , 
     o r d i n a l :   1 , 
     m o d i f i e r s :   o s S t r i n g   = =   " D a r w i n "   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - i n s p e c t o r . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / i n s p e c t o r / i n s p e c t o r . x u l " , 
     l a b e l :   l 1 0 n ( " i n s p e c t o r . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " i n s p e c t o r . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " i n s p e c t o r . t o o l t i p 2 " , 
         ( o s S t r i n g   = =   " D a r w i n "   ?   " C m d + O p t + "   :   " C t r l + S h i f t + " )   +   t h i s . k e y ) ; 
     } , 
     i n M e n u :   t r u e , 
     c o m m a n d s :   [ 
         " d e v t o o l s / c l i e n t / r e s p o n s i v e d e s i g n / r e s i z e - c o m m a n d s " , 
         " d e v t o o l s / c l i e n t / i n s p e c t o r / i n s p e c t o r - c o m m a n d s " 
     ] , 
 
     p r e v e n t C l o s i n g O n K e y :   t r u e , 
     o n k e y :   f u n c t i o n   ( p a n e l ,   t o o l b o x )   { 
         t o o l b o x . h i g h l i g h t e r U t i l s . t o g g l e P i c k e r ( ) ; 
     } , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . h a s A c t o r ( " i n s p e c t o r " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   I n s p e c t o r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . w e b C o n s o l e   =   { 
     i d :   " w e b c o n s o l e " , 
     k e y :   l 1 0 n ( " c m d . c o m m a n d k e y " ) , 
     a c c e s s k e y :   l 1 0 n ( " w e b C o n s o l e C m d . a c c e s s k e y " ) , 
     m o d i f i e r s :   S e r v i c e s . a p p i n f o . O S   = =   " D a r w i n "   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
     o r d i n a l :   2 , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - w e b c o n s o l e . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / w e b c o n s o l e / w e b c o n s o l e . x u l " , 
     l a b e l :   l 1 0 n ( " T o o l b o x T a b W e b c o n s o l e . l a b e l " ) , 
     m e n u L a b e l :   l 1 0 n ( " M e n u W e b c o n s o l e . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " T o o l b o x W e b C o n s o l e . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " T o o l b o x W e b c o n s o l e . t o o l t i p 2 " , 
         ( o s S t r i n g   = =   " D a r w i n "   ?   " C m d + O p t + "   :   " C t r l + S h i f t + " )   +   t h i s . k e y ) ; 
     } , 
     i n M e n u :   t r u e , 
     c o m m a n d s :   " d e v t o o l s / c l i e n t / w e b c o n s o l e / c o n s o l e - c o m m a n d s " , 
 
     p r e v e n t C l o s i n g O n K e y :   t r u e , 
     o n k e y :   f u n c t i o n   ( p a n e l ,   t o o l b o x )   { 
         i f   ( t o o l b o x . s p l i t C o n s o l e )   { 
             r e t u r n   t o o l b o x . f o c u s C o n s o l e I n p u t ( ) ; 
         } 
 
         p a n e l . f o c u s I n p u t ( ) ; 
         r e t u r n   u n d e f i n e d ; 
     } , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( )   { 
         r e t u r n   t r u e ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   W e b C o n s o l e P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . j s d e b u g g e r   =   { 
     i d :   " j s d e b u g g e r " , 
     k e y :   l 1 0 n ( " d e b u g g e r M e n u . c o m m a n d k e y " ) , 
     a c c e s s k e y :   l 1 0 n ( " d e b u g g e r M e n u . a c c e s s k e y " ) , 
     m o d i f i e r s :   o s S t r i n g   = =   " D a r w i n "   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
     o r d i n a l :   3 , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - d e b u g g e r . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     h i g h l i g h t e d i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - d e b u g g e r - p a u s e d . s v g " , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / d e b u g g e r / d e b u g g e r . x u l " , 
     l a b e l :   l 1 0 n ( " T o o l b o x D e b u g g e r . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " T o o l b o x D e b u g g e r . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " T o o l b o x D e b u g g e r . t o o l t i p 2 " , 
         ( o s S t r i n g   = =   " D a r w i n "   ?   " C m d + O p t + "   :   " C t r l + S h i f t + " )   +   t h i s . k e y ) ; 
     } , 
     i n M e n u :   t r u e , 
     c o m m a n d s :   " d e v t o o l s / c l i e n t / d e b u g g e r / d e b u g g e r - c o m m a n d s " , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( )   { 
         r e t u r n   t r u e ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   D e b u g g e r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 f u n c t i o n   s w i t c h D e b u g g e r ( )   { 
     i f   ( S e r v i c e s . p r e f s . g e t B o o l P r e f ( " d e v t o o l s . d e b u g g e r . n e w - d e b u g g e r - f r o n t e n d " ) )   { 
         c o n s t   N e w D e b u g g e r P a n e l   =   r e q u i r e ( " d e v t o o l s / c l i e n t / d e b u g g e r / n e w / p a n e l " ) . D e b u g g e r P a n e l ; 
 
         T o o l s . j s d e b u g g e r . u r l   =   " c h r o m e : / / d e v t o o l s / c o n t e n t / d e b u g g e r / n e w / i n d e x . h t m l " ; 
         T o o l s . j s d e b u g g e r . b u i l d   =   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
             r e t u r n   n e w   N e w D e b u g g e r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
         } ; 
     }   e l s e   { 
         T o o l s . j s d e b u g g e r . u r l   =   " c h r o m e : / / d e v t o o l s / c o n t e n t / d e b u g g e r / d e b u g g e r . x u l " ; 
         T o o l s . j s d e b u g g e r . b u i l d   =   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
             r e t u r n   n e w   D e b u g g e r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
         } ; 
     } 
 } 
 s w i t c h D e b u g g e r ( ) ; 
 
 S e r v i c e s . p r e f s . a d d O b s e r v e r ( 
     " d e v t o o l s . d e b u g g e r . n e w - d e b u g g e r - f r o n t e n d " , 
     {   o b s e r v e :   s w i t c h D e b u g g e r   } , 
     f a l s e 
 ) ; 
 
 T o o l s . s t y l e E d i t o r   =   { 
     i d :   " s t y l e e d i t o r " , 
     k e y :   l 1 0 n ( " o p e n . c o m m a n d k e y " ) , 
     o r d i n a l :   4 , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . s t y l e e d i t o r . e n a b l e d " , 
     a c c e s s k e y :   l 1 0 n ( " o p e n . a c c e s s k e y " ) , 
     m o d i f i e r s :   " s h i f t " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - s t y l e e d i t o r . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / s t y l e e d i t o r / s t y l e e d i t o r . x u l " , 
     l a b e l :   l 1 0 n ( " T o o l b o x S t y l e E d i t o r . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " T o o l b o x S t y l e E d i t o r . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " T o o l b o x S t y l e E d i t o r . t o o l t i p 3 " , 
         " S h i f t + "   +   f u n c t i o n k e y ( t h i s . k e y ) ) ; 
     } , 
     i n M e n u :   t r u e , 
     c o m m a n d s :   " d e v t o o l s / c l i e n t / s t y l e e d i t o r / s t y l e e d i t o r - c o m m a n d s " , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . h a s A c t o r ( " s t y l e E d i t o r " )   | |   t a r g e t . h a s A c t o r ( " s t y l e S h e e t s " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   S t y l e E d i t o r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . s h a d e r E d i t o r   =   { 
     i d :   " s h a d e r e d i t o r " , 
     o r d i n a l :   5 , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . s h a d e r e d i t o r . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - s h a d e r e d i t o r . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / s h a d e r e d i t o r / s h a d e r e d i t o r . x u l " , 
     l a b e l :   l 1 0 n ( " T o o l b o x S h a d e r E d i t o r . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " T o o l b o x S h a d e r E d i t o r . p a n e l L a b e l " ) , 
     t o o l t i p :   l 1 0 n ( " T o o l b o x S h a d e r E d i t o r . t o o l t i p " ) , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . h a s A c t o r ( " w e b g l " )   & &   ! t a r g e t . c h r o m e ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   S h a d e r E d i t o r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . c a n v a s D e b u g g e r   =   { 
     i d :   " c a n v a s d e b u g g e r " , 
     o r d i n a l :   6 , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . c a n v a s d e b u g g e r . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - c a n v a s . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / c a n v a s d e b u g g e r / c a n v a s d e b u g g e r . x u l " , 
     l a b e l :   l 1 0 n ( " T o o l b o x C a n v a s D e b u g g e r . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " T o o l b o x C a n v a s D e b u g g e r . p a n e l L a b e l " ) , 
     t o o l t i p :   l 1 0 n ( " T o o l b o x C a n v a s D e b u g g e r . t o o l t i p " ) , 
 
     / /   H i d e   t h e   C a n v a s   D e b u g g e r   i n   t h e   A d d - o n   D e b u g g e r   a n d   B r o w s e r   T o o l b o x 
     / /   ( b u g   1 0 4 7 5 2 0 ) . 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . h a s A c t o r ( " c a n v a s " )   & &   ! t a r g e t . c h r o m e ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   C a n v a s D e b u g g e r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . p e r f o r m a n c e   =   { 
     i d :   " p e r f o r m a n c e " , 
     o r d i n a l :   7 , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - p r o f i l e r . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     h i g h l i g h t e d i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - p r o f i l e r - a c t i v e . s v g " , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / p e r f o r m a n c e / p e r f o r m a n c e . x u l " , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . p e r f o r m a n c e . e n a b l e d " , 
     l a b e l :   l 1 0 n ( " p e r f o r m a n c e . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " p e r f o r m a n c e . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " p e r f o r m a n c e . t o o l t i p " ,   " S h i f t + "   +   f u n c t i o n k e y ( t h i s . k e y ) ) ; 
     } , 
     a c c e s s k e y :   l 1 0 n ( " p e r f o r m a n c e . a c c e s s k e y " ) , 
     k e y :   l 1 0 n ( " p e r f o r m a n c e . c o m m a n d k e y " ) , 
     m o d i f i e r s :   " s h i f t " , 
     i n M e n u :   t r u e , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . h a s A c t o r ( " p r o f i l e r " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( f r a m e ,   t a r g e t )   { 
         r e t u r n   n e w   P e r f o r m a n c e P a n e l ( f r a m e ,   t a r g e t ) ; 
     } 
 } ; 
 
 T o o l s . m e m o r y   =   { 
     i d :   " m e m o r y " , 
     o r d i n a l :   8 , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - m e m o r y . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     h i g h l i g h t e d i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - m e m o r y - a c t i v e . s v g " , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / m e m o r y / m e m o r y . x h t m l " , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . m e m o r y . e n a b l e d " , 
     l a b e l :   l 1 0 n ( " m e m o r y . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " m e m o r y . p a n e l L a b e l " ) , 
     t o o l t i p :   l 1 0 n ( " m e m o r y . t o o l t i p " ) , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . g e t T r a i t ( " h e a p S n a p s h o t s " )   & &   ! t a r g e t . i s A d d o n ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( f r a m e ,   t a r g e t )   { 
         r e t u r n   n e w   M e m o r y P a n e l ( f r a m e ,   t a r g e t ) ; 
     } 
 } ; 
 
 T o o l s . n e t M o n i t o r   =   { 
     i d :   " n e t m o n i t o r " , 
     a c c e s s k e y :   l 1 0 n ( " n e t m o n i t o r . a c c e s s k e y " ) , 
     k e y :   l 1 0 n ( " n e t m o n i t o r . c o m m a n d k e y " ) , 
     o r d i n a l :   9 , 
     m o d i f i e r s :   o s S t r i n g   = =   " D a r w i n "   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . n e t m o n i t o r . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - n e t w o r k . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / n e t m o n i t o r / n e t m o n i t o r . x u l " , 
     l a b e l :   l 1 0 n ( " n e t m o n i t o r . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " n e t m o n i t o r . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " n e t m o n i t o r . t o o l t i p 2 " , 
         ( o s S t r i n g   = =   " D a r w i n "   ?   " C m d + O p t + "   :   " C t r l + S h i f t + " )   +   t h i s . k e y ) ; 
     } , 
     i n M e n u :   t r u e , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . g e t T r a i t ( " n e t w o r k M o n i t o r " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   N e t M o n i t o r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . s t o r a g e   =   { 
     i d :   " s t o r a g e " , 
     k e y :   l 1 0 n ( " s t o r a g e . c o m m a n d k e y " ) , 
     o r d i n a l :   1 0 , 
     a c c e s s k e y :   l 1 0 n ( " s t o r a g e . a c c e s s k e y " ) , 
     m o d i f i e r s :   " s h i f t " , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . s t o r a g e . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - s t o r a g e . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / s t o r a g e / s t o r a g e . x u l " , 
     l a b e l :   l 1 0 n ( " s t o r a g e . l a b e l " ) , 
     m e n u L a b e l :   l 1 0 n ( " s t o r a g e . m e n u L a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " s t o r a g e . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " s t o r a g e . t o o l t i p 3 " ,   " S h i f t + "   +   f u n c t i o n k e y ( t h i s . k e y ) ) ; 
     } , 
     i n M e n u :   t r u e , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . i s L o c a l T a b   | | 
                       ( t a r g e t . h a s A c t o r ( " s t o r a g e " )   & &   t a r g e t . g e t T r a i t ( " s t o r a g e I n s p e c t o r " ) ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   S t o r a g e P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . w e b A u d i o E d i t o r   =   { 
     i d :   " w e b a u d i o e d i t o r " , 
     o r d i n a l :   1 1 , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . w e b a u d i o e d i t o r . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - w e b a u d i o . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / w e b a u d i o e d i t o r / w e b a u d i o e d i t o r . x u l " , 
     l a b e l :   l 1 0 n ( " T o o l b o x W e b A u d i o E d i t o r 1 . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " T o o l b o x W e b A u d i o E d i t o r 1 . p a n e l L a b e l " ) , 
     t o o l t i p :   l 1 0 n ( " T o o l b o x W e b A u d i o E d i t o r 1 . t o o l t i p " ) , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   ! t a r g e t . c h r o m e   & &   t a r g e t . h a s A c t o r ( " w e b a u d i o " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   W e b A u d i o E d i t o r P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . s c r a t c h p a d   =   { 
     i d :   " s c r a t c h p a d " , 
     o r d i n a l :   1 2 , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . s c r a t c h p a d . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - s c r a t c h p a d . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / s c r a t c h p a d / s c r a t c h p a d . x u l " , 
     l a b e l :   l 1 0 n ( " s c r a t c h p a d . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " s c r a t c h p a d . p a n e l L a b e l " ) , 
     t o o l t i p :   l 1 0 n ( " s c r a t c h p a d . t o o l t i p " ) , 
     i n M e n u :   f a l s e , 
     c o m m a n d s :   " d e v t o o l s / c l i e n t / s c r a t c h p a d / s c r a t c h p a d - c o m m a n d s " , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . h a s A c t o r ( " c o n s o l e " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   S c r a t c h p a d P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 T o o l s . d o m   =   { 
     i d :   " d o m " , 
     a c c e s s k e y :   l 1 0 n ( " d o m . a c c e s s k e y " ) , 
     k e y :   l 1 0 n ( " d o m . c o m m a n d k e y " ) , 
     o r d i n a l :   1 3 , 
     m o d i f i e r s :   o s S t r i n g   = =   " D a r w i n "   ?   " a c c e l , a l t "   :   " a c c e l , s h i f t " , 
     v i s i b i l i t y s w i t c h :   " d e v t o o l s . d o m . e n a b l e d " , 
     i c o n :   " c h r o m e : / / d e v t o o l s / s k i n / i m a g e s / t o o l - d o m . s v g " , 
     i n v e r t I c o n F o r D a r k T h e m e :   t r u e , 
     u r l :   " c h r o m e : / / d e v t o o l s / c o n t e n t / d o m / d o m . h t m l " , 
     l a b e l :   l 1 0 n ( " d o m . l a b e l " ) , 
     p a n e l L a b e l :   l 1 0 n ( " d o m . p a n e l L a b e l " ) , 
     g e t   t o o l t i p ( )   { 
         r e t u r n   l 1 0 n ( " d o m . t o o l t i p " , 
             ( o s S t r i n g   = =   " D a r w i n "   ?   " C m d + O p t + "   :   " C t r l + S h i f t + " )   +   t h i s . k e y ) ; 
     } , 
     i n M e n u :   t r u e , 
 
     i s T a r g e t S u p p o r t e d :   f u n c t i o n   ( t a r g e t )   { 
         r e t u r n   t a r g e t . g e t T r a i t ( " w e b C o n s o l e C o m m a n d s " ) ; 
     } , 
 
     b u i l d :   f u n c t i o n   ( i f r a m e W i n d o w ,   t o o l b o x )   { 
         r e t u r n   n e w   D o m P a n e l ( i f r a m e W i n d o w ,   t o o l b o x ) ; 
     } 
 } ; 
 
 v a r   d e f a u l t T o o l s   =   [ 
     T o o l s . o p t i o n s , 
     T o o l s . w e b C o n s o l e , 
     T o o l s . i n s p e c t o r , 
     T o o l s . j s d e b u g g e r , 
     T o o l s . s t y l e E d i t o r , 
     T o o l s . s h a d e r E d i t o r , 
     T o o l s . c a n v a s D e b u g g e r , 
     T o o l s . w e b A u d i o E d i t o r , 
     T o o l s . p e r f o r m a n c e , 
     T o o l s . n e t M o n i t o r , 
     T o o l s . s t o r a g e , 
     T o o l s . s c r a t c h p a d , 
     T o o l s . m e m o r y , 
     T o o l s . d o m , 
 ] ; 
 
 e x p o r t s . d e f a u l t T o o l s   =   d e f a u l t T o o l s ; 
 
 T o o l s . d a r k T h e m e   =   { 
     i d :   " d a r k " , 
     l a b e l :   l 1 0 n ( " o p t i o n s . d a r k T h e m e . l a b e l 2 " ) , 
     o r d i n a l :   1 , 
     s t y l e s h e e t s :   [ " c h r o m e : / / d e v t o o l s / s k i n / d a r k - t h e m e . c s s " ] , 
     c l a s s L i s t :   [ " t h e m e - d a r k " ] , 
 } ; 
 
 T o o l s . l i g h t T h e m e   =   { 
     i d :   " l i g h t " , 
     l a b e l :   l 1 0 n ( " o p t i o n s . l i g h t T h e m e . l a b e l 2 " ) , 
     o r d i n a l :   2 , 
     s t y l e s h e e t s :   [ " c h r o m e : / / d e v t o o l s / s k i n / l i g h t - t h e m e . c s s " ] , 
     c l a s s L i s t :   [ " t h e m e - l i g h t " ] , 
 } ; 
 
 T o o l s . f i r e b u g T h e m e   =   { 
     i d :   " f i r e b u g " , 
     l a b e l :   l 1 0 n ( " o p t i o n s . f i r e b u g T h e m e . l a b e l 2 " ) , 
     o r d i n a l :   3 , 
     s t y l e s h e e t s :   [ " c h r o m e : / / d e v t o o l s / s k i n / f i r e b u g - t h e m e . c s s " ] , 
     c l a s s L i s t :   [ " t h e m e - l i g h t " ,   " t h e m e - f i r e b u g " ] , 
 } ; 
 
 e x p o r t s . d e f a u l t T h e m e s   =   [ 
     T o o l s . d a r k T h e m e , 
     T o o l s . l i g h t T h e m e , 
     T o o l s . f i r e b u g T h e m e , 
 ] ; 
 
 / * * 
   *   L o o k u p   l 1 0 n   s t r i n g   f r o m   a   s t r i n g   b u n d l e . 
   * 
   *   @ p a r a m   { s t r i n g }   n a m e 
   *                 T h e   k e y   t o   l o o k u p . 
   *   @ p a r a m   { s t r i n g }   a r g 
   *                 O p t i o n a l   f o r m a t   a r g u m e n t . 
   *   @ r e t u r n s   A   l o c a l i z e d   v e r s i o n   o f   t h e   g i v e n   k e y . 
   * / 
 f u n c t i o n   l 1 0 n ( n a m e ,   a r g )   { 
     t r y   { 
         r e t u r n   a r g   ?   L 1 0 N . g e t F o r m a t S t r ( n a m e ,   a r g )   :   L 1 0 N . g e t S t r ( n a m e ) ; 
     }   c a t c h   ( e x )   { 
         c o n s o l e . l o g ( " E r r o r   r e a d i n g   ' "   +   n a m e   +   " ' " ) ; 
         t h r o w   n e w   E r r o r ( " l 1 0 n   e r r o r   w i t h   "   +   n a m e ) ; 
     } 
 } 
 
 f u n c t i o n   f u n c t i o n k e y ( s h o r t k e y )   { 
     r e t u r n   s h o r t k e y . s p l i t ( " _ " ) [ 1 ] ; 
 } 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/definitions.js     È;                                             G   H=   ;      =   : ¡   Q   5   5   	¡   Q;   
¸   
º=   @    : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   	: ;   
¸   
º=   @   
: ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;   
¸   
º=   @   : ;      =   :    : Q5   ¡   QQ   A=   ,  R ¡   QÖ    [       Q;       0        [   =   ]   >]    =   !]   "=   #]   $C]   %=   &]   '   (   (=   ): ]   *C]   +   (   (=   ,: ]   -   (   (=   .: ]   /B]   0   ]   1   ]   20       Y   =   3]      (   (=   4: ]   5   (   (=   6: ]   7?]       =   8   æ=   9   æ=   :æ]   ;=   <]   $C]   %=   =]   "   (   (=   >: ]   *   (   (=   ?: ]   -   a   /C]   0f   ]   @C]   A   ]   B   ]   1   ]   20   3    Y   =   D]      (   (=   E: ]   7   (   (=   F: ]   5   5   5   	=   8   æ=   9   æ=   :æ]   ;×]    =   G]   $C]   %=   H]   "   (   (=   I: ]   *   (   (=   J: ]   K   (   (=   L: ]   -   a   /C]   0=   M]   @C]   A   ]   B   ]   1   ]   20   C    Y   =   N]      (   (=   O: ]   7   (   (=   P: ]   5   =   8   æ=   9   æ=   :æ]   ;×]    =   Q]   $C]   %=   R]   S=   T]   "   (   (=   U: ]   *   (   (=   V: ]   -   a   /C]   0=   W]   @   ]   1   ]   20   N   X   X:     5   Y¸   Z
=   [[      X]   \B:     Y   =   ^]      (   (=   _: ]   7×]    =   `]   a   (   (=   b: ]   5=   c]   ;=   d]   $C]   %=   e]   "   (   (=   f: ]   *   (   (=   g: ]   -    a   /C]   0=   h]   @   !]   1   "]   20   ]    [   %=   j]   ×]    =   k]   a=   l]   $C]   %=   m]   "   (   (=   n: ]   *   (   (=   o: ]   -   (   (=   p: ]   /   #]   1   $]   20   i    [   (=   r]   ×]    =   s]   a=   t]   $C]   %=   u]   "   (   (=   v: ]   *   (   (=   w: ]   -   (   (=   x: ]   /   &]   1   ']   20   q    Y   =   y]   ×]    =   z]   $C]   %=   {]   S=   |]   "=   }]   a   (   (=   ~: ]   *   (   (=   : ]   -   )a   /   (   (=   : ]   5   (   (=   : ]   7=   c]   ;C]   0   *]   1   +]   20   y    [   .=   ]   ×]    =   ]   $C]   %=   ]   S=   ]   "=   ]   a   (   (=   : ]   *   (   (=   : ]   -   (   (=   : ]   /   ,]   1   -]   20       Y   =   ]      (   (=   : ]   5   (   (=   : ]   7×	]       =   8   æ=   9   æ=   :æ]   ;=   ]   a=   ]   $C]   %=   ]   "   (   (=   : ]   *   (   (=   : ]   -   /a   /C]   0   0]   1   1]   20       Y   =   ]      (   (=   : ]   7×
]       (   (=   : ]   5=   c]   ;=   ]   a=   ]   $C]   %=   ]   "   (   (=   : ]   *   (   (=   : ]   K   (   (=   : ]   -   2a   /C]   0   3]   1   4]   20       [   7=   ]   ×]    =   ]   a=   ]   $C]   %=    ]   "   (   (=   ¡: ]   *   (   (=   ¢: ]   -   (   (=   £: ]   /   5]   1   6]   20       [   :=   ¤]   ×]    =   ¥]   a=   ¦]   $C]   %=   §]   "   (   (=   ¨: ]   *   (   (=   ©: ]   -   (   (=   ª: ]   /B]   0=   «]   @   8]   1   9]   20   ¤    Y   =   ¬]      (   (=   ­: ]   5   (   (=   ®: ]   7×]       =   8   æ=   9   æ=   :æ]   ;=   ¯]   a=   °]   $C]   %=   ±]   "   (   (=   ²: ]   *   (   (=   ³: ]   -   ;a   /C]   0   <]   1   =]   20   ¬Ö   Z       5   `        5   C`       5   3`       5   N`       5   ]`       5   i`       5   q`       5   `       5   y`       5   `   	    5   `   
    5   ¤`       5   `       5   ¬`      Q;      0       [   @=   µ]      (   (=   ¶: ]   *?]    f   >]   ·f   ?]   ¸0   ´    [   C=   º]      (   (=   »: ]   *×]    f   A]   ·f   B]   ¸0   ¹    [   F=   ½]      (   (=   ¾: ]   *×]    f   D]   ·f   E]   ¸0   ¼;   Z       5   ´`        5   ¹`       5   ¼`   0   ¿ã  	 ß	 è	ÏÉÕÜÜÜÜÜÜÜÜÜÜÜÜÜÜÏÝÏÉÐÐ!ÊÊÊÊÊÏÈÏÈÏ	È.Ê2Ð7ÊÊÏÈÏÈËÜÊÊÏÈÏÈÊFÊLÊQÊUÐZÊÊÏÈÏÈÕÜÊÊÏÈÏÈÏÈÊjÊmÊwÊ{Ð  ÊÊÏÈÏÈËÜÊÊÊÏÈÏÈÊÊÊÐ    «ÎÑÊ  ­  ³ÊÊÏÈÊÏÈÊÊÊÏÈÏÈÊÊÊÐ  ÏÊÊÊÊÊÏÈÏÈÏ	ÈÊÐ  ãÊÊÊÊÊÏÈÏÈÏ	ÈÊÐ  ùÊÊÊÊÊÊÏÈÏÈÊÏÈÏÈÊÊÐ ÊÊÊÊÊÊÏÈÏÈÏ	ÈÊÐ )ÊÊÏÈÏÈËÜÊÊÊÏÈÏÈÊÊÐ DÊÊÏÈÏÈÊÊÊÊÏÈÏÈÏÈÊÊ [Ð `ÊÊÊÊÊÏÈÏÈÏ	ÈÊÐ tÊÊÊÊÊÏÈÏÈÏ	ÈÊÊÐ ÊÊÏÈÏÈËÜÊÊÊÏÈÏÈÊÊÐ ¥ÊÏÏÏÏÏÏÏÏÏÏÏÏÏÕÐÊÊÏÈÊÐÊÊÏÈÊÐÊÊÏÈÊÐÊÏÏÕ ß è    Tools   defaultTools   Services   osString%   LocalizationHelper	   L10N   use strict   require   appinfo   OS   loader   lazyGetter   OptionsPanel   InspectorPanel   WebConsolePanel   DebuggerPanel!   StyleEditorPanel#   ShaderEditorPanel'   CanvasDebuggerPanel'   WebAudioEditorPanel   MemoryPanel!   PerformancePanel   NetMonitorPanel   StoragePanel   ScratchpadPanel   DomPanel)   devtools/shared/l10n-   RequireObjectCoercibleE   devtools/locale/startup.properties   exports   options   id   ordinals   chrome://devtools/content/framework/toolbox-options.xhtml   url]   chrome://devtools/skin/images/tool-options.svg	   icon-   invertIconForDarkTheme   theme-body   bgTheme	   l10n   options.label   label   iconOnly%   options.panelLabel   panelLabel+   optionsButton.tooltip   tooltip   inMenu#   isTargetSupported   build   inspector'   inspector.accesskey   accesskey)   inspector.commandkey   key   Darwin   accel,alt   accel,shift   modifiersa   chrome://devtools/skin/images/tool-inspector.svgc   chrome://devtools/content/inspector/inspector.xul   inspector.label)   inspector.panelLabel   commands'   preventClosingOnKey   onkey   webConsole   webconsole   cmd.commandkey/   webConsoleCmd.accesskeyc   chrome://devtools/skin/images/tool-webconsole.svgg   chrome://devtools/content/webconsole/webconsole.xul5   ToolboxTabWebconsole.label)   MenuWebconsole.label   menuLabel9   ToolboxWebConsole.panelLabelW   devtools/client/webconsole/console-commands   jsdebugger/   debuggerMenu.commandkey-   debuggerMenu.accesskey_   chrome://devtools/skin/images/tool-debugger.svgm   chrome://devtools/skin/images/tool-debugger-paused.svg   highlightedicon_   chrome://devtools/content/debugger/debugger.xul+   ToolboxDebugger.label5   ToolboxDebugger.panelLabelU   devtools/client/debugger/debugger-commands   switchDebugger   prefs   addObserverO   devtools.debugger.new-debugger-frontend   observe   styleEditor   styleeditor   open.commandkey9   devtools.styleeditor.enabled!   visibilityswitch   open.accesskey   shifte   chrome://devtools/skin/images/tool-styleeditor.svgk   chrome://devtools/content/styleeditor/styleeditor.xul1   ToolboxStyleEditor.label;   ToolboxStyleEditor.panelLabela   devtools/client/styleeditor/styleeditor-commands   shaderEditor   shadereditor;   devtools.shadereditor.enabledg   chrome://devtools/skin/images/tool-shadereditor.svgo   chrome://devtools/content/shadereditor/shadereditor.xul3   ToolboxShaderEditor.label=   ToolboxShaderEditor.panelLabel7   ToolboxShaderEditor.tooltip   canvasDebugger   canvasdebugger?   devtools.canvasdebugger.enabled[   chrome://devtools/skin/images/tool-canvas.svgw   chrome://devtools/content/canvasdebugger/canvasdebugger.xul7   ToolboxCanvasDebugger.labelA   ToolboxCanvasDebugger.panelLabel;   ToolboxCanvasDebugger.tooltip   performance_   chrome://devtools/skin/images/tool-profiler.svgm   chrome://devtools/skin/images/tool-profiler-active.svgk   chrome://devtools/content/performance/performance.xul9   devtools.performance.enabled#   performance.label-   performance.panelLabel+   performance.accesskey-   performance.commandkey   memory[   chrome://devtools/skin/images/tool-memory.svgi   chrome://devtools/skin/images/tool-memory-active.svg[   chrome://devtools/content/memory/memory.xhtml/   devtools.memory.enabled   memory.label#   memory.panelLabel   memory.tooltip   netMonitor   netmonitor)   netmonitor.accesskey+   netmonitor.commandkey7   devtools.netmonitor.enabled]   chrome://devtools/skin/images/tool-network.svgg   chrome://devtools/content/netmonitor/netmonitor.xul!   netmonitor.label+   netmonitor.panelLabel   storage%   storage.commandkey#   storage.accesskey1   devtools.storage.enabled]   chrome://devtools/skin/images/tool-storage.svg[   chrome://devtools/content/storage/storage.xul   storage.label#   storage.menuLabel%   storage.panelLabel   webAudioEditor   webaudioeditor?   devtools.webaudioeditor.enabled_   chrome://devtools/skin/images/tool-webaudio.svgw   chrome://devtools/content/webaudioeditor/webaudioeditor.xul9   ToolboxWebAudioEditor1.labelC   ToolboxWebAudioEditor1.panelLabel=   ToolboxWebAudioEditor1.tooltip   scratchpad7   devtools.scratchpad.enabledc   chrome://devtools/skin/images/tool-scratchpad.svgg   chrome://devtools/content/scratchpad/scratchpad.xul!   scratchpad.label+   scratchpad.panelLabel%   scratchpad.tooltip]   devtools/client/scratchpad/scratchpad-commands   dom   dom.accesskey   dom.commandkey)   devtools.dom.enabledU   chrome://devtools/skin/images/tool-dom.svgM   chrome://devtools/content/dom/dom.html   dom.label   dom.panelLabel   darkTheme	   dark1   options.darkTheme.label2   stylesheets   classList   lightTheme   light3   options.lightTheme.label2   firebugTheme   firebug7   options.firebugTheme.label2   defaultThemes   ÿÿÿÿ	      switchDebugger	   l10n   functionkey   Tools   defaultTools   Services   osString%   LocalizationHelper	   L10N                 U          ¹                                         \  £     (              ;        =   : 5   .×A    requireS   devtools/client/framework/toolbox-options   OptionsPanel    ÿÿÿÿ              ¹    @            U          ¹                                         Ð       *              ;        =   : 5   0×C    requireS   devtools/client/inspector/inspector-panel   InspectorPanel    ÿÿÿÿ              ¹    @            U          ¹                                         G       +              ;        =   : 5   1×;    requireA   devtools/client/webconsole/panel   WebConsolePanel    ÿÿÿÿ              ¹    @            U          ¹                                         ´  ñ     )              ;        =   : 5   /×7    require=   devtools/client/debugger/panel   DebuggerPanel    ÿÿÿÿ              ¹    @            U          ¹                                            o     ,              ;        =   : 5   2×I    require[   devtools/client/styleeditor/styleeditor-panel!   StyleEditorPanel    ÿÿÿÿ              ¹    @            U          ¹                                           ä     -              ;        =   : 5   3×?    requireE   devtools/client/shadereditor/panel#   ShaderEditorPanel    ÿÿÿÿ              ¹    @            U          ¹                                           _     /              ;        =   : 5   5×C    requireI   devtools/client/canvasdebugger/panel'   CanvasDebuggerPanel    ÿÿÿÿ              ¹    @            U          ¹                                           Ú     /              ;        =   : 5   5×C    requireI   devtools/client/webaudioeditor/panel'   WebAudioEditorPanel    ÿÿÿÿ              ¹    @            U          ¹                                           =     '              ;        =   : 5   -×3    require9   devtools/client/memory/panel   MemoryPanel    ÿÿÿÿ              ¹    @            U          ¹                                         l  ¯     ,              ;        =   : 5   2×=    requireC   devtools/client/performance/panel!   PerformancePanel    ÿÿÿÿ              ¹    @            U          ¹                                         Ý       +              ;        =   : 5   1×;    requireA   devtools/client/netmonitor/panel   NetMonitorPanel    ÿÿÿÿ              ¹    @            U          ¹                                         I       (              ;        =   : 5   .×5    require;   devtools/client/storage/panel   StoragePanel    ÿÿÿÿ              ¹    @            U          ¹                                         ²  þ     +              ;        =   : 5   1×F    requireW   devtools/client/scratchpad/scratchpad-panel   ScratchpadPanel    ÿÿÿÿ              ¹    @            U          ¹                                         %  \     $              ;        =   : 5   *×1    require;   devtools/client/dom/dom-panel   DomPanel    ÿÿÿÿ              ¹    @                          ?   Tools.options.isTargetSupportedc          ¹                                           ¿	  Ø	  .                 C     ÿÿÿÿ              ¹    @           '   Tools.options.buildc         ¹      
                                  í	  >
  2                 ;    AT  T ,  R Ð    OptionsPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @                 id         ordinal         url      	   icon      -   invertIconForDarkTheme         bgTheme         label         iconOnly         panelLabel         tooltip         inMenu      #   isTargetSupported         build                    get tooltip  F      ¹                                        û  n  B                ¹W   Q;        =   ;   =      æ=      æ=   æV   5   : ÏËáCE 	   l10n%   inspector.tooltip2   osString   Darwin   Cmd+Opt+   Ctrl+Shift+   key    ÿÿÿÿ      .this         ¹    @             a   devtools/client/responsivedesign/resize-commands   Y   devtools/client/inspector/inspector-commands             +   Tools.inspector.onkeyc         ¹                                        .  q  M                 T 5    ¸   
:  QÓ !   highlighterUtils   togglePicker    ÿÿÿÿ      panel   toolbox        ¹    @           C   Tools.inspector.isTargetSupportedc         ¹      
                                    É  Q                 T  ¸    
=   : Ï    hasActor   inspector    ÿÿÿÿ      target        ¹    @           +   Tools.inspector.buildc         ¹      
                                  Þ  1  U                 ;    AT  T ,  R Ð    InspectorPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @              get tooltip  F      ¹                                        :  µ  f                ¹W   Q;        =   ;   =      æ=      æ=   æV   5   : ÏËági 	   l10n5   ToolboxWebconsole.tooltip2   osString   Darwin   Cmd+Opt+   Ctrl+Shift+   key    ÿÿÿÿ      .this         ¹    @           -   Tools.webConsole.onkeyc  2       ¹                                        2  Ç  n                 T 5       æT ¸   
:  æT  ¸   
:  Q;   ÈÊusÎ    splitConsole#   focusConsoleInput   focusInput   undefined    ÿÿÿÿ      panel   toolbox        ¹    @           E   Tools.webConsole.isTargetSupportedc          ¹                                           è    w                 C     ÿÿÿÿ              ¹    @           -   Tools.webConsole.buildc         ¹      
                                    j  {                 ;    AT  T ,  R Ð    WebConsolePanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @              get tooltip  F      ¹                                          þ                  ¹W   Q;        =   ;   =      æ=      æ=   æV   5   : ÏËá   	   l10n1   ToolboxDebugger.tooltip2   osString   Darwin   Cmd+Opt+   Ctrl+Shift+   key    ÿÿÿÿ      .this         ¹    @           E   Tools.jsdebugger.isTargetSupportedc          ¹                                           i                     C     ÿÿÿÿ              ¹    @           -   Tools.jsdebugger.buildc         ¹      
                                    é                   ;    AT  T ,  R Ð    DebuggerPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @              switchDebugger          ¹      &                                   a                    ;    5   ¸   
=   :    XæÇ   ;      =   : 5      Q;   5   =   
0   	Q;   5       0   QÈ   0æ;   5   =   0   	Q;   5      0   QæÖS
ÏÎÕÜÕÖ    Services   prefs   getBoolPrefO   devtools.debugger.new-debugger-frontend   requireE   devtools/client/debugger/new/panel   DebuggerPanel   Tools   jsdebugger   urlc   chrome://devtools/content/debugger/new/index.html   build_   chrome://devtools/content/debugger/debugger.xul    ÿÿÿÿ                        !   NewDebuggerPanel                     K   switchDebugger/Tools.jsdebugger.buildc         ¹       
                                  *    ¡   &                    AT  T ,  R Õ     ÿÿÿÿ      iframeWindow   toolbox        ¹    @           K   switchDebugger/Tools.jsdebugger.buildc         ¹      
                                    Z  ¦   &              ;    AT  T ,  R Ð    DebuggerPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @    $   H   ÿÿÿÿ                observe                    get tooltip  6      ¹                                        ¼    ¿                ¹W   Q;        =   =   ;      V   5   : : ÏØ  À 	   l10n7   ToolboxStyleEditor.tooltip3   Shift+   functionkey   key    ÿÿÿÿ      .this         ¹    @           G   Tools.styleEditor.isTargetSupportedc  .       ¹                                          æ  Æ                 T  ¸    
=   : D   æQT  ¸    
=   : æÏÙ"    hasActor   styleEditor   styleSheets    ÿÿÿÿ      target        ¹    @           /   Tools.styleEditor.buildc         ¹      
                                  û  P  Ê                 ;    AT  T ,  R Ð !   StyleEditorPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @           I   Tools.shaderEditor.isTargetSupportedc  %       ¹                                          \  Ú                 T  ¸    
=   : E   æQT  5    æÏÊÊ    hasActor   webgl   chrome    ÿÿÿÿ      target        ¹    @           1   Tools.shaderEditor.buildc         ¹      
                                  q  Ç  Þ                 ;    AT  T ,  R Ð #   ShaderEditorPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @                 id         ordinal      !   visibilityswitch      	   icon      -   invertIconForDarkTheme         url         label         panelLabel         tooltip      #   isTargetSupported         build                 M   Tools.canvasDebugger.isTargetSupportedc  %       ¹                                        õ   ;!  ð                 T  ¸    
=   : E   æQT  5    æÏÊÊ    hasActor   canvas   chrome    ÿÿÿÿ      target        ¹    @           5   Tools.canvasDebugger.buildc         ¹      
                                  P!  ¨!  ô                 ;    AT  T ,  R Ð '   CanvasDebuggerPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @                 id         ordinal      !   visibilityswitch      	   icon      -   invertIconForDarkTheme         url         label         panelLabel         tooltip      #   isTargetSupported         build                    get tooltip  6      ¹                                        a#  ³#                 ¹W   Q;        =   =   ;      V   5   : : ç.ÿÿÿÙ 	   l10n'   performance.tooltip   Shift+   functionkey   key    ÿÿÿÿ      .this         ¹    @           G   Tools.performance.isTargetSupportedc         ¹      
                                  M$  $                  T  ¸    
=   : Ï    hasActor   profiler    ÿÿÿÿ      target        ¹    @           /   Tools.performance.buildc         ¹      
                                  $  Ý$                  ;    AT  T ,  R Ð !   PerformancePanel    ÿÿÿÿ      frame   target        ¹    @           =   Tools.memory.isTargetSupportedc  %       ¹                                        ¦&  ô&                   T  ¸    
=   : E   æQT  5    æÏÊ$Ê    getTrait   heapSnapshots   isAddon    ÿÿÿÿ      target        ¹    @           %   Tools.memory.buildc         ¹      
                                  	'  I'  $                ;    AT  T ,  R Ð    MemoryPanel    ÿÿÿÿ      frame   target        ¹    @                 id         ordinal      	   icon      -   invertIconForDarkTheme         highlightedicon         url      !   visibilityswitch         label         panelLabel         tooltip      #   isTargetSupported         build                    get tooltip  F      ¹                                        ?)  ³)  5               ¹W   Q;        =   ;   =      æ=      æ=   æV   5   : ÏËá 6 	   l10n'   netmonitor.tooltip2   osString   Darwin   Cmd+Opt+   Ctrl+Shift+   key    ÿÿÿÿ      .this         ¹    @           E   Tools.netMonitor.isTargetSupportedc         ¹      
                                  ä)   *  ;                T  ¸    
=   : Ï    getTrait   networkMonitor    ÿÿÿÿ      target        ¹    @           -   Tools.netMonitor.buildc         ¹      
                                  5*  *  ?                ;    AT  T ,  R Ð    NetMonitorPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @              get tooltip  6      ¹                                        b,  ±,  Q               ¹W   Q;        =   =   ;      V   5   : : ç+ÿÿÿÜ 	   l10n!   storage.tooltip3   Shift+   functionkey   key    ÿÿÿÿ      .this         ¹    @           ?   Tools.storage.isTargetSupportedc  =       ¹                                        â,  `-  V                T  5    D   2æQT  ¸   
=   : E   æQT  ¸   
=   : æÏÏÙ    isLocalTab   hasActor   storage   getTrait!   storageInspector    ÿÿÿÿ      target        ¹    @           '   Tools.storage.buildc         ¹      
                                  u-  Æ-  [                ;    AT  T ,  R Ð    StoragePanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @           M   Tools.webAudioEditor.isTargetSupportedc  %       ¹                                        /  å/  k                T  5     E   æQT  ¸   
=   : æß    chrome   hasActor   webaudio    ÿÿÿÿ      target        ¹    @           5   Tools.webAudioEditor.buildc         ¹      
                                  ú/  R0  o                ;    AT  T ,  R Ð '   WebAudioEditorPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @                 id         ordinal      !   visibilityswitch      	   icon      -   invertIconForDarkTheme         url         label         panelLabel         tooltip      #   isTargetSupported         build                 E   Tools.scratchpad.isTargetSupportedc         ¹      
                                  B2  w2                  T  ¸    
=   : Ï    hasActor   console    ÿÿÿÿ      target        ¹    @           -   Tools.scratchpad.buildc         ¹      
                                  2  à2                  ;    AT  T ,  R Ð    ScratchpadPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @                 id         ordinal      !   visibilityswitch      	   icon      -   invertIconForDarkTheme         url         label         panelLabel         tooltip         inMenu         commands      #   isTargetSupported         build                    get tooltip  F      ¹                                        4  5                 ¹W   Q;        =   ;   =      æ=      æ=   æV   5   : ÏËá  	   l10n   dom.tooltip   osString   Darwin   Cmd+Opt+   Ctrl+Shift+   key    ÿÿÿÿ      .this         ¹    @           7   Tools.dom.isTargetSupportedc         ¹      
                                  45  t5                  T  ¸    
=   : Ï    getTrait%   webConsoleCommands    ÿÿÿÿ      target        ¹    @              Tools.dom.buildc         ¹      
                                  5  Ö5                   ;    AT  T ,  R Ð    DomPanel    ÿÿÿÿ      iframeWindow   toolbox        ¹    @             K   chrome://devtools/skin/dark-theme.css                  theme-dark                   id         label         ordinal         stylesheets         classList                   M   chrome://devtools/skin/light-theme.css                  theme-light                   id         label         ordinal         stylesheets         classList                   Q   chrome://devtools/skin/firebug-theme.css                  theme-light      theme-firebug                   id         label         ordinal         stylesheets         classList                 	   l10n         ¹   	   (                                ²:  ;  ß               T     æ;    ¸   
T  T :    æ;    ¸   
T  : æ   Qæ   Qv   Q;   ¸   
=   T  =   : Q;   A=   T  ,  R pÉ    æ9ØØ æÉ âÌßÓÌ 	   L10N   getFormatStr   getStr   console   log   Error reading '   '   Error!   l10n error with     ÿÿÿÿ   	   name   arg                     ex                  =      G   =   ÿÿÿÿ¹    @              functionkey         ¹                                        ;  Ç;  è                T  ¸    
=   : ?7Ï    split   _    ÿÿÿÿ      shortkey        ¹    @ 