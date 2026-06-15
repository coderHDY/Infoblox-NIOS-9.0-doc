---
title: "Rebuilding EA Database"
source: "/space/nios90/1412006458"
pageId: "1412006458"
---
Unlike the GeoIP database, the EA database is not imported externally but configured within the system. After making changes to extensible attributes, Grid Manager offers you to rebuild the DNS Traffic Control Topology Database. You can use the banner that appears at the top of the screen and then click **Rebuild** to rebuild the database immediately. Or, you can click **Ignore** to rebuild the database later in the **Traffic** **Control** tab. Clicking **Ignore** applies to all changes that require a rebuild of the EA database. The EA database rebuild is ignored for the duration of the user session.

To rebuild the EA database, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab, and then select the **Traffic** **Control** tab.
2. In the Toolbar, click the arrow next to the **Topology** **Database** and select **Rebuild** **EA** **Database** -&gt; **Rebuild** or **Schedule** **Rebuild**.
3. In the *Rebuild* *EA* *Database* dialog box, select **Yes** to rebuild the database or **No** to discard the rebuild. To schedule the rebuild task, in the *Rebuild* *EA* *Database* *Schedule* dialog box, specify a date, time, and time zone.

To view the current version of the EA database, click **Topology** **Database** -&gt; **Current** **Version** in the Toolbar. Grid Manager displays the database build date and its last rebuild status in the Extensible Attributes section.

> **warning**
>
> ### Note
> 
> The latest database version may not be deployed on all DTC members. To view the current deployed versions, select **Data** **Management** -&gt; **DNS** -&gt; **Members**.
