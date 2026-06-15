---
title: "Supported Cloud API Objects"
source: "/space/nios90/1471513723"
pageId: "1471513723"
---
The following table lists all the supported cloud API object types, methods, and functions. In your cloud API requests, you cannot include RESTful API object types, methods, and functions that are not listed in the table, even when the Grid Master supports them for other purposes. Note that the supported types and operations for cloud API requests are sub sets of all types and operations supported on the Grid Master.  
Before you send any cloud API requests, ensure that you understand the implications and restrictions for each supported object. NIOS uses extensible attributes to associate specific information with a cloud object. For information about the default cloud extensible attributes and how to use them, see* *[*Extensible Attributes for Cloud Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407399).  
In AWS (Amazon Web Services), you can create a VPC (Virtual Private Cloud) and a subnet using the same network address and subnet mask. For example, you can add 172.29.02.0/24 as the VPC and 172.29.2.0/24 as the subnet and create VMs in the subnet. However, you cannot add a network container and a network using the same network address and subnet mask in NIOS. Therefore, when you send an API request to create such VPC and subnet in AWS, NIOS recognizes only the VPC, not the subnet. As a result, you are not able to create VMs under the subnet. For more information about how to create VPCs and subnets in AWS for NIOS, refer to the *Infoblox* *Installation* *Guide* *for* *vNIOS* *for* *AWS*.  
In addition, when you delegate authority for supported cloud objects, NIOS may process the requests differently based on the following:

- How the object was first created.
- Whether authority for the object has already been delegated to a Cloud Platform Appliance.

For details about authority delegation and restrictions for each object, see* *[*About Authority Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711).

> **warning**
>
> ### Note
> 
> NIOS does not process cloud API requests that contain unsupported object types or any combination of supported object types with unsupported methods and functions. Although you can use all the fields in a supported object type, some restrictions may apply to supported values for some of these fields. For restrictions, see the **Comments** field in the below table for the corresponding object.



*Supported* *Cloud* *API* *Objects* *for* *Cloud* *API* *Service*

> **warning**
>
> ### Note
> 
> The cloud API service does not support scheduling and workflow approval requests. Objects deleted through a cloud API request are not stored in the Recycle Bin, except for DNS zones and network views. For information about the Recycle Bin, see [*Using the Recycle Bin*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343292450).

| Supported Object Type | Cloud API Object | Allowed Operations in cloud API Requests | Authority Delegation and Restrictions | Required Extensible Attributes in cloud API Requests (for creations only) |
| --- | --- | --- | --- | --- |
| Network View | networkview | Read, Create, Modify, Delete | See [*Network Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348534399) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv4 Network Container | networkcontainer | Read, Create, Modify, Delete  Function: next_available_network | Split network, join networks, and RIR related operations are not supported. See [*IPv4 and IPv6 Networks and Network Containers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599947) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv6 Network Container | ipv6networkcontainer | Read, Create, Modify, Delete  Function: next_available_network | Split network, join networks, and RIR related operations are not supported. See [*IPv4 and IPv6 Networks and Network Containers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599947) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv4 Network | network | Read, Create, Modify, Delete  Function: next_available_ip | Split network, join networks, and RIR related operations are not supported. See [*IPv4 and IPv6 Networks and Network Containers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599947) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv6 Network | ipv6network | Read, Create, Modify, Delete  Function: next_available_ip | Split network, join networks, and RIR related operations are not supported. See [*IPv4 and IPv6 Networks and Network Containers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599947)* *for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv4 DHCP Range | range | Read, Create, Modify, Delete  Function: next_available_ip | See [*DHCP Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343293858) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv6 DHCP Range | ipv6range | Read, Create, Modify, Delete  Function: next_available_ip | See* *[*DHCP Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599901)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599901)for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv4 Fixed Address (Reservation) | fixedaddress | Read, Create, Modify, Delete  Function: next_available_ip  You can also create and delete through Grid Manager. All required Cloud EAs are automatically populated in the GUI. | See* *[*IPv4 and IPv6 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348599862) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| IPv6 Fixed Address (Reservation) | ipv6fixedaddress | Read, Create, Modify, Delete  Function: next_available_ip  You can also create and delete through Grid Manager. All required Cloud EAs are automatically populated in the GUI. | See [*About Authority Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711)* *for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| DNS View | view | Read, Modify | See [*DNS Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857443) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| DNS Zone | zone_auth | Read, Create, Modify, Delete | See [*DNS Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348567092) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| Host Record | record:host | Read, Create, Modify, Delete  You can also create and delete through Grid Manager. All required Cloud EAs are automatically populated in the GUI. | See [*Host Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1348501600) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| record:host_ipv4addr | Read, Create, Modify, Delete  Function: next_available_ip  You can also create and delete through Grid Manager. All required Cloud EAs are automatically populated in the GUI. |
| record:host_ipv6addr | Read, Create, Modify, Delete  Function: next_available_ip  You can also create and delete through Grid Manager. All required Cloud EAs are automatically populated in the GUI. |
| Resource Record | record:a | Read, Create, Modify, Delete  Function: next_available_ip | See [*About Authority Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711) for information about authority delegation. | Tenant ID  Cloud API Owned  CMP Type |
| record:aaaa | Read, Create, Modify, Delete  Function: next_available_ip |
| record:cname | Read, Create, Modify, Delete |
| record:ptr | Read, Create, Modify, Delete  Function: next_available_ip |
| record:mx | Read, Create, Modify, Delete |
| record:naptr | Read, Create, Modify, Delete |
| record:srv | Read, Create, Modify, Delete |
| record:txt | Read, Create, Modify, Delete |
| Grid Member | member | Read only  Function: restartservices | API requests calling for service restarts on a Grid member can be processed by the Cloud Platform Appliance only if the member requested is also the Cloud Platform Appliance processing the request. | N/A |
| Grid | grid | Read only  Function: restartservices | All cloud API requests calling for service restarts are proxied to the Grid Master. | N/A |
| Extensible Attribute | extensibleattributedef | Read only | You can use cloud attributes as source objects to obtain the next available IP address or network. When doing so, you must also include the respective network view for the object. | N/A |
