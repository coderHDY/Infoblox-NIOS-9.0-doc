---
title: "Defining Blackout Periods"
source: "/space/nios90/280406071"
pageId: "280406071"
---
> **warning**
>
> ### Note
> 
> You can separately define blackout periods for discovery, and for port configuration. This section describes how to use the blackout feature for discovery. For more information on blackouts for port configuration tasks, consult the section [*Defining Port Configuration Blackout Periods*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/defining-port-configuration-blackout-periods).

Discovery protocols can occupy significant resources within the network when discovery is taking place. While you can schedule any discovery or port control task for any single time period or recurring time period, you can also establish time periods when Network Insight does not talk to devices or networks for discovery.  
You can define blackout settings at two levels in Grid Manager:

- Under Grid Discovery Properties, applying across the entire Grid;
  
  - All networks managed by the Grid inherit discovery blackout settings by default;
- For individual networks under IPAM and under DHCP.
  
  - A network must be Managed before you can edit its discovery blackout settings.
  - Under IPAM, you can define discovery blackout settings for Network Containers and for networks (for DHCP, you can also set blackouts for DHCP Ranges);
  - If a network is in Managed state, it can be edited under IPAM or under DHCP for discovery settings and discovery blackout settings.

Discovery tasks may already be running when a blackout period takes effect. Current tasks are not interrupted and will complete within their time. Network Insight does not activate new discovery tasks during the blackout period, however.
