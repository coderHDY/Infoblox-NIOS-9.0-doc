---
title: "Joining IPv4 Networks"
source: "/space/nios90/1345162266"
pageId: "1345162266"
---
Joining multiple networks into a larger network is the opposite of splitting a network. You can select a network and expand it into a larger network with a smaller netmask. A smaller netmask defines fewer networks while accommodating a larger number of IP addresses. Joining or expanding a network allows you to consolidate all of the adjacent networks into the expanded network. Adjacent networks are all networks falling under the netmask of the newly-expanded network. You can expand the selected network to a new size and add all other subnets into the new network. When you join networks, you need not define all small networks that cover the address spaces for a larger network.

Each of the adjacent networks join the expanded network and inherit the DHCP member configuration options of the selected network. The expanded network does not inherit the default router and broadcast address configurations of the adjacent networks. Those configurations are disabled by default.

> **warning**
>
> ### Note
> 
> The member assignment for the expanded network combines all member assignments of the joining networks.

Note that the join and resize features work identically only when you have a single network. If the resize feature is disabled and if you have a single network object with additional new networks, then you must use the join feature to combine all networks.

To join or expand a network:

1. From the Net Map or List panel, select a network, and then click **Join** from the Toolbar.
2. In the *Join* *Network* editor, do the following:
   
   - **Address**: Displays the network address. You cannot modify this field.
   - **Netmask**: Displays the netmask of the network as you expand the network.
   - **Join** **Network** **slider**: Use the join network slider to specify the available subnet masks for the newly expanded network. Select a smaller netmask value, based on your requirements of the newly-expanded network. When you move the slider, a dialog box displays the total number of IP addresses and the IP address range of a selected subnet mask.
   - **Automatically** **create** **reverse-mapping** **zone**: Select this checkbox to configure the expanded network to support reverse-mapping zones [*Adding*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)[*Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)[*Members*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129).
3. Click **OK**.
