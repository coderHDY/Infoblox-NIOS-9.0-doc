---
title: "Using Quick Filters"
source: "/space/nios90/1343161370"
pageId: "1343161370"
---
A quick filter saves filter rules that you define in a specific panel. You can reuse a quick filter to find updated information in a panel without specifying the same rules each time. Superusers can define quick filters and share them with local users. Limited-access users can only create quick filters for their own use. You can create up to 10 global and 10 local quick filters in each panel that supports filters.  
The appliance supports the following quick filters:

- System quick filters: These are predefined filters. You cannot modify the criteria of these filters. System quick filters are prefixed with \[S\] in the quick filter list. Infoblox currently supports the following system quick filters in the DNS data panels:
  
  - **All Forward Mapping Zones**: This quick filter displays all forward mapping zones in lexicographical order.
  - **All Reverse Mapping Zones**: This quick filter displays all IPv4 and IPv6 reverse mapping zones in numerical order. The appliance displays IPv4 zones before IPv6 zones.
  - **All IPv4 Reverse Mapping Zones**: This quick filter displays only the IPv4 reverse mapping zones in numerical order.
  - **All IPv6 Reverse Mapping Zones**: This quick filter displays only the IPv6 reverse mapping zones in numerical order.
  - **RPZ Logs:** This quick filter displays only the RPZ syslog messages in CEF format. This option is displayed only in the **Syslog** when RPZ license is enabled.
- Global quick filters: Only superusers can define global quick filters. You can make global filters available to all users. Limited-access users can use global quick filters, but they cannot modify them. Global filters are prefixed with \[G\] in the filter list.
- Local quick filters: Limited-access users can create local quick filters for their own use. You cannot share local quick filters with other users in the Grid. Local filters are prefixed with \[L\] in the filter list.

> **warning**
>
> ### Note
> 
> In the default DNS zone view, the appliance displays forward mapping zones first, followed by IPv4 reverse mapping zones, and then IPv6 reverse mapping zones.

In this section:

*[children]*
