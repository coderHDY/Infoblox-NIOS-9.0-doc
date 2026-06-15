---
title: "Rolling Zone-Signing Keys"
source: "/space/nios90/1454964797"
pageId: "1454964797"
---
Only an administrator can initiate ZSK rollovers either before or after a rollover period, or when you want to replace the ZSK for security reasons. You can initiate a ZSK rollover several times simultaneously, but note that the number of keys will increase each time you perform a rollover.  
To roll over zone-signing keys:

1. From the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -&gt; **Roll** **Over** **Zone-Signing** **Key**.
3. In the *Roll* *Over* *Zone-Signing* *Key* dialog box, the displayed zone name can either be the last selected zone or the zone from which you are rolling over zone-signing keys. If no zone name is displayed or if you want to select a different zone, click the Add icon. The appliance displays unsigned zones only. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. To add multiple zones, click the Add icon and select a zone.  
   You can click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, either select **Now** or select **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)*.*
4. Click **Roll** **Over**.

To remove a zone from the list, select the checkbox adjacent to the respective zone and click the Delete icon. The appliance displays warning messages when the changes take effect on the first zone or when the rollover occurs. You cannot change the zone-signing key rollover method while the previous change is still in progress. The previous change will be completed only when the zone active key, which is active when the rollover method is changing, expires and is deleted.
