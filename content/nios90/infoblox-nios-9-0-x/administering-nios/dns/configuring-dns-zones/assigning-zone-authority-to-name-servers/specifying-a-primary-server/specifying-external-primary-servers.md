---
title: "Specifying External Primary Servers"
source: "/space/nios90/1457652271"
pageId: "1457652271"
---
In the Add External Primary panel, do the following, and then click **Add** to add the external primary server to the list of name servers for the zone:

- **Name:** Type a resolvable domain name for the external primary server.
- **Address:** Type the IP address of the external primary server.
- **Multi-master**: This appears only when there is more than one external primary assigned to the zone. Select this checkbox for external primary servers when the zone is in another Grid and has multiple Grid primaries. When you select this option, it is selected for all external primaries assigned to the zone. This zone is identified as an external zone with multiple primary servers.
- **Use** **TSIG:** To authenticate zone transfers between the local appliance and the external primary server using a TSIG (transaction signature), select this checkbox. Infoblox TSIGs use HMAC-MD5 hashes. These are keyed one-way hashes for message authentication codes using the Message Digest 5 algorithm. For details, see *RFC* *1321,* *The* *MD5* *Message-Digest* *Algorithm*, and *RFC* *2104,* *HMAC:* *Keyed-Hashing* *for* *Message* *Authentication*.
- **Key** **name:** Type or paste the name of the TSIG key you want to use. This must be the same name as that of the TSIG key on the external primary server.
- **Key** **Data:** Type or paste a previously generated key. This key must also be present on the external primary server. You can generate a TSIG key, or obtain the TSIG key name and key from the external name server, by accessing the server yourself or by requesting the server administrator to deliver them to you through some out-of-band mechanism. Then type or copy-and-paste the name and key into the appropriate fields.
- **Use** **2.x** **TSIG:** If you want to use TSIG authentication and the external primary name server is a NIOS appliance running DNS One 2.x code, select this checkbox. The local appliance generates the required TSIG key for authenticating DNS messages to and from appliances running DNS One 2.x code.

> **warning**
>
> ### Note
> 
> On the appliance you configure as a secondary server for a zone, you must associate a TSIG key for each primary server to which the secondary server requests zone transfers. On the appliance you configure as a primary server for a zone, you can set a TSIG key at the Grid, member, or zone level. Because the secondary server requests zone transfers, it must send a specific key in its requests to the primary server. Because the primary server responds to the requests, it can have a set of TSIG keys from which it can draw when responding. As long as the primary server can find the same TSIG key that the secondary sends it, it can verify the authenticity of the requests it receives and authenticate the responses it sends. Use NTP to synchronize the time on both name servers that use TSIG-authenticated zone transfers.
