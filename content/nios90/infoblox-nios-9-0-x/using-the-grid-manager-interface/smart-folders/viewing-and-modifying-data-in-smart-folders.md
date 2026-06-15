---
title: "Viewing and Modifying Data in Smart Folders"
source: "/space/nios90/280401525"
pageId: "280401525"
---
After you set up a smart folder, the appliance searches for matching objects based on the filter criteria you specified for the folder. Grid Manager also groups the objects by the Group By rules you specify. If you select to include objects with no attribute values, the appliance may take longer to process the results. Each smart folder you create can contain up to 2,000 objects. When the number of objects exceeds 2,000, Grid Manager sorts and displays the first 2,000 objects and shows a message at the top of the panel. In this case, you may want to redefine your filter criteria to further refine the filtered data in your smart folders.  
  
Grid Manager displays smart folders hierarchically in a tree view based on your Group By rules as follows:

- Smart Folder section in the Finder panel.
- Selectors from which you can select a smart folder.

In the smart folder list panel however, Grid Manager displays all the smart folders in a flat list. You can modify some of the data in the table. Double-click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*About the Grid Manager Interface*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).  
  
In the smart folder data panel, Grid Manager displays the first hierarchical level of the smart folder based on your Group By rules. If you do not configure any Group By rules, Grid Manager displays all the objects in the results table. If you select to include objects with no attribute values, Grid Manager also includes these objects in the hierarchical view. Depending on your Group By rules, you can view detailed information about the objects by clicking the object link and drilling down to the lowest hierarchical level, and then opening an object. To go back to a previous hierarchical view, click the link of the corresponding level in the breadcrumb.

To view detailed information about an object, complete the following:

1. In the Smart Folder data panel, click the object link until you drill down to the last hierarchical level of the folder.
2. Grid Manager displays the following information:
   
   - **Name**: The name or IP address of the object.
   - **Comment**: Information about the object.
   - **Type**: The object type.
   - **Site**: The site to which the object belongs. This is one of the predefined extensible attributes.  
     You can also select other available extensible attributes for display, and sort the data in ascending or descending order by column.
3. Select an object checkbox, and then perform one of the following:
   
   - Click the Open icon to display the data in the network list or IP address list.
   - Click the Edit icon to modify or schedule the modification of the object configuration. Grid Manager displays the corresponding editor depending on the object you select.
   - Click the Delete icon to delete the object or click the Schedule Deletion icon to schedule the deletion of the object.

You can also print or export the data in this panel. For information, see [*Using the Grid Manager Interface*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface).
