---
title: "Configuring a Forward Zone"
source: "/space/nios90/1432814229"
pageId: "1432814229"
---
When you want to forward queries for data in a particular zone, define the zone as a forward zone and specify one or more name servers that can resolve queries for the zone. You can also assign one or more external name servers as default forwarders for a forward zone. For example, define a forward zone so that the NIOS appliance forwards queries about a partner's internal site to a name server, which the partner hosts, configured just for other partners to access.

You can override the default forwarders for a forward-mapping zone at a Grid member level and configure custom forwarders. In other words, each Grid member can have its own forwarders for the forward zone. For example: a forward-mapping zone [http://foo.com](http://foo.com)  served by two Grid members M1 and M2 with M1 forwarding queries to 10.1.0.1 and 10.1.0.2 and M2 forwarding queries to 90.3.3.3 and 90.4.4.1. Note that the Grid member uses the default forwarders unless you override them at any level. For more information about domains and zones, see [*Configuring Authoritative Zone Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665332)*.*

> **warning**
>
> **Note**  
> The use of a forward zone is different from that of a forwarder. (A forwarder is a name server that performs recursive lookups on behalf of the name servers that forward queries to it. For more information, see [*Using Forwarders*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/317784896).) A NIOS appliance forwards queries to the name server of a forward zone because the name server can resolve queries for the zone. A NIOS appliance forwards queries to a forwarder regardless of zones.

The NIOS appliance automatically generates a name server record in the parent authoritative zone when a subdomain associated with the parent is conditionally forwarded. For example, consider that you configure the following within a single DNS view:

- An authoritative zone *parent.tld* where Grid member is the default primary.
- A subdomain *subdomain.parent.tld*, which is a conditional forwarding zone, and forwards queries to the *ns1.abczone.tld* zone with the IP address *1.2.3.4*.

NIOS automatically creates an *RDATA ns1.abczone.tld* name server record for *subdomain.parent.tld* in the *parent.tld* authoritative zone. You can however disable the generation of name server records and the NIOS appliance deletes all the existing name server records from the parent zone.

Note that a name server can have only one definition for a zone in any given DNS view; a forward zone cannot be configured on a member that already has a zone with the same domain name configured on it in the same DNS view.

*[children]*
