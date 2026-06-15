---
title: "IPv4 Networks Over Threshold"
source: "/space/nios90/1457652751"
pageId: "1457652751"
---
The *IPv4* *Networks* *Over* *Threshold* widget enables you to monitor IPv4 network and IP address usage from your Dashboard. It lists the IPv4 networks that are allocated above a specified threshold and thus might warrant your attention. The default threshold is 75%.

For network containers, the threshold is the percentage of IP address space that has been allocated. For subnets, it is the percentage of used addresses, except the broadcast and network addresses. The widget displays the network containers and subnets with utilization percentages that surpass the threshold.

You can also select to view IPv4 cloud networks only if you have deployed Cloud Network Automation. For information about this feature, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).

To configure the *Networks* *Over* *Threshold* widget, click the Configure icon, and then complete the following:

- **Threshold**: Enter a new threshold value. The default is 75%.
- **Type**: Select **IPAM Utilization** or **IPv4 DHCP Utilization**. For information, see [*Managing IPv4 DHCP Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data).
- **All Network Views**: Select this to monitor threshold for IPv4 networks in all network views.
- **Select Network View**: Click Select to select the network view in which you want to monitor the threshold.

To view information related to cloud networks, select **View** **Cloud** **Networks** **Only**, and then select one of the following:

- **All** **Tenants**: Displays information for all tenants.
- **Select Tenant**: Click **Select** to select a specific tenant. In addition, you can do the following in this widget:
- Click the Export button to export the list of networks that surpass the threshold to a file in CSV format.
- Click the Refresh button to refresh the data in the list.
