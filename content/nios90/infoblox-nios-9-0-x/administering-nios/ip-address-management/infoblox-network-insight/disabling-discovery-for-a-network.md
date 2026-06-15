---
title: "Disabling Discovery for a Network"
source: "/space/nios90/280273243"
pageId: "280273243"
---
You go to the DHCP feature under **Data** **Management** to disable discovery for a network. Disabling discovery for a network differs from discovery blackouts; disabling discovery for a network simply ensures that discovery never takes place on the chosen network.  
To disable discovery for an IP network:

1. Select a managed network from one of the following locations:
   
   1. **Data** **Management** **–&gt;** **IPAM** **–&gt;** list view
   2. **Data** **Management** **–&gt;** **DHCP** **–&gt;** **Networks**
2. Click the Action icon
   
   *[image: media]*
   
   next to the network you want (this automatically selects it) and select **Edit** from the menu. The Network editor appears.
3. Click the **Discovery** tab.
4. Child networks inherit their discovery default settings from their parent networks. Click **Override** to change the **Enable** **Discovery** setting. (The **Discovery** **Member** setting remains unchanged.)
5. Deselect the **Enable** **Discovery** checkbox, and then save the configuration.
