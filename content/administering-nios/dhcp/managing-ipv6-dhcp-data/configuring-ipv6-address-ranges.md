---
title: "Configuring IPv6 Address Ranges"
source: "/space/nios90/280270891"
pageId: "280270891"
---
You can configure IPv6 ranges that are used to delegate IPv6 prefixes only, to assign IPv6 addresses only, or to delegate IPv6 prefixes and assign IP v6 addresses. When you define a DHCP range to delegate prefixes, the prefixes can be outside of the network where they are being defined. IPv6 ranges inherit their properties from their network, so each range in a subnet provides the same set of options to their DHCP clients.  
Note that when an Infoblox DHCP server grants IPv4 leases, it starts from the last IP address in the range to the first. When the server grants IPv6 leases, it uses an algorithm based on the DUID of the client.

# Adding IPv6 Address Ranges

To add a an IPv6 address range:

1. Navigate to the IPv6 network to which you want to add an address range, and then select **Range** from the Add drop down menu.  
   or  
   From any panel in the DHCP tab, expand the Toolbar and click **Add** -> **Range** -> **IPv6**.
2. In the *Add* *IPv6* *Range* wizard, select one of the following and click **Next**:
   
   - **Add** **IPv6** **Range:** Select this to add an address range from scratch.   
     or
   - **Add** **IPv6** **Range** **Using** **Template**  
       
     Click **Select Template** and select the template that you want to use. Note that when you use a template to create a DHCP range, the configurations of the template apply to the new range. The appliance automatically populates the address range properties in the wizard. You can then edit the pre-populated properties. For more information, see [*About IPv6 Range Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404070).
3. Complete the following:
   
   - **Network**: Click **Select Network**. Grid Manager displays the network address here if you have only one network configured. When there are multiple networks, Grid Manager displays the *Select Network* dialog box from which you can select one.  
       
     Specify one of the following:
   - **Address**: Select this if the address range is used to allocate IPv6 addresses only to DHCP clients, and then enter the start and end addresses in the range.
   - **Prefix Delegated**: Select this if the DHCP server uses this address range to delegate IPv6 prefixes only to DHCP clients. Enter the start and end prefixes, and the prefix length.
   - **Both:** Select this if the DHCP server delegates IPv6 prefixes and allocates IPv6 addresses from this range. Enter the start and end addresses in the range, and the start and end prefixes, and the prefix length.  
       
     Complete the following:
   - **Name:** Enter a name for the address range.
   - **Comment:** Enter additional information about the address range.
   - **Disabled for DHCP:** Select this if you want to save the configuration for the address range but do not want to activate the address range yet. You can clear this checkbox when you are ready to allocate addresses from this range.  
       
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966). To delegate authority for this range, complete the following:  
       
     **Delegate authority from the Grid Master**  
       
     **DelegateTo: **This field indicates whether the authority for the range you want to create has already been delegated to a Cloud Platform Appliance. Click **Select** to choose the Cloud Platform Appliance to which you want to delegate authority. The *Member Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field. This cloud member now assumes authority for this range, and the Grid Master does not have authority any more. You can also click **Clear** to remove authority delegation from the selected Cloud Platform Appliance and return authority back to the Grid Master.
4. Click **Next** and select one of the following to provide DHCP services for the DHCP range:
   
   - **None (Reserved Range)**: Select this if you want to reserve this address range for static hosts. Addresses in this range cannot be allocated as dynamic addresses. You can allocate the next available IP from this range to a static host. This is selected by default.
   - **Grid Member:** Select this if you want a Grid member to serve DHCP for this DHCP range. Select a Grid member from the drop-down list. The drop-down list displays only the Grid members that are associated with the network to which the DHCP range belongs.
5. (*Applies only to Network Insight*) Click **Next** to initiate or disable discovery of the new DHCP range.
   
   - **Configuring one network**: Discovery settings include the following: **Enable Discovery** and **Immediate Discovery**, selecting a Probe member to perform the discovery; and **Polling Options**, which define how the network will be discovered by the Probe member using SNMP and CLI credentials. By default, all Polling Options discovery settings are inherited from the parent network unless you click **Override**. Polling Options govern the protocols used to query and collect information about the network devices being discovered. See the section [*Configuring Discovery Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248)* *for a complete description of discovery Polling Options.
6. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#UsingExtensibleAttributes)
7. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[*Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).

# Setting the Priority of IPv6 Address Ranges

The DHCP server allocates IP addresses from the configured DHCP ranges according to the order in which the ranges are listed. By default, ranges are listed according to their start addresses. You can move the ranges up and down in the list to change their order. For information about viewing DHCP ranges and other objects in a network, see [*Viewing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270869) [*IPv6*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270869)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270869)[*DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270869)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270869)[*Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270869).  
To change the order of DHCP ranges in a network:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> *network*.
2. Expand the Toolbar and click **Order** **DHCP** **Ranges**.
3. In the *Order* *DHCP* *Ranges* dialog box, click the up and down arrows to move ranges up or down on the list. The Priority value changes accordingly. Click **OK** to save the configuration.

# Modifying IPv6 Address Ranges

To modify an IPv6 address range:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Edit icon.
2. The *DHCP* *Range* editor contains the following basic tabs from which you can modify data:
   
   - **General**: Modify the fields, except the network address, as described in Adding IPv6 Address Ranges above.  
     When the Cloud Network Automation license is installed on the Grid Master, Grid Manager displays the following information in the **Cloud** section: **Cloud** **Usage**, **Owned** **By**, and **Delegated** **To**. You cannot modify these fields.
   - **Member** **Assignment**: Modify the Grid member that provides DHCP services for the DHCP range as described in Adding IPv6 Address Ranges above.
   - **Discovery**: You can enable and change discovery settings for the IPv6 range at any time after creating the range. Discovery settings include the following: **Enable** **Discovery** and **Immediate** **Discovery**, selecting a Probe member to perform the discovery; and **Polling** **Options**, which define how the network will be discovered by the Probe member using SNMP and CLI credentials. By default, all Polling Options discovery settings are inherited from the parent network unless you click **Override**. Polling Options govern the protocols used to query and collect information about the network devices being discovered. See the section [*Configuring Discovery Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248)for a complete description of discovery Polling Options.
   - **Discovery** **Blackout**: Define extended time periods and regularly scheduled times when discovery and/or port configuration tasks will not take place on a network or DHCP range. Editing a network or range under DHCP, blackout settings apply only to the specified network or range. You also specify the scheduled time when the blackout period begins, and the duration of the blackout period. By default, the network inherits its discovery blackout settings from the Grid level. For related information, see [*Defining Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071) and its subsections.
   - **IPv6** **DHCP** **Options**: Keep active leases in a deleted DHCP range. For more information, see [*Keeping Leases in Deleted IPv4 and IPv6 Networks and Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881/Configuring+DHCP+IPv4+and+IPv6+Common+Properties#Keeping-Leases-in-Deleted-IPv4-and-IPv6-Networks-and-Ranges).
   - **Extensible** **Attributes**: You can add and delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **Exclusion Ranges**: Configure a range of IP addresses that the appliance does not use to assign to clients. You can use these exclusion addresses as static IP addresses. For more information, see [*About Exclusion Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271474/Managing+DHCP+Data#About-Exclusion-Ranges).
   - **Filters**: You can keep the inherited IPv6 logic filters or override them and add a new IPv6 logic filter. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
       
     Note that Grid Manager displays both the basic and advanced mode tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).

# Deleting IPv6 Address Ranges

To delete an IPv6 address range:

- From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Delete icon.
