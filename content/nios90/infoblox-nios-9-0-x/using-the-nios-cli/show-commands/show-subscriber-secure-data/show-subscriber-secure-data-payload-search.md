---
title: "show subscriber_secure_data payload_search"
source: "/space/nios90/686588128"
pageId: "686588128"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data payload_search` command to display matching subscriber records by using regex in payload.

# Syntax

`show subscriber_secure_data payload_search &lt;regex&gt;`

| **Argument** | **Description** |
| --- | --- |
| `regex` | Displays the cached subscriber records with matching regular expressions in the payload. |

# Examples

`Infoblox &gt; show subscriber_secure_data payload_search 10.36.184.11`  
`10.36.184.11/32|LID:N/A|IPS:N/A|FLG:|ACS:Acct-Session-Id=9999732d-34590346;NAS:NAS-PORT=1813;PCP:Parental-Control-Policy=00000000000000000000000000020040;PXY:Proxy-All=1;PXP:PXY_PRI=0ac4065f;PXS:PXY_SEC=0AC4800D;SSP:Subscriber-Secure-Policy=ff;PCC:PC-Category-Policy=00000000000000000000000000000001;SUB:Calling-Station-Id=110361221;BWI:BWFlag=1;BL=facebook.com;WL=bbc.com;|Thu Jan  4 00:41:05 2024`  
  
`Infoblox &gt; show subscriber_secure_data payload_search 10.36.*`  
`10.36.184.11/32|LID:N/A|IPS:N/A|FLG:|ACS:Acct-Session-Id=9999732d-34590346;NAS:NAS-PORT=1813;PCP:Parental-Control-Policy=00000000000000000000000000020040;PXY:Proxy-All=1;PXP:PXY_PRI=0ac4065f;PXS:PXY_SEC=0AC4800D;SSP:Subscriber-Secure-Policy=ff;PCC:PC-Category-Policy=00000000000000000000000000000001;SUB:Calling-Station-Id=110361221;BWI:BWFlag=1;BL=facebook.com;WL=bbc.com;|Thu Jan  4 00:41:05 2024`
