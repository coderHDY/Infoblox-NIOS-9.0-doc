---
title: "Adding Permanent or Subscription Licenses"
source: "/space/nios90/1495269928"
pageId: "1495269928"
---
To add permanent or subscription licenses:

1. From the **Infoblox** **Grid** tab, select the **Licenses** tab -&gt; **Member** tab or **Pool** tab or **Grid Wide** tab and click the Add icon.
2. Select one of the following:
   
   - **Upload License File**: Use this method to upload static, dynamic, and Grid-wide license files. Click **Select File**, navigate to the license file, and click **Open**.
   - **Paste License(s)**: Paste the license key in this text field. You must paste the entire string in CSV format: serial number, hardware ID, license type, end date (in the mm/dd/yyyy format), and license string. If you are pasting multiple licenses, start each string on a new line. For example, 564daaa3ef07e648a563434a2b412834,564daaa3ef07e648a563434a2b412834,DNS,12/05/2018,EwAAADU+PZEOjFsMAXxw4nlfHyZ6tdw
3. Click **Save License(s)**.  
   The appliance validates the license and adds it to the table. Close the browser window and log in to Grid Manager. If you are activating licenses for an HA pair, you must follow this procedure for both nodes.

> **warning**
>
> **Note**
> 
> - Once the NIOS license is installed, you must wait for NIOS to restart (if prompted) before you install other licenses.
> - To transfer licenses between vNIOS on VMware appliances, refer to the *Infoblox* *Installation* *Guide* *for* *vNIOS* *for* *VMware*.
