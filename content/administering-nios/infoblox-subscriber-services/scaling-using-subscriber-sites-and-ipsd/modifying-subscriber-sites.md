---
title: "Modifying Subscriber Sites"
source: "/space/nios90/1471251333"
pageId: "1471251333"
---
To modify a subscriber site, complete the following:

1. From the **Data Management** tab -> **DNS** tab -> **Subscriber Services Deployment** tab -> **Subscriber Sites** tab, click the** Action** icon next to the subscriber site name and select **Edit** from the menu.
2. The *Subscriber Site Properties* editor provides the following tabs from which you can modify data:
   
   1. In the **General** tab, you can modify the information you previously entered through the *Add Subscriber Site* wizard.  
      Note that If the Grid Manager is IPv4-only and Grid members are IPv6 or dual-stack, modifying subscriber sites may not clear the subscriber cache. Import and export of subscriber data may also not work.
   2. In the **NAS Gateways** tab, you can edit the NAS gateways configured for the subscriber site, as described in the *Adding Subscriber Sites* section.  
      Note that If you make any changes to the NAS gateway configuration, the subscriber collector will automatically restart within 30 seconds. However, the subscriber data collected in the subscriber cache is not affected by the NAS gateway configuration changes.
   3. If Subscriber Parental Control is enabled, the **Parental Control** tab is displayed. You can modify the information in the **Parental Control** tab, as described in the section Adding Subscriber Sites above.
      
      1. **Enable DCA subscriber Query count logging**: Select this checkbox to allow the DCA to generate subscriber logs and to record query counts greater than or equal to zero for subscriber query count updates and deletions. These logs are generated for deletions even when the query count is equal to zero. By default, this option is disabled.
      2. **Enable DCA subscriber Allowed & Blocked list support**: Select this checkbox to support the blocked and allowed list of subscribers. This option is disabled by default. Once the domain is cached, the blocked lists are provided by DCA. Domains in the allowed list are transferred to BIND. There are several members on the site, but the memory requirement is 32GB or higher for all the vDCA capable members. You must manually restart NIOS after selecting this checkbox for the support to be successful.  
         Notes:
         
         - The allowed and blocked listing feature allows you to specify all possible top-level domains, (for example, [http://linkedin.com](http://linkedin.com) , [http://linkedin.co.uk](http://linkedin.co.uk) ) for well-known names. If a dotless name such as "facebook" is in the allowed list or blocked list and the qname is facebook.&lt;suffix&gt;, then:
           
           - If the suffix is a top-level domain (example "xxxyyy"), the two are matched regardless of whether "xxxyyy" is registered or not in the worldwide DNS.  
             Example:   
             facebook == [http://facebook.com](http://facebook.com)   
             facebook == facebook.xxxyyy
           - If the suffix is not a top-level domain (example "xxx.yyy"), whether the two are matched or not depends on whether "xxx.yyy" is registered and present in the public_suffix_list.dat on the appliance or not.  
             Example:  
             facebook == [facebook.co.uk](http://facebook.co.uk)  
             facebook != facebook.xxx.yyy
         - If you remove a policy from the Proxy-All allow list,  wait for the time to leave (TTL) setting that is configured in DNS Cache Acceleration to expire, for the subscriber policy to work correctly.
         - If a zvelo category database update failure occurs for three consecutive days:
           
           - Grid Manager displays a yellow background with the "Please correct the download credentials or the proxy configuration to get the latest database updates" message and the member status is displayed as "Domain category db is not latest" in the **Grid Manager **>**Subscriber Collection **> **Services**>** Service Status** column.
           - A new SNMP trap is sent with the message "Domain category db is not latest". Additionally, if email notifications are configured, an email is sent to the configured email address with the "Domain category db is not latest" message.
           - Post this event, if the zvelo download is successful, a new SNMP clear trap is sent, and an email with the “zvelo SNMP Clear Trap” message is also sent. The** Service Status** column is on green background will be displayed in Green with the “Subscriber Collection Service is working” message.
         - If a zvelo category database update failure occurs for more than 60 days:
           
           - Grid Manager displays a red background with the "zvelo database expired. Subscriber secure queries will be fail-open" message and the member status is displayed as "zvelo db has expired" in the **Grid Manager** > **Subscriber Collection **>** Services **>** Service Status** column.
           - A new SNMP trap is sent with the "zvelo db has expired" message. Additionally, if email notifications are configured, an email is sent to the configured email address, with the "zvelo db has expired" message.
           - Post this event, if the zvelo download is successful, a new SNMP clear trap is sent, and an email with the “zvelo SNMP Clear Trap” message is also sent. The** Service Status** column is on green background will be displayed in Green with the “Subscriber Collection Service is working” message.
         - If you have not downloaded the zvelo database earlier:
           
           - If the zvelo database download fails for 3 consecutive days, a critical SNMP trap is sent, and “Domain category db is not latest“ is displayed as the member status instead of “Category information data is unavailable“.
           - If the zvelo database download fails for 60 consecutive days, a critical SNMP trap is sent, and “Domain category db is expired“ is displayed as the member status instead of “Category information data is unavailable“.
         - If the allowed blocklists for CPEs are different from the allowed blocklists for non-registered subscribers, then the allowed blocklists of CPEs are applied to the non-registered subscribers if the domain is in the virtual DNS Cache Acceleration (vDCA) cache. Even though the allowed blocklists are not in virtual DNS Cache Acceleration, they get a response from virtual DNS Cache Acceleration for non-registered subscribers as they inherit the CPE policies.  
           After the 5% of allowed blocklists limit is reached, subscribers with allowed blocklists are added to the non-allowed blocklists pools and all queries are responded to only from BIND.
   4. You can enter or edit information in the **Extensible Attributes** tab, as described in [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   5. You can export subscriber site data into a CSV file by selecting the **Export** option. For more information, see [*Importing and Exporting Data using CSV Import*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=1471251333).
3. Save the configuration.
