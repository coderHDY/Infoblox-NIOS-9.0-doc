---
title: "Configuring DHCP Authentication"
source: "/space/nios90/280761329"
pageId: "280761329"
---
Following are the tasks to configure the DHCP Authentication feature:

1. Configure the authentication server group which the captive portal uses to authenticate DHCP clients. For more information, see *[About Authentication Server Groups](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663135)*.  
   If the captive portal is used to register guest users and does not authenticate users, then you do not have to configure an authentication server group.
2. Configure the captive portal properties and associate the captive portal with the authentication server group. For more information, see *[Configuring Captive Portal Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403636)*.
3. Optionally, customize the captive portal interface and guest registration page, as described in *[Customizing the Captive Portal Interface](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403636)*. Additionally, if you enabled SSL encryption, upload the required certificates, as described in *[Managing Captive Portal Certificates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403636)*.
4. Enable the captive portal, as described in *[Starting the Captive Portal Service](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403636)*.
5. Configure the network and a DHCP range for quarantine DHCP clients. Configure DHCP ranges for authenticated and guest DHCP clients, depending on whether you are allowing either one or both types of users to access your network. For information about configuring these DHCP ranges, see *[Defining the IPv4 Network and DHCP Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403608)*.
6. Run the *Captive* *Portal* wizard to create MAC address filters for the quarantine range and for the authenticated, and guest DHCP ranges, if configured; and to associate the captive portal server with the member that serves the DHCP ranges. To accomplish these tasks and set other properties, see *[Using the Captive Portal Wizard](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663106)*. Alternatively, you can perform these tasks separately or modify the configured properties, as described in *[Adding and Modifying the Filters and Associations](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403562)*.
7. Enable the DHCP service. For more information, see *[Starting DHCP Services on a Member](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404283)*.

For information about monitoring the captive portal and the DHCP service, see *[Monitoring DHCP Authentication](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761306)*.
