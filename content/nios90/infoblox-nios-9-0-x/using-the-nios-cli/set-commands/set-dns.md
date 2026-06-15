---
title: "set dns"
source: "/space/nios90/280757323"
pageId: "280757323"
---
The` ``set`` ``dns`` `command enables you to control the DNS cache. You can flush the cache file of a DNS view or flush a particular entry from a cache file. You can also flush a specific domain and its subdomains from the DNS cache. In addition, you can schedule an inbound zone transfer from an external primary server. This command displays IDN data in punycode. You can also use this command to delete cache files from the default DNS view for DNS cache acceleration on IB-FLEX.

# Syntax

`set dns flush all [``dns_view``]`  
`set dns flush name ``name ``[``dns_view``]`  
`set dns transfer ``zone ``[``dns_view``]`  
`set dns flush tree &lt;``part-of-domain-name``&gt; [``dns_view``]`

| **Argument** | **Description** |
| --- | --- |
| `all`` ` | Flushes the cache file from the default view. |
| `dns_view`` ` | Specifies a particular DNS view. |
| `name`` ` | Flushes the specific entry from the cache. |
| `zone`` ` | Specifies the zone for the inbound transfer from an external primary server. |
| `tree &lt;part-of-domain-name&gt;`` ` | Flushes the specified domain and its subdomains from the DNS cache. For example, if you enter the domain name corp100.com, then the specified domain and its subdomains such as www.corp100.com, corp100.com, x.corp100.com, etc. are cleared from the DNS cache. |

# Example

## Flush the cache file from the default DNS view

`Infoblox &gt; ``set`` ``dns`` ``flush`` ``all`

## Flush the specified domain and its subdomains from the default DNS view

`Infoblox &gt; ``set`` ``dns`` ``flush tree corp100.com default`
