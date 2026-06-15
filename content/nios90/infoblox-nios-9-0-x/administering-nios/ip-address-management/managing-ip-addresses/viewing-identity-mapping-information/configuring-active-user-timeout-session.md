---
title: "Configuring Active User Timeout Session"
source: "/space/nios90/1480950063"
pageId: "1480950063"
---
You can configure the amount of time that an active session of a user changes to timed out. When the idle session time is reached, the user status changes to inactive status. The default idle time is 2 hours. You can change it to minutes, hours, or days. The user status can be one of the following: **Active**, **Logged** **Out**, and **Timed** **Out**.  
To configure active user timeout interval:

1. From the **Infoblox Grid** tab -&gt; **Grid ** **Manager** tab, expand the Toolbar and click **Grid** ** Properties** -&gt; **Edit**.
2. Select **Microsoft ** **Integration** tab in the *Grid * *Properties* * Editor* and complete the following in the **Basic** tab:
   
   - **Assumed** **Network** **Users** **Time** **Out:** Specify the time period after which the user status changes to **Timed** **Out**. Select the time period in minutes, hours, or days from the drop-down list.
3. Save the configuration.
