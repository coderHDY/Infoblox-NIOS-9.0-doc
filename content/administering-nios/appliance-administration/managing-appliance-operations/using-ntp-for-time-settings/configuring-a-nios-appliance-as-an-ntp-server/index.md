---
title: "Configuring a NIOS Appliance as an NTP Server"
source: "/space/nios90/1449263281"
pageId: "1449263281"
---
You can configure a Grid member—including the Grid Master—or an independent appliance or HA pair to function as an NTP server. When you enable a NIOS appliance to function as an NTP server, you can enable authentication between a NIOS appliance functioning as an NTP server and its NTP clients. When you enable authentication, you must specify the keys that the appliance and its clients must use for authentication. In a Grid, you can enter NTP authentication keys at the Grid level so that all the members can use them to authenticate their clients. You can also   
enter keys at the member level, if you want that member to use different keys from those set at the Grid level. After you enter the keys, you can download the key file and distribute the file to the NTP clients.  
On an HA member, the NTP service runs on the active node. If there is an HA failover, the NTP service is automatically launched after the passive node becomes active and the NTP traffic uses the HA port on one of the nodes from an HA pair, instead of the LAN1 port. You might receive an error message indicating that the NTP is out of synchronization. During another HA failover, the currently passive node becomes active again and the NTP traffic uses the LAN1 port, and the NTP is back in synchronization. For information, see [*About HA Pairs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644)*.*  
To enable an appliance as an NTP server and authenticate NTP traffic between a NIOS appliance and an NTP client, perform the following tasks:

- Enable an appliance as an NTP server and define authentication keys. For information, see Enabling an Appliance as an NTP Server below.
- Optionally, define NTP access control, including KoD packet configuration. For information, see Defining NTP Access Control below.
- Optionally, configure anycast addressing for DNS and use the anycast IP address for NTP requests. For information about how to configure DNS anycast, see [*Configuring Anycast Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404744).
