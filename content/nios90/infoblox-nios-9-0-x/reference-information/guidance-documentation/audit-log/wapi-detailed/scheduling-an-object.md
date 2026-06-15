---
title: "Scheduling an Object"
source: "/space/nios90/1480950423"
pageId: "1480950423"
---
For a schedule object, PUT/POST/DELETE calls and WAPI session log information, such as URI, InData, and response time, are added only in the first line.

**Example of Schedule object:** curl -k1 -u admin:infoblox -X POST [https://10.35.120.1/wapi/v2.9/network](https://10.35.120.1/wapi/v2.9/network) -d network=3.3.8.0/24 -d _schedinfo.scheduled_time=1540386870

**Message**: 2018-10-24 11:22:01.998Z [admin]: Sched:3 Created(POST) v2.9/network {'_schedinfo.scheduled_time': '1540380251', 'network': '3.3.8.0/24'} 1.7615 Network 3.3.8.0/24 network_view=default: Set address="3.3.8.0",cidr=24

**Message**: 2018-10-24 11:22:01.998Z [admin]: Sched:3 Created ScheduledTask 3: Set scheduled_time=2018-10-24 11:24:11.000Z,submit_time=2018-10-24 11:22:01.983Z,submitter="admin",type="SCHEDULED
