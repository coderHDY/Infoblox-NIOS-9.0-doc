---
title: "Deleting DNS Views"
source: "/space/nios90/1416561249"
pageId: "1416561249"
---
You can delete a DNS view if it is not the only view associated with a network view and if it is not selected for dynamic DNS updates. You cannot remove the system-defined default DNS view. When you remove a DNS view, the NIOS appliance removes the forward and reverse mappings of all the zones defined in the DNS view.

To delete a DNS view:

- From the **Data** **Management** tab, select the > **DNS** tab> **Zones** tab-> *dns_view* checkbox.  
  To delete the DNS view immediately, click the Delete icon, and then click **Yes** to confirm the delete request. Grid Manager displays a warning message. Click **Yes **to continue or **No **to cancel the process. To schedule the deletion, click **Schedule Deletion** and in the *Schedule* *Change *panel, enter a date, time, and time zone. For information, see [*Scheduling Deletions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883/Scheduling+New+IPAM+DHCP+Objects+and+Associated+Port+Configurations#bookmark145).  
  Grid Manager moves the view to the Recycle Bin, from which you can restore or permanently delete it. Click **Restore **in the Recycle Bin to recover the deleted data. Click **Yes** in the Restore Item dialog box to restore or **No** to cancel the process. Note that deleting and restoring a DNS view may take a longer time to complete depending on the size of the data.
