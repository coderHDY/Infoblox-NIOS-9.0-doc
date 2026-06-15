---
title: "File Distribution Storage"
source: "/space/nios90/280406938"
pageId: "280406938"
---
This section describes the storage capacity for file distribution, and how to manage file distribution storage settings.  
Maximum storage space allowed for all file distribution services on a Grid is equal to the storage space allowed on the Grid member with the smallest amount of space allowed.

Maximum storage space is shown in the below table.

*Maximum* *Storage* *Space* *by* *Platform* *Type*

| **Member** **Type** | **Description** | **Max** **Limit** |
| --- | --- | --- |
| INFOBLOX_MEMBER | All Infoblox appliances | 10GB |
| VNIOS_MEMBER | All virtual appliances (VMWare) | 5GB |
| VM_MEMBER | Virtual IPAM member (IPAM Free Ware) | 1GB |

# Usage Threshold Alerts

An SNMP trap generates an alarm message when a member nears storage capacity. The default threshold value is 90%, and the default reset value is 70%. If email notification is enabled, NIOS sends an email when either of these thresholds are reached.

- When the Grid member storage capacity reaches 100%, the SNMP trap generates a "High Usage" message. For information on how to modify the threshold values, see [*Configuring SNMP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492).
- File distribution clients will fail to PUT files if the file is large enough that it will put the member over the storage limit.

# Modifying File Distribution Storage Limits

1. From the **Data** **Management** tab, select the **File** **Distribution** tab, and then click **Grid** **File** **Distribution** **Properties** from the Toolbar.
2. In the *Grid* *File* *Distribution* *Properties* editor, complete the following:
   
   - **Storage** **Limit** **(MB)**: Enter the maximum storage space in megabytes.
   - **Include** **files** **and** **directories** **in** **system** **backup**: This is selected by default to ensure that the appliance includes the uploaded files in the backup. You can clear this checkbox to improve the backup performance if you have stored these files separately.
3. Save the configuration and click **Restart** if it appears at the top of the screen.  
   Note that to avoid data loss, after you change the storage limit FD services will be disrupted briefly and will take some time to resume. Wait until the File Distribution services are running again on the members before you upload any files.
