---
title: "Deleting Reporting Data"
source: "/space/nios90/1366983702"
pageId: "1366983702"
---
To selectively delete reporting data from NIOS, you must first enable the `delete` permission for the local admin with superuser permission by using the *set reporting_user_capabilities* command in the NIOS CLI. Then, complete the following:

1. From the **Reporting** tab, select the **Search** tab.
2. Enter the search criteria in the search bar that returns the events you want to delete and click the **Search** icon.
3. After you confirm that the search results contain only those events that you want to delete, pipe the search to the `delete` command.
   
   Example:   
   `&lt;Splunk_Query&gt; | delete`
   
   For more information, see the Splunk documentation.

> **warning**
>
> ### Notes
> 
> - You cannot retrieve the data once it is deleted.
> - You cannot visualize the deleted data.
> - The deleted data does not reduce any disk space.
> - Frequent deletion of data may affect the search performance.
> - You must not delete any of the `ib_threatdb*` index files as it results in loss of threat events data.
