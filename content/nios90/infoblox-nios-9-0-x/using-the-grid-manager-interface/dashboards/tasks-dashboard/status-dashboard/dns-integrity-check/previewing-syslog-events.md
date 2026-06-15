---
title: "Previewing Syslog Events"
source: "/space/nios90/1457194025"
pageId: "1457194025"
---
When you select **View** **Syslog** from the *DNS* *Integrity* *Check* widget for a selected zone, the *Syslog* *Preview* dialog is displayed. You can view related syslog events for the selected zone in this dialog, as follows:

- **Timestamp**: The timestamp in YYYY-MM-DD HH:MM:SS when the event was logged.
- **Facility**: The location that determines the processes and daemons from which the log messages are generated.
- **Level**: The severity level of the DNS data discrepancies. This can be **Critical**, **Severe**, **Warning**, **Information**, or **Normal**. For more information, see descriptions for the **Status** field.
- **Server**: The name of the Grid member that performed the data check.
- **Message**: Syslog information about the event. If you have enabled verbose logging, this displays detailed information about the event. For information about how to enable verbose logging, see [*Configuring DNS Integrity Check for Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-dns-integrity-check-for-authoritativ).

You can also click **Go** **to** **Syslog** **Viewer** on the upper right corner of the dialog to view all events in the syslog. For more information about the syslog, see [*Viewing the Syslog*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server).
