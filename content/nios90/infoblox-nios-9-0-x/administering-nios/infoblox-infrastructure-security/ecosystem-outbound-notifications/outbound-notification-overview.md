---
title: "Outbound Notification Overview"
source: "/space/nios90/280661981"
pageId: "280661981"
---
The Infoblox outbound API is a framework that is used to exchange both IPAM data (such as networks, network containers, hosts, leases) and DNS threat data with external interfaces. It sends object information and conversations to other REST APIs when an event triggers in NIOS. It is important that you receive notifications about the updates to the system. On the other hand, you may sometimes also need to identify and manage low-risk or accidental threats so the endpoint performance is not negatively affected. For example, if a user inadvertently browses to a faulty web site and you have configured RPZ rules to block this site, you may want to receive notifications and take certain actions so the user is not being blocked or quarantined. In addition, when the Infoblox appliance detects a new host or network, the detection might trigger a vulnerability scan by services such as Qualys and a scan for RPZ events configured in NIOS. In this scenario, you might want to configure conditions to capture these events so you can receive outbound notifications and perform appropriate actions to handle the situation.

For example, you can first configure RPZ rules to mitigate a malicious IP address, and then configure RESTful API and DXL endpoints to which you want to send the outbound notifications. When configuring your notification rules, you can match RPZ events that are initiated by the RPZ rules and apply the outbound template containing actions to mitigate the threat. The configuration rules then trigger outbound notifications, and the appliance sends the notifications to the configured endpoints and applies the configured actions to combat the offensive IP address.  
Before you configure the appliance to send outbound notifications, there are a few limitations you might want to consider, as described in Best Practices for Outbound Notifications, below. For detailed information about how to use the outbound notification feature, see *[Configuring Outbound Notifications](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-notifications)*.

To enable, configure, and test outbound notifications you must first install the **Security** **Ecosystem** license in your Grid and do the following in the below mentioned order:

1. Ensure that the necessary services and features are configured. These include DHCP, RPZ, Threat Insight, DNS Infrastructure Protection, Network Insight, and Infoblox Threat Defense Cloud.
2. Create necessary extensible attributes, if required. For more information, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.
3. Create or download login and logout templates from the Infoblox Community Site at *[https://community.infoblox.com](https://community.infoblox.com)*. Next, add or upload the login and logout templates followed by the session template. Note that you can add a session template or download it from the Infoblox Community Site.
4. Download or create notification templates from the Infoblox Community Site at *[https://community.infoblox.com](https://community.infoblox.com)*. Next, add or upload the notification templates.
5. Add an endpoint. You can either add REST API or DXL endpoints. For DXL endpoints, you must generate a NIOS client certificate, import DXL certificates and import or add list of DXL brokers. For more information, see *[Configuring Outbound Endpoints](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints)*.
6. Define notification rules. For more information, see *[Configuring Notification Rules](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules)*.

The outbound notification feature employs the following mechanism to enable and deliver event-driven messages to configured endpoints:

1. Accepts the configuration of events that you want to monitor (such as RPZ hits) and the configuration of endpoints to which you want to send outbound notifications.
2. Filters events for specific data sets or thresholds, such as RPZ hits for a specific domain within a specific time interval.
3. Matches the selected events and conditions defined in the templates to create outbound messages.
4. Sends outbound notifications to the configured endpoints.

Depending on the notification rules for RPZ and DNS infrastructure protection event types you want to configure on NIOS, you may need to install the applicable licenses. For information about other licensing requirements, see Licensing Requirements below.

> **warning**
>
> **Note**
> 
> To access online resources about this feature, including training videos and sample outbound templates for supported ecosystem partners, ensure that you visit the Infoblox Community Site at *[https://community.infoblox.com](https://community.infoblox.com/)*.

For debugging purposes, you can look at the syslog to see if the Outbound service has been started or stopped on specific members. You can also set the logging level to **Debug** to view all events in the log files, including deduplicated events. However, leaving the logging level at the **Debug** level could negatively affect your system performance. Therefore, Infoblox does not recommend leaving the logging level at **Debug**. For information about how to configure the severity level and deduplication, see *[Configuring Outbound Endpoints](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints)*.

# Licensing Requirements

You must install the** Security Ecosystem** license to enable outbound API notifications. After you install the Security Ecosystem license, you can configure REST and DXL endpoints. If you do not have this license installed, the outbound notification feature is disabled. You might also need the following licenses to configure notification rules for certain event types:   
*Licenses* *required for certain event types*

| **License** | **Event**** ****Types** |
| --- | --- |
| **RPZ** | DNS RPZ |
| **DNS and DHCP** | DHCP Lease |
| **Threat Insight** | DNS Tunneling |
| **Advanced DNS Protection** | Security DNS Infrastructure Protection |
| **RPZ and Security Ecosystem** | Infoblox Threat Defense Cloud |
| **Network Discovery** | Object Change Discovery Data |

For information about how to install licenses, see *[Managing Licenses in NIOS 9.0.1 and Later](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later)*.

# Administrative Permissions

Only superusers can add, edit, and delete REST endpoints and notification rules by default. Limited-access admin groups can perform these tasks only if their administrative permissions are defined. For information about administrative permissions, see *[About Administrative Permissions](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)*.

# Best Practices for Outbound Notifications

The following are some best practices and limitations you might want to consider while configuring outbound notifications:

- You can configure REST and DXL endpoints only on the Grid Master and Grid Master Candidate, but not on Grid members.
- During a scheduled full upgrade in the Grid, you cannot modify any configuration related to the outbound feature until all Grid members are upgraded.
- Outbound notification is not supported during an HA failover. Any events that are in transit during a failover might be lost.
- When you remove or disable a notification rule, no new events will be triggered. However, the appliance continues to process events that are already in queue.
- The buffer to hold events temporarily are limited and not configurable in this release. In very unlikely conditions, events may be dropped due to a full buffer. If events are dropped, summary information is logged to the syslog to indicate the type of events and the number that have been dropped. If this issue occurs continuously, contact Infoblox Technical Support.
- Events generated due to changes made by admin users do not support the Microsoft Management feature. The appliance does not generate events when there are changes done from the Microsoft servers. However, if you make changes that need to be synchronized to the Microsoft servers, the object change event is generated before the changes are synchronized with the Microsoft servers.
- The Grid Master Candidate will continue to perform event enrichments and outbound API calls during and after a Grid Master promotion.
- If you disable the outbound notification feature or make changes to stop future notifications sent to an endpoint, all notifications that are currently in queue for this endpoint will stop immediately.
- The appliance uses rate limiting to control both data collection from Grid members and outbound notifications to external endpoints. It is possible for the appliance to drop events if its buffer is full or if there is a loss of connection between the Grid Master and the Grid members. Logs for these events are consolidated and logged to the syslog.
- The number of outbound notifications sent to external endpoints can be limited, depending on the requirements configured for the external servers. For example, some REST enabled servers only take 10 API calls per second. Some servers might put a user in suspended mode if the number of API calls sent to the user exceeds the limit. If necessary, you can adjust the rate limit criteria for API calls on the external servers.
