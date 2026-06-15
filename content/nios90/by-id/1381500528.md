---
title: "Setting the Management Mode"
source: "/space/nios90/1381500528"
pageId: "1381500528"
---
A Grid member can manage a Microsoft server in Read-only mode, which is the default, or in read-write mode. In Read-only mode, the Grid member copies the DNS and DHCP data from the Microsoft server to the Grid so Grid Manager admins can view the synchronized data. They cannot update the data, control the DNS and DHCP service of the Microsoft server, or configure any properties.

When you select Read-only mode for Active Directory sites, you can view the sites and networks that are present on the Microsoft server through Grid Manager. Note that you cannot manage the Active Directory sites and networks directly from the Grid, but you can manage an object within the Grid that is associated with a Read-only Active Directory Site or an Active Directory network. The synchronization process is Read-only and you cannot write into the Microsoft server in this mode. For more information, see Assigning Grid Members to Microsoft Servers below.

In Read/Write mode, Grid Manager admins are allowed to update the data of the Microsoft server. Therefore during each synchronization, the Grid member applies changes from the Grid to the Microsoft server and vice versa. Read/Write mode also allows admins to control DNS and DHCP services of the Microsoft server and configure some of their properties.

When you select Read/Write mode for Active Directory Sites, you can view and manage the sites and networks that are present on the Microsoft server through Grid Manager. When you update an object that is associated with the Active Directory Site or an Active Directory network, the changes reflect on the Microsoft server. For more information, see Assigning Grid Members to Microsoft Servers below.

Note that the management mode of a Microsoft server is separate from the admin permissions that the appliance requires to access the Microsoft servers and DNS and DHCP resources. An admin must still have the applicable permissions to the Microsoft servers and DNS and DHCP resources they want to access.
