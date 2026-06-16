---
title: "Verifying RPZ Configuration"
source: "/space/nios90/280269642"
pageId: "280269642"
---
After you have set up and configured RPZs and RPZ rules, you can verify whether the RPZ zone transfers are functioning properly by doing the following:

*[toc]*

The appliance also makes a syslog entry, when an RPZ zone refresh succeeds or fails and also sends an SNMP trap and an email notification, if configured. For information about setting SNMP and email notification, see *[Setting SNMP and Email Notifications](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp)*.

# Viewing RPZ in the Syslog

To receive RPZ information in the syslog, make sure that you enable the RPZ option in the Logging tab of the Grid DNS Properties editor. Once the RPZ option is enabled, the appliance logs RPZ threats in CEF (Common Event Format) in the syslog. You can click the Action icon to view the RPZ threat details in the RPZ Threat Details viewer. For information about how to configure the syslog server, see *[Using a Syslog Server](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server)*.

Following is a sample RPZ threat message:

`2014-09-15T07:14:47-07:00 daemon info rpz:`  
`CEF:0|Infoblox|NIOS|6.12.0-252689|RPZ-QNAME |PASSTHRU|7|app=DNS dst=172.31.1.156`  
`src=10.120.20.69 spt=39503 view=_default qtype=A msg="rpz QNAME PASSTHRU rewrite`  
`passthru.com [ANY] via passthru.com.rpz_1.com`

Each log message contains the following information:

- The timestamp when the event happened in yyyy-mm-ddThh:mm:ss-00:00 format.
- **Infoblox|NIOS** **|x.x.x**: Indicates the Infoblox product, and x.x.x represents the NIOS version.
- The string following the NIOS version is a hard-coded constant. In this example, it is RPZ QNAME.
- The hard-coded constant is followed by mitigation action. In this example, it is PASSTHRU.
- The number following the mitigation action is the threat severity level. The following numbers indicate the severity levels:
  
  - **8** = **Critical**
  - **7** = **Major**
  - **6** = **Warning**
  - **4** = **Informational**
- **dst**: Destination IP address.
- **src**: Source IP address.
- **spt**: Source port.
- **view**: DNS view.
- **qtype**: Query type.
- **msg**: RPZ rule.

The syslog messages are optionally tagged according to the logging category configured in the external syslog servers. For more information, see *[Syslog Message Prefixes](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server)*.  
To verify RPZ zone transfers:

1. Go to the **Administration** tab -&gt; **Logs** tab -&gt; **Syslog** tab.
2. Select **RPZ** **Incident** **Logs** from the **Quick** **Filter** drop-down list.
3. Review the syslog for zone transfer confirmation, as shown in the below figure.

*The* *Syslog* *Viewer*

*[drawio]*

# Viewing the Last Updated RPZs

To view the last updated RPZs:

1. Go to the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Response** **Policy** **Zones** tab.
2. Review the **Last** **Updated** column and confirm the time when an RPZ was last updated, as shown in the following figure.

> **warning**
>
> It may take up to 10 minutes before the updated information is displayed.

*Last* *Updated* *RPZ*

![image](/assets/280269642/6c86755e-0cb3-4675-be6e-1409651ea5ca.png)
