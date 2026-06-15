---
title: "How To Schedule IP Discovery"
source: "/space/nios90/1593049129"
pageId: "1593049129"
---
After you configure a discovery (as described in  Configuring and Starting an IP discovery above), you can schedule to run a one-time IP discovery at a later date and time. You can also schedule a recurring IP discovery by configuring a recurrence pattern. The appliance automatically starts a recurring discovery based on the configured schedule and detects any newly added or removed networks. Note that you can only schedule the start of a discovery, you cannot schedule it to pause, stop, or resume. After a scheduled discovery starts, you can then pause, stop, or resume it.  
You can schedule only one IP discovery at a time. Once you schedule a discovery, you cannot change the configuration until the task is cancelled or executed. You can however disable a recurring discovery. When you disable a recurring discovery, it will not recur during the scheduled interval.

To schedule a one-time IP discovery for a specific date and time:

1. From the **Data** **Management** tab, select the **IPAM** tab, and then select **Discovery** -> **Discover** **Now** from the Toolbar.   
   or  
   From the *Discovery* *Status* widget, select **Discover** **Now** from the drop-down list, and then click **Discovery** **Manager.**
2. In the *Discovery* *Manager* wizard, click the Schedule icon at the top of the wizard. In the *Schedule* *Change* panel, click **Later**, and then specify a date, time, and time zone. Click **Schedule** **Start** to schedule the discovery. If applicable, you can select **Click** **here** **to** **view/manage** **the** **scheduled** **items** **to** **reschedule** **a** **discovery** **or** **view** **all** **scheduled** **discoveries**.

To schedule a recurring IP discovery:

1. From the **Data** **Management** tab, select the **IPAM** tab, and then select **Discovery** -> **Schedule** **Discovery** from the **Toolbar**.   
   or  
   From the *Discovery* *Status* widget, select **Schedule** **Discovery** from the drop-down list, and then click **Discovery** **Manager.**
2. In the *Discovery Manager* wizard, complete the following in the scheduler:
   
   - **Disable:** Select this checkbox to disable recurring IP discovery. When you select this checkbox, IP discovery will not recur during the scheduled interval. Clear the checkbox to enable recurring IP discovery.
   
   If you select **Hourly**, complete the following:
   
   1. **Schedule every hour(s) at**: Enter the number of hours between each update instance. You can enter a value from 1 to 24.
   2. **Minutes past the hour**: Enter the number of minutes past the hour. For example, enter 5 if you want to schedule the rule update five minutes after the hour.
   3. **Time Zone**: Select the time zone for the scheduled time from the drop-down list.

If you select **Daily**, you can select either **Everyday** or **Every Weekday** and then complete the following:

- **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
- **Time Zone**: Select the time zone for the scheduled time from the drop-down list.

If you select **Weekly**, complete the following:

- **Schedule every week on**: Select any day of the week.
- **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
- **Time Zone**: Select the time zone for the scheduled time from the drop-down list.

If you select **Monthly**, complete the following:

- **Schedule the day of the month**: Enter the day of the month and the monthly interval. For example, to schedule the rule update on the first day after every 2 months, you can enter Day 1 every 2 month(s).
- **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
- **Time Zone**: Select the time zone for the scheduled time from the drop-down list.

1. Click **Save** to save the configuration.

If the discovery task fails during a scheduled interval, the task stops and will not continue for the corresponding occurrence. The scheduled task resets and the discovery starts at the next scheduled time. For example, when you configure a recurring discovery to occur every five hours, discovery starts at the following hours on each day: 00:00, 05:00, 10:00, 15:00, and 20:00. If the discovery scheduled for 05:00 fails, the discovery starts at the next recurrence, which is at 10:00. For information about failed discovery, see  Guidelines for Starting and Scheduling IP Discovery.  
The following examples explain when a recurring discovery starts based on your configuration:   
**Example** **1**   
When you configure a recurring discovery to occur every five hours, the discovery starts at the following hours on each day: 00:00, 05:00, 10:00, 15:00, and 20:00. The first occurrence on each day starts at 00:00.  
**Example** **2**   
When you configure a recurring discovery to occur every two days during a week, the discovery starts on the following days every week: Monday, Wednesday, Friday, and Sunday. The first occurrence starts on Monday of each week.
