---
title: "Adding NAPTR Records"
source: "/space/nios90/1422590371"
pageId: "1422590371"
---
To add a NAPTR record, perform the following steps:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** -> **Add** **NAPTR** **Record**.
2. In the *Add* * NAPTR * *Record* wizard, complete the following fields:
   
   - **Domain**: If Grid Manager displays a zone name, enter the domain name to which this resource record refers. The displayed zone name can either be the last selected zone or the zone from which you are adding the NAPTR record. If no zone name is displayed or if you want to specify a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box, and then enter a domain name for the record. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the record. For example, if the zone name displayed is [corpxyz.com](http://corpxyz.com) and you enter admin, then the FQDN becomes [admin.corpxyz.com](http://admin.corpxyz.com). This field is not displayed when you configure a NAPTR record for a DTC server.
   - **DNS View**: Displays the DNS view of the selected zone.
   - **Service**: Specifies the service and protocol used to reach the domain name that results from applying the regular expression or replacement. You can enter a service or select a service from the list.
   - **Flags**: The flag indicates whether the resulting domain name is the endpoint URI or if it points to another record. Select one of the following:   
     **U**: Indicates that the output maps to a URI.  
     **S**: Indicates that the resulting domain name has at least one SRV record.  
     **A**: Indicates that the resulting domain name has at least one A or AAAA record.  
     **P**: Indicates that this record contains information specific to another application.  
     Leave this blank to indicate that the DNS client must use the resulting domain name to look up other NAPTR records. You can use the NAPTR records as a series of rules that are used to construct a URI or domain name.
   - **Order**: Select an Integer from 10 to 100, or enter a value from 0 to 65535. This value indicates the order in which the NAPTR records must be processed. The record with the lowest value is processed first.
   - **Preference**: Select an Integer from 10 to 100, or enter a value from 0 to 65535. Similar to the Preference field in MX records, this value indicates which NAPTR record should be processed first when the records have the same Order value. The record with the lowest value is processed first.
   - **REGEX:** The regular expression that is used to rewrite the original string from the client into a domain name. RFC 2915 specifies the syntax of the regular expression. Note that the appliance validates the regular expression syntax between the first and second delimiter against the Python re module, which is not 100% compatible with POSIX Extended Regular Expression as specified in the RFC. For information about the Python re module, refer to [http://docs.python.org/release/2.5.1/lib/module-re.html](http://docs.python.org/release/2.5.1/lib/module-re.html) .
   - **Replacement**: This specifies the domain name for the next lookup. The default is a dot (.), which indicates that the regular expression in the **REGEX** field provides the replacement value. Alternatively, you can enter the replacement value in FQDN format.
   - **Comment:** Optionally, enter a descriptive comment for this record.
   - **Disable:** Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215). This is not applicable when you configure a NAPTR record for a DTC server.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
