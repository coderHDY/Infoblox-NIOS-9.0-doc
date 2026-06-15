---
title: "Scheduling vDiscovery Jobs"
source: "/space/nios90/1468335102"
pageId: "1468335102"
---
You can enable the appliance to start a vDiscovery immediately after you configure it, schedule it for a later date and time, or configure a recurring discovery based on a recurrence pattern. Note that all scheduled vDiscovery jobs are executed in queue based on the order of the schedule in the **vDiscovery** **Job** **Manager**. Therefore, a scheduled vDiscovery might be delayed if there are other jobs being executed before its scheduled start time.

1. For a new vDiscovery job: From the **Data** **Management** tab, select the **IPAM** tab, then select **vDiscovery** -&gt; **New** from the Toolbar; or from the **Cloud** tab, select **vDiscovery** -&gt; **New** from the Toolbar.  
   or  
   To modify an existing job: From the **Data** **Management** tab, select the **IPAM** tab and click **vDiscovery** -&gt; **Discovery** **Manager** from the Toolbar, or from the **Cloud** tab, select **vDiscovery** -&gt; **Discovery** **Manager** from the Toolbar. In the **vDiscovery** **Job** **Manager** editor, click the Action icon
   
   
   
   next to a selected job and select **Edit** from the menu.
2. In *Step 5 of 5 *of the v*Discovery* *Job* wizard, or in the **Schedule** tab of the *vDiscovery* *Job* *Properties* editor, complete the following:
   
   - **Enable**: To ensure that the scheduled vDiscovery job takes place, select this checkbox. When you upgrade from a previous version of NIOS, you must select this checkbox after the upgrade to ensure that the previously configured discovery tasks are being executed at the scheduled time.
   - If you select **Once**, complete the following:
     
     - Choose a **Start** **Date** using the date picker.
     - **Time** **Zone**: Select the time zone for the scheduled time from the drop-down list.
   - If you select **Hourly**, complete the following:
     
     - **Schedule** **every** **hour(s)** **at**: Enter the number of hours between each update instance. You can enter a value from 1 to 24.
     - **Minutes** **past** **the** **hour**: Enter the number of minutes past the hour. For example, enter 5 if you want to schedule the rule update five minutes after the hour.
     - **Time** **Zone**: Select the time zone for the scheduled time from the drop-down list.
   - If you select **Daily**, you can select either **Every** **day** or **Every** **Weekday** and then complete the following:
     
     - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
     - **Time Zone**: Select the time zone for the scheduled time from the drop-down list.
   - If you select **Weekly**, complete the following:
     
     - **Schedule every week on**: Select any day of the week.
       
       - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
       - **Time Zone**: Select the time zone for the scheduled time from the drop-down list.
     - If you select **Monthly**, complete the following:
       
       - **Schedule the day of the month**: Enter the day of the month and the monthly interval. For example, to schedule the rule update on the first day after every 2 months, you can enter Day 1 every 2 month(s).
       - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
       - **Time Zone**: Select the time zone for the scheduled time from the drop-down list.
3. Save the vDiscovery job. The appliance lists all vDiscovery jobs in the **vDiscovery** **Job** **Manager**, from which you can manage jobs that have not been executed, including modifying selected jobs or deleting some.
