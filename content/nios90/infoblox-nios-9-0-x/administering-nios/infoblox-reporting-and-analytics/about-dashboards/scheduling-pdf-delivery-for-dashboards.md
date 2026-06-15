---
title: "Scheduling PDF Delivery for Dashboards"
source: "/space/nios90/1356825225"
pageId: "1356825225"
---
To schedule PDF delivery for dashboards, you must first create a new dashboard. Ensure that email notification settings are configured prior to scheduling PDF delivery. For more information about Configuring Email Notification Settings, see [*About Alerts*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-alerts). To schedule PDF delivery, you can use the dashboard **Edit** drop-down list. You can access the **Edit** drop-down list directly from a dashboard or from the **Dashboards** page.

> **warning**
>
> ### Note
> 
> Scheduled PDF delivery is not available for dashboards that include forms.

Do the following if the **Schedule** **PDF** **Delivery** option is disabled:

1. Open the dashboard for which you want to schedule PDF delivery.
2. Click **Open in** **Search** icon available at the bottom of the dashboard panel.
3. From the **Save** **As** menu, click **Dashboard**.

To set up PDF delivery for the dashboard with a single panel:

1. From the **Reporting** tab, select the **Dashboards** tab.
2. Do one of the following:
   
   - Select the dashboard you want to schedule, click **Edit** -&gt; **Schedule** **PDF Delivery**. If the **Schedule** **PDF** **Delivery** option is disabled, follow the steps as described above.
   - Open the dashboard in the **Dashboards** page and click **Schedule** **PDF** **Delivery** from the **Edit** drop-down list.
3. In the *Edit* *PDF* *Schedule* dialog box, do the following:
   
   - Select the **Schedule PDF Delivery** checkbox to enable PDF delivery.
   - Select a schedule. For more information, refer to the Splunk documentation.
   - In the **Email To** text box, specify email address.
   - Select paper size and paper layout. You can change the paper size and paper layout, if data is not displayed properly in the PDF delivery.
   - To receive dashboard PDFs immediately, click **Send** **Test Email**.

1. Click **Save**.

> **warning**
>
> ### Note
> 
> To set up PDF delivery for the dashboard with multiple panels, repeat the above steps from step 1 to step 4 and add other panels to the dashboard created for the first panel.

*Edit* *PDF* *Schedule* *dialog* *box*

*[image: media]*

Click **Send** **Test** **Mail** to receive Dashboard PDFs Immediately.
