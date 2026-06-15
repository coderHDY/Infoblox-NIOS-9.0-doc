---
title: "About BFD (Bidirectional Forwarding Detection)"
source: "/space/nios90/280663966"
pageId: "280663966"
---
NIOS supports Anycast addressing for DNS using BGP and OSPF routing protocols. Since BGP and OSPF have timer granularity in seconds, the network re-convergence is slow in case of faults in forwarding path. BFD protocol is designed to provide faster failure detection using millisecond timer intervals. It can be enabled with routing protocols to achieve fast network re-convergence.

You can use BFD to detect failures early on and create adjacency with the next router. BFD can be enabled for OSPF or BGP and you can create BFD templates and assign it to OSPF Area or BGP neighbors. You can enable BFD simultaneously for OSPF and BGP, but only one BFD session will be created for a given neighbor. Infoblox recommends that you use the same BFD template for both the OSPF and BGP neighbors whenever such a configuration is required. When BFD is enabled on an anycast daemon, any failure on the DNS service also restarts the anycast daemon. When the anycast restart behavior is 'off', the BFD restarts only when there is a configuration change.

When the BFD protocol gets enabled, it by default also starts an internal DNS monitor to check whether the DNS service is up and running. The BFD DNS monitor works by sending a DNS query for the root zone “.” to the configured anycast addresses. If the internal DNS monitor does not receive a DNS response, the DNS service is assumed to be down. The internal DNS monitor then sends the BFD down message and retracts the anycast route.

The BFD protocol feature is supported in NIOS 8.0 and later releases. This section provides a brief overview about enabling BFD for OSPF area and BGP neighbors, creating BFD templates, SNMP, and CLI commands.

> **error**
>
> ### Warning
> 
> *The default advertised* *setting* *for* *BFD* *holddown* *is* *300* *ms* *(100* *ms* *transit/receive* *intervals* *and* *detection* *multiplier* *3).* *This* *setting* *is* *optimized* *for* *typical* *routers* *and* *directly* *connected* *endpoint* *configurations.* *If* *your* *network* *requires* *an* *implementation* *of* *L2 multi-path* *or* *port* *redundancy,* *you* *must* *adjust* *the* *holddown* *interval* *value* *higher* *than* *the* *spanning-tree* *rebalance* *latency*   
> *to* *avoid* *unnecessary* *changes* *to* *the* *L3* *network* *topology* *or* *the* *forwarding* *path* *for* *DNS* *traffic.*



> **warning**
>
> ### Note
> 
> You can enable or disable the **BFD Internal DNS Monitoring** checkbox only if you select the **Enable BFD** checkbox. When you enable the **BFD Internal DNS Monitoring** checkbox, also ensure to select the **Enable DNS Health Check** checkbox in the *Grid Properties Editor* or the *Member Properties Editor*. The **BFD Internal DNS Monitoring** checkbox is enabled by default.
