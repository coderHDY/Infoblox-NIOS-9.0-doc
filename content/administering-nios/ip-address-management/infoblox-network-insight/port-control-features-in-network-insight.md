---
title: "Port Control Features in Network Insight"
source: "/space/nios90/280406109"
pageId: "280406109"
---
> **warning**
>
> ### Note
> 
> Port control involves two primary operations: *network* *provisioning/de-provisioning* and *port* *configurations*. These operations are classified as port control tasks that can be monitored and viewed in the Task Manager (**Administration** **–>** **Workflow** **–>** **Task** **Manager**).

Port control enables changes to the interface-level configurations of switches and switch-router devices, and assignment of these resources to network objects defined and created within IPAM.

- Port configurations and network provisioning and de-provisioning use CLI admin credentials, supporting SSH and Telnet. You may test credentials before use, against an IP address or a selected device;
- Port configuration consists of two primary operations: setting admin status for a port, and defining Data VLAN and Voice VLAN assignments (where applicable), along with minor changes such as editing descriptions;
- You can define port configuration blackout periods using the same methods provided for discovery blackouts. These blackout periods also apply to network provisioning and de-provisioning tasks;
- Configuring a port on a device always creates a new port control task that can be viewed and managed in the Task Manager.
- You can separately schedule port control tasks using the same method as for object creation.
- You can edit multiple interfaces at a time.
- You can edit interfaces, inline, from the **Interfaces**, **IP** **Addresses** and **Assets** pages in Grid Manager. These operations generally consist of setting the interface to be Administratively Up or administratively Down, and VLAN assignments.

Network provisioning includes the following:

- If a user deletes a discovered network from the system, Grid Manager displays the list of *interfaces* on which the network is currently provisioned;
- Network provisioning allows you to provision a network on one interface at a time. The network must be in managed status under IPAM;
- The user can also *de-provision* a network, which removes it from one or more interfaces;
- You can perform network provisioning and de-provisioning tasks on routers and switch-routers.

Devices do not have to be in managed state for some port control operations (setting ports to Admin Up and Admin Down, for example) but some port control operations require it:

- Provisioning a network (through IPAM) onto a port on a managed device;
- De-provisioning a network.

When you create a new object using the wizard, you can configure the port or ports that are associated with the object's port reservation. In this case, two new tasks are created: an object creation task, and a port control task, which can be scheduled separately from the object creation. *The* *port* *control* *task* *is* *a* *separate* *task* *that* *may* *also* *require* *administrator* *approval*. When you create a new task, an information feedback panel provides a link to the port control task in the Task Manager.  
You may also select and reschedule both tasks. For more information, see [*Rescheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1455063387).

> **warning**
>
> ### Note
> 
> If you edit an object, you can only edit an associated port reservation.

Objects are completed in their configuration by Grid Manager before executing a port configuration.  
If, for example, a fixed address object is subject to administrative approval, no port control task takes place for that object until the approval is executed and the object is created. This has implications for scheduling: if you schedule the creation of a new host, IPv4 reservation or fixed address, and wish to schedule a port control task for the same object, the scheduled object creation must take place first, and must complete, before the scheduled port configuration executes.  
All port configuration operations can be scheduled and subject to administrator approval. For more information, see [*Configuring Approval Workflows*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280398484).

# About Port Reservations

You can define a device *port* *reservation* for a defined object such as a host, fixed address or IPv4 reservation, or for an Infoblox Grid Member. Port reservations assign device interfaces to Infoblox-managed objects in Grid Manager. The port reservation is a property of each object, such as a fixed address or host record, that you create.  
After discovering and cataloguing infrastructure devices, Grid Manager compiles the lists of interfaces and separately tracks available switch ports on each device. When you attempt to reserve a switch port, Grid Manager provides the complete list of *available* switch ports on the device, automatically preventing possible conflicts over port usage.  
Characteristics of port reservations include the following:

- Device Ports can be reserved to Grid Manager objects under IPAM and DHCP;
  
  - The user can choose to immediately create the new object (IPv4 reservation, IPv4/IPv6 fixed address or host, or a Grid member), and to also immediately assign a device port to the object. In such cases, the object is created and the port is reserved for the object;
  - An object can be scheduled for creation at a later time, and its port assignment scheduled for the same time, or for a different date and time, in the future;
  - A port reservation does not guarantee that the switch interface is in fact available for the assignment.

- You can create port reservations for multiple objects at a time;
- Interface tables show the objects to which they are bound, in a special **Reservation** column;
- When you delete an IPAM object such as a fixed address, its associated port reservation is automatically deleted.

Once a switch port or other device port is reserved, Network Insight prevents future tasks from trying to use the same port for another reservation.  
Device switchports and router interfaces, and other interface types may be assigned to the following types of objects:

- Grid members (including HA Pairs). For more information, see the following sections [*Defining Port Reservations for an Infoblox Grid Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763890)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763890/Creating+Port+Reservations+for+IPAM+Objects#DefiningPortReservationsforanInfobloxGridMember)and [*Defining Port Reservations for an HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763890/Creating+Port+Reservations+for+IPAM+Objects#Defining-Port-Reservations-for-an-HA-Pair)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763890/Creating+Port+Reservations+for+IPAM+Objects#bookmark1490)
- Hosts. For more information about defining hosts with included port configuration, see [*Adding Host Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779).
- IPv4 reservations. For more information, see [*Adding IPv4 Reservations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404203).
- Fixed addresses (IPv4 and IPv6). For more information, see [*Adding IPv4 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1320357604) and [*Adding IPv6 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)*.*
- IP networks (IPv4 and IPv6). For more information, see [Adding IPv4 Networks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742) and [*Adding IPv6 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764556)

Devices involved in these operations must be under managed status in Grid Manager. For more information, see  
[*Converting Unmanaged Devices to Managed Devices*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432753454).
