---
title: "Deleting Fixed Addresses"
source: "/space/nios90/1321175279"
pageId: "1321175279"
---
To delete a fixed address within the DHCP range:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* -&gt; *fixed_address* checkbox or checkboxes. You cannot delete multiple fixed addresses at the same time if the authority for one of the fixed addresses is delegated to a Cloud Platform Appliance.
2. Select **Delete** from the **Delete** drop-down list.
3. In the *Delete* *Confirmation* dialog box, do the following:
   
   - **Delete** **associated** **leases** **with** **the** **fixed** **address** **(selected** **fixed** **IP** **address)**: When you clear this checkbox and click **Yes**, the appliance changes the status of the associated leases from **Static** to **Active**. When you select this checkbox and click **Yes**, the appliance deletes all the leases associated with the fixed address.

> **warning**
>
> ### Note
> 
> NIOS removes all the static leases associated with a fixed address when you delete a fixed address out of the DHCP range, regardless of the selection of the **Delete associated leases with the fixed address (selected fixed IP address)** checkbox in the *Delete Confirmation* dialog box.

To schedule the fixed address deletion:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* -&gt;* fixed_address* checkbox.
2. Select **Schedule** **Delete** from the **Delete** drop-down list.
3. In the *Schedule* *Deletion* dialog box, complete the following:
   
   - **Delete** **Now**: Select this to delete the object upon clicking **Delete** **Now**.
   - **Delete** **Later**: Select this to schedule the deletion at a later date and time. Complete the following:
     
     - **Date**: Enter the date in YYYY-MM-DD (year-month-day) format. The appliance displays today's date. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter the time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
     - **Time** **Zone**: Select a time zone for the scheduled date and time from the drop-down list. This field displays the time zone of the browser that the admin uses to log in to Grid Manager.
   - **Delete** **associated** **leases** **with** **the** **fixed** **address**: Select this checkbox to delete all the leases associated with the fixed address.
4. Click **Schedule** **Deletion**.

The appliance performs the deletion at the scheduled date and time, and puts all deleted objects in the Recycle Bin, if enabled. You can restore the objects if necessary.
