---
title: "Site 1 – HA Grid Member (Node 1)"
source: "/space/nios90/1340803505"
pageId: "1340803505"
---
Make a console connection to the appliance that you want to make Node 1 in the HA pair at Site 1 and use the `set network` command to configure its basic network and Grid settings. Use the following data:

- **IP Address**: **10.1.1.6**
- **Netmask**: **255.255.255.0**
- **Gateway**:** 10.1.1.1**
- **Grid Master VIP**: **10.0.1.10**
- **Grid Name**: **corpxyz**
- **Grid shared secret**: **Mg1kW17d**

The Infoblox application restarts. After restarting, the appliance contacts the Grid Master and joins the Grid as Node 1.
