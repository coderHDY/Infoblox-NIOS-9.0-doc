---
title: "Excluding Domains From Query and Response Capture"
source: "/space/nios90/1380844401"
pageId: "1380844401"
---
You can exclude individual domains and their subdomains from DNS query and response capturing. You can also use the Bulk Add Domains feature for a subset of domains to exclude them from query and response capturing.  
Subdomains can also be specified for exclusion. NIOS matches the specified domain names and their subdomains while filtering them in the Exclusion list. For example, when you specify 'foo.com' as the domain to be excluded, NIOS filters queries for 'foo.com,' 'mail.foo.com,' and 'ftp.foo.com.'

> **warning**
>
> ### Note
> 
> IDNs are not supported for the domains that are added to the Inclusion list and Exclusion list. You can use the punycode representation of an IDN in these lists.

To exclude a domain from query and response capturing, do the following:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the **Toolbar** and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode** and select the **Logging** tab.
3. Under **Data** **Collection** **for** **all** **DNS** **Queries/Responses** **to** **a** **Domain**, select the **Exclude** **the** **following** **domains** checkbox.
4. Click the Add icon and select **Add** **Domain** or **Bulk** **Add** **Domains** and specify domains in the Domain table.

> **warning**
>
> ### Note
> 
> NIOS first matches the domains in the Exclusion list and then matches the domains in the Inclusion list. NIOS does not capture queries and responses for the subdomains in the **Capture** **DNS** **Queries/Responses** list (Inclusion list) if their domains are added to the **Exclude** **the** **following** **domains** **list** (Exclusion list).

The following table provides examples of domains and subdomains added to the inclusion and exclusion lists and the corresponding effects on the query and response capture operations:

| Capture DNS Queries/Responses   (Inclusion List) | Exclude the Following Domains   (Exclusion List) | Queried Domain | Captured Queries/Responses | Results |
| --- | --- | --- | --- | --- |
| foo.com | it.foo.com | foo.com  finance.foo.com | Yes | Does not match the exclusion list and therefore NIOS captures queries/responses made to foo.com and finance.foo.com. |
|  |  | it.foo.com  ms.it.foo.com | No | Matches the exclusion list and excludes their subdomains. NIOS does not capture queries/responses made to it.foo.com and ms.it.foo.com. |
| it.foo.com | foo.com |  |  | Domain is added to the exclusion list and its subdomain is added to the inclusion list. Therefore, this is not a valid configuration as queries/responses are not captured. The appliance displays a warning message for such invalid configuration. |
| it.foo.com | it.foo.com |  |  | Domain is added to both the exclusion and the inclusion lists. This is not a valid configuration as queries/responses are not captured. The appliance displays a warning message for such invalid configuration. |
| foo.com | corp1.com |  |  | Domain added to the inclusion list is not the subdomain of the domain added to the exclusion list. This is a redundant configuration as the outcome is the same even if the domain is removed from the Exclusion list. The appliance displays a warning message for such invalid configuration. |
| foo.com |  | foo.com  finance.foo.com | Yes | Exclusion list is empty and therefore matches the Inclusion list. NIOS captures queries/responses made to foo.com and finance.foo.com |
|  |  | corp1.com | No | NIOS does not capture queries/responses made to corp1.com as this domain is not mentioned in the inclusion list. |
| Capture All | foo.com | foo.com | No | Matches the exclusion list and NIOS does not capture queries made to foo.com. |
|  |  | finance.foo.com | No | Subdomain matches the exclusion list and NIOS does not capture queries/responses made to finance.foo.com. |
|  |  | corp2.com | Yes | Does not match the exclusion list. Matches the inclusion list and therefore NIOS captures queries/responses made to corp1.com. |
