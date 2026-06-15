---
title: "About Cloud API Requests"
source: "/space/nios90/280667760"
pageId: "280667760"
---
In your cloud environment, the cloud adapter acts as the cloud API client. Only API requests made by admin users who have the correct permissions on the cloud API ACL (Access Control List) are processed by the cloud API service. When the Cloud Platform Appliance receives a cloud API request, it processes the request based on authority delegation of the objects and respective cloud extensible attributes. For information about cloud extensible attributes, see [*Extensible Attributes for Cloud Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407399). If the Cloud Platform Appliance is not authoritative for the referenced objects, it proxies the request to the authoritative appliance that can be another Cloud Platform Appliance or to the Grid Master if no authority delegation is defined. For information about proxying cloud API requests, see [Proxying Cloud API Requests](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1471252002) below.

> **warning**
>
> ### Note
> 
> For the cloud API service to function properly, configure your networks and firewalls accordingly to allow port 443 HTTPS connectivity between the cloud adapter and Cloud Platform Appliance, between the cloud adapter and the Grid Master (if applicable), between the Grid Master and Cloud Platform members, and between each Cloud Platform member.

If you are using the AWS API Proxy to send API requests, ensure that you understand how to set up and configure the proxy. For detailed information, refer to the *Infoblox* *Installation* *Guide* *for* *vNIOS* *for* *AWS*.  
When implementing Cloud Network Automation in AWS, you can use automatic pre-provisioning to allocate and deallocate licenses and automatically spin up vNIOS Grid members and join them to the Grid. You can purchase and install NIOS feature licenses in advance and store them in a license pool container on the Grid Master. You can then decide when and how to automatically provision and configure vNIOS for AWS cloud virtual appliances. When you remove a vNIOS cloud appliance, the licenses on this appliance are released and returned to the license pool and are available for the next deployment.
