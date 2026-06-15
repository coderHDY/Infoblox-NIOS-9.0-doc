---
title: "Configuring IPv4 Address Ranges"
source: "/space/nios90/280663590"
pageId: "280663590"
---
In a network, you define address ranges from which the DHCP server or failover association assigns IP addresses to client requests. When a DHCP client requests an IP address, the appliance allocates an address within a defined DHCP range. The DHCP client can use the assigned IP address until the lease expires.  
When you do not assign a DHCP server or failover association to an address range, the range becomes a reserved range. A reserved range contains IP addresses that are reserved for static hosts, not for dynamic assignments. You can allocate the next available IP from a reserved range.  
You can also apply filters to DHCP ranges to control how the DHCP server allocates IP addresses. For information about DHCP filters, see [*Configuring DHCP Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters).

# Adding IPv4 Address Ranges

To add an IPv4 address range:

1. Navigate to the IPv4 network to which you want to add an address range, and then select **Range** from the Add drop down menu.  
   or  
   From any panel in the DHCP tab, expand the Toolbar and click **Add** -&gt; **Range** -&gt; **IPv4**.
2. In the *Add IPv4 Range* wizard, select one of the following and click **Next**:
   
   - **Add Range**: Select this to add an address range from scratch.   
     or
   - **Add Range Using Template**: Click **Select Template** and select the template that you want to use. Note that when you use a template to create an address range, the configurations of the template apply to the new range. The appliance automatically populates the range properties in the wizard. You can then edit the pre-populated properties.
3. Complete the following:
   
   - **Network**: Click **Select Network**. Grid Manager displays the network address here if you have only one network configured. When there are multiple networks, Grid Manager displays the *Select Network* dialog box from which you can select one.
   - **Start:** Enter the first available IP address in the range.
   - **End:** Enter the last available IP address in the range.
   - **Name:** Optionally, enter a name for the range.
   - **Comment:** Enter additional information about the address range.
   - **Disabled for DHCP:** Select this if you want to save the configuration for the address range but do not want to activate the address range yet. You can clear this checkbox when you are ready to allocate addresses from this range.  
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). To delegate authority for this range, complete the following:  
     **Delegate authority from the Grid Master**
   - **Delegate** **To**: This field indicates whether the authority for the range you want to create has already been delegated to a Cloud Platform Appliance. Click **Select** to choose the Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field. This cloud member now assumes authority for this range, and the Grid Master does not have authority any more. You can also click **Clear** to remove authority delegation from the selected Cloud Platform Appliance and return authority back to the Grid Master.
4. Click **Next** and select one of the following:
   
   - **None (Reserved Range)**: Select this if you want to reserve this address range for static hosts. Addresses in this range cannot be allocated as dynamic addresses. You can allocate the next available IP from this range to a static host. This is selected by default.
   - **Grid Member:** Select this if you want a Grid member to serve DHCP for this address range. Select a Grid member from the drop-down list. The drop-down list displays only the Grid members that are associated with the network to which the DHCP range belongs.
   - **Failover Association:** Select this if you want a failover association to serve DHCP for this address range. Click **Select** **Association**. In the *DHCP* *Failover* *Association* *Selector* dialog box, choose a failover association, and then click the Select icon. The appliance lists failover associations that serve DHCP in the network view of the DHCP range. For information, see [*Configuring DHCP Failover*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover).
5. Click **Next** to configure or override DHCP options as described in [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/defining-ipv4-dhcp-options)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/About+IPv4+DHCP+Options#bookmark2266)  
     
   Steps 6-7 apply only in deployments using Network Insight discovery features. Otherwise, skip to Step 8.
6. Click **Next** to initiate or disable discovery of the new DHCP range.
7. Discovery settings include the following: **Enable Discovery** and **Immediate Discovery**, selecting a Probe member to perform the discovery; and **Polling Options**, which define how the network will be discovered by the Probe member. By default, all Polling Options discovery settings are inherited from the parent network unless you click **Override**. Polling Options govern the protocols used to query and collect information about the network devices being discovered. For more information, see the section [*Configuring Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties) for a complete description of discovery Polling Options.
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)
9. Save the configuration and click **Restart** if it appears at the top of the screen  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

For information on viewing address ranges in a network, see [Viewing IPv4 DHCP Objects](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/viewing-ipv4-dhcp-objects).

# Modifying IPv4 Address Ranges

