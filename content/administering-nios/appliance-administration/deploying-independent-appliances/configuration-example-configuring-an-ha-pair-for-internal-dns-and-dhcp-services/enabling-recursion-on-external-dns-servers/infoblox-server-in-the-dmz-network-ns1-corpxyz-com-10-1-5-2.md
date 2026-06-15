---
title: "Infoblox Server in the DMZ Network (ns1.corpxyz.com, 10.1.5.2)"
source: "/space/nios90/1344078031"
pageId: "1344078031"
---
1. On the **Data** **Management** tab, select the **DNS** tab, and then click **System** **DNS** **Properties** from the Toolbar.
2. In the *System* *DNS* *Properties* editor, select the **Allow Recursion** checkbox on the **Queries** tab, and then click the Add icon -> **IPv4** **Address**. Grid Manager adds a row to the **Allow** **recursive** **queries** **from** table. Complete the following:
   
   - **Permission**: Select **Allow** from the drop-down list.
   - **Name**: Enter **10.1.1.52**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
