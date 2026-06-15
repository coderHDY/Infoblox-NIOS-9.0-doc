---
title: "Adding and Assigning RIR Networks"
source: "/space/nios90/1423573190"
pageId: "1423573190"
---
Before you can assign network addresses within an RIR allocated address block to an organization, you must first add the allocated address block to NIOS. Infoblox supports IPv4 and IPv6 network containers and networks. You can also create network templates that are specific for RIR networks. For information about creating network templates, see [*About IPv4 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-network-templates) and [*About IPv6 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-network-templates).  
Note that when you add network containers or networks to NIOS, the appliance does not validate whether the corresponding networks actually exist in the RIPE database. Even though you can create the networks in NIOS, the submission of updates for the network may fail. For example, if you create a child network and the parent network is not registered in RIPE, the registration update will fail.  
In addition, each network can only be associated with an RIR in one network view. If you have a network address block registered with RIPE in a specific network view, you must not register the same address block in a different network view.  
When you enable the support for updates of RIR registrations, Grid Manager displays the appropriate data fields that you can use to add or modify RIR related networks. You can do the following to add IPv4 and IPv6 networks:

- Add RIR allocated IPv4 networks to NIOS, or assign addresses to specific organizations. For information see [*Adding IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks).

- Add RIR allocated IPv6 networks to NIOS, or assign addresses to specific organizations. For information, see [*Adding IPv6 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098).

- Add IPv4 network templates that are specific to RIR address allocation. For information, see [*About IPv4 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-network-templates).
- Add IPv6 network templates that are specific to RIR address allocation. For information, see [*About IPv6 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-network-templates).

You can also do the following to modify specific data about the RIR networks:

- Modify RIR allocated or assigned IPv4 networks. For information see [*Modifying IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks/modifying-ipv4-networks).
- Modify RIR allocated or assigned IPv6 networks. For information see [*Modifying IPv6 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098/Managing+IPv6+Networks#Modifying-IPv6-Networks).
- Modify IPv4 network templates that are specific to RIR address allocation. For information, see [*Modifying IPv4 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-network-templates/modifying-ipv4-network-templates).
- Modify IPv6 network templates that are specific to RIR address allocation. For information, see [*Modifying IPv6 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-network-templates/About+IPv6+Network+Templates#Modifying-IPv6-Network-Templates).

You can preview the information before the appliance submits updates to the RIPE database. To preview registration updates, click **Preview** **RIR** **Submissions** in the *Add* *IPv4* *Network* or *Add* *IPv6* *Network* wizards. For more information, see [*Previewing Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/monitoring-rir-data/Monitoring+RIR+Data#Previewing-Registration-Updates).

> **warning**
>
> ### Note
> 
> You can also add RIR networks through **Task** **Dashboard**.

After you create an RIR network container or network, you can perform the following:

- Split a network that has an organization ID. A child network that is created does not contain an organization ID by default. You must assign an organization ID to the child network after splitting it. For information about splitting an RIR network, see [*Splitting IPv4 Networks into Subnets *](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/splitting-ipv4-networks-into-subnets)and [*Splitting IPv6 Networks into Subnets*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv6-networks/splitting-ipv6-networks-into-subnets).
- Resize an IPv4 RIR network that contains an organization ID and has been registered with RIPE. For more information, see [  ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/Managing+IPv4+Networks#bookmark1243)[*Resizing*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/Managing+IPv4+Networks#bookmark1243)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/Managing+IPv4+Networks#bookmark1243)[*IPv4*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/Managing+IPv4+Networks#bookmark1243)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/Managing+IPv4+Networks#bookmark1243)[*Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/Managing+IPv4+Networks#bookmark1243).
