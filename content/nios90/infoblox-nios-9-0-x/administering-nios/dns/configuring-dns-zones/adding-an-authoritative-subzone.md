---
title: "Adding an Authoritative Subzone"
source: "/space/nios90/280763230"
pageId: "280763230"
---
After creating a zone, you can add more zones at the same level, or add subordinate zones (*subzones*). The subzones can be authoritative, delegated, forward, or stub. For simplicity, the zones created in this example are authoritative (as are all zones by default). For information about configuring the other zone types, see [*Configuring Delegated, Forward, and Stub Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-delegated-forward-and-stub-zones)*.*  
You create an authoritative zone when you assign authority for all the resource records of a particular domain to one or more name servers. You create a subzone when you assign authority for all the resource records of a subdomain to name servers. The name servers can be the same as, or different from, the name servers that serve resource records for the parent domain.  
The distinction between domains and zones is that domains provide a logical structure to the DNS name space while zones provide an administrative structure. The difference between domains and subdomains and zones and subzones is that the terms *subdomains* and *subzones* reference their relationship to a parent domain or zone. With the exception of the root domain and root zone, all domains are subdomains and all zones are subzones.  
You can organize a domain based on logical divisions such as type (.com, .gov, .edu; or sales, eng, sup) or location (.uk, .jp, .us; or hq, east, west). The below figure shows one way to organize the external (public) name space and the internal (private) name space for a corporation with the domain name *example.com*. The external name space follows standard DNS conventions. Internally, you create an individual subdomain and corresponding subzone for each department.

*Domains* *and* *Subdomains,* *and* *Forward-Mapping* *Zones* *and* *Subzones*

*[drawio]*

> **warning**
>
> ### Note
> 
> Throughout this documentation, the trailing dot indicating the root zone is not shown, although its presence is assumed.

The procedure for adding a subzone is the same as that used to add an authoritative zone. The only difference is that you specify the subzone name in the **Name** field. For information about adding authoritative zones, see [*Configuring Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones)*.*
