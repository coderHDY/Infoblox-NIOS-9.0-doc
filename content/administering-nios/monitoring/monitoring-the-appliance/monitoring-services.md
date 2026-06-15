---
title: "Monitoring Services"
source: "/space/nios90/280662651"
pageId: "280662651"
---
The Grid or device status icon and the service icon indicates whether a service running on a member or an independent appliance is functioning properly or not.

# Service Status

After you enable any of the services — DHCP, DNS, TFTP, HTTP (for file distribution), FTP, NTP, bloxTools, Captive Portal, Reporting, Discovery, DNS Infrastructure Protection and Cloud API — the appliance indicates their status as follows:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
| *[image: media]* | Green | The service is enabled and running properly. |
| *[image: media]* | Yellow | The service is enabled, but there may be some issues that require attention. For DNS Infrastructure Protection, this could mean that one of the members is in monitor mode. |
| *[image: media]* | Red | The service is enabled, but it is not running properly. (A red status icon can also appear temporarily when a service is enabled and begins running, but the monitoring mechanism has not yet notified Grid Manager.) |
| *[image: media]* | Gray | The service is not configured or it is disabled. |

> **warning**
>
> **Note**
> 
> When you enable reporting service on the Grid and configure multi-site cluster, you can monitor the status of all reporting members that you have configured. For information about reporting clusters, see *[Configuring Reporting Clustering](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)*.

# Monitoring Grid Services

The status icon of a Grid service represents the status of the most critical service in the Grid. For example, if the Grid DHCP status icon is red, the DHCP service on one of the members in the Grid is not running properly. You can click the DHCP service link to view the service status of all Grid members and identify which member has a service problem. You can then decide to start or stop the service, or modify the service configuration on that member.  
To monitor a Grid service:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then click a service link.
2. Grid Manager displays the following information in the **Services** tab:
   
   - **Name**: The name of the member.
   - **Service** **Status**: The current status of the service.
   - **IPv4** **Address**: The IPv4 address of the appliance or the VIP of an HA pair.
   - **IPv6** **Address**: The IPv6 address of the appliance or the VIP of an HA pair.
   - **Comments**: Information about the member or service.
   - **Site**: The site to which the member belongs. This is one of the predefined extensible attributes.   
     You can select available extensible attributes for display.
   - **Reporting** **Site**: This field appears only when you enable the reporting service and configure the multi-site cluster. For information about how to configure the multi-site clustering mode, see *[Configuring Reporting Clustering](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)*.

> **warning**
>
> **Note**
> 
> The **Reporting** **Site** column is hidden by default. To display this column, click the down arrow next to any column header and select **Columns** -> **Edit** **Columns** -> **Reporting** **Site** checkbox and click **Apply**. If the **Reporting** **Site** column is visible, then the extensible attribute value is automatically updated.

3. Optionally, click the Edit icon next to the service name to edit the Grid properties for the service.

or

Select a member checkbox, and do one of the following:

- Click the Edit icon to edit the member service configuration. Grid Manager displays the editor for the corresponding service. For example, when you edit the DHCP service, Grid Manager displays the *Member** DHCP** Configuration* editor.
- Click the Start icon to start the service.
- Click the Stop icon to stop the service.
- Grid Manager updates the service status based on your action.

# Monitoring Member Services

You can view detailed service status on a selected member. Optionally, you can start and stop a service, and edit the service configuration.  
To monitor a member service:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *member* checkbox, and then click the Manage Member Services icon.  
   In the *Manage* *Services* panel, Grid Manager displays the following information:
   
   - **Service**: The name of the service.
   - **Status**: The current status of the service running on the member.
   - **Description**: The description of the status. Grid Manager displays the percentage of usage for the TFTP, HTTP (File Distribution), FTP, and bloxTools services.
2. Optionally, mouse over a service and do one of the following:
   
   - **Start/Stop**** Service**: Click this icon to start or stop the selected service. For example, when the DNS service is currently stopped, the appliance starts the service when you click this icon.
   - **Edit**** Service**: Click this icon to edit the selected service. Grid Manager displays the corresponding editor. For example, when you click the Edit Service icon for DNS, Grid Manager displays the *Member** DNS **Configuration* editor.
3. Click the Refresh icon to update the service status.
