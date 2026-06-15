---
title: "Configuring DNS RPZ Rule Hits"
source: "/space/nios90/1457094840"
pageId: "1457094840"
---
You can specify a limit to display the number of top clients, who receive re-written responses through the RPZ, in **DNS** **Top** **RPZ** **Hits**. You can also specify the total number of RPZ entries for each client.

1. From the **Administration** tab, select the **Reporting** tab -> expand the Toolbar and click **Grid** **Reporting** **Properties**.   
   Or  
   From the **Infoblox Grid** tab, select the **Grid** **Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab and click **Edit** -> **Grid** **Reporting** **Properties** from the Toolbar.
2. In the *Grid* *Reporting* *Properties* editor, select the **Basic** tab -> **DNS**.
3. Under **DNS RPZ Rule Hit Configuration**, complete the following:
   
   1. Enter a value for **Top** **N** **Limit** to specify the maximum number of top clients that can be listed in the report.
   2. Specify the **Total** **RPZ** **Entries** **per** **Client**. This indicates the number of entries for each client in RPZ.

> **warning**
>
> ### Note
> 
> You have to select the **Security** checkbox before you define values here. To select the checkbox, **Reporting** tab -> **Grid** **Reporting** **Properties** -> **General** tab -> **Basic** tab -> select the checkbox **Security** under **Report** **Category**.
