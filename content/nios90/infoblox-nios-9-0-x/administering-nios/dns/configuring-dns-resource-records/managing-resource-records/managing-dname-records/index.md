---
title: "Managing DNAME Records"
source: "/space/nios90/1422590259"
pageId: "1422590259"
---
A DNAME record maps all the names in one domain to those in another domain, essentially substituting one domain name suffix with the other (see RFC 2672, *Non-Terminal* *DNS* *Name* *Redirection*). For example, adding a DNAME record to the example.com domain mapping "example.com" to "exam200.com" maps *name-x*.example.com to *name-x*.exam200.com:

| **Domain** **Name** |  | **Target** **Domain** **Name** |
| --- | --- | --- |
| server1.**example.com** | —&gt; | server1.**exam200.com** |
| server2**.example.com** | —&gt; | server2.**exam200.com** |
| server3.**example.com** | —&gt; | server3.**exam200.com** |
| **.** **.** **.** **.example.com** | —&gt; | . . . .**exam200.com** |



> **warning**
>
> ### Note
> 
> If a DNAME record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **ALIAS** and **Target** fields display the domain name in UTF-8 encoded format. For example, a DNAME record with the domain name 电脑 .test.com added through DDNS updates displays \231\148\181\232\132\145.test.com in the **ALIAS** and **Target** fields.

When a request arrives for a domain name to which a DNAME record applies, the NIOS appliance responds with a CNAME record that it dynamically creates based on the DNAME definition. For example, if there is a DNAME record:

`example.com.                                                          DNAME                                       exam200.com.`

and a request arrives for server1.example.com, the NIOS appliance responds with the following CNAME record:

`server1.example.com.                                                  CNAME                                       server1.exam200.com.`

If responding to a name server running BIND 9.0.0 or later, the NIOS appliance also includes the DNAME record in its response, so that name server can also create its own CNAME records based on the cached DNAME definition.

The following are two common scenarios for using DNAME records:

- One company buys another and wants people using both the old and new name spaces to reach the same hosts.
- A virtual Web hosting operation offers different "vanity" domain names that point to the same server or servers.  
  There are some restrictions that apply to the use of DNAME records:
- You cannot have a CNAME record and a DNAME record for the same subdomain.
- You cannot use a DNAME record for a domain or subdomain that contains any subdomains. You can only map the lowest level subdomains (those that do not have any subdomains below them). For an example of using DNAME records in a multi-tiered domain structure, see the following figure.

*Adding* *DNAME* *Records* *for* *the* *Lowest* *Level* *Subdomains*

*[drawio]*

In the case of a domain structure consisting of a single domain (no subdomains), adding a DNAME record redirects queries for every name in the domain to the target domain, as shown in the following figure.

*Adding* *a* *DNAME* *Record* *for* *a* *Single* *Domain*

*[drawio]*

When using a DNAME record, you must copy the resource records for the source domain to the zone containing the target domain, so that the DNS server providing service for the target domain can respond to the redirected queries.

| **Copy** ** from ** ** example.com ** | **to ** ** example.exam200.com ** |
| --- | --- |
| www1 IN A 10.1.1.10 | www1 IN A 10.1.1.10 |
| www2 IN A 10.1.1.11 | www2 IN A 10.1.1.11 |
| ftp1 IN A 10.1.1.20 | ftp1 IN A 10.1.1.20 |
| mail1 IN A 10.1.1.30 | mail1 IN A 10.1.1.30 |



After copying these records to the zone containing the example.exam200.com domain, delete them from the zone containing the example.com domain.

If DNS service for the source and target domain names is on different name servers, you can import the zone data from the NIOS appliance hosting the source domain to the appliance hosting the target domain. For information about this procedure, see [*Importing Zone Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/importing-zone-data).

If DNS service for the source and target domain names is on the same name server and the parent for the target domain is on a different server, you can delegate DNS services for the target domain name to the name server that provided—and continues to provide—DNS service for the source domain name (see the figure below). By doing this, you can continue to maintain resource records on the same server, potentially simplifying the continuation of DNS administration.

*Making* *the* *Target* *Zone* *a* *Delegated* *Zone*

*[drawio]*

> **warning**
>
> ### Note
> 
> This is a conceptual representation of domain name mapping and depicts the resulting hierarchical relationship of exam200.com as the parent zone for example.exam200.com. The hosts are not physically relocated.



The following tasks walk you through configuring the two appliances in the *Making* *the* *Target* *Zone* *a* *Delegated* *Zone *figure to redirect queries for example.com to example.exam200.com using a DNAME record:

On the [ns1.example.com](http://ns1.corpxyz.com) name server, perform the following steps:

1. Create a new forward-mapping zone called example.exam200.com. See [*Creating an Authoritative Forward-Mapping Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-forward-mapping-zone).
2. Copy all the resource records for the domain or subdomain to which the DNAME record is going to apply from example.com to example.exam200.com.
   
   Because you can only specify the records by type, not individually, you might have to copy some records that you do not want and then delete them from the example.exam200.com zone.
3. In the example.com zone, delete all the resource records for the domain or subdomain to which the DNAME record is going to apply.
4. Add a DNAME record to the example.com zone specifying "example.com" as the domain and "example.exam200.com" as the target domain. Adding a DNAME record is explained in the next section.
5. On the ns1.exam200.com name server, add example.corp200.com as a delegated zone and specify ns1.example.com as the name server for it. See[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-delegated-forward-and-stub-zones)[*Configuring a Delegation*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-delegated-forward-and-stub-zones).
