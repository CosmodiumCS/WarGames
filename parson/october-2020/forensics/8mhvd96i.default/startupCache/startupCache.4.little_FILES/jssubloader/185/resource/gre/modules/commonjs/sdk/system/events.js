   20170118123726  }   ¹   5   ó                         O       `  ®       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 ' u s e   s t r i c t ' ; 
 
 m o d u l e . m e t a d a t a   =   { 
     ' s t a b i l i t y ' :   ' u n s t a b l e ' 
 } ; 
 
 c o n s t   {   C c ,   C i ,   C u   }   =   r e q u i r e ( ' c h r o m e ' ) ; 
 c o n s t   {   U n k n o w n   }   =   r e q u i r e ( ' . . / p l a t f o r m / x p c o m ' ) ; 
 c o n s t   {   C l a s s   }   =   r e q u i r e ( ' . . / c o r e / h e r i t a g e ' ) ; 
 c o n s t   {   n s   }   =   r e q u i r e ( ' . . / c o r e / n a m e s p a c e ' ) ; 
 c o n s t   o b s e r v e r S e r v i c e   = 
     C c [ ' @ m o z i l l a . o r g / o b s e r v e r - s e r v i c e ; 1 ' ] . g e t S e r v i c e ( C i . n s I O b s e r v e r S e r v i c e ) ; 
 c o n s t   {   a d d O b s e r v e r ,   r e m o v e O b s e r v e r ,   n o t i f y O b s e r v e r s   }   =   o b s e r v e r S e r v i c e ; 
 c o n s t   {   S h i m W a i v e r   }   =   C u . i m p o r t ( " r e s o u r c e : / / g r e / m o d u l e s / S h i m W a i v e r . j s m " ) ; 
 c o n s t   a d d O b s e r v e r N o S h i m   =   S h i m W a i v e r . g e t P r o p e r t y ( o b s e r v e r S e r v i c e ,   " a d d O b s e r v e r " ) ; 
 c o n s t   r e m o v e O b s e r v e r N o S h i m   =   S h i m W a i v e r . g e t P r o p e r t y ( o b s e r v e r S e r v i c e ,   " r e m o v e O b s e r v e r " ) ; 
 c o n s t   n o t i f y O b s e r v e r s N o S h i m   =   S h i m W a i v e r . g e t P r o p e r t y ( o b s e r v e r S e r v i c e ,   " n o t i f y O b s e r v e r s " ) ; 
 c o n s t   u n l o a d S u b j e c t   =   r e q u i r e ( ' @ l o a d e r / u n l o a d ' ) ; 
 
 c o n s t   S u b j e c t   =   C l a s s ( { 
     e x t e n d s :   U n k n o w n , 
     i n i t i a l i z e :   f u n c t i o n   i n i t i a l i z e ( o b j e c t )   { 
         / /   D o u b l e - w r a p   t h e   o b j e c t   a n d   s e t   a   p r o p e r t y   i d e n t i f y i n g   t h e 
         / /   w r a p p e d J S O b j e c t   a s   o n e   o f   o u r   w r a p p e r s   t o   d i s t i n g u i s h   b e t w e e n 
         / /   s u b j e c t s   t h a t   a r e   o n e   o f   o u r   w r a p p e r s   ( w h i c h   w e   s h o u l d   u n w r a p 
         / /   w h e n   n o t i f y i n g   o u r   o b s e r v e r s )   a n d   t h o s e   t h a t   a r e   r e a l   J S   X P C O M 
         / /   c o m p o n e n t s   ( w h i c h   w e   s h o u l d   p a s s   t h r o u g h   u n a l t e r e d ) . 
         t h i s . w r a p p e d J S O b j e c t   =   { 
             o b s e r v e r s M o d u l e S u b j e c t W r a p p e r :   t r u e , 
             o b j e c t :   o b j e c t 
         } ; 
     } , 
     g e t S c r i p t a b l e H e l p e r :   f u n c t i o n ( )   { } , 
     g e t I n t e r f a c e s :   f u n c t i o n ( )   { } 
 } ) ; 
 
 f u n c t i o n   e m i t ( t y p e ,   e v e n t ,   s h i m m e d   =   f a l s e )   { 
     / /   F r o m   b u g   9 1 0 5 9 9 
     / /   W e   m u s t   t e s t   t o   s e e   i f   ' s u b j e c t '   o r   ' d a t a '   i s   a   d e f i n e d   p r o p e r t y 
     / /   o f   t h e   e v e n t   o b j e c t ,   b u t   a l s o   a l l o w   p r i m i t i v e s   t o   b e   p a s s e d   i n , 
     / /   w h i c h   t h e   ` i n `   o p e r a t o r   b r e a k s ,   y e t   ` n u l l `   i s   a n   o b j e c t ,   h e n c e 
     / /   t h e   l o n g   c o n d i t i o n a l 
     l e t   s u b j e c t   =   e v e n t   & &   t y p e o f   e v e n t   = = =   ' o b j e c t '   & &   ' s u b j e c t '   i n   e v e n t   ? 
         S u b j e c t ( e v e n t . s u b j e c t )   : 
         n u l l ; 
     l e t   d a t a   =   e v e n t   & &   t y p e o f   e v e n t   = = =   ' o b j e c t '   ? 
         / /   A n   o b j e c t   e i t h e r   r e t u r n s   i t s   ` d a t a `   p r o p e r t y   o r   n u l l 
         ( ' d a t a '   i n   e v e n t   ?   e v e n t . d a t a   :   n u l l )   : 
         / /   A l l   o t h e r   t y p e s   r e t u r n   t h e m s e l v e s   ( a n d   c a s t   t o   s t r i n g s / n u l l 
         / /   v i a   o b s e r v e r   s e r v i c e ) 
         e v e n t ; 
     i f   ( s h i m m e d )   { 
         n o t i f y O b s e r v e r s ( s u b j e c t ,   t y p e ,   d a t a ) ; 
     }   e l s e   { 
         n o t i f y O b s e r v e r s N o S h i m ( s u b j e c t ,   t y p e ,   d a t a ) ; 
     } 
 } 
 e x p o r t s . e m i t   =   e m i t ; 
 
 c o n s t   O b s e r v e r   =   C l a s s ( { 
     e x t e n d s :   U n k n o w n , 
     i n i t i a l i z e :   f u n c t i o n   i n i t i a l i z e ( l i s t e n e r )   { 
         t h i s . l i s t e n e r   =   l i s t e n e r ; 
     } , 
     i n t e r f a c e s :   [   ' n s I O b s e r v e r ' ,   ' n s I S u p p o r t s W e a k R e f e r e n c e '   ] , 
     o b s e r v e :   f u n c t i o n ( s u b j e c t ,   t o p i c ,   d a t a )   { 
         / /   E x t r a c t   t h e   w r a p p e d   o b j e c t   f o r   s u b j e c t s   t h a t   a r e   o n e   o f   o u r 
         / /   w r a p p e r s   a r o u n d   a   J S   o b j e c t .     T h i s   w a y   w e   s u p p o r t   b o t h   w r a p p e d 
         / /   s u b j e c t s   c r e a t e d   u s i n g   t h i s   m o d u l e   a n d   t h o s e   t h a t   a r e   r e a l 
         / /   X P C O M   c o m p o n e n t s . 
         i f   ( s u b j e c t   & &   t y p e o f ( s u b j e c t )   = =   ' o b j e c t '   & & 
                 ( ' w r a p p e d J S O b j e c t '   i n   s u b j e c t )   & & 
                 ( ' o b s e r v e r s M o d u l e S u b j e c t W r a p p e r '   i n   s u b j e c t . w r a p p e d J S O b j e c t ) ) 
             s u b j e c t   =   s u b j e c t . w r a p p e d J S O b j e c t . o b j e c t ; 
 
         t r y   { 
             t h i s . l i s t e n e r ( { 
                 t y p e :   t o p i c , 
                 s u b j e c t :   s u b j e c t , 
                 d a t a :   d a t a 
             } ) ; 
         } 
         c a t c h   ( e r r o r )   { 
             c o n s o l e . e x c e p t i o n ( e r r o r ) ; 
         } 
     } 
 } ) ; 
 
 c o n s t   s u b s c r i b e r s   =   n s ( ) ; 
 
 f u n c t i o n   o n ( t y p e ,   l i s t e n e r ,   s t r o n g ,   s h i m m e d   =   f a l s e )   { 
     / /   U n l e s s   l a s t   o p t i o n a l   a r g u m e n t   i s   ` t r u e `   w e   u s e   a   w e a k   r e f e r e n c e   t o   a 
     / /   l i s t e n e r . 
     l e t   w e a k   =   ! s t r o n g ; 
     / /   T a k e   l i s t   o f   o b s e r v e r s   a s s o c i a t e d   w i t h   g i v e n   ` l i s t e n e r `   f u n c t i o n . 
     l e t   o b s e r v e r s   =   s u b s c r i b e r s ( l i s t e n e r ) ; 
     / /   I f   ` o b s e r v e r `   f o r   t h e   g i v e n   ` t y p e `   i s   n o t   r e g i s t e r e d   y e t ,   t h e n 
     / /   a s s o c i a t e   a n   ` o b s e r v e r `   a n d   r e g i s t e r   i t . 
     i f   ( ! ( t y p e   i n   o b s e r v e r s ) )   { 
         l e t   o b s e r v e r   =   O b s e r v e r ( l i s t e n e r ) ; 
         o b s e r v e r s [ t y p e ]   =   o b s e r v e r ; 
         i f   ( s h i m m e d )   { 
             a d d O b s e r v e r ( o b s e r v e r ,   t y p e ,   w e a k ) ; 
         }   e l s e   { 
             a d d O b s e r v e r N o S h i m ( o b s e r v e r ,   t y p e ,   w e a k ) ; 
         } 
         / /   W e a k R e f   g y m n a s t i c s   t o   r e m o v e   a l l   a l i v e   o b s e r v e r s   o n   u n l o a d 
         l e t   r e f   =   C u . g e t W e a k R e f e r e n c e ( o b s e r v e r ) ; 
         w e a k R e f s . s e t ( o b s e r v e r ,   r e f ) ; 
         s t i l l A l i v e . s e t ( r e f ,   t y p e ) ; 
         w a s S h i m m e d . s e t ( r e f ,   s h i m m e d ) ; 
     } 
 } 
 e x p o r t s . o n   =   o n ; 
 
 f u n c t i o n   o n c e ( t y p e ,   l i s t e n e r ,   s h i m m e d   =   f a l s e )   { 
     / /   N o t e :   t h i s   c o d e   a s s u m e s   o r d e r   i n   w h i c h   l i s t e n e r s   a r e   c a l l e d ,   w h i c h   i s   f i n e 
     / /   a s   l o n g   a s   d i s p a t c h   h a p p e n s   i n   s a m e   o r d e r   a s   l i s t e n e r   r e g i s t r a t i o n   w h i c h 
     / /   i s   t h e   c a s e   n o w .   T h a t   b e i n g   s a i d   w e   s h o u l d   b e   a w a r e   t h a t   t h i s   m a y   b r e a k 
     / /   i n   a   f u t u r e   i f   o r d e r   w i l l   c h a n g e . 
     o n ( t y p e ,   l i s t e n e r ,   s h i m m e d ) ; 
     o n ( t y p e ,   f u n c t i o n   c l e a n u p ( )   { 
         o f f ( t y p e ,   l i s t e n e r ,   s h i m m e d ) ; 
         o f f ( t y p e ,   c l e a n u p ,   s h i m m e d ) ; 
     } ,   t r u e ,   s h i m m e d ) ; 
 } 
 e x p o r t s . o n c e   =   o n c e ; 
 
 f u n c t i o n   o f f ( t y p e ,   l i s t e n e r ,   s h i m m e d   =   f a l s e )   { 
     / /   T a k e   l i s t   o f   o b s e r v e r s   a s   w i t h   t h e   g i v e n   ` l i s t e n e r ` . 
     l e t   o b s e r v e r s   =   s u b s c r i b e r s ( l i s t e n e r ) ; 
     / /   I f   ` o b s e r v e r `   f o r   t h e   g i v e n   ` t y p e `   i s   r e g i s t e r e d ,   t h e n 
     / /   r e m o v e   i t   &   u n r e g i s t e r . 
     i f   ( t y p e   i n   o b s e r v e r s )   { 
         l e t   o b s e r v e r   =   o b s e r v e r s [ t y p e ] ; 
         d e l e t e   o b s e r v e r s [ t y p e ] ; 
         i f   ( s h i m m e d )   { 
             r e m o v e O b s e r v e r ( o b s e r v e r ,   t y p e ) ; 
         }   e l s e   { 
             r e m o v e O b s e r v e r N o S h i m ( o b s e r v e r ,   t y p e ) ; 
         } 
         s t i l l A l i v e . d e l e t e ( w e a k R e f s . g e t ( o b s e r v e r ) ) ; 
         w a s S h i m m e d . d e l e t e ( w e a k R e f s . g e t ( o b s e r v e r ) ) ; 
     } 
 } 
 e x p o r t s . o f f   =   o f f ; 
 
 / /   m u s t   u s e   W e a k M a p   t o   k e e p   r e f e r e n c e   t o   a l l   t h e   W e a k R e f s   ( ! ) ,   s e e   b u g   9 8 6 1 1 5 
 v a r   w e a k R e f s   =   n e w   W e a k M a p ( ) ; 
 
 / /   a n d   w e ' r e   o u t   o f   b e t a ,   w e ' r e   r e l e a s i n g   o n   t i m e ! 
 v a r   s t i l l A l i v e   =   n e w   M a p ( ) ; 
 
 v a r   w a s S h i m m e d   =   n e w   M a p ( ) ; 
 
 o n ( ' s d k : l o a d e r : d e s t r o y ' ,   f u n c t i o n   o n u n l o a d ( {   s u b j e c t ,   d a t a :   r e a s o n   } )   { 
     / /   u s i n g   l o g i c   f r o m   . / u n l o a d ,   t o   a v o i d   a   c i r c u l a r   m o d u l e   r e f e r e n c e 
     i f   ( s u b j e c t . w r a p p e d J S O b j e c t   = = =   u n l o a d S u b j e c t )   { 
         o f f ( ' s d k : l o a d e r : d e s t r o y ' ,   o n u n l o a d ,   f a l s e ) ; 
 
         / /   d o n ' t   b o t h e r 
         i f   ( r e a s o n   = = =   ' s h u t d o w n ' )   
             r e t u r n ; 
 
         s t i l l A l i v e . f o r E a c h (   ( t y p e ,   r e f )   = >   { 
             l e t   o b s e r v e r   =   r e f . g e t ( ) ; 
             i f   ( o b s e r v e r )   { 
                 i f   ( w a s S h i m m e d . g e t ( r e f ) )   { 
                     r e m o v e O b s e r v e r ( o b s e r v e r ,   t y p e ) ; 
                 }   e l s e   { 
                     r e m o v e O b s e r v e r N o S h i m ( o b s e r v e r ,   t y p e ) ; 
                 } 
             } 
         } ) 
     } 
     / /   a   s t r o n g   r e f e r e n c e 
 } ,   t r u e ,   f a l s e ) ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/system/events.js     ®                                                   	   
                                    
      =   ;   [    =   ]   0   ;      =   :    : Q5   ¡   Q5   ¡   Q5   	¡   	QQ;      =   :    : Q5   ¡   QQ;      =   :    : Q5   ¡   QQ;      =   :    : Q5   ¡   QQ   5    ž   !
   5   ": ¡   Q      : Q5   ¡   Q5   ¡   Q5   ¡   QQ   	ž   #
=   $:    : Q5   ¡   QQ   ž   %
   =   : ¡   
Q   ž   %
   =   : ¡   Q   ž   %
   =   : ¡   Q;      =   &: ¡   Q      [      ]   '   ]   (   ]   )   ]   *: ¡   Q;   +   ,0   ,      [   	   ]   '   ]   (f   ]   -   ]   .: ¡   Q      :  ¡   Q;   +   /0   /;   +   00   0;   +   10   1Ö    ;   2A,  R      QÖ   ;   3A,  R     QÖ   ;   3A,  R     Q   /   /=   4   CB: ÿï)	_	x	  	ÊÐÏõÏÝÏÝÏ	ÝÛÉ÷ÑÝÖÉÖÉÖÉÏÉÏÊÊ%ÊÊÉ)>Ð@ÏÊÊEÊÊ@É]ÊÉ_vÐx  Ð  ÐÏÉÏÉÏÉÔ  µ     µ    weakRefs   stillAlive   wasShimmed   observerService   unloadSubject   Observer   Class   ShimWaiver   Unknown   Cu#   addObserverNoShim   Cc)   removeObserverNoShim+   notifyObserversNoShim   subscribers   notifyObservers   Subject   Ci   removeObserver   addObserver   ns   use strict   module   metadata   unstable   stability   require   chrome-   RequireObjectCoercible#   ../platform/xpcom!   ../core/heritage#   ../core/namespace?   @mozilla.org/observer-service;1   getService%   nsIObserverService   importK   resource://gre/modules/ShimWaiver.jsm   getProperty   @loader/unload   extends   initialize'   getScriptableHelper   getInterfaces   exports	   emit   interfaces   observe   on	   once   off   WeakMap   Map%   sdk:loader:destroy   ÿÿÿÿ   	   once	   emit   off   on   weakRefs   stillAlive   wasShimmed   observerService   unloadSubject   Observer   Class   ShimWaiver   Unknown   Cu#   addObserverNoShim   Cc)   removeObserverNoShim+   notifyObserversNoShim   subscribers   notifyObservers   Subject   Ci   removeObserver   addObserver   ns                      stability                    initializeC  $      ¹                                       B       !            ¹W   QV   [    C]   T  ]   0    Q ÉÎ$    wrappedJSObject;   observersModuleSubjectWrapper   object   ÿÿÿÿ      initialize                        object   .this                    ;   observersModuleSubjectWrapper         object       ¹
    @           9   Subject<.getScriptableHelperc          ¹                                           "  '  %                  #     ÿÿÿÿ              ¹    @           -   Subject<.getInterfacesc          ¹                                           B  G  &                       ÿÿÿÿ              ¹    @                 extends         initialize      '   getScriptableHelper         getInterfaces                 	   emit  "      ¹      5                                Z  k	  )                       QT     QT   QT H   æQBæ  Q    QV  E   #æQV  '=    HE   æQ=   V  qæ   !æ;      V  5   :    æ@æ  QV  E   æQV  '=    Hæ   ,æ=   V  q   æV  5      æ@æ   
æV  æ  QV     %æ;      V  V   V  : Q    æ;      V  V   V  : QæÉäÎ/ÊËÝÓÉËÌ'4ÊÝ7Ê àÜ=    object   subject   Subject	   data   notifyObservers+   notifyObserversNoShim    ÿÿÿÿ   	   type   event   shimmed                   subject	   data                   subject	   data            2   Íÿÿÿÿÿÿÿ   <   å       ¹    @              initializeC        ¹                                        Ð	  þ	  B   !            ¹W   QV   T  0    QÍ    listener   ÿÿÿÿ      initialize                        listener   .this       ¹
    @                nsIObserver   1   nsISupportsWeakReference             #   Observer<.observec  ¶      ¹   	   4                              P
  Ï  F                ¹W   QT  E   6æQT  '=    E   %æQ=   T  qE   æQ=   T  5   qæ   æT  5   5    U  QæV   ž   
[    T ]   T  ]   T ]   : Q   /æ  Qv  Q;   ž   
V  : QÉ    æKÊÑÐÏÒP-ÐÈÈÈQÌWÌÜZ    object   wrappedJSObject;   observersModuleSubjectWrapper   listener	   type   subject	   data   console   exception    ÿÿÿÿ      subject   topic	   data   .this                    error                      	   type         subject      	   data            S   1            ÿÿÿÿ¹    @                 extends         initialize         interfaces         observe                    on  O      ¹   
   H                                û  1  _      
                   QT     QT   QT   QT H   æQBæ  Q    QV     Q;        V  :   QV   V  q    Úæ    	Q;      V  :   QV  V   V  9QV     %æ;      V  V   V  : Q    æ;      V  V   V  : Qæ;   ž   
V  :   	Q;   ž   
V  V  	: Q;   ž   
V  	V   : Q;   	ž   
V  	V  : QÉæÉðÎbÊÊdÎÈgÊÊÎÈÎ àÛpÐÈØØÛu    subscribers   Observer   addObserver#   addObserverNoShim   Cu!   getWeakReference   weakRefs   set   stillAlive   wasShimmed    ÿÿÿÿ   	   type   listener   strong   shimmed                	   weak   observers                	   weak   observers                     observer   ref      
      >   Áÿÿÿÿÿÿÿ   H               Ê      ¹    @           	   once  c       ¹                               	        Q    x                  T     QT    QT H   æQBæ   Q;                 : Q;               C   : QØÏ}ÝÔ~    on    ÿÿÿÿ   	   type   listener   shimmed                   cleanupC   F       ¹                                	         Á    ~                ;                          : Q;              : QìÙ    off   ÿÿÿÿ      cleanup                                ¹    @              off        ¹      >                                B  X                         QT     QT   QT H   æQBæ  Q  Q;        V  :   QV   V  q   šæ  QV  V   7  QV  V   /QV     !æ;      V  V   : Q   æ;      V  V   : Qæ;   ž   
;   ž   
V  : : Q;   ž   
;   ž   
V  : : QÉæÉäÎÎÈÉÎÊÜ×ÜÿÿÿîÜÿÿÿî    subscribers   removeObserver)   removeObserverNoShim   stillAlive   delete   weakRefs   get   wasShimmed    ÿÿÿÿ   	   type   listener   shimmed                   observers                   observers                     observer            2   Íÿÿÿÿÿÿÿ   8   É          c         ¹    @              onunloadC  |       ¹   
   $                                 q                     T      : Q5   W   Q5   W  QQV   5      H   Dæ      =   B: QV  =   H   ææ   ž   	
    : QæçÏÕÊ  µ  ©×  µ -   RequireObjectCoercible   subject	   data   wrappedJSObject   unloadSubject   off%   sdk:loader:destroy   shutdown   stillAlive   forEach   ÿÿÿÿ      onunload                         subject   reason                   onunload/<d"     ©      ¹    @ 