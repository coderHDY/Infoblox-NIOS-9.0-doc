---
title: "Configuring NAT and Policies on the Firewall"
source: "/space/nios90/1432786896"
pageId: "1432786896"
---
Change the NAT and policy settings on the firewall to allow bidirectional DNS traffic to and from [ns1.corpxyz.com](http://ns1.corpxyz.com) and NTP traffic from [ns1.corpxyz.com](http://ns1.corpxyz.com) to the NTP server at 10.120.3.10.

For example, enter the following commands on a Juniper firewall running ScreenOS 4.x or later:

`set address dmz ns1 10.1.5.2/32 `  
` set address untrust ntp_server 10.120.3.10/32 set interface ethernet1 mip 1.1.1.2 host 10.1.5.2 set policy from dmz to untrust ns1 any dns permit `  
` set policy from untrust to dmz any mip(1.1.1.2) dns permit set policy from dmz to untrust ns1 ntp_server ntp permit`

At this point, the new DNS server can take over DNS service from the legacy server. You can remove the legacy server and unset any firewall policies permitting traffic to and from 10.1.5.3.
