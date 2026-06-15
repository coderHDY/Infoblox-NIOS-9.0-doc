---
title: "Consolidator and Probes"
source: "/space/nios90/280273455"
pageId: "280273455"
---
When you first join a discovery member to the Grid, the first discovery member that joins the Grid automatically becomes the Consolidator and all other discovery members become Probes. If you have only one discovery member in the Grid, it becomes the Consolidator-Probe standalone discovery appliance.

# Consolidator

The central repository of discovery data for the entire managed network. The Consolidator is a single appliance that contains data about all devices detected through discovery. The Consolidator communicates with the Grid Master as a normal Grid Member and transfers all its data to the Grid Master, as indicated in the figure [*Network Insight Appliances Added as Grid members*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/network-insight-architecture). The Consolidator compiles information from one or more associated Probe appliances. The Consolidator appliance requires the Discovery license. If you have one or more Probe appliances or virtual appliances, the Consolidator performs no discovery on its own. If you plan to use a single dedicated appliance for discovery, that appliance must be licensed for discovery and be configured as a Consolidator. Note that the Grid Master cannot be licensed as a Consolidator.

# Probes

A Probe is a Network Insight appliance or virtual appliance that performs the direct querying, probing and polling of network devices and the initial data collection. Probe appliances also require the Discovery license.  
Infoblox recommends using one or more Probe appliances with the Consolidator. Each Probe can override the Grid level discovery credentials with its own discovery credentials.  
Data synchronization occurs continuously between the Consolidator and all associated Probe appliances and between the Consolidator and the Grid Master.

> **warning**
>
> ### Note
> 
> You assign each Probe appliance to a single network view, and multiple Probe appliances can share the same network view. You can change network view assignments for Probe appliances at any time. On ND-1405, ND-2205, ND-4005, ND-V1405, and ND-V2205 Network Insight appliances, you can assign multiple VLAN interfaces on the same Probe to different network views.

# Consolidator Probe Appliance

You may also choose to operate a Consolidator-Probe appliance as a single discovery system. In this deployment, the appliance operates as both a Consolidator and a Probe, performs all discovery operations, aggregates all databases within it, and synchronizes with the Grid Master.

Standalone discovery appliances cannot be installed in a network that already has existing Probes and a Consolidator. For more information, see [*Defining the Discovery Member Type*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/defining-the-discovery-member-type) and [*Mapping Discovery Interfaces to Network Views*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/mapping-discovery-interfaces-to-network-views).

# Deployment Guidelines for Consolidator and Probes

When you wish to install and deploy discovery appliances, use the following installation guidelines:

- **Installing** **a** **Standalone** **in** **the** **Grid**–Before you designate an appliance as a standalone discovery appliance, no previously installed Probes should be present on the network and joined to the Grid. If you install a new appliance intended as a standalone, in a network that already has one or more Probe instances (perhaps for testing or evaluation purposes), before discovery service is stopped on the Probe instances, the new "standalone" appliance automatically detects the Probe instances and start as a Consolidator appliance, preventing it from acting to probe and detect devices as a standalone appliance. Consolidators cannot be assigned to network views or to discovery in network objects such as IPv4 or IPv6 network containers.
- **Converting** **a** **Consolidator** **to** **a** **Standalone**–Also consider the example of a Consolidator appliance operating with one or more instances running as Probes, each with respective Discovery licenses. If you wish to convert the Consolidator to a standalone discovery appliance, stop the discovery service on all associated probes. Then, stop and restart the discovery service on the Consolidator appliance. The appliance is selectable for discovery of network objects, acting as a standalone discovery appliance.
- **Adding** **new** **Probe** **Instances** **to** **a** **Standalone** **deployment**–Finally, consider the use of a standalone discovery appliance to which you wish to associate a new Probe instance or instances. This process converts a standalone to a Consolidator. After the new Probe instances join the Grid, stop the discovery service on the standalone discovery appliance. Then, start the discovery service on the new Probe or Probes. Next, restart the discovery service on the previously defined standalone appliance. It detects the newly active Probe instances and activate as a Consolidator.
- In all cases, you must maintain proper Discovery licensing.
