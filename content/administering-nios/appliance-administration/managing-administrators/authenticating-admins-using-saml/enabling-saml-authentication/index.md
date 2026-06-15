---
title: "Enabling SAML Authentication"
source: "/space/nios90/1446871151"
pageId: "1446871151"
---
To enable SAML authentication for NIOS users, perform the following steps:

1. Login as a super user.
2. Click the **SAML Authentication Services** tab.
3. From the Toolbar, click **Add **-> **SAML Service**.
4. In the *Add SAML Authentication Service* wizard:
   
   - **Name**: Enter a name for the authentication service.
   - **IDP Type**: Select the IdP type that you want to configure for the authentication service. NIOS supports the following IdP types: Azure SSO, Okta, Ping Identity, Shibboleth SSO, Others.
   - **SSO Metadata URL**: Enter the metadata URL of the IdP. Alternatively, copy the metadata into a file and upload the file. For information on obtaining the metadata, see [*Obtaining Metadata*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1446281608).
   - **SSO Redirect IP Address/FQDN**: Enter the IP address or the FQDN of Grid Master. If you enter a value other than the IP address or FQDN, the SAML service will not work. A best practice is to enter the FQDN because it is used by the IdP for the SAML response.
   - **Session Timeout**: Enter the amount of time that a SAML user can be idle after which the session must terminate. The time that you specify here supersedes the session timeout time specified in the **Grid Properties** - > **Security** - > **Session Timeout(s)** field. For more information about session timeout in the Grid, see [*Managing Security Operations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257).
   - **IDP Group Attribute**: Enter a group attribute name. The group attribute name that you enter must have the same value as the **Group Attribute** in your IdP configuration. If the value in NIOS is different from what is configured in the IdP, or if the value is missing, the incoming SAML user is placed in the default SAML group **saml-group**.  If the value matches, the IdP’s group attribute filter passes the user’s group membership to NIOS. If there is a NIOS group that exactly matches a group name from the list of groups from the IdP, and the NIOS group is configured for SAML, the user get placed into that NIOS group. If there is no matching NIOS group, the user gets placed in the default SAML group **saml-group**.
   - **Comment**: Enter additional comments if any.
5. Click **Save & Close**.

Now, if you log out and try to relogin, the **SSO Login** button is displayed.

When SAML authorized users try to login for the first time by clicking the **SSO Login** button, they are directed to their IdP login page. If the user credentials they specified exist in the IdP, they are redirected to the NIOS home page.

> **warning**
>
> ### Note
> 
> - SAML configuration is supported only through the GUI. Configuring SAML via WAPI may not function as expected.
> - If there are any IdP or metadata changes following a Grid Master Candidate promotion, it is necessary to delete the configuration and re-configure.
> - After HA failover, ensure that you reload the Grid Manager after 3 to 5 seconds, to view the SSO login button.
> - At any given point of time NIOS supports a single active SAML configuration with any IdP Type. To set up a new configuration and enable the SSO login option, the existing configuration must be deleted.
