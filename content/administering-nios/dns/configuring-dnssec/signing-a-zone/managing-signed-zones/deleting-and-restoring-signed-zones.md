---
title: "Deleting and Restoring Signed Zones"
source: "/space/nios90/1454997594"
pageId: "1454997594"
---
When you delete a signed zone, the Grid Master unsigns the zone before moving it to the Recycle Bin. Unsigning the zone effectively deletes all auto-generated DNSSEC RRs; only user-defined DS records are retained and moved to the Recycle Bin as well. The Grid Master also retains the ZSK and KSK in its database, until you permanently delete the zone from the Recycle Bin.  
When you restore a signed zone, the Grid Master restores it and re-signs its data sets with the original keys, which are also restored. You can also restore the user-defined DS records. The rollover period of the ZSK and KSK starts when the zone is signed after it is restored. Note that when you restore a zone that contains rolled keys, either KSK or ZSK, the appliance removes all these rolled keys.  
Note that when you restore a deleted zone from recycle bin on the NIOS server, which is created and signed on the Microsoft Server 2012, then all the DNSSEC records will be deleted, except for the DNSKEY records. The DNSKEY records will only be resynchronized. The DNSSEC records are read-only and cannot be regenerated using NIOS. You must recreate the zone manually on the Microsoft Server. When you recreate the zone on the Microsoft Server, new keys will be generated. The signed zone, which is restored, and the DNSSEC keys are synced to Microsoft Server. This zone will be seen as an unsigned zone on the Microsoft Server, as NIOS does not trigger the signing zone request for the corresponding zone. For such zones, the 'DNSSEC' label is not displayed and the value for 'Signed' column is 'No'.  
To delete a signed zone:

1. From the **Data Management** tab, select the **DNS** tab -> **Zones** tab.
2. Click the checkbox of the zone you want to delete.
3. Click the Delete icon.
4. Click **Yes** to confirm the deletion.

To restore a signed zone:

1. In the *Finder* panel, expand **Recycle Bin**.
2. Select the zone you want to restore.
3. Click the Restore icon.
