---
title: "Viewing Health Monitors"
source: "/space/nios90/1394543390"
pageId: "1394543390"
---
You can view health monitors that you have created. You can add new health monitors, delete existing monitors, modify health monitors, or associate extensible attributes to them. You can also upload and manage health monitor certificates.  
To view health monitors:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. The Health Monitors Manager displays the following information:
   
   - **Name**: The name of the health monitor.
   - **Type**: The type of health monitor.
   - **Comment**: Displays information about the health monitor.
   - **Interval**: The interval value in seconds.
   - **Timeout**: The timeout value in seconds.
   - **Retry** **Up** **Count:** The retry up count specified for the respective health monitor.
   - **Retry** **Down** **Count**: The retry down count specified for the respective health monitor.
   - **Port**: The port number specified for the respective health monitor. Note that this is not valid for an ICMP monitor.
   - **Site**: Value that was entered for the respective health monitor.

You can do the following in the Health Monitors Manager:

- Define new health monitors. For more information, see the following sections:
  
  - [*Configuring HTTP Health Monitors*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors/configuring-http-health-monitors)* *
  - [*Configuring ICMP Health Monitors*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors/configuring-icmp-health-monitors)
  - [*Configuring PDP Health Monitors*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors/configuring-pdp-health-monitors)
  - [*Configuring SIP Health Monitors*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors/configuring-sip-health-monitors)
  - [*Configuring SNMP Health Monitors*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors/configuring-snmp-health-monitors)
  - [*Configuring TCP Health Monitors*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors/configuring-tcp-health-monitors)
- Edit existing health monitors.
- Manage health monitor certificates.
- Delete existing health monitors. [.](#)
- Click the Export icon to export the list of monitors to a .csv file.
- Click the Print icon to print the list of monitors.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the monitor from the possible matches. Create a quick filter to save frequently used filter criteria. For information about using quick filters, see [*Finding and Restoring Data*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
