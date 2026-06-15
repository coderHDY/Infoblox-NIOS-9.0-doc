---
title: "ibZonePlusViewStatisticsTable"
source: "/space/nios90/1430094861"
pageId: "1430094861"
---
ibZonePlusViewStatisticsTable provides DNS statistics about all zones in user-defined DNS views. DNS statistics about zones in the default view are captured in ibZoneStatisticsTable. Note that information in ibZonePlusViewStatisticsTable is rolled up to the "summary" zone in ibZoneStatisticsTable.  
The syntax of the objects in ibZonePlusViewStatisticsTable uses a Counter64 format. In some cases, the counter format may not be compatible with SNMP toolkits that use a 32-bit counter. Ensure that you reconfigure or update these tools to use the Counter64 format. ibZonePlusViewStatisticsTable contains the following objects:



*ibZonePlusViewStatistics Table*

| Object (Type) | Description |
| --- | --- |
| ibBindZonePlusViewName (IbString) | The zone name. |
| ibBindZonePlusViewSuccess (Counter64) | The number of successful responses since the DNS process started. |
| ibBindZonePlusViewReferral (Counter64) | The number of DNS referrals since the DNS process started. |
| ibBindZonePlusViewNxRRset (Counter64) | The number of DNS queries received for non-existent records. |
| ibBindZonePlusViewNxDomain (Counter64) | The number of DNS queries received for non-existent domains. |
| ibBindZonePlusViewRecursion (Counter64) | The number of queries that caused recursion since the DNS process started. |
| ibBindZonePlusViewFailure (Counter64) | The number of failed queries since the DNS process started. |
| ibBindViewName (IbString) | The DNS view name. |
