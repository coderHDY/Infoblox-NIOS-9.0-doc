---
title: "Configuring Super Hosts"
source: "/space/nios90/280856358"
pageId: "280856358"
---
A super host is a collection of resource records or fixed addresses that are related. It can contain resource records or fixed addresses that belong to a single network device, such as a router or a switch, or an application server. With super host, you can configure and manage multiple interfaces, IP addresses, and DNS and DHCP records that are associated with the same physical or virtual device. A super host gives you the flexibility to group related objects into a single entity and manage them at one place.

A super host can contain the following record types:

- DNS records - A, AAAA, PTR, and host addresses
- DHCP records -  IPv4 or IPv6 fixed addresses.

Note that a super host object and a network view or a DNS view are independent of each other. A super host is an aggregation of NIOS objects that can belong to multiple networks or DNS views, but are related to a single network device. The audit log records all changes to a super host object including addition, modification, deletion, and association or disassociation of resource records.

You can group super host objects in smart folders according to their attributes. For example, you can create a smart folder that contains all records in a specific super host. For more information, see [*Smart Folders*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders). Use Capacity Report to view the total capacity utilization of super host objects. For more information, see [*Using the Capacity Report*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-tools).

> **warning**
>
> ### Note
> 
> Users must have valid permissions to delete or disable a super host. A resource record can only belong to one super host and cannot be a part of multiple super hosts. You can associate any number of records with a super host.
