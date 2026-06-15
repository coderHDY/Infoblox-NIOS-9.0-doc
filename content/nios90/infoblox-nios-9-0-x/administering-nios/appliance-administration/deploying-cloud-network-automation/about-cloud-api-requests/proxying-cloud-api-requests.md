---
title: "Proxying Cloud API Requests"
source: "/space/nios90/1471252002"
pageId: "1471252002"
---
In Cloud Network Automation, the primary Cloud Platform Appliance that receives cloud API requests can act as a proxy for other authoritative Cloud Platform members and for the Grid Master. This proxying mechanism is important when the Cloud Platform Appliance cannot process requests that contain objects for which it is not authoritative, or when objects in the requests do not have authority delegation and must be processed by the Grid Master.  
Note that only successfully authenticated and authorized requests that require proxying are sent to the respective appliance for processing. Proxying is limited to one hop within the Grid. Therefore, if the destination appliance cannot process a proxied request, the request will not be forwarded and an error is returned to the client.

> **warning**
>
> ### Note
> 
> Only cloud API requests can be proxied.

To ensure that the proxying mechanism functions properly, configure your systems to allow for the following communication:

- Allow all HTTPS connectivity among the Cloud Platform Appliances as well as to the Grid Master based on your organization's firewall requirements.
- Ensure that you use the VIP or the MGMT address if it is enabled (including that for the Grid Master) as the destination IP for the HTTPS connectivity. Note that this is a per member setting.
- Grant appropriate permissions to admin groups with cloud API access to ensure that tasks for objects outside of the delegation function properly on the Grid Master.
