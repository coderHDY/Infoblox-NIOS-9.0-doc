---
title: "Restarting Services"
source: "/space/nios90/280273950"
pageId: "280273950"
---
Whenever you make a change such as adding a zone or a network, Grid Manager notifies you that a service restart is required. You can enable the appliance to display the **Restart** **Banner** whenever it requires a service restart and prompt the administrator to input the user name before restarting the services. For information about how to enable the restart banner, see [*Changing Grid Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274866). To view all pending activities that are waiting for service restart s , you can click **View** **Changes** in the restart banner at the top of Grid Manager.  
The pending activities include additions, modifications, and deletions performed by all administrators. You can also view pending changes through the *Restart* *&lt;Grid/* *Member&gt;* *Services* dialog box.  
There are several ways to restart services on the affected Grid members. You can restart services at the Grid or member level, or you can restart services by groups, as described below:

- Restarting Grid Services
- Restarting Member Services
- Restarting Services by Groups

You can configure services restart settings such as restart timeout or delay as described in Configuring Restart Settings below.

> **warning**
>
> ### Note
> 
> When you make configuration changes for DNS or DHCP and the service is enabled on at least one Grid member, Grid Manager suggests a restart even if the service is disabled on the member affected by the change.
