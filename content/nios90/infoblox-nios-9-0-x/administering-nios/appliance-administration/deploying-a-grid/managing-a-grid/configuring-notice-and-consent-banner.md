---
title: "Configuring Notice and Consent Banner"
source: "/space/nios90/1340737383"
pageId: "1340737383"
---
You can configure and publish a notice and consent banner as the first login screen that includes specific terms and conditions you want end users to accept before they log in to the Infoblox Grid. When an end user tries to access Grid Manager, this banner is displayed as the first screen. The user must accept the terms and conditions displayed on the consent screen before accessing the login screen of Grid Manager. Only superusers can configure and enable this feature.  
To configure the notice and consent banner:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab.
2. Expand the **Toolbar** and select **Grid** **Properties** -&gt; **Edit**.
3. In the *Grid* *Properties* editor, select the **Security** tab -&gt; **Advanced** tab, and then complete the following:
   
   - **Enable** **Notice** **and** **Consent** **Banner**: Select the checkbox to enable the display of the notice and consent banner. In the text field, enter the message that you want to be included in the banner. The message cannot exceed 10,000 characters.
4. Save the configuration.

This banner appears as the first screen when users access Grid Manager. Users must read the terms and conditions and then click **Accept** on the consent screen before they can access the login screen of Grid Manager.
