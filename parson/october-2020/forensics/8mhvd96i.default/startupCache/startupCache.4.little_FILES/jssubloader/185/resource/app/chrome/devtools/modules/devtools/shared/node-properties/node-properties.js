   20170118123726  <   ¹      d                                `  £K       / * * 
   *   T h e   M I T   L i c e n s e   ( M I T ) 
   * 
   *   C o p y r i g h t   ( c )   2 0 1 4   G a b r i e l   L l a m a s 
   * 
   *   P e r m i s s i o n   i s   h e r e b y   g r a n t e d ,   f r e e   o f   c h a r g e ,   t o   a n y   p e r s o n   o b t a i n i n g   a   c o p y 
   *   o f   t h i s   s o f t w a r e   a n d   a s s o c i a t e d   d o c u m e n t a t i o n   f i l e s   ( t h e   " S o f t w a r e " ) ,   t o   d e a l 
   *   i n   t h e   S o f t w a r e   w i t h o u t   r e s t r i c t i o n ,   i n c l u d i n g   w i t h o u t   l i m i t a t i o n   t h e   r i g h t s 
   *   t o   u s e ,   c o p y ,   m o d i f y ,   m e r g e ,   p u b l i s h ,   d i s t r i b u t e ,   s u b l i c e n s e ,   a n d / o r   s e l l 
   *   c o p i e s   o f   t h e   S o f t w a r e ,   a n d   t o   p e r m i t   p e r s o n s   t o   w h o m   t h e   S o f t w a r e   i s 
   *   f u r n i s h e d   t o   d o   s o ,   s u b j e c t   t o   t h e   f o l l o w i n g   c o n d i t i o n s : 
   * 
   *   T h e   a b o v e   c o p y r i g h t   n o t i c e   a n d   t h i s   p e r m i s s i o n   n o t i c e   s h a l l   b e   i n c l u d e d   i n 
   *   a l l   c o p i e s   o r   s u b s t a n t i a l   p o r t i o n s   o f   t h e   S o f t w a r e . 
   * 
   *   T H E   S O F T W A R E   I S   P R O V I D E D   " A S   I S " ,   W I T H O U T   W A R R A N T Y   O F   A N Y   K I N D ,   E X P R E S S   O R 
   *   I M P L I E D ,   I N C L U D I N G   B U T   N O T   L I M I T E D   T O   T H E   W A R R A N T I E S   O F   M E R C H A N T A B I L I T Y , 
   *   F I T N E S S   F O R   A   P A R T I C U L A R   P U R P O S E   A N D   N O N I N F R I N G E M E N T .   I N   N O   E V E N T   S H A L L   T H E 
   *   A U T H O R S   O R   C O P Y R I G H T   H O L D E R S   B E   L I A B L E   F O R   A N Y   C L A I M ,   D A M A G E S   O R   O T H E R 
   *   L I A B I L I T Y ,   W H E T H E R   I N   A N   A C T I O N   O F   C O N T R A C T ,   T O R T   O R   O T H E R W I S E ,   A R I S I N G   F R O M , 
   *   O U T   O F   O R   I N   C O N N E C T I O N   W I T H   T H E   S O F T W A R E   O R   T H E   U S E   O R   O T H E R   D E A L I N G S   I N 
   *   T H E   S O F T W A R E . 
   * 
   * / 
 
 " u s e   s t r i c t " ; 
 
 v a r   h e x   =   f u n c t i o n   ( c ) { 
     s w i t c h   ( c ) { 
         c a s e   " 0 " :   r e t u r n   0 ; 
         c a s e   " 1 " :   r e t u r n   1 ; 
         c a s e   " 2 " :   r e t u r n   2 ; 
         c a s e   " 3 " :   r e t u r n   3 ; 
         c a s e   " 4 " :   r e t u r n   4 ; 
         c a s e   " 5 " :   r e t u r n   5 ; 
         c a s e   " 6 " :   r e t u r n   6 ; 
         c a s e   " 7 " :   r e t u r n   7 ; 
         c a s e   " 8 " :   r e t u r n   8 ; 
         c a s e   " 9 " :   r e t u r n   9 ; 
         c a s e   " a " :   c a s e   " A " :   r e t u r n   1 0 ; 
         c a s e   " b " :   c a s e   " B " :   r e t u r n   1 1 ; 
         c a s e   " c " :   c a s e   " C " :   r e t u r n   1 2 ; 
         c a s e   " d " :   c a s e   " D " :   r e t u r n   1 3 ; 
         c a s e   " e " :   c a s e   " E " :   r e t u r n   1 4 ; 
         c a s e   " f " :   c a s e   " F " :   r e t u r n   1 5 ; 
     } 
 } ; 
 
 v a r   p a r s e   =   f u n c t i o n   ( d a t a ,   o p t i o n s ,   h a n d l e r s ,   c o n t r o l ) { 
     v a r   c ; 
     v a r   c o d e ; 
     v a r   e s c a p e ; 
     v a r   s k i p S p a c e   =   t r u e ; 
     v a r   i s C o m m e n t L i n e ; 
     v a r   i s S e c t i o n L i n e ; 
     v a r   n e w L i n e   =   t r u e ; 
     v a r   m u l t i L i n e ; 
     v a r   i s K e y   =   t r u e ; 
     v a r   k e y   =   " " ; 
     v a r   v a l u e   =   " " ; 
     v a r   s e c t i o n ; 
     v a r   u n i c o d e ; 
     v a r   u n i c o d e R e m a i n i n g ; 
     v a r   e s c a p i n g U n i c o d e ; 
     v a r   k e y S p a c e ; 
     v a r   s e p ; 
     v a r   i g n o r e L i n e ; 
 
     v a r   l i n e   =   f u n c t i o n   ( ) { 
         i f   ( k e y   | |   v a l u e   | |   s e p ) { 
             h a n d l e r s . l i n e   ( k e y ,   v a l u e ) ; 
             k e y   =   " " ; 
             v a l u e   =   " " ; 
             s e p   =   f a l s e ; 
         } 
     } ; 
 
     v a r   e s c a p e S t r i n g   =   f u n c t i o n   ( k e y ,   c ,   c o d e ) { 
         i f   ( e s c a p i n g U n i c o d e   & &   u n i c o d e R e m a i n i n g ) { 
             u n i c o d e   =   ( u n i c o d e   < <   4 )   +   h e x   ( c ) ; 
             i f   ( - - u n i c o d e R e m a i n i n g )   r e t u r n   k e y ; 
             e s c a p e   =   f a l s e ; 
             e s c a p i n g U n i c o d e   =   f a l s e ; 
             r e t u r n   k e y   +   S t r i n g . f r o m C h a r C o d e   ( u n i c o d e ) ; 
         } 
 
         / / c o d e   1 1 7 :   u 
         i f   ( c o d e   = = =   1 1 7 ) { 
             u n i c o d e   =   0 ; 
             e s c a p i n g U n i c o d e   =   t r u e ; 
             u n i c o d e R e m a i n i n g   =   4 ; 
             r e t u r n   k e y ; 
         } 
 
         e s c a p e   =   f a l s e ; 
 
         / / c o d e   1 1 6 :   t 
         / / c o d e   1 1 4 :   r 
         / / c o d e   1 1 0 :   n 
         / / c o d e   1 0 2 :   f 
         i f   ( c o d e   = = =   1 1 6 )   r e t u r n   k e y   +   " \ t " ; 
         e l s e   i f   ( c o d e   = = =   1 1 4 )   r e t u r n   k e y   +   " \ r " ; 
         e l s e   i f   ( c o d e   = = =   1 1 0 )   r e t u r n   k e y   +   " \ n " ; 
         e l s e   i f   ( c o d e   = = =   1 0 2 )   r e t u r n   k e y   +   " \ f " ; 
 
         r e t u r n   k e y   +   c ; 
     } ; 
 
     v a r   i s C o m m e n t ; 
     v a r   i s S e p a r a t o r ; 
 
     i f   ( o p t i o n s . _ s t r i c t ) { 
         i s C o m m e n t   =   f u n c t i o n   ( c ,   c o d e ,   o p t i o n s ) { 
             r e t u r n   o p t i o n s . _ c o m m e n t s [ c ] ; 
         } ; 
 
         i s S e p a r a t o r   =   f u n c t i o n   ( c ,   c o d e ,   o p t i o n s ) { 
             r e t u r n   o p t i o n s . _ s e p a r a t o r s [ c ] ; 
         } ; 
     } e l s e { 
         i s C o m m e n t   =   f u n c t i o n   ( c ,   c o d e ,   o p t i o n s ) { 
             / / c o d e   3 5 :   # 
             / / c o d e   3 3 :   ! 
             r e t u r n   c o d e   = = =   3 5   | |   c o d e   = = =   3 3   | |   o p t i o n s . _ c o m m e n t s [ c ] ; 
         } ; 
 
         i s S e p a r a t o r   =   f u n c t i o n   ( c ,   c o d e ,   o p t i o n s ) { 
             / / c o d e   6 1 :   = 
             / / c o d e   5 8 :   : 
             r e t u r n   c o d e   = = =   6 1   | |   c o d e   = = =   5 8   | |   o p t i o n s . _ s e p a r a t o r s [ c ] ; 
         } ; 
     } 
 
     f o r   ( v a r   i = ~ ~ c o n t r o l . r e s u m e ;   i < d a t a . l e n g t h ;   i + + ) { 
         i f   ( c o n t r o l . a b o r t )   r e t u r n ; 
         i f   ( c o n t r o l . p a u s e ) { 
             / / T h e   n e x t   i n d e x   i s   a l w a y s   t h e   s t a r t   o f   a   n e w   l i n e ,   i t ' s   a   l i k e   a   f r e s h 
             / / s t a r t ,   t h e r e ' s   n o   n e e d   t o   s a v e   t h e   c u r r e n t   s t a t e 
             c o n t r o l . r e s u m e   =   i ; 
             r e t u r n ; 
         } 
 
         c   =   d a t a [ i ] ; 
         c o d e   =   d a t a . c h a r C o d e A t   ( i ) ; 
 
         / / c o d e   1 3 :   \ r 
         i f   ( c o d e   = = =   1 3 )   c o n t i n u e ; 
 
         i f   ( i s C o m m e n t L i n e ) { 
             / / c o d e   1 0 :   \ n 
             i f   ( c o d e   = = =   1 0 ) { 
                 i s C o m m e n t L i n e   =   f a l s e ; 
                 n e w L i n e   =   t r u e ; 
                 s k i p S p a c e   =   t r u e ; 
             } 
             c o n t i n u e ; 
         } 
 
         / / c o d e   9 3 :   ] 
         i f   ( i s S e c t i o n L i n e   & &   c o d e   = = =   9 3 ) { 
             h a n d l e r s . s e c t i o n   ( s e c t i o n ) ; 
             / / I g n o r e   c h a r s   a f t e r   t h e   s e c t i o n   i n   t h e   s a m e   l i n e 
             i g n o r e L i n e   =   t r u e ; 
             c o n t i n u e ; 
         } 
 
         i f   ( s k i p S p a c e ) { 
             / / c o d e   3 2 :   "   "   ( s p a c e ) 
             / / c o d e   9 :   \ t 
             / / c o d e   1 2 :   \ f 
             i f   ( c o d e   = = =   3 2   | |   c o d e   = = =   9   | |   c o d e   = = =   1 2 ) { 
                 c o n t i n u e ; 
             } 
             / / c o d e   1 0 :   \ n 
             i f   ( ! m u l t i L i n e   & &   c o d e   = = =   1 0 ) { 
                 / / E m p t y   l i n e   o r   k e y   w /   s e p a r a t o r   a n d   w / o   v a l u e 
                 i s K e y   =   t r u e ; 
                 k e y S p a c e   =   f a l s e ; 
                 n e w L i n e   =   t r u e ; 
                 l i n e   ( ) ; 
                 c o n t i n u e ; 
             } 
             s k i p S p a c e   =   f a l s e ; 
             m u l t i L i n e   =   f a l s e ; 
         } 
 
         i f   ( n e w L i n e ) { 
             n e w L i n e   =   f a l s e ; 
             i f   ( i s C o m m e n t   ( c ,   c o d e ,   o p t i o n s ) ) { 
                 i s C o m m e n t L i n e   =   t r u e ; 
                 c o n t i n u e ; 
             } 
             / / c o d e   9 1 :   [ 
             i f   ( o p t i o n s . s e c t i o n s   & &   c o d e   = = =   9 1 ) { 
                 s e c t i o n   =   " " ; 
                 i s S e c t i o n L i n e   =   t r u e ; 
                 c o n t r o l . s k i p S e c t i o n   =   f a l s e ; 
                 c o n t i n u e ; 
             } 
         } 
 
         / / c o d e   1 0 :   \ n 
         i f   ( c o d e   ! = =   1 0 ) { 
             i f   ( c o n t r o l . s k i p S e c t i o n   | |   i g n o r e L i n e )   c o n t i n u e ; 
 
             i f   ( ! i s S e c t i o n L i n e ) { 
                 i f   ( ! e s c a p e   & &   i s K e y   & &   i s S e p a r a t o r   ( c ,   c o d e ,   o p t i o n s ) ) { 
                     / / s e p   i s   n e e d e d   t o   d e t e c t   e m p t y   k e y   a n d   e m p t y   v a l u e   w i t h   a 
                     / / n o n - w h i t e s p a c e   s e p a r a t o r 
                     s e p   =   t r u e ; 
                     i s K e y   =   f a l s e ; 
                     k e y S p a c e   =   f a l s e ; 
                     / / S k i p   w h i t e s p a c e   b e t w e e n   s e p a r a t o r   a n d   v a l u e 
                     s k i p S p a c e   =   t r u e ; 
                     c o n t i n u e ; 
                 } 
             } 
 
             / / c o d e   9 2 :   " \ "   ( b a c k s l a s h ) 
             i f   ( c o d e   = = =   9 2 ) { 
                 i f   ( e s c a p e ) { 
                     i f   ( e s c a p i n g U n i c o d e )   c o n t i n u e ; 
 
                     i f   ( k e y S p a c e ) { 
                         / / L i n e   w i t h   w h i t e s p a c e   s e p a r a t o r 
                         k e y S p a c e   =   f a l s e ; 
                         i s K e y   =   f a l s e ; 
                     } 
 
                     i f   ( i s S e c t i o n L i n e )   s e c t i o n   + =   " \ \ " ; 
                     e l s e   i f   ( i s K e y )   k e y   + =   " \ \ " ; 
                     e l s e   v a l u e   + =   " \ \ " ; 
                 } 
                 e s c a p e   =   ! e s c a p e ; 
             } e l s e { 
                 i f   ( k e y S p a c e ) { 
                     / / L i n e   w i t h   w h i t e s p a c e   s e p a r a t o r 
                     k e y S p a c e   =   f a l s e ; 
                     i s K e y   =   f a l s e ; 
                 } 
 
                 i f   ( i s S e c t i o n L i n e ) { 
                     i f   ( e s c a p e )   s e c t i o n   =   e s c a p e S t r i n g   ( s e c t i o n ,   c ,   c o d e ) ; 
                     e l s e   s e c t i o n   + =   c ; 
                 } e l s e   i f   ( i s K e y ) { 
                     i f   ( e s c a p e ) { 
                         k e y   =   e s c a p e S t r i n g   ( k e y ,   c ,   c o d e ) ; 
                     } e l s e { 
                         / / c o d e   3 2 :   "   "   ( s p a c e ) 
                         / / c o d e   9 :   \ t 
                         / / c o d e   1 2 :   \ f 
                         i f   ( c o d e   = = =   3 2   | |   c o d e   = = =   9   | |   c o d e   = = =   1 2 ) { 
                             k e y S p a c e   =   t r u e ; 
                             / / S k i p   w h i t e s p a c e   b e t w e e n   k e y   a n d   s e p a r a t o r 
                             s k i p S p a c e   =   t r u e ; 
                             c o n t i n u e ; 
                         } 
                         k e y   + =   c ; 
                     } 
                 } e l s e { 
                     i f   ( e s c a p e )   v a l u e   =   e s c a p e S t r i n g   ( v a l u e ,   c ,   c o d e ) ; 
                     e l s e   v a l u e   + =   c ; 
                 } 
             } 
         } e l s e { 
             i f   ( e s c a p e ) { 
                 i f   ( ! e s c a p i n g U n i c o d e ) { 
                     e s c a p e   =   f a l s e ; 
                 } 
                 s k i p S p a c e   =   t r u e ; 
                 m u l t i L i n e   =   t r u e ; 
             } e l s e { 
                 i f   ( i s S e c t i o n L i n e ) { 
                     i s S e c t i o n L i n e   =   f a l s e ; 
                     i f   ( ! i g n o r e L i n e ) { 
                         / / T h e   s e c t i o n   d o e s n ' t   e n d   w i t h   ] ,   i t ' s   a   k e y 
                         c o n t r o l . e r r o r   =   n e w   E r r o r   ( " T h e   s e c t i o n   l i n e   \ " "   +   s e c t i o n   + 
                                 " \ "   m u s t   e n d   w i t h   \ " ] \ " " ) ; 
                         r e t u r n ; 
                     } 
                     i g n o r e L i n e   =   f a l s e ; 
                 } 
                 n e w L i n e   =   t r u e ; 
                 s k i p S p a c e   =   t r u e ; 
                 i s K e y   =   t r u e ; 
 
                 l i n e   ( ) ; 
             } 
         } 
     } 
 
     c o n t r o l . p a r s e d   =   t r u e ; 
 
     i f   ( i s S e c t i o n L i n e   & &   ! i g n o r e L i n e ) { 
         / / T h e   s e c t i o n   d o e s n ' t   e n d   w i t h   ] ,   i t ' s   a   k e y 
         c o n t r o l . e r r o r   =   n e w   E r r o r   ( " T h e   s e c t i o n   l i n e   \ " "   +   s e c t i o n   +   " \ "   m u s t   e n d "   + 
                 " w i t h   \ " ] \ " " ) ; 
         r e t u r n ; 
     } 
     l i n e   ( ) ; 
 } ; 
 
 v a r   I N C L U D E _ K E Y   =   " i n c l u d e " ; 
 v a r   I N D E X _ F I L E   =   " i n d e x . p r o p e r t i e s " ; 
 
 v a r   c a s t   =   f u n c t i o n   ( v a l u e ) { 
     i f   ( v a l u e   = = =   n u l l   | |   v a l u e   = = =   " n u l l " )   r e t u r n   n u l l ; 
     i f   ( v a l u e   = = =   " u n d e f i n e d " )   r e t u r n   u n d e f i n e d ; 
     i f   ( v a l u e   = = =   " t r u e " )   r e t u r n   t r u e ; 
     i f   ( v a l u e   = = =   " f a l s e " )   r e t u r n   f a l s e ; 
     v a r   v   =   N u m b e r   ( v a l u e ) ; 
     r e t u r n   i s N a N   ( v )   ?   v a l u e   :   v ; 
 } ; 
 
 v a r   e x p a n d   =   f u n c t i o n     ( o ,   s t r ,   o p t i o n s ,   c b ) { 
     i f   ( ! o p t i o n s . v a r i a b l e s   | |   ! s t r )   r e t u r n   c b   ( n u l l ,   s t r ) ; 
 
     v a r   s t a c k   =   [ ] ; 
     v a r   c ; 
     v a r   c p ; 
     v a r   k e y   =   " " ; 
     v a r   s e c t i o n   =   n u l l ; 
     v a r   v ; 
     v a r   h o l d e r ; 
     v a r   t ; 
     v a r   n ; 
 
     f o r   ( v a r   i = 0 ;   i < s t r . l e n g t h ;   i + + ) { 
         c   =   s t r [ i ] ; 
 
         i f   ( c p   = = =   " $ "   & &   c   = = =   " { " ) { 
             k e y   =   k e y . s u b s t r i n g   ( 0 ,   k e y . l e n g t h   -   1 ) ; 
             s t a c k . p u s h   ( { 
                 k e y :   k e y , 
                 s e c t i o n :   s e c t i o n 
             } ) ; 
             k e y   =   " " ; 
             s e c t i o n   =   n u l l ; 
             c o n t i n u e ; 
         } e l s e   i f   ( s t a c k . l e n g t h ) { 
             i f   ( o p t i o n s . s e c t i o n s   & &   c   = = =   " | " ) { 
                 s e c t i o n   =   k e y ; 
                 k e y   =   " " ; 
                 c o n t i n u e ; 
             } e l s e   i f   ( c   = = =   " } " ) { 
                 h o l d e r   =   s e c t i o n   ! = =   n u l l   ?   s e a r c h V a l u e   ( o ,   s e c t i o n ,   t r u e )   :   o ; 
                 i f   ( ! h o l d e r ) { 
                     r e t u r n   c b   ( n e w   E r r o r   ( " T h e   s e c t i o n   \ " "   +   s e c t i o n   +   " \ "   d o e s   n o t   "   + 
                             " e x i s t " ) ) ; 
                 } 
 
                 v   =   o p t i o n s . n a m e s p a c e s   ?   s e a r c h V a l u e   ( h o l d e r ,   k e y )   :   h o l d e r [ k e y ] ; 
                 i f   ( v   = = =   u n d e f i n e d ) { 
                     / / R e a d   t h e   e x t e r n a l   v a r s 
                     v   =   o p t i o n s . n a m e s p a c e s 
                             ?   s e a r c h V a l u e   ( o p t i o n s . _ v a r s ,   k e y ) 
                             :   o p t i o n s . _ v a r s [ k e y ] 
 
                     i f   ( v   = = =   u n d e f i n e d ) { 
                         r e t u r n   c b   ( n e w   E r r o r   ( " T h e   p r o p e r t y   \ " "   +   k e y   +   " \ "   d o e s   n o t   "   + 
                                 " e x i s t " ) ) ; 
                     } 
                 } 
 
                 t   =   s t a c k . p o p   ( ) ; 
                 s e c t i o n   =   t . s e c t i o n ; 
                 k e y   =   t . k e y   +   ( v   = = =   n u l l   ?   " "   :   v ) ; 
                 c o n t i n u e ; 
             } 
         } 
 
         c p   =   c ; 
         k e y   + =   c ; 
     } 
 
     i f   ( s t a c k . l e n g t h   ! = =   0 ) { 
         r e t u r n   c b   ( n e w   E r r o r   ( " M a l f o r m e d   v a r i a b l e :   "   +   s t r ) ) ; 
     } 
 
     c b   ( n u l l ,   k e y ) ; 
 } ; 
 
 v a r   s e a r c h V a l u e   =   f u n c t i o n   ( o ,   c h a i n ,   s e c t i o n ) { 
     v a r   n   =   c h a i n . s p l i t   ( " . " ) ; 
     v a r   s t r ; 
 
     f o r   ( v a r   i = 0 ;   i < n . l e n g t h - 1 ;   i + + ) { 
         s t r   =   n [ i ] ; 
         i f   ( o [ s t r ]   = = =   u n d e f i n e d )   r e t u r n ; 
         o   =   o [ s t r ] ; 
     } 
 
     v a r   v   =   o [ n [ n . l e n g t h   -   1 ] ] ; 
     i f   ( s e c t i o n ) { 
         i f   ( t y p e o f   v   ! = =   " o b j e c t " )   r e t u r n ; 
         r e t u r n   v ; 
     } e l s e { 
         i f   ( t y p e o f   v   = = =   " o b j e c t " )   r e t u r n ; 
         r e t u r n   v ; 
     } 
 } ; 
 
 v a r   n a m e s p a c e K e y   =   f u n c t i o n   ( o ,   k e y ,   v a l u e ) { 
     v a r   n   =   k e y . s p l i t   ( " . " ) ; 
     v a r   s t r ; 
 
     f o r   ( v a r   i = 0 ;   i < n . l e n g t h - 1 ;   i + + ) { 
         s t r   =   n [ i ] ; 
         i f   ( o [ s t r ]   = = =   u n d e f i n e d ) { 
             o [ s t r ]   =   { } ; 
         } e l s e   i f   ( t y p e o f   o [ s t r ]   ! = =   " o b j e c t " ) { 
             t h r o w   n e w   E r r o r   ( " I n v a l i d   n a m e s p a c e   c h a i n   i n   t h e   p r o p e r t y   n a m e   ' "   + 
                     k e y   +   " '   ( ' "   +   s t r   +   " '   h a s   a l r e a d y   a   v a l u e ) " ) ; 
         } 
         o   =   o [ s t r ] ; 
     } 
 
     o [ n [ n . l e n g t h   -   1 ] ]   =   v a l u e ; 
 } ; 
 
 v a r   n a m e s p a c e S e c t i o n   =   f u n c t i o n   ( o ,   s e c t i o n ) { 
     v a r   n   =   s e c t i o n . s p l i t   ( " . " ) ; 
     v a r   s t r ; 
 
     f o r   ( v a r   i = 0 ;   i < n . l e n g t h ;   i + + ) { 
         s t r   =   n [ i ] ; 
         i f   ( o [ s t r ]   = = =   u n d e f i n e d ) { 
             o [ s t r ]   =   { } ; 
         } e l s e   i f   ( t y p e o f   o [ s t r ]   ! = =   " o b j e c t " ) { 
             t h r o w   n e w   E r r o r   ( " I n v a l i d   n a m e s p a c e   c h a i n   i n   t h e   s e c t i o n   n a m e   ' "   + 
                     s e c t i o n   +   " '   ( ' "   +   s t r   +   " '   h a s   a l r e a d y   a   v a l u e ) " ) ; 
         } 
         o   =   o [ s t r ] ; 
     } 
 
     r e t u r n   o ; 
 } ; 
 
 v a r   m e r g e   =   f u n c t i o n   ( o 1 ,   o 2 ) { 
     f o r   ( v a r   p   i n   o 2 ) { 
         t r y { 
             i f   ( o 1 [ p ] . c o n s t r u c t o r   = = =   O b j e c t ) { 
                 o 1 [ p ]   =   m e r g e   ( o 1 [ p ] ,   o 2 [ p ] ) ; 
             } e l s e { 
                 o 1 [ p ]   =   o 2 [ p ] ; 
             } 
         } c a t c h   ( e ) { 
             o 1 [ p ]   =   o 2 [ p ] ; 
         } 
     } 
     r e t u r n   o 1 ; 
 } 
 
 v a r   b u i l d   =   f u n c t i o n   ( d a t a ,   o p t i o n s ,   d i r n a m e ,   c b ) { 
     v a r   o   =   { } ; 
 
     i f   ( o p t i o n s . n a m e s p a c e s ) { 
         v a r   n   =   { } ; 
     } 
 
     v a r   c o n t r o l   =   { 
         a b o r t :   f a l s e , 
         s k i p S e c t i o n :   f a l s e 
     } ; 
 
     i f   ( o p t i o n s . i n c l u d e ) { 
         v a r   r e m a i n i n g I n c l u d e d   =   0 ; 
 
         v a r   i n c l u d e   =   f u n c t i o n   ( v a l u e ) { 
             i f   ( c u r r e n t S e c t i o n   ! = =   n u l l ) { 
                 r e t u r n   a b o r t   ( n e w   E r r o r   ( " C a n n o t   i n c l u d e   f i l e s   f r o m   i n s i d e   a   "   + 
                         " s e c t i o n :   "   +   c u r r e n t S e c t i o n ) ) ; 
             } 
 
             v a r   p   =   p a t h . r e s o l v e   ( d i r n a m e ,   v a l u e ) ; 
             i f   ( o p t i o n s . _ i n c l u d e d [ p ] )   r e t u r n ; 
 
             o p t i o n s . _ i n c l u d e d [ p ]   =   t r u e ; 
             r e m a i n i n g I n c l u d e d + + ; 
             c o n t r o l . p a u s e   =   t r u e ; 
 
             r e a d   ( p ,   o p t i o n s ,   f u n c t i o n   ( e r r o r ,   i n c l u d e d ) { 
                 i f   ( e r r o r )   r e t u r n   a b o r t   ( e r r o r ) ; 
 
                 r e m a i n i n g I n c l u d e d - - ; 
                 m e r g e   ( o p t i o n s . n a m e s p a c e s   ?   n   :   o ,   i n c l u d e d ) ; 
                 c o n t r o l . p a u s e   =   f a l s e ; 
 
                 i f   ( ! c o n t r o l . p a r s e d ) { 
                     p a r s e   ( d a t a ,   o p t i o n s ,   h a n d l e r s ,   c o n t r o l ) ; 
                     i f   ( c o n t r o l . e r r o r )   r e t u r n   a b o r t   ( c o n t r o l . e r r o r ) ; 
                 } 
 
                 i f   ( ! r e m a i n i n g I n c l u d e d )   c b   ( n u l l ,   o p t i o n s . n a m e s p a c e s   ?   n   :   o ) ; 
             } ) ; 
         } ; 
     } 
 
     i f   ( ! d a t a ) { 
         i f   ( c b )   r e t u r n   c b   ( n u l l ,   o ) ; 
         r e t u r n   o ; 
     } 
 
     v a r   c u r r e n t S e c t i o n   =   n u l l ; 
     v a r   c u r r e n t S e c t i o n S t r   =   n u l l ; 
 
     v a r   a b o r t   =   f u n c t i o n   ( e r r o r ) { 
         c o n t r o l . a b o r t   =   t r u e ; 
         i f   ( c b )   r e t u r n   c b   ( e r r o r ) ; 
         t h r o w   e r r o r ; 
     } ; 
 
     v a r   h a n d l e r s   =   { } ; 
     v a r   r e v i v e r   =   { 
         a s s e r t :   f u n c t i o n   ( ) { 
             r e t u r n   t h i s . i s P r o p e r t y   ?   r e v i v e r L i n e . v a l u e   :   t r u e ; 
         } 
     } ; 
     v a r   r e v i v e r L i n e   =   { } ; 
 
     / / L i n e   h a n d l e r 
     / / F o r   s p e e d   r e a s o n s ,   i f   " n a m e s p a c e s "   i s   e n a b l e d ,   t h e   o l d   o b j e c t   i s   s t i l l 
     / / p o p u l a t e d ,   e . g . :   $ { a . b }   r e a d s   t h e   " a . b "   p r o p e r t y   f r o m   {   " a . b " :   1   } ,   i n s t e a d 
     / / o f   h a v i n g   a   u n i q u e   o b j e c t   {   a :   {   b :   1   }   }   w h i c h   i s   s l o w e r   t o   s e a r c h   f o r 
     / / t h e   " a . b "   v a l u e 
     / / I f   " a . b "   i s   n o t   f o u n d ,   t h e n   t h e   e x t e r n a l   v a r s   a r e   r e a d .   I f   " n a m e s p a c e s "   i s 
     / / e n a b l e d ,   t h e   v a r   " a . b "   i s   s p l i t   a n d   i t   s e a r c h e s   t h e   a . b   v a l u e .   I f   i t   i s   n o t 
     / / e n a b l e d ,   t h e n   t h e   v a r   " a . b "   s e a r c h e s   t h e   " a . b "   v a l u e 
 
     v a r   l i n e ; 
     v a r   e r r o r ; 
 
     i f   ( o p t i o n s . r e v i v e r ) { 
         i f   ( o p t i o n s . s e c t i o n s ) { 
             l i n e   =   f u n c t i o n   ( k e y ,   v a l u e ) { 
                 i f   ( o p t i o n s . i n c l u d e   & &   k e y   = = =   I N C L U D E _ K E Y )   r e t u r n   i n c l u d e   ( v a l u e ) ; 
 
                 r e v i v e r L i n e . v a l u e   =   v a l u e ; 
                 r e v i v e r . i s P r o p e r t y   =   t r u e ; 
                 r e v i v e r . i s S e c t i o n   =   f a l s e ; 
 
                 v a l u e   =   o p t i o n s . r e v i v e r . c a l l   ( r e v i v e r ,   k e y ,   v a l u e ,   c u r r e n t S e c t i o n S t r ) ; 
                 i f   ( v a l u e   ! = =   u n d e f i n e d ) { 
                     i f   ( o p t i o n s . n a m e s p a c e s ) { 
                         t r y { 
                             n a m e s p a c e K e y   ( c u r r e n t S e c t i o n   = = =   n u l l   ?   n   :   c u r r e n t S e c t i o n , 
                                     k e y ,   v a l u e ) ; 
                         } c a t c h   ( e r r o r ) { 
                             a b o r t   ( e r r o r ) ; 
                         } 
                     } e l s e { 
                         i f   ( c u r r e n t S e c t i o n   = = =   n u l l )   o [ k e y ]   =   v a l u e ; 
                         e l s e   c u r r e n t S e c t i o n [ k e y ]   =   v a l u e ; 
                     } 
                 } 
             } ; 
         } e l s e { 
             l i n e   =   f u n c t i o n   ( k e y ,   v a l u e ) { 
                 i f   ( o p t i o n s . i n c l u d e   & &   k e y   = = =   I N C L U D E _ K E Y )   r e t u r n   i n c l u d e   ( v a l u e ) ; 
 
                 r e v i v e r L i n e . v a l u e   =   v a l u e ; 
                 r e v i v e r . i s P r o p e r t y   =   t r u e ; 
                 r e v i v e r . i s S e c t i o n   =   f a l s e ; 
 
                 v a l u e   =   o p t i o n s . r e v i v e r . c a l l   ( r e v i v e r ,   k e y ,   v a l u e ) ; 
                 i f   ( v a l u e   ! = =   u n d e f i n e d ) { 
                     i f   ( o p t i o n s . n a m e s p a c e s ) { 
                         t r y { 
                             n a m e s p a c e K e y   ( n ,   k e y ,   v a l u e ) ; 
                         } c a t c h   ( e r r o r ) { 
                             a b o r t   ( e r r o r ) ; 
                         } 
                     } e l s e { 
                         o [ k e y ]   =   v a l u e ; 
                     } 
                 } 
             } ; 
         } 
     } e l s e { 
         i f   ( o p t i o n s . s e c t i o n s ) { 
             l i n e   =   f u n c t i o n   ( k e y ,   v a l u e ) { 
                 i f   ( o p t i o n s . i n c l u d e   & &   k e y   = = =   I N C L U D E _ K E Y )   r e t u r n   i n c l u d e   ( v a l u e ) ; 
 
                 i f   ( o p t i o n s . n a m e s p a c e s ) { 
                     t r y { 
                         n a m e s p a c e K e y   ( c u r r e n t S e c t i o n   = = =   n u l l   ?   n   :   c u r r e n t S e c t i o n ,   k e y , 
                                 v a l u e ) ; 
                     } c a t c h   ( e r r o r ) { 
                         a b o r t   ( e r r o r ) ; 
                     } 
                 } e l s e { 
                     i f   ( c u r r e n t S e c t i o n   = = =   n u l l )   o [ k e y ]   =   v a l u e ; 
                     e l s e   c u r r e n t S e c t i o n [ k e y ]   =   v a l u e ; 
                 } 
             } ; 
         } e l s e { 
             l i n e   =   f u n c t i o n   ( k e y ,   v a l u e ) { 
                 i f   ( o p t i o n s . i n c l u d e   & &   k e y   = = =   I N C L U D E _ K E Y )   r e t u r n   i n c l u d e   ( v a l u e ) ; 
 
                 i f   ( o p t i o n s . n a m e s p a c e s ) { 
                     t r y { 
                         n a m e s p a c e K e y   ( n ,   k e y ,   v a l u e ) ; 
                     } c a t c h   ( e r r o r ) { 
                         a b o r t   ( e r r o r ) ; 
                     } 
                 } e l s e { 
                     o [ k e y ]   =   v a l u e ; 
                 } 
             } ; 
         } 
     } 
 
     / / S e c t i o n   h a n d l e r 
     v a r   s e c t i o n ; 
     i f   ( o p t i o n s . s e c t i o n s ) { 
         i f   ( o p t i o n s . r e v i v e r ) { 
             s e c t i o n   =   f u n c t i o n   ( s e c t i o n ) { 
                 c u r r e n t S e c t i o n S t r   =   s e c t i o n ; 
                 r e v i v e r L i n e . s e c t i o n   =   s e c t i o n ; 
                 r e v i v e r . i s P r o p e r t y   =   f a l s e ; 
                 r e v i v e r . i s S e c t i o n   =   t r u e ; 
 
                 v a r   a d d   =   o p t i o n s . r e v i v e r . c a l l   ( r e v i v e r ,   n u l l ,   n u l l ,   s e c t i o n ) ; 
                 i f   ( a d d ) { 
                     i f   ( o p t i o n s . n a m e s p a c e s ) { 
                         t r y { 
                             c u r r e n t S e c t i o n   =   n a m e s p a c e S e c t i o n   ( n ,   s e c t i o n ) ; 
                         } c a t c h   ( e r r o r ) { 
                             a b o r t   ( e r r o r ) ; 
                         } 
                     } e l s e { 
                         c u r r e n t S e c t i o n   =   o [ s e c t i o n ]   =   { } ; 
                     } 
                 } e l s e { 
                     c o n t r o l . s k i p S e c t i o n   =   t r u e ; 
                 } 
             } ; 
         } e l s e { 
             s e c t i o n   =   f u n c t i o n   ( s e c t i o n ) { 
                 c u r r e n t S e c t i o n S t r   =   s e c t i o n ; 
                 i f   ( o p t i o n s . n a m e s p a c e s ) { 
                     t r y { 
                         c u r r e n t S e c t i o n   =   n a m e s p a c e S e c t i o n   ( n ,   s e c t i o n ) ; 
                     } c a t c h   ( e r r o r ) { 
                         a b o r t   ( e r r o r ) ; 
                     } 
                 } e l s e { 
                     c u r r e n t S e c t i o n   =   o [ s e c t i o n ]   =   { } ; 
                 } 
             } ; 
         } 
     } 
 
     / / V a r i a b l e s 
     i f   ( o p t i o n s . v a r i a b l e s ) { 
         h a n d l e r s . l i n e   =   f u n c t i o n   ( k e y ,   v a l u e ) { 
             e x p a n d   ( o p t i o n s . n a m e s p a c e s   ?   n   :   o ,   k e y ,   o p t i o n s ,   f u n c t i o n   ( e r r o r ,   k e y ) { 
                 i f   ( e r r o r )   r e t u r n   a b o r t   ( e r r o r ) ; 
 
                 e x p a n d   ( o p t i o n s . n a m e s p a c e s   ?   n   :   o ,   v a l u e ,   o p t i o n s , 
                         f u n c t i o n   ( e r r o r ,   v a l u e ) { 
                     i f   ( e r r o r )   r e t u r n   a b o r t   ( e r r o r ) ; 
 
                     l i n e   ( k e y ,   c a s t   ( v a l u e   | |   n u l l ) ) ; 
                 } ) ; 
             } ) ; 
         } ; 
 
         i f   ( o p t i o n s . s e c t i o n s ) { 
             h a n d l e r s . s e c t i o n   =   f u n c t i o n   ( s ) { 
                 e x p a n d   ( o p t i o n s . n a m e s p a c e s   ?   n   :   o ,   s ,   o p t i o n s ,   f u n c t i o n   ( e r r o r ,   s ) { 
                     i f   ( e r r o r )   r e t u r n   a b o r t   ( e r r o r ) ; 
 
                     s e c t i o n   ( s ) ; 
                 } ) ; 
             } ; 
         } 
     } e l s e { 
         h a n d l e r s . l i n e   =   f u n c t i o n   ( k e y ,   v a l u e ) { 
             l i n e   ( k e y ,   c a s t   ( v a l u e   | |   n u l l ) ) ; 
         } ; 
 
         i f   ( o p t i o n s . s e c t i o n s ) { 
             h a n d l e r s . s e c t i o n   =   s e c t i o n ; 
         } 
     } 
 
     p a r s e   ( d a t a ,   o p t i o n s ,   h a n d l e r s ,   c o n t r o l ) ; 
     i f   ( c o n t r o l . e r r o r )   r e t u r n   a b o r t   ( c o n t r o l . e r r o r ) ; 
 
     i f   ( c o n t r o l . a b o r t   | |   c o n t r o l . p a u s e )   r e t u r n ; 
 
     i f   ( c b )   r e t u r n   c b   ( n u l l ,   o p t i o n s . n a m e s p a c e s   ?   n   :   o ) ; 
     r e t u r n   o p t i o n s . n a m e s p a c e s   ?   n   :   o ; 
 } ; 
 
 v a r   r e a d   =   f u n c t i o n   ( f ,   o p t i o n s ,   c b ) { 
     f s . s t a t   ( f ,   f u n c t i o n   ( e r r o r ,   s t a t s ) { 
         i f   ( e r r o r )   r e t u r n   c b   ( e r r o r ) ; 
 
         v a r   d i r n a m e ; 
 
         i f   ( s t a t s . i s D i r e c t o r y   ( ) ) { 
             d i r n a m e   =   f ; 
             f   =   p a t h . j o i n   ( f ,   I N D E X _ F I L E ) ; 
         } e l s e { 
             d i r n a m e   =   p a t h . d i r n a m e   ( f ) ; 
         } 
 
         f s . r e a d F i l e   ( f ,   {   e n c o d i n g :   " u t f 8 "   } ,   f u n c t i o n   ( e r r o r ,   d a t a ) { 
             i f   ( e r r o r )   r e t u r n   c b   ( e r r o r ) ; 
             b u i l d   ( d a t a ,   o p t i o n s ,   d i r n a m e ,   c b ) ; 
         } ) ; 
     } ) ; 
 } ; 
 
 m o d u l e . e x p o r t s   =   f u n c t i o n   ( d a t a ,   o p t i o n s ,   c b ) { 
     i f   ( t y p e o f   o p t i o n s   = = =   " f u n c t i o n " ) { 
         c b   =   o p t i o n s ; 
         o p t i o n s   =   { } ; 
     } 
 
     o p t i o n s   =   o p t i o n s   | |   { } ; 
     v a r   c o d e ; 
 
     i f   ( o p t i o n s . i n c l u d e ) { 
         i f   ( ! c b )   t h r o w   n e w   E r r o r   ( " A   c a l l b a c k   m u s t   b e   p a s s e d   i f   t h e   ' i n c l u d e '   "   + 
                 " o p t i o n   i s   e n a b l e d " ) ; 
         o p t i o n s . _ i n c l u d e d   =   { } ; 
     } 
 
     o p t i o n s   =   o p t i o n s   | |   { } ; 
     o p t i o n s . _ s t r i c t   =   o p t i o n s . s t r i c t   & &   ( o p t i o n s . c o m m e n t s   | |   o p t i o n s . s e p a r a t o r s ) ; 
     o p t i o n s . _ v a r s   =   o p t i o n s . v a r s   | |   { } ; 
 
     v a r   c o m m e n t s   =   o p t i o n s . c o m m e n t s   | |   [ ] ; 
     i f   ( ! A r r a y . i s A r r a y   ( c o m m e n t s ) )   c o m m e n t s   =   [ c o m m e n t s ] ; 
     v a r   c   =   { } ; 
     c o m m e n t s . f o r E a c h   ( f u n c t i o n   ( c o m m e n t ) { 
         c o d e   =   c o m m e n t . c h a r C o d e A t   ( 0 ) ; 
         i f   ( c o m m e n t . l e n g t h   >   1   | |   c o d e   <   3 3   | |   c o d e   >   1 2 6 ) { 
             t h r o w   n e w   E r r o r   ( " T h e   c o m m e n t   t o k e n   m u s t   b e   a   s i n g l e   p r i n t a b l e   A S C I I   "   + 
                     " c h a r a c t e r " ) ; 
         } 
         c [ c o m m e n t ]   =   t r u e ; 
     } ) ; 
     o p t i o n s . _ c o m m e n t s   =   c ; 
 
     v a r   s e p a r a t o r s   =   o p t i o n s . s e p a r a t o r s   | |   [ ] ; 
     i f   ( ! A r r a y . i s A r r a y   ( s e p a r a t o r s ) )   s e p a r a t o r s   =   [ s e p a r a t o r s ] ; 
     v a r   s   =   { } ; 
     s e p a r a t o r s . f o r E a c h   ( f u n c t i o n   ( s e p a r a t o r ) { 
         c o d e   =   s e p a r a t o r . c h a r C o d e A t   ( 0 ) ; 
         i f   ( s e p a r a t o r . l e n g t h   >   1   | |   c o d e   <   3 3   | |   c o d e   >   1 2 6 ) { 
             t h r o w   n e w   E r r o r   ( " T h e   s e p a r a t o r   t o k e n   m u s t   b e   a   s i n g l e   p r i n t a b l e   A S C I I   "   + 
                     " c h a r a c t e r " ) ; 
         } 
         s [ s e p a r a t o r ]   =   t r u e ; 
     } ) ; 
     o p t i o n s . _ s e p a r a t o r s   =   s ; 
 
     i f   ( o p t i o n s . p a t h ) { 
         i f   ( ! c b )   t h r o w   n e w   E r r o r   ( " A   c a l l b a c k   m u s t   b e   p a s s e d   i f   t h e   ' p a t h '   "   + 
                 " o p t i o n   i s   e n a b l e d " ) ; 
         i f   ( o p t i o n s . i n c l u d e ) { 
             r e a d   ( d a t a ,   o p t i o n s ,   c b ) ; 
         } e l s e { 
             f s . r e a d F i l e   ( d a t a ,   {   e n c o d i n g :   " u t f 8 "   } ,   f u n c t i o n   ( e r r o r ,   d a t a ) { 
                 i f   ( e r r o r )   r e t u r n   c b   ( e r r o r ) ; 
                 b u i l d   ( d a t a ,   o p t i o n s ,   " . " ,   c b ) ; 
             } ) ; 
         } 
     } e l s e { 
         r e t u r n   b u i l d   ( d a t a ,   o p t i o n s ,   " . " ,   c b ) ; 
     } 
 } ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/node-properties/node-properties.js     £K                                                   	   
   =   Ö            QÖ         QÖ   =      QÖ   =      QÖ         QÖ         QÖ         QÖ         QÖ         QÖ   	      	QÖ   
      
QÖ      	   Q;      
0   õÐ1Ð /ÐÐÐ ;Ð Ð Ð ¥Ð ·Ð ÆÐ ¹Ð ÍÐ     hex   parse   INCLUDE_KEY   INDEX_FILE	   cast   expand   searchValue   namespaceKey!   namespaceSection   merge   build	   read   use strict   include!   index.properties   module   exports   ÿÿÿÿ      hex   parse   INCLUDE_KEY   INDEX_FILE	   cast   expand   searchValue   namespaceKey!   namespaceSection   merge   build	   read                   hexc  ;      ¹      ©                                   ¢  |                   T  x=    y   òæ=   y   êæ=   y   âæ=   y   Ûæ=   y   Ôæ=   y   Íæ=   y   Ææ=   y   ¿æ=   y   ¸æ=   	y   ±æ=   
y   ªæ=   y   æ=   y   æ=   y   æ=   y   æ=   y   {æ=   y   tæ=   y   iæ=   y   bæ=   y   Wæ=   y   Pæ=   y   Eæz   Cæ>æ?æ×æ×æ×æ×æ×æ×æ×æ×	æ×
æ×æ×æ×æ×æ×æk 6vËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpËpÌ// /!/"/#/$/%/&/'/(/)/*/+/,/-/    0   1   2   3   4   5   6   7   8   9   a   A   b   B   c   C   d   D   e   E   f   F    ÿÿÿÿ      c        ¹    @              parsec  ¹      ¹      [                       (          À  1                 CW  QCW  QCW   Q=       Q=       Q    W  Q   W  	QT 5      æ   W  Q   W  Q   æ   W  Q   W  QæT 5   !!W  Q   ÇmT 5      ææT 5      æT V  0   QæT  V  7W  
QT  ¸   
V  : W  QV  ×H   æ  SæV     +æV  ×
H   æBW  QCW  QCW  Qæ  #æV  E   æQV  ×]Hæ   %æ   ¸   
V  : QCW  Q  êæV     }æV  × HD   æQV  ×	HD   æQV  ×Hæ   æ  °æV   E   æQV  ×
Hæ   &æCW   QBW  QCW  QV  :  Q  uæBW  QBW  QæV     mæBW  QV  V  
V  T :    æCW  Q  3æT 5   E   æQV  ×[Hæ   %æ=    W  QCW  QT B0   Q  öæV  ×
I  QæT 5   D   æQV  æ   æ  ÉæV      Væ   	 E   %æQV   E   æQV  V  
V  T : æ   $æC   QBW   QBW  QCW  Q  mæV  ×\H   æ   	   æ      æ  DæV     æBW  QBW   QæV     æV  =   	W  Q   8æV      æ   =   	   Q   æ   =   	   Qæ   	    	Q  +æV     æBW  QBW   QæV     Dæ   	   $æV  	V  V  
V  : W  Q   æV  V  
W  Qæ   ËæV      æ   	   &æV  	   V  
V  :    Q   RæV  × HD   æQV  ×	HD   æQV  ×Hæ   æCW  QCW  Q   ÷æ   V  
   Qæ   Bæ   	   &æV  	   V  
V  :    Q   æ   V  
   Qæ   æ   	   +æ       æB   	QæCW  QCW  Q   læV     FæBW  QV      .æT ;   A=   V  =   ,  R 0   
QæBW  QæCW  QCW  QCW   QV  :  QæV  #?W  QQãV  T  Ù   ÿÿû/æT C0   QV  E   æQV   æ   .æT ;   A=   V  =   ,  R 0   
QæV  :  QËËEÊNÊmpÈÊuÐxÊË  Ï  Ç ¸ Ö  È -  ÈÍ -  ÍÎÈF@ÓÔ@ä@
ÔÉ@Ð
@×ÊÊ@  Ë LÔF
è



@  Ü  FÕ×Ò	Ò

?Ñ
ÎÕ!ÒÏä@×!ÒÏ×&
ÈÌ
ÓÊ É - 
Ê  .Î   Õ $ÊËÝÉ ,É       _strict   resume   abort   pause   charCodeAt   section   sections   skipSection   \   error   Error%   The section line "'   " must end with "]"   length   parsed%   " must endwith "]"    ÿÿÿÿ   	   data   options   handlers   control   isKey   section   isSectionLine   key   isComment   value	   line   unicode   multiLine   isSeparator   newLine	   code   escapeString!   unicodeRemaining   sep   escapingUnicode   c   skipSpace   keySpace   escape   isCommentLine   i   ignoreLine                   parse/linec   ]       ¹                                             E                    D   æQ   D   æQ   æ   =æ   ¸    
      : Q=      Q=      QB   QæÞÚËËÈL 	   line       ÿÿÿÿ              ¹    @           %   parse/escapeStringc        ¹      o                          
        ®  e  N                    E   æQ   æ   dæ   ×;        T :    Q   #?      
æT  æB   	QB   QT  ;   ¸   
   : æT ×uH    æ>   QC   Q×   QT  æB   	QT ×tH   æT  =      TæT ×rH   æT  =      8æT ×nH   æT  =      æT ×fH   æT  =   æT  T ÒÕÊÍkRÔkXÈk_eÉkfÉkgÉkhÉkj    hex   String   fromCharCode   	      
       ÿÿÿÿ      key   c	   code        ¹    @              parse/isCommentc         ¹                                        ¾  ú  q                 T 5    T  7Ì    _comments    ÿÿÿÿ      c	   code   options        ¹    @           #   parse/isSeparatorc         ¹                                          V  u                 T 5    T  7Ì    _separators    ÿÿÿÿ      c	   code   options        ¹    @              parse/isCommentc  )       ¹      	                                  z  ú  y                 T ×#HD    æQT ×!HD   æQT 5    T  7æ|ç    _comments    ÿÿÿÿ      c	   code   options        ¹    @           #   parse/isSeparatorc  )       ¹      
                                                       T ×=HD    æQT ×:HD   æQT 5    T  7æç    _separators    ÿÿÿÿ      c	   code   options        ¹    @        Ö            	   castc         ¹      G                                      2               T  @HD   æQT  =    Hæ   æ@æT  =   H   æ;   æT  =   H   æCæT  =   H   æBæ;      T  : W   Q;      V   :    æT     
æV   æÖ* 9 4É 9 5É 6É 7ÍÈÎ	Ô 	   null   undefined	   true   false   Number   isNaN    ÿÿÿÿ      value   v       ¹    @              expandc  %      ¹      :                       (        *  %  ;     
          T 5     D   æQT  æ   æT @T : æZ    W   Q=   W  Q@W  Q>W  	Q   mT V  	7W  QV  =   HE   æQV  =   Hæ   eæV  ¸   
>V  Ù   ?: W  QV   ¸   
[    V  ]   V  ]   : Q=   W  Q@W  Q  ð  ÓæV   Ù     ÄæT 5   	E   æQV  =   
Hæ   #æV  W  Q=   W  Q  £  æV  =   H  væV  @I    æ;      T  V  C:    	æT  æW  QV      +æT ;   A=   V  =   ,  R : æT 5       æ;      V  V  :    æV  V  7æW  QV  ;   H   {æT 5      $æ;      T 5   V  :    æT 5   V  7æW  QV  ;   H   +æT ;   A=   V  =   ,  R : æV   ¸   
:  W  QV  5   W  QV  5   V  @H   æ=      
æV  æW  Q   æV  W  QV  V  W  QæV  	#?W  	QQãV  	T Ù   ÿÿýmæV   Ù   >I   $æT ;   A=   T ,  R : æT @V  : QÐÈ } >ÊÊ&  z  HÍÜ`×ÈÐÉÉ MÊ@ËÉÚÉÊ@ËÊØÒ
Þÿÿÿü } `ÈØØÊ
ÈÖÉÓÊÞÿÿÿü } mËÈÎÏÜ@ÉÏ HÎ u HÕ xË×ÿÿÿü |Í    variables      $   {   substring   length	   push   key   section   sections   |   }   searchValue   Error   The section "!   " does not exist   namespaces   undefined   _vars   The property "   pop)   Malformed variable:     ÿÿÿÿ      o   str   options   cb   stack   c   cp   key   section   v   holder   t   n   i    
                   key         section           N     ¹(    @              searchValuec  Ø       ¹                               
        2%  &                 T ¸    
=   : W   Q>W  Q    FmV   V  7W  QT  V  7;   H   ææT  V  7U  QæV  #?W  QQãV  V   Ù   ?ÿÿÿ­æT  V   V   Ù   ?77W  QT    $æV  '=   I   ææV     æV  '=   H   ææV  æÏÈ&F7X ÎÎ  Í Î  Ø ÙË    Ë     split   .   undefined   length   object    ÿÿÿÿ      o   chain   section   n   str   i   v           #   X   ¹    @              namespaceKeyc  ä       ¹   	   h                                ¤&  +(                 T ¸    
=   : W   Q>W  Q    mV   V  7W  QT  V  7;   H   æT  V  [    9Q   CæT  V  7Ä=   I   .æ;   A=   T =   V  =   ,  R pæT  V  7U  QæV  #?W  QQãV  V   Ù   ?ÿÿÿ^æT  V   V   Ù   ?7T 9QÏÈ&      § ÎÎÔÏËÙ Í Î  Ø ¢Ø    split   .   undefined   object   Error]   Invalid namespace chain in the property name '	   ' ('-   ' has already a value)   length    ÿÿÿÿ      o   key   value   n   str   i                          #   §   ¹    @           !   namespaceSectionc  Î       ¹   	   g                        
        N(  Å)  ¥                T ¸    
=   : W   Q>W  Q    mV   V  7W  QT  V  7;   H   æT  V  [    9Q   CæT  V  7Ä=   I   .æ;   A=   T =   V  =   ,  R pæT  V  7U  QæV  #?W  QQãV  V   Ù   ÿÿÿ`æT  ÏÈ&      ¥ ©ÎÎÔÏËÙ ®Í ©Î ± ©Ö ´    split   .   undefined   object   Error[   Invalid namespace chain in the section name '	   ' ('-   ' has already a value)   length    ÿÿÿÿ      o   section   n   str   i                          #   ¥   ¹    @              mergec  §       ¹      )                        	        Ý)  ½*  ·               T K   mW   T  V   75    ;   H   1æT  V   ;      T  V   7T V   7: 9Q   æT  V   T V   79Qæ   ,æ  Qv  QT  V   T V   79QÉ    æãQLMÿÿÿqæQNT  6  XÓ,áËÚÌæ    constructor   Object   merge    ÿÿÿÿ      o1   o2   p                    e                         \      v      ÿÿÿÿ¹    @              buildc  À      ¹      #                        :        Ô*  -C  Æ                [       Q   5       æ[      Qæ[   B]   B]      Q   5      æ>   	Q      
Qæ       (æ      æ   @   : æ   æ@   Q@   Q      Q[      Q[      ]      Q[      Q   5      8æ   5      æ   	   Q   æ   
   Qæ   2æ   5      æ      Q   æ      Qæ   5      2æ   5      æ      Q   æ      Qæ   5      <æ      0   Q   5      æ      0   	Qæ   6æ      0   Q   5      æ      0   	Qæ;   
   
            : Q   5      æ      5   : æ   5   D   æQ   5   æ   ææ      2æ   @   5       æ      æ   æ: æ   5       æ      æ   æËÊÌÌÊÌ óÌ · õ · øË ËÐË Ê3ÊÑ -Ò CÊÑ TÌ fÊÊÑ ~Ì Ê7Ð Ê× ¦ÐÊÑâÊÐ · ³Ü& µ
Ñ× ¶Ê×    namespaces   abort   skipSection   include   assert   reviver   sections   variables	   line   section   parse   error   pause    ÿÿÿÿ   	   data   options   dirname   cb   o   n   control#   remainingIncluded   include   currentSection#   currentSectionStr   abort   handlers   reviver   reviverLine	   line   error   section                                                    abort         skipSection                    build/includec  ®       ¹      O                                 Å+  à.  Õ                   @I   (æ   ;    A=      ,  R : æ;   ¸   
   T  : W   Q   5   V   7   ææ   5   V   C9Q   	#?   	QQ   C0   Q;      V          : QÑÊ ×ÿÿÿù ð Û
ÔÈÏ  ð ÞÑÐÌÜ ð    ErrorY   Cannot include files from inside a section: 	   path   resolve   _included   pause	   read    ÿÿÿÿ      value   p                    build/include/<c  ÷       ¹      K                                  B-  Ø.  â  !              T     æ   T  : æ   	#?   	QQ;           5      æ      æ   æT : Q   B0   Q   5       Læ;                  : Q   5      æ      5   : æ   	    2æ   @   5      æ      æ   æ: QæÉ ï åÐÔÞÌË
âÊÐ îÑÜ    merge   namespaces   pause   parsed   parse   error    ÿÿÿÿ      error   included        ¹    @              build/abortc  *       ¹                                        ~/  Ô/  û                   C0    Q      æ   T  : æT  pÌÉ þ    abort    ÿÿÿÿ      error        ¹    @                          )   build/reviver.assertc   )      ¹                                        0  U0                 ¹W   QV   5       æ   5      æCæÉØ    isProperty   value    ÿÿÿÿ      .this         ¹    @                 assert                                   build/linec  .      ¹   
   Y                                ¼2  k5                    5    E   æQT  ;   Hæ   æ   
T : æ   T 0   Q   C0   Q   B0   Q   5   ¸   
   T  T    l U QT ;   I   ¦æ   5      hæ;   	   	   @H   æ      æ   æT  T : Q   )æ   Qv   Q   V   : QÉ    æ   3æ   @H   æ   T  T 9Q   æ   T  T 9QæÛ4É , ÎÌÌáÉÊc3Ñ× "ÌÌÜ)ÓÎ    include   INCLUDE_KEY   value   isProperty   isSection   reviver	   call   undefined   namespaces   namespaceKey    ÿÿÿÿ      key   value                     error                  7      Ý      ÿÿÿÿ¹    @              build/linec  ð       ¹   
   F                                5  ¢7  .                  5    E   æQT  ;   Hæ   æ   
T : æ   T 0   Q   C0   Q   B0   Q   5   ¸   
   T  T l U QT ;   I   mæ   5      Oæ;   	   	   T  T : Q   )æ   Qv   Q   V   : QÉ    æ   æ   T  T 9QæÛ4É A 1ÎÌÌÜÉÊJáÌÜÎ    include   INCLUDE_KEY   value   isProperty   isSection   reviver	   call   undefined   namespaces   namespaceKey    ÿÿÿÿ      key   value                     error                        ¿      ÿÿÿÿ¹    @              build/linec  Ñ       ¹      B                                ä7  9  E                  5    E   æQT  ;   Hæ   æ   
