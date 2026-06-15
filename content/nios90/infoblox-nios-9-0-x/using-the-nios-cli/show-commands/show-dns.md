---
title: "show dns"
source: "/space/nios90/280887932"
pageId: "280887932"
---
The` ``show`` ``dns` command displays DNS query statistics for all DNS views. It also displays the recursive cache for the specified DNS views. This command displays IDN data in punycode.

# Syntax

`show dns {stats | cache [wait_time ntime][dns_``view``...]}`

| **Argument** | **Description** |
| --- | --- |
| `stats`` ` | Displays DNS query statistics for all DNS views. You can also use this command to display DNS query statistics for all the DNS views of DNS cache acceleration on IB-FLEX. |
| `ntime`` ` | The maximum time (from 1 to 600 seconds) to wait for the cache file to be ready. |
| `cache ``dns_view`` ` | Specifies the DNS views for which you want to display the recursive cache. |

# Example

`Infoblox &gt; ``show`` ``dns`` ``stats`  
` success 10`  
` referral 0`  
` nxrrset 0`  
` nxdomain 0`  
` recursion 0`  
` failure 10`
