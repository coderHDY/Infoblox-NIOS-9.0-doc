---
title: "Monitoring through Syslog"
source: "/space/nios90/280275770"
pageId: "280275770"
---
To receive DNS infrastructure protection events in the syslog, you must enable the Security option in the DNS logging category of the Grid DNS Properties editor. For information about configuring the logging category as described in Setting DNS Logging Categories, see *[Using a Syslog Server](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)*. Once the Security option is enabled, hardware-based appliances log each DNS infrastructure protection related event in the syslog in CEF (Common Even Format). You can get detailed information about the events by reviewing the syslog periodically. For information about how to configure the syslog server, see *[Using a Syslog Server](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)*.  
When a DNS attack is detected against an enabled rule, the appliance generates a log message. Note that only DNS infrastructure protection messages in CEF are displayed in the syslog. The log messages for rate limiting alert events also include the FQDNs extracted from DNS queries whose standard query and question count is greater than zero so you can quickly identify the offending clients. Note that the FQDN field displays “NA” for invalid DNS queries. This feature is enabled by default.

Example:

When the appliance detects ICMP ping attacks that exceed the pint size against an existing auto rule that has the following configuration:

Log Severity = Critical  
Rule ID = 120600925  
Rule Name = Potential DDoS related domain  
Rule Action = Drop  
Rule Category = Potential DDoS related Domains

It generates the following threat detection event log message:

`2018-04-20T09:43:21+00:00 daemon `infoblox`.`localdomain` named[14792]: info CEF:0|Infoblox|NIOS|8.3.0-369415|RPZ-QNAME|Local-Data|7|app=DNS dst=10.34.173.11 src=10.120.20.28 spt=52240 view=_default qtype=A msg="`rpz` QNAME Local-Data rewrite a_rec [A] via a_rec.local.com" IPSD=N/A Acct-Session-Id=8333332d-11111111 Parental-Control-Policy=010000000033 Calling-Station-Id=1101202041 NAS-PORT=1813 Subscriber-Secure-Policy=00000fff Guest=1 LocalID=000C2987FEEE CAT=RPZ`

The number of log messages generated is based upon your Event per Second per Rule setting. For example, if the setting is 5, the appliance generates five log messages of the same event per second when the attack continues within the time duration. Each log message contains the following information:

- The timestamp when the event happened in yyyy-mm-ddThh:mm:ss+00:00 format.
- **Infoblox|NIOS****|x.x.x**: Indicates the Infoblox product, and x.x.x represents the NIOS version.
- The string following the NIOS version is a hard-coded constant. In this example, it is RPZ QNAME.
- The number following the rule ID is the log severity. The following numbers indicate the severity levels:
  
  - **8** = **Critical**
  - **7** = **Major**
  - **6** = **Warning**
  - **4** = **Informational**
- **app**: DNS.
- **dst**: Destination IP address.
- **src**: Source IP address.
- **spt**: Source port.
- **view**: DNS view.
- **qtype**: Query type.
- **msg**: RPZ rule.
- **IPSD**: IP space discriminator.
- **Acct-Session-Id**: Session ID.
- **Parental-Control-Policy**: Parental Control Policy.
- **Calling-Station-Id**: Subscriber ID.
- **NAS-PORT**: NAS Port.
- **Subscriber-Secure-Policy**: Subscriber Secure Policy.
- **Guest**: Guest indicator. For fixed line or home router deployments, a guest indicator value '1' indicates guest device and '0' indicates subscriber device.
- **LocalID**: MAC address of the subscriber device. For fixed line or home router deployments, if the guest indicator value in the **Guest** field displays '1' then the **Local ID** field displays the MAC address of the guest device.
- **CAT**: The category to which the rule belongs. In this example, the category is "**RPZ**."

To view DNS infrastructure protection related log messages:

1. From the **Administration** tab, select the **Logs** tab -> **Syslog** tab.
2. From the drop-down list at the upper right corner, select the Grid member on which you want to view the syslog.
3. From the Quick Filter drop-down list, select **Threat** **Rule** **Update** **Events** or **Threat** **Detection** **Event** **Logs** to view rule update events or threat detection events respectively. To narrow down the system messages you want to view, click Show Filter and then select the filters you want to use. For information about how to use filters, see *[Using Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.
