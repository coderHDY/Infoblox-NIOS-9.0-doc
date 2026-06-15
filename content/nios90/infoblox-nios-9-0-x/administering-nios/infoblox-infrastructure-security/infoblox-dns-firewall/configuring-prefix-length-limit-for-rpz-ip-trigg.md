---
title: "Configuring Prefix Length Limit for RPZ-IP Triggers"
source: "/space/nios90/280269698"
pageId: "280269698"
---
To avoid the possibility of DNS outage resulting from errors in the RPZ rules received from external sources by the RPZ feed or due to errors in the RPZ rules added to local RPZ, Infoblox provides an option to set the prefix length limit for RPZ-IP triggers. This enables the appliance to ignore RPZ-IP rules with prefix lengths that are less than the configured minimum prefix length, and to enforce only those RPZ-IP rules whose prefix lengths are equal to or greater than the configured minimum prefix length, thus accepting legitimate queries instead of dropping all queries. For example, if you configure 24 as the minimum IPv4 prefix length, the Grid enforces only those RPZ-IP rules with prefix length equal to or greater than 24 and the RPZ-IP rules with prefix lengths less than 24 are not enforced on queries that originate from external sources.

You can configure the prefix length limit for IPv4 and IPv6 prefixes at the Grid level and override it for a member, DNS view, or RPZ zone. The appliance logs a warning message in the syslog when RPZ-IP rules with prefix length less than the configured minimum prefix length are added to the local RPZ and, when an RPZ feed receives RPZ-IP rules with prefix length less than the configured prefix length from external sources.

To configure the prefix length limit for RPZ-IP triggers:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, and then select **Grid** **DNS** **Properties** from the Toolbar.   
   **Member**: From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.** **  
   **DNS** **View**: From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; *dns_view* checkbox -&gt; Edit icon.  
   **RPZ** **Zone**: From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; *Response* *policy* *zone* checkbox -&gt; Edit icon.
2. In the editor, click **Toggle** **Advanced** **Mode,** and then select the **Security** tab.
3. Complete the following in the Response Policy Zones section of the **Security** tab:  
   To override the Grid settings, click **Override**. To retain the same settings as the Grid, click **Inherit**.
   
   - **Ignore**** RPZ-IP ****triggers**** with**** too**** small**** prefix**** lengths**: Select this checkbox to set the prefix length limit for RPZ-IP triggers and enable the appliance to ignore the RPZ-IP rules with prefix lengths that are less than the specified prefix length limit. This checkbox is deselected by default.
     
     - **Minimum**** IPv4 ****Prefix**** Length**: Enter the minimum prefix length for IPv4 prefixes. You can specify a value between 1 to 31. The default value is 29.
     - **Minimum**** IPv6 ****Prefix**** Length**: Enter the minimum prefix length for IPv6 prefixes. You can specify a value between 1 to 127. The default value is 112.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
