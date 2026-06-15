---
title: "ibZoneStatisticsTable"
source: "/space/nios90/1430193192"
pageId: "1430193192"
---
ibZoneStatisticsTable contains DNS statistics of all zones in the default DNS view. DNS statistics of user-defined DNS views are captured in ibZonePlusViewStatisticsTable.  
ibZoneStatisticsTable includes a "summary" zone that provides global statistics for the DNS server, including statistics for all zones in the default and user-defined DNS views.   
The syntax of the objects in ibZoneStatisticsTable uses a Counter64 format. In some cases, the counter format may not be compatible with SNMP toolkits that use a 32-bit counter. Ensure that you reconfigure or update these tools to use the Counter64 format. ibZoneStatisticsTable contains the following objects:



*ibZoneStatisticsTable*

| Object (Type) | Description |
| --- | --- |
| ibBindZoneName (IbString) | DNS zone name. The index name for global statistics is “summary.” |
| ibBindZoneSuccess (Counter64) | The number of successful responses since the DNS process started. |
| ibBindZoneReferral (Counter64) | The number of DNS referrals since the DNS process started. |
| ibBindZoneNxRRset (Counter64) | The number of DNS queries received for non-existent records. |
| ibBindZoneNxDomain (Counter64) | The number of DNS queries received for non-existent domains. |
| ibBindZoneRecursion (Counter64) | The number recursive queries received since the DNS process started. |
| ibBindZoneFailure (Counter64) | The number of failed queries since the DNS process started. |



Following is an example of the table as viewed through a MIB browser:

*MIBBrowserView*
