---
title: "About Viewing Network Details"
source: "/space/nios90/1432715952"
pageId: "1432715952"
---
You can view detailed information about a specific network by clicking the network link. Grid Manager displays the objects in the network, including DHCP ranges, hosts, fixed addresses and roaming hosts. It displays the following information about the network:

- **IP** **Address**: The IP address of a DHCP object, such as a DHCP range, fixed address, reservation, host configured for DHCP, or roaming host with an allocated IP address. For a DHCP range, this field displays the start and end addresses of the range. For a host that has multiple IP addresses, each IP address is displayed separately. Note that the appliance highlights all disabled DHCP objects in gray.  
  The IP address is displayed in one of the following colors:
  
  - **Yellow**: The IP address is unmanaged.
  - **Blue**: The IP address is excluded.
  - **Pink**: Indicates IP address conflicts.
  - **Gray**: The IP address is currently not available as a NIOS object.
- **Type**: The DHCP object type, such as **DHCP Range** or **Fixed Address**.
- **Name**: The object name. For example, if the IP address belongs to a host record, this field displays the host name.
- **Comment**: The information you entered for the object.
- **IPv4 DHCP Utilization**: The percentage of the total DHCP usage of a DHCP range. This is the percentage of the total number of fixed addresses, reservations, hosts, and active leases in the DHCP range divided by the total IP addresses in the range, excluding the number of addresses in the exclusion ranges. Note that only enabled objects are included in the calculation. It does not include abandoned addresses or leases.
- **Site**: The site to which the DHCP object belongs. This is one of the predefined extensible attributes. You can select the following additional columns for display:
- **Static Addresses**: Indicates whether the IP address is a static address.
- **Dynamic Addresses**: Indicates whether the IP address is a dynamically assigned address.
- **Disabled**: Indicates whether the object is disabled. You can double-click a row and select the checkbox in this column to disable the network. Grid Manager displays a warning message when you select the checkbox. Click **Yes **to confirm or **No **to cancel. Note that disabling an IPv4 network may take a longer time to complete depending on the size of the data.
- **Priority**: Displays the priority of a DHCP range when NAC filters are applied.
- Available extensible attributes.

You can also perform the following in this panel:

- Modify some of the data in the table. Double-click a row, and either modify the data in the field or select an item from a drop-down list. Click **Save** to save the changes. Note that some fields are read-only. You can edit values of inheritable extensible attributes by double-clicking on the respective row. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform inline editing. The *Descendant* *Actions* dialog box is displayed when you click **Save**. For information, see [*Managing Inheritable Extensible Attributes at the Parent and Descendant Level*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215). If you delete the value of an inheritable extensible attribute at the parent level, you can choose to preserve the descendant value or remove it. For information, see [*Deleting Inheritable Extensible Attributes Associated with Parent Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
- Sort the displayed data in ascending or descending order by column.
- Click **Go to IPAM View** to view information about the object in the **IPAM** tab.
- Add new objects, such as DHCP ranges, to the network.
- Delete or schedule the deletion of a selected object or multiple objects.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343161370)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588/Finding+and+Restoring+Data#UsingQuickFilters)
- Print or export the data.
