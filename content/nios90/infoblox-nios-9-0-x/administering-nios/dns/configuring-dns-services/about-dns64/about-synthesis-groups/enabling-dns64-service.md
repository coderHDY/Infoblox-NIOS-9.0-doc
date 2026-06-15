---
title: "Enabling DNS64 Service"
source: "/space/nios90/1420230865"
pageId: "1420230865"
---
You can enable DNS64 at the Grid, member, and DNS view level. At least one DNS64 synthesis group must be configured before you can enable DNS64.  
To enable DNS64 and apply DNS64 synthesis groups:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**   
   **Member:** From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **DNS** **View**: From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *dns_view* checkbox -&gt; Edit icon.   
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the *Grid* and *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**, and then click **DNS64**. In the *View* *DNS* *Properties* editor, just click **DNS64**.
3. Do the following in the **DNS64** tab:
   
   - **Enable** **DNS64**: Select this checkbox.
   - **Synthesis** **Groups:** Click the Add icon and select a synthesis group.
4. Save the configuration and click **Restart** if it appears.
