---
title: "About Authority Delegation"
source: "/space/nios90/280667711"
pageId: "280667711"
---
Authority delegation in Cloud Network Automation is the ability to assign full and exclusive control of IP addresses and DNS name spaces to a Cloud Platform Appliance. You can perform authority delegation only through the Grid Master. When you delegate the authority of IP addresses and DNS name spaces to a Cloud Platform Appliance, the Grid Master loses its authority over the scope of delegation for these IP addresses and name spaces as well as any objects within them. Note that authority delegation for an object can be explicitly assigned or inherited from parent objects. For information about how to delegate authority for supported object types, see Guidelines for Delegating below .  
NIOS admin users who do not belong to admin groups with cloud API access are not allowed to create new cloud objects, nor can they modify or delete existing cloud objects in delegated spaces; but they can modify the permissions and certain extensible attribute values for these objects. Only admin users with cloud API access and the correct global and object permissions can be used to send cloud API requests to create, modify, and delete objects within the delegated scope.

> **warning**
>
> ### Note
> 
> You can delegate authority only to Cloud Platform Appliances, but not to other Grid members.

Objects that are in queue for scheduled executions or approvals are locked and cannot be delegated. Authority delegation and reclaiming of authority are subject to approval and can be scheduled.
