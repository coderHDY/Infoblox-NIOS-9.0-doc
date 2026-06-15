---
title: "Scheduling Threat Indicator Caching"
source: "/space/nios90/1457127507"
pageId: "1457127507"
---
You can schedule the download of the whole threat database daily, weekly or monthly. However, if you have already downloaded the whole threat indicator database and the scheduled date and time is near next, in that case the schedule is skipped. Based on the schedule the Incremental ThreatDB is downloaded from the Infoblox Portal as per the set interval

Complete the following to schedule the threat indicator caching:

1. From the** Infoblox** **Grid** tab, select the **Grid Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab and click **Edit** -&gt; **Grid Reporting Properties** from the Toolbar.
2. In the **Grid Reporting Properties** editor, select the **Threat Indicator Caching**-&gt; **Basic** tab
3. Select the **Enable Threat Indicator Caching** option.
4. In the *Complete ThreatDB Download Interval* section, select the **Update Policy** as **Manual**.
5. Click the Scheduling icon.
6. In the *Threat Indicator Caching Scheduler* dialog box, select the daily, weekly, or monthly option as follows:
   
   Note that the time zone for scheduling will be the same as the zone that is set for the Grid.
   
   1. To schedule a daily download:
      
      1. Select **Daily**.
      2. In the *Schedule daily* section, in the **Time** field, set the time when the download must start.
         
         Ensure that you have sufficient space available as daily data indexing limits may get exhausted.
   2. To schedule a weekly download:
      
      1. Select **Weekly**.
      2. In the *Schedule every week on* section select the day of the week when the download must happen every week.
      3. In the **Time** field, set the time when the download must start.
   3. To schedule monthly download:
      
      1. Select **Monthly**.
      2. In the *Schedule the day of the month* section, enter the day of the month when the download must happen. You can set the date from 1st to 28th of a month.
      3. In the **Time** field, set the time when the download must start.
   4. Click **OK**.
7. Click **Save & Close**.
