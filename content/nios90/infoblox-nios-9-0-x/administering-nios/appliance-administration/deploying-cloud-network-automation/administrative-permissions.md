---
title: "Administrative Permissions"
source: "/space/nios90/280765195"
pageId: "280765195"
---
You must define admin users and their permissions in the admin group and assign specific roles to it before you can use these admin users to send cloud API requests. You can also define object permissions to specific admin groups or admin users so they can manage specific objects through cloud API requests. For more information, see* *[*About Admin Accounts*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-accounts)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/Managing+Administrators#bookmark382)and [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)*.*

> **warning**
>
> ### Note
> 
> When you deploy Cloud Network Automation, the *cloud-api-only* is created automatically. You cannot delete this admin group.

Depending on where a cloud API request is sent and whether the scope of delegation for an object is explicit or implicit, permissions configured for the admin user and object may or may not apply. In addition, depending on the objects referenced in cloud API requests, specific restrictions may apply. For supported objects and their restrictions, see* *[*Supported Cloud API Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/about-cloud-api-requests/supported-cloud-api-objects)*.*

For cloud API requests, admin permissions are applied based on the delegation status of the objects referenced in the requests. If an object is not delegated (owned by the Grid Master) and the cloud API request is sent directly to the Grid Master or proxied to the Grid Master, all applicable admin and object permissions apply. On the other hand, if authority for an object referenced in a cloud API request is explicitly delegated to a Cloud Platform Appliance and the request is sent to this appliance, the admin user has full permission for this object within the scope of delegation. In this case, specific permissions configured for the admin user and the referenced object are ignored. For more information about admin and object permissions, see [*About Administrative Permission*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)[s](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).  
It is important to note that once you delegate authority of an object to the Cloud Platform Appliance, specific admin and object permissions are not enforced. Therefore, if you do not want certain objects to be created or modified through a cloud API request, do not delegate the authority of these objects and their parent objects to a Cloud Platform Appliance. For example, if you do not want host records to be created through cloud API requests, do not delegate the authority of the relevant networks, zones, or both to the Cloud Platform Appliance. On the other hand, if you want the ability to restrict permissions for specific objects referenced in cloud API updates, you can create different admin groups or admin users that are authorized to make cloud API updates on respective Cloud Platform Appliances. The following example illustrates this capability.

# Configuration Example

If you want to restrict the creation and modification of records for networks 10.10.10.0/24 and 10.10.20.0/24 through cloud API updates, do the following:

1. Create two admin users **APIUser1** and **APIUser2** in an admin group.
2. Delegate the authority of network 10.10.10.0/24 to Cloud Platform Appliance 1 (**CP1**) and 10.10.20.0/24 to Cloud Platform Appliance 2 (**CP2**).
3. On **CPI**, add **APIUser1** and on **CP2**, add **APIUser2** to the list of administrators that can send cloud API requests, as described in [*Configuring Grid and Member Cloud API Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/configuring-grid-and-member-cloud-api-properties)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/configuring-grid-and-member-cloud-api-properties)

Now when you use **APIUser1** to send cloud API requests, you can add and modify records for network 10.10.10.0/24, but you cannot do so for network 10.10.20.0/24. Conversely, you can add and modify records for network 10.10.20.0/24 only when you use **APIUser2**.
