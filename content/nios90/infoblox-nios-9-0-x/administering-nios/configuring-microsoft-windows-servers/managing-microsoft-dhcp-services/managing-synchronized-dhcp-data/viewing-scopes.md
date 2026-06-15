---
title: "Viewing Scopes"
source: "/space/nios90/1466925225"
pageId: "1466925225"
---
To view the scopes in a network, navigate to **DHCP** -&gt; **Networks** -&gt; *network*. The panel displays the objects in the network, including the scopes and split-scopes. For split-scopes, the panel displays both scopes with the same start and end address. It displays the following information about each object:

- **IP Address**: The IP address of the DHCP object. For a scope, this field displays the start and end addresses of the scope. Note that the appliance highlights all disabled DHCP objects in gray.
- **Split-Scope:** Displays **Yes** if the scope is a split-scope.
- **MS Server:** Displays the Microsoft server that is serving the scope.
- **Type**: The DHCP object type, such as **DHCP Range** or **Fixed Address**.
- **Name**: The object name. For example, if the IP address belongs to a host record, this field displays the hostname.
- **Comment**: The information you entered for the object.
- **IPv4 DHCP Utilization**: The percentage of the total DHCP usage of a DHCP range. This is the percentage of the total number of fixed addresses, reservations, hosts, and active leases in the DHCP range divided by the total IP addresses in the range, excluding the number of addresses in the exclusion ranges. Note that only enabled objects are included in the calculation.
- **Site**: The site to which the DHCP object belongs. This is one of the predefined extensible attributes.

You can select the following additional columns for display:

- **Static Addresses**: Indicates whether the IP address is a static address.
- **Dynamic Addresses**: Indicates whether the IP address is a dynamically assigned address.
- **Disabled**: Indicates whether the object is disabled.
- **Priority:** Displays the priority of a DHCP range when NAC filters are applied.
- Available extensible attributes.

You can also do the following in this panel:

- Sort the displayed data in ascending or descending order by column.
- Click **Go** **to** **IPAM** **View** to view information about the object in the **IPAM** tab.
- Add new objects, such as DHCP ranges, to the network.
- Delete or schedule the deletion of a selected object or multiple objects.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see as described in [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data)*.*as described in [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data)*.*
- Print or export the data.

You can also view the scopes in the IP Map.
