---
title: "Disabling Multiple Login Sessions"
source: "/space/nios90/1395884508"
pageId: "1395884508"
---
You can disallow multiple logins for the same NIOS session. That is, if one user in the group has logged on to a NIOS session, for example [https://255.255.255.0](https://255.255.255.0), no other users in the group can log on to the same IP address from another browser or from another system.

> **error**
>
> ### Warning
> 
> Disabling multiple login sessions is possible only for users with local or RADIUS accounts.

To do this:

1. Go to the **Administration** tab, **Administrators** tab -> **Groups** tab, and select the checkbox next to the group for which you want to disallow multiple logins and click the Edit icon.
2. Click the **Security **tab.
3. Click the **Override **button if you want the override the multiple login sessions setting that you [*specified for the Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257/Managing+Security+Operations#ConfiguringSecurityFeatures).
4. Select the **Disable Concurrent Login** checkbox to disallow a member of the group to log on to multiple sessions of the same NIOS system; that is to disallow multiple login sessions per user.   
   Note that Before you disable multiple logins for a group in a NIOS system, ensure that all existing sessions (if any) of members of that group in that NIOS system are logged out. If not, the existing sessions will continue to remain active even after you disable multiple logins.
5. Click **Save & Close**.
