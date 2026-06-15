---
title: "CSV File Example 3"
source: "/space/nios90/280661867"
pageId: "280661867"
---
|  | **A** | **B** | **C** | **D** | **E** |
| --- | --- | --- | --- | --- | --- |
| **1** | **HEADER-NETWORK** | **ADDRESS*** | **NETMASK*** | **EA-Gateway** | **EA-Secondary** **Address** |
| **2** | NETWORK | 10.251.133.128 | 255.255.255.192 | 10.251.133.129 |  |
| **3** | NETWORK | 10.176.80.255 | 255.255.252.0 | 10.176.80.1 | 172.16.213.0 |
| **4** | **HEADER-NETWORK** | **ADDRESS*** | **NETMASK*** | **EA-Gateway** | **EA-Host** **Range** |
| **5** | NETWORK | 10.176.90.0 | 255.255.255.128 | 10.176.90.1 | 10.176.90.4-126 |
| **6** | NETWORK | 10.176.90.128 | 255.255.255.128 | 10.176.90.129 | 10.176.90.132-254 |

The examples in this section are illustrated using tables that resemble spreadsheet layouts. However, all other examples in this appendix use the comma separated value text file format. For example, the following is the CSV file notation equivalent of [*CSV File Example 2*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/csv-file-format/csv-file-example-2).  
`HEADER-NETWORK,ADDRESS*,NETMASK*,EA-Gateway,EA-Secondary Address NETWORK,10.251.133.128,255.255.255.192,10.251.133.129 NETWORK,10.176.80.255,255.255.252.0,10.176.80.1,172.16.213.0 HEADER-HostRecord,FQDN*,ADDRESSES`  
` HostRecord,host1.dhcp.corp100.com,172.20.2.21 HostRecord,host2.dhcp.corp100.com,172.20.2.22`

# IDN Support for CSV Import

The appliance supports IDNs (Internationalized Domain Names) and punycode for most of the DNS object types in a CSV file. An IDN is a domain name that contains a language-specific script or alphabet, such as Arabic, Chinese, Russian, Devanagari, or the Latin alphabet-based characters with diacritics, such as French. IDNs are encoded in multi-byte Unicode and are decoded into ASCII strings using a standardized mechanism known as Punycode transcription. For example, DNS Zone 'инфоблокс.рф' (IDN in Russian) can be written as  
'xn-90anhdigczv.xn-p1ai' in the punycode representation. For information about IDNs, refer to the Infoblox NIOS Administrator Guide.   
You can use either IDNs or punycode to create DNS zones. Even if you use punycode to create a zone, the appliance automatically generates the corresponding IDN and displays the zone name in its native characters. Note that the appliance does not perform any conversion (IDN to punycode and vice versa) for DNS records, but preserves the data in the original characters. In other words, if a DNS object or a field name contains IDN, the appliance imports the data in IDN. If a DNS object or a field name is in punycode, the appliance imports the data in punycode. For more information about supported objects for CSV import, see [*Supported Object Types*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types).
