---
title: "IPv4 and IPv6 Fixed Addresses"
source: "/space/nios90/1348599862"
pageId: "1348599862"
---
Consider the following authority delegation guidelines when you create, modify, or delete a fixed address:

- You can delegate authority for a fixed address only through inheritance from one of its parent objects, such as its associated network view, network container, network, or DHCP reserved range.
- When you create or modify an IPv4 or IPv6 fixed address, you must include the following extensible attributes in the cloud API request: Tenant ID, Cloud API Owned, and CMP Type.
- You can create a fixed address from the Grid Master using a fixed address template. Note that when you want to reference a template in the cloud API request, you must know the name of the template beforehand.
- When performing any operations on a Cloud Platform Appliance, all discovery related attributes for a fixed address return the default values.
- No DHCP service restart is required when performing any operations for a fixed address on the Cloud Platform Appliance unless automatic DHCP restart is disabled on the appliance. You can however perform a DHCP service restart on the Cloud Platform Appliance to which authority is delegated for a fixed address through a cloud API request.
- You can create, modify, or delete an IPv4 or IPv6 fixed address and reservation on the Grid Master through Grid Manager if the fixed address or reservation is within the scope of a network view, network container, network, or DHCP reserved range whose authority has been delegated to a Cloud Platform Appliance.

See [*Sample Cloud API Requests*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667760) for a sample cloud API request.  
For information about how to create IPv4 and IPv6 fixed addresses, see [*Adding IPv4 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095) and [*Adding IPv6 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479).  
For information about how to create IPv4 and IPv6 fixed address templates, see [*About IPv4 Fixed Address/Reservation Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118) and [*Adding*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[*IPv6*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[*Fixed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[*Address*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591)[*Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591).
