---
title: "show query_capture"
source: "/space/nios90/280789567"
pageId: "280789567"
---
The `show query_capture` displays the captured DNS queries that are stored locally on the appliance. You can use filters to restrict the DNS queries to specific time and date range, client FQDNs, and IP addresses. Note that the time zone in the CLI console is the time zone of the Grid member.

---

**Note:** Using multiple CLI commands to filter data for the appliances with large number of captured DNS queries and responses can significantly affect the system performance, protocol performance, and CLI command performance.

---

# Syntax

`show query_capture tail [&lt;num&gt;]`  
`                   follow [[fqdn /regex/] [ip /regex/ | grep /regex/]]`  
`                   [[fqdn /regex/] [ip /regex/ | grep /regex/]] [after [date] time]`  
`                   [before [date] time]`

You can specify the command with or without arguments. If you use the `show query_capture `command without any arguments, it displays queries from the current capture file.  
If you use the `show query_capture `command with `follow``, ``tail``, ``before``, ``after``, ``fqdn`, and `ip arguments``,` you can view queries for a specific data and time range, queries sent from the client FQDNs, and IP addresses.

---

**Note:** A capture file for logging DNS queries and responses is compressed every 10 minutes or when it reaches 100 MB in size, whichever comes sooner. A new current file is created when a capture file is compressed. If you are running the `show query_capture `command with `follow` or `tail` when a new capture file is created, the CLI console may return an error indicating that `captured-dns-xxxxxx has become inaccessible: No such file or directory`. In these situations, you must execute the CLI command again.

