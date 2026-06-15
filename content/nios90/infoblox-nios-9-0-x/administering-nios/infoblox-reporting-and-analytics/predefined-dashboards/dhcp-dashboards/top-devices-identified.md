---
title: "Top Devices Identified"
source: "/space/nios90/1471250895"
pageId: "1471250895"
---
The *Top* *Devices* *Identified* dashboard lists the top DHCP fingerprints or detected operating systems for requesting clients. The appliance uses DHCP fingerprint detection to identify the operating systems or vendor IDs of remote clients. For more information about DHCP fingerprint detection, see [*DHCP Fingerprint Detection*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/configuring-dhcp-fingerprints-and-fingerprint-de/dhcp-fingerprint-detection). The default dashboard displays the top 10 operating systems on which requesting clients are running within the last 24 hours.  
The appliance lists the top detected operating systems or vendor IDs in table format. This dashboard shows the total number of different MAC devices that have requested a lease. You can click a specific row in the table to view a list of leased clients that belong to the selected operating system or device type. Grid Manager displays another report that specifies more detailed information, such as the leased IPs and MAC addresses for each device that matches the selected DHCP fingerprint. The lease history for a fingerprint shows all the lease events that occurred during the time period specified with the parent search (Top Devices Identified report). It represents the number of devices that use the MAC/DUID as the unique identifier. Note that a single MAC address may have several lease events that occur within the specified time range for the parent search. Hence, the total number of each fingerprint will not be equal to the lease history of a fingerprint.  
You can use all available filters for the parent *Top* *Devices* *Identified* report, but you can filter the detailed report using only the **Fingerprint** column.

This dashboard displays a table that contains the following information for each top DHCP fingerprint:

- **Fingerprint**: The name of the DHCP fingerprint or vendor ID for the requesting clients.
- **Total**: The total number of leased clients that belong to this DHCP fingerprint.
- **%** **of** **all** **devices**: The percentage of the leased clients belonging to this DHCP fingerprint over the total number of requesting clients.
