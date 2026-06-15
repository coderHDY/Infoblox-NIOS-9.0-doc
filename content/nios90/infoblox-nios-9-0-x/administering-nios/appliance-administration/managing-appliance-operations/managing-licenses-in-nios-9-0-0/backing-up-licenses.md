---
title: "Backing Up Licenses"
source: "/space/nios90/1495400974"
pageId: "1495400974"
---
You can back up all static licenses, dynamic licenses added in the license pool container, and Grid-wide licenses in case you need to re-install them at a later time. Infoblox recommends backing up the licenses before removing any of them.

> **warning**
>
> **Note**
> 
> Dynamic licenses are not exported to this file. Dynamic licenses are automatically released and returned to the license pool on the Grid Master when a member leaves the Grid. Unallocated dynamic Licenses are available for allocations.

When you back up the licenses, Grid Manager creates a CSV file that lists the following information for each license: serial number, hardware ID, license type, end date, and license string.  
To back up licenses:

1. From the **Infoblox** **Grid** tab, select the **Licenses** tab.
2. Click **Export** **All** **Licenses** in the toolbar. Grid Manager generates a CSV file that contains all the licenses. Depending on the browser you use, you can then open the file or save it to a specified location.
