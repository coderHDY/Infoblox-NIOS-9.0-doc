---
title: "About RPZ Recent Hits"
source: "/space/nios90/1457194100"
pageId: "1457194100"
---
The **RPZ** **Recent** **Hits** tab displays the data that is collected from the most recent hits of five unique clients, identified by their IP addresses, during the last 24 hours. NIOS retrieves this data from the syslog. This tab does not display any data when there are no syslog messages or if RPZ logging is disabled. NIOS displays an error message if RPZ logging is disabled. For more information about enabling RPZ logging, see [*Setting DNS Logging Categories*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server)*.*  
Grid Manager retrieves recent hits from the selected member. If a member has an RPZ license installed, then NIOS will parse the syslog every 60 seconds to collect the data. NIOS parses the generated data to identify the five most recent hits. It searches for these fields in the syslog message: CEF: data string(RPZ syslog) and src fields.  
The NIOS appliance remembers the start and end time of previously searched operations to optimize the recent hits data collection, so that the same data is not searched again. Note that when the same client makes repeated queries in the last 24 hours, then there might be less than five unique client hits. You cannot sort or filter values in this tab.  
This tab displays the following information:

- **Client** **IP** **Address**: IP address of the client that made the recent hits.
- **Requested FQDN**: The domain name or IP address that triggered the RPZ rule. For example, consider an RPZ rule [test.com.rpz.com](http://test.com.rpz.com), which queries for [test.com](http://test.com). In this example, [test.com](http://test.com) is the requested FQDN.
- **RPZ Entry**: The RPZ rule that queried a domain name or an IP address. In the above example, [test.com.rpz.com](http://test.com.rpz.com) is the RPZ rule.
- **Timestamp**: The date and time when the hit occurred.

Consider an example in which you query an RPZ zone and the NIOS appliance logs the following message in the syslog:

`CEF:0|Infoblox|NIOS|6.9.0-219291|RPZ-QNAME|NODATA|4|app=DNS dst=10.35.101.14 src=10.36.0.251 spt=44460 view=_default qtype=A msg="rpz QNAME NODATA rewrite `[w18.vg](http://w18.vg)` \[A\] via `[w18.vg.fireeye.com](http://w18.vg.fireeye.com)`"`

This tab displays information in the corresponding fields as follows:

| **Fields** | **Description** |
| --- | --- |
| Client IP Address | Data is retrieved from the src field.  Example: `10.36.0.251` |
| Requested FQDN | It is retrieved from the data between the `rewrite` and `[A] via` fields. Example: [w18.vg](http://w18.vg)`.` |
| RPZ Entry | It is retrieved from the data after the `via` in `msg` field. Example:` `[w18.vg.fireeye.com](http://w18.vg.fireeye.com) |
| Timestamp | This is listed in the syslog. |
