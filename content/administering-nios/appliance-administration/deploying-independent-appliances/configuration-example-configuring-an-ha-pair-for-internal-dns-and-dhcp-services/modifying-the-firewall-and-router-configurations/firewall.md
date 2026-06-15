---
title: "Firewall"
source: "/space/nios90/1345028469"
pageId: "1345028469"
---
For example, enter the following commands on a Juniper firewall running ScreenOS 4.x or later:

DHCP Relay Configuration

`set address trust ns3 10.1.4.10/32`

`set interface ethernet2 dhcp relay server-name 10.1.4.10 `

`set policy from dmz to trust ns1 ns3 DHCP-Relay permit`

DNS Forwarding

`set interface ethernet1 mip 1.1.1.8 host 10.1.4.10 `

`set policy from trust to untrust ns3 ns2 dns permit `

`set policy from trust to dmz ns3 ns1 dns permit`

NTP

`set policy from dmz to untrust ns1 ntp_server ntp permit`
