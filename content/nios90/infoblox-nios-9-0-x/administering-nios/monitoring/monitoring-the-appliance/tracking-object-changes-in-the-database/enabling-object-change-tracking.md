---
title: "Enabling Object Change Tracking"
source: "/space/nios90/1471251815"
pageId: "1471251815"
---
To enable object change tracking:

1. **Grid**: From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab, and then click **Grid** **Properties** -&gt; **Edit** from the Toolbar.  
   **Standalone appliance**: From the **System** tab → **System Manager** tab, expand the Toolbar and click **System Properties** -&gt; **Edit**.
2. In the *Grid* *Properties* editor, click **Object** **Change** **Tracking** and complete the following:
   
   - **Enable** **Object** **Change** **Tracking**: Select this checkbox to enable object change tracking for the objects.
   - **Status**: Indicates whether object change tracking is enabled or not. You can view what percentage of the operation is complete.
     
     Note his operation might take a longer time to complete when you have a large database. For example, 1 million objects on an IB-4015 appliance takes approximately 1 hour. Infoblox rectommends that you enable this feature during off-peak hours.
   - **Maximum** **number** **of** **deleted** **objects** **that** **will** **be** **tracked**: Specify the total number of deleted objects that must be present in the database. The minimum value is 2,000 and the maximum value is 20,000. The default value is 4,000.
3. Save the configuration.
