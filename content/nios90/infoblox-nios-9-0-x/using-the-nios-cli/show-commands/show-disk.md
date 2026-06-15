---
title: "show disk"
source: "/space/nios90/280756939"
pageId: "280756939"
---
The `show disk` command displays the disk space that is used. Use this command to verify the amount of free disk space on the NIOS and vNIOS virtual appliances. Infoblox recommends that you monitor available disk space. If disk usage approaches maximum capacity, contact Infoblox Support. For more information about how NIOS partitions its disk, see [VM Disk Partition](/nios90/infoblox-nios-9-0-x/installing-nios/vm-disk-partition). For information about the disk usage icons, see [Disk Usage](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status/disk-usage).



> **warning**
>
> **Note**
> 
> The `show disk` command may not display the "Overall disk capacity" field when the appliance is deployed using a resizable image and the disk size is increased after the first boot. To ensure full disk recognition, use a fixed-size image or resize the resizable image disk before powering on for the first time. Disks cannot be resized after the first boot.

# Syntax

`show disk`

This command has no arguments.

# Examples

NIOS Appliance with 1TB disk

`Infoblox &gt; show disk`  
`                      Capacity   Available   Use%`  
`Disk space for data:    404G       352G       9%`

`Infoblox&gt;`

vNIOS Appliance with 500GB disk

`Infoblox &gt; show disk`  
`                      Capacity   Available   Use%`  
`Disk space for data:   225G       194G       10%`

`Infoblox&gt;`
