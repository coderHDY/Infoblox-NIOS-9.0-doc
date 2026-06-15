---
title: "Reporting (Index) Storage Space"
source: "/space/nios90/1457094775"
pageId: "1457094775"
---
One key configuration aspect of the reporting appliance is index space. By default, some percentage of index space is allocated on the reporting server for each report category listed in [*Report Categories, Related Data Sources, and Update Frequencies*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)* table*. For information about how to configure index space, see Configuring Grid Reporting Properties above. Each report category uses up to a certain percentage of the usable reporting hard disk space for index storage. For example, of the total 237 GB usable hard disk space of an IB-VM-800 appliance, the reporting category, **Device** uses 47.47%. For the list of default index space configured for each report category, see Default Index Space Configured for Each Report Category* *table. You can modify the index percentage value between 0 and 100. When you modify this value, make sure that the total percentage for the index storage space for all categories equals exactly 100%. You can set the index percentage to a value of less than 100% to reserve a certain percentage for future use. If the total percentage of the index space usage exceeds 100%, the appliance displays an error message. Note that the reporting appliance removes the oldest data when you reduce the index space percentage for a category to a value that is lower than the used percentage by the existing data. For information about the maximum index size and number of days the reporting data is retained, see [*Reporting Indexes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400960/About+Reports#bookmark3036)* *table. Also, ensure that its host name has only alphanumeric characters, underscores, dots, and dashes.

> **warning**
>
> ### Note
> 
> For usable reporting hard disk space for each appliance model, see [*Infoblox Reporting Appliances and their Usable Reporting Hard Disk Space*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401176)* *table.



*Default* *Index* *Space* *Configured* *for* *Each* *Report* *Category*

| **Report** **Category** | **Default** **Index** **Space** **(%)** **Adjustable** **by** **User** | **Total** **Reporting** **Disk** **Space** **Used** **for** **Index** **Storage** **(GB)** |
| --- | --- | --- |
| Audit Log | 0% | - |
| DNS Query    DNS Performance DDNS    DNS Record Scavenging | 20% | Usable reporting hard disk space x 20% |
| DNS Query Capture | 0% | - |
| DHCP Performance | 20% | Usable reporting hard disk space x 20% |
| DHCP Fingerprint DHCP Lease History | 39% | Usable reporting hard disk space x 39% |
| DDI Utilization | 5% | Usable reporting hard disk space x 5% |
| Security Network User | 1% | Usable reporting hard disk space x 1% |
| DNS Traffic Control | 0% | Usable reporting hard disk space is broken down between ib_dtc and ib_dtc_summary internally. |
| Cloud | 0% | - |
| System Utilization | 15% | Usable reporting hard disk space x 15% |
|  |  | - |
| Device | 0% | - |
| Ecosystem Subscription Ecosystem Publication | 0% | - |
| License | 0% | - |
