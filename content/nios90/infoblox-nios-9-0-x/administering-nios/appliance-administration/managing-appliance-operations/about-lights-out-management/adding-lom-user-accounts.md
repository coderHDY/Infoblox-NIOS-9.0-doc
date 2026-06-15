---
title: "Adding LOM User Accounts"
source: "/space/nios90/1395851423"
pageId: "1395851423"
---
You can add up to eight LOM user accounts. Admins must use the configured user name and password to remotely log in to the appliance.  
Note that when you add LOM user accounts at the Grid level, all members inherit them. You can configure user accounts specific to a member by overriding the Grid accounts. When you click **Override** to modify the inherited Grid accounts, the appliance creates copies of the Grid level user accounts and saves them at the member level. These are new accounts at the member level and do not affect the Grid accounts or any accounts configured on other Grid members. You can also reset member accounts to the Grid accounts by clicking **Inherit**. When you do that however, all changes you previously made to the member accounts are lost.  
To add a LOM user account:

1. **Grid:** From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.  
   **Independent** **appliance**: From the **System** tab, select the **System** **Manager** tab, expand the Toolbar and click **System** **Properties** -&gt; **Edit**.  
   **Member:** From the** Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the **LOM** tab, complete the following:
   
   - **User** **Accounts:** Click the Add icon and complete the following:
     
     - **Name:** Enter the name of the LOM user account.
     - **Password:** Enter the password for the LOM user account. The maximum length allowed for the password is 20 characters and the minimum length is 8 characters. The password cannot be the reverse of the user name. The password can comprise any of the following three combinations:
       
       - Uppercase  format
       - Lowercase format
       - Numbers
       - Special characters: !$%&()*+./&lt;=&gt;?@[\]^_`{|}~-,;#  
         Otherwise, an error message is displayed.
     - **Confirm** **Password**: Enter the password again.
     - **Role**: From the drop-down list, select the role for the LOM user account. **Operator** allows users to perform all supported LOM related functions. **User** allows admins to only monitor system sensors such as temperature and CPU usage.
   - **Disable**: Select this to deactivate the user account but keep a user profile.
   - Click **Add** to add the new user account.
3. Save the configuration.
