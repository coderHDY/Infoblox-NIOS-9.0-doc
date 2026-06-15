---
title: "show dns_gss_tsig"
source: "/space/nios90/280266155"
pageId: "280266155"
---
The `show`` ``dns_gss_tsig` commands provide information about an Infoblox DNS server that is configured to receive GSS-TSIG authenticated DDNS updates from a DHCP server. You can use these commands for diagnostic purposes and to troubleshoot issues.

# Syntax

`show dns_gss_tsig counters [crypto]| keytab`

| **Argument** | **Description** |
| --- | --- |
| `counters`` ` | Displays information from the internal counters, which are non-persistent and reset to zero when services are restarted. It displays the number of TKEY (transaction key) requests the Infoblox DNS server has accepted and the number of GSS-TSIG authenticated DDNS updates received.   If you specify **crypto,** the display includes the number of successful and failed attempts to establish a security by context, by encryption type. |
| `keytab`` ` | Displays information about the DNS keytab files that are in use by the appliance. |



# Example

`Infoblox &gt; ``show`` ``dns_gss_tsig`` ``keytab`  
` `

`Vno Type Principal`  
` 4 des-cbc-md5 DNS/ns1.local.test@TEST.LOCAL`
