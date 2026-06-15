---
title: "Adding PTR Records"
source: "/space/nios90/1423049086"
pageId: "1423049086"
---
To add a PTR record, perform the following steps:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** -> **Add** **PTR** **Record**.
2. In the *Add* *PTR* *Record* wizard, do the following:
   
   - **Name** or **IP** **Address**: From the drop-down list, select **Name** or **IP** **Address**. When you select **Name**, click **Select** **Zone** to select a zone, and then enter a value for the PTR record. When you are adding a PTR record to a reverse-mapping zone, you can enter a value from 0 to 255 in the **Name** or **IP** **Address** field. Note that when you launch this wizard from the **IPAM** tab, you can only select a reverse-mapping zone. When you launch this from a reverse-mapping zone, the IP address field is populated with the prefix that corresponds to the selected zone. When you launch this from a forward-mapping zone, you can only specify the host name, not an IP address.
   - When you select **IP** **Address**, enter the IPv4 or IPv6 address that you want to map to the domain name.
   - **DNS** **View**: If you entered an IP address, you must select the DNS view of the PTR record. If you entered a name, this field displays the DNS view of the selected zone.
   - **Domain ** **Name**: Enter the domain name to which you want the PTR record to point. For example, you can enter [corpxyz.com](http://corpxyz.com).
   - **Comment**: Optionally, enter information about the PTR record.
   - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
3. Save the configuration or click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
4. Click **Restart** if it appears at the top of the screen.

To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule Change* panel, click **Later**, and then specify a date, time, and time zone.

> **warning**
>
> ### Note
> 
> When you add a PTR record to a forward-mapping zone, a message may appear on the top of the wizard if a Grid member is configured to ignore DNS queries for PTR records in forward-mapping zones. Contact Infoblox Technical Support for more information about this message.
