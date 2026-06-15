---
title: "Importing Multiple Action CSV file"
source: "/space/nios90/280791008"
pageId: "280791008"
---
When you import data, you can include multiple actions, such as add, modify, and delete, in one single CSV file. The multiple action CSV import file contains multiple types of objects with its headers and data rows listed in the order of their dependency hierarchy.  
The CSV import option supports insert, merge/override and delete operations. To combine these operations together in a single CSV file, you must specify an optional **IMPORT-ACTION** column in the CSV import file. The column value for each data row describes the type of action that the appliance supports for the respective row. The action values include the following: **I** (Insert), **M** (Merge), **O** (Override), **IM** (Insert + Merge), **IO** (Insert + Override), **D** (Delete).  
Note that you must specify appropriate values in the **IMPORT-ACTION** column for each row to perform a multiple action CSV import. The appliance performs the respective operation when you specify **I**, **M**, **O**, **D**, in the  
**IMPORT-ACTION** column. When you specify **IM** or **IO**, the appliance first checks if the corresponding object exists. If it exists, the appliance performs the merge or override operation accordingly. If the object does not exist, you must first perform the insert operation to add the data.

> **warning**
>
> **Note**
> 
> When you choose the **Custom** option, the appliance verifies whether the **IMPORT-ACTION** column is present in the imported CSV file. If the **IMPORT-ACTION** column is empty for a data row, then that data row is considered invalid and the appliance displays an error message. If you choose **Continue** **on** **Error**, then the CSV import process continues.

In the list of *[CSV Supported Objects for Export/Import](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/importing-multiple-action-csv-file/list-of-all-csv-supported-objects-for-export-imp)*, the objects are listed in the order of their dependency. The least dependent objects are displayed at the top.
