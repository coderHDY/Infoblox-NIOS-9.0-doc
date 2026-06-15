---
title: "Deleting IPv4 Networks"
source: "/space/nios90/1432715916"
pageId: "1432715916"
---
When you delete a network, all of its data, including all DHCP records, subnets, and records in its subnets, is deleted from the database. Due to the potentially large loss of data that can occur when you delete a network, the appliance stores the deleted network in the Recycle Bin. You can restore a deleted network from the Recycle Bin, if enabled. You can also disable a network instead of deleting it.

To delete a network, perform the following:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* checkbox, and then select **Delete** or **Schedule** **Delete** from the Delete drop-down menu.
2. To delete the network now, in the *Delete* *Confirmation* dialog box, click **Yes**. Grid Manager displays a warning message. Click **Yes **to continue or **No **to cancel the process. To schedule the deletion, see [*Scheduling Deletions*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-).

The appliance puts the deleted network in the Recycle Bin, if enabled. Click **Restore **in the Recycle Bin to recover the deleted data. Click **Yes **in the *Restore Item* dialog box to restore or **No **to cancel the process.

> **warning**
>
> ### Note
> 
> - Any Port reservation associated with the deleted network will also be deleted without user intervention.
> - Deleting and restoring an IPv4 network may take a longer time to complete depending on the size of the data.
> - You cannot delete a network that has a VLAN object assigned to it. For more information, see [*Assigning VLANs to a Network*](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/assigning-vlans-to-a-network).
