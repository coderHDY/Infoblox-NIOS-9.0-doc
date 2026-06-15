---
title: "Ranges Over Threshold"
source: "/space/nios90/1456866760"
pageId: "1456866760"
---
The *Ranges* *Over* *Threshold* widget enables you to monitor IPv4 DHCP range usage from your Dashboard. It lists the IPv4 ranges that are allocated above a specified threshold and thus may warrant your attention. The default threshold is 75%. For information, see [*Configuring Thresholds for DHCP Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-thresholds-for-dhcp-ranges). Note that the appliance highlights disabled IPv4 ranges in gray.

The widget displays the IPv4 ranges with utilization percentages that surpass the threshold. To configure the *Ranges* *Over* *Threshold* widget, click the Configure icon and do the following:

- **Network** **View**: Select a network view in which you want to monitor the IPv4 ranges. This field is displayed only when you have more than one network view.
- **Threshold**: Enter a new threshold value. The default is 75%.   
  In addition, you can do the following:
- Click the Export button to export the list of IPv4 ranges that surpass the threshold to a file in CSV format.
- Click the Refresh button to refresh the data in the list.
