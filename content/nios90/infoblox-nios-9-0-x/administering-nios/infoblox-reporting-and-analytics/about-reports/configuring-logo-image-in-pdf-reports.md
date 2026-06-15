---
title: "Configuring Logo Image in PDF Reports"
source: "/space/nios90/1371177318"
pageId: "1371177318"
---
All reports display the Infoblox logo by default. You can customize reports by removing the Infoblox logo, or by replacing it with your own company logo. The reporting server uses the latest image file that you have uploaded. Make sure that you upload a logo file that is in PNG format and has a file size that is smaller than 500 KB. Note that the image file name must be *pdf_logo_image.png*. Do not change the logo image file name. You can configure your PDF reports and schedule to send them through emails. For information about scheduling the delivery of reports, see  Scheduling Reports below.

> **warning**
>
> ### Note
> 
> In the footer of the report, you can view the logo image (if uploaded), panel name, and the timestamp when the report was downloaded. When there is no data in a single panel report, the downloaded PDF displays "No Results Found" along with "Last Updated" information. However, a report with multiple panels, displays only the panel name for the panel that does not have any data.

To upload logo image:

1. From the **Administration** tab, select the **Reporting** tab -&gt; expand the Toolbar and click **Grid Reporting Properties**.   
   or   
   From the **Infoblox** **Grid** tab, select the **Grid Manager** tab and click the **Services** tab. On the **Services** tab, select the **Reporting** tab and click **Edit** -&gt; **Grid Reporting Properties** from the Toolbar.
2. In the Grid Reporting Properties editor, select the **PDF** tab and complete the following:  
   **Logo** **Image**: Click **Upload** to open the *Upload* dialog box. Click **Select** to navigate to where the image file is located and click **Open**. Click **Upload** to upload the file. The appliance displays a preview of how it will appear on reports after you successfully upload the logo file. You can click **Clear** to remove the logo and upload a new one. Make sure that the file format and size meet the requirements; otherwise, the appliance displays an error message. You can click **Clear** to remove the uploaded image file.
3. Click **Save & Close**.
