---
title: "Viewing IPv6 DHCP Objects"
source: "/space/nios90/280270869"
pageId: "280270869"
---
You can view the DHCP objects in an IPv6 network by navigating to the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** panel, and then clicking the network link. This panel displays the following information about DHCP objects in the selected IPv6 network:

- **IP** **Address**: The IPv6 address of a DHCP object, such as a DHCP range, fixed address, or host configured for DHCP, or roaming host with an allocated IP address. For a DHCP range, this field displays the start and end addresses of the range. For a host that has multiple IP addresses, each IP address is displayed separately. Note that the appliance highlights all disabled DHCP objects in gray.
- **Type**: The DHCP object type, such as **IPv6** **DHCP** **Range** or **IPv6** **Fixed** **Address**.
- **Name**: The object name. For example, if the IP address belongs to a host record, this field displays the hostname.
- **Comment**: The information you entered for the object.
- **Site**: The site to which the DHCP object belongs. This is one of the predefined extensible attributes. You can select the following additional columns for display:
- **Priority**: Displays the priority of the DHCP range.
- **Disabled**: Indicates whether the network is disabled. You can also do the following in this panel:
- Modify some of the data in the table. Double click a row, and either modify the data in the field or select an item from a drop-down list. Click **Save** to save the changes. Note that some fields are read only.
- Sort the data in ascending or descending order by column.
- Create a bookmark for the object.
- Click **Go** **to** **IPAM** **View** to view information about the object in the **IPAM** tab.
- Delete or schedule the deletion of a selected object or multiple objects.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data/using-quick-filters).
- Print or export the data.
