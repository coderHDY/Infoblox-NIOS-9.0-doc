---
title: "Types of Traps (OID 3.1.1.1.1)"
source: "/space/nios90/1430192939"
pageId: "1430192939"
---
ibTrapOneModule defines the types of traps that the NIOS appliance can send. There are five types of SNMP traps.  
The table below describe the types of traps and their objects in the ibTrapOneModule tree.

> **warning**
>
> ### Note
> 
> Some SNMP traps for ibThresholdCrossingEvent, ibStateChangeEvent, ibProcStartStopTrap, and ibRevokedLicenseTrap do not have an associated ibProbableCause. The following table lists traps that provide ibProbableCause and those that do not have an ibProbableCause value.



*ibTrapOneModule*   
Trap Binding Variables (OID 3.1.1.1.2)

| OID | Trap Type | MIB Object | Description |
| --- | --- | --- | --- |
| 3.1.1.1.1.1 | Equipment Failure | ibEquipmentFailureTrap | The NIOS appliance generates this trap when a hardware failure occurs. This trap includes the following objects:  - ibNodeName - ibTrapSevertiy - ibObjectName (equipment name) - ibProbableCause - ibTrapDesc |
| 3.1.1.1.1.2 | Processing and Software Failure | ibProcessingFailureTrap | The NIOS appliance generates this trap when a failure occurs in one of the software processes. This trap includes the following objects:  - ibNodeName - ibTrapSeverity - ibSubsystemName - ibProbableCause - ibTrapDesc |
| 3.1.1.1.1.3 | Threshold Crossing | ibThresholdCrossingEvent | The NIOS appliance generates this trap when any of the following events occur:  - System memory or disk usage exceeds 90%. - CPU usage exceeds the trigger value for 15 seconds. - A problem occurs when the Grid Master replicates its database to its Grid members. - DHCP address usage crosses a watermark threshold. - The number or percentage of the DNS security alerts exceeds the thresholds of the DNS security alert triggers.      This trap includes the following objects: - ibNodeName - ibTrapSeverity - ibObjectName (threshold name) - ibCurThresholdvalue - ibThresholdHigh - ibThresholdLow - ibTrapDesc |
| 3.1.1.1.1.4 | Object State Change | ibStateChangeEvent | The NIOS appliance generates this trap when there is a change in its state, such as:  - The link to one of the configured ports goes down, and then goes back up again. - A failover occurs in an HA (high availability) pair configuration. - A member connects to the Grid Master. - An appliance in a Grid goes offline. This trap includes the following objects: - ibNodeName - ibTrapSeverity - ibObjectName - ibPreviousState - ibCurrentState - ibTrapDesc |
| 3.1.1.1.1.5 | Process Started and Stopped | ibProcStartStopTrap | The NIOS appliance generates this type of trap when any of the following events occur:  - When you enable HTTP redirection. - When you change the HTTP access setting. - When you change the HTTP session time out setting. - When a failover occurs in an HA pair configuration.      This trap includes the following objects: - ibNodeName - ibSubsystemName - ibTrapDesc |
| 3.1.1.1.1.6 |  | ibRevokedLicenseTrap | The NIOS appliance generates this trap when a license is revoked.    This trap includes the following objects:  - ibNodeName - ibTrapSeverity - ibSubsystemName - ibTrapDesc |
| 3.1.1.1.1.7 |  | ibOperationTrap | The NIOS appliance generates this trap when a software operation is noteworthy.    This trap includes the following objects:  - ibNodeName - ibTrapSeverity - ibSubsystemName - ibProbableCause - ibTrapDesc |



Each SNMP trap contains information about the event or the problem. The Infoblox SNMP traps include MIB objects and their corresponding values from the ibNotificationVarBind module. The following table describes the objects in the ibNotificationVarBind module.

The OIDs shown in the following table do not include the prefix ".1.3.6.1.4.1.7779.":



*ibNotificationVarBind* *(OID* *3.1.1.1.2)*

| OID | MIB Object (Type) | Description |
| --- | --- | --- |
| 3.1.1.1.2.1.0 | ibNodeName (DisplayString) | The IP address of the appliance on which the trap occurs. This may or may not be the same as the appliance that sends the trap. This object is used in all types of traps. |
| 3.1.1.1.2.2.0 | ibTrapSeverity (Integer) | The severity of the trap. There are five levels of severity. See the Trap Severity table (OID 3.1.1.1.2.2.0)  for details below. |
| 3.1.1.1.2.3.0 | ibObjectName (DisplayString) | The name of the object for which the trap was generated. This is used in the Equipment Failure traps, Threshold Crossing Event traps, and the Object State Change traps. The following shows what this object represents depending on the type of traps:  - Equipment Failure traps: The equipment name. - Threshold Crossing Event traps: The object name of the trap. - State Change traps: The object that changes state. |
| 3.1.1.1.2.4.0 | ibProbableCause (Integer) | The probable cause of the trap. |
| 3.1.1.1.2.5.0 | ibSubsystemName (DisplayString) | The subsystem for which the trap was generated, such as NTP or SNMP. This object is used in the Processing and Software Failure traps and the Process Start and Stop traps. |
| 3.1.1.1.2.6.0 | ibCurThresholdValue (Integer) | The current value of the threshold counter. This object is used in the Threshold Crossing traps. |
| 3.1.1.1.2.7.0 | ibThresholdHigh (Integer) | This object is used in Threshold Crossing traps. For CPU usage, this is the trigger value of the SNMP trap. For DHCP address usage, this is the value of the high watermark. This only applies when the appliance sends a trap to indicate that DHCP address usage is above the configured high watermark value for a DHCP address range. |
| 3.1.1.1.2.8.0 | ibThresholdLow (Integer) | This object is used in Threshold Crossing traps. For CPU usage, this is the reset value of the SNMP trap. For DHCP address usage, this is the value for the low watermark. This only applies when the appliance sends a trap to indicate that DHCP address usage went below the configured low watermark value for a DHCP address range. |
| 3.1.1.1.2.9.0 | ibPreviousState (Integer) | The previous state of the appliance. This object is used in the Object State Change traps. See the *ibPreviousState (OID 3.1.1.1.2.9.0) and ibCurrentState (OID 3.1.1.1.2.10.0)* section for definitions of each value. |
| 3.1.1.1.2.10.0 | ibCurrentState (Integer) | The current state of the appliance. This object is used in the Object State Change traps. See the *ibPreviousState (OID 3.1.1.1.2.9.0) and ibCurrentState (OID 3.1.1.1.2.10.0)* section for definitions of each value. |
| 3.1.1.1.2.11.0 | ibTrapDesc (DisplayString) | The description of the trap. This object is used in all types of traps. See the *ibTrapDesc (OID 3.1.1.1.2.11.0)* section for the description, possible cause, and recommended actions for each Infoblox SNMP trap. |
