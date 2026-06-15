---
title: "Generating Tokens for Grid Members"
source: "/space/nios90/1367048862"
pageId: "1367048862"
---
Before you can allocate licenses to a pre-provisioned member, you must request a one-time token from the Grid Master. This token allows the member to register and authenticate itself to the Grid Master before a specified date and time (the default is 60 minutes from the time you generate the token). When the token is not used after the expiration date and time, it becomes invalid and you must generate another token for the member. You can configure the token usage timeout so the appliance can send syslog messages to alert you about the unused token. For information about how to set the token usage timeout value, see [*Configuring Token Usage Timeout*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1366983438).  
Using a one-time token eliminates the need for the Grid Master credentials to be exposed to other Grid members and the CMP (Cloud Management Platform) in the case of cloud implementation. Note that only superusers can generate and view the token for a pre-provisioned Grid member.

To generate a token through Grid Manager, complete the following steps:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab.
2. Click the Action icon  next to the pre-provisioned vNIOS member and select **Generate** **Token** from the list.
3. In the *Your* *Permission* *Token* dialog box, the appliance displays the token and the **Expiration** **Date** of the token. Use this token to join the pre-provisioned member to the Grid.  
   Note that you must generate a new token for the member if the token is not used before the expiration date.
