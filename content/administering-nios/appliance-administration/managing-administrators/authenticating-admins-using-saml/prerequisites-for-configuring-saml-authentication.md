---
title: "Prerequisites for Configuring SAML Authentication"
source: "/space/nios90/1446281560"
pageId: "1446281560"
---
Ensure that you meet the following prerequisites before you configure SAML for NIOS:

- When adding the NIOS application in IdP,  specify the Grid Manager URL in the https://&lt;Grid Manager IP address&gt;:8765/?acs format. This is referred to as the Assertion Consumer Service URL or ACS URL. If you are using the Audience URI/ SP entity ID, the URL is https://&lt;Grid Master FQDN&gt;:8765/metadata   
  The 8765 port is opened for SAML services.
- After you add NIOS to the IdP, either copy the metadata or the metadata URL or specify it in the SAML configuration screen.
- Port 443: Used for all HTTPS connections, including both GUI and API (WAPI), and enabled by default after installing or configuring SAML.
- Port 8765: Dedicated to SAML services and enabled only when SAML is configured.
- Port 80: Used for HTTP connections; when the HTTP-to-HTTPS redirection option in Grid Properties is enabled, Port 80 opens, allowing users to access NIOS over HTTP and automatically redirect to HTTPS.
- Ensure that the group that you specify in the IdP also exists in NIOS with the same users as that in the IdP. If you did not specify a group attribute in IdP, SAML authenticated users are added to the default SAML group: **saml-group**.
- SAML authentication in NIOS requires configuring an Identity Provider (IdP) for authentication. Infoblox-verified named IdPs are listed in the **IDP Type** drop-down list. The **IDP Type** drop-down list also contains the **Others** option for users who wish to configure an IdP that is not listed.  Due to the lack of compliance to SAML standards and widely varying IdP vendor implementations, Infoblox is unable to provide configuration support if you select the **Others** option. Infoblox recommends that you contact the IdP vendor for support if you use this option.
- If you have configured SAML with the IdP group attribute value set to “http”, you may experience SAML group mapping issues after upgrading to NIOS version 9.0.5. This is due to the HSTS header change, wherein NIOS redirects HTTP traffic to HTTPS. To resolve such issues, you must reconfigure the SAML settings and update the IdP group attribute value accordingly.
