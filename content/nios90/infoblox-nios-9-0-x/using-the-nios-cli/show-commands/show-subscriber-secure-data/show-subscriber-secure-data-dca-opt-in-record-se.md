---
title: "show subscriber_secure_data dca_opt_in_record_search"
source: "/space/nios90/687112230"
pageId: "687112230"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data dca_opt_in_record_search` command to check whether the specified subscriber is present in DNS Cache Acceleration.

# Syntax

`show subscriber_secure_data dca_opt_in_record_search &lt;ip_addr&gt; &lt;prefix&gt; &lt;local_id&gt; &lt;ip_space_desc&gt;`

| **Argument** | **Description** |
| --- | --- |
| `ip_addr` | Displays the subscriber client IP address. |
| `prefix` | Displays the prefix length. |
| `local_id` | Displays the local ID of the subscriber record. |
| `ip_space_desc` | Displays the IP space discriminator. |

# Examples

`Infoblox &gt; show subscriber_secure_data dca_opt_in_record_search 10.36.1.255 32 N/A N/A`  
`|  hash  |    IPv4     | IPv6 |   Local-Id   |bypass| querycount |  DCP |bwflag|Pxy-Al| Pri-Proxy|`  
`|------------------------------------------------------------------------------------------------|`  
`|003c2784| 10.36.1.255 |      |0x000000000000| false|      0     | false| true | true | 10.35.210.104|`  
`|------------------------------------------------------------------------------------------------|`  
`Subscriber Id:9956182386`  
`PCP          :0x00000000000000000000000000010040`  
`WPCP         :0x00000000000000000000000000020040`  
`WL_1         :vodka.com`  
`WL_2         :funpoker.com`  
`WL_3         :cardpairs.com`
