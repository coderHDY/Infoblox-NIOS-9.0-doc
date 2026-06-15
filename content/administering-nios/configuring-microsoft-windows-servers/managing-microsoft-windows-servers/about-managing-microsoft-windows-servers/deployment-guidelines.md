---
title: "Deployment Guidelines"
source: "/space/nios90/380928092"
pageId: "380928092"
---
Following are some recommendations and considerations when configuring Grid members to manage Microsoft servers:

- Infoblox recommends that you schedule the initial synchronization at a time when your network is less busy, especially if you are synchronizing a large amount of data. In addition, if a Microsoft server reconnects after being disconnected for a long period of time, it could synchronize a significant amount of data and this could impact the Grid Master performance.
- vNIOS Grid members and Grid members running on Infoblox-250, Trinzic 100, and Trinzic 810 appliances do not support being configured as managing members.
- The managing member must be close, in terms of network hops, latency and bandwidth, to the Microsoft servers that it manages. This will help reduce the synchronization time and potential retries due to network delays.
- Although a Grid member that manages Microsoft servers can run other protocols and services, to optimize performance, Infoblox recommends that you configure one or more members solely for managing Microsoft servers.
- Grid members connect to Microsoft servers using RPC calls over TCP/IP. You must adjust your firewall policies to allow traffic between the managing Grid member and its assigned Microsoft servers. Grid members use the VIP as their source port. In Windows Server 2003, RPC uses the dynamic port range 1025-5000, by default. In Windows Server 2008, RPC uses the dynamic port range 49152-65535, by default. You can reduce the number of available ports as follows:
  
  - In Windows Server 2019, use the rpccfg.exe tool. For information, refer to *[http://support.microsoft.com/kb/908472](http://support.microsoft.com/kb/908472)*.
  - In Windows Server 2022 and later, use the netsh tool. For information, refer to *[http://support.microsoft.com/kb/929851](http://support.microsoft.com/kb/929851)*.

The minimum number of ports required in the range is 255.  
Note that TCP ports 135 and 445 must be open on the Microsoft server, in addition to the dynamic port range. Ports 135 and 445 are used by the port mapper interface, which is a service on the Microsoft server that provides information to clients on which port to use to connect to a specific service, such as the service that allows the management of the DNS service.

- The capacity of the managing member must be greater than or equal to the sum of all its assigned Microsoft servers.
- The capacity of the Grid Master must be greater than or equal to the sum of all managed Microsoft servers
- A Microsoft server can synchronize its data to only one network view, and for DNS data, only one DNS view.
- Multiple Microsoft servers can synchronize their data into the same network view and DNS view, unless there is a conflict in their data. For example, two Microsoft servers in different locations could serve the same private IP address space, such as 10.1.0.0/16, or serve reverse-mapping zones with the same name, such as 10.in-addr.arpa. Synchronizing their data to the same network view and DNS view would cause conflicts which result in the Grid member synchronizing the data of only one Microsoft server and logging an error for the other Microsoft server. In such situations, Infoblox recommends that you synchronize each Microsoft server to a different network view and DNS view to ensure that data from both servers are synchronized.

- This release supports the following Microsoft IPAM enhancements:
  
  - Monitor and control settings for DNS and DHCP services for Microsoft servers
  - Synchronization of IP addresses with invalid MAC addresses
  - Output destination for Microsoft server log messages in the syslog
  - Synchronization and configuration of Microsoft DHCP failover relationships
  - RPC (Remote Policy Call) timeout setting
  - Maximum concurrent connections for Microsoft servers
  - Enabling and Disabling DNS zone synchronization
  - The ability to allow GSS-TSIG based DDNS updates from multiple clients in a single forest or multiple forests using keys that are appropriate for their respective domains.
