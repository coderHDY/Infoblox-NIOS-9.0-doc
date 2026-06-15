---
title: "show dhcp_gss_tsig"
source: "/space/nios90/280920559"
pageId: "280920559"
---
The` show dhcp_gss_tsig` commands provide information about an Infoblox DHCP server that is configured to send GSS-TSIG authenticated DDNS updates to an AD integrated DNS server. You can use these commands to verify your configuration and troubleshoot potential issues. You can also test whether the appliance can communicate with the Key Distribution Center (KDC) and the DNS server.

# Syntax

`show dhcp_gss_tsig config show dhcp_gss_tsig keytab`  
` show dhcp_gss_tsig test dns {ns-ip}`  
` show dhcp_gss_tsig test kdc {kdc-ip} {principal}`

| **Argument ** | **Description** |
| --- | --- |
| `config` | Displays configuration information and runs tests to verify the configuration. |
| `keytab` | Displays information about the keytab file that is in use by the appliance. |
| `test dns` | Tests the configuration by verifying that the destination DNS server is reachable.   You must enter the IP address of the destination DNS server. |
| `test kdc` | Tests the configuration by obtaining a test Ticket Granting Ticket (TGT)) from the configured KDC.    You must specify the following:  - IP address of the AD domain controller that hosts the KDC for the domain - The Kerberos principal you specified when you generated the keytab file, in the following format: *username/instance*@*REALM*      - *username/instance*: The AD user name for the NIOS appliance and the FQDN of the appliance. This entry must be the same on the AD domain controller and the Infoblox appliance.   - *REALM*: The Kerberos realm in uppercase. |

# Examples

## Displaying GSS-TSIG configuration information and run a test

The` show dhcp_gss_tsig config` command displays the following information:

- Whether DHCP and GSS-TSIG dynamic DNS updates are enabled on the appliance
- The system time in UTC
- Information about the KDC, principal, and domain

After it displays information, the appliance can test if it can obtain a TGT from the KDC and provides information about that transaction. Note that the TGT is for test purposes only and does not affect the data used by DHCP and DNS.  
 It can also test the external zones that are supposed to receive the DDNS updates as follows:

- Verify if the external zones specified in the member's network view match the member's domain
- Query the name server IP address for the address of the FQDN from the DNS principal
- Query the name server for the SOA of the zone. It displays a warning if the name server does not respond or if the result does not list the FQDN from the DNS principal as authoritative.

`Infoblox &gt; ``show`` ``dhcp_gss_tsig`` ``config`  
` System time: Tue Oct 21 16:01:43 UTC 2008`  
` D`

`HCP GSS-TSIG configuration for this member: `

`KDC address                  10.34.123.4`  
` KDC IP                       10.34.123.4`  
` Member principal         jdoe/anywhere@CORP100.LOCAL`  
` Member domain                CORP100.LOCAL`  
` GSS-TSIG                     enabled`  
` DDNS updates                 enabled`  
` DHCP service                 enabled `  
` `

`Test KDC using member configuration? (y or n): y`  
` Requesting TGT for jdoe/anywhere@CORP100.LOCAL from KDC 10.34.123.4... `  
`Successfully obtained test TGT.`  
` Credentials cache: FILE:/tmp/krb5_cache.18338 `  
`       Principal: jdoe/anywhere@CORP100.LOCAL`  
`   Cache version: 4`  
` Server: krbtgt/CORP100.LOCAL@CORP100.LOCAL Client: jdoe/anywhere@CORP100.LOCAL`  
` Ticket etype: arcfour-hmac-md5, kvno 2 `  
`Ticket length: 957`  
` Auth time: Oct 21 12:00:52 2008`  
` End time:Oct 21 13:00:52 2008`  
` Ticket flags: initial, pre-authenticated `  
`Addresses: addressless`  
` Successful test. Test TGT destroyed. `  
` `

`This member is configured to update the following zones: `  
`corp100 on 10.34.123.4 as dns/ns-corp100.CORP100.local `  
` `

`Test configured zones? (y or n): y `  
` `

`Next zone is corp100 on 10.34.123.4. `  
`Test this zone? (y or n): y`  
` Testing external zone corp100 on NS 10.34.123.4... `  
`DNS principal is dns/ns-corp100.corp100.local.`  
` Derived FQDN is ns-corp100.corp100.local. `  
`FQDN resolves to nameserver IP.`  
` SOA for corp100 has MNAME ns-corp100.corp100.local. `  
`Nameserver is authoritative for zone.`  
` Zone corp100 appears valid.`

## Displaying information about the keytab

The` show dhcp_gss_tsig keytab` command displays the current keytab.

`Infoblox &gt; ``show`` ``dhcp_gss_tsig`` ``keytab`  
` Vno Type Principal`  
` 7 des-cbc-md5 jdoe/instance@CORP100.LOCAL`

## Verifying the DNS server

The `show dhcp_gss_tsig test dns` command verifies the destination DNS server by performing a reverse lookup of the IP address.

`Infoblox &gt; ``show`` ``dhcp_gss_tsig`` ``test`` ``dns`` ``10.34.123.4`  
` Querying DNS server 10.34.123.4... `  
`Server responded. `  
   
`Probable DNS principal: dns/ns-corp100.corp100.local`

## Obtaining a test TGT from the KDC

When you use the show dhcp_gss_tsig test kdc command, the appliance tries to obtain a TGT from the KDC using the specified principal. It provides information about the transaction and upon successful completion, deletes the test TGT.

`Infoblox &gt; ``show`` ``dhcp_gss_tsig`` ``test`` ``kdc`` ``10.34.123.4`` ``jdoe/instance@CORP100.LOCAL`  
` Requesting TGT for jdoe/instance@CORP100.LOCAL from KDC 10.34.123.4...`  
` Successfully obtained test TGT. `  
` `  
`Credentials cache: FILE:/tmp/krb5_cache.12000 `  
`       Principal: jdoe/instance@CORP100.LOCAL`  
`     Cache version: 4 `  
` `

`Server: krbtgt/CORP100.LOCAL@CORP100.LOCAL Client: jdoe/instance@CORP100.LOCAL`  
` Ticket etype: arcfour-hmac-md5, kvno 2 `  
`Ticket length: 957`  
` Auth time: Oct 21 12:30:01 2008`  
` End time:Oct 21 13:30:01 2008`  
` Ticket flags: initial, pre-authenticated `  
`Addresses: addressless `  
` `

`Successful test. Test TGT destroyed.`
