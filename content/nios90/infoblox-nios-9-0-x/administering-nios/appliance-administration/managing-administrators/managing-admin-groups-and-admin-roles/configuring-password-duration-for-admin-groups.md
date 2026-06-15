---
title: "Configuring Password Duration for Admin Groups"
source: "/space/nios90/1395655148"
pageId: "1395655148"
---
You can set a time duration for the password for each admin group such that the password is valid only for that duration. After the specified duration expires, the password for the users of the group expires.

> **error**
>
> ### Warning
> 
> The password expiry settings are applicable only to users with a local account.

To set the time duration for a password for each admin group:

1. Go to the **Administration** tab, **Administrators** tab -&gt; **Groups** tab, and select the checkbox next to the group for which you want to set the password time duration, and then click the Edit icon.
2. Click the **Password** tab.
3. Click the **Override** button if you want the time duration that specify here to override the time duration you set when [*specifying admin passwords using Grid Properties Editor*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins).  
   Note that the options in the screen are enabled only if you click the **Override** button. If you do not click **Override**, the time duration you set when [*specifying admin passwords using Grid Properties Editor*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins) applies.
4. Select the **Password must expire** checkbox.
5. In the **Password must expire every _ days** field, enter the number of days for which the password must be valid. For example, if you enter 11, the password is valid for 11 days.
6. In the **Reminder _ days prior to expiration** field, enter the number of days before the expiry that NIOS sends a reminder. The range of days is from 1 to 30. The number that you enter here must always be lower than the number you enter in the **Password must expire every _ days** field.
7. Click **Save & Close**.

> **warning**
>
> ### Note
> 
> - If you click the Override button and do not select the Password must expire checkbox, it means that the password for the admin group will never expire.
> - The time duration that you set here does not apply to the saml_group and splunk-reporting groups.
