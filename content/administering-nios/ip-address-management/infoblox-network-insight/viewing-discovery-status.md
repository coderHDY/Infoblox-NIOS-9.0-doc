---
title: "Viewing Discovery Status"
source: "/space/nios90/280764003"
pageId: "280764003"
---
> **warning**
>
> ### Note
> 
> Opening Discovery Status for viewing requires Superuser permissions under Grid Manager.

You can view the complete discovery status of all devices or of selected devices.

To isolate devices for evaluation, use filtering to reduce the list. Click **Use** **Filter** at the top of the table and choose **IP** **Address**, **Name,** or **Overall** **Status** as the filter.

To view the discovery status, complete the following:

1. From the **Data** **Management** tab, select the **IPAM** or **Devices** tab.
2. In the Toolbar, click **Discovery** **Status**. The Discovery Status table is displayed.

The Discovery Status table lists detailed information about network devices and end hosts discovered through all methods, including SNMP, ICMP ping sweeps, and other processes. It includes:

- **IP** **Address**: the IPv4 or IPv6 address of the discovered device. You can filter the table by this value.
- **Name**: The name of the discovered device as reported through SNMP. You can filter the table by this value.
- **Type**: The discovered device type. Examples include **Router**, **NIOS**, **Switch-Router**, **Firewall**, **Load** **Balancer**, **LWAP**, and numerous others.
- **Overall** **Status**: Indicates the overall success or failure of the discovery task on the device. Hover the mouse over the device to see more detailed information about the discovery status, including the timestamp of the last discovery event, confirmation of detection ("Device Exists"), and the means of detection, which are usually methods such as SNMP, reading the ARP table or location through a Seed router. You can filter the table by this value.
- **Reached** **Status**: Indicates the reachability of the discovered device. Typically, devices are reported **Passed** for **Reached** **Status** if they are reachable through SNMP, a path trace through ICMP, or UDP-based path tracing for an IPv6 address.  
  You may see a **Reached** **Status** of **Passed** and still receive an **Overall** **Status** of **Failed**. This often occurs because either the CLI credentials or SNMP credentials provided for discovering the device do not work, or another problem occurs in some part of the discovery process.
- **SNMP** **Collection** **Enabled**: Indicates whether the managed device allows SNMP as a management protocol. This value shows **Yes** or **No**. You do not see any SNMP collection status updates if this value shows No.
- **SNMP** **Credential** **Status**: Indicates whether the correct SNMP credential is used by discovery. Usually shows simple **Passed** or **Failed** status. Passing the mouse over the Failed status reading for this column shows the location in the SNMP data collection where information gathering failed. The typical message for a failure of this type shows Failure to Authenticate, which simply means that the correct SNMP credentials have not been provided for either SNMPv1, SNMPv2c, or SNMPv3 as required and defined for the device's discovery configuration. The tooltip also displays the name of the credential group that was used to guess credentials for the device.  
  If **SNMP** **Credential** **Status** shows Failed, you do not see a value under **SNMP** **Collection** **Status**, because that is dependent on successful credential authentication. Should you succeed in SNMP Credential Authentication for a device, this value shows **Passed**.
- **SNMP** **Collection** **Status**: Indicates whether managed device information has been successfully collected from the device. If the current device shows an **SNMP** **Credential** **Status** of Failed, this field remains blank. Should you succeed in SNMP Credential Authentication, **SNMP** **Collection** **Status** may or may not show a Passed outcome. If the final outcome is successful, passing the mouse over the table value shows the SNMP data set that was successfully collected from the device. When the **SNMP** **Collection** **Status** is set to **Passed**, it indicates that the credentials provided in *Member Discovery Properties* for discovering the device are correct and discovery has been completed successfully on the device. For more information, see [*Defining the Discovery Member Type*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406342).
- **CLI** **Credential** **Status**: Reports the basic success state of CLI credential usage for device discovery. When you see a Failed status in this column, hover the mouse over the table value. Details related to failed CLI credentials normally relate to "Failed to Authenticate" events. (For more information, see the following subsection Analyzing Discovery Status.) If you define device discovery requirements to use both SNMP and CLI, and you receive complete SNMP discovery information but fail to authenticate for CLI, the **Overall** **Status** for the device remains as **Failed**. The tooltip also displays the name of the credential group that was used to guess credentials for the device.
- **CLI** **Collection** **Enabled**: indicates the CLI collection configuration state for the discovered or managed device. Possible values are **Yes** (CLI collection is enabled) or **No** (CLI collection is disabled for the device).
- **Fingerprint** **Status**: Shows the status of discovery of the device's OS through fingerprinting.
- **Last** **Update**: Timestamp showing the conclusion of the last data update for the current device.
- **First** **Seen**: Timestamp showing the initial discovery event.
- **Last** **Seen**: The date and time when the device was last successfully polled by discovery.
- **Last** **Action**: The last action performed by discovery upon the device after the discovery took place. Hover the mouse over this field to obtain details.

Visible columns can be changed in the Discovery Status window. At the top of any column header, click the down arrow tool, and choose **Columns** –> **Edit** **Columns**.

# Analyzing Discovery Status

When you see the Failed status for a device under **Overall** **Status**, the problem usually relates to issues in discovery data collection. When **Overall** **Status** shows a value of **Passed**, it indicates that everything has passed for the device. If the value is Failed, it indicates that one or more elements of the device have failed discovery. Your discovery settings have a great deal to do with what you see in the respective Status columns. You key on the Overall Status result and read columns to the right to narrow down possible causes. To start, you typically see three basic discovery credential configurations for network devices:

- SNMP credentials and no CLI credentials;
- SNMP credentials and CLI credentials;
- No SNMP credentials, CLI credentials only.

Begin by considering SNMP-only device discovery configurations. In the table, **Overall** **Status** shows only a simple Failed message with no detail. Go to the next data column, which is **Reached** **Status**. If the device proves reachable, this value shows Passed, indicating that discovery can successfully reach and query the device. If **Reached** **Status** shows Failed, this is the first and most fundamental problem, that the device cannot be Pinged or contacted in any way across the network.  
As an example, assume a **Reached** **Status** value of Passed. If the device is reachable, discovery can successfully attempt SNMP or CLI communication to the device. Beginning with SNMP, and assuming that SNMP collection is enabled, select the **SNMP** **Credential** **Status** counter. If it shows Failed, that normally indicates a Failure to Authenticate, which can be shown as a tooltip by hovering the mouse over the table field:   
  
  
A successful authentication also shows which protocol was used for SNMP authentication; SNMPv1, SNMPv2c or SNMPv3. This does not guarantee successful data collection through SNMP, however.  
The **SNMP** **Collection** **Status** counter shows possible Passed and Failed values. Hovering the mouse over a Failed value in this column shows a tooltip reporting the set of data that discovery could not collect through SNMP. When discovery encounters an error during collection of a specific data set (Forwarding table, or System identification data, for example), data collection stops and issues an error message and an SNMP trap, which is reported and also appears in the tooltip. If **SNMP** **Collection** **Status** shows a value of Passed, and discovery does not use CLI data collection on the device, discovery has successfully completed on the device.  
The **CLI** **Credential** **Status** counter also reports either Passed or Failed results, and uses tooltips to tell the user what is going on in more detail.   
   
CLI credentials failure messages are straightforward and can be tested by verifying login tuples or Enable passwords from the credential sets defined in discovery configuration.  
If you receive a **CLI** **Credential** **Status** value of Passed, the correct command-line admin login information is specified in the discovery configuration.  
For more information about checking and diagnosing discovery behavior for devices listed in the status table, see the following topic [*Executing Discovery Diagnostics*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273280).
