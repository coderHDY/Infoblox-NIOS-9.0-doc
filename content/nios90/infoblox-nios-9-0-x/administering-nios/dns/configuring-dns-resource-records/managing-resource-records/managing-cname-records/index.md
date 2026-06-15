---
title: "Managing CNAME Records"
source: "/space/nios90/1422688408"
pageId: "1422688408"
---
A CNAME record maps an ALIAS to a canonical name. You can use CNAME records in both forward- and IPv4 reverse-mapping zones to serve two different purposes. (At this time, you cannot use CNAME records with IPv6 reverse-mapping zones.)

> **warning**
>
> ### Note
> 
> If a CNAME record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **ALIAS** and **Canonical** **Name** fields display the domain name in UTF-8 encoded format. For example, a CNAME record with the domain name 电脑 .[test.com](http://test.com) added through DDNS updates displays \231\148\181\232\132\[145.test.com](http://145.test.com) in the **Canonical** **Name** and **ALIAS** fields.
