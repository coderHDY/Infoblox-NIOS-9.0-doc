---
title: "Configuring the Next Available Network or IP Address"
source: "/space/nios90/280663648"
pageId: "280663648"
---
When you create certain objects through Grid Manager, the appliance can obtain the next available IPv4 or IPv6 network from a specific network container. It can also obtain the next available IP address from a specific network or address range. This feature automates the allocation of networks and IP addresses so you can manage your network space more efficiently. You can also use this feature to organize network devices. For example, you can create a reserved range called "Printer Range" to reserve static IP addresses for printers in your network. When you allocate IP addresses for printers, you can have the appliance search for the next available IP address within "Printer Range," and then allocate the next available address to a new printer.  
When you create a new network, the appliance can look up the next available network address within a specific network container. The next available network address is the first unused network address in the network container to which you have administrative permissions. For information about creating IPv4 and IPv6 networks using the next available feature, see *[Adding IPv4 Networks ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)*and *[Adding IPv6 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv6-networks)*.  
You can also obtain the next available IP address when you define a fixed address, reservation, or host record. The next available IP address is the first unused IP address in a specified network, DHCP range, or reserved range to which you have administrative permissions. For information about creating fixed addresses, reservations, and host records using the next available feature, see *[Configuring IPv4 Fixed Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses)*, *[Configuring IPv4 Reservations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)*, and [*Adding Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records).

# Obtaining the Next Available

The appliance searches for the next available network or IP address based on the context you define when you create an object. For example, when you create a network within a specific network container, the appliance searches for the next available network within the specified container. Similarly, when you drill down to an address range and create an object from there, the appliance looks up the next available IP address within that address range. If you are not within a specific network or address range when you create an object, Grid Manager displays a selector from which you can select the network or address range for the next available network or IP address.  
For information about how the appliance select the next available network and IP address, see Guidelines for the Next Available Network and IP Address below.

# Guidelines for the Next Available Network and IP Address

The appliance follows certain rules when searching for the next available network and IP address in the specified wizard, network container, and address range.  
In a wizard where you can obtain the next available network or IP address, the following applies:

- In a wizard, if you add a network or IP address and then delete it, the appliance excludes it from the next available. When you try to obtain the next available network or IP address in the same wizard, the appliance does not return the deleted network or IP address until you exit the wizard.

In a network, the appliance searches for the next IP address that meets all of the following criteria:

- It does not match any DNS resource record, such as an A or PTR record, that is associated with an IP address.
- It is not assigned to a DHCP fixed address or host address record.
- It is not part of any DNS bulk host record.
- It does not match any unmanaged IP address.
- It is not the network (the first) or broadcast (the last) address in the specified network.
- It is not within any DHCP range in this network.
- It is not within any reserved range in this network.
- It is not within an exclusion range.
- It is not part of a scheduled task that involves a fixed address. For information about how to schedule a task, see *[Scheduling Tasks](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)*.

In a DHCP range, the appliance searches for the next IP address that meets all of the following criteria:

- It is not assigned to a fixed address or host record.
- It does not match any unmanaged IP address.
- It is not part of an exclusion range within the DHCP range.
- It is not part of a scheduled task that involves a fixed address.
- It does not match any active DHCP lease.

In a reserved range, the appliance searches for the next IP address that meets all of the following criteria:

- It is not assigned to a fixed address or host record.
- It does not match any unmanaged IP address.
- It is not part of a scheduled task that involves a fixed address.

> **warning**
>
> **Note**
> 
> The appliance does not search for deleted leases in the Recycle Bin.

When multiple users simultaneously request for the next available network or IP address, the appliance returns the same unused network or IP address to all users. The user who first saves the task gets the next available network or IP address. In some cases, other users get an error message telling them that the network or IP address is not available when they save their tasks. They can then request another unused network or IP address or enter a new one.
