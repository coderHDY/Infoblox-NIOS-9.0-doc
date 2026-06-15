---
title: "Specifying the Audit Log Type"
source: "/space/nios90/1393852570"
pageId: "1393852570"
---
Select **Detailed** (default), or **Brief**, or **WAPI Detailed **audit log type as follows:

1. On the **Infoblox Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab, and then click **Grid Properties** -&gt; **Edit** in the Toolbar.  
   On the **System** tab, select the **System Manager** tab, and then click **System Properties** -&gt; **Edit** in the Toolbar.
2. In the *Grid Properties Editor,* on the **General** tab, or in the *System Properties Editor*, on the **System** tab, select one of the following:
   
   - **Detailed**: This is the default type. When you select this, Grid Manager displays detailed information on all administrative changes such as the timestamp of the change, administrator name, changed object name, and the new values of all properties in the logged message.
   - **Brief**: Provides information on administrative changes such as the changed object name and action in the log message. The logged message does not show timestamp or admin name.
   - **WAPI Detailed:** Select this option to view detailed RESTful API session information logs for successful WAPI calls such as PUT, POST, and DELETE. You can view the following session log information for each successful WAPI call:
     
     - **URI**: URI contains certain part of the incoming WAPI request. Example: version of WAPI and the associated object.
     - **InData**: InData contains input data fields of the incoming WAPI request. Example: Data field of the incoming WAPI request.
     - **Response Time**: Response time is calculated as the time difference between a WAPI request received and the response sent.
       
       This option helps you to troubleshoot and monitor performance issues that impact specific WAPI calls and track WAPI usage. When you select this option, you can view additional columns such as **URI, InData **and **Response Time** in the Audit log.
       
       The following example shows an audit log entry for a POST WAPI call:` `  
       `[2018-05-29 09:20:12.026Z] [admin]: Created(POST) v2.9/zone_auth {"fqdn":"foo.com"} 2.233 AuthZone foo.com DnsView=default: Set fqdn="foo.com"`   
       In the example above:
     - `POST` indicates the WAPI call
     - `v2.9/zone_auth` is the URI
     - `{"fqdn":"foo.com"}` represents InData
     - 2.233 is the response time.

> **warning**
>
> ### Note
> 
> There might be a slight impact on the device performance as the session log information, such as URI, InData, and response time, are captured for all the successful WAPI calls. The audit log file size increases as the log entries increase, which may impact the storage capacity. Infoblox recommends that you select the **Copy** **Audit** **Log Messages to Syslog **checkbox in the *Grid Properties Editor* to move audit log information to the syslog and to an external server for longer retention. For more information about specifying syslog servers, see [*Using a Syslog Server*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server). All Cloud WAPI, via Cloud Network Automation (CNA) or Cloud Platform (CP) appliances, related events are logged to syslog instead of the audit log. For more information, see [*Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/cloud-network-automation).
