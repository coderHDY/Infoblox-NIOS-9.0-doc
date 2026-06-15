---
title: "show zrq_zoneid"
source: "/space/nios90/1580335159"
pageId: "1580335159"
---
The `show zrq_zoneid` CLI command displays the ZRQ zone ID.

# Syntax

`Maintenance Mode &gt; show zrq_zoneid`

# Example

```
Maintenance Mode > show zrq_zoneid  
ZRQ Zone ID (DB)    Zone ID Maximum Utilization              
7                   4294967295      Less than 50% utilized
zrq zone ID in OneDB is incremented each time a new zone is created for a ZRQ transaction.
This ID is never reset.
```
