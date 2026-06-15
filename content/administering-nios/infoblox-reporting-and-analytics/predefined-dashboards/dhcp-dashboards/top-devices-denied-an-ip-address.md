---
title: "Top Devices Denied an IP Address"
source: "/space/nios90/1471316322"
pageId: "1471316322"
---
The *Top* *Devices* *Denied* *an* *IP* *Address* dashboard lists the top DHCP fingerprint devices used by remote clients that were denied a lease or an IP address based on the fingerprint filter criteria you specified. The default dashboard displays the top 10 devices per combination of fingerprint and network which were denied an IP address within the last 24 hours. For example, if the same device is denied from two separate networks during the past 24 hours, and/or with different fingerprints, then multiple events will be listed in the table corresponding to this device.   
This dashboard displays a table that contains the following information for each denied DHCP fingerprint device class:

- **Mac/DUID**: The Mac address or DUID of the client's device.
- **Fingerprint**: The fingerprint description of the device used by remote clients.
- **Device** **Class**: The DHCP fingerprint class of the device used by remote clients.
- **Network**: The network to which the DHCP range belongs. For shared network, the network is the first network where the lease is prohibited due to fingerprint filter.
- **Attempts**: The total number of attempts by remote clients for an IP address in a given time frame.
- **Last** **Attempt**: The time stamp of the last attempt by remote client for an IP address in a given time frame.
