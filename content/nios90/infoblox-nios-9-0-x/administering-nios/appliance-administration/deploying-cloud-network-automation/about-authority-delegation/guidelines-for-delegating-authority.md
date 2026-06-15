---
title: "Guidelines for Delegating Authority"
source: "/space/nios90/1348599992"
pageId: "1348599992"
---
You can initiate explicit delegation of authority only through Grid Manager on the Grid Master. The cloud API service can only be used for implicit or automatic delegation of an object such as creating a network under a network container that has been delegated, in which network is implicitly delegated to the member to which the network container is delegated.  
The Grid Master can explicitly delegate authority only for the following object types:

- Network View
- Network Container (both IPv4 and IPv6)
- Network (both IPv4 and IPv6)
- DHCP Range (IPv4 and IPv6)
- DNS Authoritative Zone (Note that zones are implicitly delegated if the assigned name server is a Cloud Platform Appliance.)

Consider the following when you delegate authority for an object:

- You can delegate authority for supported objects to one and only one Cloud Platform Appliance, except for DNS zones.
- When delegating authority for a parent object, all child objects within the scope of delegation inherit the same authority delegation.
- You cannot delegate authority for the following:
  
  - Objects whose parents already have a delegation configured.
  - Individual IPAM and DNS records including fixed addresses, host records, A/AAAA/PTR records, etc.
- When you use Elastic Scaling to pre-provision an offline Cloud Platform Appliance, any object authority delegated to this offline member does not take effect until the member joins the Grid. Therefore, you can still create child objects through Grid Manager under the delegated objects when the member is offline.
- You can override the inheritance of authority delegation at the object level only if the parent object has not been delegated. The Grid Master assumes authority for objects that do not fall within the scope of delegation.
- If a supported object has already been delegated, you cannot re-delegate it to another appliance. If you want to re-delegate this object, you must first un-delegate it.
- For explicitly delegated objects, you can only modify the permission and extensible attributes from Grid Manager and the Infoblox API other than cloud API requests. For explicitly delegated zones however, you can modify any properties from Grid Manager and the Infoblox API other than cloud API requests.
- When you create or delete a delegated object through a cloud API request, the appliance returns an OK message if the operation is successful. It returns an ERROR message if the operation fails. You can then change the options in the request and try again. The appliance sends a WARNING message when certain operations require attention.
- You can reclaim the authority that you delegated to a Cloud Platform Appliance. Once the authority is reclaimed, it goes back to the Grid Master. Before you reclaim authority for any object, ensure that the Cloud Platform Appliance is online and properly connected to the Grid Master for the reclaiming process to function properly.
- The Cloud Platform Appliance can run discovery on any network containers or networks that are reachable by the appliance. The default discovery settings for network containers and networks are inherited from their parent objects. For information about discovery, see [*About Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/about-discovery).

> **warning**
>
> ### Note
> 
> Any Cloud Platform Appliances that are removed from the Grid automatically lose authority over objects that were delegated to them. The Grid Master becomes authoritative for these objects.
