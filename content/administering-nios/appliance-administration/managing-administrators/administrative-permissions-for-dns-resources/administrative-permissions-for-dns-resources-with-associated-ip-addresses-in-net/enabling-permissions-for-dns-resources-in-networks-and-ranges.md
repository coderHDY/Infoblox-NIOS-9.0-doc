---
title: "Enabling Permissions for DNS Resources in Networks and Ranges"
source: "/space/nios90/1483079846"
pageId: "1483079846"
---
To enable permission for DNS Resources in Networks and Ranges:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab.
2. Expand the Toolbar and select **Grid** **Properties** -> **Edit**.
3. In the *Grid* *Properties* editor, select the **General** tab -> **Advanced** tab, and then complete the following:** **
   
   - **Enable** **DNS** **Object** **Permissions** **in** **Networks** **and** **Ranges**: Select this checkbox to enable DNS object permissions in networks and ranges. When you enable this, admins with Read/Write permission for specific records in a zone or a higher-level DNS parent object, and admins with Read/Write permission for resource records in specified network containers, networks, or ranges can add, modify, and delete A, AAAA, PTR records, and DNS hosts that have associated IP addresses in the network containers, networks, or ranges.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
