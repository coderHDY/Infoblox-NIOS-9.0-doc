---
title: "DNS Resource Records"
source: "/space/nios90/1348534281"
pageId: "1348534281"
---
Consider the following authority delegation guidelines mentioned in the table below when you create, modify, or delete a resource record, including A, AAAA, CNAME, PTR, MX, SRV, TXT, NAPTR records.  
See [*Sample Cloud API Requests*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667760) for a sample cloud API request.

*Authority Delegation for DNS Resource Records*

| **Cloud API Requests** | ** Standard API and WAPI Requests** | **Comments** |
| --- | --- | --- |
| - Authority delegation for resource records (A, AAAA, CNAME, PTR, MX, SRV, TXT, and NAPTR) is inherited from their parent zones. You can delegate authority for these records by delegating authority for their respective parent zones. - All resource records in a DNS zone inherit authority delegation from their parent zones. However, you cannot modify the NS record through a cloud API request. - If the Cloud Platform Appliance is a Grid primary for a zone, requests that include a supported record is processed locally by the Cloud Platform Appliance. Otherwise, the request is proxied to the Cloud Platform Appliance that is assigned as the only Grid primary for the zone. - If the DNS resource records belong to a zone that is served only by Cloud Platform Appliances, authority for these records are considered delegated. You must create, modify, or delete these records on one of these Cloud Platform Appliances. | - You cannot create, modify, or delete a resource record if it is in a network view whose authority has been delegated to a Cloud Platform Appliance. | - When you create a resource record through a cloud API request, you must include the following extensible attributes in the request: Tenant ID, Cloud API Owned, and CMP Type. |
