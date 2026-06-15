---
title: "Viewing Lease History"
source: "/space/nios90/280403478"
pageId: "280403478"
---
To view lease history:

- From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Leases** tab -&gt; **Lease** **History**.

Grid Manager displays a table of historical leases that have been archived in the system. You can export the information in the lease history table. You can also search by the IP address or MAC address of the lease. Grid Manager displays the following read-only information:

- **Lease ****Issue**: The date and time when the lease was issued.
- **Protocol**: Indicates whether the lease is for an IPv4 or IPv6 address.
- **IP**** Address**: The IPv4 address or IPv6 prefix or address of the lease.
- **MAC**** Address**: The MAC address of the IPv4 lease.
- **DUID**: The DUID of the DHCP client that received the lease for an IPv6 address.
- **Fingerprint**: The name of the DHCP fingerprint or vendor ID of the DHCP client that was identified through DHCP fingerprint detection. This field displays **No ****Match** for devices that do not have any DHCP fingerprint information. For information about DHCP fingerprints, see *[DHCP Fingerprint Detection](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/configuring-dhcp-fingerprints-and-fingerprint-de/dhcp-fingerprint-detection)*.
- **Host ****Name**: The host name that the DHCP client sent to the appliance.
- **Action**: This can be one of the following: Issued, Renewed, Freed, or Abandoned.
- **User ****Name**: The name of the user who received the lease for the IP address.
- **Start**: The start date of the lease.
- **Stop**: The end date of the lease.
- **Member/Server**: The DHCP member or Microsoft server that granted the lease.
- **Member ****IP ****Address**: The IP address of the DHCP member that granted the lease. You can do the following in this section:
- View the lease event detailed information of a historical lease by selecting the checkbox of a lease, and then clicking the Open icon.
- Print or export the information in this section.

# Viewing Lease Event Detailed Information

You can view detailed information about a historical lease record by clicking the lease in the **Data** **Management** tab -&gt; **DHCP** tab -&gt; **Leases** tab -&gt; **Lease** **History**. Grid Manager displays the event, the date and time when the event occurred, plus detailed information about the historical lease record. For information about the fields, see *[Viewing Detailed Lease Information](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-detailed-lease-information)*.

You can also export and print the information in this panel. For information, see [*Exporting*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/exporting-lease-records)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/exporting-lease-records)[*Lease*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/exporting-lease-records)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/exporting-lease-records)[*Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/exporting-lease-records).
