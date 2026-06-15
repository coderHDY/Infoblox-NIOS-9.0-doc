---
title: "IPAM Home"
source: "/space/nios90/1345162224"
pageId: "1345162224"
---
The IPAM Home panel is an alternative view of an IPv4 and IPv6 network hierarchy. For a given network, the panel shows all the networks of a selected network view in table format. This panel displays only the first-level subnets. It does not show further descendant or child subnets. You can open a subnet to view its child subnets. Subnets that contain child subnets are displayed as network containers. If the number of subnets in a network exceeds the maximum page size of the table, the network list displays the subnets on multiple pages. You can use the page navigation buttons at the bottom of the table to navigate through the pages of subnets.

The IPAM home panel displays the following:

- **Network**: The network address.
- **Comment**: The information you entered about the network.
- **RIR Organization**: This appears only if support for RIR updates is enabled. This displays the name of the RIR organization to which the network is assigned.
- **RIR OrganizationID**: This appears only if support for RIR updates is enabled. This displays the ID of the RIR organization to which the network is assigned.
- **RIR RegistrationStatus**: This appears only if support for RIR update is enabled. This field displays the RIR registration status. This can be **Registered** or **Not Registered**. **Registered** indicates that the network has a corresponding entry in the RIPE database.
- **Last Registration Updated**: Displays the timestamp when the last registration was updated. The displayed timestamp reflects the timestamp used on the Grid Master.
- **Status of Last Registration Update**: Displays the registration status and communication method of the last registration update. The status can be Pending, Sent, Succeeded, or Failed. Each time you send a registration update to create, modify, or delete a network container or network, the updated status will be displayed here. If you have selected not to send registration updates, the previous status is retained.
- **IPAM Utilization:** For a network, this is the percentage based on the IP addresses in use divided by the total addresses in the network. For example, in a /24 network, if there are 25 static IP addresses defined and a DHCP range that includes 100 addresses, the total number of IP addresses in use is 125. Of the possible 256 addresses in the network, the IPAM utilization is about 50% for this network.  
  For a network container that contains subnets, this is the percentage of the total address space defined within the container regardless of whether any of the IP addresses in the subnets are in use. For example, when you define a /16 network and then 64 /24 networks underneath it, the /16 network container is considered 25% utilized even when none of the IP addresses in the /24 networks is in use.  
  You can use this information to verify if there is a sufficient number of available addresses in a network. The appliance updates the IPAM utilization data immediately for a network container, but for a network it is updated every 15 minutes.  
  The IPAM utilization data is displayed in one of the following colors:
- Red: The IPAM utilization percentage is above the configured Trigger value.
- Blue: The IPAM utilization percentage is below the configured Trigger value.
- **Active Users**: The number of active users on the selected network.
- **Discovery Engine**: Displays the discovery engine that performs the discovery process. This can be **Network Insight**, **NetMRI**, or **vDiscovery**. This field displays **None** if you have added or imported the network container or network manually.
- **Site**: The site to which the IP address belongs. This is a predefined extensible attribute.
- **Bridge Domain**: The name of the discovered bridge domain. This column will display values only for IP addresses that are discovered from Cisco APIC by Network Insight or NetMRI. If discovered by NetMRI, the value will be populated through IPAM Sync. Otherwise, this column will be blank. For information about how to configure Cisco APIC, see [*Configuring Cisco Application Policy Infrastructure Controller (APIC)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248). *    *
- **Tenant**: The name of the discovered tenant. This column will display values only for IP addresses that are discovered from Cisco APIC by Network Insight or NetMRI. If discovered by NetMRI, the value will be populated through IPAM Sync. Otherwise, this column will be blank. For information about how to configure Cisco APIC, see [*Configuring Cisco Application Policy Infrastructure Controller (APIC)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248)*.*

Additionally, you can select the following columns for display:

