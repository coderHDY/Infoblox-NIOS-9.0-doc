---
title: "Configuring Stub Zones"
source: "/space/nios90/1432748784"
pageId: "1432748784"
---
A stub zone contains records that identify the authoritative name servers in the zone. It does not contain resource records for resolving IP addresses to hosts in the zone. Instead, it contains the following records:

- SOA (Start of Authority) record of the zone
- NS (name server) records at the apex of the stub zone
- A (Address) records that map the name servers to their IP addresses

Stub zones, like secondary zones, obtain their records from other name servers. Their records are read only; therefore, administrators do not manually add, remove, or modify the records.

Stub zone records are also periodically refreshed, just like secondary zone records. However, secondary name servers contain a complete copy of the zone data on the primary server. Therefore, zone transfers from a primary server to a secondary server, or between secondary servers, can increase CPU usage and consume excessive bandwidth. A name server hosting a stub zone maintains a much smaller set of records; therefore, updates are less CPU intensive and consume less bandwidth.

When a name server hosting a stub zone receives a query for a domain name that it determines is in the stub zone, the name server uses the records in the stub zone to locate the correct name server to query, eliminating the need to query the root server.

The figures Processing a Query without a Stub Zone and Processing a Query with a Stub Zone below illustrate how the NIOS appliance resolves a query for a domain name for which it is not authoritative. The following figure[ ](/wiki/pages/resumedraft.action?draftId=26775489#ConfiguringDelegated,Forward,andStubZones-bookmark1812)illustrates how the appliance resolves a query when it does not have a stub zone.

The figure *Processing a Query with a Stub Zone *illustrates how the appliance resolves the query with a stub zone.

In the figure Processing a Query without a Stub Zone, a client sends a query for ftp.sales.exam200.com to the NIOS appliance. When the appliance receives the request from the client, it checks if it has the data to resolve the query. If the appliance does not have the data, it tries to locate the authoritative name server for the requested domain name. It sends nonrecursive queries to a root name server and to the closest known name servers until it learns the correct authoritative name server to query.

*Processing* *a* *Query* *without* *a* *Stub* *Zone*

*[drawio]*



In the following figure Processing a Query with a Stub Zone, when the NIOS appliance receives the request for the domain name in exam200.com, it determines it does not have the resource records to resolve the query. It does, however, have a list of the authoritative name servers in the stub zone, exam200.com. The appliance then sends a query directly to the name server in exam200.com.   
 *Processing* *a* *Query* *with* *a* *Stub* *Zone*

*[drawio]*

Stub zones facilitate name resolution and alleviate name server traffic in your network. For example, the client in the previous examples is in example.com. The example.com and exam200.com zones are partners, and send all their communications through a VPN tunnel, as shown in the figure Stub Zone Configuration above. The firewall protecting example.com is configured to send all messages for the 10.2.2.0/24 network through the VPN tunnel. Infoblox_A hosts the stub zone for exam200.com. Therefore, when the host in example.com sends a query for ftp.sales.exam200.com, Infoblox_A obtains the IP address of Infoblox_B (10.2.2.7) from its stub zone records and sends the query to the firewall protecting example.com.

Because the destination of the query is in the 10.2.2.0/24 network, the firewall (configured to encrypt all traffic to the network) sends the request through a VPN tunnel to Infoblox_B. Infoblox_B resolves the query and sends back the response through the VPN tunnel. All name server traffic went through the VPN tunnel to the internal servers, bypassing the root servers and external name servers.

*Stub* *Zone* *Configuration*

*[drawio]*

In parent-child zone configurations, using stub zones also eases the administration of name servers in both zones. For example, as shown in figure Stub Zone Configuration above, sales.exam200.com is a child zone of exam200.com. On the exam200.com name servers, you can create either a delegated zone or a stub zone for sales.exam200.com.

When you create a delegated zone, you must first specify the name servers in the delegated zone and manually maintain information about these name servers. For example, if the administrator in sales.exam200.com changes the IP address of a name server or adds a new name server, the sales.example.com administrator must inform the exam200.com administrator to make the corresponding changes in the delegated zone records.

If, instead, you create a stub zone for sales.exam200.com, you set up the stub zone records once, and updates are then done automatically. The name servers in exam200.com that are hosting a stub zone for sales.exam200.com automatically obtain updates of the authoritative name servers in the child zone.

In addition, a name server that hosts a stub zone can cache the responses it receives. Therefore, when it receives a request for the same resource record, it can respond without querying another name server.

*[children]*
