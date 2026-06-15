---
title: "Disabling Scavenging for Individual Records"
source: "/space/nios90/1393560371"
pageId: "1393560371"
---
You can disable scavenging for individual records, even if they are marked as reclaimable. In this case, the record is never reclaimed unless you enable the scavenging for it again.

To disable scavenging for a record, complete the following:

1. In the *DNS Resource Records* viewer, select the appropriate record.
2. Click **Edit**.
3. In the record properties dialog, click **DNS** **Scavenging**.
4. Select the **Disable** **scavenging** **for** **this** **record** checkbox.
5. Click **Save** **&** **Close**.  
   Additionally, you can see the following information in the resource record scavenging properties:

- Record creation time
- Record last queried time
- Whether the record is reclaimable

1. For records synced from MS servers, the creation timestamp is not synced. This implies the following limitations:
   
   - When a zone is converted from MS to NIOS, the timestamp is initialized to the time when the operation occurs.
   - When a zone is converted from NIOS to MS, the timestamp is reset.
