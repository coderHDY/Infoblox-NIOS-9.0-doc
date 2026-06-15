---
title: "Copying Zone Records"
source: "/space/nios90/1416301161"
pageId: "1416301161"
---
Different views of the same zone may have a number of records in common. If this is the case, you can copy zone records between views and zones.

> **warning**
>
> ### Note
> 
> You cannot copy shared records and records that the NIOS appliance automatically creates, such as NS records and glue A records.

To copy zone records between DNS zones and views:

1. From the **Data** **Management** tab -> **DNS** tab, click **Copy** **Records** from the Toolbar.
2. In the *Copy* *Records* dialog box, Grid Manager displays the last selected zone or the zone from which you are copying zone records in the **Source** field. Complete the following to copy records:
   
   - **Destination**: Click **Select** **Zone** to select the destination zone. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box from which you can select one. After you select the zone, Grid Manager displays the associated DNS view.
   - **Copy** **All** **records:** Select this option to copy all the zone records.
   - **Copy** **Specific** **Records:** Select this option to copy specific types of records. Select a resource record type from the Available column and click the right arrow to move it to the Selected column.
   - **Copy** **Options:** Select one of the following:
     
     - Delete all records in destination before copying the records: Select to delete all resource records in the destination zone before the records are copied.
     - Overwrite existing records: Select to overwrite existing resource records that have the same domain name owners as the records being copied.
3. Click **Copy** **&** **Close**.

> **warning**
>
> ### Note
> 
> When you copy resource records between zones and there are pending scheduled tasks associated with these records, the appliance allows the copying of zone records before it executes the scheduled tasks.
