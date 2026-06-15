---
title: "Deleting Networks"
source: "/space/nios90/1344965181"
pageId: "1344965181"
---
From the IPAM tab, you can delete multiple IPv4 and IPv6 networks. When you delete a network, all of its data, including all of its DHCP records, subnets, and records in its subnets, is deleted from the database and goes to the Recycle Bin, if enabled. Because of the potentially large loss of data that can occur when you delete a network, Grid Manager requires a confirmation to move the data to the Recycle Bin.

To delete IPv4 or IPv6 networks:

1. From the **Data** **Management** tab, select the **IPAM** tab -> *network* checkbox. You can select multiple checkboxes for multiple networks.
2. Select **Delete** or **Schedule** **Delete** from the Delete drop-down menu.
3. To delete the network now, in the *Delete* *Confirmation* dialog box, click **Yes**. To schedule a deletion, see [*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[*Extensible*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[*Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)  
   The appliance puts the deleted network in the Recycle Bin, if enabled.
