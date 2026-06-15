---
title: "Local RPZ Examples"
source: "/space/nios90/1406140498"
pageId: "1406140498"
---
`Following is an example of an IP related rule. For example, execute the following command:`  
`dig @10.35.104.19 abc.net`

If the above command returns `18.58.20.1`, then define an IPv4 substitute rule `18.0.0.0/8, Substitute (IPv4) 8.8.8.89.`

Execute the command `dig @10.35.104.19 abc.net` again. You will receive the substituted address instead of the actual domain name.

Following is an example of values in CEF for the above substitution example:

`2012-11-06T19:04:02+00:00 daemon (none) named[25193]: info `

`CEF:0|Infoblox|NIOS|6.6.0-185622|RPZ-IP|records|4|app=DNS dst=10.35.104.19 `

`src=10.32.0.242 spt=50035 view=_default qtype=A msg="rpz IP records rewrite abc.net [A] `

`via 8.0.0.0.18.rpz-ip.localrpz"`

Following is an example of values in the CEF for Block (No Data) rules:

`2012-11-06T19:00:01+00:00 daemon (none) named[25193]: info `

`CEF:0|Infoblox|NIOS|6.6.0-185622|RPZ-QNAME|NODATA|4|app=DNS dst=10.35.104.19 `

`src=10.32.0.242 spt=50035 view=_default qtype=A msg="rpz QNAME NODATA rewrite nodata.net [A] `

`via nodata.net.localrpz"`

You can view the NIOS version, name of the view, source, and destination.
