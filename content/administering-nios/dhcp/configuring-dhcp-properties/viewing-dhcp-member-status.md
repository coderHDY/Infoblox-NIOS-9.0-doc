---
title: "Viewing DHCP Member Status"
source: "/space/nios90/280404257"
pageId: "280404257"
---
You can view DHCP member status after you configure DHCP properties and start or stop DHCP services on a member. To view member status:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** section.
2. Grid Manager displays the following information:
   
   - **Name**: The name of the Grid member.
   - **Status**: The status of the DHCP services on the member. This can be one of the following:
     
     - **Not** **Running**: DHCP services have not been started on the member.
     - **Running**: The DHCP services are running properly on the member.
     - **Warning**: The member is connecting or synchronizing with its Grid Master.
     - **Error**: The member is offline, is not licensed (that is, it does not have a DNSone license with the Grid upgrade that permits Grid membership), is upgrading or downgrading, or is shutting down.  
       Note that you can mouse over on the informational icon next to the status to view detailed information.
   - **Comment**: The information you entered for the member.
   - **IPv4** **DHCP** **Failover Association** **Utilization**: The percentage of the total IPv4 DHCP failover association capacity utilized by the member. This is the percentage of the member’s failover association IP count versus 80% of the appliance’s total capacity (Threshold).   
     The Grid Manager displays a warning message when a DHCP member reaches or exceeds 90% of this threshold during configuration. If you choose to proceed after the warning, NIOS sends an alert through SNMP and email, and logs the event, providing an opportunity to take corrective action before service impact. For more information, refer [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1857683522](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1857683522).
   - **IPv4** **DHCP** **Utilization**: The percentage of the total IPv4 DHCP utilization of the member. This is the percentage of the total number of DHCP hosts, fixed addresses, reservations, and leases assigned to the member versus the total number of IP addresses (excluding IP addresses in the exclusion range) and all DHCP objects assigned to the member. Note that only enabled objects are included in the calculation. It does not include abandoned addresses or leases. The appliance updates the utilization data every 15 minutes. The appliance displays the utilization data in one of the following colors:
     
     - **Red**: The DHCP resources are 100% utilized.
     - **Yellow**: The utilization percentage is over the effective high watermark threshold.
     - **Blue**: The utilization percentage is below the effective low watermark threshold.
     - **Black**: The utilization percentage is at any number other than 100%, or within the effective thresholds.
   - **Site**: The site to which the member belongs. This is one of the predefined extensible attributes.

You can select the following additional columns for display:

- **Address**: The IP address of the member.
- **Static Addresses**: The number of static IP addresses.
- **Dynamic Addresses**: The number of dynamically assigned IP addresses.
- **IF-MAP Connection**: The status of the IF-MAP service connection on the member. This can be one of the following.
  
  - **Stopped**: The DHCP or IF-MAP service on the member is stopped, or the IF-MAP service is not enabled.
  - **Running**: The IF-MAP client is connected to the IF-MAP server and the IF-MAP service is running properly.
  - **Failed**: The IF-MAP client cannot publish data to the IF-MAP server due to some errors.
  - **Warning**: Some non-fatal errors occurred. The IF-MAP client attempts to reconnect to the server.

> **warning**
>
> ### Note
> 
> You can mouse over on the informational icon next to the status to view detailed information, including the status description and the timestamp when the status initially changed.

- **IF-MAP** **Last** **Update**: The timestamp the status of the IF-MAP service was last updated. For example, if the IF-MAP connection status is **Running** and this field shows 2011-11-20 12:30:42 EST, it means that an IF-MAP operation, such as a publish, was last completed on November 20, 2011 at 12:30:42 Eastern Standard Time.

To view status information about the IF-MAP connection on an independent appliance, from the **Data** **Management** tab -> **DHCP** tab, click **System** **DHCP** **Properties** from the toolbar. The appliance displays the following:

- **IF-MAP** **Connection**: The status of the IF-MAP service on the independent appliance. A color icon associated with the connection status appears before the status.
- **IF-MAP Connection Information**: Detailed information about the status. On a Grid member, this information appears when you mouse over on the informational icon.
- I**F-MAP Last Update**: The timestamp when the status of the IF-MAP service last changed.

> **warning**
>
> ### Note
> 
> For more information about these fields, see descriptions about Grid member status in this section.

You can view detailed information about a specific member by clicking the member link. Grid Manager displays the following information about the selected member:

- **Network**: The network assigned to the member.
- **Comment**: The information about the network.
- **IPv4 DHCP Utilization**: The percentage of the DHCP usage of the network. This is the percentage of the total number of fixed addresses, reservations, hosts, and active leases on the network over the total IP addresses in the range, excluding the number of addresses on the network. Note that only enabled objects are included in the calculation. It does not include abandoned addresses or leases.
- **Site**: The site to which the DHCP object belongs. This is one of the predefined extensible attributes. In the member panel, you can select the following additional fields for display:
- **Disabled**: Indicates whether the member is disabled or not.
- **IPAM Utilization:** When you define a network, this is the percentage based on the IP addresses in use divided by the total addresses in the network. For example, in a /24 network, if there are 25 static IP addresses defined and a DHCP range that includes 100 addresses, the total number of IP addresses in use is 125. Of the possible 256 addresses in the network, the IPAM utilization is about 50% for this network.

When you define a network container that contains subnets, this is the percentage of the total address space defined within the container regardless of whether any of the IP addresses in the subnets are in use. For example, when you define a /16 network and then 64 /24 networks underneath it, the /16 network container is considered 25% utilized even when none of the IP addresses in the /24 networks is in use.  
You can use this information to verify if there is a sufficient number of available addresses in a network. The IPAM utilization is calculated approximately every 15 minutes.

- Extensible attributes that associate with the network.

You can also sort the data in ascending or descending order by column. For information, see [*Customizing Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).

# Viewing DHCP Configuration Files

You can view the IPv4 and IPv6 DHCP configuration of a selected member. The format of the configuration file depends on the browser you use.  
To view the DHCP configuration of a selected member:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* checkbox.
2. Expand the Toolbar, select **View** **DHCP** **Configuration**, and then select either **IPv4** or **IPv6**. Grid Manager displays the IPv4 or IPv6 DHCP configuration of the selected member in a new browser. You can print and save the file using the corresponding functions in your browser.
