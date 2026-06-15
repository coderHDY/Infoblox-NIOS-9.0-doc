---
title: "Monitoring DNS Client Queries"
source: "/space/nios90/1457422477"
pageId: "1457422477"
---
You can view the presence of clients in the network that are sending large numbers of queries to DNS zones or DNS domains. To monitor the top clients querying DNS zones, perform the following:

1. From the **Administration** tab, select the **Reporting** tab -&gt; expand the Toolbar and click **Grid** **Reporting** **Properties**.  
   Or  
   From the** Infoblox Grid** tab, select the **Grid** **Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab and click Edit -&gt; **Grid** **Reporting** **Properties** from the Toolbar.
2. In the *Grid* *Reporting* *Properties* editor, select the **Basic** tab -&gt; **DNS**.
3. Under **DNS Top Clients Per Domain**, select the **Monitor Queries made to the following zones** checkbox. Only authoritative zones are supported, to a limit of 1000 zones for monitoring purposes.
   
   1. To select zones one at a time, choose individual checkboxes. Click the Add icon and select **Add** **Domain** or **Bulk** **Add** **Domains** to add new zone information for excluding.
   2. To specify the number of clients to be listed, choose the **Top** **N** **Limit** value. The default value is 10.
