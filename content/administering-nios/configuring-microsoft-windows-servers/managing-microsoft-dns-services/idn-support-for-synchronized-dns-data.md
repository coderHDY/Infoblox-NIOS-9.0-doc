---
title: "IDN Support for Synchronized DNS Data"
source: "/space/nios90/280270564"
pageId: "280270564"
---
Infoblox Grid supports IDNs for synchronized DNS data between the appliance and Microsoft servers. For more information about IDNs, see *[Managing Internationalized Domain Names](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661204)*.  
The appliance stores IDNs in punycode and Microsoft server stores IDNs in \xyz format. Due to this difference at the DNS protocol level, IDNs are not allowed in a zone name when you configure NIOS (primary or secondary) and Microsoft (primary or secondary) servers. For information, see IDN Support Limitations for Synchronized Data below. If synchronized data between NIOS and Microsoft servers contain IDNs, the IDNs are preserved on the primary server. When a Microsoft server is the secondary server for a zone, MMC (Microsoft Management Console) displays the zone content that contains IDNs in punycode only. Make sure that you use a zone name that complies with the DNS protocol when manually configuring an authoritative zone.  
A Microsoft server serves a resource record that contains an IDN in \xyz format when it is configured as the primary server and NIOS as the secondary server. For example, use the \xyz\xyz\xyz.com representation on NIOS for 网络 .com, a zone added on the Microsoft server.  
You can add resource records that contain IDNs for the following configurations:

- NIOS is the primary server and Microsoft server is the secondary server: You can add records in IDNs or punycode. The appliance preserves IDNs and does not encode punycode to IDNs. Note that you cannot add a resource record that contains an IDN on the Microsoft server when it is configured as the secondary server.
- Microsoft server is the primary server and NIOS is the secondary server: You can add records on both NIOS and Microsoft servers. You can use IDNs or punycode. You can add IDN records on both servers in this scenario.

The following table summarizes how the servers display resource records that contain IDNs after synchronization:

| **Primary**** ****Server** | **Input** | **Secondary**** ****Server** | **Input** | **NIOS**** ****displays**** ****records**** ****in...** | **Microsoft**** ****server**** ****displays**** ****records**** ****in...** |
| --- | --- | --- | --- | --- | --- |
| NIOS | Punycode | Microsoft | NA | Punycode | Punycode |
| NIOS | IDN | Microsoft | NA | IDN | Punycode |
| Microsoft | Punycode | NIOS | Punycode | Punycode | Punycode |
| Microsoft | IDN | NIOS | IDN | IDN | IDN |

# IDN Support Limitations for Synchronized Data

You cannot configure an authoritative zone and stub zone that contains IDNs for the following configurations:

- When NIOS is the primary server and Microsoft server is the secondary server.
- When Microsoft server is the primary server and NIOS is the secondary server.
