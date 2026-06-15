---
title: "show log"
source: "/space/nios90/1430618127"
pageId: "1430618127"
---
The `show log` command displays a specified log file. It is helpful for obtaining diagnostic information. The syslog file is shown by default if no log is specified. The IF-MAP log displays all the IF-MAP protocol related events. It contains the XML messages communicated between Infoblox Orchestration Server and the clients.

# Syntax

`show log [ syslog | debug | audit | ifmapclient | ifmapserver  | category_api_logs | ufclient_logs] &lt;log num&gt; [ tail &lt;num&gt; | follow/regex/ ]`

Use this command to display the contents of a specified log file.

| **Argument** | **Description** |
| --- | --- |
| `syslog` | Displays the syslog log file. |
| `debug` | Displays the debug log file. |
| `audit` | Displays the audit log file. |
| `ifmapclient` | Displays the IF-MAP log on the DHCP server when it is configured as an IF-MAP client. |
| `ifmapserver` | Displays the IF-MAP log on Infoblox Orchestration Server. |
| `category_api_logs` | Displays the log file of a particular domain. |
| `log num` | Allows you to view rolled logs by specifying a number from 0 to 9. You can use this option when you display the syslog file, audit log, and ifmap log. |
| `tail &lt;num&gt;` | Shows the last *num* lines from the log file or, if no number is specified, the last 10 lines are displayed. |
| `/regex/` | Filters the log output and displays only the lines that match the specified search pattern from the selected log file. You can replace `regex` with any plain text string or regular expression pattern. The search string starts at the first forward slash (/) and ends at the second forward slash (/), and any characters after the closing forward slash are ignored. For an example, see [*Matching a pattern in a log file*](#Matching-a-pattern-in-a-log-file)* *below. To include a literal forward slash (/) in the pattern, use the escape sequence `\/`.   For information about regular expressions, see [*Supported Expressions for Search Parameters*](/nios90/infoblox-nios-9-0-x/reference-information/supported-expressions-for-search-parameters). |

# Examples

## Displaying syslog file

`Infoblox &gt; show log syslog`  
`Aug 23 17:48:50 (none) syslog-ng[894]: new configuration initialized`  
`Aug 23 17:48:50 (none) kernel: ip_conntrack version 2.4 (8183 buckets, 65464 max) - 224`  
`bytes per conntrack`  
`Aug 23 17:48:54 (none) kernel: ADDRCONF(NETDEV_UP): eth1: link is not ready`  
`Aug 23 17:48:56 (none) kernel: e1000: eth1: e1000_watchdog: NIC Link is Up 1000 Mbps`  
`Full Duplex`  
`Aug 23 17:48:56 (none) kernel: ADDRCONF(NETDEV_CHANGE): eth1: link becomes ready`  
`Aug 23 17:48:58 (none) ntpd[31091]: ntpd 4.1.2@1.892 Fri Aug 4 17:14:23 EDT 2006 (1)`  
`Aug 23 17:48:58 (none) ntpd[31091]: signal_no_reset: signal 13 had flags 4000000`  
`Aug 23 17:48:58 (none) ntpd[31091]: precision = 11 usec`  
`Aug 23 17:48:58 (none) ntpd[31091]: kernel time discipline status 0040`  
`Aug 23 17:48:58 (none) ntpd[31091]: frequency initialized 0.000 from`  
`/usr/conf/ntp.drift`  
`Enter &lt;return&gt; to continue with More lines or enter q&lt;return&gt; to go back to command line `

## Displaying the last five lines of the debug log file

`Infoblox &gt; show log debug tail 5`  
`[2006/08/23 17:48:49.346] (30748 /infoblox/one/bin/init_database) db_local.c:347`  
`idb_database_local_create_env(): cache_size: 134217728`  
`[2006/08/23 17:48:49.739] (30748 /infoblox/one/bin/init_database) init_database.c:45`  
`main(): Database initialized: /data/rep`  
`[2006/08/23 17:48:49.812] (30749 /infoblox/one/bin/db_import_3x) main.c:360 main():`  
`Starting db_import: importing from /infoblox/one/factory_defaults`  
`[2006/08/23 17:48:49.899] (30749 /infoblox/one/bin/db_import_3x) partition_bitmap.c:208`  
`onedb_recalculate_partition_bitmaps(): Begin partitioning phase`  
`[2006/08/23 17:48:49.900] (30749 /infoblox/one/bin/db_import_3x) partition_bitmap.c:283`  
`onedb_recalculate_partition_bitmaps(): Total of 2 object(s) partitioned, committing`  
`database`

## Matching a pattern in a log file

`Infoblox &gt; show log syslog /ntpd/`  
`6:Aug 23 17:48:58 (none) ntpd[31091]: ntpd 4.1.2@1.892 Fri Aug 4 17:14:23 EDT 2006 (1)`  
`7:Aug 23 17:48:58 (none) ntpd[31091]: signal_no_reset: signal 13 had flags 4000000`  
`8:Aug 23 17:48:58 (none) ntpd[31091]: precision = 11 usec`  
`9:Aug 23 17:48:58 (none) ntpd[31091]: kernel time discipline status 0040`  
`10:Aug 23 17:48:58 (none) ntpd[31091]: frequency initialized 0.000 from`  
`/usr/conf/ntp.drift`  
`11:Aug 23 17:48:58 (none) ntpd[31091]: frequency initialized 0.000 from`  
`/usr/conf/ntp.drift`  
`13:Aug 23 17:50:13 (none) ntpd[31091]: ntpd exiting on signal 15`  
`18:Aug 23 17:50:23 (none) ntpd[32623]: ntpd 4.1.2@1.892 Fri Aug 4 17:14:23 EDT 2006 (1)`  
`19:Aug 23 17:50:23 (none) ntpd[32623]: signal_no_reset: signal 13 had flags 4000000`  
`20:Aug 23 17:50:23 (none) ntpd[32623]: precision = 9 usec`  
`Enter &lt;return&gt; to continue with More lines or enter q&lt;return&gt; to go back to command line`

## Displaying the IF-MAP log file

`Infoblox &gt; show log ifmapserver`  
` 2010-03-16T17:48:04 REQUEST "client1" PUBLISH: info &lt;?xml version="1.0"`  
` encoding="UTF-8"?&gt;&lt;env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ifmap="http://www.trustedcomputinggroup.org/2006/IFMAP/1" xmlns:meta="http://www.trustedcomputinggroup.org/2006/IFMAP-METADATA/1"&gt;`  
` &lt;env:Header&gt; &lt;ifmap:session-id&gt;28baf7e3d84db248097e976bf0dce9c2&lt;/ifmap:session-id&gt;`  
` &lt;/env:Header&gt; &lt;env:Body&gt; &lt;ifmap:publish&gt; &lt;update&gt; &lt;link&gt; &lt;identifier&gt; &lt;ip-address value="10.0.0.5"/&gt; &lt;/identifier&gt; &lt;identifier&gt; &lt;mac-address value="56:b1:19:3b:48:0d"/&gt;`  
` &lt;/identifier&gt; &lt;/link&gt; &lt;metadata&gt; &lt;meta:ip-mac cardinality="singleValue"&gt;`  
` &lt;start-time&gt;2009-10-27T00:00:00&lt;/start-time&gt; &lt;end-time&gt;2009-10-28T00:00:00&lt;/end-time&gt;`  
` &lt;dhcp-server&gt;10.0.0.3&lt;/dhcp-server&gt; &lt;/meta:ip-mac&gt; &lt;/metadata&gt; &lt;/update&gt;`  
` &lt;/ifmap:publish&gt; &lt;/env:Body&gt; &lt;/env:Envelope&gt;`  
` 2010-03-16T17:48:04 RESPONSE "client1" PUBLISH: info &lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;SOAP-ENV:Envelope`  
` xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"xmlns:SOAP-ENC="http://schem as.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:meta="http://www.trustedcomputinggroup.org/2006/IFMAP-METADATA/1" xmlns:wsdl="http://www.trustedcomputinggroup.org/2008/IFMAP/1/ifmap.wsdl" xmlns:meta3="www.stan.com2" xmlns:ifmap="http://www.trustedcomputinggroup.org/2006/IFMAP/1"&gt; &lt;SOAP-ENV:Header&gt;`  
` &lt;ifmap:session-id SOAP-ENV:mustUnderstand="1"&gt; 28baf7e3d84db248097e976bf0dce9c2`  
` &lt;/ifmap:session-id&gt; &lt;/SOAP-ENV:Header&gt; &lt;SOAP-ENV:Body&gt; &lt;ifmap:response validation="BaseOnly"&gt; &lt;publishReceived/&gt; &lt;/ifmap:response&gt;`  
` &lt;/SOAP-ENV:Body&gt;&lt;/SOAP-ENV:Envelope&gt;`

## Displaying the audit file

`Infoblox &gt; show log audit`  
`2025-04-22 08:40:36.179Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Direct auth=Local group=.admin-group`  
`2025-04-22 08:50:35.178Z [admin]: Called - DB: Args action="update",msg="virtual node 192.168.1.2"`  
`2025-04-22 08:50:35.180Z [admin]: Called - DB: Args action="update",msg="physical node 0"`  
`2025-04-22 08:50:35.180Z [admin]: Called - set_network: Args ip_address="10.197.65.223 from 192.168.1.2",netmask="255.255.192.0 from 255.255.255.0",gateway_address="10.197.64.1 from 192.168.1.1",vlan_tag=" from Untagged"`  
`2025-04-22 08:50:38.176Z [admin]: Logout - - ip=Direct group=.admin-group trigger_event=Normal\040Logout`  
`2025-04-22 08:53:02.802Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Direct auth=Local group=.admin-group`  
`2025-04-22 08:53:34.570Z [admin]: Called - DB: Args action="insert",msg="product license of type nios"`  
`2025-04-22 08:53:34.570Z [admin]: Called - set_temp_license: Args temp_license="NIOS license for 60 days",grid_wide=False`  
`2025-04-22 08:54:52.421Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Direct auth=Local group=.admin-group`  
`2025-04-22 08:55:12.230Z [admin]: Logout - - ip=Direct group=.admin-group trigger_event=Normal\040Logout`  
`2025-04-22 08:55:16.095Z [admin]: Login_Allowed - - to=Serial\040Console apparently_via=Direct auth=Local group=.admin-group`  
`2025-04-22 08:57:46.195Z [admin]: Login_Allowed - - to=AdminConnector ip=10.195.20.180 auth=LOCAL group=admin-group apparently_via=GUI`  
`2025-04-22 10:58:27.064Z [admin]: Logout - - ip=10.195.20.180 group=admin-group trigger_event=Session\040Expiration`  
`2025-04-22 15:41:05.425Z [admin]: Login_Allowed - - to=AdminConnector ip=10.195.28.118 auth=LOCAL group=admin-group apparently_via=GUI`  
`2025-04-22 17:41:27.317Z [admin]: Logout - - ip=10.195.28.118 group=admin-group trigger_event=Session\040Expiration`  
`2025-07-02 05:32:02.868Z [admin]: Login_Allowed - - to=AdminConnector ip=10.195.29.154 auth=LOCAL group=admin-group apparently_via=GUI`  
`2025-07-02 05:32:04.788Z [admin]: Modified EULA 1: Changed action:"NONE"-&gt;"ACCEPT",eula_display_enabled:True-&gt;False`  
`2025-07-02 05:32:06.210Z [admin]: Modified Grid Infoblox: Changed csp_settings:[csp_join_token="",heka_opt_in=False]-&gt;[csp_join_token="",heka_opt_in=True],dscp:0-&gt;NULL`  
`2025-07-02 05:32:07.402Z [admin]: Created DashboardConfiguration Default: Set dashboard_type="NIOS",name="Default"`  
`2025-07-02 05:32:07.402Z [admin]: Created DashboardConfiguration Security: Set dashboard_type="NIOS",name="Security"`  
`2025-07-02 05:32:08.989Z [admin]: Created DashboardConfiguration Default: Set dashboard_type="TASK_FLOW",name="Default"`  
`2025-07-02 05:42:16.041Z [admin]: Logout - - ip=10.195.29.154 group=admin-group trigger_event=Session\040Expiration`
