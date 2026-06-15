---
title: "Managing CAA Records"
source: "/space/nios90/1422590214"
pageId: "1422590214"
---
A Certification Authority Authorization (CAA) DNS resource record enables domain owners to define the Certificate Authorities (CAs) that can issue certificates for a domain. When you define a CAA record, only the CAs listed in the records can issue certificates for the respective domain. With CAA, you can also define notification rules to manage requests for a certificate from a non-authorized CA. If you do not define a CAA resource record, any CA can issue a certificate for the domain. For detailed information about the CAA record format and certificate usage, refer to *RFC 6844 DNS Certification Authority Authorization (CAA) Resource Record*. You can add, edit, or delete a CAA resource record through Grid Manager or the Infoblox API. The following are a few examples of CAA resource records:

- [http://example.com](http://example.com) . CAA 0 issue “[http://ssl.com](http://ssl.com) ; policy=ev”
- [http://example.com](http://example.com) . CAA 0 issuewild “;”
- [http://example.com](http://example.com) . CAA 0 iodef “[mailto:certissues@example.com](mailto:certissues@example.com)”
- [http://example.com](http://example.com) . CAA 0 iodef “[certissues.example.com](http://certissues.example.com)”

> **warning**
>
> ### Note
> 
> When you enable DNS Infrastructure Protection on a member, you must configure either a pass rule or rate limiting rule for CAA DNS resource record types. This is specific to record types that use DNS Infrastructure Protection rule templates to allow incoming DNS queries for the respective CAA record. If you do not configure these rules, the DNS Infrastructure Protection service that is running on the member blocks the DNS queries of the CAA record.