T : æ   5      hæ;         @H   æ      æ   æT  T : Q   )æ   Qv   Q   V   : QÉ    æ   3æ   @H   æ   T  T 9Q   æ   T  T 9QæÛ4É S HÊc3ÑÚ JÌÌÜ'ÓÎ    include   INCLUDE_KEY   namespaces   namespaceKey    ÿÿÿÿ      key   value                     error               @   7            ÿÿÿÿ¹    @              build/linec         ¹      /                                »9  ë:  U                  5    E   æQT  ;   Hæ   æ   
T : æ   5      Oæ;         T  T : Q   )æ   Qv   Q   V   : QÉ    æ   æ   T  T 9QæÛ4É a XÊJáÌÜ
Î    include   INCLUDE_KEY   namespaces   namespaceKey    ÿÿÿÿ      key   value                     error               @         g      ÿÿÿÿ¹    @              build/sectionc  á       ¹      @                               g;  ¨=  i               T     Q   T  0    Q   B0   Q   C0   Q   5   ¸   
   @@T  l W   QV      |æ   5      Qæ;         T  :    Q   )æ  Qv  Q   V  : QÉ    æ   æ   T  [    9   Qæ   æ   C0   QæÉÎÌÌÛÈwÊLÒÑÌÜÛ
Í    section   isProperty   isSection   reviver	   call   namespaces!   namespaceSection   skipSection    ÿÿÿÿ      section   add                    error                             m                ÿÿÿÿ¹     @              build/sectionc  {       ¹      #                               Î=  ÷>                 T     Q   5       Qæ;         T  :    Q   )æ   Qv   Q   V   : QÉ    æ   æ   T  [    9   QæÉÊLÒÑÌÜ
Õ    namespaces!   namespaceSection    ÿÿÿÿ      section                     error                                        C      ÿÿÿÿ¹    @           '   build/handlers.linec  =       ¹                                       I?  ¤@                   ;          5      æ     æ  æT        : QÔè     expand   namespaces    ÿÿÿÿ      key   value                 +   build/handlers.line/<c  V       ¹      )                         
        ?  @                   T     æ  T  : æ;          5      æ     æ  æ        : QÉ  Ôá      expand   namespaces    ÿÿÿÿ      error   key                 /   build/handlers.line/</<c  @       ¹                                        !@  @                  T     æ  T  : æ     ;        T D   æQ@æ: : QÉ 
áÿÿÿõ 	   cast    ÿÿÿÿ      error   value        ¹    @           -   build/handlers.sectionc  =       ¹                                       ä@  A                   ;           5      æ      æ   æT         : QÔè ¤    expand   namespaces    ÿÿÿÿ      s                  1   build/handlers.section/<c  %       ¹                                         *A  A    A              T     æ   T  : æ   T : QÉ ¢
Í     ÿÿÿÿ      error   s        ¹    @           '   build/handlers.linec  '       ¹                                        ºA  õA  §                   T  ;        T D   æQ@æ: : Qßÿÿÿõ 	   cast    ÿÿÿÿ      key   value        ¹    @           	   readc         ¹      
                                 DC  ÜD  ¹                 ;    ¸   
       : QÚ Ë    fs	   stat    ÿÿÿÿ      f   options   cb                    read/<c         ¹   	   D                                 mC  ØD  º                 T     æ  T  : æT ¸    
:     5æ     Q;   ¸   
  ;   :   Q    æ;   ¸   
  :    Qæ;   ¸   
  [    =   ]      : QÉ Ê ½Ê0ËÖÏÑ
ÊÖÏÿÿÿî    isDirectory	   path	   join   INDEX_FILE   dirname   fs   readFile	   utf8   encoding    ÿÿÿÿ      error   stats   dirname                       encoding                    read/</<c  8       ¹                                        pD  ÒD  Æ  3              T     æ  T  : æ;        T        : QÉ Èà    build    ÿÿÿÿ      error	   data        ¹    @              module.exportsc        ¹      «                         8        ùD  ¡K  Í                   '=    H   æ      Q[       Qæ   D   æQ[   æ   Q   5      6æ       æ;   A=   ,  R pæ   [   0   Qæ   D   æQ[   æ   Q      5   E   "æQ   5   D   æQ   5   æ0   Q      5   
D   æQ[   æ0   	Q   5   D   æQZ    æW   Q;   ¸   
V   :     æZ   V   `    W   Qæ[      QV   ¸   
   : Q      0   Q   5   D   æQZ    æW  Q;   ¸   
V  :     æZ   V  `    W  Qæ[      QV  ¸   
   : Q      0   Q   5      æ       æ;   A=   ,  R pæ   5      &æ;      T        : Q   -æ;   ¸   
T  [   	=   ]      
: Qæ   &æ;      T     =      : æÌËÌØÊÏÑØøâÜÐÏËÔ ëÐÜÐÏËÔ øÐÊÏÊ!áÔÏÿÿÿëË Ü    function   include   Errory   A callback must be passed if the 'include' option is enabled   _included   _strict   strict   comments   separators   _vars	   vars   Array   isArray   forEach   _comments   _separators	   paths   A callback must be passed if the 'path' option is enabled	   read   fs   readFile	   utf8   encoding   build   .    ÿÿÿÿ   	   data   options   cb	   code   comments   c   separators   s                                                                                                          !   module.exports/<c  c       ¹                                        HG  5H  ã                T  ¸    
>:    QT  Ù   ?D   æQ   ×!D   æQ   ×~æ   æ;   A=   ,  R pæ   T  C9QËÉéÏË    charCodeAt   length   Errory   The comment token must be a single printable ASCII character    ÿÿÿÿ      comment        ¹    @                          !   module.exports/<c  c       ¹                                        êH  áI  ð                T  ¸    
>:    QT  Ù   ?D   æQ   ×!D   æQ   ×~æ   æ;   A=   ,  R pæ   T  C9QËÉéÏË    charCodeAt   length   Error}   The separator token must be a single printable ASCII character    ÿÿÿÿ      separator        ¹    @                 encoding                 !   module.exports/<c  8       ¹                                        ûJ  _K     8              T     æ   T  : æ;        T    =      : QÉ à    build   .    ÿÿÿÿ      error	   data        ¹    @ 