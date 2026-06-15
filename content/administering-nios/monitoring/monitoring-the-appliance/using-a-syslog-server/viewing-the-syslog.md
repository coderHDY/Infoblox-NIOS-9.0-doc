---
title: "Viewing the Syslog"
source: "/space/nios90/1380844786"
pageId: "1380844786"
---
The Action icon column is displayed only when you have installed the RPZ license. Click this to view threat details in the *RPZ Threat Details* dialog box. For more information, see Viewing the RPZ Threat Details below.

- **Timestamp**: The date, time, and time zone of the log message. The time zone is the time zone configured on the member.
- **Facility**: The location on the syslog server that determines the processes and daemons from which the log messages are generated.
- **Level**: The severity of the message. This can be ALERT, CRITICAL, DEBUG, EMERGENCY, ERROR, INFO, NOTICE, or WARNING.
- **Server**: The name of the server that logs this message, plus the process ID.
- **Message**: Detailed information about the task performed. For Cloud Network Automation, this contains comma separated values of the admin, source, action, object, object type, and message values. Note that source is defined only if the cloud API request was proxied by the Cloud Platform Appliance. The format for this field is `proxied from:host,IP` where `host` and `IP` are the host name and IP address of the proxy.

> **warning**
>
> Note
> 
> If the selected member is an HA pair, the Grid Manager displays the syslog in two tabs —** Active** and **Passive**. Click the corresponding tab to view the syslog for each node.

Severity names are standard syslog levels that have the following precedence order of importance:

- **Emergency**: System is unusable
- **Alert**: Action must be taken immediately
- **Critical**: Critical conditions
- **Error**: Error conditions
- **Warning**: Warning conditions about potential issues
- **Notice**: Normal but significant condition
- **Informational**: General system activity
- **Debug**: Debug-level messages
