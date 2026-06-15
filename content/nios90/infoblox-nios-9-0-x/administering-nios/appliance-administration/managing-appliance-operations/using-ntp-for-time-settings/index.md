---
title: "Using NTP for Time Settings"
source: "/space/nios90/319488612"
pageId: "319488612"
---
NTP (Network Time Protocol) is a standard protocol that system clocks use to ensure their time is always accurate. Appliances that use NTP try to get their time as close as possible to UTC (Coordinated Universal Time), the standard timescale used worldwide. NTP uses UDP (User Datagram Protocol) on port 123 for communications between clients and servers.

NTP is based on a hierarchy where reference clocks are at the top. Reference clocks use different methods such as special receivers or satellite systems to synchronize their time to UTC. NTP servers on the first level of the hierarchy synchronize their time with the reference clocks, and serve time to clients as well. Each level in the hierarchy is a stratum; stratum-0 is a reference clock. Stratum-1 servers synchronize their clocks with reference clocks. Stratum-2 servers synchronize their clocks with stratum-1 servers, and so forth. The stratum number indicates the number of levels between the NTP server and the reference clock. A higher stratum number could indicate more variance between the NTP server and the reference clock.

You can configure a NIOS appliance to function as an NTP client that synchronizes its clock with an NTP server. For more information, see NIOS Appliances as NTP Clients below. NTP clients typically use time information from at least three different sources to ensure reliability and a high degree of accuracy. There are a number of public NTP servers on the Internet with which the NIOS appliance can synchronize its clock. For a list of these servers, you can access  [http://www.ntp.org](http://www.ntp.org). When NTP is configured, it listens on all interfaces, including the loopback interface on the NIOS appliance.

In a Grid, the Grid Master and Grid members can function as NTP clients that synchronize their clocks with external NTP servers. They can in turn function as NTP servers to other appliances in the network. For more information, see NIOS Appliances as NTP Servers.   
Note that when the Grid Master functions as an NTP server, it synchronizes its local clock with its NTP clients and provides NTP service to the following:

- Grid Master functions as an NTP server for its Grid members, these members synchronizes its time with Grid Master, without configuring an external NTP server.
- Configuring an external NTP servers in the Grid NTP properties, Infoblox Grid Master can function as an NTP server for its Grid members. If you configure external NTP servers in *Member NTP properties*, and members do not enable **Exclude the Infoblox Grid Master as an NTP Server** Grid Master as its NTP server, it will display Grid Master in the NTP server list. If you enable **Exclude the Infoblox Grid Master as an NTP Server **option in Grid member, Grid Master will not be displayed in Grid members NTP server list.

This allows you to deploy multiple NTP servers to ensure accurate and reliable time across the network. To configure the Grid Master and Grid members as NTP clients, you must first enable the NTP service and configure external NTP servers at the Grid level. You can then configure the Grid Master and Grid members to override the Grid-level NTP servers and use their own external NTP servers. Note that a Grid member will not function as an NTP client if you do not enable **Synchronize the Grid with these External NTP Servers** option, or by selecting the **Synchronize this Member with other NTP Servers** option at Member *NTP Properties*. A Grid member synchronizes its clock with the Grid Master if you do not configure it to use external NTP servers. When an NTP service-enabled member goes offline from the grid, that member sets the Grid Master's NTP configurations. If the Grid Master goes offline (because of a shutdown or a disconnecting network, and so on), the Grid Master Candidate and Grid members synchronize with the external NTP servers.

In case of leap second insertion, the Infoblox Grid handles the leap second over a period of time instead of performing a one-time adjustment. In other words, when using the Grid as the NTP server, it follows the standard NTP recovery process by slewing over a certain period of time when handling the leap second. The slewing process could therefore cause synchronization issues among NTP clients. The out-of-sync state is usually resolved when all NTP clients catch up with the server.

The following figure illustrates how NIOS appliances (the Grid Master and Grid members) in a Grid function as the NTP server or the NTP client, depending on your NTP configuration.

> **warning**
>
> ### Note
> 
> The NTP service supports both IPv4 and IPv6 networks.

*Infoblox* *Appliances* *as* *NTP* *Servers*

*[inc-drawio]*

# Key Points for a Healthy NTP Chain

The following guidelines act as an indicator to a healthy NTP chain:

- Stratum numbers must increment by 1 for each hop from the root NTP server.
- No device must display stratum 16, indicating unsynchronization.
- All devices must have an “*” next to their NTP peer, signifying successful synchronization.
- Jitter and offset values must remain low and stable.
