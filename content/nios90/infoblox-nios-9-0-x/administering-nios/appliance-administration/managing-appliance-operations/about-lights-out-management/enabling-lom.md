---
title: "Enabling LOM"
source: "/space/nios90/1395589342"
pageId: "1395589342"
---
Before you can add LOM users and manage Infoblox appliances remotely, you must enable LOM. When LOM is configured for the entire Grid, all members inherit the Grid settings. You can also override the Grid settings for specific members. For an HA pair, you can configure LOM on the node that supports IPMI.  
To enable and disable LOM:

1. **Grid:** From the** Infoblox** **Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.  
   **Independent** **appliance**: From the **System** tab, select the **System** **Manager** tab, expand the Toolbar and click **System** **Properties** -&gt; **Edit**.  
   **Member:** From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the **LOM** tab, complete the following:
   
   - **Enable** **Lights** **Out** **Management:** LOM is disabled by default. Select this checkbox to enable LOM. When LOM is enabled or disabled for the Grid, all members inherit the same setting.
3. Save the configuration.
