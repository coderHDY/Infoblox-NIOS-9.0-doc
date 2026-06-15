---
title: "Resizing IPv4 Networks"
source: "/space/nios90/1344965337"
pageId: "1344965337"
---
You can resize a network to increase or decrease the network size and the number of IP addresses in the network. When you resize a network to a smaller netmask, you increase the number of IP addresses within that network. You can change the size of an IPv4 network when the operation does not affect existing objects in the network. You can resize an existing network only if the resized network does not exceed the upper network limit or create orphan objects, such as hosts and DHCP ranges. When a network has a parent network or subnets, the upper limit of the network size is marked in red in the resize network slider, and you cannot resize beyond this limit. For example, if a network has a /16 parent network, you cannot resize the network to a network that is larger than /16.

Before you resize an RIR allocated network block, ensure that the network block has already been registered at the corresponding RIR. Otherwise, when you reassign addresses within this block, the registration updates may fail. For information about RIR registration updates, see [*RIR*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963)[*Registration*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963)[*Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963).

To resize a network:

1. From the Net Map or List panel, select a network, and then click **Resize** from the Toolbar.
2. In the *Resize* *Network* editor, do the following:
   
   - **Address**: Displays the network address. You cannot modify this field.
   - **Netmask**: Displays the netmask of the network as you resize the network. You cannot modify this field.
   - **Resize** **slider**: Use the resize network slider to specify the appropriate subnet masks for the subnets. When you move the slider, Grid Manager displays the number of subnets and IP addresses within that subnet.
   - **Automatically** **create** **reverse-mapping** **zone**: This is enabled only when you resize a /8, /16, or /24 network. Select this checkbox to have the appliance automatically create reverse-mapping zones for the subnet. The appliance automatically creates reverse-mapping zones only for /8, /16, and /24 netmasks.
3. Click **OK**.
