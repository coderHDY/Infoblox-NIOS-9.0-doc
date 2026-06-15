---
title: "Splitting IPv6 Networks into Subnets"
source: "/space/nios90/1432719901"
pageId: "1432719901"
---
You can create smaller subnets simultaneously within a network by splitting it. You do not have to configure each subnet individually. You can create smaller subnets with larger netmasks. A larger netmask defines a larger number of network addresses and a smaller number of IP addresses.  
Note that you cannot split a network that is part of a shared network. To split an IPv6 network:

1. From the **Data** ** Management** tab, select the **IPAM** tab -&gt; *network* checkbox, and then click **Split** from the Toolbar.
2. In the *Split* * Network* editor, do the following:
   
   - **Address**: Displays the network address. You cannot modify this field.
   - **Net mask**: Specify the appropriate netmask for each subnet.
   - **IPv6 Prefix Collector Network**: If you split a network with prefix delegations that are not tied to specific addresses, specify the network in which all prefix delegations are assigned. If you leave this field blank, the server assigns all prefix delegations that are not tied to specific addresses to the first network.
   - **Immediately create**: Select one of the following:
     
     - **Only ** **networks ** **with ** **ranges** ** and** ** fixed ** **addresses**: Adds only the networks that have DHCP ranges and fixed addresses.
     - **All** ** possible** ** networks**: Adds all networks that are within the selected netmasks. You can select this option only when you increase the CIDR by 8 bits.
   - **Automatically ** **create** ** reverse-mapping** **zone**: Select this checkbox to have the appliance automatically create reverse-mapping zones for the subnets. This function is enabled if the netmask of the network is a multiple of four, such as 4, 12 or 16.
3. Click **OK**.
