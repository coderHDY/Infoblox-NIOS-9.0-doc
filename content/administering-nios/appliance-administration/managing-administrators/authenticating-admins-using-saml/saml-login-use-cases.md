---
title: "SAML Login Use Cases"
source: "/space/nios90/1446871119"
pageId: "1446871119"
---
The following is a list of use cases and the outcomes experienced by NIOS users when attempting to log in using SAML authentication and when not using SAML authentication:

- If SAML is enabled and users have already logged in to the IdP account and the corresponding user account is present in NIOS, users can directly start using Grid Manager without logging in to NIOS.
- If a user has logged in to the IdP account and the corresponding IdP account is not present in NIOS, if the **Auto Create User** checkbox is selected, the user can directly start using Grid Manager without logging in to NIOS. For information about the **Auto Create User** checkbox, see [*Auto Creating SAML Users in NIOS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1446903870).
- If a NIOS user who is not SAML-authorized tries to log in to NIOS using the **SSO Login** button, the login fails. However, the user can log in using the **Login** button.
