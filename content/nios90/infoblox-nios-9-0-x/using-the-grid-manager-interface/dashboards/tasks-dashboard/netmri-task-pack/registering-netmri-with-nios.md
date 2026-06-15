---
title: "Registering NetMRI with NIOS"
source: "/space/nios90/1345062781"
pageId: "1345062781"
---
You must register a NetMRI appliance with NIOS using Grid Manager to support NetMRI Tasks. You need an account with admin privileges on the NetMRI appliance and the appliance hostname or IP address.

> **warning**
>
> ### Note
> 
> Ensure that the user account that you use for the registration and further communication between the products is identical to the existing valid account on the NetMRI appliance.

To register NetMRI with NIOS:

1. From the **Dashboards** tab, select the **Tasks** tab.
2. At the top right corner of the **Automation Tasks** panel, click the down arrow icon -&gt; **NetMRI** **Registration**.
3. In the **NetMRI Registration** dialog, do the following:
   
   1. Enter the IP address or resolved host name of the NetMRI appliance supporting the Automation Tasks pack.  
      Note that when you register NetMRI with a NIOS HA pair, you can register only one interface at a time. Use the IP address of the LAN1 interface, not the VIP address, for registration. When an HA failover occurs, the NetMRI registration is disabled. You can register the NetMRI appliance again after the failover.
   2. Enter the **Admin Password**.
4. Click **Register**.

After registration, the **NetMRI** **Registration** menu item changes to read **NetMRI** **Deregistration** to support disconnecting from the NetMRI appliance.

> **warning**
>
> ### Note
> 
> After you successfully register a NetMRI appliance with NIOS, you can use the Ecosystem &gt; Cisco ISE Endpoint feature. It is available with the NetMRI license or Network Insight license that is installed by default on the discovery member in NIOS installations. This feature enables you to enhance identity management across devices and applications that are connected to your network routers and switches. You can monitor domain users, the IP addresses they log on to, the login status, and the time duration of their current status in the **IPAM** tab. For information about how to collect user and device information from Cisco ISE, see [*Integrating Cisco ISE into NIOS*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Cisco%20ISE&linkCreation=true&fromPageId=1345062781).
