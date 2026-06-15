---
title: "ibTrapDesc (OID 3.1.1.1.2.11.0)"
source: "/space/nios90/1430127570"
pageId: "1430127570"
---
The ibTrapDesc object lists the trap messages of all Infoblox SNMP traps. This section lists all the SNMP traps by their trap types. Each trap table describes the trap message, severity, cause, and recommended actions.

> **warning**
>
> ### Note
> 
> Contact Infoblox Technical Support for assistance when the recommended actions do not resolve the problems.



lEquipment Failure Traps

| **ibTrapDesc**    **OID** **3.1.1.1.2.11.0** | **ibTrapSeverity** **OID** **3.1.1.1.2.2** |   **Description/Cause** |   **Recommended** **Actions** |
| --- | --- | --- | --- |
| **Primary** **Drive** **Full** |
| Primary drive is full. | Major | The primary disk drive reached 100% of usage. | Review the syslog file to identify the possible cause of this problem. |
| **Fan** **Monitoring** |
| Fan &lt;n&gt; failure has occurred. | Minor | The specified fan &lt;n&gt; failed, where &lt;n&gt; indicates the fan number. | Inspect the specified fan for mechanical or electrical problems. |
| Fan &lt;n&gt; is OK. | Informational | The specified fan &lt;n&gt; is functioning properly, where &lt;n&gt; indicates the fan number. | No action is required. |
| **Power** **Supply** **Failure:** **monitored** **at** **1** **minute** |
| A power supply failure has occurred. | Major | The power supply failed. | Inspect the power supply for the possible cause of the failure. |
| Power supply &lt;n&gt; failure has occurred. | Major | The specified power supply &lt;n&gt; failed, where    &lt;n&gt; indicates the power supply number. | Inspect the specified power supply for the possible cause of the failure. |
| The power supply is OK. | Informational | The power supply is functioning properly. | No action is required. |
|  |  |  |  |
| Power supply &lt;n&gt; is OK. | Informational | The specified power supply &lt;n&gt; is functioning properly, where &lt;n&gt; indicates the power supply number. | No action is required. |
| **RAID** **monitoring,** **at** **1** **minute** **interval** |
| A RAID battery failure has occurred. | Major | The system RAID battery failed. The alert light is red. | Inspect the battery for the possible cause of the failure. |
| The system's RAID battery is OK. | Informational | The system RAID battery is charging and functioning properly. The alert light changed from red to green. | No action is required. |
| Unable to retrieve RAID array state! | Undetermined | The appliance failed to retrieve the RAID array state. The alert light is red. | Review the syslog file to identify the possible cause of this problem. |
| The system's RAID array is now running in an optimal state. | Informational | The RAID system is functioning at an optimal state. | No action is required. |
| The system's RAID array is in a degraded state. RAID Disk &lt;n&gt; is EMPTY. | Major | The RAID system is degrading. The specified RAID Disk &lt;n&gt; is empty, where &lt;n&gt; indicates the RAID disk number. | Review the syslog file to identify the possible cause of this problem. |
| The system's RAID array is rebuilding. RAID Disk &lt;n&gt; is OFFLINE. | Minor | The RAID system is rebuilding. The specified RAID Disk &lt;n&gt; is offline, where &lt;n&gt; indicates the RAID disk number. | No action is required. |
| **Syslog** **Backup** **Processes** |
| The syslog backup process is successful. | Informational | Rotated syslog files are uploaded successfully to the external backup server. | No action is required. |
| The syslog backup process failed. | Major | Failed to forward the rotated syslog files to the external backup server. | Review the syslog messages to identify the possible cause of this problem. |
