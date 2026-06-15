---
title: "show subscriber_secure_data cache_usage_stats"
source: "/space/nios90/317425099"
pageId: "317425099"
---
If you have configured Infoblox Subscriber Services, the `show subscriber_secure_data cache_usage_stats` command displays the statistics for subscriber static, provisioned, and non-provisioned devices based on the flag you used in subscriber data.

Non-provisioned devices display the count of all the devices you set without a K flag, provisioned devices display the count of all devices you set with a K flag, and static devices display the count of all the devices you set with an S flag.

## Syntax

`Infoblox &gt; show subscriber_secure_data cache_usage_stats`

This command has no arguments.

## Example

```
Infoblox > show subscriber_secure_data
10.120.20.94/32|LID:N/A|IPS:N/A|FLG:BK|ACS:Acct-Session-Id=9999732d-34590e08;NAS:NAS-PORT=1813;BWI:BWFlag=1;PXP:PXY_PRI=0a23d268;PXS:PXY_SEC=0a23d268;SUB:User-Name=user0;BL=casino.com,rummy.com,gamble.com,google.com,facebook.com,bbc.com,test1.com,test2.com,test3.com,test4.com,test5.com,test6.com,test7.com,test8.com,test9.com;WL=funpoker.com,cardpairs.com,google.com,cnn.com,bbc.com,test1.com,test2.com,test3.com,test4.com,test5.com,test6.com,test7.com,test8.com,test15.com,test16.cpm;|Tue Apr 18 07:05:41 2023
10.120.20.93/32|LID:N/A|IPS:N/A|FLG:S|ACS:Acct-Session-Id=28de847acde415ab;NAS:NAS-PORT=1813;SUB:Calling-Station-Id=1101202028;PXY:Proxy-All=1;PCP:Parental-Control-Policy=00000000000000000000000000020040;PXP:PXY_PRI=0ac4800d;PXS:PXY_SEC=0ac4800d;|Thu Apr 20 06:57:22 2023
10.120.20.95/32|LID:N/A|IPS:N/A|FLG:|ACS:Acct-Session-Id=9999732d-34590e08;NAS:NAS-PORT=1813;PXP:PXY_PRI=0a23d268;PXS:PXY_SEC=0a23d268;SUB:User-Name=acm;|Thu Apr 20 06:58:05 2023

Infoblox > show subscriber_secure_data cache_usage_stats
Getting cache usage details may take some time.
Static devices          : 1
Provisioned devices     : 1
Non-provisioned devices : 2
```
