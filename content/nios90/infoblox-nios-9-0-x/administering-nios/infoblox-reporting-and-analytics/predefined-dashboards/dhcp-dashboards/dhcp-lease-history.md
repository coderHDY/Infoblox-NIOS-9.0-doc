---
title: "DHCP Lease History"
source: "/space/nios90/1471250823"
pageId: "1471250823"
---
The *DHCP* *Lease* *History* dashboard provides DHCP lease history in a given time frame. The search of the *DHCP* *Lease* *History* report is scheduled hourly by default.  
DHCP Lease History reports can impose heavier system loads than for other alert types in the NIOS system. Avoid defining too many personal reports or alerts of this type for Grid reporting. Other types of reports do not impose significant performance restrictions. Also see [*Configuring IP Blocks and IP Block Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/configuring-ip-blocks-and-ip-block-groups)* *for methods to avoid this issue. You can drill down to the IP address of the lease and view user history for the selected IP address.

When you join a new member to the Grid and do not start reporting service on the member, lease history for this member is not captured in the *DHCP* *Lease* *History* report. You can view lease history for this member in the **Data** **Management** tab -&gt; **DHCP** tab -&gt; **Leases** tab.

The default dashboard displays the following information in table format:

- **Time**: The timestamp when the lease information was updated.
- **Members**: The DHCP member that granted the lease.
- **Member IP:** The IP address of the DHCP member that granted the lease.
- **Lease IP**: The IP address of the lease. You can click the lease IP address to view login details of the user. For information about *User* *History* *for* *Lease* *IP* sub-report, see [*Security Dashboards*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/security-dashboards). You can also view subscription data for the selected lease IP. For information about Subscription Data, see [*Ecosystem Dashboards*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/ecosystem-dashboards).
- **Protocol**: Indicates whether the lease is for an IPv4 or IPv6 address.
- **Action**: The status of the lease. This can be one of the following: Issued, Renewed, Freed, or Abandoned.
- **Hostname**: The host name that the DHCP client sent to the appliance using DHCP option 12.
- **MAC/DUID**: For an IPv4 address, this is the MAC address of the lease. For an IPv6 address, this is the DUID (DHCP Unique Identifier) of the DHCP client that received the lease.
- **Lease Time**: The lease time of the DHCP client.  
  Some of the options in the **Lease** **Time** filter might not display any data.
- **Lease** **Start**: The start date of the lease.
- **Lease** **End**: The end date of the lease.
- **Fingerprint**: The name of the DHCP fingerprint or vendor ID of the leased client that was identified through DHCP fingerprint detection. This field displays **No** **Match** for devices that do not match the filter criteria and those that do not have any DHCP fingerprint information. For information about DHCP fingerprints, see [*DHCP Fingerprint Detection*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/configuring-dhcp-fingerprints-and-fingerprint-de/dhcp-fingerprint-detection).
- **Component** **Name**: The name of the device.
- **Component** **Port**: The port or interface connected to the device.
- **Device Class:** Filter by the device category to which the leased client belongs.
