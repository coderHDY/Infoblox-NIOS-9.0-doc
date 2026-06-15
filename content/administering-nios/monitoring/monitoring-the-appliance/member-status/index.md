---
title: "Member Status"
source: "/space/nios90/280270399"
pageId: "280270399"
---
You can monitor the overall status, such as the memory usage and system temperature, of a Grid member or an independent appliance using the *Member* *Status* *(System* *Status)* widget on the Dashboard.   
  
To monitor the detailed status of a member, from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab.  
  
In the **Members** tab, Grid Manager displays the Grid Master first and then all other members in alphabetical order. If a member is an HA pair, you can click the arrow next to the member row to view information about the active and passive nodes. Grid Manager can display the following information for a selected member:

- **Name**: The name of the member.
- **HA**: Indicates whether the member is an HA pair.
- **Status**: The status of the Grid member. The current state of a Grid member is indicated by a colored background as follows:
  
  - Green: Indicates that the member is operating normally in a ‘Running’ state.
  - Yellow: Indicates that the member is in a 'Warning' state due to an operational problem. The member is operational, but has some issue that requires attention. This status shows in scenarios such as database capacity is full or the DHCP utilization percentage is over the threshold.
  - Red: Indicates that the member is not operational and is in a failed state or requires immediate action.  
    To know the details, go to the system log file by selecting* ***Administration** tab -> **Logs** tab -> **Syslog**.
  - Black: Indicates that the member is offline. It is labelled as ‘Offline’.  
    **Note**:  
    Some statuses appear with specific messages as follows:  
    For a vNIOS appliance whose license is revoked and is still operating in the Grid, Grid Manager displays a license violation warning here. You should immediately remove this member from the Grid.
- **IPv4** **Address**: The IPv4 address of the appliance, or the VIP of an HA pair.
- **IPv6** **Address**: The IPv6 address of the appliance, or the VIP of an HA pair.
- **Identify**: This field appears only if your appliance has the unit identification button. This can be On or Off. When you identify the appliance by pressing the UID button on the appliance or through the GUI or CLI command, this field displays On. Otherwise, this is Off.
- **DHCP**, **DNS**, **TFTP**, **HTTP**, **FTP**, **NTP**, **bloxTools**, **Captive** **Portal**, **DNS** **Accelerator** **usage**, **Reporting,** **Discovery,** **DNS Infrastructure** **Protection,** **Cloud-API,** **Threat** **Insight,** **TAXII**: The status icons indicate whether these services are running properly. For information about service status, see [*Monitoring Services*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662651).
- **Hardware** **Type**: The hardware type of the appliance.
- **Hardware** **Model**: Displays the hardware model of the appliance or the PayGo model (e.g.,** PAYGO_AWS**, **PAYGO_AZURE**, **PAYGO_GCP**) for PayGo instances
- **Serial** **Number**: The serial number of the appliance.
- **DB** **Utilization**: The current percentage of the database in use.
- **Host Platform**: The platform on which the appliance is running. For a vNIOS appliance, this field displays the name of the cloud management platform, such as **AWS**, **Azure**, **GCP**, or **VMware**, and for the vNIOS for Google Cloud appliance, if the NIOS instance is running on a single network interface, the field displays **GCP (Single Interface)**. For physical NIOS appliances, this displays **Physical**. For appliances running on the CentOS operating system, the **Host Platform** column displays **Red Hat**.
- **Hypervisor**: The hypervisor of the appliance
- **Comment**: Information about the member.

> **warning**
>
> ### Note
> 
> The placement of the **Host Platform** and **Hypervisor** columns may vary after a NIOS upgrade.

To turn the identification button on or off on the member, click the Hardware Identify icon from the horizontal navigation bar. Grid Manager displays a panel with the appliance name, status, and IP address. Hover your mouse over the row and click **Turn** **On** to turn the identification button on, or click **Turn** **Off** to turn it off.

## Detailed Status Panel

To view detailed status, select a member checkbox, and then click the Detailed Status icon. Grid Manager displays the *Detailed* *Status* panel. If the selected member is an HA pair, Grid Manager displays the information in two columns, one for the active node and the other for the passive. The *Detailed* *Status* panel provides detailed information described in the following topics:

*[children]*

You can modify some of the data in the table. Double click a row, and either modify the data in the field or select an item from a drop-down list. Click **Save** to save the changes. Note that some fields are read only.
