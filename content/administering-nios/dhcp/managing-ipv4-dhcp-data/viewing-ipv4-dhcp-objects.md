---
title: "Viewing IPv4 DHCP Objects"
source: "/space/nios90/280761679"
pageId: "280761679"
---
To view the address ranges, fixed addresses and reservations in a network:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range*.
2. Grid Manager displays the following information:
   
   - **IP** **Address**: The IP address of the object in the DHCP range. For exclusion ranges, this displays the start and end IP addresses. For host records with multiple IP addresses, each IP address is displayed separately. The appliance highlights disabled DHCP objects in gray. A DHCP object can be a fixed address, reservation, host configured for DHCP, or roaming host with an allocated IP address.
   - **Type**: The object type, such as **Fixed** **Address**.
   - **Name**: The object name. For example, if the IP address belongs to a host record, this field displays the hostname.
   - **Fingerprint**: The name of the DHCP fingerprint or vendor ID of the network device that was identified through DHCP fingerprint detection. This field displays **No** **Match** for devices that do not have any DHCP fingerprint information. For information about DHCP fingerprints, see [*DHCP Fingerprint Detection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989).
   - **Comment**: The information you entered for the object.
   - **Site**: The site to which the object belongs. This is one of the predefined extensible attributes. You can edit values of inheritable extensible attributes by double clicking on the respective column. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform an inline editing.

You can select **Disabled** or available extensible attributes for display.   
You can also do the following:

- Sort the data in ascending or descending order by column.
- Create a bookmark for the range.
- Delete or schedule the deletion of a selected object or multiple objects in the range.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343161370).
- Select an object and view detailed information.
- Print or export the data.
