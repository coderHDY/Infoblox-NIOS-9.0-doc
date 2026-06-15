---
title: "Managing OSPF"
source: "/space/nios90/1468629655"
pageId: "1468629655"
---
- OSPF advertises the route when the DNS service starts. The start DNS command creates an interface and starts the OSPF daemon.
- OSPF stops advertising the route when the DNS service stops. The stop DNS command stops the OSPF daemon and deletes the interface.
- The NIOS application does not support a route flap. For example, temporary DNS downtime such as restart, does not stop or re-instate the OSPF advertisement.
- The OSPF advertisement stops if DNS service is down for more than 40 seconds.
