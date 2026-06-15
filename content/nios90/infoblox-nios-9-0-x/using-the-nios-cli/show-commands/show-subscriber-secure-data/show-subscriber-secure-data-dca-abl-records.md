---
title: "show subscriber_secure_data dca_abl_records"
source: "/space/nios90/686817364"
pageId: "686817364"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data dca_abl_records` command to display the ABL subscriber records in DNS Cache Acceleration.

## Syntax

`show subscriber_secure_data dca_abl_records`

This command has no arguments.

## Example

`Infoblox &gt; show subscriber_secure_data dca_abl_records`  
`|   hash   |    IPv4     | IPv6 |   Local-Id   |bypass| querycount |  DCP  |bwflag|Pxy-Al| Pri-Proxy|`  
`| 003c2784 | 10.36.1.255 |      |0x000000000000|false |      0     | false | true |true  | 10.35.210.104|`
