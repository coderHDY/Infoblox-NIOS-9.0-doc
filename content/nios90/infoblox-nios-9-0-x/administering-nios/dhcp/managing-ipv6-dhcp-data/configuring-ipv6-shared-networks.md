---
title: "Configuring IPv6 Shared Networks"
source: "/space/nios90/280403994"
pageId: "280403994"
---
You can combine two or more contiguous IPv6 networks into a shared network. When you do, the DHCP server allocates IP addresses from both subnets. To create a shared network, create the individual subnets, and then create the shared network and add the subnets to it. For more information about shared networks, see *A*[*bout Shared Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/managing-dhcp-data).

# Adding IPv6 Shared Networks

To add an IPv6 shared network:

1. Select the **Data** **Management** tab.
2. If you have more than one network view in the system, select the network view in which you want to add the network.
3. Select the **DHCP** tab -&gt; **Networks** tab.
4. In the **Shared** **Networks** section, click the **Add** drop-down list and select  **Shared Network**-&gt; **IPv6 **or or, click the Add icon drop-down list and select **IPv6 Shared Network**.
5. In the *Add* *IPv6* *Shared* *Network* wizard, do the following:
   
   - **Name**: Enter the name of the shared network.
   - **Comment:** Enter information about the shared network.
   - **Disabled:** Select this if you want to enable the shared network at a later time. You can disable and enable existing networks instead of removing them from the database. This feature is especially helpful when you have to move or repair the server for a particular network.
6. Click **Next** and do the following to add networks:
   
   1. Click the Add icon.
   2. In the *Network* *Selector*, select the networks that you want to include in the shared network. Ensure that the networks are served by the same Grid members to avoid DHCP inconsistencies.
7. Click **Next** to configure DHCP properties described in [*Defining General IPv6 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties).
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes for the shared network. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
9. Save the configuration or click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

For information on viewing shared networks, see [*Viewing Shared Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-shared-networks).

# Modifying IPv6 Shared Networks

To modify a shared network:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Shared** **Networks** section -&gt;* shared_network* checkbox, and then click the Edit icon.
2. The *IPv6* *Shared* *Network* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify the fields **Name**, **Comments**, and **Disabled** as described in the previous section, Adding IPv6 Shared Networks.
     
     - **Networks**: Displays the networks that are currently assigned to the shared network. You can add or delete a network. To add a network, click the Add icon. To delete a network, select the *network* checkbox, and then click the Delete icon.
   - **IPv6** **DHCP** **Options**: Keep the inherited DHCP properties or override them and enter unique settings for the shared network. For information, see [*Defining General IPv6 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties).
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-radius/managing-permissions).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **IPv6 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the shared network. Note that you must click **Override** and select **Enable DDNS updates** for the DDNS settings you configure in this tab to take effect. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns).
   - **Filters**: You can keep the inherited IPv6 logic filters or override them and add a new IPv6 logic filter. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).  
       
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

# Deleting IPv6 Shared Networks

Though you can delete the networks in a shared network, a shared network must have at least one network in it. To delete a shared network:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Shared** **Networks** section -&gt;* shared_network* checkbox, and then select **Delete** or **Schedule** **Delete** from the drop-down menu.
2. To delete the shared network now, in the *Delete* *Confirmation* dialog box, click **Yes**. To schedule the deletion, see [*Scheduling New IPAM/DHCP Objects and Associated Port Configurations*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-).

The appliance puts the deleted shared network in the Recycle Bin, if enabled.
