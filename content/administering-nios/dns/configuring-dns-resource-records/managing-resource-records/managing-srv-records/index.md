---
title: "Managing SRV Records"
source: "/space/nios90/1422688352"
pageId: "1422688352"
---
An SRV (service location) record directs queries to hosts that provide specific services. For example, if you have an FTP server, then you might create an SRV record that specifies the host which provides the service. You can specify more than one SRV record for a host. For more information about SRV records, see *RFC2052,ADNSRRforspecifyingthelocationofservices(DNSSRV)*.

> **warning**
>
> ### Note
> 
> If an SRV record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **Name** and **SRV** **Target** fields display the domain name in UTF-8 encoded format. For example, an SRV record with the domain name 电脑 .test.com added through DDNS updates displays \231\148\181\232\132\145.test.com in the **Name** and **SRV** **Target** fields.
