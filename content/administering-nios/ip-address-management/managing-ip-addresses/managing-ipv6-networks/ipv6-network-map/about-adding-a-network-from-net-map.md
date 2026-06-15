---
title: "About Adding a Network from Net Map"
source: "/space/nios90/1432719953"
pageId: "1432719953"
---
When you create networks from Net Map, you can view the address space to which you are adding a network, so you can determine how much space is available and which IP addresses are not in use. When you mouse over an open area, Net Map displays useful information, such as the largest possible network that fits in that area. In addition, you can create networks without having to calculate anything. When you add a network, Net Map displays a netmask slider so you can determine the appropriate netmask for the size of the network that you need. As you move the slider, it displays network information, including the total number of addresses. After you select the netmask, you can even move the new network around the open area to select another valid start address.  
To add a network from the Net Map panel:

1. Do one of the following:
   
   - Click the Add icon.  
     Net Map displays the netmask slider and outlines the open area that can accommodate the largest network.
   - Select an open area, and then click the Add icon.  
     Net Map displays the netmask slider and outlines the largest network that you can create in the open area that you selected.
2. Move the slider to the desired netmask. You can move the slider to the netmask of the largest network that can be created in the open area. You can also move the slider to the smallest network that can be placed in the current zoom level of Net Map.  
   As you move the slider, Net Map displays the netmask. The outline in the network map also adjusts as you move the slider. When you mouse over the outline, it displays the start and end address of the network.
3. After you set the slider to the desired netmask, you can drag the new network block around the open area to select a new valid starting address. You cannot move the block to a starting address that is invalid.
4. Click **Launch** **Wizard** to create the network.  
   The *Add* *Network* wizard displays the selected network address and netmask.
5. You can add comments, automatically create reverse mapping zones, and edit the extensible attributes. (For information, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098)[*Adding*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098)[*IPv6*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098)[*Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098).)
6. Save the configuration and click **Restart** if it appears at the top of the screen. Grid Manager updates Net Map with the newly created network.
