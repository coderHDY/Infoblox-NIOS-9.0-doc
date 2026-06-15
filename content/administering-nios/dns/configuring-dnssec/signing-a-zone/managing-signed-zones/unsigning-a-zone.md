---
title: "Unsigning a Zone"
source: "/space/nios90/1454997567"
pageId: "1454997567"
---
When you unsign a zone, the Grid Master permanently removes all automatically generated DNSSEC records in the zone and parent zone. It does not remove any DS records associated with a child zone. You can unsign a single zone or multiple zones at the same time.  
To unsign a zone:

1. From the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -> **Unsign** **Zones**.
3. In the *Unsign* *Zones* dialog box, the displayed zone name can either be the last selected zone or the zone from which you are unsigning. If no zone name is displayed or if you want to select a different zone, click the Add icon. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. The appliance displays signed zones only. Select a zone. To add multiple zones, click the Add icon and select a zone.  
   You can click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, either select **Now** and click **Save** or select **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)
4. After you have selected the zones, click **Unsign** **Zones.**
5. When the confirmation dialog displays, click **Yes**.

To remove a zone from the list, select the checkbox adjacent to the respective zone and click the Delete icon.
