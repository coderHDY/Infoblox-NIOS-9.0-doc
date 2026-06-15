---
title: "Managing MX Records"
source: "/space/nios90/1422590143"
pageId: "1422590143"
---
An MX (mail exchanger) record maps a domain name to a mail exchanger. A mail exchanger is a server that either delivers or forwards mail. You can specify one or more mail exchangers for a zone, as well as the preference for using each mail exchanger. A standard MX record applies to a particular domain or subdomain.

You can use a wildcard MX record to forward mail to one mail exchanger. For example, you can use a wildcard MX record in the [corpxyz.com](http://corpxyz.com) domain to forward mail for [eng.corpxyz.com](http://eng.corpxyz.com) and [sales.corpxyz.com](http://sales.corpxyz.com) to the same mail exchange, as long as the domain names do not have any matching resource record. Wildcards only apply when the domain name being queried does not match any record.

> **warning**
>
> ### Note
> 
> If an MX record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **Mail** **Destination** and **Mail** **Exchanger** fields display the record name in UTF-8 encoded format. For example, an MX record with the domain name 工作站 .test.com added through DDNS updates displays \229\183\165\228\189\156\231\171\153.test.com in the **Mail** **Destination** and **Mail** **Exchanger** fields.

*MX* *Records*

*[drawio]*

> **warning**
>
> ### Note
> 
> You must also create an A record for the host defined as a mail exchanger in an MX record.
