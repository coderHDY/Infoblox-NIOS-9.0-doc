---
title: "Viewing All Tenants"
source: "/space/nios90/1356890223"
pageId: "1356890223"
---
The **Tenants** tab lists all tenants from the CMP. Tenant is an abstract administrative concept. Similar to a tenant in the CMP, a tenant object in NIOS encompasses all network elements such as networks, zones, VMs, and IP addresses (fixed and floating), network views, default DNS view, and all related extensible attributes associated with that tenant. Multiple tenants can be mapped to the same network view. A tenant can also have VMs (with IP addresses) in its shared or external networks that are in different network views.  
In Grid Manager, you can click a tenant name in the **Cloud** tab -> **Tenants** tab and drill down to the **Networks** and **VMs** **(by** **IP** **Address)** sub tabs to view networks and VMs associated with the selected tenant. In the **Tenants** tab -> **VMs** tab, you can click a VM name and drill down more to view the **Networks** and **IP** **Addresses** sub tabs for the selected VM. You can always click the bread crumb at the top of the viewer to go back to the **Tenants** home tab.  
Each tenant has a name and a unique tenant ID. The tenant ID is provided through cloud API requests. You cannot create or delete tenant objects through Grid Manager. All tenants are created and deleted through cloud API requests. However, you can modify the name, extensible attributes, and permissions for a specified tenant through the *Tenant* editor in Grid Manager if you have valid tenant permissions: **All** **Tenants** or per tenant object. Note that you cannot delegate the authority of any given tenants.  
To view all tenant objects:

1. From the **Cloud** tab, click the **Tenants** tab.
2. Grid Manager displays the following information for each tenant:

- **Actions**: Click the action icon  
      
  next to a selected tenant and choose from the following:
  
  - **Edit**: Modify certain general properties.
  - **Extensible Attributes**: Add or modify extensible attributes.
  - **Permissions**: Modify the administrative permissions.
- **Mgmt Platform**: Displays the CMP that manages this tenant. When it displays **Amazon**, it indicates a successful validation of the Amazon account from NIOS to AWS.
- **Name**: The tenant name.
- **ID**: The unique tenant ID.
- **VMs**: The total number of VM objects associated with this tenant. This can include the following object types: Host Record, Fixed Address, and any resource record type such as A, AAAA, PTR, and CNAME records. It also includes unmanaged IP addresses that are associated with the tenant.
- **Networks**: The total number of IPv4 and IPv6 networks and network containers associated with this tenant.  
  Note that this number includes only networks and network containers created by the cloud adapter.
- **Created**: The timestamp when the tenant was first created. You cannot modify this field. This timestamp reflects the time when the tenant object was first seen by the Grid Master, so it may not match the timestamp when the original cloud API request was sent.
- **Last Updated**: The timestamp when the last event associated with this tenant happened. You cannot modify this field. This timestamp reflects the time when the last event associated with this tenant was processed by the Cloud Platform Appliance, so it may not match the timestamp when the original cloud API request was sent.
- **Comment**: Information about this tenant.
- **Network Views**: The network view to which this tenant belongs.
- **Managed**: Indicated whether this tenant is a managed or an unmanaged object in NIOS.
- **Site**: The value entered for this predefined extensible attribute.

You can also select other cloud extensible attributes for display by clicking the down arrow next to any column header and selecting **Columns** -> **Edit** **Columns**.

> **warning**
>
> ### Note
> 
> The vDiscovery for the OpenStack management platform discovers all tenants if the OpenStack user has the admin role in at least one tenant.
