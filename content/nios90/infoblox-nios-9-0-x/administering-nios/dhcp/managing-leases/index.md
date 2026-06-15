---
title: "Managing Leases"
source: "/space/nios90/280791672"
pageId: "280791672"
---
Historical DHCP lease records complement the real-time DHCP lease viewer by allowing the appliance to store and correlate DHCP lease information over the lifetime of a lease. You can see critical information such as when the appliance issued or freed an IPv4 or IPv6 address, the MAC address or DUID and host name of the device that received the IP address, the Grid member that supplied the lease, and the start and end dates of the lease.

You can view current leases and lease history in the **Data** **Management** -&gt; **DHCP** -&gt; **Leases** tab in Grid Manager. To view lease history, you must first enable lease logging at the Grid level. For information, see *[Configuring DHCP Logging](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-logging)* and *[Configuring the Lease Logging Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-logging)*. You can also export the DHCP lease history log in CSV format for archival and reporting purposes.

In the **Leases** tab, you can do the following:

- View current leases. For information, see *[Viewing Current Leases](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-current-leases)*.
- View detailed information about a specific lease. For information, see *[Viewing Detailed Lease Information](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-detailed-lease-information)*.
- View historical lease records. For information, *[Viewing Lease History](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-lease-history)*.
- Export current leases and lease history logs. For information, see *[Exporting Lease Records](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/exporting-lease-records)*.
- Clear leases. For information, see *[Clearing Leases](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/clearing-leases)*.

You can also use the filter and **Go** **to** functions in the lease panels to retrieve lease information for specific hosts, MAC addresses, and IP addresses. These capabilities are crucial for security auditing and for meeting new compliance regulations such as SOX and HIPAA. You can also sort the lease information by column.

This section explains how to manage IPv4 and IPv6 leases. It contains the following topics:

*[children]*
