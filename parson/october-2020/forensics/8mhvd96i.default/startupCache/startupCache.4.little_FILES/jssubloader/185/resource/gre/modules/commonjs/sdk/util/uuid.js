   20170118123726�      �      &                                `  �       / *   T h i s   S o u r c e   C o d e   F o r m   i s   s u b j e c t   t o   t h e   t e r m s   o f   t h e   M o z i l l a   P u b l i c 
   *   L i c e n s e ,   v .   2 . 0 .   I f   a   c o p y   o f   t h e   M P L   w a s   n o t   d i s t r i b u t e d   w i t h   t h i s 
   *   f i l e ,   Y o u   c a n   o b t a i n   o n e   a t   h t t p : / / m o z i l l a . o r g / M P L / 2 . 0 / .   * / 
 
 " u s e   s t r i c t " ; 
 
 m o d u l e . m e t a d a t a   =   { 
     " s t a b i l i t y " :   " u n s t a b l e " 
 } ; 
 
 c o n s t   {   C c ,   C i ,   c o m p o n e n t s :   {   I D :   p a r s e U U I D   }   }   =   r e q u i r e ( ' c h r o m e ' ) ; 
 c o n s t   {   g e n e r a t e U U I D   }   =   C c [ ' @ m o z i l l a . o r g / u u i d - g e n e r a t o r ; 1 ' ] . 
                                                     g e t S e r v i c e ( C i . n s I U U I D G e n e r a t o r ) ; 
 
 / /   R e t u r n s   ` u u i d ` .   I f   ` i d `   i s   p a s s e d   t h e n   i t ' s   p a r s e d   t o   ` u u i d `   a n d   r e t u r n e d 
 / /   i f   n o t   t h e n   n e w   o n e   i s   g e n e r a t e d . 
 e x p o r t s . u u i d   =   f u n c t i o n   u u i d ( i d )   { 
     r e t u r n   i d   ?   p a r s e U U I D ( i d )   :   g e n e r a t e U U I D ( ) ; 
 } ; 
   resource://gre/modules/commonjs/toolkit/loader.js -> resource://gre/modules/commonjs/sdk/util/uuid.js     �                    �    �   �   �   =   �;   [    =   ]   0   �;   	�   	=   
: �   �: Q5    �    Q5   �   Q5   �   �: Q5   �   QQQ�    5   �   
�   5   : �   �: Q5   �   QQ;   �   0   ��͟�ʐ�И�ψ,�ʐ�ѐʘ�ݘИ�    Cc   Ci   parseUUID   generateUUID   use strict   module   metadata   unstable   stability   require   chrome-   RequireObjectCoercible   components   ID;   @mozilla.org/uuid-generator;1   getService!   nsIUUIDGenerator   exports	   uuid   ����      Cc   Ci   parseUUID   generateUUID                        stability                 	   uuidC  /       �                                        \  �                  T     �;    �    T  :    �;   �   :  ����ӈӈ�    parseUUID   generateUUID   ����   	   uuid                        id        �    @ 