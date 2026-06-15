---
title: "Supported Reporting Appliances and Storage Space"
source: "/space/nios90/280401176"
pageId: "280401176"
---
Infoblox provides several reporting appliances to address different reporting requirements. The Report Categories, Related Data Sources, and Update Frequencies table lists the supported Trinzic Reporting platforms based on IP capacities and average DHCP leases and DNS queries per second, see *[Configuring Reporting Clustering](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/configuring-reporting-clustering)*. There will be an impact on the performance of your reporting server when you perform many searches, download PDF reports, and send reports through emails and alerts. It is important to consider the reporting server configuration and make sure that it can handle the overall workload. A reporting appliance uses up to 95% of the total reporting disk space. The usable hard disk space on different appliance models is shown in the table below.   
  
*Infoblox* *Reporting* *Appliances* *and* *their* *Usable* *Reporting* *Hard* *Disk* *Space*

| **Enterprise**** ****Model** | **Supported**** ****Infoblox**** ****Model** | **Reporting**** ****Hard**** ****Disk**** ****Space** | **Usable**** ****Reporting**** ****Hard**** ****Disk**** ****Space**** ****(GB)** | **Daily**** ****Maximum**** ****Data**** ****Consumption******* |
| --- | --- | --- | --- | --- |
| Trinzic Reporting 5005 Appliance (User-configurable) | TR-V5005 | User-defined hard disk space | User-defined hard disk space |  |
| Large enterprises    Service providers - Trinzic Reporting Appliance | TR-2205 | 2400 GB | 1657 | 10 GB |
| Mid-size Enterprises - Trinzic Reporting Appliance | TR-1405 | 1200 GB | 1140 | 5 GB |
| Mid-size Enterprises - Trinzic Reporting Appliance | TR-805 | 1000 GB | 950 | 5 GB |
| Trinzic Reporting TE-1606 Appliance | TR-5005 | 2TB |  |  |
| Trinzic Reporting TE-2306 Appliance | TR-5005 | 4TB |  |  |
| Trinzic Reporting TE-4106  Appliance | TR-5005 | 4TB |  |  |

> **warning**
>
> **Note**
> 
> - The daily maximum data consumption includes all DNS, DDNS, IPAM, DHCP, Discovery, and system traffic or events from all members with data transmission enabled within the Grid. When data traffic exceeds the daily maximum, the reporting server sends an SNMP trap and email notification, if configured. After five (5) daily maximum warnings in a rolling period of 30 days, you cannot perform any reporting related functions. You must then contact Infoblox Technical Support to resolve the issue. Note that the reporting server continues to process incoming data during the violation state. However, you cannot view any reports or manage any reporting related functions until you fix the violation issue.
> - In NIOS 9.0.4 and in Splunk the webhook uses Python 3.0. If the webhook scripts are written to work on a version lower than 3.0, they will not work as those versions have been deprecated in Splunk.



For information about the Trinzic Reporting platforms, their specifications, and how to install them as reporting appliances, refer to the respective installation guides, available on the Infoblox Support site.
