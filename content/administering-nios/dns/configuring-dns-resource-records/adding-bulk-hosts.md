---
title: "Adding Bulk Hosts"
source: "/space/nios90/280665058"
pageId: "280665058"
---
To add a bulk host:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Host** -> **Add** **Bulk** **Host**.
2. In the *Add* *Bulk* *Host* wizard, complete the following fields:
   
   - **Prefix**: If Grid Manager displays a zone name, enter a prefix (or series of characters) to insert at the beginning of each host name. The displayed zone name can either be the last selected zone or the zone from which you are adding the bulk host record. If no zone name is displayed or if you want to specify a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box, and enter a prefix for the bulk host record. You can enter any printable character that complies with the zone host name policy or you can also leave this blank.  
     The sum of the bulk host prefix length and suffix length must not exceed 63 characters. When you enter a prefix, the NIOS appliance computes the maximum length of the bulk host suffix to verify that the total prefix and suffix length does not exceed 63 characters. If it does, the appliance displays an error message indicating the number of characters that you must remove to make a valid prefix.
     
     - DNS View: Displays the DNS view of the zone to which the bulk host records belong.
     - Host Name Policy: Displays the host name policy of the selected DNS zone.
     - Name Format: To override the default four-octet suffix format or the format set at the Grid level, and specify a different format, click **Override** and select a host name format from the **Name** **Formats** drop-down menu.
     - The *Name* *Format*s drop-down menu lists the formats **Four** **Octets**, **Three** **Octets**, **Two** **Octets**, and **One** **Octet** along with any other bulk host name formats that you have defined.
     - Starting IP Address: Enter the first IP address in the range of addresses for the group.
     - End IP Address: Enter the last IP address in the range of addresses for the group.
     - Comment: Optionally, enter additional information for this record.
     - **Automatically** ** Add ** **Reverse** ** Mapping:** Click to have the appliance automatically create a PTR record for each IP address within the bulk host range.
     - **Disable:** Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes for the bulk host record. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
4. Save the configuration and click **Restart** if it appears at the top of the screen

To modify or delete a bulk host, see [*Modifying, Disabling, and Deleting Host and Resource Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656).

# Example 1 - Responding to DNS AXFR Queries

This example shows the responses the bulk host foo/1.2.3.10/1.2.3.20 returns to DNS AXFR (Full Zone Transfers) queries.  
If the bulk host uses the template** -$3-$4**, the query returns:

`foo-3-10.test.com foo-3-11.test.com`  
` ......`  
` foo-3-20.test.com`

If the bulk host uses the template **-#2-#3-#4**, the query returns:

`foo-002-003-010.test.com foo-002-003-011.test.com`  
` ......`  
` foo-002-003-020.test.com`

# Example 2 - Importing Zones with Bulk Hosts

When you import zones with bulk hosts, the system selects the most specific match.  
The following example can possibly match three octet, two octet, and one octet formats; however, the system selects the most specific four octet default format.  
The query:  
`foo-1-2-3-4 IN A 1.2.3.4`  
` foo-1-2-3-5 IN A 1.2.3.5`

Results in the match:

`foo/1.2.3.4/1.2.3.5(Four Octets)`  
` Not in any of the following:`  
` foo-1/1.2.3.4/1.2.3.5(Three Octets) foo-1-2/1.2.3.4/1.2.3.5(Two Octets) foo-1-2-3/1.2.3.4/1.2.3.5(One Octet)`
