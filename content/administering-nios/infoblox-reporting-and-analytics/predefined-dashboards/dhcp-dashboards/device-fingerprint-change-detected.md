---
title: "Device Fingerprint Change Detected"
source: "/space/nios90/1471316209"
pageId: "1471316209"
---
The *Device* *Fingerprint* *Change* *Detected* dashboard provides information about the devices whose fingerprint data gets changed in a given time frame. In other words, this dashboard includes all devices used by remote clients that were detected to have the same Mac address but different device class in a given time frame.  
The following example illustrates how the fingerprint data can change in a given time frame:  
A client device having dual boot option may request for an IP address while switching between operating systems, resulting in a change of fingerprint data and if a client's device uses Mac Boot Camp, the mac address remains unchanged, but fingerprint data changes when it switches operating system.

The *Device* *Fingerprint* *Change* *Detected* report includes all devices whose fingerprint data has been changed within the last seven days. It ignores devices whose fingerprint data has been changed for more than seven days.

This dashboard displays a table that contains the following information:

- **Time**: The time the lease was obtained.
- **Mac/DUID**: The Mac address or DUID of the client's device.
- **Current** **Device** **Type**: The current fingerprint description of the device.
- **Current** **Device** **Class**: The current fingerprint class of the device.
- **Previous** **Device** **Type**: The fingerprint description of the device before changing the fingerprint data.
- **Previous** **Device** **Class**: The fingerprint class of the device before changing the fingerprint data.
- **Lease** **IP**: The lease IP address of the device.
- **Action**: The current status of the lease. The lease status can be one of the following: **Issued**, **Renewed**, **Freed**, or **Abandoned**.
