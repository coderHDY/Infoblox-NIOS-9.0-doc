---
title: "Placing Both Appliances on the Network"
source: "/space/nios90/1480950502"
pageId: "1480950502"
---
1. Connect the power cable from each NIOS appliance to a power source and turn on the power. If possible, connect the appliances to separate power circuits. If one power circuit fails, the other might still be operative.
2. Connect Ethernet cables from the LAN1 port and the HA port on each appliance to a switch on the network.
3. Make a console connection to the appliance and configure the network settings of its LAN1 port so that it is on the local subnet and you can reach it on the network. You can configure IPv6 address for the appliance through CLI or GUI.
4. Similarly, configure the LAN1 port on the other appliance so that it is in the same subnet as the first appliance.
5. Connect your management system to the network so that it can reach the IP addresses of the LAN1 ports on both appliances.
