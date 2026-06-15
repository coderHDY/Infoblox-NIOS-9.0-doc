---
title: "Configuring an IPv6-only Grid"
source: "/space/nios90/280274984"
pageId: "280274984"
---
An IPv6-only Grid uses IPv6 as the communication protocol and it includes an IPv6 Grid Master and the Grid members, which can be either IPv6 or dual mode (IPv4 and IPv6). In order to configure an IPv6-only Grid, you have to first create an IPv6 Grid Master and then join the Grid members using their IPv6 addresses.  
The process of configuring an IPv6-only Grid involves the following steps:

1. Make a console connection to the Grid Master and configure an IPv6 address for the Grid Master using the CLI command set network. For information, see [*Method 2 – Using the CLI*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-independent-appliances/deploying-a-single-independent-appliance)*.*
2. Open a web browser and make an HTTPS connection to the IPv6 address of LAN1 port of the Grid Master.
3. Log in using the default username and password **admin** and **infoblox**. For detailed information about logging in to the GUI, see [*Logging on to the NIOS UI*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/logging-on-to-the-nios-ui).
4. The Grid Setup Wizard appears when you first log in to the appliance. You can use it to create an IPv6 HA Master or IPv6 single Grid Master. For information about creating an HA Master, see [*Creating an HA Grid Master*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/creating-a-grid-master/creating-an-ha-grid-master) and for information about creating a single Grid Master, see [*Creating a Single Grid  Master*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/creating-a-grid-master/creating-a-single-grid-master)[.](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Creating%20a%20Grid%20Master_old&linkCreation=true&fromPageId=280274984)   
   The type of network connectivity for the Grid Master should be set to IPv6. To verify, navigate to the **Infoblox** **Grid** tab -&gt; **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon. In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Basic** tab, check that the **Type** **of** **Network** **Connectivity** is set to **IPv6**. The Grid members can join the Grid Master using IPv6 only.
   
   Note:  
   You can add additional IPv4 and IPv6 addresses for LAN2 and MGMT ports for the Grid services, in the **Additional** **Ports** **and** **Addresses** table. But for an IPv6-only Grid, you can configure IPv6 address for the VLAN port.
5. Legacy Data Connector virtual machines are not supported on IPv6-only Grids.
6. Add IPv6 single members and HA members to the Grid. For information, see [*Adding Grid Members*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members).
   
   Note that to add a discovery member to an IPv6-only grid, add the member first and then install its discovery license. If the system displays the "Cannot configure IPv6-only settings on member because it has a discovery license installed." in the** Grid Member Properties Editor** dialog box of the discovery member, disregard the error message.
7. You can use the Grid Setup Wizard or access the *Join* *Grid* dialog box to join appliances to a Grid. See [*Joining Appliances to the Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members).

You can also configure IPv6 address for the MGMT interface of the appliance and join the Grid through the MGMT interface.

# Transforming to an IPv6-only Grid

After an upgrade, each node in the Grid is set to either IPv4 or dual mode (IPv4 and IPv6). Transforming an IPv4-only Grid to an IPv6-only Grid may take a longer duration. Hence, before removing the IPv4 addresses from each Grid member, you have to configure additional IPv6 Grid communication protocol for each Grid member so that all the services function properly using IPv6.  
Note the following before converting an IPv4-only or a dual mode Grid to an IPv6-only Grid:

- If a Grid member is designated as a Master Candidate, the Grid manager does not allow you to change the type of network connectivity of the Grid Master or the Grid Master Candidate. Therefore, you must disable the Grid member from being a Grid Master Candidate before changing the type of network connectivity of the Grid Master or the Grid Master Candidate. You can deselect the **Master** **Candidate** option in the **General** tab of the *Grid* *Member* *Properties* editor to disable a member from being a Master Candidate. Note that at this point, the Grid will not have a Grid Master Candidate and this may result in an unrecoverable condition, if the Grid Master goes down.
- You must stop all services on the Grid Master and Grid members that uses IPv4.
- If external servers like authentication servers, forwarders, root name servers, backup servers, etc. is configured with IPv4 addresses, then it will not work after converting the Grid to an IPv6-only Grid. Hence, make sure that you change the IPv4 address of the external server to IPv6 address before converting the Grid to an IPv6-only Grid.
  
  Note that Infoblox recommends that you back up the configuration after you convert a Grid to IPv6-only mode. Restoring the old backup by performing a forced restore, may prevent the Grid members from rejoining the Grid Master after the restore.

The process of transforming an IPv4-only or dual mode Grid to an IPv6-only Grid involves the following steps:

