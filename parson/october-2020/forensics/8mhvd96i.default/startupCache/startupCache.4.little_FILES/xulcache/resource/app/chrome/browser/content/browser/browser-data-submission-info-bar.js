   ^   ¹   Y   20170118123726Ç      ¹      R                                       chrome://browser/content/browser-data-submission-info-bar.js                                   =   ¡   Q=   ¡   QÖ    Y   f    ]   =   ]      a      a   	   ]   
   ]      ]      ]      ]      ¸   
Z      5   `       5   `   : ]       QÈËËÊÊÊÊÊÊ*Ê.Ê[ÊcÊ{ÑÏÏ{Î 1   gDataNotificationInfoBar   LOGGER_NAME   LOGGER_PREFIX#   Toolkit.Telemetry3   DataNotificationInfoBar::   _OBSERVERS   data-reporting9   _DATA_REPORTING_NOTIFICATION!   _notificationBox	   _log	   init;   _getDataReportingNotification3   _displayDataPolicyInfoBar1   _clearPolicyNotification   observe   XPCOMUtils   generateQI   Ci   nsIObserver1   nsISupportsWeakReference   QueryInterface   ÿÿÿÿ   1   gDataNotificationInfoBar   LOGGER_NAME   LOGGER_PREFIX                  Q   datareporting:notify-data-policy:request   M   datareporting:notify-data-policy:close             )   get _notificationBox  /      ¹                                         V  Ö                   ¹W   QV   %    QV      ¸   
=   : 6    ÊÕÈ !   _notificationBox   document   getElementById-   global-notificationbox    ÿÿÿÿ      .this                      get _log  d      ¹   	                           	         ã  ¢                   ¹W   Q  Q    ¸   
=   [    : 5     QV   %   QV   V  5   ¸   
      : 6   ÉÉÖÍÊÞÈ    Cu   import=   resource://gre/modules/Log.jsm   Log	   _log   repository5   getLoggerWithMessagePrefix   LOGGER_NAME   LOGGER_PREFIX    ÿÿÿÿ      .this                      Log                              W   ÿÿÿÿ    a                    ;   gDataNotificationInfoBar.initc         ¹   
   &                               µ  ²                   ¹   Q    ¸   
=       B: Q   Q   5   -Á
     6m   Q5      Q   5   ¸   
   V   C: QãQ¸   
:   5   	ÿÿÿ¹æ É×#%Ù8LÒ	ß%ËÿÿÿòÕ(    window!   addEventListener   unload   _OBSERVERS   value   Services   obs   addObserver	   next	   done    ÿÿÿÿ      .this                      o                    ?   gDataNotificationInfoBar.init/<e   o       ¹                                        à  J                      Q   5    -Á
     5m   Q5      Q   5   ¸   
   V   : QãQ¸   
:   5   ÿÿÿºæ ÉÙ8KÒÞ ËÿÿÿòÕ#    _OBSERVERS   value   Services   obs   removeObserver	   next	   done    ÿÿÿÿ                           o                K         h   ÿÿÿÿ   :   L      )   i   ÿÿÿÿ          m   gDataNotificationInfoBar._getDataReportingNotificationc  A       ¹                                          ß  N  *                    Q¹W  QT  H   æQV  5    æ   QV  5   ¸   
V   : ÒÖÔ 9   _DATA_REPORTING_NOTIFICATION!   _notificationBox1   getNotificationWithValue    ÿÿÿÿ   	   name   .this                e   gDataNotificationInfoBar._displayDataPolicyInfoBarc       ¹      s                        #       w  }  .                 ¹   Q             Q   ¸    
:     
æÉæ   ¸   
=   :    QV   ¸   
=   :   QV   ¸   
=   :   Q   ¸   
=   	Z   V  `    V  `   :   Q   B6   
QZ   [      ¸   
=   : ]      ¸   
=   : ]   @]       ]   `      Q   5   ¸   
=   : Q   5   ¸   
V     5   @   5   5   V     :   QT  ¸   
:  QÉæY3ÑÈÐ
ÈÐÈ7ÌÉ	É7È;Ì=ÑÈÑÈÕGÚÑÊÏÊHÈXÏ ;   _getDataReportingNotification   document   getElementById   bundle_brand   getString   brandShortName   vendorShortName!   gNavigatorBundle%   getFormattedStringC   dataReportingNotification.message   _actionTakenM   dataReportingNotification.button.label   labelU   dataReportingNotification.button.accessKey   accessKey   popup   callback	   _log	   infoY   Creating data reporting policy notification.!   _notificationBox%   appendNotification9   _DATA_REPORTING_NOTIFICATION%   PRIORITY_INFO_HIGH)   onUserNotifyComplete    ÿÿÿÿ      request   .this                    brandBundle   appName   vendorName   message   buttons   notification                      gDataNotificationInfoBar._displayDataPolicyInfoBar/buttons<.callbacke   "       ¹                                          	  t  A                     C6    Q   ¸   
=   : QÌÕ    _actionTaken   window/   openAdvancedPreferences   dataChoicesTab    ÿÿÿÿ                              label         accessKey         popup         callback                   gDataNotificationInfoBar._displayDataPolicyInfoBar/notification<e  -       ¹                                         	  )
  M                  T  =       "æ   5   ¸   
@=   @: QæÉ
ÝR    removed   Services   obs   notifyObserversM   datareporting:notify-data-policy:close    ÿÿÿÿ      event           !   `  ÿÿÿÿ    9                    c   gDataNotificationInfoBar._clearPolicyNotificationc   T      ¹                                        ¥  T  [                 ¹W   Q  QV   ¸    
:    QV     .æV   5   ¸   
=   : QV  ¸   
:  QæÉËÈÙÑa ;   _getDataReportingNotification	   _log   debug+   Closing notification.   close    ÿÿÿÿ      .this                      notification               G   ÿÿÿÿ          A   gDataNotificationInfoBar.observec  ®      ¹      ?                                j    c                 ¹W   QT   Qx=    y   æ=   y   kæz   æT  5   5     QV   ¸   
V  : Q   3æ  Qv  QV  ¸   
V  : QÉÉÉ    æ   %æV   C6   QV   ¸   
:  Q   æÉÉh  vËpÌÒ
ÛÌ
Ó
yÌmXosËÏXwy Q   datareporting:notify-data-policy:requestM   datareporting:notify-data-policy:close   wrappedJSObject   object3   _displayDataPolicyInfoBar%   onUserNotifyFailed   _actionTaken1   _clearPolicyNotification    ÿÿÿÿ      subject   topic	   data   .this                    request                     ex              9               ÿÿÿÿ   `             |             }         