---
title: "Rolling Key-Signing Keys"
source: "/space/nios90/1454964770"
pageId: "1454964770"
---
You can initiate a rollover before or after a rollover period, or when you need to replace the KSK for security reasons. You can initiate a KSK rollover several times simultaneously, but note that the number of keys will increase each time you perform a rollover. You can schedule the KSK rollover to occur at a later date and time.  
To roll over key-signing keys:

1. From the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -> **Roll** **Over** **Key-Signing** **Key**.
3. In the *Roll* *Over* *Key-Signing* *Key* dialog box, the displayed zone name can either be the last selected zone or the zone from which you are rolling over key-signing keys. If no zone name is displayed or if you want to select a different zone, click the Add icon. The appliance displays signed zones only. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. To add multiple zones, click the Add icon and select a zone.  
   You can click the Schedule icon at the top of the wizard to schedule a KSK rollover for one or more zones at a given date and time. In the *Schedule* *Change* panel, either select **Now** or select **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666) Note that you cannot schedule the KSK rollover on a recurring basis.
4. Click **Roll** **Over**.

You can export the new KSK and send it to the security-aware resolvers that use it as a trust anchor. To remove a zone from the list, select the checkbox adjacent to the respective zone and click the Delete icon.
