   20170118123726Ÿ     ¹   {         1                         `  ÷)       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 / * * 
   *   T e l e m e t r y . 
   * 
   *   T o   a d d   m e t r i c s   f o r   a   t o o l : 
   * 
   *   1 .   C r e a t e   c o u n t ,   f l a g ,   a n d   e x p o n e n t i a l   e n t r i e s   i n 
   *         t o o l k i t / c o m p o n e n t s / t e l e m e t r y / H i s t o g r a m s . j s o n .   E a c h   t y p e   i s   o p t i o n a l   b u t   i t 
   *         i s   b e s t   i f   a l l   t h r e e   c a n   b e   i n c l u d e d . 
   * 
   *   2 .   A d d   y o u r   c h a r t   e n t r i e s   t o   d e v t o o l s / c l i e n t / s h a r e d / t e l e m e t r y . j s 
   *         ( T e l e m e t r y . p r o t o t y p e . _ h i s t o g r a m s ) : 
   *         m y t o o l n a m e :   { 
   *             h i s t o g r a m :   " D E V T O O L S _ M Y T O O L N A M E _ O P E N E D _ C O U N T " , 
   *             t i m e r H i s t o g r a m :   " D E V T O O L S _ M Y T O O L N A M E _ T I M E _ A C T I V E _ S E C O N D S " 
   *         } , 
   * 
   *   3 .   I n c l u d e   t h i s   m o d u l e   a t   t h e   t o p   o f   y o u r   t o o l .   U s e : 
   *             l e t   T e l e m e t r y   =   r e q u i r e ( " d e v t o o l s / c l i e n t / s h a r e d / t e l e m e t r y " ) 
   * 
   *   4 .   C r e a t e   a   t e l e m e t r y   i n s t a n c e   i n   y o u r   t o o l ' s   c o n s t r u c t o r : 
   *             t h i s . _ t e l e m e t r y   =   n e w   T e l e m e t r y ( ) ; 
   * 
   *   5 .   W h e n   y o u r   t o o l   i s   o p e n e d   c a l l : 
   *             t h i s . _ t e l e m e t r y . t o o l O p e n e d ( " m y t o o l n a m e " ) ; 
   * 
   *   6 .   W h e n   y o u r   t o o l   i s   c l o s e d   c a l l : 
   *             t h i s . _ t e l e m e t r y . t o o l C l o s e d ( " m y t o o l n a m e " ) ; 
   * 
   *   N o t e : 
   *   Y o u   c a n   v i e w   t e l e m e t r y   s t a t s   f o r   y o u r   l o c a l   F i r e f o x   i n s t a n c e   v i a 
   *   a b o u t : t e l e m e t r y . 
   * 
   *   Y o u   c a n   v i e w   t e l e m e t r y   s t a t s   f o r   l a r g e   g r o u p s   o f   F i r e f o x   u s e r s   a t 
   *   t e l e m e t r y . m o z i l l a . o r g . 
   * / 
 
 " u s e   s t r i c t " ; 
 
 c o n s t   T O O L S _ O P E N E D _ P R E F   =   " d e v t o o l s . t e l e m e t r y . t o o l s . o p e n e d . v e r s i o n " ; 
 
 f u n c t i o n   T e l e m e t r y ( )   { 
     / /   B i n d   p r e t t y   m u c h   a l l   f u n c t i o n s   s o   t h a t   c a l l e r s   d o   n o t   n e e d   t o . 
     t h i s . t o o l O p e n e d   =   t h i s . t o o l O p e n e d . b i n d ( t h i s ) ; 
     t h i s . t o o l C l o s e d   =   t h i s . t o o l C l o s e d . b i n d ( t h i s ) ; 
     t h i s . l o g   =   t h i s . l o g . b i n d ( t h i s ) ; 
     t h i s . l o g O n c e P e r B r o w s e r V e r s i o n   =   t h i s . l o g O n c e P e r B r o w s e r V e r s i o n . b i n d ( t h i s ) ; 
     t h i s . d e s t r o y   =   t h i s . d e s t r o y . b i n d ( t h i s ) ; 
 
     t h i s . _ t i m e r s   =   n e w   M a p ( ) ; 
 } 
 
 m o d u l e . e x p o r t s   =   T e l e m e t r y ; 
 
 v a r   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 
 T e l e m e t r y . p r o t o t y p e   =   { 
     _ h i s t o g r a m s :   { 
         t o o l b o x :   { 
             h i s t o g r a m :   " D E V T O O L S _ T O O L B O X _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ T O O L B O X _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         o p t i o n s :   { 
             h i s t o g r a m :   " D E V T O O L S _ O P T I O N S _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ O P T I O N S _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         w e b c o n s o l e :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B C O N S O L E _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ W E B C O N S O L E _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         b r o w s e r c o n s o l e :   { 
             h i s t o g r a m :   " D E V T O O L S _ B R O W S E R C O N S O L E _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ B R O W S E R C O N S O L E _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         i n s p e c t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ I N S P E C T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ I N S P E C T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         r u l e v i e w :   { 
             h i s t o g r a m :   " D E V T O O L S _ R U L E V I E W _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ R U L E V I E W _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         c o m p u t e d v i e w :   { 
             h i s t o g r a m :   " D E V T O O L S _ C O M P U T E D V I E W _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ C O M P U T E D V I E W _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         f o n t i n s p e c t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ F O N T I N S P E C T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ F O N T I N S P E C T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         a n i m a t i o n i n s p e c t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ A N I M A T I O N I N S P E C T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ A N I M A T I O N I N S P E C T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         j s d e b u g g e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ J S D E B U G G E R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ J S D E B U G G E R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         j s b r o w s e r d e b u g g e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ J S B R O W S E R D E B U G G E R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ J S B R O W S E R D E B U G G E R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         s t y l e e d i t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ S T Y L E E D I T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ S T Y L E E D I T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         s h a d e r e d i t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ S H A D E R E D I T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ S H A D E R E D I T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         w e b a u d i o e d i t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B A U D I O E D I T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ W E B A U D I O E D I T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         c a n v a s d e b u g g e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ C A N V A S D E B U G G E R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ C A N V A S D E B U G G E R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         p e r f o r m a n c e :   { 
             h i s t o g r a m :   " D E V T O O L S _ J S P R O F I L E R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ J S P R O F I L E R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         m e m o r y :   { 
             h i s t o g r a m :   " D E V T O O L S _ M E M O R Y _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ M E M O R Y _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         n e t m o n i t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ N E T M O N I T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ N E T M O N I T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         s t o r a g e :   { 
             h i s t o g r a m :   " D E V T O O L S _ S T O R A G E _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ S T O R A G E _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         p a i n t f l a s h i n g :   { 
             h i s t o g r a m :   " D E V T O O L S _ P A I N T F L A S H I N G _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ P A I N T F L A S H I N G _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         s c r a t c h p a d :   { 
             h i s t o g r a m :   " D E V T O O L S _ S C R A T C H P A D _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ S C R A T C H P A D _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         " s c r a t c h p a d - w i n d o w " :   { 
             h i s t o g r a m :   " D E V T O O L S _ S C R A T C H P A D _ W I N D O W _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ S C R A T C H P A D _ W I N D O W _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         r e s p o n s i v e :   { 
             h i s t o g r a m :   " D E V T O O L S _ R E S P O N S I V E _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ R E S P O N S I V E _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         e y e d r o p p e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ E Y E D R O P P E R _ O P E N E D _ C O U N T " , 
         } , 
         m e n u e y e d r o p p e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ M E N U _ E Y E D R O P P E R _ O P E N E D _ C O U N T " , 
         } , 
         p i c k e r e y e d r o p p e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ P I C K E R _ E Y E D R O P P E R _ O P E N E D _ C O U N T " , 
         } , 
         t o o l b a r e y e d r o p p e r :   { 
             h i s t o g r a m :   " D E V T O O L S _ T O O L B A R _ E Y E D R O P P E R _ O P E N E D _ C O U N T " , 
         } , 
         d e v e l o p e r t o o l b a r :   { 
             h i s t o g r a m :   " D E V T O O L S _ D E V E L O P E R T O O L B A R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ D E V E L O P E R T O O L B A R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         a b o u t d e b u g g i n g :   { 
             h i s t o g r a m :   " D E V T O O L S _ A B O U T D E B U G G I N G _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ A B O U T D E B U G G I N G _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         w e b i d e :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B I D E _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ W E B I D E _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         w e b i d e P r o j e c t E d i t o r :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B I D E _ P R O J E C T _ E D I T O R _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ W E B I D E _ P R O J E C T _ E D I T O R _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         w e b i d e P r o j e c t E d i t o r S a v e :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B I D E _ P R O J E C T _ E D I T O R _ S A V E _ C O U N T " , 
         } , 
         w e b i d e N e w P r o j e c t :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B I D E _ N E W _ P R O J E C T _ C O U N T " , 
         } , 
         w e b i d e I m p o r t P r o j e c t :   { 
             h i s t o g r a m :   " D E V T O O L S _ W E B I D E _ I M P O R T _ P R O J E C T _ C O U N T " , 
         } , 
         c u s t o m :   { 
             h i s t o g r a m :   " D E V T O O L S _ C U S T O M _ O P E N E D _ C O U N T " , 
             t i m e r H i s t o g r a m :   " D E V T O O L S _ C U S T O M _ T I M E _ A C T I V E _ S E C O N D S " 
         } , 
         r e l o a d A d d o n I n s t a l l e d :   { 
             h i s t o g r a m :   " D E V T O O L S _ R E L O A D _ A D D O N _ I N S T A L L E D _ C O U N T " , 
         } , 
         r e l o a d A d d o n R e l o a d :   { 
             h i s t o g r a m :   " D E V T O O L S _ R E L O A D _ A D D O N _ R E L O A D _ C O U N T " , 
         } , 
     } , 
 
     / * * 
       *   A d d   a n   e n t r y   t o   a   h i s t o g r a m . 
       * 
       *   @ p a r a m     { S t r i n g }   i d 
       *                   U s e d   t o   l o o k   u p   t h e   r e l e v a n t   h i s t o g r a m   I D   a n d   l o g   t r u e   t o   t h a t 
       *                   h i s t o g r a m . 
       * / 
     t o o l O p e n e d :   f u n c t i o n   ( i d )   { 
         l e t   c h a r t s   =   t h i s . _ h i s t o g r a m s [ i d ]   | |   t h i s . _ h i s t o g r a m s . c u s t o m ; 
 
         i f   ( c h a r t s . h i s t o g r a m )   { 
             t h i s . l o g ( c h a r t s . h i s t o g r a m ,   t r u e ) ; 
         } 
         i f   ( c h a r t s . t i m e r H i s t o g r a m )   { 
             t h i s . s t a r t T i m e r ( c h a r t s . t i m e r H i s t o g r a m ) ; 
         } 
     } , 
 
     / * * 
       *   R e c o r d   t h a t   a n   a c t i o n   o c c u r r e d .     A l i a s e s   t o   ` t o o l O p e n e d ` ,   s o   i t ' s   j u s t   f o r 
       *   r e a d a b i l i t y   a t   t h e   c a l l   s i t e   f o r   c a s e s   w h e r e   w e   a r e n ' t   a c t u a l l y   o p e n i n g 
       *   t o o l s . 
       * / 
     a c t i o n O c c u r r e d ( i d )   { 
         t h i s . t o o l O p e n e d ( i d ) ; 
     } , 
 
     t o o l C l o s e d :   f u n c t i o n   ( i d )   { 
         l e t   c h a r t s   =   t h i s . _ h i s t o g r a m s [ i d ] ; 
 
         i f   ( ! c h a r t s   | |   ! c h a r t s . t i m e r H i s t o g r a m )   { 
             r e t u r n ; 
         } 
 
         t h i s . s t o p T i m e r ( c h a r t s . t i m e r H i s t o g r a m ) ; 
     } , 
 
     / * * 
       *   R e c o r d   t h e   s t a r t   t i m e   f o r   a   t i m i n g - b a s e d   h i s t o g r a m   e n t r y . 
       * 
       *   @ p a r a m   S t r i n g   h i s t o g r a m I d 
       *                 H i s t o g r a m   i n   w h i c h   t h e   d a t a   i s   t o   b e   s t o r e d . 
       * / 
     s t a r t T i m e r :   f u n c t i o n   ( h i s t o g r a m I d )   { 
         t h i s . _ t i m e r s . s e t ( h i s t o g r a m I d ,   n e w   D a t e ( ) ) ; 
     } , 
 
     / * * 
       *   S t o p   t h e   t i m e r   a n d   l o g   e l a s p e d   t i m e   f o r   a   t i m i n g - b a s e d   h i s t o g r a m   e n t r y . 
       * 
       *   @ p a r a m   S t r i n g   h i s t o g r a m I d 
       *                 H i s t o g r a m   i n   w h i c h   t h e   d a t a   i s   t o   b e   s t o r e d . 
       *   @ p a r a m   S t r i n g   k e y   [ o p t i o n a l ] 
       *                 O p t i o n a l   k e y   f o r   a   k e y e d   h i s t o g r a m . 
       * / 
     s t o p T i m e r :   f u n c t i o n   ( h i s t o g r a m I d ,   k e y )   { 
         l e t   s t a r t T i m e   =   t h i s . _ t i m e r s . g e t ( h i s t o g r a m I d ) ; 
         i f   ( s t a r t T i m e )   { 
             l e t   t i m e   =   ( n e w   D a t e ( )   -   s t a r t T i m e )   /   1 0 0 0 ; 
             i f   ( ! k e y )   { 
                 t h i s . l o g ( h i s t o g r a m I d ,   t i m e ) ; 
             }   e l s e   { 
                 t h i s . l o g K e y e d ( h i s t o g r a m I d ,   k e y ,   t i m e ) ; 
             } 
             t h i s . _ t i m e r s . d e l e t e ( h i s t o g r a m I d ) ; 
         } 
     } , 
 
     / * * 
       *   L o g   a   v a l u e   t o   a   h i s t o g r a m . 
       * 
       *   @ p a r a m     { S t r i n g }   h i s t o g r a m I d 
       *                   H i s t o g r a m   i n   w h i c h   t h e   d a t a   i s   t o   b e   s t o r e d . 
       *   @ p a r a m     v a l u e 
       *                   V a l u e   t o   s t o r e . 
       * / 
     l o g :   f u n c t i o n   ( h i s t o g r a m I d ,   v a l u e )   { 
         i f   ( h i s t o g r a m I d )   { 
             t r y   { 
                 l e t   h i s t o g r a m   =   S e r v i c e s . t e l e m e t r y . g e t H i s t o g r a m B y I d ( h i s t o g r a m I d ) ; 
                 h i s t o g r a m . a d d ( v a l u e ) ; 
             }   c a t c h   ( e )   { 
                 d u m p ( " W a r n i n g :   A n   a t t e m p t   w a s   m a d e   t o   w r i t e   t o   t h e   "   +   h i s t o g r a m I d   + 
                           "   h i s t o g r a m ,   w h i c h   i s   n o t   d e f i n e d   i n   H i s t o g r a m s . j s o n \ n " ) ; 
             } 
         } 
     } , 
 
     / * * 
       *   L o g   a   v a l u e   t o   a   k e y e d   h i s t o g r a m . 
       * 
       *   @ p a r a m     { S t r i n g }   h i s t o g r a m I d 
       *                   H i s t o g r a m   i n   w h i c h   t h e   d a t a   i s   t o   b e   s t o r e d . 
       *   @ p a r a m     { S t r i n g }   k e y 
       *                   T h e   k e y   w i t h i n   t h e   s i n g l e   h i s t o g r a m . 
       *   @ p a r a m     v a l u e 
       *                   V a l u e   t o   s t o r e . 
       * / 
     l o g K e y e d :   f u n c t i o n   ( h i s t o g r a m I d ,   k e y ,   v a l u e )   { 
         i f   ( h i s t o g r a m I d )   { 
             t r y   { 
                 l e t   h i s t o g r a m   =   S e r v i c e s . t e l e m e t r y . g e t K e y e d H i s t o g r a m B y I d ( h i s t o g r a m I d ) ; 
                 h i s t o g r a m . a d d ( k e y ,   v a l u e ) ; 
             }   c a t c h   ( e )   { 
                 d u m p ( " W a r n i n g :   A n   a t t e m p t   w a s   m a d e   t o   w r i t e   t o   t h e   "   +   h i s t o g r a m I d   + 
                           "   h i s t o g r a m ,   w h i c h   i s   n o t   d e f i n e d   i n   H i s t o g r a m s . j s o n \ n " ) ; 
             } 
         } 
     } , 
 
     / * * 
       *   L o g   i n f o   a b o u t   u s a g e   o n c e   p e r   b r o w s e r   v e r s i o n .   T h i s   a l l o w s   u s   t o   d i s c o v e r 
       *   h o w   m a n y   i n d i v i d u a l   u s e r s   a r e   u s i n g   o u r   t o o l s   f o r   e a c h   b r o w s e r   v e r s i o n . 
       * 
       *   @ p a r a m     { S t r i n g }   p e r U s e r H i s t o g r a m 
       *                   H i s t o g r a m   i n   w h i c h   t h e   d a t a   i s   t o   b e   s t o r e d . 
       * / 
     l o g O n c e P e r B r o w s e r V e r s i o n :   f u n c t i o n   ( p e r U s e r H i s t o g r a m ,   v a l u e )   { 
         l e t   c u r r e n t V e r s i o n   =   S e r v i c e s . a p p i n f o . v e r s i o n ; 
         l e t   l a t e s t   =   S e r v i c e s . p r e f s . g e t C h a r P r e f ( T O O L S _ O P E N E D _ P R E F ) ; 
         l e t   l a t e s t O b j   =   J S O N . p a r s e ( l a t e s t ) ; 
 
         l e t   l a s t V e r s i o n H i s t o g r a m U p d a t e d   =   l a t e s t O b j [ p e r U s e r H i s t o g r a m ] ; 
 
         i f   ( t y p e o f   l a s t V e r s i o n H i s t o g r a m U p d a t e d   = =   " u n d e f i n e d "   | | 
                 l a s t V e r s i o n H i s t o g r a m U p d a t e d   ! = =   c u r r e n t V e r s i o n )   { 
             l a t e s t O b j [ p e r U s e r H i s t o g r a m ]   =   c u r r e n t V e r s i o n ; 
             l a t e s t   =   J S O N . s t r i n g i f y ( l a t e s t O b j ) ; 
             S e r v i c e s . p r e f s . s e t C h a r P r e f ( T O O L S _ O P E N E D _ P R E F ,   l a t e s t ) ; 
             t h i s . l o g ( p e r U s e r H i s t o g r a m ,   v a l u e ) ; 
         } 
     } , 
 
     d e s t r o y :   f u n c t i o n   ( )   { 
         f o r   ( l e t   h i s t o g r a m I d   o f   t h i s . _ t i m e r s . k e y s ( ) )   { 
             t h i s . s t o p T i m e r ( h i s t o g r a m I d ) ; 
         } 
     } 
 } ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/shared/telemetry.js     ÷)                               =   =   ¡   Q;      0   Ö    ;      =    :     Q   [   0[   &[   =   	]   
=   ]   ]   [   =   ]   
=   ]   ]   [   =   ]   
=   ]   ]   [   =   ]   
=   ]   ]   [   =   ]   
=   ]   ]   [   =   ]   
=   ]   ]   [   =   ]   
=   ]   ]   [   =    ]   
=   !]   ]   "[   	=   #]   
=   $]   ]   %[   
=   &]   
=   ']   ]   ([   =   )]   
=   *]   ]   +[   =   ,]   
=   -]   ]   .[   =   /]   
=   0]   ]   1[   =   2]   
=   3]   ]   4[   =   5]   
=   6]   ]   7[   =   8]   
=   9]   ]   :[   =   ;]   
=   <]   ]   =[   =   >]   
=   ?]   ]   @[   =   A]   
=   B]   ]   C[   =   D]   
=   E]   ]   F[   =   G]   
=   H]   ]   I[   =   J]   
=   K]   ]   L[   =   M]   
=   N]   ]   O[   =   P]   
]   Q[   =   R]   
]   S[   =   T]   
]   U[   =   V]   
]   W[   =   X]   
=   Y]   ]   Z[   =   []   
=   \]   ]   ][   =   ^]   
=   _]   ]   `[   =   a]   
=   b]   ]   c[    =   d]   
]   e[   !=   f]   
]   g[   "=   h]   
]   i[   #=   j]   
=   k]   ]   l[   $=   m]   
]   n[   %=   o]   
]   p]   q   ']   r   (]   s   )]   t   *]   u   +]   v   ,]   w   -]   x   .]   y   /]   z0   Ï-	)+Ë-8Ð:ÔÉ<ÊÊÏBÊÏFÊÏJÊÏNÊÏRÊÏVÊÏZÊÏ^ÊÏbÊÏfÊÏjÊÏnÊÏrÊÏvÊÏzÊÏ~ÊÏÊÏÊÏÊÏÊÏÊÏÊÏÏÏÏÏÊÏÊÏÊÏÊÏÏÏÏÊÏÏÔ  ÒÊ  âÊÊ  öÊ Ê Ê -Ê @Ê PÐ U    Services#   TOOLS_OPENED_PREF   use strictO   devtools.telemetry.tools.opened.version   module   exports   Telemetry   require   prototype;   DEVTOOLS_TOOLBOX_OPENED_COUNT   histogramI   DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS   timerHistogram   toolbox;   DEVTOOLS_OPTIONS_OPENED_COUNTI   DEVTOOLS_OPTIONS_TIME_ACTIVE_SECONDS   optionsA   DEVTOOLS_WEBCONSOLE_OPENED_COUNTO   DEVTOOLS_WEBCONSOLE_TIME_ACTIVE_SECONDS   webconsoleI   DEVTOOLS_BROWSERCONSOLE_OPENED_COUNTW   DEVTOOLS_BROWSERCONSOLE_TIME_ACTIVE_SECONDS   browserconsole?   DEVTOOLS_INSPECTOR_OPENED_COUNTM   DEVTOOLS_INSPECTOR_TIME_ACTIVE_SECONDS   inspector=   DEVTOOLS_RULEVIEW_OPENED_COUNTK   DEVTOOLS_RULEVIEW_TIME_ACTIVE_SECONDS   ruleviewE   DEVTOOLS_COMPUTEDVIEW_OPENED_COUNTS   DEVTOOLS_COMPUTEDVIEW_TIME_ACTIVE_SECONDS   computedviewG   DEVTOOLS_FONTINSPECTOR_OPENED_COUNTU   DEVTOOLS_FONTINSPECTOR_TIME_ACTIVE_SECONDS   fontinspectorQ   DEVTOOLS_ANIMATIONINSPECTOR_OPENED_COUNT_   DEVTOOLS_ANIMATIONINSPECTOR_TIME_ACTIVE_SECONDS%   animationinspectorA   DEVTOOLS_JSDEBUGGER_OPENED_COUNTO   DEVTOOLS_JSDEBUGGER_TIME_ACTIVE_SECONDS   jsdebuggerO   DEVTOOLS_JSBROWSERDEBUGGER_OPENED_COUNT]   DEVTOOLS_JSBROWSERDEBUGGER_TIME_ACTIVE_SECONDS#   jsbrowserdebuggerC   DEVTOOLS_STYLEEDITOR_OPENED_COUNTQ   DEVTOOLS_STYLEEDITOR_TIME_ACTIVE_SECONDS   styleeditorE   DEVTOOLS_SHADEREDITOR_OPENED_COUNTS   DEVTOOLS_SHADEREDITOR_TIME_ACTIVE_SECONDS   shadereditorI   DEVTOOLS_WEBAUDIOEDITOR_OPENED_COUNTW   DEVTOOLS_WEBAUDIOEDITOR_TIME_ACTIVE_SECONDS   webaudioeditorI   DEVTOOLS_CANVASDEBUGGER_OPENED_COUNTW   DEVTOOLS_CANVASDEBUGGER_TIME_ACTIVE_SECONDS   canvasdebuggerA   DEVTOOLS_JSPROFILER_OPENED_COUNTO   DEVTOOLS_JSPROFILER_TIME_ACTIVE_SECONDS   performance9   DEVTOOLS_MEMORY_OPENED_COUNTG   DEVTOOLS_MEMORY_TIME_ACTIVE_SECONDS   memoryA   DEVTOOLS_NETMONITOR_OPENED_COUNTO   DEVTOOLS_NETMONITOR_TIME_ACTIVE_SECONDS   netmonitor;   DEVTOOLS_STORAGE_OPENED_COUNTI   DEVTOOLS_STORAGE_TIME_ACTIVE_SECONDS   storageG   DEVTOOLS_PAINTFLASHING_OPENED_COUNTU   DEVTOOLS_PAINTFLASHING_TIME_ACTIVE_SECONDS   paintflashingA   DEVTOOLS_SCRATCHPAD_OPENED_COUNTO   DEVTOOLS_SCRATCHPAD_TIME_ACTIVE_SECONDS   scratchpadO   DEVTOOLS_SCRATCHPAD_WINDOW_OPENED_COUNT]   DEVTOOLS_SCRATCHPAD_WINDOW_TIME_ACTIVE_SECONDS#   scratchpad-windowA   DEVTOOLS_RESPONSIVE_OPENED_COUNTO   DEVTOOLS_RESPONSIVE_TIME_ACTIVE_SECONDS   responsiveA   DEVTOOLS_EYEDROPPER_OPENED_COUNT   eyedropperK   DEVTOOLS_MENU_EYEDROPPER_OPENED_COUNT   menueyedropperO   DEVTOOLS_PICKER_EYEDROPPER_OPENED_COUNT!   pickereyedropperQ   DEVTOOLS_TOOLBAR_EYEDROPPER_OPENED_COUNT#   toolbareyedropperM   DEVTOOLS_DEVELOPERTOOLBAR_OPENED_COUNT[   DEVTOOLS_DEVELOPERTOOLBAR_TIME_ACTIVE_SECONDS!   developertoolbarI   DEVTOOLS_ABOUTDEBUGGING_OPENED_COUNTW   DEVTOOLS_ABOUTDEBUGGING_TIME_ACTIVE_SECONDS   aboutdebugging9   DEVTOOLS_WEBIDE_OPENED_COUNTG   DEVTOOLS_WEBIDE_TIME_ACTIVE_SECONDS   webideW   DEVTOOLS_WEBIDE_PROJECT_EDITOR_OPENED_COUNTe   DEVTOOLS_WEBIDE_PROJECT_EDITOR_TIME_ACTIVE_SECONDS'   webideProjectEditorS   DEVTOOLS_WEBIDE_PROJECT_EDITOR_SAVE_COUNT/   webideProjectEditorSaveC   DEVTOOLS_WEBIDE_NEW_PROJECT_COUNT!   webideNewProjectI   DEVTOOLS_WEBIDE_IMPORT_PROJECT_COUNT'   webideImportProject9   DEVTOOLS_CUSTOM_OPENED_COUNTG   DEVTOOLS_CUSTOM_TIME_ACTIVE_SECONDS   customK   DEVTOOLS_RELOAD_ADDON_INSTALLED_COUNT)   reloadAddonInstalledE   DEVTOOLS_RELOAD_ADDON_RELOAD_COUNT#   reloadAddonReload   _histograms   toolOpened   actionOccurred   toolClosed   startTimer   stopTimer   log   logKeyed1   logOncePerBrowserVersion   destroy   ÿÿÿÿ      Telemetry   Services#   TOOLS_OPENED_PREF                   Telemetry   Ã      ¹      .                                    ì  -                ¹W   QV   V   5    ž   
V   : 0    QV   V   5   ž   
V   : 0   QV   V   5   ž   
V   : 0   QV   V   5   ž   
V   : 0   QV   V   5   ž   
V   : 0   QV   ;   A,  R  0   Q/ØÉØÉØÉØ ÉØÉ5ÎÉ    toolOpened	   bind   toolClosed   log1   logOncePerBrowserVersion   destroy   _timers   Map    ÿÿÿÿ      .this         ¹    @                 histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram                       histogram                       histogram                       histogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram         timerHistogram                       histogram                       histogram                       histogram                       histogram         timerHistogram                       histogram                       histogram              %         toolbox         options         webconsole         browserconsole         inspector         ruleview         computedview         fontinspector      %   animationinspector         jsdebugger      #   jsbrowserdebugger         styleeditor         shadereditor         webaudioeditor         canvasdebugger         performance         memory         netmonitor         storage         paintflashing         scratchpad      #   scratchpad-window         responsive         eyedropper         menueyedropper      !   pickereyedropper      #   toolbareyedropper      !   developertoolbar         aboutdebugging         webide      '   webideProjectEditor      /   webideProjectEditorSave      !   webideNewProject      '   webideImportProject         custom      )   reloadAddonInstalled      #   reloadAddonReload                 =   Telemetry.prototype.toolOpenedc        ¹                                      R  >  Ò                ¹W   Q  QV   5    T  7D   æQV   5    5   æ  QV  5      æV   ž   
V  5   C: QæV  5      æV   ž   
V  5   : QæÉèÉÚÉÚ    _histograms   custom   histogram   log   timerHistogram   startTimer    ÿÿÿÿ      id   .this                    charts               z   ÿÿÿÿ¹    @              actionOccurred@       ¹                                         )  â                ¹W   QV   ž    
T  : QÒ    toolOpened    ÿÿÿÿ      id   .this       ¹    @           =   Telemetry.prototype.toolClosedc  Z      ¹      "                                C  â  æ                ¹W   Q  QV   5    T  7  QV   D   æQV  5    æ   
æÉæV   ž   
V  5   : QÉÒÌË  íÙ    _histograms   timerHistogram   stopTimer    ÿÿÿÿ      id   .this                    charts               M   ÿÿÿÿ    >          ¹
    @           =   Telemetry.prototype.startTimerc  +      ¹                                       €  æ  ö                ¹W   QV   5    ž   
