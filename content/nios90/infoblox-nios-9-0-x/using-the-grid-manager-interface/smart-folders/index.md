---
title: "Smart Folders"
source: "/space/nios90/280757969"
pageId: "280757969"
---
Use smart folders to organize your core network services data. Depending on your administrative roles and business needs, you can filter your data by object types, names, extensible attributes, and discovered data such as conflicts, unmanaged data, or the virtual entity data, and then place the filtered results in a smart folder. You can also group the filtered results by defining up to 10 extensible attributes as the Group By rules. For example, you can create a smart folder that contains all the networks you manage in Belgium, and then group the networks by building number, as illustrated in the figure below.  
Once you set up a smart folder, the appliance displays up-to-date information based on your filter and grouping criteria each time you access the folder. You can also view and modify object information in the folder. For information, see [*Viewing and Modifying Data in Smart Folders*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/viewing-and-modifying-data-in-smart-folders). With smart folders, you can organize your data in a meaningful way and quickly obtain the information you need to perform specific tasks without searching the entire database.

*Creating Smart Folders*

*[drawio]*

Before you set up your smart folders, decide how you want to organize your data. You can specify search and Group By criteria to help you group information in a meaningful way. You can also decide whether you want to include objects that do not contain attribute values when you use the Group By criteria to group filtered data by extensible attributes. For information, see [*Creating Smart Folders*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/creating-smart-folders). Note that a smart folder becomes invalid when you delete an extensible attribute that the folder uses as a filter or Group By criterion. You must redefine the extensible attribute and reconfigure the folder criteria to validate the smart folder.  
In Grid Manager, you can create smart folders in both the Global Smart Folders and My Smart Folders panels. In Global Smart Folders, you can create smart folders to which other administrators can create links. Only administrators with superuser accounts can create, edit, and delete global smart folders. You can create personal folders as well as links to global smart folders in My Smart Folders. For information, see [*My Smart Folders and Predefined Smart Folders*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/my-smart-folders-and-predefined-smart-folders).  
Each smart folder you create can contain up to 2,000 objects. When the number of objects exceeds 2,000, Grid Manager sorts and displays the first 2,000 objects only. It also displays a warning message at the top of the panel. In this case, you may want to redefine your filter criteria to further refine the filtered data in your smart folders.  
  
To create smart folders, follow these procedures:

1. Determine how you want to organize your core network services data.
2. Identify the fields that you want to use to group networks or define extensible attributes for the data that you want to track. For information about extensible attributes, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
3. Create smart folders in either the My Smart Folders or Global Smart Folders panel. For information, see [*Creating Smart Folders*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/creating-smart-folders).

> **warning**
>
> ### Note
> 
> Infoblox strongly recommends that you use **Type** as one of the filter criteria to improve system performance.

## Global Smart Folders

You can create global smart folders to share among administrators. You must log in as a superuser account to create, edit, and delete global smart folders. All other users have read-only access to global smart folders. You can create as many folders as you need in Global Smart Folders, but Grid Manager displays a maximum of 500 smart folders in the list panel. You can also save a local copy of an existing folder, depending on your administrative permissions. For information, see [*Saving Smart Folders Data*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/saving-smart-folders-data).  
Grid Manager displays a list of global smart folders in the list panel.  
When you log in as a superuser and mouse over a global smart folder, the following icons appear:

- **Information**: Displays information about the selected smart folder. Information includes comments and filter criteria for the folder. It also displays the Group By rules.
- **Edit**: Click this icon to edit the definition and filter criteria for the smart folder.
- **Create** **link**: Click this icon to create a link to the smart folder. The link to this folder is placed in My Smart Folders.
- **Delete**: Click this icon to delete the smart folder. This operation does not affect the objects that are in the folder. Only the smart folder is deleted.
