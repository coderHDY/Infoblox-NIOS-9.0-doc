---
title: "Configuring DHCP to Send GSS-TSIG Updates to Another Domain"
source: "/space/nios90/1412465292"
pageId: "1412465292"
---
Before the DHCP server can send secure DDNS updates to a DNS server in a different domain, you must ensure that a direct trust relationship exists between the domain of the DHCP server and that of the DNS server. (For information, refer to the Active Directory documentation.)  
Following are the tasks to configure the AD domain controller and the Infoblox DHCP server for secure updates to another domain. All the configuration is done on the AD domain controller for the domain of the DHCP server and on the Infoblox DHCP server.:

1. Complete the following tasks on the AD domain controller for the domain of the DHCP server:
   
   1. Add a user account for the Infoblox DHCP server. In the configuration example, the user account is ibdhcp. For information, see Creating an AD User Account above.
   2. Generate the keytab file for the Infoblox DHCP server and export it from the AD domain controller to a local directory on your management system. For the DHCP server in the Sending Secure DDNS Updates to a DNS Server in Another Domain,  the principal is ibdhcp/ib.child.corpxyz.com@CHILD.corpxyz.COM. For information, see Generating and Exporting the Keytab File above.
2. Complete the following tasks on the Infoblox DHCP server:
   
   1. Import the keytab file from your management system to the appliance and enable GSS-TSIG dynamic updates at the Grid or member level. For information, see [*Enabling GSS-TSIG Authentication for DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405160)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405160/Configuring+GSS-TSIG+keys#bookmark1986)
   2. Configure the external forward-mapping zone for the DDNS updates. Note that the DNS principal uses the domain of the DNS server, regardless of the domain of the DHCP server. For the DNS server in the figure Sending Secure DDNS Updates to a DNS Server in Another Domain above, the DNS principal is DNS/ns1.corpxyz.com@corpxyz.COM. For information, see [*Managing GSS-TSIG keys*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405160)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405160/Configuring+GSS-TSIG+keys#bookmark1991)
