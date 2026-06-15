---
title: "Configuring DNSSEC on a Grid"
source: "/space/nios90/280664491"
pageId: "280664491"
---
You can configure the name servers in a Grid to support DNSSEC. You can configure the Grid Master as the primary server for a signed zone and the Grid members as secondary servers. (For more information, see [*Configuring Grid Members to Support DNSSEC as Secondary Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404953).) Note that only the Grid Master can serve as the primary server for a signed zone. Only the Grid Master can re-sign DNSSEC keys, and it must be primary for signed zones (as well as for signed zones with DNS Traffic Control records). That is, the Grid Master must serve the whole part of the configuration in which DNSSEC is used. Therefore, a running DNS service, DNS and DNS Traffic Control licenses are required on the Grid Master to use DNSSEC.

You can enable the Grid Master to sign zones and manage the DNSSEC keys, or you can configure the Grid Master as a client to a third-party, network-attached Hardware Security Module (HSM) that performs the key generation, zone signing, and key safekeeping. You must use either the Grid Master or HSM for zone signing and key management; you cannot use both. Note that each method may have different performance implications, depending on the hardware platform, number of zones and other factors. For information about using HSMs, see* *[*About HSM Signing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664372).  
Any authoritative forward-mapping or reverse-mapping zone can be signed according to the following criteria:

- The zone does not contain any bulk host records.
- DNSSEC is enabled on the Grid Master.
- The primary server of the zone must be a Grid member. If the zone is assigned to an NS group, the primary server in the group must be a Grid member that has DNSSEC enabled.

Note that you can use DNS views to separate internal and external zone data, to manage your zones more efficiently and reduce the size of the zones that require signing. For information about DNS views, see [*About DNS Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763374).

# Grid Master as Primary Server

When you sign a zone whose primary server is a Grid member, that member becomes a secondary server and the Grid Master becomes the hidden primary server. If the zone is assigned to an NS group, the Grid Master removes the association with the NS group. The previous primary server becomes a secondary server for the zone.  
If a Master Candidate is promoted to Grid Master and the previous Grid Master was the primary server for signed zones, the new Grid Master becomes the hidden primary server for all signed zones. The previous Grid Master, which was the primary server for the zone, becomes a secondary server for the zone.  
As the primary server, the Grid Master sends zone data to the secondary servers through zone transfers; or, if the secondary servers are Grid members, the Grid Master transfers data to all Grid members through the database replication process, by default. The Grid Master transfers all records in that zone, including all NSEC/NSEC3, RRSIG, DNSKEY and DS records with owner names that belong to that zone. The RRSIG RRs are included in zone transfers of the zone in which they are authoritative data. The Grid Master also performs incremental zone transfers to secondary servers as a result of incremental zone signings.  
In addition, the Grid Master automatically performs an incremental signing of the zone data sets when their contents change. Incremental signing refers to signing just those parts of a zone that change when RRs are added, modified, or deleted. The Grid Master uses the private key of the ZSK when it incrementally signs a zone. In addition, the Grid Master adds, modifies or deletes the corresponding RRSIG records and the appropriate NSEC/NSEC3 records.  
For example, the following Figure shows a Grid Master as the primary server of a signed zone and its Grid members as secondary servers. The Grid Master, ns1.example.com, is the hidden primary DNS server for the example.com zone. As the hidden primary name server for example.com, the Grid Master does not respond to queries from other name servers. Instead, it provides data to its secondary servers, ns2.example.com and ns3.example.com, which use this data to respond to DNS queries. Because the secondary servers are Grid members, they receive zone data from the Grid Master through the Grid database replication process.  
The name server ns1.exam200.com is a recursive name server. It has configured the DNSKEY of the example.com zone as a trust anchor. Therefore, it is able to validate the data it receives when it sends a query for the example.com zone.   
  
Following are the tasks to configure the Grid Master to sign zones:

*[drawio]*

1. Create the zones. For information, see [*Configuring Authoritative Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763330).
   
   - Specify the Grid Master as the primary server.
2. Enable DNSSEC, as described in [*Enabling DNSSEC*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762310).
3. Optionally, change the default DNSSEC settings. For information, see [*Setting DNSSEC Parameters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762276).
4. Sign the zone. The appliance automatically generates the DNSSEC RRs when you sign a zone. For information, see [*Signing a Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696).
