---
title: "Using TXT Records for SPF"
source: "/space/nios90/1423081713"
pageId: "1423081713"
---
SPF (Sender Policy Framework) is an anti-forgery mechanism designed to identify spam e-mail. SPF fights e-mail address forgery and makes it easier to identify spam, worms, and viruses. Domain owners identify sending mail servers in DNS. SMTP receivers verify the envelope sender address against this information, and can distinguish legitimate mail from spam before any message data is transmitted.

SPF makes it easy for a domain to say, "I only send mail from these machines. If any other machine claims that I'm sending mail from there, they're not valid." For example, when an AOL user sends mail to you, an email server that belongs to AOL connects to an email server that belongs to you. AOL uses SPF to publish the addresses of its email servers. When the message comes in, your email servers can tell if the server that sent the email belongs to AOL or not.

You can use TXT records to store SPF data that identifies what machines send mail from a domain. You can think of these specialized TXT records as *reverse* *MX* *records* that e-mail servers can use to verify if a machine is a legitimate sender of an e-mail.

**SPF** **Record** **Examples**

`corpxyz.com. IN TXT "v=spf1 mx –all"`   
` corpxyz.net. IN TXT "v=spf1 a:mail.corpxyz.com –all" corpxyz.net. IN TXT "v=spf1 include:corpxyz.com -all" corpxyz.net. IN TXT "v=spf1 mx -all exp=getlost.corpxyz.com" corpxyz.com. IN TXT "v=spf1 include:corp200.com -all"`

> **warning**
>
> ### Note
> 
> If an SPF record goes beyond the BIND limit of 255 characters, Infoblox recommends that you break up the record into two TXT records.