- **Disabled**: Indicates whether the network is disabled.
- **Leaf Network**: Indicates whether the network is a leaf network or not. A leaf network is a network that does not contain other networks.
- **Discovery Enabled**: (*Applies only with Network Insight*) Indicates whether discovery is allowed on the network container or the network.
- **Discover Now**: (*Applies only with Network Insight*) Indicates when the network is undergoing a current discovery process. A "Pending" icon appears in this column when you start the discovery and displays **Completed** after the completion of the discovery process.
- **Discovered VLAN ID**: (*Applies only with Network Insight*) The VLAN ID on the switch port.
- **Discovered VLAN Name**: (*Applies only with Network Insight*) The VLAN name on the switch port.
- **Assigned VLAN ID**: VLAN ID of the VLAN object assigned to the network.
- **Assigned VLAN Name**: VLAN name of the VLAN object assigned to the network.
- **VRF Name**: The name of the discovered VRF that uses IP addresses of the network, as discovered by Network Insight or NetMRI.
- **VRF Description**: The description of the discovered VRF.
- **VRF RD**: The address of the route distinguisher of discovered VRF.
  
  Note that as a general rule for the VRF-related columns, a column displays a specific value if there is a single non-empty value or several same values for the IP addresses in the network. Otherwise, the column displays “Multiple”. For example, if the VRF names for a network have the same value, the **VRF Name** column displays this value for the network. If more than one VRF are discovered for a network and their names are different, the **VRF Name** column displays “Multiple”. However, if for a number of VRFs there is only one VRF description or VRF RD value among other empty strings, the columns **VRF Description** and **VRF RD** display “Multiple” as this is regarded as distinct VRFs.
  
  To see values for each IP address in the network, click the network -> **List** tab.
- **BGP AS**: The number of the discovered BGP Autonomous System that uses IP addresses of the network.
  
  Note If more than one BGP AS are discovered for a network and their numbers are different, the **BGP AS** column displays “Multiple”. If the BGP AS numbers have the same value, the **BGP AS** column displays this value for the network. To see values for each IP address in the network, click the network -> **List** tab.
- **Managed**: (*AppliesonlywithNetworkInsight*) Indicates whether the network is set to Managed status under Grid Manager. For more information, see the section [*Converting*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*Unmanaged*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*under*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*IPAM*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*to*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*Managed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)[*Status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086).
- **First Discovered**: (*Applies only with Network Insight*) The date and timestamp of the first occasion that Grid Manager discovered the network.
- **Last Discovered**: (*Applies only with Network Insight*) The date and timestamp of the last occasion that Grid Manager performed discovery on the network. The timestamp is updated whenever any new IP from this network is discovered.
- **Extensible attributes and RIR attributes:** You can select the extensible attributes such as Building, Country, Region, State, and VLAN for display. When you enable support for RIR registration updates, you can also select associated RIR attributes for display. For information about RIR attributes, see [*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666911)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666911)[*RIR*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666911)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666911)[*Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666911).
- **Active Directory Sites**: You can also select Active Directory Sites for display. For information about Active Directory Sites, see [*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[*Active*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[*Directory*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[*Sites*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[*and*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[*Services*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)

The Toolbar and the Action menu provide access to actions you can take on the selected network where applicable, as follows:

- Click **Show Device View** to view the devices whose interfaces are in the selected network. To view device details and a list of all the interfaces associated with it, click the name of the device.
- Click **Convert** to change the status of an unmanaged network to managed status under IPAM.
- Click **Discover Now** to apply Network Insight discovery to a listed network.
- Click **Edit** to open the network editor.
- Click **Delete** to delete or schedule deletion of the selected network. To delete the network now, in the Delete Confirmation dialog box, click Yes. Grid Manager displays a warning message. Click Yes to continue or No to cancel the process.
- Click **Extensible Attributes** to open the network editor’s Extensible Attributes page for the selected network.
- Click **Permissions** to open the network editor’s Permissions page for the selected network.
- Click **Move Networks** to move a network to a destination Active Directory site.
- Click **Show Active Users** to view all the users who are currently active on the Active Directory domain.

You can sort the list of networks in ascending or descending order by columns. For information about customizing tables in Grid Manager, see [*Customizing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)[*Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).

You can also modify some of the data in the table fields. Double click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*Modifying Data in Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).

---

**Tip:** If you select a network from the list and switch to the Net Map panel, the network is also selected in the network map.

---
