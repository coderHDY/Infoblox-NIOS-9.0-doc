---
title: "Scheduling Automatic Scavenging"
source: "/space/nios90/1393461255"
pageId: "1393461255"
---
You can schedule a scavenging operation only at the Grid level. For a scavenging operation at the view or zone level, you can use the schedule inherited from the Grid.

> **warning**
>
> ### Note
> 
> Infoblox recommends manually testing the configured scavenging settings before enabling scheduled scavenging.

1. In the DNS record scavenging properties described in the previous section, select the **Enable** **scheduled** **record** **scavenging** checkbox.
2. To enable automatic scavenging after records are marked as reclaimable, select **After** **marking** **a** **record** **as** **reclaimable,** **automatically** **reclaim** **the** **record**.
3. Click the Scheduling icon and complete the following in the *Scavenging Scheduler* dialog:
   
   - Select how often you want to execute the scavenging. You can select **Once**, **Hourly**, **Daily**, **Weekly**, or **Monthly**.
   - If you select **Once**, complete the following:
     
     - Enter the day in the date picker and select a month from the drop-down list. When you select **Once**, DNS record scavenging takes place once a year, on the date that you selected.
     - Enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.
     - Choose the time zone.
   - If you select **Hourly**, complete the following:
     
     - **Schedule** **every** **hour(s)** **at**: Enter the number of hours between each scavenging instance. You can enter a value from 1 to 24.
     - **Minutes** **past** **the** **hour**: Enter the number of minutes past the hour. For example, enter 5 if you want to schedule the scavenging operation five minutes after the hour.
     - Choose the **Time** **Zone**.
   - If you select **Daily**, complete the following:
     
     - Click either **Every** **day** or **Every** **weekday**.
     - Enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.
     - Choose the **Time** **Zone**.
   - If you select **Weekly**, complete the following:
     
     - **Schedule ** **every ** **week** ** on**: Select any day of the week.
     - Enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.
     - Choose the **Time** ** Zone**.
   - If you select **Monthly**, complete the following:
     
     - **Schedule** ** the ** **day** ** of ** **the ** **month**: Enter the day of the month and the monthly interval. For example, to schedule the rule update on the first day after every 2 months, you can enter Day 1 every 2 month(s).
     - Enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.
     - Choose the **Time** ** Zone**.
4. Click **OK**.