| **Argument** | **Description** |
| --- | --- |
| `tail &lt;num&gt;`` ` | Shows the last num lines from the capture file. If you do not specify a number, only the last ten lines are displayed. |
| `follow`` ` | Displays continuously the lines till the end of the capture file as lines are appended. In addition, you can use 'follow' with '/regex/' to search for FQDNs, IP addresses, and regular expressions. |
| `before [date] time`` ` | Displays captured DNS queries before the specified date time starting with the oldest saved log file. Make sure that you specify the date (optional for today's date) in the day-month-year format (example: 25-oct-2014), and time in hour:minutes:seconds format (example: 10:09:30). |
| `after [date] time`` ` | Displays captured DNS queries after the specified date time until the end of the current log file. The CLI console will not display DNS queries when you specify the current date and time or a future date and time. Make sure that you specify the date (optional for today's date) in the day-month-year format (example: 02-aug-2014), and time in hour:minutes:seconds format (example: 10:09:30). |
| `/regex/`` ` | Matches the pattern specified in regex and displays the matched lines from the capture file. To insert "/" in the search pattern, use escape sequence \/. The search string starts at the first forward slash (/) ends at the second forward slash (/), and ignores the remaining.    For information about regular expressions, see Appendix D Regular Expressions, in the *Infoblox Administrator Guide*. |
| `fqdn /regex/`` ` | Displays queries sent from the client FQDN. You can combine this option with 'ip /regex/' as well. |
| `ip /regex/`` ` | Displays queries sent from the client IP address. You can combine this option with 'fqdn /regex/' as well. |
| `grep /regex/`` ` | Displays queries by the regular expressions. |

# Examples

`Infoblox &gt; ``show`` ``query_capture`` `

`09-Aug-2014 09:55:50.872 client 10.35.1.136#57722: query: aaaa80.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:55:50.872 client 10.35.1.136#57722: query: aaaa81.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:55:50.872 client 10.35.1.136#57722: query: aaaa79.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:56:07.322 client 10.35.1.136#57722: query: aaaa82.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:56:07.322 client 10.35.1.136#57722: query: aaaa84.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:56:07.322 client 10.35.1.136#57722: query: aaaa85.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:56:07.323 client 10.35.1.136#57722: query: aaaa86.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:56:07.323 client 10.35.1.136#57722: query: aaaa87.1852a_95.com IN AAAA + (10.35.3.96)`  
` 09-Aug-2014 09:56:07.323 client 10.35.1.136#57722: query: aaaa88.1852a_95.com IN AAAA + (10.35.3.96) `

`Infoblox &gt; show query_capture before 09-Aug-2014 05:00:00 `

`Note that the filtering options require significant CPU resources, which may affect service performance.Infoblox recommends that you use this command only when necessary. `

`05-Aug-2014 13:31:29.057 client 10.35.112.5#40027: query: mx74.2000a_42.com IN MX + (10.35.3.148)`  
` 05-Aug-2014 13:31:29.057 client 10.35.112.5#40027: query: mx80.2000a_42.com IN MX + (10.35.3.148)`  
` 05-Aug-2014 13:31:29.057 client 10.35.112.5#40027: query: mx81.2000a_42.com IN MX + (10.35.3.148)`  
` 05-Aug-2014 13:31:29.057 client 10.35.112.5#40027: query: mx79.2000a_42.com IN MX + (10.35.3.148) `  
` 05-Aug-2014 13:31:29.057 client 10.35.112.5#40027: query: mx82.2000a_42.com IN MX + (10.35.3.148) `

`Infoblox &gt; show query_capture after 11-Aug-2014 09:00:00 `

`Note that the filtering options require significant CPU resources, which may affect service performance.Infoblox recommends that you use this command only when necessary. `

`18-Aug-2014 05:44:22.589 client 10.35.3.148#36662: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:45:22.470 client 10.35.3.148#56373: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 20-Aug-2014 06:45:25.330 client 10.35.3.148#35366: query: hal.2000a_1.com IN SOA +ED (127.0.0.1)`  
` 20-Aug-2014 06:45:25.330 client 10.35.3.148#35366: UDP: query: hal.2000a_1.com IN SOA`  
` response: NXDOMAIN -AE `

`Infoblox &gt; show query_capture fqdn /2000a_1.com/ `

`Note that the filtering options require significant CPU resources, which may affect service performance.Infoblox recommends that you use this command only when necessary. `

`20-Aug-2014 06:45:22.352 client 10.35.3.148#35366: query: hal.2000a_1.com IN SOA +ED (127.0.0.1)`  
` 20-Aug-2014 06:45:22.352 client 10.35.3.148#35366: UDP: query: hal.2000a_1.com IN SOA`  
` response: NXDOMAIN -AE`  
` 20-Aug-2014 06:45:22.352 client 10.35.3.148#35366: query: 2000a_1.com IN SOA +ED (127.0.0.1)`  
` 20-Aug-2014 06:45:25.330 client 10.35.3.148#35366: query: hal.2000a_1.com IN SOA +ED (127.0.0.1) `

`Infoblox &gt; show query_capture fqdn /2000a_1.com/ grep /SOA/ `

`Note that the filtering options require significant CPU resources, which may affect service performance.Infoblox recommends that you use this command only when necessary. `

`20-Aug-2014 07:54:29.457 client 10.35.3.148#35366: query: hal.2000a_1.com IN SOA +ED (127.0.0.1)`  
` 20-Aug-2014 07:54:29.457 client 10.35.3.148#35366: UDP: query: hal.2000a_1.com IN SOA`  
` response: NXDOMAIN -AE`  
` 20-Aug-2014 07:54:29.457 client 10.35.3.148#35366: query: 2000a_1.com IN SOA +ED (127.0.0.1)`  
` 20-Aug-2014 07:54:29.457 client 10.35.3.148#35366: UDP: query: 2000a_1.com IN SOA`  
` response: NOERROR -AE 2000a_1.com. 28800 IN SOA infoblox.localdomain. admin.infoblox.com. 503 10800 3600 2419200 900; `

`Infoblox &gt; show query_capture after 18-Aug-2014 05:05:05 before 18-Aug-2014 06:05:05 `

`Note that the filtering options require significant CPU resources, which may affect service performance.Infoblox recommends that you use this command only when necessary. `

`18-Aug-2014 05:05:22.342 client 10.35.3.148#50669: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:06:22.402 client 10.35.3.148#35534: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:07:22.338 client 10.35.3.148#43846: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:08:22.498 client 10.35.3.148#50606: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:53:22.359 client 10.35.3.148#56078: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:54:22.281 client 10.35.3.148#60212: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148)`  
` 18-Aug-2014 05:55:22.368 client 10.35.3.148#35600: query: 1.0.0.127.in-addr.arpa IN PTR`  
` +E (10.35.3.148) `
