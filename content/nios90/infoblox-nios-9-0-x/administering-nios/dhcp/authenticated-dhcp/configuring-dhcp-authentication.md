---
title: "Configuring DHCP Authentication"
source: "/space/nios90/280761329"
pageId: "280761329"
---
Following are the tasks to configure the DHCP Authentication feature:

1. Configure the authentication server group which the captive portal uses to authenticate DHCP clients. For more information, see *[About Authentication Server Groups](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-authentication-server-groups)*.  
   If the captive portal is used to register guest users and does not authenticate users, then you do not have to configure an authentication server group.
2. Configure the captive portal properties and associate the captive portal with the authentication server group. For more information, see *[Configuring Captive Portal Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-captive-portal)*.
3. Optionally, customize the captive portal interface and guest registration page, as described in *[Customizing the Captive Portal Interface](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-captive-portal)*. Additionally, if you enabled SSL encryption, upload the required certificates, as described in *[Managing Captive Portal Certificates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-captive-portal)*.
4. Enable the captive portal, as described in *[Starting the Captive Portal Service](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-captive-portal)*.
5. Configure the network and a DHCP range for quarantine DHCP clients. Configure DHCP ranges for authenticated and guest DHCP clients, depending on whether you are allowing either one or both types of users to access your network. For information about configuring these DHCP ranges, see *[Defining the IPv4 Network and DHCP Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/defining-ipv4-network-and-dhcp-ranges)*.
6. Run the *Captive* *Portal* wizard to create MAC address filters for the quarantine range and for the authenticated, and guest DHCP ranges, if configured; and to associate the captive portal server with the member that serves the DHCP ranges. To accomplish these tasks and set other properties, see *[Using the Captive Portal Wizard](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/using-the-captive-portal-wizard)*. Alternatively, you can perform these tasks separately or modify the configured properties, as described in *[Adding and Modifying the Filters and Associations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/adding-and-modifying-the-filters-and-association)*.
7. Enable the DHCP service. For more information, see *[Starting DHCP Services on a Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/starting-dhcp-services-on-a-member)*.

For information about monitoring the captive portal and the DHCP service, see *[Monitoring DHCP Authentication](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/monitoring-dhcp-authentication)*.
