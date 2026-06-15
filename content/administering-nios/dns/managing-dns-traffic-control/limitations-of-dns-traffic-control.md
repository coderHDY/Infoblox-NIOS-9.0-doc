---
title: "Limitations of DNS Traffic Control"
source: "/space/nios90/280664255"
pageId: "280664255"
---
- A member will return DNS Traffic Control results for a zone only if the member is a Grid primary, or a Grid secondary that is using database replication. DNS Traffic Control results are not produced for zones using AXFR, regardless of whether or not the primary member is in the Grid.
- The DNS Traffic Control querying process is not supported for recursive queries.
- The DNS Traffic Control does not support the Global application of an LBDN pattern against all queries. The appliance returns a result only if the query resolves to an authoritative zone to which an DNS Traffic Control LBDN is explicitly linked.
- You can use the **IDN** **converter** for conversion, but the appliance supports manually encoded puny code as an LBDN pattern.
- DNS Traffic Control health monitoring does not monitor servers if the server has IPv4 and/or IPv6 addresses and the health monitoring interface on the Grid member does not have the corresponding IP address type. The appliance sets the status as unknown for such IPv4 and IPv6 addresses. In addition, the appliance may return a timeout error while loading the Traffic Control tab in Grid Manager if you have configured health monitoring for a lot of DTC servers.
