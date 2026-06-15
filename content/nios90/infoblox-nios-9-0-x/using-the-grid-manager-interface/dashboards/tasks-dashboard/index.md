---
title: "Tasks Dashboard"
source: "/space/nios90/280759015"
pageId: "280759015"
---
The Tasks Dashboard provides easy access to commonly performed tasks, such as adding networks and adding host records. Tasks are grouped by service-specific task packs. You must install valid licenses on the appliance to see and perform specific tasks on the Tasks Dashboard. For information about the required licenses for IPAM tasks, see [*IPAM Task Pack*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/ipam-task-pack)*.*  
You must also have at least read-only permission to a task-related object to add or hide the task in its task pack. To execute a task, you must have the appropriate permissions to the member and objects that are related to the tasks. For example, to add a host record from the Tasks Dashboard, you must have at least read-only permission to the host records task and read/write permission to the zone and network in which the host records are created. For information about permissions, see [*Administrative Permissions for Common Tasks*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-common-tasks).

# Task Packs

Grid Manager displays task packs, including the IPAM and NetMRI task packs, based on valid licenses installed on the appliance. To access the IPAM task pack, you must have valid DNS or DHCP license installed on the NIOS appliance. To access the Automation task pack, you must first set up an Infoblox NetMRI appliance, install the Automation Change Management license on the NIOS appliance, and register as a user. For information about how to activate the Automation task pack, refer to the *Infoblox* *NetMRI* *Administrator* *Guide*.

> **warning**
>
> ### Note
> 
> The Tasks Dashboard will not appear in the NIOS system if no task packs are licensed for the system. Some task packs will also have dependencies. For example, the NetMRI Task Pack licensing activates along with either the MS license or the NIOS DHCP/DNS combination license. Should either of those licenses be disabled for any reason, the NetMRI Tasks will also be disabled.

To use the Automation Task Pack, you must enable the NetMRI Tasks feature set and establish a working connection between the NIOS appliance and an Infoblox NetMRI appliance. See [*Enabling NetMRI Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/netmri-task-pack)* *for details. Each task in a task pack opens a workflow dialog in which you can create task-related objects without navigating through other tabs and editors in Grid Manager. Depending on the task you perform, Grid Manager displays task results in the Result page from which you can access newly created objects, such as networks and host records. Note that when a task takes longer than usual to complete, it becomes a long running task. For information about long running tasks, see [*About Long Running Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/about-long-running-tasks).  
With valid licenses and proper registrations, Grid Manager displays the following task packs in the Tasks Dashboard:

*[children]*
