---
title: "Identification and Authentication"
source: "/space/nios90/1480917464"
pageId: "1480917464"
---
**Event:** Invalid password when logging in to the WebUI**.**   
**Message:** "2011-10-19 14:02:32.750Z [admin]: Login_Denied - - to=Serial\040Console apparently_via=Directerror=invalid\040login\040or\040password"



**Event:** Number of attempts exceeds the limit when logging in to the WebUI**.**   
**Message:** "2011-10-19 14:05:23.217Z [admin]: Login_Denied - - to=Serial\040Console apparently_via=Directerror=failed\040logins\040exceed\040limit"



**Event:** Invalid password when logging in to the CLI.   
**Message:** "2011-10-19 14:02:32.750Z [admin]: Login_Denied - - to=Serial\040Console apparently_via=Directerror=invalid\040login\040or\040password"



**Event:** Number of attempts exceeds the limit when logging in to the CLI.   
**Message:** "2011-10-19 14:05:23.217Z [admin]: Login_Denied - - to=Serial\040Console apparently_via=Directerror=failed\040logins\040exceed\040limit"



**Event:** Enable Common Criteria mode:  
**Message:** 2011-10-19 19:48:37.299Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Directauth=Local group=.admin-group



**Message:** 2011-10-19 19:48:48.705Z [admin]: Called - set_cc_mode: Args cc_mode_enabled="true"   
**Event:** Disable Common Criteria mode:  
Message: 2011-10-19 19:48:37.299Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Directauth=Local group=.admin-group  
Message: 2011-10-19 19:48:48.705Z [admin]: Called - set_cc_mode: Args cc_mode_enabled="false"



**Event:** Login successful   
**Message:** 2011-10-19 19:48:48.706Z [USER\040admin]: rebooted the system  
2011-11-01 17:09:21.696Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Direct auth=Localgroup=.admin-group



**Event:** First login   
**Message:** 2011-10-19 12:43:47.375Z [user]: First_Login - - to=AdminConnector ip=127.0.0.1 auth=LOCALgroup=admin-group apparently_via=GUI first login



**Event:** Password expired   
**Message:** 2011-10-20 13:17:29.257Z [user]: Password_Expired - - to=AdminConnector ip=127.0.0.1 auth=LOCALgroup=admin-group apparently_via=GUI



**Event:** Password was successfully reset.   
**Message:** 2011-10-19 12:44:45.962Z [user]: Password_Reset - - to=AdminConnector auth=LOCALgroup=admin-group apparently_via=GUI



**Event:** New password did not conform to the rule.   
**Message: **2011-10-19 13:07:33.343Z [user]: Password_Reset_Error - - to=AdminConnector auth=LOCALgroup=admin-group apparently_via=GUI
