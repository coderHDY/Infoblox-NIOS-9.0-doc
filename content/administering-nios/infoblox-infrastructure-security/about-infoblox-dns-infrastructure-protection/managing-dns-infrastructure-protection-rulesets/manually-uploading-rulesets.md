---
title: "Manually Uploading Rulesets"
source: "/space/nios90/280408834"
pageId: "280408834"
---
You can download a DNS Infrastructure Protection ruleset any time when you select to manually perform ruleset updates. You can choose to download rule updates but not immediately deploy them. NIOS archives and tracks up to nine ruleset versions, allowing for switching and merging between these versions when necessary. After uploading a ruleset, you can apply it by publishing it to the Grid and individual members. For more information, see *[Publishing Rule Updates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408857)*.  
Ruleset updates do not require restart of the DNS or DNS Infrastructure Protection service in the Grid, and they do not affect ongoing services. However, the appliance deploys updated rulesets only when you publish the changes. Note that all DNS Infrastructure Protection rule update events are logged in the syslog on the Grid Master only.

> **warning**
>
> **Note**
> 
> By default, DNS Infrastructure Protection ruleset updates are automatic. Infoblox recommends that you retain this setting. For information about how to configure this setting, see *[Configuring Grid Security Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270078)*.

To manually upload a ruleset file:

1. Access the Infoblox KB article # 2646 by logging in to the Infoblox Support site at *[https://support.infoblox.com](https://support.infoblox.com)*, and then download the ruleset file in the KB article.
2. From the **Data** **Management** tab, select the **Security** tab -> **DNS Infrastructure** **Protection** **Rules** tab, and then click the Add icon.
3. In the *Rule* *File* *Upload* dialog box, do the following:
   
   - **File**: Click **Select** to navigate to the ruleset file location, and then click **Upload**. Grid Manager displays the file name in this field.
   - Click **Test** to check the changes that will occur during the rule update, without actually applying the update. You can view the update details in the Syslog Viewer. The appliance preserves the uploaded file if you do not click **Update** to update the rules. When you manually upload rulesets the next time, this file will be displayed in the dialog. You can then choose to apply the update from this file or upload a new file before performing the update.
   - Click **Update** to update the rules.
   - Click **View** **Update** **Results** to view the updated rules in the Syslog Viewer. All DNS Infrastructure Protection rule updates are logged in the syslog on the Grid Master.
