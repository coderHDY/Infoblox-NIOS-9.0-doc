---
title: "DtcServer Header Items"
source: "/space/nios90/1457652035"
pageId: "1457652035"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcServer | String | Yes | DtcServer |  |  |
| name* | String | Yes | server1 | name |  |
| _new_name | String | No |  | name |  |
| host* | String | Yes | 192.168.1.2 | host | Address or FQDN of a DTC server |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | A DTC server comment | comment |  |
| auto_create_host_record | Boolean | No | false | comment |  |
| sni_hostname | String | No | sni-host.infoblox.localdomain | sni_hostname | Host name for Server Network Indication to be used with the HTTPS monitor |
| monitors | List of DTC health monitors | No | Monitor name/Monitor type/Host  For example: TCP-1/tcp/10.10.10.10,SIP-1/sip/20.20.20.20,   ICMP-1/icmp/30.30.30.30,... | monitors | List of names of DTC server monitors |
| EA-Site | String | No | San Jose |  |  |
