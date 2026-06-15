---
title: "Deploying Network Insight in VRF Network Type 2: All VRFs Reachable from a Shared Services VRF (Part 2)"
source: "/space/nios90/1343293269"
pageId: "1343293269"
---
In this version of the VRF Network Type 2 deployment, you use multiple network views and multiple discovery interfaces in a 1:1 ratio, with the same requirements for trunking and switch VLAN sub interfaces.

You configure the following for this example:

- **Network** **Views**: Create a network view for each network (e.g., Management, Red, Yellow, Green).
- **Discovery** **Interfaces**: Create virtual discovery interfaces for each VRF network.
- **Discovery** **Ranges**: Define IP discovery ranges in Network Insight for each VRF network.
- The discovered VRF instances must be associated with the network views to which they belong. For more information, see [*Viewing Discovered VRFs and Mapping Network Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1340540837).
