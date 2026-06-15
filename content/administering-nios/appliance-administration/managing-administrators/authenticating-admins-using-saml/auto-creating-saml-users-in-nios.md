---
title: "Auto Creating SAML Users in NIOS"
source: "/space/nios90/1446903870"
pageId: "1446903870"
---
After enabling SAML authentication, you can configure NIOS such that users who belong to a particular group in IdP are automatically created in NIOS. Once the users are automatically created in NIOS, if they log in to their IdP account, they can directly access Grid Manager.

1. Login as a super user.
2. Create a group by the same name as that of the group in the IdP account. For information about creating groups, see [*About Admin Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275587).
3. Click the **Administration **→ **Administrators** tab.
4. Select the group that you created and click the Edit icon. The out-of-the-box group for SAML authenticated users is **saml-group**.
5. Click the **SAML** tab.
6. Select **Auto Create User** for users in the IdP group to be automatically created in NIOS. When a new IdP user logs in to NIOS, that user is created in NIOS.
7. Select **Persist Auto Created User after logout** if you want to retain the SAML user accounts in NIOS even after the session times out. The session timeout value is specified in the **Session Timeout** field when you enabled SAML authentication. For more information, see [*Enabling SAML Authentication*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1446871151). If you do not select the **Persist Auto Created User after logout** checkbox, if the session times out, users for whom the **SAML Only** option was selected in the **Authentication Type** field, are deleted from NIOS. Not selecting the **Persist Auto Created User after logout **checkbox also deletes the user account along with all the scheduled tasks associated with the user account when the user logs out of NIOS. For information about the **Authentication Type** field, see [*Creating Local Admins*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011).
8. Click **Save & Close**.

> **warning**
>
> ### Note
> 
> If you select the **Persist Auto Created User after logout** checkbox and the session times out, you must manually verify whether the user account exists in IdP or not. If the user account is deleted from IdP, then you must manually delete the account in NIOS.



Authenticating SAML Users:

When you create administrators, you can authenticate them either as a SAML-only administrator or as a SAML/local administrator. Depending on the authentication type, administrators can log in using either the SSO Login button or the Login button. For more information see [*Creating Local Admins*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011).
