---
title: "About Managing Microsoft Windows Servers"
source: "/space/nios90/280662903"
pageId: "280662903"
---
You can configure Grid members to manage Microsoft Windows DNS and DHCP servers, and synchronize their DNS and DHCP data to the Grid database, so you can view and optionally, manage the data from Grid Manager. After the data is synchronized, you can use the IPAM tools of Grid Manager to simplify DNS and DHCP configuration and troubleshooting. You can use Smart Folders to organize your data, and monitor your networks and Microsoft servers from the Dashboard. In addition, you can control the DNS and DHCP services of the Microsoft servers from Grid Manager and configure server properties as well. You can use the Identity Mapping feature to get visibility of user interaction with their environments. For more information about the Identity Mapping feature, see *[Configuring Identity Mapping](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/configuring-identity-mapping)*.

The below figure illustrates a Grid that includes a member that provides DNS and DHCP services, and two other members that manage multiple Microsoft DNS and DHCP servers. Assuming the admin has the appropriate permissions, the admin can centrally manage the Microsoft DNS and DHCP servers and Infoblox DNS and DHCP server from a single interface, Grid Manager.

*Managing* *Microsoft* *and* *Infoblox* *DNS* *and* *DHCP* *Servers* *from* *the* *Grid* *Master*

*[drawio]*

You do not have to configure or install any application on the Microsoft servers for the Grid members to communicate with the servers. Infoblox uses MS-RPC (Microsoft Remote Procedure Calls) to manage Microsoft servers.

A Grid member can manage a Microsoft server in either of two modes, Read-only or Read/Write. In Read-only mode, the Grid member synchronizes data from the Microsoft server to the Grid so admins can use Grid Manager to view the synchronized data, but not update it. Read/Write mode allows admins to update the synchronized data as well.

Updates from Grid Manager are then synchronized to the Microsoft server, and updates from the Microsoft server are synchronized to the Grid.  
Configuration changes and data synchronized from the Grid to the Microsoft server apply immediately after the synchronization. You do not have to restart the Microsoft server or for DNS, reload the zones.

Note that due to a field length limit set on the Microsoft DHCP server, after you synchronize DHCP data on the Microsoft server, the "Comment" and "Description" fields for a fixed address and reservation can display only up to 128 characters even though NIOS allows up to 256 characters for these fields.

> **warning**
>
> **Note**
> 
> A Grid member must have a Microsoft Management license installed to manage a Microsoft server. The license allows the member to synchronize data with Microsoft servers. It also activates the tabs, dialog boxes and other elements in Grid Manager that you need to manage a Microsoft server. If you do not see the Microsoft Servers tab after you add a member that has a Microsoft Management license, you might have to restart the Grid Master to view the tab and to manage Microsoft DNS and DHCP servers in the Grid.
