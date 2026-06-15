---
title: "Deploying Network Insight in VRF Network Type 1: All Devices on a Management Network"
source: "/space/nios90/1343293162"
pageId: "1343293162"
---
The following figure shows an example of integrating Network Insight with **Network** **Type** **1**. In this network deployment type, a single virtual discovery interface can manage all VRF instances' identification of ARP entries, because Network Insight needs only one discovery interface into the Management VRF.

**Network** **Insight**   
You configure the following for this example:

- **Network** **View**: Create one network view for the management VRF.
- **Discovery** **Interface**: Add the active discovery interface to the management VRF and tag it with the corresponding 802.1q VLAN value.
- **Discovery** **Ranges**: Define IP discovery ranges for the management network.
- All discovered VRFs must be associated with the network view configured for the management VRF.
