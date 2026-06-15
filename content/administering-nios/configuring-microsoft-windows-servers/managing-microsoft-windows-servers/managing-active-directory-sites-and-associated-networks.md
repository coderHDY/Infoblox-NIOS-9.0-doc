---
title: "Managing Active Directory Sites and Associated Networks"
source: "/space/nios90/280662836"
pageId: "280662836"
---
You can manage Active Directory Sites and networks using either the Microsoft servers or the NIOS appliance.

# Managing an Active Directory Site from the Microsoft server

You can create, modify, or delete an Active Directory Site from the Microsoft server in both Read-only and Read/Write synchronization modes. When you create an Active Directory Site from the Microsoft server, it is created on the NIOS appliance. This site appears as an Active Directory Site under the corresponding Active Directory Domain and in the respective extensible attribute.  
When you make changes on the Microsoft server, the synchronization process ignores any other modifications that you make, but replicates only the name changes to the Grid. When you rename an Active Directory Site, the change reflects:

- in the Active Directory Site and in the respective extensible attribute.
- on all the networks that are associated with the Active Directory Site.

When you delete an Active Directory Site from the Microsoft server, it deletes the Active Directory Site object and removes corresponding extensible attributes. The appliance removes the value from all the network objects that are associated with it.

# Managing an Active Directory Site from NIOS

You can create, modify, or delete an Active Directory Site from the appliance in Read/Write synchronization mode only. The appliance displays an error message if you perform any of these operations in Read-only mode.  
When you rename an Active Directory Site and the associated networks, the changes reflect on the Microsoft server. The appliance displays an error message when you delete an Active Directory Site that is associated with networks. You must first remove the networks that are associated with the site.  
You cannot resize or split a network with an associated site in Read-only synchronization mode. You cannot join two networks if any of the involved networks or network containers are associated with a site irrespective of the synchronization mode.

# Managing Network Operations from Microsoft server

Note that you can perform network operations, such as create, modify or edit networks, in both Read-only and Read/Write synchronization modes. When you create a network, the synchronization process ignores the network if it is not assigned to a Active Directory Site. When the network is attached to the site, the appliance finds a matching network or network container in the configured network view. If it does not exist, the appliance creates a new network or a network container depending on the objects existing in the database. The new network or network container is set as unmanaged and a new extensible attribute is attached to the object to store the site.  
Note the following about managing networks:

- When you update a site that is associated with a network, the change is visible on the corresponding network or network container.
- Synchronization process ignores the changes when you update a network. Note that it does not ignore the changes when you modify the Active Directory Site or change an IP address or a CIDR.
- When you delete a network, the appliance removes the extensible attribute that is representing the associated site from the corresponding network or network container.
- If the status is set as managed, it indicates that the network is used for another purpose inside the Grid. The appliance does not remove it from the Grid.
- If the status is set as unmanaged, the appliance deletes the network if there is no other site coming from another Active Directory Domain, which is associated with the network. Otherwise the appliance does not remove the network from the Grid.

# Converting Unmanaged Networks to Managed Status

When you synchronize a network from the Active Directory server, the network created in NIOS is considered to be unmanaged. You can neither associate a NIOS member or a Microsoft server to manage it nor edit permissions, and other fields. You can only edit extensible attributes and Active Directory sites on the unmanaged network. To perform certain operations on Unmanaged networks, you must first convert them to Managed networks.  
The IPAM main page lists all networks that are created during Active Directory synchronization as unmanaged, highlighted in yellow. You can explore unmanaged networks through IPAM's **IP** **Map** and **IP** **List** views.  
Unmanaged networks can be converted at the IPAM main page and at the device level under **Data** **Management** **–>** **Devices**, selecting a device and opening the **Networks** page.

# Managing Network Operations from NIOS

The appliance denies the operation when you create a network, which is associated with a site, if the respective site belongs to an Active Directory Domain that is synchronized in Read-only mode. Otherwise the appliance creates it on the Microsoft server that is associated with the respective site.

# Restoring Server Data

When you restore a database backup, the appliance performs the following operations after the standard restore procedure is complete:

- The appliance deletes the cached data that is used for synchronization.
- Synchronization for all configured Microsoft servers starts in Read-only mode. Note that these rules are applicable during upgrade also.
