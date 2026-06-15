---
title: "show subscriber_secure_data find <subscriber_id>"
source: "/space/nios90/687079525"
pageId: "687079525"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data find &lt;subscriber_id&gt;` command to display the subscriber record whose subscriber ID matches with the specified subscriber ID.

# Syntax

`show subscriber_secure_data find &lt;subscriber_id&gt;`

| **Argument** | **Description** |
| --- | --- |
| `subscriber_id` | Displays the subscriber client ID (MSISDN). |

# Examples

`Infoblox &gt; show subscriber_secure_data find 8089991000`  
`collector service provided info about subscriber (SUB:MSISDN=8089991000)`  
`2620:10a:6000:2500::6b02/128|IPS:10.36.120.10|ACS:Acct-Session-Id=9979732d-34590e08;AN0:User-Name=Cheap NoPC;NAS:NAS-IP-Address=10.26.120.10;IPS:NAS-IP-Address=10.26.120.10;SUB:MSISDN=8089991000;|Sat Aug 26 12:55:37 2017`
