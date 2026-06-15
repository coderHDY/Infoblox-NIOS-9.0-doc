---
title: "Syslog Message Prefixes"
source: "/space/nios90/1380844705"
pageId: "1380844705"
---
You can configure the syslog external backup servers to send (archive) syslog files to different destinations by their logging categories. This allows you to split syslog files based on the service and efficiently perform troubleshooting. For example, you can archive all DNS related logs on Server 1, and all DHCP related logs on Server 2. For information about how to configure an external syslog backup server, see Specifying Syslog Servers above.

When you select the **Send** **selected** **categories** option, the syslog messages are prefixed with a category name to which it belongs.

For syslog message prefixes to be enabled, you must check the **Log to External Syslog Servers** checkbox in **Grid Properties** &gt; **Monitoring**. Also, the external syslog server (which can be a virtual or a physical server) must have at least one of the syslog categories selected instead of the **Send all** option selected in the **Logging Category** field.

> **warning**
>
> Note
> 
> When you set **Send** **all** in the **Logging** **Category**, the appliance logs syslog messages for all the events and they are not prefixed. The syslog messages are prefixed even if one external syslog server is set with the **Send** **selected** **categories** option.

The following are the prefixes used for different logging categories:

- **DNS** **Logging** **Categories**: All DNS related messages use the following prefixes: `client, config, database, dnssec, general, lame_servers, network, notify, queries, query_rewrite, resolver, responses, rpz, security, update, update_security, xfer_in`, and` xfer_out.`

`Sample syslog message for queries: `

`Jan  3 11:34:35 10.197.23.6 named[16041]: queries: client @0x7f92101ae090 10.120.21.95#59775 (a.abc.com): query: a.abc.com IN ANY + (10.197.23.6)`

`Sample syslog message for xfer-out:`

`Jan  3 02:40:04 10.197.23.5 named[4914]: xfer-out: client @0x7f0fb4190020 10.120.21.95#50628 (`ABC Network - [http://ABC.com](http://ABC.com) ` ): transfer of 'abc.com/IN': AXFR started (serial 13)`  
`Jan  3 02:40:04 10.197.23.5 named[4914]: xfer-out: client @0x7f0fb4190020 10.120.21.95#50628 (`ABC Network - [http://ABC.com](http://ABC.com) ` ): transfer of 'abc.com/IN': AXFR ended`

- **ADP**: All Infoblox related messages use prefix `adp`.

Note there is no prefix for RPZ syslog messages that do not belong to the DNS or ADP category.

- **DHCP**: All DHCP related messages use the following prefixes: `dhcpd, omshell, dhcrelay`, and `dhclient`.

`Sample syslog message for dhcp:`

`Sep 4 09:23:44 10.34.6.28 dhcpd[20310]: DHCPACK on 70.1.20.250 to fc:5c:fc:5f:10:85 via`

`eth1 relay 10.120.20.66 lease-duration 600`

- **DTC**: All DTC related messages use the following prefixes: `idns_healthd` and `idnsd`.

`Sample syslog message for idns_healthd:`

`Sep 3 12:12:35 10.34.6.30 idns_healthd[1220]: resource health status [Monitor 'icmp'`

`(ICMP, port 0) checked server 's1' (IP 10.34.6.23), status: IPv4=ONLINE]`

- **Cloud**: All cloud related messages use prefix `cloud_api`.

`Sample syslog message for cloud_api:`

`Sep 4 10:53:30 10.34.6.32 cloud_api[5354]: [admin]: Login_Allowed - -`

`to=Serial\040Console apparently_via=Remote ip=10.120.20.66 auth=Local`

`group=.admin-group`

- **NTP**: All NTP related messages use prefix `ntpd`.

`Sample syslog message for NTP:`

`Sep 28 06:57:21 10.35.116.7 ntpd[12186]: precision = 0.053 usec`

`Sep 28 06:57:21 10.35.116.7 ntpd[12186]: Listening on interface #0 wildcard, 0.0.0.0#123`

`Disabled`

- **File** **Distribution**: All File Distribution related messages use the following prefixes: `ftpd` and `tftp`.

`Sample syslog message for TFTP:`

`Sep 3 13:03:09 10.34.6.30 monitor[23623]: Type: TFTP, State: Red, Event: A TFTPD daemon`

`failure has occurred`

- **Authentication**: All Authentication related messages use the following prefixes: `auth, authpriv, AD`, and `radiusd.`

`Sample syslog message for RADIUS authentication:`

`Sep 28 10:09:55 10.35.116.4 httpd: 2015-09-28 10:09:55.912Z [user1]: Login_Allowed - -`

`to=AdminConnector ip=10.120.253.227 auth=RADIUS group=admin-group apparently_via=GUI`

- **Microsoft** **Integration**: All Microsoft Integration related messages use the following prefixes: `dns_server, connect_status, dns_zone, dhcp_server, dhcp_leases, clear_lease, ad_site`, and `ad_users`.

`Sample syslog message for microsoft integration:`

`dns_server:`

`Sep 7 09:46:17 10.34.22.20 mssyncd[22315]: dns_server address 10.102.30.157 : Conflict`

`in property Forwarders: NIOS value (property=&lt;NULL IP array&gt;) and Microsoft value`

`(property={10.0.2.35, 10.0.2.60}). Resolved by using the Microsoft value`

`dhcp_server:`

`Sep 7 10:08:48 10.34.22.20 mssyncd[22316]: dhcp_server address 10.102.30.157 : Couldn't`

`open RPC interface &lt;MS-WKST&gt;: an instance of a named pipe cannot be found in the listening`

`state`

`Sep 7 10:08:48 10.34.22.20 mssyncd[22317]: dns_server address 10.102.30.157 : Opened`

`RPC interface &lt;MS-WKST&gt; as user 'ad-15\frtest'`