You can modify settings for the DHCP range. You can also define an exclusion range to prevent the appliance from assigning the addresses in the exclusion range to clients. IP addresses in an exclusion range are excluded from the pool of IP addresses. For more information, see [*About Exclusion Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/managing-dhcp-data/Managing+DHCP+Data#About-Exclusion-Ranges).  
To modify an IPv4 address range:

1. From the **DataManagement** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* -&gt; *addr_range* checkbox, and then click the Edit icon.
2. The *DHCPRange* editor contains the following basic tabs from which you can modify data:
   
   - **General**: Modify the fields, except the network address, as described in Adding IPv4 Address Ranges above.  
     When the Cloud Network Automation license is installed on the Grid Master, Grid Manager displays the following information in the **Cloud** section: **Cloud** **Usage**, **Owned** **By**, and **Delegated** **To**. You cannot modify these fields. For more information, see Adding IPv4 Address Ranges above.
   - **Member** **Assignment**: Modify the Grid member or failover association that provides DHCP services for the DHCP range as described in Adding IPv4 Address Ranges above.
     
     
     
     When you change the member assignment of DHCP ranges from **Failover Association** to **Grid Member** and then back to **Failover Association**, the leases in the primary and secondary servers fall out of sync. To resynchronize the peers, the failover association of the secondary server is put in the Recover-Wait state for the entire duration of Maximum Client Lead Time while a forced recovery takes place. During this period, only the IP addresses allocated to the primary server are available for lease.
   - **IPv4** **DHCP** **Options**: Keep the inherited DHCP options or override them and enter unique settings for the DHCP range. For information, see [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/defining-ipv4-dhcp-options)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/About+IPv4+DHCP+Options#bookmark2266)
   - **Extensible Attributes**: You can add and delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes). You can edit values of inheritable extensible attributes by double clicking on the respective column. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform an inline editing. The *Descendant Actions* dialog box is displayed when you click **Save**. For information, see [*Managing Inheritable Extensible Attributes at the Parent and Descendant Level*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes). If you delete the value of an inheritable extensible attribute at the parent level, you can choose to preserve the descendant value or remove it. For information, see [*Deleting Inheritable Extensible Attributes Associated with Parent Object*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[s](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see* *[*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)* *[*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **IPv4 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the DHCP range. Note that you must click **Override** and select **Enable DDN Supdates** for the DDNS settings you configure in this tab to take effect. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns).
   - **IPv4 BOOTP/PXE**: Keep the inherited BOOTP properties or override them and enter unique settings for the DHCP range. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-ipv4-bootp-and-pxe-properties).
   - **Exclusion Ranges**: Configure a range of IP addresses that the appliance does not use to assign to clients. You can use these exclusion addresses as static IP addresses. Enter the start and end addresses of the exclusion range, and optionally, enter information about this exclusion range.
   - **IPv4 DHCP Thresholds**: Keep the inherited thresholds settings or override them and enter unique settings for the DHCP range. For information, see [*Configuring Thresholds for DHCP Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-thresholds-for-dhcp-ranges).
   - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

or

Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

# Controlling Lease Assignments

You can set parameters to control how the DHCP server responds to lease requests within a specific DHCP range. When you set a DHCP range to deny all leases requests, the appliance does not assign IP addresses within this range to DHCP clients. This is useful when you want DHCP clients with IP addresses within this range to obtain new IP addresses when they renew their leases. When a client with an IP address within this range broadcasts a DHCPREQUEST message for its old IP address, the authoritative DHCP server responds with a DHCPNAK. This causes the client to move to the INIT state and to send a DHCPDISCOVER message for a new IP address.  
You can also configure the DHCP server to assign or deny IP addresses within a DHCP range to known and unknown DHCP clients. Known clients include roaming hosts and clients with fixed addresses or DHCP host entries. Unknown clients include clients that are not roaming hosts and clients that do not have fixed addresses or DHCP host entries.  
To control how the appliance assigns leases to client requests:

1. **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; Networks tab -&gt; Networks -&gt; network -&gt;* addr_range* checkbox, and then click the Edit icon.
2. In the *IPv4* *Range* editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode. When the additional tabs appear, click the **IPv4** **DHCP** **Options** tab -&gt; **Advanced** tab and complete the following:  
     
   The **IPv4** **DHCP** **Options** tab is enabled when you select a **Grid** **Member** or **IPv4** **DHCP** **Failover** **Association** in the **Member** **Assignment** tab.
   
   - **Allow/Deny Clients**
     
     - **Known Clients**: Select this checkbox, and then select **Allow** or **Deny** from the drop-down list to assign or deny IP addresses within this range to known DHCP clients. Known DHCP clients include roaming hosts and clients with fixed addresses or DHCP host entries. Note that the appliance cannot deny an IP address to a fixed address within this range. You must disable the fixed address if you do not want it to obtain an IP address here.
     - **Unknown Clients**: Select this checkbox, and then select **Allow** or **Deny** from the drop-down list to assign or deny IP addresses within this range to unknown DHCP clients. Unknown DHCP clients include clients that are not roaming hosts and clients that do not have fixed addresses or DHCP host entries.
     - **Deny Leases**: Select **Deny all lease requests for this range** to deny all lease requests from DHCP clients.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Deleting IPv4 Address Ranges

To delete a DHCP range:

- From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* -&gt;* addr_range* checkbox, and then click the Delete icon.
