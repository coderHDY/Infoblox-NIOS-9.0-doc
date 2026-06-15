---
title: "CSV File Example 2"
source: "/space/nios90/280759761"
pageId: "280759761"
---
|  | **A** | **B** | **C** | **D** | **E** |
| --- | --- | --- | --- | --- | --- |
| **1** | **HEADER-NETWORK** | **ADDRESS*** | **NETMASK*** | **EA-Gateway** | **EA-Secondary** **Address** |
| **2** | NETWORK | 10.251.133.128 | 255.255.255.192 | 10.251.133.129 |  |
| **3** | NETWORK | 10.176.80.255 | 255.255.252.0 | 10.176.80.1 | 172.16.213.0 |
| **4** | **HEADER-HostRecord** | **configure_for_dns*** | **FQDN*** | **ADDRESSES** |  |
| **5** | HostRecord | TRUE | host1.dhcp.corp100.com | 172.20.2.21 |  |
| **6** | HostRecord | TRUE | host2.dhcp.corp100.com | 172.20.2.22 |  |

You can also specify multiple header declarations for the same object type, as shown in [*CSV File Example 3*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/csv-file-format/csv-file-example-3). In this example, you specify the field names (in row 1) and data (in rows 2 and 3) to modify the extensible attributes  
(EA-Gateway and EA-Secondary Address) of two network addresses. You then specify the field names (in row 4) and data (in rows 5 and 6) to add new extensible attributes (EA-Gateway and EA-Host Range) of two other network addresses.
