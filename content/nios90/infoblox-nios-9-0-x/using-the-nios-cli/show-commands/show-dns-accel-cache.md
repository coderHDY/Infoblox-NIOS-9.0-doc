---
title: "show dns-accel-cache"
source: "/space/nios90/280658561"
pageId: "280658561"
---
The` ``show`` ``dns-accel-cache` command enables you to view the cache for DNS Cache Acceleration. It fetches and displays new acceleration cache data. This command is available for virtual DNS Cache Acceleration enabled systems.

> **error**
>
> **Warning**
> 
> This operation may take approximately 15 seconds to complete. During this period, there may be a slight impact on the DNS query performance for the member. WRED operations may also be impacted when you run the command.

# Syntax

`show dns-accel-cache [expand]`

| **Argument** | **Description** |
| --- | --- |
| `expand` | Displays the expanded DNS type 64 / DNS type 65 records stored in the virtual DNS Cache Acceleration cache. |

# Example

The examples below display the compressed and expanded versions of the `show dns-accel-cache` CLI command.

> **warning**
>
> **Note**
> 
> - The `show dns-accel-cache` CLI command is restricted to 255 bytes in size and compressed for DNS type 64 and DNS type 65 records.
> - The `show dns-accel-cache expand` CLI command is only applicable to DNS type 64/DNS type 65 records and displays the detailed cached information for DNS type 64 and DNS type 65 records.

### **Displaying the DNS type 65 records without the Expand Option**

Infoblox &gt;` ``show`` ``dns-accel-cache`

`This operation should take about 15 seconds to complete. During this period, there may be a slight impact on the DNS query performance for this member. WRED feature also will be hit with this command.`

`Are you sure you want to proceed with this operation (y/n): y`

`Cache data obtained at 2023-09-20-11:25:17`  
`Note: In case of multiple RR's, they will be printed on their own line after the first one, aligned with commas to match correct column.`  
`Number,Query question,Query type,Query class,AAAA Filtered,Recursion,View,Original TTL,Remaining TTL,Usage count,Last accessed,RR section,Type of RR,RR name,RR TTL,RR data,MX preference,RCode,Debug&lt;1&gt;,Debug&lt;2&gt;,PCP word`  
`1,`[cdn1.t651220.test65.com](http://cdn1.t651220.test65.com)`,TYPE65,IN,NO,1,1,28800,23328,0,431802,AA,TYPE65,`[cdn1.t651220.test65.com](http://cdn1.t651220.test65.com)`,28800,mandatory=port\044ipv4hint\044ipv6hint,1,0,901500,23328`  
`,"h3,h2",,657,10.10.20.30,10.45.35.60,10.78.45.89,10.65.20.30,10.[291],AEX+DQBB9AAgACAD/T7HxkyHrhpL2OXjXlRlyinGhisDE9YqO5uTQyB8XQAEAAEAA[96],2001:db8:3333:4444:5555:6666:7777:8888,2001:db8[683],`  
`,,,,,,,,,,,AU,NOTSUP-2,`[t651220.test65.com](http://t651220.test65.com)`,28800,infoblox.localdomain,1,0,901500,23328`  
`,,,,,,,,,,,AD,A,infoblox.localdomain,28800,10.35.136.6,1,0,901500,23328`  
`,,,,,,,,,,,AD,EDNS0,.,0,.,1,0,901500,23328`



`Infoblox &gt;`

### **Displaying the DNS type 65 records with the Expand Option**

`Infoblox &gt; ``show dns-accel-cache expand`

`This operation should take about 15 seconds to complete. During this period, there may be a slight impact on the DNS query performance for this member. WRED feature also will be hit with this command.`

`Are you sure you want to proceed with this operation (y/n): y`

`Cache data obtained at 2023-09-20-11:25:12`  
`Note: In case of multiple RR's, they will be printed on their own line after the first one, aligned with commas to match correct column.`  
`Number,Query question,Query type,Query class,AAAA Filtered,Recursion,View,Original TTL,Remaining TTL,Usage count,Last accessed,RR section,Type of RR,RR name,RR TTL,RR data,MX preference,RCode,Debug&lt;1&gt;,Debug&lt;2&gt;,PCP word`  
`1,cdn1.t651220.test65.com,TYPE65,IN,NO,1,1,28800,23333,0,431796,AA,TYPE65,cdn1.t651220.test65.com,28800,mandatory=port\044ipv4hint\044ipv6hint,1,0,901500,23333`  
`,"h3,h2",,657,10.10.20.30,10.45.35.60,10.78.45.89,10.65.20.30,10.50.43.23,10.54.23.78,10.48.90.33,10.90.46.89,1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4,5.5.5.5,6.6.6.6,7.7.7.7,9.9.9.9,10.10.10.10,11.11.11.11,12.12.12.12,13.13.13.13,14.14.14.14,15.15.15.15,16.16.16.16,17.17.17.17,18.18.18.18,19.19.19.19,20.20.20.20,AEX+DQBB9AAgACAD/T7HxkyHrhpL2OXjXlRlyinGhisDE9YqO5uTQyB8XQAEAAEAAQASY2xvdWRmbGFyZS1lY2guY29tAAA=,2001:db8:3333:4444:5555:6666:7777:8888,2001:db8:3333:4444:cccc:dddd:eeee:ffff,2001:db8::,2001:db8::1234:5678,2001:db8:1::ab9:c0a8:102,2001:db8:3333:4444:5555:6666:102:304,2001:db8::1,2001:db8::53:1,2001:db8:122:344::c000:221,2001:db8:122:344::c000:222,2001:db8:122:344::c000:223,2001:db8:122:344::c000:224,2001:db8:122:344::c000:225,2001:db8:122:344::c000:226,2001:db8:122:344::c000:227,2001:db8:122:344::c000:228,2001:db8:122:344::c000:229,2001:db8:122:344::c000:22a,2001:db8:122:344::c000:22b,2001:db8:122:344::c000:22c,2001:db8:122:344::c000:22d,2001:db8:122:344::c000:22e,2001:db8:122:344::c000:22f,2001:db8:122:344::c000:230,2001:db8:122:344::c000:231,2001:db8:122:344::c000:232,`  
`,,,,,,,,,,,AU,NOTSUP-2,t651220.test65.com,28800,infoblox.localdomain,1,0,901500,23333`  
`,,,,,,,,,,,AD,A,infoblox.localdomain,28800,10.35.136.6,1,0,901500,23333`  
`,,,,,,,,,,,AD,EDNS0,.,0,.,1,0,901500,23333`



`Infoblox &gt;`
