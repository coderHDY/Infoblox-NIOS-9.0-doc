---
title: "Scheduling Reports"
source: "/space/nios90/1366983731"
pageId: "1366983731"
---
You can schedule a report to run on a scheduled interval and trigger an action each time it runs. When scheduling a report, you can set up an action to send an email to receive report results. In addition, you can export results in CSV (comma separated value) or XML format.  
To schedule a report:

1. From the **Reporting** tab, select the **Reports** tab.
2. Select the report you want to schedule, click **Edit** -&gt; **Edit** **Schedule**.  
   Note that you can schedule a report when you save search results as reports. When you set the paper size to **A5**, the logo image and report name may overlap in the footer of the downloaded reports or reports sent through email.
3. In the *Edit* *Schedule* dialog box, select the **Schedule** **Report** checkbox.
4. Enter the **Schedule** and **Time Range**. For more information about how to use the **Schedule** and **Time Range** options, refer to the Splunk documentation.
5. Click **Add Actions**, and then to set an action for the scheduled reports, select **Send Email** to send an email that contains report results in text format, or as CSV or PDF attachments to a specified set of recipients.
   
   - Enter the email address in the **To** text box. To send the email message to multiple recipients, type a comma between email addresses.  
     *Edit Schedule*
   - In the **Include** section, select one of the following: **Inline Table**, **Attach CSV**, **Attach PDF**. Selecting **Attach PDF** or **Attach CSV** attaches the results of the report in the form of a CSV file or a PDF. You can also select the **Allow Empty Attachment** for attachment-based include options. Ensure that you specify this information.
6. Click **Save**.

> **warning**
>
> ### Note
> 
> Infoblox recommends that you do not select Link to Report, Link to Results, Search String in the Include section. These links might not work in your environment. Do not select the Run a Script option because there is no script to run.
