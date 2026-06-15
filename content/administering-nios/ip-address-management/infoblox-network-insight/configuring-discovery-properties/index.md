---
title: "Configuring Discovery Properties"
source: "/space/nios90/280406248"
pageId: "280406248"
---
To ensure a successful discovery, complete the following configurations for the Grid and Grid members that are acting as the Consolidator and Probes before you start a discovery:

- Define polling methods and schedule.
- Define advanced polling settings for TCP scanning and Ping sweeps. Also, specify routers and logging options.
- To collect data from SDN and SD-WAN devices, add and configure them as described in [*Configuring Discovery for SDN and SD-WAN*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/317424877).
- If you use SNMP or CLI collection as the polling methods, define device credentials for data collection. [.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248#ConfiguringDiscoveryProperties-bookmark1414)
- Assign credentials to device groups.
- Enable and schedule blackout periods for discovery and port configuration. For more information, see [*Defining Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071)*.*
- Configure automatic network view mapping for unassigned VRFs that have been discovered. For more information, see [*Configuring Automatic VRF Mapping*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273363).
- Configure settings to monitor the lifecycle and vulnerabilities of discovered devices. For more information, see [Configuring Advisor Properties](#CAP) below.

The following sections describe in detail how to configure discovery for the Grid, Grid members, and networks.

> **warning**
>
> ### Note
> 
> You must be a superuser to configure discovery properties for the Grid.

In this section:

*[children]*
