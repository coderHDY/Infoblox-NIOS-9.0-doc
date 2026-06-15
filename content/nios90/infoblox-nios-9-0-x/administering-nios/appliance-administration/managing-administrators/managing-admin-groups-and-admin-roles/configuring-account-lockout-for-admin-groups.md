---
title: "Configuring Account Lockout for Admin Groups"
source: "/space/nios90/1395589490"
pageId: "1395589490"
---
You can enable password security such that if a group user tries to log in to Grid Manager by using an incorrect password, NIOS locks the account for a configured time period after the configured number of failed login attempts. Only superusers can enable and configure this feature.

To configure account lockout for admin groups:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Groups** tab -&gt; *admin_group* checkbox, and then click the Edit icon.
2. In the *Admin Group *editor, select the **Security** tab -&gt; **Basic** tab.
3. NIOS automatically populates some field values based on account lockout configurations for the Grid. For more information, see [*Managing Security Operations*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations). Click the **Override** button to modify the following data:
   
   - **Enable Account Lockout:** Select the checkbox to enable account lockout for the group user. This option is disabled by default.
   - **Maximum number of attempts:** Enter the maximum number of invalid login attempts to Grid Manager after which NIOS locks the account. You can specify a value from **1** to **99. **The default value is **5**.
   - **Lockout duration:** Enter the time duration in minutes for which the account must be locked. You can specify a value from **1 **to **1440**. The default value is **5**.
   - **Never Unlock:** Select the checkbox to permanently lock a group user account, which is already locked. Only a superuser can clear the checkbox to unlock the account. This option is not applicable to superuser accounts because you cannot permanently lock a superuser account. This option is disabled by default.

> **warning**
>
> ### Note
> 
> NIOS displays an error on **Save & Close**, if the **Never Unlock** option is enabled for superusers.
