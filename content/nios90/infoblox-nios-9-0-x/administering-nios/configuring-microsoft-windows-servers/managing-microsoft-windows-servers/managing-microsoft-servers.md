---
title: "Managing Microsoft Servers"
source: "/space/nios90/280403352"
pageId: "280403352"
---
After you configure Grid members to manage Microsoft servers, you can set certain properties and manage the servers as follows:

- Set server properties, as described in the next section, Setting Microsoft Server Properties.
- Change the managing member or the management mode, as described in Changing the Managing Member or Management Mode below.
- Back up the synchronized data, as described in Backing Up Synchronized Data below.
- Disable synchronization with a Microsoft server, as described in Disabling Synchronization below.
- Remove a Microsoft server, as described in Removing a Managed Microsoft Server below.

> **note**
>
> **Note:** When adding a primary Microsoft Server using an IPv6 address, ensure that the IPv6 interface is enabled on the managing member before initiating any configuration.

# Setting Microsoft Server Properties

You can modify any of the Microsoft server properties you previously configured, except for the network view and DNS view. You can also set certain properties, including the logging level, extensible attributes, and administrative permissions. Extensible attributes and permissions apply to the data only when they are managed from Grid Manager. Extensible attributes and permissions are not synchronized to the Microsoft server.  
To set the properties of a Microsoft server:

1. From the **Infoblox Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Servers** tab, select a Microsoft server and click the Edit icon, or click the Action icon
   
   *[image: media]*
   
   next to the respective Microsoft server and select **Edit** from the menu.
2. In the *Microsoft* *Server* *Properties* editor, you can set properties in the following tabs:
   
   - **General:** Modify the settings described in* *[*Assigning Grid Members to Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/configuring-members-to-manage-microsoft-servers).
   - **Services** **(DNS/DHCP)**: Modify DNS and DHCP synchronization settings. For more information, see [*Assigning Grid Members to Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/configuring-members-to-manage-microsoft-servers).
   - **Active** **Directory** **Domain/sites:** Modify Active Directory Site settings. For more information, see [*Assigning Grid Members to Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/configuring-members-to-manage-microsoft-servers).
   - **Extensible** **Attributes**: Define extensible attributes for the server. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions:** Define administrative permissions that apply to the server. For information see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Save the configuration and click **Restart** if it appears at the top of the screen.

You can edit the General and Logging properties of multiple Microsoft servers at the same time by selecting the Microsoft servers and clicking the Edit icon. When Grid Manager displays the *Microsoft* *Server* *Properties* editor, it displays the values that the Microsoft servers have in common. If a property has multiple values, it indicates this. You can then change any of the values and when you click **Save**, Grid Manager applies your changes to all the selected Microsoft servers.

# Changing the Managing Member or Management Mode

You can change the managing member and the management mode of a Microsoft server.  
If you change the managing member, the previous member aborts any ongoing synchronization, and the newly assigned member resumes the synchronization process.  
Note that if you switch the managing member or change the management mode of a Microsoft server from Read/Write to Read-only, the Grid member reverts any changes that were made from Grid Manager since the last synchronization. For example, an admin adds a network and DHCP range for a scope. If another admin changes the management mode of the Microsoft server to Read-only before the next synchronization, the Grid member deletes the network and DHCP range at the next synchronization.  
To change the member or management mode:

1. From the **Infoblox Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Servers** tab, select a Microsoft server and click the Edit icon, or click the Action icon next to the respective Microsoft server and select **Edit** from the menu.
2. In the *Microsoft* *Server* *Properties* editor, select the **General** tab and do any of the following:
   
   - **Managing** **Member:** Click **Select** **Member** and select another Grid member.
   - **Manage** **Server(s)** **in:** Select either **Read-only** or **Read/Write**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Backing Up Synchronized Data

When you back up the Grid, it includes all managed Microsoft data. If you restore a backup, the data is restored on the Grid only. It is not synchronized to the Microsoft servers. When the Grid member synchronizes the data after the restore operation, it overrides the data on the Grid with the data from the Microsoft servers. For information about backing up and restoring data, see [*Backing Up and Restoring Configuration Files*](https://infoblox-docs.atlassian.net/wiki/spaces/niosupgrade/pages/1321074738).

# Disabling Synchronization

When you set the disable option, the Grid member completes any on-going synchronization and does not start a new one. Setting this option only affects data synchronization and does not affect the operations of the Microsoft server. Synchronization resumes when the Microsoft server is re-enabled.  
To disable a Microsoft server:

1. From the **Infoblox** **Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Servers** tab, select a Microsoft server and click the Edit icon, or click the Action icon next to the respective Microsoft server and select **Edit** from the menu.
2. In the **General** tab, select the **Disable** **Synchronization** option.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Removing a Managed Microsoft Server

When you remove a Microsoft server from the Grid, the managing member stops any on-going synchronization and does not start a new one. If the Microsoft server served DNS, the synchronized DNS data remains unchanged in the Grid. If the Microsoft server served DHCP, then Grid Manager deletes all the DHCP ranges, leases, and fixed addresses associated with the server. It also deletes networks that were assigned only to the Microsoft server. It does not delete a network if it was assigned to other Microsoft servers as well.

Removing a managed Microsoft server from the Grid does not affect the operations of the Microsoft server.

To remove a managed server:

1. From the **Infoblox Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Servers** tab, select a Microsoft server and click the Delete icon, or click the Action icon next to the respective Microsoft server and select **Delete** from the menu.
2. When the *Delete* *Confirmation* dialog box appears, click **Yes**.

For information about how removing a Microsoft server affects the synchronized DNS and DHCP data, see [*Disabling and Removing Microsoft DNS Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-dns-services/disabling-and-removing-microsoft-dns-servers) and* *[*Disabling and Removing Microsoft DHCP Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-dhcp-services/managing-microsoft-dhcp-servers)*.*
