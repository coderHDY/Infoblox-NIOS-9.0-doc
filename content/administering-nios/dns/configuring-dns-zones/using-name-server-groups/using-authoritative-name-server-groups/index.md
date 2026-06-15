---
title: "Using Authoritative Name Server Groups"
source: "/space/nios90/1340474125"
pageId: "1340474125"
---
An authoritative name server group is a collection of one or more primary DNS servers and secondary DNS servers. After you create an authoritative NS group, you can then assign it to serve authoritative forward-mapping and reverse-mapping zones. When you assign an authoritative NS group to an authoritative zone, Grid Manager automatically generates an NS record, a glue A or AAAA record, and a PTR record for each name server available in the NS group. But if the zone is disabled, Grid Manager does not generate these records.  
Grid Manager generates authoritative A, AAAA, and PTR records when:

- A Grid member is added to a Grid, whose host name belongs to the name space of the authoritative zone and vice versa.
- An external name server is assigned to a zone, whose host name belongs to the name space of the authoritative zone.

> **warning**
>
> ### Note
> 
> Grid Manager does not generate an NS record when the DNS service for the member is disabled.

The performance of the following functions significantly improve when you assign an NS group to a zone instead of specifying multiple name servers individually:

- Starting and Stopping the DNS service.
- Reparenting the zones after removing or restoring a zone.
- Modifying the zone data.

> **warning**
>
> ### Note
> 
> Only superusers can create and manage name server groups

In this section:

*[children]*
