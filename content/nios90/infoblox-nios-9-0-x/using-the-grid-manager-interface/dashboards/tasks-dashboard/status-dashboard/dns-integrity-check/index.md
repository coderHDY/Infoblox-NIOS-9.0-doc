---
title: "DNS Integrity Check"
source: "/space/nios90/1457095543"
pageId: "1457095543"
---
The DNSIntegrityCheck widget displays status about DNS data discrepancies that have been detected through DNS integrity check that is designed to mitigate DNS domain hijacking. This widget displays top-level or parent authoritative zones that have been selected for DNS data monitoring. For information about how to configure DNS integrity check to mitigate possible DNS domain hijacking, see [*Configuring DNS Integrity Check for Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-dns-integrity-check-for-authoritativ).  
The widget displays the following information (note that this table is sorted by **Status**.):

- Left click the Action icon next to a zone to perform the following:
  
  - **View** **Syslog**: Select this to open the *Syslog* *Preview* dialog and view data discrepancy events for the selected zone.
  - **Check Now**: Select this to perform DNS integrity check to immediately query current DNS data from the top-level parent domain. When you select this, verbose logging for DNS integrity check is automatically enabled. After the operation is complete, the appliance updates the timestamp for the **Last Checked** column.
- **Zone**: Displays the name of the top-level authoritative zones that is being monitored for DNS integrity check. You can click the zone name and the appliance opens the zone viewer for the selected zone.
- **Status**: Displays the current DNS data discrepancy status. The status can be one of the following:
  
  - **Critical** (red): Data in the NS RRsets for the authoritative and delegate zones are completely out of synchronization.
  - **Severe** (orange): Some data in the NS RRset between the authoritative and delegate zones overlaps and some data is different.
  - **Warning** (yellow): The NS RRset for the authoritative zone is a subset of the NS RRset for the delegate zone. It is possible that incorrect IP addresses have been entered at the registrar.
  - **Informational** (blue): The NS RRset for the delegate zone is a subset of the NS RRset for the authoritative zone. This could indicate a possible delay in domain registration.
  - **Normal** (green): There are no DNS data discrepancies between the NS RRsets for the authoritative and delegated zones.
  - **None** (black): No DNS discrepancies data has been collected or DNS integrity check has not been performed.
- **Last Checked**: The timestamp in YYYY-MM-DD HH:MM:SS when the parent domain was last queried for its DNS data.
- **Description**: Information about the zone.
