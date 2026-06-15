---
title: "Deploying Network Insight in VRF Network Type 2: All VRFs Reachable from a Shared Services VRF"
source: "/space/nios90/1343293236"
pageId: "1343293236"
---
This example illustrates the use of a shared service VRF between the distribution routers in the network and how Network Insight integrates into such a topology.  
All virtual networks are reachable through a shared VRF, to which Network Insight may connect using a single virtual discovery interface and reach all other VRFs from the one to which it is connected. Each Router in this topology also shares routes between the VRFs.

You configure the following for this example:

- **Network** **View**: Use one network view for the shared VRF.
- **Discovery** **Interface**: Create a virtual discovery interface on the network view. Use a single virtual discovery interface in Network Insight, and connect through the facing switch to the shared VRF using the tagged 802.1q value. There is a 1:1 ratio between network views and discovery interfaces.
- **Discovery** **Ranges**: Define IP discovery ranges in the single network view for all VRFs.
- All discovered VRFs must be associated with this network view.

If you want your device end hosts and downstream devices information separated, then use network views for each virtual network. This is helpful for viewing and reporting but it is not required. In this example, only a single network view is applied.
