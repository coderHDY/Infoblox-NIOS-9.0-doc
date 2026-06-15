---
title: "Defining Blackout Periods for the Grid"
source: "/space/nios90/1471512600"
pageId: "1471512600"
---
This procedure also covers defining port configuration blackout periods for the Grid. To define blackouts for the Grid:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and click **Edit** **–>** **Grid** **Discovery** **Properties**.   
   If you do not select an appliance from the list, the **Grid** **Discovery** **Properties** option remains enabled.
2. Expand the Toolbar and click **Edit** **–>** **Grid** **Discovery** **Properties**.
3. Click the **Blackout** tab.
4. Select the **Enable** **Discovery** **Blackout **checkbox and click the Scheduling icon to open a separate scheduling window. The Blackout Scheduler dialog opens.
   
   1. Select how often you want to execute the blackout period. You can select **Once**, **Daily**, **Weekly**, or **Monthly**.
   2. If you select **Once**, enter the day in the date picker and select a month from the drop-down list.
      
      - Enter a time in the hh:mm:ssAM/PM format. You can also select a time from the drop-down list.
      - Choose the **Time** **Zone**.
      - Specify the **Duration**: 1 or more Minutes, Hours or Days.
   3. If you select **Daily**, click either **Every ** **Day** or **Every ** **Week day**.
      
      - Enter a time in the hh:mm:ssAM/PM format. You can also select a time from the drop-down list.
      - Choose the **Time** **Zone**.
      - Specify the **Duration**: 1 or more Minutes, Hours or Days.
   4. If you select **Weekly**, complete the following:
      
      - Under **Schedule ** **every ** **week ** **on**:, select the checkbox for any day of the week.
      - Enter a time in the hh:mm:ssAM/PM format. You can choose a time from the drop-down list.
      - Choose the **Time** **Zone**.
      - Specify the **Duration**: 1 or more Minutes, Hours or Days.
   5. If you select **Monthly**, complete the following:
   
   - **Schedule** **the** **day** **of** **the** **month**: A discovery blackout can be executed monthly on a specific day, or instances can be executed more than one month apart on a specific day, in the **Day** **every month(s)** field.
   - Enter a time in the hh:mm:ssAM/PM format. You can choose a time from the drop-down list.
   - Choose the **Time** **Zone**.
   - Specify the **Duration**: 1 or more Minutes, Hours or Days.
5. If necessary, select the** Enable Port Configuration Blackout** checkbox and click the Scheduling icon to open the scheduling window. For more information, see [*Defining Port Configuration Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850).
6. Follow Steps 5a–5e to schedule the port configuration blackout for the Infoblox Grid.
   
   –or–  
   Select the **Use Discovery Blackout Schedule** checkbox to apply the discovery blackout schedule to port configurations.
7. When you have finished configuring schedules for blackout periods, click **Save & Close**.

When a scheduled Grid-level blackout period goes into effect, no operations related to discovery take place for the specified time period across the Infoblox Grid. Any discovery tasks already in progress will run to completion but no new ones will start.