1. Convert the Grid Master into dual mode (IPv4 and IPv6) if it is in IPv4 mode, as follows:
   
   - Login to the Grid Master, from the **Infoblox Grid** tab -&gt; **Grid** **Manager** tab -&gt; **Members** tab -&gt; select the Grid Master and click the Edit icon.
   - In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Basic** tab.
   - In the **Type** ** of** ** Network ** **Connectivity** field, select **IPv4** ** and ** **IPv6** from the drop-down list and enter the network information for LAN1 (IPv6) address in the **Ports** ** and ** **Addresses** table.  
     For HA Master, select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **Over** field, and enter the network information for VIP (IPv6), Node1 LAN1 (IPv6), Node2 LAN1 (IPv6) in the **Ports** **and** **Addresses** table.
   - Save the configuration and click **Restart** if it appears at the top of the screen.
2. Similarly, convert all the Grid members into dual mode (IPv4 and IPv6) if it is in IPv4 mode. All the members will rejoin the Grid using IPv4.
3. Force each Grid member to rejoin the Grid using IPv6, as follows:
   
   - From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
   - In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Basic** tab.
   - In the **Always** **Force** **or** **Prefer** **this** **Communications** **Protocol** field, select **IPv6** from the drop-down list, and also select **IPv6** in the **Send** **HA** **and** **Grid** **Communication** **over** field if the member is an HA pair.  
     This setting will force the Grid member to rejoin the Grid using IPv6 and it uses IPv6 for all the services.
   - Save the configuration and click **Restart** if it appears at the top of the screen.
4. Configure each Grid member to provide DNS service using IPv6, as follows:
   
   - From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
   - In the *Member* *DNS* *Properties* editor, select the **General** tab -&gt; **Basic** tab.
   - Enable the IPv6 checkbox for the desired interface (LAN1, LAN2, or MGMT) under **DNS** **Interfaces**.
   - Ensure that the primary and secondary servers are configured with an IPv6 address for each zone, before disabling the IPv4 checkbox for LAN1, LAN2, or MGMT interface.
   - Save the configuration and click **Restart** if it appears at the top of the screen.
     
     Note:  
     When you transform an IPv4-only or dual mode Grid to an IPv6-only Grid, the LAN1 port for IPv4 is always enabled. The LAN1 port is disabled only when the Grid is configured using IPv6 from the beginning.
   - For vNIOS appliances, some of the options in the *DNS Interfaces* section may vary depending on your vNIOS configuration. For example, if you are using a single network interface instance of vNIOS for Google Cloud, you will see choices specific to the LAN1 interface only. For more information, see the vNIOS documentation specific to your product at [*Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).
5. Configure each Grid member to provide DHCP service using IPv6, as follows:
   
   - From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
   - In the *Member* *DHCP* *Properties* editor, select the **General** tab -&gt; **Basic** tab.
   - Disable the IPv4 checkbox for LAN1 and LAN2 interface under **DHCP** **Interfaces**.
   - Enable the IPv6 checkbox for the desired interface (LAN1 or LAN2) under **DHCP** **Interfaces**.  
     If IPv6 network is not configured, you can create an IPv6 network. For information, see [*Managing IPv6 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098)*.*
   - Save the configuration and click **Restart** if it appears at the top of the screen.
6. Enable each Grid member and the Grid Master to use IPv6 for all the services, as follows:
   
   - From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
   - In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Basic** tab, and select **Customized** **Settings** and specify the following:
     
     - **Always** **Force** **this** **Communication** **Protocol** **for**: Select **IPv6** from the drop-down list for the Grid and reporting service.
     - **Always** **Prefer** **this** **Communication** **Protocol** **for**: Select **IPv6** from the drop-down list as the preferred communication protocol for the listed services which has two types of resolution (A and AAAA records). The appliance uses the preferred protocol first for the service.
     - Save the configuration and click **Restart** if it appears at the top of the screen.
7. When all the services are functioning using IPv6, you can remove the IPv4 addresses from all the Grid members by converting the Grid member from dual mode (IPv4 and IPv6) to IPv6 mode, as follows.
   
   - From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
   - In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Basic** tab.
   - In the **Type** **of** **Network** **Connectivity** field, select **IPv6** from the drop-down list.
   - Save the configuration and click **Restart** if it appears at the top of the screen.
8. Similarly, you can convert the Grid Master from dual mode (IPv4 and IPv6) to IPv6 mode after converting all the Grid members to IPv6 mode.
   
   Ensure to remove the IPv4 addresses from the Grid Master only after you remove the IPv4 addresses from all the Grid members.
