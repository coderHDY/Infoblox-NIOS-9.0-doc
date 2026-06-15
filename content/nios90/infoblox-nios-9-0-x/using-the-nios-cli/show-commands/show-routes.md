---
title: "show routes"
source: "/space/nios90/280789524"
pageId: "280789524"
---
The `show routes` command displays the current IPv4 and IPv6 routing information on the NIOS appliance and organizes the information according to the interface. This command is a valuable diagnostic tool for connectivity issues.

If you had selected the **Enable** **default route redundancy** **on** **LAN1/LAN2** checkbox, then output of this command displays two default routes each having a different metric number. For more information about the checkbox, see [*About Route Redundancy*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-lan2-port/Using+the+LAN2+Port#Configuring-LAN1%2FLAN2-for-Automated-Failover).

# Syntax

`show routes`

This command has no arguments.

# Example

In the following example, `default` specifies the direct connection to the interface and the static routes are represented (in this example) in bold. You specify static routes by manually entering them through the GUI.

`Infoblox &gt; show routes`  
` From LAN:`  
` 10.34.33.0/24 dev eth1 scope link default via 10.34.33.1 dev eth1 `

`From LAN2:`  
` 10.1.1.0/24 dev eth3 scope link default via 10.1.1.1 dev eth3 `  
` `

`From IPv4 main route table:`  
` 10.34.33.0/24 dev eth1 proto kernel scope link src 10.34.33.11 10.1.1.0/24 dev eth3 proto kernel scope link src 10.1.1.35 default via 10.34.33.1 dev eth1`  
` From IPv6 main route table:`  
` fe80::/64 dev eth1 metric 256 expires 21257697sec mtu 1500 advmss 1440 metric10 4294967295`  
` fe80::/64 dev eth3 metric 256 expires 21334065sec mtu 1500 advmss 1440 metric10 4294967295`  
` ff00::/8 dev eth1 metric 256 expires 21257697sec mtu 1500 advmss 1440 metric10 4294967295`  
` ff00::/8 dev eth3 metric 256 expires 21334065sec mtu 1500 advmss 1440 metric10 4294967295`  
` default via fe80::204:96ff:fe1d:1980 dev eth1 proto kernel metric 1024 expires 1661sec mtu 1500 advmss 1440 metric10 64`  
` default via fe80::204:96ff:fe1d:1980 dev eth3 proto kernel metric 1024 expires 1661sec mtu 1500 advmss 1440 metric10 64`  
` unreachable default dev lo proto none metric -1 error -101 metric10 255`

The following example shows the output when the **Enable** **default route redundancy** **on** **LAN1/LAN2** checkbox is selected. It displays two default routes each having a different metric number. For IPv4 networks, the primary default route has a metric value of 0 and the secondary default route has a metric value of 10. For IPv6 networks, the primary default route has a metric value of 1024 and the secondary default route has a metric value of 1124.

`Infoblox &gt; show routes`  
`From LAN1:`  
`IPv4 route table:`  
`10.33.55.0/24 dev oct1 scope link`  
`default via 10.33.55.1 dev oct1`

`IPv6 route table:`  
`2620:10a:6000:2290::/64 dev oct1 metric 1024`  
`default via 2620:10a:6000:2290::1 dev oct1 metric 1024`

`From IPv4 main route table:`  
`default via 10.34.1.17 dev oct3 proto ifplugd`  
`default via 10.34.52.1 dev oct1 proto ifplugd metric 10`  
`10.33.7.11/29 dev oct3 proto kernel scope link src 10.33.7.11`  
`10.33.7.11/29 dev oct3.103 proto kernel scope link src 10.33.7.11`  
`10.33.55.0/24 dev oct1 proto kernel scope link src 10.33.55.19`  
`10.33.55.0/24 dev oct1.245 proto kernel scope link src 10.33.55.19`  
`10.33.0.0/16 dev oct0 proto kernel scope link src 10.33.1.111`  
`From IPv6 main route table:`  
`2620:10a:6000:2203::/64 dev oct3 proto kernel metric 256`  
`2620:10a:6000:2203::/64 dev oct3.103 proto kernel metric 256`  
`2620:10a:6000:2290::/64 dev oct1 proto kernel metric 256`  
`2620:10a:6000:2290::/64 dev oct1.245 proto kernel metric 256`  
`2620:10a:6000:2500::/64 dev oct0 proto kernel metric 256`  
`fe80::/64 dev oct4 proto kernel metric 256`  
`fe80::/64 dev oct1 proto kernel metric 256`  
`fe80::/64 dev oct1.245 proto kernel metric 256`  
`fe80::/64 dev oct3 proto kernel metric 256`  
`fe80::/64 dev oct3.103 proto kernel metric 256`  
`fe80::/64 dev oct0 proto kernel metric 256`  
`default via 2620:10a:6000:2203::1 dev oct3 proto ifplugd metric 1024`  
`default via 2620:10a:6000:2290::1 dev oct1 proto ifplugd metric 1124`
