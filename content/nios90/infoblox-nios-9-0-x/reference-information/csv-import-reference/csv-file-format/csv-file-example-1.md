---
title: "CSV File Example 1"
source: "/space/nios90/280402299"
pageId: "280402299"
---
|  | **A** | **B** | **C** | **D** | **E** |
| --- | --- | --- | --- | --- | --- |
| **1** | **HEADER-NETWORK** | **ADDRESS*** | **NETMASK*** | **EA-Gateway** | **EA-Secondary** **Address** |
| **2** | **HEADER-HostRecord** | **configure_for_dns*** | **FQDN*** | **ADDRESSES** |  |
| **3** | NETWORK | 10.251.133.128 | 255.255.255.192 | 10.251.133.129 |  |
| **4** | NETWORK | 10.176.80.255 | 255.255.252.0 | 10.176.80.1 | 172.16.213.0 |
| **5** | HostRecord | TRUE | host1.dhcp.corp100.com | 172.20.2.21 |  |
| **6** | HostRecord | TRUE | host2.dhcp.corp100.com | 172.20.2.22 |  |

In the above example the field name HEADER-NETWORK identifies the first row as a header row for the Network objects. The field names ADDRESS, NETMASK, EA-Gateway, and EA-Secondary Address (in rows B1 to E1) tell NIOS how to interpret a row of network data in the CSV file. Each row of data that begins with "Network" in column A is identified as a network data row. Therefore, NIOS interprets rows 3 and 4 as network data rows, in which column B contains the network addresses, column C contains the network masks, and columns D and E contain extensible attribute values for gateway and secondary address.  
Similarly, the field name HEADER-HostRecord identifies the second row as a header row for the Host Record objects. This header declaration tells NIOS that for each subsequent row of data that begins with "HostRecord" in column A, column C contains the FQDN of the host, and column D contains the host address. Therefore, NIOS interprets rows 5 and 6 as host record data rows that contain the FQDNs of the hosts in column C and the host addresses in column D.  
Alternatively, you can organize the information in the table above so that the data rows immediately follow the header rows, as shown in [*CSV File Example 2*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/csv-file-format/csv-file-example-2).
