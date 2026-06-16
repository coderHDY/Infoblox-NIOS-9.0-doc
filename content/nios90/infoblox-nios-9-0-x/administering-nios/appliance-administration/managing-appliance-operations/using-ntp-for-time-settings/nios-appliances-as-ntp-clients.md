---
title: "NIOS Appliances as NTP Clients"
source: "/space/nios90/1449394329"
pageId: "1449394329"
---
You can configure an independent NIOS appliance, a Grid Master, or any Grid member in a Grid as an NTP client that synchronizes its system clock with an external NTP server.

> **warning**
>
> ### Note
> 
> You can configure NIOS appliance as NTP client in either IPv4, IPv6, or dual mode (IPv4 and IPv6) network environment.

When you enable a NIOS appliance to function as an NTP client, you must specify at least one NTP server with which the appliance can synchronize its clock. Infoblox recommends that you specify multiple NTP servers that synchronize their time with different reference clocks and that have different network paths. This increases stability and reduces risk in case a server fails. For a list of public NTP servers, you can access [www.ntp.org.](http://www.ntp.org/)   
When you specify multiple NTP servers, the NTP daemon on the appliance determines the best source of time by calculating round-trip time, network delay, and other factors that affect the accuracy of the time. NTP periodically polls the servers and adjusts the time on the appliance until it matches the best source of time. If the difference between the appliance and the server is less than five minutes, the appliance adjusts the time gradually until the clock time matches the NTP server. If the difference in time is more than five minutes, the appliance immediately synchronizes its time to match that of the NTP server.  
To secure communications between a NIOS appliance and an NTP server, you can authenticate communications between the appliance and the NTP server. When you configure authentication, you must obtain the key information from the administrator of the NTP server and enter the key on the appliance. For information, see Authenticating NTP above.  
In a Grid, you can configure the Grid Master and Grid members to synchronize their clocks with external NTP servers. When you enable the NTP service on the Grid, the Grid Master automatically functions as an NTP server to the Grid members. A Grid member can synchronize its time with the Grid Master, an external NTP server, or another Grid member. When Grid members synchronize their times with the Grid Master, the Grid Master and its members send NTP messages through an encrypted VPN tunnel, as shown in the following figure. When a Grid member synchronizes its time with another Grid member, the NTP messages are not sent through a VPN tunnel.

> **warning**
>
> ### Note
> 
> Grid member cannot act as an NTP server to the Grid Master.



*Grid* *Master* *as* *NTP* *Client*

![image](/assets/1449394329/83e45302-c2b3-4fb3-9675-92ec417fa875.png)
