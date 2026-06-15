---
title: "Configuration Example: Deploying a NIOS Appliance as a Primary DNS Server"
source: "/space/nios90/280765366"
pageId: "280765366"
---
In this example, you will configure the NIOS appliance as a primary DNS server for corpxyz.com. Its FQDN (fully-qualified domain name) is ns1.corpxyz.com. The interface IP address of the LAN1 port is 10.1.5.2/24. Because this is a private IP address, you must also configure the firewall to perform NAT (network address translation), mapping the public IP address 1.1.1.2 to 10.1.5.2. Using its public IP address, ns1 can communicate with appliances on the public network.

The FQDN and IP address of the external secondary DNS server are ns2.corpxyz.com and 2.2.2.2. The ISP hosts this server. You can deploy NIOS appliance in IPv4, IPv6, or dual mode (IPv4 and IPv6), but the configuration example uses IPv4 addresses.  
  
The primary and secondary servers answer queries for the following public-facing servers in the DMZ:

- www.corpxyz.com
- mail.corpxyz.com
- ftp.corpxyz.com

When you create the corpxyz.com zone on the NIOS appliance, you import zone data from the legacy DNS server at 10.1.5.3.

*Example* *1* *Network* *Diagram*

*[drawio]*
