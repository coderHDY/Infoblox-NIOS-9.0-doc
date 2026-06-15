---
title: "VRF Deployment Guidelines"
source: "/space/nios90/1343161853"
pageId: "1343161853"
---
The topology of your network helps determine how you deploy Network Insight for VRF network management. To use Network Insight effectively in the network, you must possess some knowledge about your network so you can decide how to configure Network Insight to reach all the virtual networks you want to discover and manage. This section describes some common VRF-related network types for which you can deploy Network Insight.  
Using the following three network types, all examples in this section help you define the number of network views and discovery interfaces so you can reach all locations in your network.

1. **VRF** **Network** **Type** **1**: A network with a management VRF and several isolated production VRFs that include VRF-aware devices in the network.
2. **VRF** **Network** **Type** **2**: A network with a shared service deployment VRF (shared VRF) and several isolated production VRFs that include VRF-aware devices in the network. The production VRFs share routes with the shared VRF, a practice also called route-leaking.
3. **VRF** **Network** **Type** **3**: A network with several VRF-ignorant devices that reside in different L3 spaces, with no management VRF.

**VRF** **Network** **Type** **1** has the following characteristics:

- A management VRF that reaches all VRF instances throughout the network.
- Isolated production VRFs (all VRFs can route to/from the management VRF but not to one another).
- The management VRF has complete visibility to all VRF instances in the network.

*[drawio]*

**VRF** **Network** **Type** **2** has the following characteristics:

- Uses a shared services deployment VRF to offer network services to the other production VRFs (shared VRF).
- All VRFs are reachable from the shared VRF, but VRFs cannot reach each other through the shared VRF or between each other.
- The production VRFs (Red, Yellow, Green) share routes with the shared services VRF (Blue).
- The shared VRF has complete visibility to all VRF instances.

*[drawio]*

**VRF** **Network** **Type** **3** has the following characteristics:

- Devices have management IPs only inside their respective networks.
- The routers in the network are VRF-aware; the switches are VRF-ignorant.

*[drawio]*
