---
title: "Managing ALIAS Records"
source: "/space/nios90/1422721101"
pageId: "1422721101"
---
An ALIAS record is a virtual DNS record type created for a standard record type to alias the root domain (apex zone) to another name. You can use an ALIAS record to host a website at a domain name without the "www" (or other) prefix when using the cloud services, such as Amazon Web Services, Azure VMs, GitHub pages, Heroku, and so on. For example, you can use an ALIAS record to point your domain [http://foo.com](http://foo.com)  to a host name like [http://mail.foo.com](http://mail.foo.com) . When you perform a DNS lookup on an ALIAS record, the authoritative DNS server dynamically resolves an ALIAS record for the matching alias target. The response contains the aliased records, that can be A, AAAA, MX, NAPTR, PTR, SPF, SRV, or TXT values. You can alias the same domain with multiple target types.

You can synchronize ALIAS records from your AWS to NIOS using Amazon Route 53. For information about AWS deployments, refer to the *Installation Guide for vNIOS for AWS.*

Following are some guidelines to remember when you use ALIAS records:

- ALIAS records are not supported on DNS zones that are assigned to a Microsoft primary server. This means that you cannot assign a DNS zone containing an ALIAS record to a Microsoft primary server and you cannot add an ALIAS record to a DNS zone that is assigned to a Microsoft primary server.
- You cannot add an ALIAS record to a DNSSEC signed zone and you cannot sign a zone containing an ALIAS record.
- You cannot add an ALIAS record to a DNS zone if there is a secondary server that is using zone transfer as an update mechanism. Also, you cannot use zone transfer process to update zones containing ALIAS records in the Grid secondaries.
- You cannot update any ALIAS record using a DNS request. You can create and update ALIAS records only by using the NIOS UI or API.
- An ALIAS record can coexist with other types of records for the same owner name unless there is another configured record at the owner name whose type is an allowed target type for ALIAS. You cannot configure an ALIAS record whose target type is the same as the configured record type.
- You cannot use DDNS updates to add or delete an ALIAS record.
