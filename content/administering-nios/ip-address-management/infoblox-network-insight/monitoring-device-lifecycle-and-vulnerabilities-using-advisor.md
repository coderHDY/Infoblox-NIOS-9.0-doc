---
title: "Monitoring Device Lifecycle and Vulnerabilities Using Advisor"
source: "/space/nios90/280273078"
pageId: "280273078"
---
Advisor is a subscription-based service that assists you in monitoring and maintaining network and security infrastructure based on released Common Vulnerabilities and Exposures (CVEs) and vendor product lifecycle announcements. It allows you to monitor the following equipment lifecycle and vulnerability data for the devices discovered by Network Insight:

- CVE Bulletin Count: The count of CVEs that affect the device.
- CVE Bulletin List: The names of manufacturer's CVEs that affect the device.
- End of Sale Date: The date announced by the manufacturer when the device cannot be ordered.
- End of Support Date: The date announced by the manufacturer when the device is no longer eligible for support.
- EOL Bulletin URL: The URL pointing to the manufacturer's announcement.
- EOL Status: The End of Life status of the device, e.g. Current, End of Sale, and End of Support.

You can execute Advisor at any time or configure it to run at specific intervals and time. For information, see [*Configuring Advisor Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343293033). In addition, you can use the "Device Advisor" report and [*dashboard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911) and Advisor filters in Smart Folders.

You can view lifecycle and vulnerability data in the **Devices** tab. If not present, add the Advisor-related columns to the table. To do so, click a column header, click the down arrow, select **Columns** -> **Edit Columns**, and then select the Advisor-related columns. You can also view this data in the properties of any discovered device as described in the next section.

Also see Advisor Vendor Support Matrix below.

# Viewing Advisor Data

To see lifecycle and vulnerability data for an individual device:

1. In the Grid Manager, select **Data Management** → **Devices**.
2. Select a device in the table and click **Edit**.
3. In the **Device Properties** editor, select **Extensible Attributes**. The **Value** column displays the lifecycle and vulnerability data, if detected for the device.

> **warning**
>
> ### Note
> 
> Unlike regular extensible attributes that you can create to track NIOS objects, Grid Manager creates the Advisor extensible attributes automatically to obtain and display device lifecycle and vulnerability data.

# Advisor Vendor Support Matrix

The following table lists vendors that support Advisor. It includes supported announcement types and the NIOS version when they were added or updated.

| **Vendor** | **Vulnerabilities** | **Lifecycle** |
| --- | --- | --- |
| **8.4** |
| Cisco | Yes | Yes |
| **8.4.4** |
| Arista | Yes | Yes |
| Blue Coat | Yes | Yes |
| Checkpoint | Yes | No |
| Infoblox | Yes | Yes |
| Juniper | Yes | Yes |
| Palo Alto Networks | Yes | Yes |
| **8.6** |
| Aruba | Yes | Yes |
| Avaya/Nortel | Yes | Yes |
| Brocade | Yes | Yes |
| Checkpoint (API updated) | Yes | Yes |
| Netscreen (same API as Juniper) | Yes | Yes |
