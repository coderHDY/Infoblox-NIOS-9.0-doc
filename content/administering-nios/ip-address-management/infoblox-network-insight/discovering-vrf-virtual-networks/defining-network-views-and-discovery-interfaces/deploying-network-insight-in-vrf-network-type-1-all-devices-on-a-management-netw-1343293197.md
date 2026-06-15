---
title: "Deploying Network Insight in VRF Network Type 1: All Devices on a Management Network (Part 2)"
source: "/space/nios90/1343293197"
pageId: "1343293197"
---
The following figure shows the same topology for Network Type 1, but using multiple discovery interfaces and multiple network views.  
In this example, the switch must be configured with the trunk port 'facing' Network Insight to forward Network Insight's tagged 802.1q traffic to the appropriate destination networks (VLAN 5, VLAN 10, VLAN 20 and VLAN 30 in this example).  
The encapsulated sub-interfaces are defined using the correct values on each port; the virtual discovery interfaces on Network Insight match these values.

*[drawio]*

**Network** **Insight**   
You configure the following for this example:

- **Network** **Views**: Create a network view for each network (Management, Red, Yellow, Green).
- **Discovery** **Interfaces**: Create virtual discovery interfaces for each VRF network.
- **Discovery** **Ranges**: Define IP discovery ranges for each VRF network.
- The discovered VRF instances must be associated with the network views to which they belong. For more information, see [*Viewing Discovered VRFs and Mapping Network Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1340540837).