T  ;   A,  R  : QÝÿÿÿâ    _timers   set	   Date    ÿÿÿÿ      histogramId   .this       ¹    @           ;   Telemetry.prototype.stopTimerc  ­      ¹      (                                   D!                 ¹W   Q  QV   5    ž   
T  :   QV     æ  Q;   A,  R  V  Xè  QT     !æV   ž   
T  V  : Q   æV   ž   
T  T V  : QæV   5    ž   
T  : QÉæÉÓÈ
ÊÑ
ÜÚÚ    _timers   get	   Date   log   logKeyed   delete    ÿÿÿÿ      histogramId   key   .this                    startTime                  	   time                   ÿÿÿÿ   7   s       ¹    @           /   Telemetry.prototype.logc  y       ¹      &                                "  p#                 T     tæ   Q;    5   ž   
T  :    QV   ž   
T : QÉ   8æ   Qv   Q;      =   T  =   : QÉ    æ6ÔÈÛÌÓ Ì    Services   telemetry!   getHistogramById   add	   dump[   Warning: An attempt was made to write to the i    histogram, which is not defined in Histograms.json
    ÿÿÿÿ      histogramId   value                     histogram                       e               
   :         /   ÿÿÿÿ   M   $   ÿÿÿÿ¹    @           9   Telemetry.prototype.logKeyedc  |       ¹      &                                $  &  -               T     wæ   Q;    5   ž   
T  :    QV   ž   
T T : QÉ   8æ   Qv   Q;      =   T  =   : QÉ    æ9ÔÈÞÌÓ 3Ì    Services   telemetry+   getKeyedHistogramById   add	   dump[   Warning: An attempt was made to write to the i    histogram, which is not defined in Histograms.json
    ÿÿÿÿ      histogramId   key   value                     histogram                       e               
   =         2   ÿÿÿÿ   P   $   ÿÿÿÿ¹    @           Y   Telemetry.prototype.logOncePerBrowserVersionc  ì      ¹      8                                8'  x)  @  %      	       ¹W   Q        Q;    5   5     Q;    5   ž   
;   :   Q;   ž   
V  :   QV  T  7  QV  '=   D   æQV  V  Iæ   ^æV  T  V  9Q;   ž   	
V  : W  Q;    5   ž   

;   V  : QV   ž   
T  T : QæÉÒÔÖ	ÈÐÈÍÒÊÍÐ	ÈÞ×    Services   appinfo   version   prefs   getCharPref#   TOOLS_OPENED_PREF	   JSON   parse   undefined   stringify   setCharPref   log    ÿÿÿÿ   !   perUserHistogram   value   .this                    currentVersion   latest   latestObj7   lastVersionHistogramUpdated               Ó   ÿÿÿÿ¹
    @           7   Telemetry.prototype.destroyc   s      ¹      %                                )  ó)  P               ¹W   Q  QV   5    ž   
:  -Á
     *m  Q5     QV   ž   
V  : QãQž   
:   5   ÿÿÿÅæ ÉÖÌ8@ÒÿÿÿíÓ QËÿÿÿèÕ    _timers	   keys   value   stopTimer	   next	   done    ÿÿÿÿ      .this                      histogramId            '   @         f   ÿÿÿÿ¹    @        
         _histograms         toolOpened         actionOccurred         toolClosed         startTimer         stopTimer         log         logKeyed      1   logOncePerBrowserVersion         destroy       