---
title: "Disabling Inactive Users"
source: "/space/nios90/1395655072"
pageId: "1395655072"
---
You can disable a group of users who have not logged in to NIOS for a specified duration of time.

> **error**
>
> ### Warning
> 
> Disabling inactive users is possible only for local users.

To do this:

1. Go to the **Administration** tab, **Administrators** tab -> **Groups** tab, and select the checkbox next to the group for which you want to disable users.
2. Click the **Security **tab.
3. Click the **Override **button if you want to override the disable setting that you [*specified for the Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257/Managing+Security+Operations#ConfiguringSecurityFeatures).
4. Select the **Disable Inactive Users** checkbox.
5. In the** Disable account if user has not logged in for &lt;time period&gt; days** field, specify the time period (in days) after which users who have not logged in must be disabled. The range of days is from 2 to 9999. You can also specify a reminder to be sent in the **Remind &lt;days&gt; prior to expiration** field. The range of days is from 1 to 30. The number of days you specify in this field is the time from which users start getting daily email reminders that their account will be disabled. NIOS sends the email reminder only if an email address has been configured for the user.
6. Select the** Allow user to reactivate account via serial console** and **Allow user to reactivate account via remote console** checkboxes if you want users to activate their account after it has been disabled. To reactivate using the serial console, see [*Deploying a Single Independent Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274626). To reactivate using the remote console, type `ssh &lt;user name&gt;@&lt;ip address&gt;`.  
   Note that reactivating the account using the serial console or the remote console is possible only for superusers.
7. Click **Save & Close**.
