---
title: "Adding AAAA Records"
source: "/space/nios90/1423049157"
pageId: "1423049157"
---
To create an AAAA record, perform the following steps:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -&gt; **Record** -&gt; **Add** **AAAA** **Record**.
2. In the *Add* *AAAA* *Record* wizard, complete the following:
   
   - **Name:** If Grid Manager displays a zone name, enter the host name that you want to map to an IP address. The displayed zone name can either be the last selected zone or the zone from which you are adding the AAAA record. If no zone name is displayed or if you want to specify a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box, and then enter the host name. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the host. For example, if the zone name displayed is [corpxyz.com](http://corpxyz.com) and you enter admin, then the FQDN becomes [admin.corpxyz.com](http://admin.corpxyz.com).
   - **DNS** **View**: Displays the DNS view to which the selected DNS zone belongs.
   - **Shared** **Record** **Group**: This field appears only when you are creating a shared record. Click **Select** **Shared** **Record** **Group**. If you have only one shared record group, the appliance displays the name of the shared record group here. If you have multiple shared record groups, select the shared record group in the *Shared* *Record* *Group* *Selector* dialog box. You can use filters or the **Go** **to** function to narrow down the list.
   - **Hostname** **Policy**: Displays the host name policy of the zone.
   - **IP** **Address:** Enter the IPv6 address to which you want the domain name to map. When you enter an IPv6 address, you can use double colons to compress a contiguous sequence of zeros. You can also omit any leading zeros in a four-hexadecimal group. For example, the complete IPv6 address 2006:0000:0000:0123:4567:89ab:0000:cdef can be shortened to 2006::123:4567:89ab:0:cdef. Note that if there are multiple noncontiguous groups of zeros, the double colon can only be used for one group to avoid ambiguity. The NIOS appliance displays an IPv6 address in its shortened form, regardless of its form when it was entered.
   - **Comment:** Optionally, enter additional information about this record.
   - **Create** **associated** **PTR** **record:** Select this option to automatically generate a PTR record that maps the specified IP address to the host name. To create the PTR record, the reverse-mapping zone must be in the database.
   - **Disable:** Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
4. Save the configuration and click **Restart** if it appears at the top of the screen.
