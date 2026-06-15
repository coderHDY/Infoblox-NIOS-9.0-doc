---
title: "Adding a Network from Net Map"
source: "/space/nios90/1345162187"
pageId: "1345162187"
---
When you create networks from Net Map, you can evaluate your network infrastructure and add networks accordingly. You can view the address space to which you are adding a network, so you can determine how much space is available and which IP addresses are not in use. When you mouse over an open area, Net Map displays useful information, such as the largest possible network that fits in that area and the total number of IP addresses. In addition, you can create networks without having to calculate anything. When you add a network, Net Map displays a netmask slider so you can determine the appropriate netmask for the size of the network that you need. As you move the slider, it displays network information, including the total number of addresses. After you select the netmask, you can even move the new network around the open area to select another valid start address.

To add a network from the Net Map panel:

1. Do one of the following:
   
   - Click the Add icon.  
     Net Map displays the netmask slider and outlines the open area that can accommodate the largest network.
   - Select an open area, and then click the Add icon.  
     Net Map displays the netmask slider and outlines the largest network that you can create in the open area that you selected.
2. Move the slider to the desired netmask. You can move the slider to the netmask of the largest network that can be created in the open area.  
   As you move the slider, Net Map displays the netmask and its corresponding number of IP addresses. The outline in the network map also adjusts as you move the slider. When you mouse over the outline, it displays the start and end address of the network.
3. After you set the slider to the desired netmask, you can drag the new network block around the open area to select a new valid starting address. You cannot move the block to a starting address that is invalid.
4. Click **Launch** **Wizard** to create the network.  
   The *Add* *Network* wizard displays the selected network address and netmask.
5. You can add comments, automatically create reverse mapping zones, and edit the extensible attributes. For information, see [*Adding*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)[*IPv4*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)[*Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks). You cannot change the network address and netmask, but you can edit the description and enable or disable a network by selecting the network and clicking the Edit icon. To disable a network, you can double click the respective row, select the checkbox in the **Disabled **column and click **Save. **Grid Manager displays a warning message when you select the checkbox. Click **Yes **to confirm or **No **to cancel. You can also delete or restore a network. Grid Manager displays a warning message during deletion and when you restore the network indicating that the process may take a longer time if the amount of data is huge. Click **Yes **to continue or **No **to cancel the process.
6. Save the configuration and click **Restart** if it appears at the top of the screen. Grid Manager updates Net Map with the newly created network.
