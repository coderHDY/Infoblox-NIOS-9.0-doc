---
title: "Defining Blackout Periods for Networks"
source: "/space/nios90/1471479824"
pageId: "1471479824"
---
Network Insight offers considerable flexibility in how you apply blackout periods. You may choose to have discovery allowed for most managed networks but elect to have a discovery blackout for selected networks that are traffic- or latency-sensitive.  
You can define extended time periods and regularly scheduled times when discovery and/or port configuration tasks is not in progress on a specific IPAM network or within a network container. By default, the network inherits its discovery blackout settings from the Grid level. Editing a network under IPAM or DHCP, blackout settings apply only to the specified network. You also specify the scheduled time when the blackout period begins and the duration of the blackout period.  
As noted, a network must be in managed status before editing discovery or blackout features. To define a discovery blackout for a network under IPAM or DHCP:

1. Select a managed network from one of the following locations:
   
   1. **Data** **Management** **–>** **IPAM** **–>** list view  
      –or–
   2. **Data** **Management** **–>** **DHCP** **–>** **Networks**
2. Click the Action icon  next to the network you want (this automatically selects it) and select **Edit** from the menu. The Edit Network dialog appears.
3. Click the **Discovery** **Blackout** tab.
4. Click **Override** to change blackout settings for the chosen network.
5. Select the **Enable** **Discovery** **Blackout** checkbox and click the Scheduling icon to open a separate scheduling window. (Because the settings are inherited, **Enable** **Discovery** **Blackout** may or may not already be enabled.) The Blackout Scheduler dialog opens.
   
   1. Select how often you want to execute the blackout period. You can select **Once**, **Daily**, **Weekly**, or **Monthly**.
   2. If you select **Once**, enter the day in the date picker and select a month from the drop-down list.
      
      1. Enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.
      2. Choose the **TimeZone**.
      3. Specify the **Duration**: 1 or more Minutes, Hours or Days.
   3. If you select **Daily**, click either **Every** **Day** or **Every** **Weekday**.
      
      1. Enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list
      2. Choose the **TimeZone**.
      3. Specify the **Duration**: 1 or more Minutes, Hours or Days.
   4. If you select **Weekly**, complete the following:
      
      1. Under **Schedule** **every** **week** **on**: Select the checkbox for any day of the week.
      
      1. Enter a time in the hh:mm:ss AM/PM format. You can choose a time from the drop-down list.
      
      1. Choose the **TimeZone**.
      
      1. Specify the **Duration**: 1 or more Minutes, Hours or Days.
   5. If! you select **Monthly**, complete the following:
      
      - **Schedule** **the** **day** **of** **the** **month**: A discovery blackout can be executed monthly on a specific day, or instances can be executed more than one month apart on a specific day, in the **Day** **every month(s)** field.
      - Enter a time in the hh:mm:ss AM/PM format. You can choose a time from the drop-down list.
      - Choose the **Time** **Zone**.
      - Specify the **Duration**: 1 or more Minutes, Hours or Days.
6. If necessary, select the **Enable** **Port** **Configuration** **Blackout** checkbox and click the Scheduling icon to open the scheduling window. For information, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[*Defining*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[*Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[*Configuration*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[*Blackout*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850)[*Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850).
7. Follow Steps 5a–5e to schedule the port configuration blackout for the chosen network.   
   –or–  
   Select the **Use** **Discovery** **Blackout** **Schedule** checkbox to apply the discovery blackout schedule defined for the network.
8. When you have finished configuring schedules for blackout periods for the network, click **Save** **&** **Close**.

When a scheduled blackout goes into effect, no operations related to discovery and/or port configuration take place for the specified time period on the selected network. Any related operations in progress will run to completion but no new ones will start.
