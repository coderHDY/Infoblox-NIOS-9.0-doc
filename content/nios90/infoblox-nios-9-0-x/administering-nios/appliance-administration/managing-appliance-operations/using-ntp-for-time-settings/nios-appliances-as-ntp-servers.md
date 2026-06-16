---
title: "NIOS Appliances as NTP Servers"
source: "/space/nios90/1449263248"
pageId: "1449263248"
---
After you enable NTP on a Grid, the Grid members—including the Grid Master—can function as NTP servers to clients in different segments of the network. Similarly, after you enable NTP on an independent appliance or an HA pair, and it synchronizes its time with an NTP server, you can configure it to function as an NTP server as well. When you configure DNS anycast addressing on a Grid member and use it as an NTP server, the member can answer NTP requests from other NTP clients through the anycast IP address.

*Grid* *Members* *as* *NTP* *Servers*

![image](/assets/1449263248/fdac241f-7bd0-42e6-b7e6-533e1b73428b.png)

To configure a NIOS appliance as an NTP server, perform the following tasks:

- Enable the appliance as an NTP server.
- Enable authentication between the appliance and its NTP clients.
- Optionally, specify which clients can access the NTP service of the appliance.
- Optionally, specify which clients can use ntpq to query the appliance.
