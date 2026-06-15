---
title: "Configuring DHCP Ranges"
source: "/space/nios90/280270632"
pageId: "280270632"
---
Create the IPv4 network and DHCP ranges as described in *[Managing IPv4 DHCP Data](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267800)*. You can create multiple DHCP ranges and apply one or more NAC filters to each of them.

# Listing DHCP Ranges

By default, DHCP ranges are listed according to their start addresses. You can reorder them according to the order in which you want the member DHCP server to evaluate the ranges.  
Consider the following sample DHCP ranges:

- 10.20.30.100-10.20.30.199 (NAC filter that allows leases for compliant DHCP clients)
- 10.20.30.0-10.20.30.99 (No filters)

If the DHCP range with the NAC filter is listed before the range with no filters, then the DHCP server consults the Sophos NAC Advanced server and applies the NAC filter before it grants a lease. It grants leases from the range with no filters only if no NAC filters matched or after all leases from the first range are exhausted. If the first range is the production range and the second range is for the quarantine group, then the server applies the NAC filters for the production range, before it grants leases to the quarantine range.  
To change the order of DHCP ranges in a network:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> *network*.
2. Expand the Toolbar and click **Order** **DHCP** **Ranges**.
3. In the *Order* *DHCP* *Ranges* dialog box, click the up and down arrows to move ranges up or down on the list. The Priority value changes accordingly.
4. Click **OK**.

You can view the DHCP objects in a network, including its DHCP ranges by navigating to the **DHCP** tab -> **Networks** tab -> **Networks** panel, and then clicking the network link. You can select the Priority column for display to view the order of the DHCP ranges. For information about editing the columns, see *[Customizing Tables](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)*.
