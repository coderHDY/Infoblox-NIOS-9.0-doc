---
title: "About Response Policy Zone (RPZ) Status for Member"
source: "/space/nios90/1468466331"
pageId: "1468466331"
---
The *Response* *Policy* *Zone* *(RPZ)* *Status* *for* *Member* widget provides statistical information about RPZ hits for the selected member. This widget contains the following tabs: **RPZ** **Recent** **Hits**, **Trend**, and **Health**.  
You can do the following in this widget:

- Click **Select** **Member**. In the *Member* *Selector* dialog box, choose a Grid member to view the RPZ hits, or statistics, or RPZ zones and their last updated date and time.
- Select a graph configuration, **ClientHits**, **Passthru Hits**, **Blocked Hits**, or **Substituted Hits**, to view details of a specific RPZ rule. You can select either one or all the available graph configurations. Note that **Client Hits** is displayed only when the graph type is **Line Diagram**.
- Select a graph type, **Stacked** **Diagram** or **Line** **Diagram**, to display data in the required diagrammatic format. This option is enabled only when you click the **Trend** tab and disabled when you click the **Top** **10** **Grid** **Members**, **RPZ** **Recent** **Hits**, or **Health** tabs.
- Click **View** **Syslog** to view the last 20 RPZ events that are logged in the syslog.
- Click the **RPZ** **Recent** **Hits** tab to view information about the latest five RPZ hits with unique client addresses.
- Click the **Trend** tab to view RPZ hit statistics on the selected member.
- Click the **Health** tab to view information about RPZ zones and their last updated times.

Note that you must install the RPZ license and enable **RPZ** **logging** to access this widget. For more information about installing licenses and enabling RPZ logging, see [*License Requirements and Admin Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/license-requirements-and-admin-permissions) and [*Setting DNS Logging Categories*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server).
