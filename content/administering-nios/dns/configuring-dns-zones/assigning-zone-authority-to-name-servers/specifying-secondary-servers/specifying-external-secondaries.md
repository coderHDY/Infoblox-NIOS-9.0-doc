---
title: "Specifying External Secondaries"
source: "/space/nios90/1456865923"
pageId: "1456865923"
---
In the Add External Secondary panel, enter the following, and then click **Add** to add the external secondary server to the list of name servers for the zone**:**

- **Name:** Enter a resolvable domain name for the external secondary server.
- **Address:** Enter the IP address of the external secondary server.
- **Stealth:** This setting applies only if the primary server is a Grid member or a Microsoft server. Click this checkbox to hide the NS record for the secondary name server from DNS queries. The NIOS appliance does not create an NS record for the secondary name server in the zone data. Select the checkbox again to display the NS record for the secondary name server in response to queries.
  
  Note that to avoid an impact on your database performance, Infoblox recommends that you do not configure a large number of external secondary servers in stealth mode. To ensure that these secondary servers receive notifications about zone updates, you can allow zone transfers for these IP addresses and then enable the appliance to add them to the also-notify statement. For information about how to configure this feature, see [*Configuring Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834).
- **Use** **TSIG:** To authenticate zone transfers between the local appliance and the external secondary server using a TSIG (transaction signature), select this checkbox. Infoblox TSIGs use HMAC-MD5 hashes. These are keyed one-way hashes for message authentication codes using the Message Digest 5 algorithm. For details, see RFC 1321, *The* *MD5* *Message-Digest* *Algorithm*, and RFC 2104, *HMAC:* *Keyed-Hashing* *for* *Message* *Authentication*.
- **Key** **name:** Type or paste the name of the TSIG key you want to use. This must be the same name as that of the TSIG key for this zone on the external secondary server.
- **Key:** Type or paste a previously generated key. On the external secondary server, this key must also be present and associated with this zone. You can generate a TSIG key, or you can obtain the TSIG key name and key from the external name server, either by accessing the appliance yourself or by requesting the appliance administrator to deliver them to you through some out-of-band mechanism. Then, type or copy-and-paste the name and key into the appropriate fields.
- **Use** **2.x** **TSIG**: Select this checkbox to use TSIG authentication and the external secondary name server is a NIOS appliance running DNS One 2.x code. The local appliance generates the required TSIG key for authenticating DNS messages to and from appliances running DNS One 2.x code.

> **warning**
>
> ### Note
> 
> On the appliance you configure as a secondary server for a zone, you must associate a TSIG key for each primary server to which the secondary server requests zone transfers. On the appliance you configure as a primary server for a zone, you can set a TSIG key at the Grid, member, or zone level. Because the secondary server requests zone transfers, it must send a specific key in its requests to the primary server. Because the primary server responds to the requests, it can have a set of TSIG keys from which it can draw when responding. As long as the primary server can find the same TSIG key that the secondary sends it, it can verify the authenticity of the requests it receives and authenticate the responses it sends. Use NTP to synchronize the time on both name servers that use TSIG-authenticated zone transfers.
