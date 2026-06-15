---
title: "show config"
source: "/space/nios90/280822496"
pageId: "280822496"
---
The `show`` ``config` command displays the DNS, DHCP, DHCPv6, or DTC configuration files, named.conf, dhcp.conf, dhcpv6.conf, dtc.conf, and healthd.conf.

# Syntax

`show config { dns | dhcp | dhcpv6 | dtc | healthd }`

`show`` ``config` displays the contents of named.conf, dhcp.conf, dhcpv6.conf, dtc.conf, and healthd.conf files. You can page through the output 10 lines at a time.

| **Argument ** | **Description** |
| --- | --- |
| dns | Displays the named.conf file. |
| dhcp | Displays the dhcp.conf file. |
| dhcpv6 | Displays the dhcpv6.conf file. |
| dtc | Displays the dtc.conf file at /Infoblox/var/idns_conf/dtc.conf |
| healthd | Displays the healthd.conf file at /Infoblox/var/idns_conf/healthd.conf |

# Example

`Infoblox &gt; show config dns`  
`   include "/infoblox/var/named_conf"; `  
`   options {`  
`          zone-statistics yes;`  
`          directory "/infoblox/var/named_conf"; version "";`  
`          recursion no;`  
`          listen-on {127.0.0.1; 10.0.0.0;}`  
`          query-source address 10.0.0.0;`  
`   Enter &lt;return&gt; to continue with More lines or enter q&lt;return&gt; to go back to the command line. `  
` `

`Infoblox &gt; show config dhcp`  
`   local-address 10.0.0.0.;`  
`   server-identifier 10.0.0.0;`  
`   ddns-update-style interim; `  
`   authoritative;`  
`   option domain-name "corp100.com";`  
`   mini-lease-time 43200;`  
`   max-lease-time 43200; ping-check false;`  
`   log-facility daemon;`  
`   Enter &lt;return&gt; to continue with More lines or enter q&lt;return&gt; to go back to the command line.`

`Infoblox &gt; show config healthd`  
`# AUTO GENERATED FILE, DO NOT EDIT`  
`{`  
` 'servers': [],`  
` 'monitors': [],`  
`'checks': [],`  
` 'options': {`  
` 'source': 'VIP',`  
`'log_idns_health': False,`  
`'log_facility': 29,`  
`'source_ip': '10.120.21.129' `  
`'socket_limit': 9000`  
`}`  
`}`
