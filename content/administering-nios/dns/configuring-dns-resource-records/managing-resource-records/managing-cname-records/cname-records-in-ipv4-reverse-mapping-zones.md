---
title: "CNAME Records in IPv4 Reverse-Mapping Zones"
source: "/space/nios90/1422721365"
pageId: "1422721365"
---
You can add CNAME records to an IPv4 reverse-mapping zone to create ALIASes to addresses maintained by a different name server when the reverse-mapping zone on the server is a delegated child zone with fewer than 256 addresses. This technique allows you to delegate responsibility for a reverse-mapping zone with an address space of fewer than 256 addresses to another authoritative name server. See the following figure and *RFC* *2317,* *Classless* *IN-ADDR.ARPA* *delegation*.



*CNAME* *Records* *in* *a* *Reverse-Mapping* *Zone*

*[drawio]*

You add CNAME records in the parent zone on your name server. The ALIASes defined in those CNAME records point to the addresses in PTR records in the child zone delegated to the other server.

When you define a reverse-mapping zone that has a netmask from /25 (255.255.255.128) to /31 (255.255.255.254), you must include an RFC 2317 prefix. This prefix can be anything, from the address range (examples: 0-127, 0/127) to descriptions (examples: first-network, customer1). On a NIOS appliance, creating such a reverse-mapping zone automatically generates all the necessary CNAME records. However, if you need to add them manually to a parent zone that has a child zone with fewer than 255 addresses.
