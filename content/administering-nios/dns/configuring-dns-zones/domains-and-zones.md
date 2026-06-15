---
title: "Domains and Zones"
source: "/space/nios90/280665252"
pageId: "280665252"
---
After creating a zone, you can add more zones at the same level, or add subordinate zones (*subzones*). The subzones can be authoritative, delegated, forward, or stub.

The distinction between domains and zones is that domains provide a logical structure to the DNS name space while zones provide an administrative structure. The difference between domains and subdomains and zones and subzones is that the terms *subdomains* and *subzones* reference their relationship to a parent domain or zone. With the exception of the root domain and root zone, all domains are subdomains and all zones are subzones.

You can organize a domain based on logical divisions such as type (.com, .gov, .edu; or sales, eng, sup) or location (.uk, .jp, .us; or hq, east, west). The following figure shows one way to organize the external (public) name space and the internal (private) name space for a corporation with the domain name *example.com*. The external name space follows standard DNS conventions. Internally, you create an individual subdomain and corresponding subzone for each department.

*Domains* *and* *Subdomains,* *and* *Forward-Mapping* *Zones* *and* *Subzones*

*[drawio]*

On the Infoblox appliance, you can configure and manage DNS zones and subzones.

# IDN Support For DNS Zones

Grid Manager supports IDNs for DNS zones and resource records. For information about IDN, see [*Managing Internationalized Domain Names*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661204). You can use either IDN or punycode (representation of IDN) to create DNS zones. Even if you use punycode to create a zone, the appliance automatically generates the corresponding IDN and displays the zone name in its native characters. Make sure that you use valid punycode to create a DNS zone. If you specify an invalid punycode, the appliance retains the punycode and does not convert it into IDN. Note that the appliance displays both the IDN and punycode for an IDN zone.

The following table summarizes how the appliance displays IDNs at the DNS zone level:

| **Input** | **NIOS** **Displays...** | **NIOS** **DNS** **Domain** **(Punycode** **in** **the** **GUI)** | **Conversion** **Guidelines** |
| --- | --- | --- | --- |
| hello.com | hello.com | hello.com | No conversion |
| прывітанне.com | прывітанне.com | xn--80adk5aaihr3f9e.com | IDN to punycode |
| xn--80adk5aaihr3f9e.com | прывітанне.com | xn--80adk5aaihr3f9e.com | Punycode to IDN |
| \xyz format | \xyz format | \xyz format | No conversion |
