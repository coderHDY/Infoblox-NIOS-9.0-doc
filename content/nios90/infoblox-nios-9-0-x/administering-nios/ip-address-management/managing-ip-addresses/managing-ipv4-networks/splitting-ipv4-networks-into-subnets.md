---
title: "Splitting IPv4 Networks into Subnets"
source: "/space/nios90/1345063445"
pageId: "1345063445"
---
You can create smaller subnets simultaneously within a network by splitting it. You do not have to configure each subnet individually. You can create smaller subnets with larger netmasks. A larger netmask defines more networks with a smaller number of IP addresses.

These subnets inherit the address properties of the parent network, such as member assignments. The exceptions are the default router and broadcast address configuration. The default router and broadcast address configuration for address ranges and fixed address are disabled by default after splitting a network. You can enable these properties for each subnet after splitting the parent network.

Note that you cannot split a network that is part of a shared network.

To split a network:

1. From the Net Map or List panel, select the checkbox of a network, and then click **Split** from the Toolbar.
2. In the *Split* *Network* editor, do the following:
   
   - **Address**: Displays the network address. You cannot modify this field.
   - **Netmask**: Displays the netmask of the network. You cannot modify this field.
   - **Subnetworks**: Displays the number of subnets and IP addresses for each subnet.
   - **Split** **network** **slider**: Use the split network slider to specify the appropriate subnet masks for each subnet. When you move the slider, Grid Manager displays the number of subnets and the IP address range within that subnet.
   - **Immediately** **Add**: Select one of the following options.
     
     - **Only** **networks** **with ranges** **and fixed addresses and unmanaged**: Adds only the networks that have DHCP ranges, fixed addresses, and unmanaged addresses.
     - **All possible networks**: Adds all networks that are within the selected netmasks. The is enabled only when you split the /8 networks to /9 or /16 networks.  
       Note that when you add a large number of networks, it could take a little longer for Grid Manager to display the networks.
   - **Automatically** **create** **reverse-mapping** **zone**: Select this checkbox to have the appliance automatically create reverse-mapping zones for the subnets.
3. Click **OK**.
