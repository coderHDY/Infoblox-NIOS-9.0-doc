---
title: "Configuring Thresholds for DHCP Ranges"
source: "/space/nios90/280663713"
pageId: "280663713"
---
Grid Manager can provide a view of the current overall DHCP range usage for the DHCP ranges defined on each Grid member. The view is in the form of a percent: address leases in use/total addresses for each network. Such information can indicate if there is a sufficient number of available addresses at each of these levels. It can also provide information about the distribution of address resources, indicating if there are too many unused addresses in one location while all the addresses in another are in use.

In addition to viewing the percent of addresses in use, you can also apply high and low thresholds for each DHCP range. These watermarks represent thresholds above or below which DHCP range usage is unexpected and might warrant your attention. For example, usage falling below a low threshold might indicate network issues preventing the renewal of leases. When usage for a DHCP range crosses a threshold, the appliance makes a syslog entry and — if configured to do so — sends the administrator alerts as SNMP traps and email notifications. The figure Overall DHCP Address Usage for a DHCP Range below illustrates the relationship of allocated and available addresses to high and low watermarks in a DHCP range.   
  
*Overall* *DHCP* *Address* *Usage* *for* *a* *DHCP* *Range*

*[drawio]*

You can define watermarks at the Grid, member, network, and DHCP range levels, but the appliance applies them solely to DHCP ranges. Because the appliance applies settings hierarchically in a parent-child structure, by defining watermarks once at a higher level, DHCP ranges can then inherit these settings without your needing to redefine them for each range. For example, if you set high and low watermarks for a Grid, then each Grid member, each network, and each DHCP range inherits these settings.

However, if you override these settings at the member level, then the network and DHCP ranges for that member inherit its settings. If you override the Grid member settings at the network level, then that network and any DHCP ranges within that network inherit the network-level settings. Finally, you can set high and low watermarks for an individual DHCP range, which override anything set at a higher level.

The below figure shows different high and low watermark settings at different levels. Although you can set thresholds at four levels (Grid, Grid member, network, and DHCP range), the NIOS appliance applies them to DHCP ranges.   
  
*High* *and* *Low* *Watermarks*

*[drawio]*

Address usage in a DHCP range can trigger an event and an email notification when it crosses a watermark. You must enable DHCP threshold and email warnings to receive events and notifications. The following are actions that do and do not trigger an address usage event and notification:

Address usage triggers an event and the appliance sends a notification when the percentage of the allocated addresses in the DHCP range:

- Exceeds the high watermark
- Drops below or equals to the high watermark after exceeding it
- Drops below the low watermark
- Exceeds the low watermark after dropping below it

Address usage does not trigger an event when the percentage of the allocated addresses in the DHCP range:

- Never exceeds the low watermark
- Initially exceeds the low watermark
- Reaches a watermark but does not cross it

> **warning**
>
> **Note**
> 
> You can effectively disable address usage events for a DHCP range by setting its high watermark at 100% and the low watermark at 0% (default setting for the low watermark). Because address usage cannot cross these watermarks, no events can occur.

You can configure the threshold settings at the Grid level and override them at the member, network, and DHCP range levels. To override an inherited DHCP property, click **Override** next to the property to enable the configuration. For information, see *[Overriding DHCP Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404426)*.

To configure thresholds:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -> *network_container* checkbox, and then click the Edit icon.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Edit icon.
2. In the editor, select the **IPv4 ****DHCP**** Thresholds** tab and complete the following:
   
   - **DHCP**** Thresholds:** Specify the following:
     
     - **Enable ****DHCP**** Thresholds:** Select **Enable**** DHCP**** Thresholds** to enable the DHCP threshold feature.
       
       - **High:** Enter a number between 0 and 100. Enter Trigger and Reset values. If the percentage of allocated addresses in a DHCP range exceeds the Trigger value, the appliance makes a syslog entry and—if configured to do so—sends an SNMP trap and an email notification to a designated destination. When the percentage first reaches the Reset value after it hit the Trigger value, the appliance sends an SNMP trap and an email notification to a designated destination. The default Trigger value is 95, and the default Reset value is 85.
       - **Low:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range drops below the Trigger value, the appliance makes a syslog entry and—if configured to do so— sends an SNMP trap and an email notification to a designated destination. When the percentage first reaches the Reset value after it hit the Trigger value, the appliance sends an SNMP trap. The default Trigger value is 0 and the default Reset value is 10.
     - **Enable ****SNMP ****Warnings:** Select this for the appliance to send an SNMP trap to the trap receiver that you define for the Grid when the address usage in a DHCP range crosses a high or low mark threshold.
     - **Enable**** Email**** Warnings:** Select this for the appliance to send an email notification to an administrator if the address usage in a DHCP range crosses a high or low mark threshold.
   - **Email**** Addresses:** Click **Override** to override the Grid administrator email address configured in the **Data**** Management** tab -> **Grid** tab. This address is not hierarchically inherited from the Grid DHCP configuration. Click the Add icon, and then enter an email address to which you want the appliance to send email notifications when the DHCP range for the network crosses a threshold. You can create a list of email addresses.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
