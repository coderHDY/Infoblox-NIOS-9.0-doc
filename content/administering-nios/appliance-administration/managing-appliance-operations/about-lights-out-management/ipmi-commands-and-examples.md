---
title: "IPMI Commands and Examples"
source: "/space/nios90/1395884325"
pageId: "1395884325"
---
This section describes some of the most commonly used IPMITool commands and examples. For more information about the IPMI commands and usage, visit the IPMItool web site a [ ](http://ipmitool.sourceforge.net/) [http://ipmitool.sourceforge.net](http://ipmitool.sourceforge.net) .  
To use IPMI commands, complete the following:

1. Ensure that you have properly enabled and configured LOM and the IPMI network interface.
2. Install IPMITool on a Linux management system. For information, visit the IPMItool web site at[ ](http://ipmitool.sourceforge.net/)[http://ipmitool.sourceforge.net](http://ipmitool.sourceforge.net) .  
   Access IMPITool and enter an IPMI command to perform a specific task. The appliance displays the corresponding output.  
   Following are some of the most commonly used IPMI commands and their sample outputs. Note that command outputs vary by appliances. The following sample commands were performed on a Trinzic 1415 appliance. All sample commands in this section use the following syntax:  
   `ipmitool -H &lt;LOMIPAddress&gt; -U  username -P password -L [OPERATOR/USER] -I lanplus &lt;supported commands&gt;`

> **warning**
>
> ### Note
> 
> If you reset IB-2225 using LOM and the interval between power off and power on is lower than 10 minutes, a hardware watchdog timeout message may be displayed in the syslog and may reset the newly powered on system thus putting it in an unstable state. If the interval is longer, the watchdog timer is released before the system is up, and a restart will bring the system in a good state without the watchdog timeout messages.

## Command to be Used with Caution

` power reset variant`

---

Caution: Using this command has the same effect as pulling the power cord off the appliance.

---

## Checking Power Status with User Role

Command:  
`ipmitool -H 10.37.2.70 -U user -P infoblox -L USER -I lanplus power status`  
Command output:  
`Chassis Power is on`

## Checking Various Sensors [Temperature, Voltage, FANS, Physical Security, Power supply, OEM] with User Role

Command:  
`ipmitool -H 10.37.2.70 -U user -P infoblox -L USER -I lanplus sensor`  
Command output:  
`System Temp | 23.000 | degrees C | ok | -9.000 | -7.000 | -5.000 | 75.000 | 77.000 | 79.000`  
` CPU Temp | 0x0 | discrete | 0x0000| na | na | na | na | na | na`  
` FAN 1 | 10390.000 | RPM | ok | 215.000 | 400.000 | 585.000 | 29260.000 | 29815.000 |`  
` 30370.000`  
` FAN 2 | na | RPM | na | na | na | na | na | na | na`  
` FAN 3 | 9835.000 | RPM | ok | 215.000 | 400.000 | 585.000 | 29260.000 | 29815.000 |`  
` 30370.000`  
` FAN 4 | 11870.000 | RPM | ok | 215.000 | 400.000 | 585.000 | 29260.000 | 29815.000 |`  
` 30370.000`  
` FAN 5 | 10390.000 | RPM | ok | 215.000 | 400.000 | 585.000 | 29260.000 | 29815.000 |`  
` 30370.000`  
` CPU Vcore | 0.832 | Volts | ok | 0.640 | 0.664 | 0.688 | 1.344 | 1.408 | 1.472`  
` +3.3VCC | 3.264 | Volts | ok | 2.816 | 2.880 | 2.944 | 3.584 | 3.648 | 3.712`  
` +12 V | 11.978 | Volts | ok | 10.494 | 10.600 | 10.706 | 13.091 | 13.197 | 13.303`  
` CPU DIMM | 1.528 | Volts | ok | 1.152 | 1.216 | 1.280 | 1.760 | 1.776 | 1.792`  
` +5 V | 5.088 | Volts | ok | 4.096 | 4.320 | 4.576 | 5.344 | 5.600 | 5.632`  
` -12 V | -12.486 | Volts | ok | -13.844 | -13.650 | -13.456 | -10.934 | -10.740 | -10.546 `  
` VBAT | 3.120 | Volts | ok | 2.816 | 2.880 | 2.944 | 3.584 | 3.648 | 3.712`  
` +3.3VSB | 3.264 | Volts | ok | 2.816 | 2.880 | 2.944 | 3.584 | 3.648 | 3.712`  
` AVCC | 3.264 | Volts | ok | 2.816 | 2.880 | 2.944 | 3.584 | 3.648 | 3.712`  
` Chassis Intru | 0x0 | discrete | 0x0000| na | na | na | na | na | na PS Status | 0x1 | discrete | 0x01ff| na | na | na | na | na | na`

## Printing System Event Log with User Role

Command:  
`ipmitool -H 10.37.2.70 -U user -P infoblox -L USER -I lanplus sel list`  
Command output: The appliance displays all event log entries (if any)

## Getting FRU Information with User Role

Command:  
`ipmitool -H 10.37.2.70 -U user -P infoblox -L USER -I lanplus fru`  
Command output:  
`FRU Device Description : Builtin FRU Device (ID 0) Board Mfg Date : Sun Dec 31 15:00:00 1995`  
` Board Mfg : Supermicro Board Serial : Product Serial :`

## Powering Off the Appliance with Operator Role

Command:  
`ipmitool -H 10.37.2.70 -U operator -P infoblox -L OPERATOR -I lanplus power off`  
Command output:  
`Chassis Power Control: Down/Off`

## Powering On the Appliance with Operator Role

Command:  
`ipmitool -H 10.37.2.70 -U operator -P infoblox -L OPERATOR -I lanplus power on`  
Command output:  
`Chassis Power Control: Up/On`

## Activating the Serial Console Port using Operator role

Command:

` ipmitool -H 10.37.2.70 -U operator -P infoblox -L OPERATOR -I lanplus sol activate `

Command output:

`[SOL Session operational. Use ~? for help] login: admin password: Infoblox NIOS Release 6.4.0-163715 (64bit) Copyright (c) 1999-2012 Infoblox Inc. All Rights Reserved. type 'help' for more information Infoblox >`
