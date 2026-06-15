---
title: "About Alerts"
source: "/space/nios90/280660796"
pageId: "280660796"
---
You can configure alerts to trigger actions when certain events occur. When you set up an alert, search results trigger an alert action if they match the alert conditions. You can configure an alert to send an email notification, SNMP trap, and log a message in the syslog. Note that alerts are executed based on update frequencies for each corresponding search. For example, *DHCP* *Lease* *History* alerts are executed every 10 minutes, and Device Trend alerts are executed every 30 minutes at the 17th and 47th minutes of each hour (one minute after the search updates). For information about search indexes and update time intervals, see [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400960](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400960). You can also throttle an alert if you want to change its frequency. For more information, refer to the Splunk documentation.  
You can do the following in the **Alerts** page:

- Create scheduled alerts, as described in Creating[ ](#AboutAlerts-CreatingScheduledAlerts)Scheduled[ ](#AboutAlerts-CreatingScheduledAlerts)Alerts below[.](#AboutAlerts-CreatingScheduledAlerts)
- Edit permissions, as described in Editing Permissions, see [Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857269).
- Edit alert type, trigger condition, and alert actions, as described in Editing[ ](#AboutAlerts-EditingAlerts)Alerts below.
- Clone an alert, as described in* *Cloning Alerts below.

# Creating Scheduled Alerts

You can schedule an alert to notify when a scheduled report returns results that meet a specific condition. The appliance sends an alert when it encounters the trigger condition.

1. From the **Reporting** tab, select the **Alerts** tab -> select an *alert* and click **Open** **in** **Search**.
2. From the **Save** **As** drop-down list, click **Alert**.
3. In the *Save* *As* *Alert* dialog box, complete the following:
   
   - Specify the title and description.
   - **Alert** **Type**: Select Scheduled
   - **Time** **Range**: Specify the time range. For example, you can select **Run** **Every** **Day**.
   - **Schedule** **At**: Specify the time.
   - **Trigger** **Condition**: Specify trigger conditions. For more information, refer to the Splunk documentation.
   - **Trigger** **Actions**: Click this to configure alert actions. You can select the following:
     
     - **Send** **SNMP** **Trap**: Select this to enable SNMP traps. For information about how to trigger SNMP traps for reporting event types, see [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492).
     - **Send** **email**: Select this to send alert notification through email. You can specify email address in the **To** text box.
     - **Send** **to** **Syslog**. Select this to log a message in the syslog. If you configure this option with an alert, the message goes to the syslog on the reporting member or indexer.
     - **File** **Transfer** **Action**: Select this to upload the search results to an FTP or SCP or TFTP server configured on the **Set** **up** page. For information about Reporting (Index) Storage space, see [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267688](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267688).

4. Click **Save**.

# Editing Alerts

You can edit alert type, trigger condition, and alert actions, as follows:

1. From the **Reporting** tab, select the **Alerts** tab -> select an *alert*.
2. From the **Edit** drop-down list, choose **Edit** **Alert** to edit the alert settings. In the *Edit* *Alert* dialog box, make the required changes.
3. Click **Save**.

# Cloning Alerts

1. From the **Reporting** tab, select the **Alerts** tab.
2. Select an alert you want to clone, click **Edit** -> **Clone**.
3. Enter a title and a description. Click **Clone** **Alert**.



> **warning**
>
> ### Note
> 
> Infoblox recommends that you save the cloned alerts only in the Infoblox Reporting & Analytics (infoblox) app.

# Configuring Email Notification Settings

You can enable the appliance to send email messages to specified recipients when the alert is triggered. You can configure email settings for alerts, scheduled reports, and scheduled PDF delivery.  
To configure email properties for alerts and PDF delivery:

1. From the **Reporting** tab -> **Settings** tab -> click **Server** **settings**.
2. Click **Email** **settings**.
3. Specify the mail host. The default is local host.
4. Optionally, you can specify username and password.
5. Specify **Email** **Format**.
6. In the **Specify** **PDF** **Report** Settings, specify the paper size, paper orientation, and also the path to logo image.
7. Click **Save**.

> **warning**
>
> ### Note
> 
> You can configure email addresses when scheduling dashboard PDFs, scheduling reports, and creating alerts.
