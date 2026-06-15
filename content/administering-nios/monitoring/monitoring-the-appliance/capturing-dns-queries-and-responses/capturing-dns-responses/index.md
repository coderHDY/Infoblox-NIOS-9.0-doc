---
title: "Capturing DNS Responses"
source: "/space/nios90/1381171448"
pageId: "1381171448"
---
You can capture DNS responses for the DNS queries sent to the server. The amount of data captured depends on the domains that are included in or excluded from the capture. A DNS response is based on a query generated for a domain. In the response message, NIOS captures the TTL value of a resource record, the resource record type, and resource data.  
Following are characteristics of the response messages:

- They log only the answer section and do not include the authority and additional sections.
- Responses to all queries are logged, including queries with the type "ANY."
- The RR (resource record) list is not available at the end of a response message if rcode has a value other than NOERROR or if the response is NOERROR (nodata).
- Responses to all RR types, including those records not managed by NIOS such as HINFO records, are logged. However, there are few exceptions for some of the scenarios with DNSSEC records.
- Responses containing DNSSEC RRs (DNSKEY, DS, NSEC, NSEC3, NSEC3PARAM, RRSIG) when queried for non-DNSSEC RRs are not logged. However, responses are logged if a DNSSEC RR is explicitly queried.
- DNS updates are not logged in responses.
