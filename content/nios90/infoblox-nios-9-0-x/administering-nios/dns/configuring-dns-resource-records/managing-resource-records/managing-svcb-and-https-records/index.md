---
title: "Managing SVCB and HTTPS Records"
source: "/space/nios90/1946615813"
pageId: "1946615813"
---
An SVCB (Service Binding) record is a DNS resource record that maps a domain name to a service endpoint, while an HTTPS record is a special case of the SVCB record used for HTTPS-enabled web servers. To define a specific name-to-service mapping, you can add an SVCB or HTTPS record to a previously defined authoritative forward-mapping zone.

The appliance supports wildcard SVCB and HTTPS records. For example, you can use a wildcard SVCB record in the [*corpxyz.com*](http://corpxyz.com) domain to map queries for names such as [*www1.corpxyz.com*](http://www1.corpxyz.com), [*ftp.corpxyz.com*](http://ftp.corpxyz.com), [*main.corpxyz.com*](http://main.corpxyz.com), and so on to the service endpoint.

NIOS allows superusers to add SVCB and HTTPS records with a blank name. Limited-access users must have read/write permission to add these records with a blank name. You can assign global permission for specific admin groups and roles to allow limited-access users to add blank SVCB and HTTPS records.

> **warning**
>
> **Note**  
> Support for managing SVCB/HTTPS resource records through Ansible and Terraform is not supported in NIOS version 9.0.7 and later versions.
