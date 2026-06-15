---
title: "Configuring Security Level Banner"
source: "/space/nios90/1340803015"
pageId: "1340803015"
---
You can publish a security banner that indicates the security level of the Infoblox Grid. It appears on the header and footer of all pages of Grid Manager. The security level can be Top Secret, Secret, Confidential, Restricted, and Unclassified. Each message type is associated with a predefined security level color. You can modify this color at any point of time. Grid Manager automatically uses an appropriate contrasting text font color that goes with the banner color. Only superusers can configure and enable this feature.  
To configure the advanced security level banner for a Grid:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and select **Grid** **Properties** -&gt; **Edit**.
3. In the *Grid* *Properties* editor, select the **Security** tab -&gt; **Advanced** tab.
4. Complete the following:
   
   - **Enable** **Security** **Banner:** Select this to enable the display of the security banner.
   - **Security** **Level:** From the drop-down list, select the security level for the banner.
   - **Security** **Level** **Color:** The default color is displayed in the drop-down. If necessary, using the drop-down list, select the required color for the security level banner. When you change the security level, Grid Manager resets default color for that level.
   - **Classification** **Message:** Enter the message you want to display in the security banner. You can enter up to 190 characters.
5. Save the configuration.

Security banner appears on the header and footer of the Grid Manager screen including the Login screen.
