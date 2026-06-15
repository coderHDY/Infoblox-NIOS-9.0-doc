---
title: "show subscriber_secure_data search <regex>"
source: "/space/nios90/686260859"
pageId: "686260859"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data search &lt;regex&gt;` command to display the subscriber records with matching regular expression.

# Syntax

`show subscriber_secure_data search &lt;regex&gt;`

| **Argument** | **Description** |
| --- | --- |
| `regex` | Displays the matching regular expression with which the displayed records should be matched. |

# Examples

`Infoblox &gt; show subscriber_secure_data search 9889732d-34590e08`  
`10.36.111.1/32|IPS:10.35.120.10|ACS:Acct-Session-Id=9889732d-34590e08;AN0:User-Name=Helen child;NAS:NAS-IP-Address=10.35.120.10;IPS:NAS-IP-Address=10.35.120.10;SUB:MSISDN=9988182386;SSP:Subscriber-Secure-Policy=0000007f;PCP:Parental-Control-Policy=400000000000000000004000d3;|Sat Aug 26 22:57:15 2017`  
`10.36.139.1/32|IPS:10.35.120.10|ACS:Acct-Session-Id=9889732d-34590e08;AN0:User-Name=Assaf Adult;NAS:NAS-IP-Address=10.35.120.10;IPS:NAS-IP-Address=10.35.120.10;SUB:MSISDN=9966182386;SSP:Subscriber-Secure-Policy=0000061f;|Sat Aug 26 22:57:15 2017`  
`2620:10a:6000:2500::6f01/128|IPS:10.35.120.10|ACS:Acct-Session-Id=9889732d-34590e08;AN0:User-Name=Helen child;NAS:NAS-IP-Address=10.35.120.10;IPS:NAS-IP-Address=10.35.120.10;SUB:MSISDN=9988182386;SSP:Subscriber-Secure-Policy=0000007f;PCP:Parental-Control-Policy=400000000000000000004000d3;|Sat Aug 26 22:57:15 2017`  
`2620:10a:6000:2500::8b01/128|IPS:10.35.120.10|ACS:Acct-Session-Id=9889732d-34590e08;AN0:User-Name=Assaf Adult;NAS:NAS-IP-Address=10.35.120.10;IPS:NAS-IP-Address=10.35.120.10;SUB:MSISDN=9966182386;SSP:Subscriber-Secure-Policy=0000061f;|Sat Aug 26 22:57:15 2017`
