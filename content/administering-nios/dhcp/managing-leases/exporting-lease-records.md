---
title: "Exporting Lease Records"
source: "/space/nios90/280761266"
pageId: "280761266"
---
The DHCP lease history log holds a maximum of 100,000 entries. After that maximum is reached, the appliance begins deleting entries, starting with the oldest. To archive DHCP lease history logs, you can export them and save them as CSV (comma separated variables) files. You do not need to export the entire log. You can selectively export a section of the log, such as the lease events for a single day.  
As a conservative approach to archiving DHCP lease data, Infoblox recommends exporting the log on a daily basis, perhaps through API (application programming interface) scripting. By exporting the daily log entries every day over a certain period of time and then opening the exported files with a spreadsheet program, you can see the number of entries for each day. You can then estimate how often you need to export the log to ensure that you save all of the entries before the log fills up (at 100,000 entries). As a result, you might discover that you need to export the log more or less frequently than once a day to archive all the records.  
A limited-access admin group can view and export the DHCP lease history if it has read-only permission to the DHCP lease history. For information on setting permissions for the DHCP lease history, see *[Administrative Permissions for the IPv4 and IPv6 DHCP Lease Histories](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153)*. In addition, you can export the displayed DHCP current lease information or you can export them to a CSV file.  
To export displayed current lease information:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Leases** tab -> **Current** **Leases**.
2. Click the Export icon and select **Export** **visible** **data**. For more information on how to export, see *[Exporting Displayed Data](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280761266)*.

To export DHCP current lease information to a CSV file:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Leases** tab -> **Current** **Leases**.
2. Click the Export icon and select **Export** **data** **in** **Infoblox** **CSV** **Import** **format**. For more information on how to export, see *[Exporting Data to Files](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280761266)*.

To export a lease history log:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Leases** tab -> **Current** **Leases** or **Lease** **History**.
2. Click the Export icon and select.
3. In the *Export* dialog box, click **Start**
4. Click **Download** when the export is complete. Ensure that you turn off the pop-up blocker in your browser.
5. In the *File* *Download* dialog box, select the appropriate action to either open or save the CSV file.
