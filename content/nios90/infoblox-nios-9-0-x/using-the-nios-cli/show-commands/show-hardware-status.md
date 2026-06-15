---
title: "show hardware_status"
source: "/space/nios90/280397358"
pageId: "280397358"
---
The` ``show`` ``hardware_status``
  ` command displays information about the various hardware type and platform of a NIOS appliance. It displays the power supply status, fan speed, the CPU, system temperature, and status of the RAID array, disks and battery.

# Syntax

`show hardware_status`

This command has no arguments.

# Example

The following example displays the status of an Infoblox-TE-2306.

`Infoblox &gt; show hardware_status`  
`CPU_TEMP:   37 C`  
`SYS_TEMP:  30 C`  
`POWER:    Power #1 OK TYPE:AC FRU-ID:PWS-606P-1R SN:P606PCL27DB1068`  
`POWER:    Power #2 OK TYPE:AC FRU-ID:PWS-606P-1R SN:P606PCL27DB1061`  
`FAN1:     7500`  
`FAN2:     7600`  
`FAN3:     7500`

`RAID_ARRAY: OPTIMAL`  
`RAID_DISK1: ONLINE, IB-TypeUnk`  
`RAID_DISK2: ONLINE, IB-TypeUnk`  
`RAID_DISK3: ONLINE, IB-TypeUnk`  
`RAID_DISK4: ONLINE, IB-TypeUnk`  
`RAID_BATTERY: RAID battery OK`



The following are notes about the output:

- POWER: Displays the status of the power supply. The Infoblox TE-2306 and TE-4106 have redundant power supplies. If one power supply fails, the line displays POWER FAIL. To find out which power supply failed, check the LEDs of the power supplies.
- Fan1, Fan2, Fan3: Displays the fan speed. The Infoblox TE-2306 has three fans, therefore the sample output displays the speed of each fan. If a fan is not functioning, the output displays 0 RPM.
- `CPU_TEMP: `Displays the CPU temperature.
- SYS TEMP: Displays the operating temperature of the appliance.
- RAID ARRAY: Displays the status of the RAID array of an Infoblox TE-2306. If at least one disk is not functioning properly, this line indicates that the RAID array is degraded and lists the disks which are online. It also indicates when the RAID array is rebuilding. If there is a disk mismatch, this line indicates so and lists all the RAID disks and their disk types.
- RAID BATTERY: This line reports the status of the disk controller backup battery. It includes the following information:
  
  - Charge status: Displays either OK or CHARGING.
  - Ready status: Displays either READY YES or READY NO.
  - Hours: Displays the estimated number of hours remaining on the battery.

> **warning**
>
> **Note**
> 
> This command is not supported on vNIOS appliances on VMware/cloud. The vNIOS appliance displays No sensors present when you enter this command.
