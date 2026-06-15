---
title: "Viewing the Replication Status"
source: "/space/nios90/1393918081"
pageId: "1393918081"
---
The *Replication* *Status* panel reports the status of the database replication between Grid members and Grid Master, and between the two nodes in an independent HA pair. You can use this information to check the health of the Grid and HA pair activity.  
To view the current replication status, from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab, and then click **Toggle** **Replication** **Status** **View**.  
Grid Manager can display the following replication information for each member:

- **Name**: The FQDN (fully qualified domain name) of the appliance.
- **Send** **Queue**: The size of the queue from the Grid Master to the Grid member.
- **Last** **Send**: The timestamp of the last replication information sent by the Grid Master.
- **Receive** **Queue**: The size of the queue from the Grid member to the Grid Master.
- **Last** **Receive**: The timestamp of the last replication information received by the Grid Master.
- **Member** **Replication** **Status**: The replication status between the member and the Grid Master. Grid Manager displays the status in green when the status is fine or red when the member is offline.
- **HA** **Replication** **Status**: The HA replication status between the active and passive nodes. The status is at the member level, not at the node level. Grid Manager displays the status in red when one of the nodes is offline.
- **Status**: The current operational status of the appliance. The status can be one of the following:
  
  - **Green**: The appliance is operating normally in a "Running" state.
  - **Yellow**: The appliance is connecting or synchronizing with its Grid Master.
  - **Red**: The Grid member is offline, is not licensed (that is, it does not have a DNSone license with the Grid upgrade that permits Grid membership), is upgrading or downgrading, or is shutting down.
- **IPv4** **Address**: The IPv4 address of the appliance or the VIP of an HA pair.
- **IPv6** **Address**: The IPv6 address of the appliance or the VIP of an HA pair.
- **Identify**: This field appears only if your appliance has the unit identification button. This can be **On** or **Off**. When you identify the appliance by pressing the UID button on the appliance or through the GUI or the CLI command, this field displays **On**. Otherwise, this is **Off**.
- **DHCP**, **DNS**, **TFTP**, **HTTP**,**FTP**, **NTP**, **bloxTools**, **Captive** **Portal,** **DNS** **Accelerator** **Usage,** **Discovery,** **Reporting**: The current status of the service. The status can be one of the following:
  
  - **Green**: The service is enabled and running properly.
  - **Yellow**: The service is enabled, but there may be some issues that require attention.
  - **Red**: The service is enabled, but it is not running properly. A red status icon can also appear temporarily when a service is enabled and begins running, but the monitoring mechanism has not yet notified the Infoblox GUI.
  - **Gray**: The service is not configured or it is disabled.
- **Hardware** **Type**: The hardware type of the appliance, such as IB-1400.
- **Serial** **Number**: The serial number of the appliance.
- **DB** **Utilization**: The percentage of the database that is currently in use.
- **Comment**: Information about the appliance.
- **Site**: The location to which the member belongs. This is one of the predefined extensible attributes.
- **HA**: Indicates whether the member is an HA pair. If the member is an HA pair, Grid Manager displays the status of the HA pair.
- **Hardware** **Model**: The hardware model of the appliance.

You can do the following:

- Use filters and the **Go** **To** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria.
- Modify some of the data in the table. Double-click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*About the Grid Manager Interface*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).
- Edit the properties of a member.
  
  - Click the checkbox beside a member, and then click the Edit icon.
- Delete a member.
  
  - Click the checkbox beside a member, and then click the Delete icon.
- Export or print the list.
