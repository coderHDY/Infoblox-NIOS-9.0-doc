---
title: "Managing Passwords"
source: "/space/nios90/1481048460"
pageId: "1481048460"
---
Superusers can define requirements for the passwords of local admins according to your organization's policies. In addition to specifying the minimum password length, you can define rules that specify the character types that are allowed in the password. You can also specify whether passwords expire, their duration, and when reminders are sent to the users. Additionally, you can specify whether the history of used password needs to be stored, and you can require admins to change their passwords when they first log in or after their passwords are reset.

You set the requirements at the Grid level, so they apply to all local admins who log in to the Grid. You can also set the requirements at the standalone system level. The requirements that you define appear in the User Profile of all local admins and when users are required to change their password.

To define the password requirements for local admins:

1. **Grid:** From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab. Expand the Toolbar and select **Grid** **Properties** -&gt; **Edit**.   
   or,  
   **Standalone system:** From the **System** tab, select the **System Manager** tab. Expand the Toolbar and select **System Properties Editor**.
2. In the editor, select the **Password** tab and complete the following:
   
   - **Minimum** **Password** **Length:** Specify the minimum number of characters that are required in a password.
   - **Password** **Complexity:** You can set up some requirements around how users compose a password by specifying the category and the number of characters and/or symbols the password must contain. The default is 0 for all categories, which means the password is not required to contain those characters. Specify the minimum number of characters the password must contain for the following:
     
     - **lowercase characters [a-z]**
     - **uppercase characters [A-Z]**
     - **numeric characters [0-9]**
     - **symbol** ** characters**. Allowed characters are: **!** **@** **#** **$** **%** **^** **&** * **(** **)**
     - **character** ** changes** ** from** ** previous** ** passwords**. To discourage users from reusing previous passwords, you can require a minimum change of characters from previous passwords.
     - **password encryption**. Passwords with more than 64 characters are not encrypted.
   - **Password** ** must** ** expire:** Specify the number of days after which the password must expire and the number of days before which NIOS must send a reminder to the user that the password will expire.
   - **Enforce Password History:** Select this checkbox to store the history of used passwords in the NIOS database. This option is disabled by default.
     
     - In the **Remember last passwords** field, specify the number of passwords to be stored. You can specify a value from 1 to 20. The default value is 5.
   - **Minimum password age:** Specify the minimum number of days the password must be active before the user can attempt to change it. You can specify a value between 0 to 9998. The recommended value is 2.
     
     Note that if the **Password must expire** checkbox is enabled, you must set the **Minimum password age** to a value less than the password expiration interval value. Superusers can override the **Minimum password age** and reset the passwords of local admins.
   - **Force ** **password ** **change** ** at** ** next ** **login:** Select this checkbox to force all new users to change their passwords when they log in for the first time, and to force existing users whose passwords were reset by superusers or whose passwords were just reset to change their passwords.  
     Note that the "force password change at next login" feature does not apply to admin users in the **fireeye-group**. These users will not be prompted to change their passwords at the next login. Their original passwords continue to work. For information about FireEye integrated RPZs, see [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[*FireEye*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[*Integrated*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[*RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[.](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)
3. Click **Save** **&** **Close**.
