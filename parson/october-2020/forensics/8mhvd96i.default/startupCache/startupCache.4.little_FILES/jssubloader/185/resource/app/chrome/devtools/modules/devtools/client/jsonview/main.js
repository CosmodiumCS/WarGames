   20170118123726�      �      6                                `  �       / *   - * -   i n d e n t - t a b s - m o d e :   n i l ;   j s - i n d e n t - l e v e l :   2   - * -   * / 
 / *   v i m :   s e t   f t = j a v a s c r i p t   t s = 2   e t   s w = 2   t w = 8 0 :   * / 
 / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 / *   g l o b a l s   J s o n V i e w U t i l s * / 
 
 " u s e   s t r i c t " ; 
 
 c o n s t   {   C u   }   =   r e q u i r e ( " c h r o m e " ) ; 
 c o n s t   S e r v i c e s   =   r e q u i r e ( " S e r v i c e s " ) ; 
 
 c o n s t   {   X P C O M U t i l s   }   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / X P C O M U t i l s . j s m " ,   { } ) ; 
 
 X P C O M U t i l s . d e f i n e L a z y G e t t e r ( t h i s ,   " J s o n V i e w U t i l s " ,   f u n c t i o n   ( )   { 
     r e t u r n   r e q u i r e ( " d e v t o o l s / c l i e n t / j s o n v i e w / u t i l s " ) ; 
 } ) ; 
 
 / * * 
   *   S i n g l e t o n   o b j e c t   t h a t   r e p r e s e n t s   t h e   J S O N   V i e w   i n - c o n t e n t   t o o l . 
   *   I t   h a s   t h e   s a m e   l i f e t i m e   a s   t h e   b r o w s e r .   I n i t i a l i z a t i o n   d o n e   b y 
   *   D e v T o o l s ( )   o b j e c t   f r o m   d e v t o o l s / c l i e n t / f r a m e w o r k / d e v t o o l s . j s 
   * / 
 v a r   J s o n V i e w   =   { 
     i n i t i a l i z e :   f u n c t i o n   ( )   { 
         / /   L o a d   J S O N   c o n v e r t e r   m o d u l e .   T h i s   c o n v e r t e r   i s   r e s p o n s i b l e 
         / /   f o r   h a n d l i n g   ' a p p l i c a t i o n / j s o n '   d o c u m e n t s   a n d   c o n v e r t i n g 
         / /   t h e m   i n t o   a   s i m p l e   w e b - a p p   t h a t   a l l o w s   e a s y   i n s p e c t i o n 
         / /   o f   t h e   J S O N   d a t a . 
         S e r v i c e s . p p m m . l o a d P r o c e s s S c r i p t ( 
             " r e s o u r c e : / / d e v t o o l s / c l i e n t / j s o n v i e w / c o n v e r t e r - o b s e r v e r . j s " , 
             t r u e ) ; 
 
         t h i s . o n S a v e L i s t e n e r   =   t h i s . o n S a v e . b i n d ( t h i s ) ; 
 
         / /   R e g i s t e r   f o r   m e s s a g e s   c o m i n g   f r o m   t h e   c h i l d   p r o c e s s . 
         S e r v i c e s . p p m m . a d d M e s s a g e L i s t e n e r ( 
             " d e v t o o l s : j s o n v i e w : s a v e " ,   t h i s . o n S a v e L i s t e n e r ) ; 
     } , 
 
     d e s t r o y :   f u n c t i o n   ( )   { 
         S e r v i c e s . p p m m . r e m o v e M e s s a g e L i s t e n e r ( 
             " d e v t o o l s : j s o n v i e w : s a v e " ,   t h i s . o n S a v e L i s t e n e r ) ; 
     } , 
 
     / /   M e s s a g e   h a n d l e r s   f o r   e v e n t s   f r o m   c h i l d   p r o c e s s e s 
 
     / * * 
       *   S a v e   J S O N   t o   a   f i l e   n e e d s   t o   b e   i m p l e m e n t e d   h e r e 
       *   i n   t h e   p a r e n t   p r o c e s s . 
       * / 
     o n S a v e :   f u n c t i o n   ( m e s s a g e )   { 
         l e t   v a l u e   =   m e s s a g e . d a t a ; 
         l e t   f i l e   =   J s o n V i e w U t i l s . g e t T a r g e t F i l e ( ) ; 
         i f   ( f i l e )   { 
             J s o n V i e w U t i l s . s a v e T o F i l e ( f i l e ,   v a l u e ) ; 
         } 
     } 
 } ; 
 
 / /   E x p o r t s   f r o m   t h i s   m o d u l e 
 m o d u l e . e x p o r t s . J s o n V i e w   =   J s o n V i e w ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/client/jsonview/main.js     �                    �    �   �   �   =   �;   �   =   : �   �: Q5   �   QQ;   �   =   : �   Q�   �   
=   	[    : �   �: Q5   �   QQ�   �   

�=   �   : ��    [   �   ]   �   ]   �   ]   �    Q;   5   �    0    ��͟�
�ψ	ݐ�ψɘ�ֈݘۘ�ʐ�ʘ)�ʘ4�И>Ո#    JsonView   Cu   Services   XPCOMUtils   use strict   require   chrome-   RequireObjectCoercible   importK   resource://gre/modules/XPCOMUtils.jsm!   defineLazyGetter   JsonViewUtils   initialize   destroy   onSave   module   exports   ����      JsonView   Cu   Services   XPCOMUtils                                C          �                                         6  p     <              ;    �    =   : ���ψ�    require=   devtools/client/jsonview/utils    ����              �    @           '   JsonView.initializec   f      �   	   #                                  j  �                  �W   Q;    5   �   
=   C: QV   V   5   �   
V   : 0   Q;    5   �   
=   V   5   : Q���ѐ����"�؈ɘ%�ѐΘ%��'�    Services	   ppmm#   loadProcessScripts   resource://devtools/client/jsonview/converter-observer.js   onSaveListener   onSave	   bind%   addMessageListener-   devtools:jsonview:save    ����      .this         �    @           !   JsonView.destroyc   *      �                                        �  	  )                �W   Q;    5   �   
=   V   5   : Q���ѐΘ*��,�    Services	   ppmm+   removeMessageListener-   devtools:jsonview:save   onSaveListener    ����      .this         �    @              JsonView.onSavec  P       �                                       �  R  4                ��   �  QT  5    �   Q;   �   
:  �  QV     �;   �   
V  V   : Q�ə�ʈ͐�̈Ȑ��ژ:� 	   data   JsonViewUtils   getTargetFile   saveToFile    ����      message                     value	   file             
   E   �����    @                 initialize         destroy         onSave       