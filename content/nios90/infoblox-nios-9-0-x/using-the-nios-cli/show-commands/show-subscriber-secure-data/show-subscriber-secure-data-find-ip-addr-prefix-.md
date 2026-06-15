---
title: "show subscriber_secure_data find <ip_addr> <prefix> <local_id> <ip_space_desc>"
source: "/space/nios90/686751926"
pageId: "686751926"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data find &lt;ip_addr&gt; &lt;prefix&gt; &lt;local_id&gt; &lt;ip_space_desc&gt;` command to display the subscriber entries with a subscriber client IP address that matches with the specified IP address.

# Syntax

`show subscriber_secure_data find &lt;ip_addr&gt; &lt;prefix&gt; &lt;local_id&gt; &lt;ip_space_desc&gt;`

| **Argument** | **Description** |
| --- | --- |
| `ip_addr` | Displays the subscriber client IP address. |
| `prefix` | Displays the prefix length. |
| `local_id` | Displays the local ID. |
| `ip_space_desc` | Displays the IP space discriminator. |

# Examples

`Infoblox &gt; show subscriber_secure_data find 10.36.0.151 32 N/A N/A`

`10.36.0.151/32|LID:N/A|IPS:N/A|FLG:|ACS:Acct-Session-Id=9999732d-34590e08;NAS:NAS-PORT=1813;EXP:Expire-Profile=Fri Dec 29 09\\:08\\:43 2017;PXY:Proxy-All=0;UCP:Unknown-Category-Policy=0;DCP:Dynamic-Category-Policy=0;SSP:Subscriber-Secure-Policy=ffffffff;PCP:Parental-Control-Policy=ffffffffffffffffffffffffffffffff;PXP:PXY_PRI=04040404;PXS:PXY_SEC=04040404;SUB:Calling-Station-Id=9956182386;IPA:IP6=2620:10a:6000:2500::c901;|Mon Dec 24 07:57:07 2018`
