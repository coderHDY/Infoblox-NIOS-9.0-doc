---
title: "Advanced Discovery Status"
source: "/space/nios90/1457193753"
pageId: "1457193753"
---
With the correct licensing, dedicated NIOS appliances operating as Grid members can perform infrastructure device discovery. NIOS appliances with the Discovery license operate primarily for discovery tasks and do not perform core DNS or DHCP network functions. Discovery appliances, called Probes, collect all network device data and compile it into a database. A separate NIOS appliance, called a Consolidator, aggregates the collected device information from the Probes and synchronizes with the Infoblox Grid Master.

For more information about discovery and its features and requirements, see [*Infoblox Network Insight*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight) and its associated sections.

The Advanced Discovery Status widget provides several basic counts describing the general state of device discovery within the Grid, and for networks outside the Grid being inventoried by the NIOS appliances designated for discovery. The widget divides counters into two categories: **Networks** and **Assets**. Network counters refer to counts of managed and unmanaged networks discovered by Probe appliances. Asset counters refer to counts of specific types of network devices, termed Assets, which are comprised of end hosts, enterprise servers, enterprise printers, and any other enterprise asset that exists in an end-user network segment. The widget counters include:

In the **Networks** category:

- **Discovered:** The total number of networks discovered by Probe appliances.
- **Managed:** The number of discovered networks that are currently managed by the NIOS Grid. These IP networks have been converted from Unmanaged status to Managed status.
- **Unmanaged:** The number of discovered networks that are counted as Unmanaged by the NIOS Grid Master. After a network is discovered and catalogued by a Probe appliance, its default state as a network is Unmanaged.

In the **Assets** category:

- **Discovered:** The total number of Assets discovered by Probe appliances.
- **Managed:** The number of discovered assets that are currently managed by the NIOS Grid. These devices have been converted from Unmanaged status to Managed status.
- **Unmanaged:** The number of IPs with discovered data that are counted as Unmanaged by the NIOS Grid Master, and have not been converted into a Host or a Fixed IP Address. After an Asset is discovered and cataloged by a Probe appliance, its default state is Unmanaged.
- **Conflicts:** The number of discovered assets that have a MAC address conflict or are part of a configured DHCP range, but do not have a fixed address or lease record and are not part of an exclusion range.
