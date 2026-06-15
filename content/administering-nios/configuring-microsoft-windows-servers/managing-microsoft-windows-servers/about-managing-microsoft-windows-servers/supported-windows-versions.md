---
title: "Supported Windows Versions"
source: "/space/nios90/281149447"
pageId: "281149447"
---
Infoblox Grid members can manage Microsoft servers that support the following Windows versions:

| ** OS** | **Levels** | **Platforms** |
| --- | --- | --- |
| Microsoft Windows 2003 Standard and Datacenter | SP2 | 32 bits |
| Microsoft Windows 2003 R2 Standard and Datacenter | Initial Release | 32 bits, 64 bits |
| Microsoft Windows 2008 Standard and Datacenter | SP2 | 32 bits, 64 bits |
| Microsoft Windows 2008 R2 Standard and Datacenter | Initial Release | 64 bits |
| Microsoft Windows 2012 Standard and Datacenter | Initial Release | 64 bits |
| Microsoft Windows 2012 R2 Standard and Datacenter | Initial Release | 64 bits |
| Microsoft Windows 2016 Standard and Datacenter | Initial Release | 64 bits |
| Microsoft Windows 2019 Standard and Datacenter | Initial Release | 64 bits |
| Microsoft Windows 2022 Standard and Datacenter | Initial Release | 64 bits |

Infoblox supports the following SMB (Server Message Block) protocol versions for Microsoft Windows servers: SMB version 1 (SMBv1), SMB version 2.x (SMBv2.x), and SMB version 3.x (SMBv3.x).

Grid members check the Windows version of the Microsoft servers before each synchronization. If a Microsoft server reports an unsupported version before a synchronization, the member logs an error and the synchronization fails.  
Note that some Windows versions require certain updates and hotfixes installed, so the Microsoft server can synchronize with the Grid member. Following are the current requirements:

- Windows Server 2003, Enterprise x64 Edition requires the installation of security update 935966.
- Windows Server 2008 R2 requires the hotfix referenced in the Knowledge Base article 981776.
- Windows Server 2008-based DNS servers might not display delegations for reverse lookup zones. For information about this issue, including the available hotfix, refer to Knowledge Base article 958190.

For information about the updates, enter their IDs in the Search field of the Microsoft Support website at *[http://support.microsoft.com](http://support.microsoft.com)*.

# Administrative Permissions

By default, only superusers can configure Grid members to manage Microsoft servers. Superusers can give limited-access users Read-only or Read/Write permission to Microsoft servers. Read-only permission allows admins to view the properties and data of a Microsoft server from Grid Manager. Write permission is required to configure Grid members to manage Microsoft servers, edit their properties, and start or stop their DNS and DHCP services. For additional information, see *[Administrative Permissions for Microsoft Servers](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668320)*.  
Note that to view and manage the DNS and DHCP data synchronized from Microsoft servers, admins must have permissions to the applicable DNS and DHCP resources. For example, to view DNS zones synchronized from Microsoft servers, admins must have Read-only permission to zones, and to edit the zones, admins need Read/Write permission to them. Similarly, to view DHCP ranges synchronized from Microsoft servers, admins must have Read-only permission to DHCP ranges, and to edit the DHCP ranges, admins need Read/Write permission to the DHCP ranges. For information, see *[Administrative Permissions for DNS Resources](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861)* and *[Administrative Permissions for DHCP Resources](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153)*.  
The administrative permissions on the Grid are different from those on the Microsoft server. These permissions are independent of each other and are not synchronized.

*[__confluenceADFMigrationUnsupportedContentInternalExtension__]*
