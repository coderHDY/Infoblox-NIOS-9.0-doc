---
title: "Configuring DTC Monitors for Health Check"
source: "/space/nios90/280664170"
pageId: "280664170"
---
You can choose DNS Traffic Control health monitors whose DNS Traffic Control health checks are considered when calculating the health status of a member in a pool. You can create a consolidated health monitor in a DNS Traffic Control pool with its own set of members for each monitor. The status of a health check can then be determined according to the consolidated health monitor you created with selected members and availability condition.

To configure DNS Traffic Control monitors whose health check status must be shared from selected members, perform the following steps:

1. From the **Data ****Management **tab, select the **DNS **tab -&gt; **Traffic ****Control **tab.
2. Select the pool for which you want to configure monitors and click the **Edit** icon.
3. Click the **Health Monitors** tab -&gt; **Advanced**** **tab.
4. Click the **Add** icon.
5. From the **Monitor** drop-down list, choose the monitor whose health checks you want to be considered.
6. From the **Avail****ability Requirement** drop-down list, you can either select all members of the pool to pass the health check for the selected monitor or for any of the pool member to pass the health check for the selected monitor. A passed health check is denoted by the green status.
7. From the **Share state from** box, select the members that you want the health check to be calculated. Select the members and move them to the **Selected** box.
8. Select the **Full Health Communication** checkbox to perform health checks on each and every member of the Grid which are part of LBDN and to send the status to all the Grid members which are in non selected list and the status is shared between grid members which are in selected list. This checkbox is disabled by default. By default, NIOS performs health checks only on Grid members from the selected list.
9. Click **Add**.  
   The monitor along with its associated members and full health communication details are displayed in the **Consolidated Health Monitor Settings** area.
10. Click **Save & Close**.

> **warning**
>
> **Note**
> 
> To add DNS Traffic Control pool with consolidated monitors using CSV import, you must first import the DNS Traffic Control pool objects without consolidated monitor data (if the CSV file contains consolidated monitors, you must manually remove the data before importing the DNS Traffic Control pool objects). Once the DNS Traffic Control pool objects are in the system, you can run the CSV override to add consolidated monitors using a CSV file that contains all the data, including the DNS Traffic Control pool objects and consolidated monitors.

You can now view a snapshot of any member in the pool and the monitors associated with it, along with their health status. To view the snapshot, complete the following:

1. Click the server for which you want to see the consolidated monitors.
2. In the **Server Visualization** area, select the member for which you want to see the associated monitors.

A visualization chart is displayed that represents the pool hierarchy. You can hover over the server icons to view the health status of the monitors associated with the server. For more information about health monitors, see *[Using DNS Traffic Control Health Monitors](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/using-dns-traffic-control-health-monitors)*.
