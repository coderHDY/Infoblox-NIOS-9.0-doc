---
title: "Deleting PTR Records associated with A or AAAA Records"
source: "/space/nios90/281247876"
pageId: "281247876"
---
You can configure the appliance to confirm whether to delete a PTR record when its corresponding A or AAAA record is being deleted. This feature is valid only if you have configured the appliance to automatically generate a PTR record when you create an A or AAAA record. For information about adding an A or AAAA record, see [*Adding A Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1423147410) and [*Adding AAAA Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1423049157). When you delete a resource record, the appliance moves it to the Recycle Bin, if enabled. You can later restore it if needed. Note that this option is disabled by default for all new installations.  
To enable this option:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid ** **DNS ** **Properties.**
2. In the *Grid * *DNS * *Properties*, click the **General** tab -> **Advanced** tab, and complete the following:
   
   - **Enable** **PTR** **record** **removal** **for** **A/AAAA** **records**: This checkbox is deselected by default. When you select this checkbox, the appliance displays the *Delete* *Confirmation* dialog box to confirm that you want to delete a PTR record associated with the A or AAAA record that is being deleted. For information about deleting an A or AAAA record, see [*Modifying, Disabling, and Deleting Host and Resource Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1422721290)*.*
3. Save the configuration and click **Restart** if it appears at the top of the screen.
