---
title: "HA failover on DNS Nameservers"
source: "/space/nios90/1432819429"
pageId: "1432819429"
---
When an HA failover occurs on NIOS, there is an approximate 4-5 second time interval in which the network is adjusted for the new active node and the new passive node. During this failover period, the active node becomes unresponsive. After the new active node comes up on the network,  the DNS service loads all Response Policy Zone (RPZ) files if RPZ is configured. The larger the RPZ files, the longer it takes to load them, and the longer it takes the DNS service to start serving DNS. For example, on a TE-1425 with RPZs that contain 15 million resource records, it can take approximately one and a half minutes to start serving DNS.

If your nameserver uses Grid replication to keep internal zones up to date and is not configured to use RPZ, then the delay before the DNS service starts serving DNS is slightly longer that it is for the HA failover itself.
