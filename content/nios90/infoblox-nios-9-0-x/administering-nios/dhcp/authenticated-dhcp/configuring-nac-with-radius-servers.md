---
title: "Configuring NAC with RADIUS Servers"
source: "/space/nios90/280270647"
pageId: "280270647"
---
Complete the following tasks to configure the RADIUS server and the member DHCP server. On an already functioning RADIUS server:

- Add the member DHCP server as a RADIUS client. Make sure that the shared secret you enter on the RADIUS server matches the shared secret that you specify when you add the server to the authentication server group in Grid Manager.  
  Note that on Grid Manager, you can enter only one shared secret for each RADIUS server. Therefore, on a RADIUS server, you must define the same shared secret for all Grid members that connect to it.  
  For information about adding RADIUS clients, refer to the documentation for the RADIUS server.

- Add the Infoblox Grid Master as a RADIUS client, even if it is not going to perform NAC authentication. This enables you to test the connection to the RADIUS server.

On the member DHCP server:

1. Configure the authentication server group for the RADIUS servers. For information, see *[Adding a Server Group](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-authentication-servers)*.
2. Associate the authentication server group with the Grid member. For information, see *[Associating a Server Group with a Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-authentication-servers)*.
3. Configure the network and the DHCP ranges. For information, see *[Configuring DHCP Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-dhcp-ranges)*.
4. Configure the NAC filters, as described in *[About NAC Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters)*.
5. Apply the NAC filters to the DHCP ranges, as described in *[Applying Filters to DHCP Objects](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)*.
6. Enable the DHCP service. For information, see *[Starting DHCP Services on a Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/starting-dhcp-services-on-a-member)*.

Optionally, you can do the following:

- Manage the authentication cache, as described in *[Clearing the Authentication Cache](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-authentication-servers)*.
